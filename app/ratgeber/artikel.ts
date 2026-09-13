import erbpacht from "./inhalte/erbpacht.json";
import erbbauzins from "./inhalte/erbbauzins.json";
import niessbrauchWohnrecht from "./inhalte/niessbrauch-wohnrecht.json";
import maklerkostenBeimImmobilienkauf from "./inhalte/maklerkosten-beim-immobilienkauf.json";
import eigenbedarfsklage from "./inhalte/eigenbedarfsklage.json";
import denkmalAfa from "./inhalte/denkmal-afa.json";
import abschreibungBeiImmobilien from "./inhalte/abschreibung-bei-immobilien.json";
import kaufnebenkosten from "./inhalte/kaufnebenkosten.json";
import notarkostenBeimImmobilienkauf from "./inhalte/notarkosten-beim-immobilienkauf.json";
import grundschuld from "./inhalte/grundschuld.json";
import leistungenMakler from "./inhalte/leistungen-makler.json";

// Jeder Ratgeber liegt als eigene JSON-Datei in ./inhalte – die Sitemap liest
// das Änderungsdatum je Datei, damit nicht alle Artikel dasselbe lastmod tragen.

export type Block = {
  h2?: string;
  p?: string;
  ul?: string[];
  ol?: string[];
  table?: string[][];
};

export type Artikel = {
  slug: string;
  titel: string;
  metaTitel: string;
  beschreibung: string;
  lead: string;
  kurz: string;
  stand: string;
  bloecke: Block[];
  verwandt?: string[];
  faq?: string[][];
  rang?: number;
};

const alle: Artikel[] = [erbpacht, erbbauzins, niessbrauchWohnrecht, maklerkostenBeimImmobilienkauf, eigenbedarfsklage, denkmalAfa, abschreibungBeiImmobilien, kaufnebenkosten, notarkostenBeimImmobilienkauf, grundschuld, leistungenMakler];

// Reihenfolge nach Rang (Platzierung der Vorlage), ohne Rang ans Ende.
export const artikel: Artikel[] = [...alle].sort((a, b) => (a.rang ?? 99) - (b.rang ?? 99));

export const autoren = [
  { name: "Patrick Stark", funktion: "Geschäftsführer" },
  { name: "Julian Hoffmann", funktion: "Geschäftsführer" },
];

export const findeArtikel = (slug: string) => artikel.find((a) => a.slug === slug);

export const datumLang = (iso: string) =>
  new Date(`${iso}T00:00:00Z`).toLocaleDateString("de-DE", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });
