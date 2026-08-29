"use client";

import { useEffect, useState } from "react";

const KEY = "external_media_consent";
const read = () => { try { return localStorage.getItem(KEY); } catch { return null; } };
const write = (value: string) => { try { localStorage.setItem(KEY, value); } catch { /* Privatmodus */ } };

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

export default function Consent(){
  const [decision, setDecision] = useState<string | null | undefined>(undefined);

  useEffect(() => {
    const stored = read();
    setDecision(stored);
    if (stored === "granted") loadExternalMedia(); else markBlocked();
    const reset = (event: Event) => {
      const target = event.target as HTMLElement | null;
      if (target?.closest("[data-consent-reset]")) { write(""); setDecision(null); }
    };
    document.addEventListener("click", reset);
    return () => document.removeEventListener("click", reset);
  }, []);

  if (decision === undefined || decision === "granted" || decision === "denied") return null;

  return <div className="consent-banner" role="dialog" aria-live="polite" aria-label="Externe Inhalte">
    <p>Auf dieser Website werden Objektbilder von einem externen Bildserver (Contentful) nachgeladen. Dabei wird Ihre IP-Adresse an den Anbieter übertragen. Wir setzen keine Cookies und keine Analysedienste ein. Mehr dazu in der <a href="/datenschutz/">Datenschutzerklärung</a>.</p>
    <div className="consent-actions">
      <button type="button" className="consent-btn decline" onClick={() => { write("denied"); setDecision("denied"); markBlocked(); }}>Ablehnen</button>
      <button type="button" className="consent-btn accept" onClick={() => { write("granted"); setDecision("granted"); loadExternalMedia(); }}>Bilder laden</button>
    </div>
  </div>;
}
