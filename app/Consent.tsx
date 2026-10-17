"use client";

import { useEffect, useState } from "react";

// Objektfotos liegen seit 17.10.2026 im eigenen Export (scripts/fremdinhalte-lokal.py),
// dafuer braucht es keine Einwilligung mehr. Gefragt wird nur nach der Statistik.
const STATISTIK_KEY = "statistik-einwilligung";
const MESS_ID = "G-SL5KFW4LJC";

const read = (key: string) => { try { return localStorage.getItem(key); } catch { return null; } };
const write = (key: string, value: string) => { try { localStorage.setItem(key, value); } catch { /* Privatmodus */ } };

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
  // gtag.js wertet nur arguments-Objekte aus. Ein Array (Rest-Parameter) im
  // dataLayer wird still ignoriert - dann laedt das Skript, sendet aber nie.
  const gtag = function(){
    // eslint-disable-next-line prefer-rest-params
    w.dataLayer!.push(arguments);
  } as (...args: unknown[]) => void;
  w.gtag = gtag;
  gtag("js", new Date());
  gtag("config", MESS_ID);
}

// Ohne Zustimmung duerfen keine GA-Cookies uebrig sein (z. B. nach einem Widerruf).
function loescheStatistikCookies(){
  const host = location.hostname.replace(/^www\./, "");
  document.cookie.split(";").forEach((c) => {
    const name = c.split("=")[0].trim();
    if (!name.startsWith("_ga")) return;
    ["", "; domain=" + host, "; domain=." + host].forEach((d) => {
      document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/" + d;
    });
  });
}

export default function Consent(){
  // undefined = noch nicht gelesen, null = noch nicht entschieden
  const [decision, setDecision] = useState<string | null | undefined>(undefined);

  useEffect(() => {
    const statistik = read(STATISTIK_KEY);
    if (statistik === "ja") ladeStatistik(); else loescheStatistikCookies();
    setDecision(statistik === "ja" || statistik === "nein" ? "entschieden" : null);

    // Widerruf: Link "Cookie-Einstellungen" im Footer und Knopf in der Datenschutzerklaerung.
    const reset = (event: Event) => {
      const target = event.target as HTMLElement | null;
      if (!target?.closest("[data-consent-reset]")) return;
      event.preventDefault();
      write(STATISTIK_KEY, "");
      (window as unknown as Record<string, unknown>)["ga-disable-" + MESS_ID] = true;
      loescheStatistikCookies();
      location.reload();
    };
    document.addEventListener("click", reset);
    return () => document.removeEventListener("click", reset);
  }, []);

  if (decision === undefined || decision === "entschieden") return null;

  const annehmen = () => { write(STATISTIK_KEY, "ja"); setDecision("entschieden"); ladeStatistik(); };
  const ablehnen = () => { write(STATISTIK_KEY, "nein"); setDecision("entschieden"); };

  return <div className="consent-banner" role="dialog" aria-live="polite" aria-label="Statistik">
    <p>Wir würden gern mit <strong>Google Analytics</strong> messen, welche Seiten gelesen werden. Das setzt Cookies und überträgt Daten an Google. Ohne Ihre Zustimmung geschieht nichts davon – die Seite funktioniert vollständig, Fotos und Schriften liegen auf unserem eigenen Server. Mehr in der <a href="/datenschutz/">Datenschutzerklärung</a>.</p>
    <div className="consent-actions">
      <button type="button" className="consent-btn decline" onClick={ablehnen}>Nur notwendige</button>
      <button type="button" className="consent-btn accept" onClick={annehmen}>Einverstanden</button>
    </div>
  </div>;
}
