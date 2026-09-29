/**
 * update-listings.mjs
 * Holt die Evernest-Objekte (aktiv und verkauft) im Bergisch Gladbacher
 * Kartenausschnitt per POST auf https://www.evernest.com/api/properties/ und
 * schreibt daraus app/immobilien.ts.
 *
 * Bis zum 29.09.2026 war app/immobilien.ts ein von Hand gezogener Stand vom
 * 30.08.2026 – verkaufte oder neue Objekte tauchten nicht auf. Muster von
 * leverkusen-makler.de (scripts/update-listings.mjs), laeuft taeglich ueber
 * .github/workflows/update-listings.yml.
 *
 * Reihenfolge wie in der Handfassung: Entfernung zur Stadtmitte
 * (50,9924 / 7,1287) aufsteigend, die MAX_LISTINGS naechsten Objekte.
 * "place" ist die vollstaendige Evernest-Lageangabe ("Bergisch Gladbach-
 * Refrath, 51427") – darauf filtert app/DistrictOffers.tsx.
 *
 * Aufruf:  node scripts/update-listings.mjs [--dry]
 */

import { readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ZIEL = join(__dirname, '..', 'app', 'immobilien.ts');

const API = 'https://www.evernest.com/api/properties/';
const UA = 'Mozilla/5.0 (compatible; BergischGladbachMaklerSite/1.0)';
const IMG_PARAMS = '?w=960&h=600&fit=fill&fm=webp&q=82';

// Stadtmitte Bergisch Gladbach, wie in der bisherigen Handfassung.
const CENTER = { lat: 50.9924, lng: 7.1287 };
// Der Kasten ist bewusst groesser als der sichtbare Ausschnitt: Sortierung und
// Deckelung nach Entfernung bestimmen das Ergebnis, ein zu enger Kasten wuerde
// nur naheliegende Objekte am Rand verlieren.
const BOUNDS = {
  nw: { lat: 51.25, lng: 6.70 },
  ne: { lat: 51.25, lng: 7.55 },
  sw: { lat: 50.75, lng: 6.70 },
  se: { lat: 50.75, lng: 7.55 },
};
const MAX_LISTINGS = 50;
// Unter dieser Zahl stimmt etwas mit der API nicht — dann lieber abbrechen und
// den letzten guten Stand stehen lassen, als die Galerie leer zu raeumen.
const MIN_PLAUSIBEL = 20;

const STATUS_TEXT = { sold: 'Verkauft', reserved: 'Reserviert' };

function slug(s) {
  return s.toLowerCase()
    .replace(/ä/g, 'ae').replace(/ö/g, 'oe').replace(/ü/g, 'ue').replace(/ß/g, 'ss')
    .replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

function entfernungKm(a, b) {
  const rad = (d) => (d * Math.PI) / 180;
  const dLat = rad(b.lat - a.lat);
  const dLng = rad(b.lng - a.lng);
  const h = Math.sin(dLat / 2) ** 2 +
    Math.cos(rad(a.lat)) * Math.cos(rad(b.lat)) * Math.sin(dLng / 2) ** 2;
  return 6371 * 2 * Math.asin(Math.sqrt(h));
}

function preis(item) {
  const daten = item.exportedPropertyData?.data ?? {};
  const wert = daten.priceFrom ?? daten.price ?? null;
  if (item.hidePrice || wert == null) return 'Preis auf Anfrage';
  const formatiert = `${Number(wert).toLocaleString('de-DE')} €`;
  return daten.priceFrom != null ? `ab ${formatiert}` : formatiert;
}

function aufbereiten(item) {
  const id = item.sys?.id;
  const bild = item.featuredImage?.url;
  if (!id || !bild || item.lat == null || item.lng == null) return null;
  const ort = (item.displayAddress ?? '').trim();
  if (!ort) return null;
  return {
    place: ort,
    price: preis(item),
    status: STATUS_TEXT[item.salesStatus] ?? '',
    image: `${bild}${IMG_PARAMS}`,
    alt: item.featuredImage?.description || `Immobilienangebot in ${ort}`,
    url: `https://www.evernest.com/de/listing/${id}/`,
    _km: entfernungKm(CENTER, { lat: item.lat, lng: item.lng }),
  };
}

function datei(objekte, stand) {
  const eintraege = objekte.map((o) => {
    const { _km, ...rest } = o;
    return '  ' + JSON.stringify(rest, null, 2).split('\n').join('\n  ');
  }).join(',\n');

  return `export type Property = {
  place: string;
  price: string;
  status: string;
  image: string;
  alt: string;
  url: string;
};

// AUTOMATISCH ERZEUGT — nicht von Hand aendern.
// Evernest-Angebote und verkaufte Referenzen im Umkreis von Bergisch Gladbach,
// abgerufen am ${stand}. Reihenfolge: Entfernung zur Stadtmitte
// (${CENTER.lat} / ${CENTER.lng}) aufsteigend, ${MAX_LISTINGS} naechste Objekte.
// Aktualisierung: scripts/update-listings.mjs, taeglich ueber
// .github/workflows/update-listings.yml.
export const properties: Property[] = [
${eintraege}
];
`;
}

async function main() {
  const dry = process.argv.includes('--dry');

  const antwort = await fetch(API, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'User-Agent': UA },
    body: JSON.stringify({ bounds: BOUNDS, preview: false }),
  });
  if (!antwort.ok) throw new Error(`Evernest-API HTTP ${antwort.status}`);

  const roh = (await antwort.json())?.searchResults ?? [];
  console.log(`API liefert ${roh.length} Objekte im Kasten`);
  if (roh.length < MIN_PLAUSIBEL) {
    throw new Error(`Nur ${roh.length} Objekte — unter der Plausibilitaetsgrenze von ${MIN_PLAUSIBEL}. Datei bleibt unveraendert.`);
  }

  const gesehen = new Set();
  const objekte = roh
    .map((item) => aufbereiten(item))
    .filter((o) => o && !gesehen.has(o.url) && gesehen.add(o.url))
    .sort((a, b) => a._km - b._km)
    .slice(0, MAX_LISTINGS);

  const inBgl = objekte.filter((o) => o.place.startsWith('Bergisch Gladbach-'));
  const aktiv = objekte.filter((o) => !o.status).length;
  console.log(`${objekte.length} Objekte uebernommen (${aktiv} aktiv, ${objekte.length - aktiv} verkauft/reserviert), davon ${inBgl.length} in Bergisch Gladbach`);

  const stand = new Date().toLocaleDateString('de-DE', { day: '2-digit', month: '2-digit', year: 'numeric' });
  const inhalt = datei(objekte, stand);

  if (dry) {
    console.log('\n--dry: app/immobilien.ts nicht geschrieben');
    return;
  }
  await writeFile(ZIEL, inhalt, 'utf8');
  console.log('\napp/immobilien.ts geschrieben');
}

main().catch((fehler) => {
  console.error('Abbruch:', fehler.message);
  process.exit(1);
});
