// Google-Ads-Klickkennung.
//
// Auto-Tagging haengt ?gclid= an die Ziel-URL der Anzeige. Die Anzeigen fuehren
// auf die Stadtteilseiten, das Kontaktformular steht aber nur auf der Startseite.
// Weil Next.js clientseitig navigiert, bleibt diese Modulvariable ueber den
// Seitenwechsel hinweg erhalten - es wird nichts gespeichert, kein Cookie
// gesetzt und nichts an Dritte gesendet. Ohne Anzeigenklick bleibt sie leer.
let gemerkt = "";

export function gclidMerken(): void {
  if (typeof window === "undefined") return;
  const gefunden = new URLSearchParams(window.location.search).get("gclid");
  if (gefunden) gemerkt = gefunden;
}

export function gclidLesen(): string {
  return gemerkt;
}
