import erbpacht from "./inhalte/erbpacht.json";

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
};

export const artikel: Artikel[] = [erbpacht];

export const autoren = [
  { name: "Patrick Stark", funktion: "Geschäftsführer" },
  { name: "Julian Hoffmann", funktion: "Geschäftsführer" },
];

export const findeArtikel = (slug: string) => artikel.find((a) => a.slug === slug);

export const datumLang = (iso: string) =>
  new Date(`${iso}T00:00:00Z`).toLocaleDateString("de-DE", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });
