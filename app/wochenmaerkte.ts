// Wochenmärkte je Stadtteil, Stand 09.10.2026.
// Orte und Tage: Stadt Bergisch Gladbach, https://www.bergischgladbach.de/wochenmaerkte.aspx
// Uhrzeiten: Wochenmarkt Gladbach, https://www.wochenmarkt-gl.de/ (von der Stadtseite verlinkt).
// Zuordnung nach Ortsangabe der Stadt – die OSM-Stadtteilgrenzen in BGL sind unzuverlässig
// (Konrad-Adenauer-Platz landet dort in Hebborn, ist laut Wikipedia/Stadt aber Stadtmitte).

export type Wochenmarkt = { ort: string; zeiten: string };

export const wochenmarktQuelle = "https://www.bergischgladbach.de/wochenmaerkte.aspx";

export const wochenmaerkte: Record<string, Wochenmarkt[]> = {
  stadtmitte: [{ ort: "Konrad-Adenauer-Platz", zeiten: "mittwochs und samstags 7–13 Uhr" }],
  refrath: [
    { ort: "Marktplatz Dolmanstraße", zeiten: "freitags 7–13 Uhr" },
    { ort: "Biomarkt, Peter-Bürling-Platz", zeiten: "dienstags 7–13 Uhr" },
  ],
  bensberg: [{ ort: "Schloßstraße (Fußgängerzone)", zeiten: "donnerstags 7–13 Uhr" }],
  paffrath: [{ ort: "Nußbaumer Straße", zeiten: "donnerstags 7–13 Uhr" }],
  schildgen: [{ ort: "Altenberger-Dom-Straße", zeiten: "freitags 7–13 Uhr" }],
};
