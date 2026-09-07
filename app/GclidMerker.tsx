"use client";

import { useEffect } from "react";
import { gclidMerken, gclidLesen } from "./gclid";

// Merkt die Google-Ads-Klickkennung und traegt sie ueber Seitenwechsel hinweg.
//
// Die Anzeigen fuehren auf die Stadtteilseiten, das Kontaktformular steht aber
// nur auf der Startseite. Der Weg dorthin ist ein *voller* Seitenwechsel: die
// internen Verweise sind gewoehnliche <a>-Tags, kein next/link. Dabei geht jede
// Variable im Speicher verloren - die Modulvariable allein reicht also nicht.
// Deshalb haengt ein Klick-Listener die Kennung an interne Ziele an, kurz bevor
// der Browser ihnen folgt. Er laeuft in der Capture-Phase, damit ein spaeteres
// Neuzeichnen durch React ihn nicht aushebelt.
//
// Gespeichert wird nichts: kein Cookie, kein localStorage, kein sessionStorage.
// Ohne Anzeigenklick passiert hier gar nichts.
export default function GclidMerker() {
  useEffect(() => {
    gclidMerken();
    const gclid = gclidLesen();
    if (!gclid) return;

    function beiKlick(ereignis: MouseEvent) {
      const element = ereignis.target as HTMLElement | null;
      const verweis = element?.closest?.("a[href]") as HTMLAnchorElement | null;
      if (!verweis) return;
      let ziel: URL;
      try {
        ziel = new URL(verweis.getAttribute("href") || "", window.location.href);
      } catch {
        return;
      }
      if (ziel.origin !== window.location.origin) return;
      if (ziel.searchParams.has("gclid")) return;
      ziel.searchParams.set("gclid", gclid);
      verweis.setAttribute("href", ziel.pathname + ziel.search + ziel.hash);
    }

    document.addEventListener("click", beiKlick, true);
    return () => document.removeEventListener("click", beiKlick, true);
  }, []);
  return null;
}
