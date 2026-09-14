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
import grundschuldLoeschen from "./inhalte/grundschuld-loeschen.json";
import wirtschaftsplan from "./inhalte/wirtschaftsplan.json";
import heizungsgesetzAenderung from "./inhalte/heizungsgesetz-aenderung.json";
import smarthome from "./inhalte/smarthome.json";
import immobilienverkauf from "./inhalte/immobilienverkauf.json";
import grundstuecksmarktberichtBergischGladbach from "./inhalte/grundstuecksmarktbericht-bergisch-gladbach.json";
import flurkarte from "./inhalte/flurkarte.json";
import baulastenverzeichnis from "./inhalte/baulastenverzeichnis.json";
import zwangsversteigerung from "./inhalte/zwangsversteigerung.json";

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

const alle: Artikel[] = [erbpacht, erbbauzins, niessbrauchWohnrecht, maklerkostenBeimImmobilienkauf, eigenbedarfsklage, denkmalAfa, abschreibungBeiImmobilien, kaufnebenkosten, notarkostenBeimImmobilienkauf, grundschuld, leistungenMakler, grundschuldLoeschen, wirtschaftsplan, heizungsgesetzAenderung, smarthome, immobilienverkauf, grundstuecksmarktberichtBergischGladbach, flurkarte, baulastenverzeichnis, zwangsversteigerung];

// Reihenfolge nach Rang (Platzierung der Vorlage), ohne Rang ans Ende.
export const artikel: Artikel[] = [...alle].sort((a, b) => (a.rang ?? 99) - (b.rang ?? 99));

export const autoren = [
  { name: "Patrick Stark", funktion: "Geschäftsführer" },
  { name: "Julian Hoffmann", funktion: "Geschäftsführer" },
];

export const findeArtikel = (slug: string) => artikel.find((a) => a.slug === slug);

export const datumLang = (iso: string) =>
  new Date(`${iso}T00:00:00Z`).toLocaleDateString("de-DE", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });
