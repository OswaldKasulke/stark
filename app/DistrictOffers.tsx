import { properties, alleObjekte } from "./immobilien";
import ImmobilienGalerie from "./ImmobilienGalerie";

function uniqueProperties() {
  const unique = new Map<string, (typeof properties)[number]>();

  for (const property of properties) {
    const key = `${property.place}|${property.price}|${property.image}`;
    unique.set(key, property);
  }

  return [...unique.values()];
}

function unique(items: (typeof properties)[number][]) {
  const map = new Map<string, (typeof properties)[number]>();
  for (const item of items) map.set(`${item.place}|${item.price}|${item.image}`, item);
  return [...map.values()];
}

// Angebote zuerst, dann reservierte, dann verkaufte Referenzen.
function sortiert(items: (typeof properties)[number][]) {
  const rang = (status: string) => (status === "" ? 0 : status === "Reserviert" ? 1 : 2);
  return [...items].sort((a, b) => rang(a.status) - rang(b.status));
}

// Lageangabe passt zum Ort: "Overath, 51491" oder "Overath-Vilkerath, 51491".
function imOrt(place: string, ort: string) {
  return place.startsWith(`${ort},`) || place.startsWith(`${ort}-`);
}

// Block für die Ortsseiten (Overath, Odenthal, Kürten …). Erscheint nur, wenn
// Evernest dort ein Angebot oder eine verkaufte Referenz führt.
export function StandortOffers({ name, ort }: { name: string; ort: string }) {
  const items = sortiert(unique(alleObjekte).filter((property) => imOrt(property.place, ort)));
  if (!items.length) return null;
  const aktiv = items.filter((property) => property.status !== "Verkauft").length;
  return (
    <section className="properties section district-offers" id="angebote">
      <div className="section-head">
        <div>
          <p className="eyebrow">Immobilienangebote & Referenzen</p>
          <h2>Immobilien in {name}</h2>
        </div>
        <p>{aktiv ? `Evernest-Angebote und verkaufte Referenzen mit der Lageangabe ${name}.` : `In ${name} ist derzeit kein Angebot offen. Diese Objekte mit der Lageangabe ${name} sind bereits verkauft.`}</p>
      </div>
      <ImmobilienGalerie items={items} moreLink={false} />
      <p className="listing-more"><a className="button dark" href="https://evernest.com/de/search/?lat=50.9924&lng=7.1287&zoom=11" target="_blank" rel="noreferrer">Alle Immobilien im Umkreis ansehen</a> <a className="button dark" href="/suchprofil/">Suchprofil anlegen</a></p>
    </section>
  );
}

export function bergischGladbachOfferCount() {
  return uniqueProperties().filter((property) => property.place.startsWith("Bergisch Gladbach-")).length;
}

export default function DistrictOffers({ district }: { district: string }) {
  const all = uniqueProperties();
  const local = sortiert(unique(alleObjekte).filter((property) => property.place.startsWith(`Bergisch Gladbach-${district},`)));
  const fallback = all.filter((property) => property.place.startsWith("Bergisch Gladbach-")).slice(0, 3);
  const offers = local.length ? local : fallback;
  const localOffers = local.length > 0;

  return (
    <section className="properties section district-offers" id="angebote">
      <div className="section-head">
        <div>
          <p className="eyebrow">Immobilienangebote & Referenzen</p>
          <h2>{localOffers ? `Immobilien in ${district}` : "Angebote aus Bergisch Gladbach und Umgebung"}</h2>
        </div>
        <p>{localOffers ? `Evernest-Angebote und verkaufte Referenzen mit der Lageangabe Bergisch Gladbach-${district}.` : `Derzeit ist in ${district} kein eigenes Angebot oder keine verkaufte Referenz in der Evernest-Suche geführt. Hier sehen Sie Immobilien aus dem näheren Marktumfeld.`}</p>
      </div>
      <ImmobilienGalerie items={offers} moreLink={false} />
      <p className="listing-more"><a className="button dark" href="https://evernest.com/de/search/?lat=50.9924&lng=7.1287&zoom=11" target="_blank" rel="noreferrer">Alle Immobilien im Umkreis ansehen</a></p>
    </section>
  );
}
