"use client";

import { useEffect, useRef, useState } from "react";

const MEDIA = "external_media_consent";
const ANALYTICS = "statistik-einwilligung";
const VERSION_KEY = "privacy_settings_version";
const VERSION = "2026-09-30-1";
const MESS_ID = "G-SL5KFW4LJC";
const read = (key: string) => { try { return localStorage.getItem(key); } catch { return null; } };
const write = (key: string, value: string) => { try { localStorage.setItem(key, value); } catch { /* Reject by default on next load. */ } };
const current = () => read(VERSION_KEY) === VERSION;
type AnalyticsWindow = Window & { __gaGeladen?: boolean; dataLayer?: unknown[]; gtag?: (...args: unknown[]) => void };

function loadMedia() {
  document.querySelectorAll<HTMLImageElement>("img[data-src]").forEach(image => {
    image.dataset.consentSource = image.dataset.src;
    image.src = image.dataset.src!;
    delete image.dataset.src;
    image.classList.remove("media-blocked");
  });
}
function clearCookies() {
  const names = document.cookie.split(";").map(x => x.trim().split("=")[0]).filter(x => /^_ga(?:_|$)/.test(x));
  const parts = location.hostname.split(".");
  const domains = ["", ...parts.map((_, i) => parts.slice(i).join("."))];
  const segments = location.pathname.split("/");
  const paths = new Set(["/", ...segments.flatMap((_, i) => [segments.slice(0, i + 1).join("/"), segments.slice(0, i + 1).join("/") + "/"])]);
  for (const name of names) for (const domain of domains) for (const path of paths) {
    document.cookie = `${name}=; Max-Age=0; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=${path || "/"}${domain ? `; domain=${domain}` : ""}`;
  }
}
function stopAnalytics() {
  const w = window as AnalyticsWindow;
  (window as unknown as Record<string, unknown>)[`ga-disable-${MESS_ID}`] = true;
  w.gtag = () => {};
  if (w.dataLayer) w.dataLayer.length = 0;
  document.querySelectorAll('script[src*="googletagmanager.com/gtag/js"]').forEach(s => s.remove());
  clearCookies();
}
function startAnalytics() {
  const w = window as AnalyticsWindow;
  if (w.__gaGeladen) return;
  w.__gaGeladen = true;
  (window as unknown as Record<string, unknown>)[`ga-disable-${MESS_ID}`] = false;
  w.dataLayer = [];
  w.gtag = function () {
    if (!(window as unknown as Record<string, unknown>)[`ga-disable-${MESS_ID}`]) w.dataLayer!.push(arguments);
  };
  w.gtag("js", new Date()); w.gtag("config", MESS_ID);
  const script = document.createElement("script"); script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${MESS_ID}`;
  document.head.appendChild(script);
}

export default function Consent() {
  const [open, setOpen] = useState(false);
  const [media, setMedia] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const title = useRef<HTMLHeadingElement>(null);
  const opener = useRef<HTMLElement | null>(null);
  const focusOnOpen = useRef(false);
  useEffect(() => {
    const mediaAllowed = current() && read(MEDIA) === "granted";
    const analyticsAllowed = current() && read(ANALYTICS) === "ja";
    setMedia(mediaAllowed); setAnalytics(analyticsAllowed);
    if (mediaAllowed) loadMedia();
    else document.querySelectorAll("img[data-src]").forEach(x => x.classList.add("media-blocked"));
    if (analyticsAllowed) startAnalytics(); else stopAnalytics();
    setOpen(!current() || !["granted", "denied"].includes(read(MEDIA) || "") || !["ja", "nein"].includes(read(ANALYTICS) || ""));
    const show = (event: Event) => {
      const target = event.target as HTMLElement | null;
      if (!target?.closest("[data-privacy-open], [data-consent-reset]")) return;
      event.preventDefault(); opener.current = document.activeElement as HTMLElement;
      setMedia(current() && read(MEDIA) === "granted");
      setAnalytics(current() && read(ANALYTICS) === "ja");
      focusOnOpen.current = true; setOpen(true);
    };
    const sync = (event: StorageEvent) => {
      if (event.key !== null && ![MEDIA, ANALYTICS, VERSION_KEY].includes(event.key)) return;
      const revokeAnalytics = (!current() || read(ANALYTICS) !== "ja") && (window as AnalyticsWindow).__gaGeladen;
      const revokeMedia = (!current() || read(MEDIA) !== "granted") && document.querySelector("img[data-consent-source]");
      if (!current() || read(ANALYTICS) !== "ja") stopAnalytics();
      if (revokeAnalytics || revokeMedia) location.reload();
    };
    document.addEventListener("click", show); window.addEventListener("storage", sync);
    return () => { document.removeEventListener("click", show); window.removeEventListener("storage", sync); };
  }, []);
  useEffect(() => { if (open && focusOnOpen.current) { title.current?.focus(); focusOnOpen.current = false; } }, [open]);
  const close = () => { setOpen(false); opener.current?.focus(); };
  const save = (allowMedia: boolean, allowAnalytics: boolean) => {
    const reload = (!allowAnalytics && (window as AnalyticsWindow).__gaGeladen) || (!allowMedia && !!document.querySelector("img[data-consent-source]"));
    if (!allowAnalytics) stopAnalytics();
    write(MEDIA, allowMedia ? "granted" : "denied"); write(ANALYTICS, allowAnalytics ? "ja" : "nein"); write(VERSION_KEY, VERSION);
    setMedia(allowMedia); setAnalytics(allowAnalytics); close();
    if (reload) { location.reload(); return; }
    if (allowMedia) loadMedia();
    if (allowAnalytics) startAnalytics();
  };
  if (!open) return null;
  return <section id="privacy-settings" className="privacy-settings" role="dialog" aria-labelledby="privacy-title" onKeyDown={event => { if (event.key === "Escape") close(); }}>
    <h2 id="privacy-title" tabIndex={-1} ref={title}>Datenschutzeinstellungen</h2>
    <p>Sie entscheiden getrennt über externe Bilder und Statistik. Beide sind freiwillig. Ihre Auswahl können Sie jederzeit über „Datenschutzeinstellungen“ im Footer ändern oder widerrufen. <a href="/datenschutz/">Datenschutzerklärung</a></p>
    <label><input type="checkbox" checked={media} onChange={e => setMedia(e.target.checked)} /> Externe Bilder (Contentful) – dabei wird Ihre IP-Adresse an den Bildanbieter übertragen.</label>
    <label><input type="checkbox" checked={analytics} onChange={e => setAnalytics(e.target.checked)} /> Statistik (Google Analytics) – verwendet Cookies und überträgt Nutzungsdaten an Google.</label>
    <div className="privacy-actions">
      <button type="button" onClick={() => save(false, false)}>Alle ablehnen / widerrufen</button>
      <button type="button" onClick={() => save(media, analytics)}>Auswahl speichern</button>
      <button type="button" onClick={() => save(true, true)}>Alle akzeptieren</button>
      <button type="button" onClick={close}>Schließen</button>
    </div>
  </section>;
}
