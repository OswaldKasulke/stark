"use client";

import { useEffect, useState } from "react";

const KEY = "external_media_consent";
const STATISTIK_KEY = "statistik-einwilligung";
const MESS_ID = "G-SL5KFW4LJC";

const read = (key: string) => { try { return localStorage.getItem(key); } catch { return null; } };
const write = (key: string, value: string) => { try { localStorage.setItem(key, value); } catch { /* Privatmodus */ } };

// Externe Objektbilder tragen data-src und werden erst nach Zustimmung geladen.
function loadExternalMedia(){
  document.querySelectorAll<HTMLImageElement>("img[data-src]").forEach((image) => {
    const source = image.dataset.src;
    if (!source) return;
    image.src = source;
    delete image.dataset.src;
    image.classList.remove("media-blocked");
  });
}
function markBlocked(){
  document.querySelectorAll<HTMLImageElement>("img[data-src]").forEach((image) => image.classList.add("media-blocked"));
}

// Google Analytics wird erst nachgeladen, wenn zugestimmt wurde. Vorher entsteht
// keine Verbindung zu Google und kein Cookie - ein Consent Mode mit "denied"
// wuerde dagegen weiterhin Pings senden.
function ladeStatistik(){
  const w = window as unknown as { __gaGeladen?: boolean; dataLayer?: unknown[]; gtag?: (...args: unknown[]) => void };
  if (w.__gaGeladen) return;
  w.__gaGeladen = true;
  const skript = document.createElement("script");
  skript.async = true;
  skript.src = "https://www.googletagmanager.com/gtag/js?id=" + MESS_ID;
  document.head.appendChild(skript);
  w.dataLayer = w.dataLayer || [];
  function gtag(...args: unknown[]){ w.dataLayer!.push(args); }
  w.gtag = gtag;
  gtag("js", new Date());
  gtag("config", MESS_ID);
}

export default function Consent(){
  // undefined = noch nicht gelesen, null = noch nicht entschieden
  const [decision, setDecision] = useState<string | null | undefined>(undefined);

  useEffect(() => {
    const bilder = read(KEY);
    const statistik = read(STATISTIK_KEY);
    if (bilder === "granted") loadExternalMedia(); else markBlocked();
    if (statistik === "ja") ladeStatistik();
    // Der Banner erscheint, solange eine der beiden Entscheidungen fehlt. Die
    // Statistik-Zustimmung liegt bewusst unter einem eigenen Schluessel: eine
    // frueher erteilte Bild-Zustimmung darf nicht stillschweigend als
    // Einwilligung in die Reichweitenmessung durchgehen.
    const offen = (bilder !== "granted" && bilder !== "denied") || (statistik !== "ja" && statistik !== "nein");
    setDecision(offen ? null : "entschieden");

    const reset = (event: Event) => {
      const target = event.target as HTMLElement | null;
      if (target?.closest("[data-consent-reset]")) {
        write(KEY, ""); write(STATISTIK_KEY, ""); setDecision(null);
      }
    };
    document.addEventListener("click", reset);
    return () => document.removeEventListener("click", reset);
  }, []);

  if (decision === undefined || decision === "entschieden") return null;

  const annehmen = () => {
    write(KEY, "granted"); write(STATISTIK_KEY, "ja");
    setDecision("entschieden"); loadExternalMedia(); ladeStatistik();
  };
  const ablehnen = () => {
    write(KEY, "denied"); write(STATISTIK_KEY, "nein");
    setDecision("entschieden"); markBlocked();
  };

  return <div className="consent-banner" role="dialog" aria-live="polite" aria-label="Externe Inhalte und Statistik">
    <p>Zwei Dinge brauchen Ihre Zustimmung: Objektbilder werden von einem externen Bildserver (Contentful) nachgeladen, dabei geht Ihre IP-Adresse an den Anbieter. Und wir würden mit <strong>Google Analytics</strong> messen, welche Seiten gelesen werden — das setzt Cookies und überträgt Daten an Google. Lehnen Sie ab, geschieht nichts davon und die Seite funktioniert weiter. Mehr in der <a href="/datenschutz/">Datenschutzerklärung</a>.</p>
    <div className="consent-actions">
      <button type="button" className="consent-btn decline" onClick={ablehnen}>Nur notwendige</button>
      <button type="button" className="consent-btn accept" onClick={annehmen}>Einverstanden</button>
    </div>
  </div>;
}
