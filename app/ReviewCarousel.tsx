"use client";

import { useEffect, useRef, useState } from "react";

// Rezensions-Karussell (28.09.2026): drei Karten nebeneinander, weitere per
// Pfeil oder Wischen. Die Daten kommen aus app/google-reviews.json, die der
// Workflow "Google-Rezensionen" zweimal pro Woche ergaenzt.
type Review = { author: string; text: string; stars: number; source_url?: string };

export default function ReviewCarousel({ reviews }: { reviews: Review[] }) {
  const spur = useRef<HTMLDivElement>(null);
  const [rand, setRand] = useState({ links: true, rechts: reviews.length <= 3 });
  const stand = () => {
    const t = spur.current;
    if (t) setRand({ links: t.scrollLeft < 5, rechts: t.scrollLeft + t.clientWidth >= t.scrollWidth - 5 });
  };
  useEffect(() => { stand(); window.addEventListener("resize", stand); return () => window.removeEventListener("resize", stand); }, []);
  const blaettern = (richtung: number) => {
    const t = spur.current;
    if (t) t.scrollBy({ left: richtung * (t.clientWidth + (parseFloat(getComputedStyle(t).columnGap) || 0)), behavior: "smooth" });
  };
  return <div className="rv-carousel">
    {reviews.length > 3 && <button type="button" className="rv-nav rv-nav--prev" aria-label="Vorherige Rezensionen" disabled={rand.links} onClick={() => blaettern(-1)}>‹</button>}
    <div className="review-grid rv-track" ref={spur} onScroll={stand} tabIndex={0} aria-label="Google-Rezensionen">
      {reviews.map((r) => <blockquote key={r.author + r.text.slice(0, 20)}>
        <div aria-label={`${r.stars} von 5 Sternen`}>{"★".repeat(r.stars)}{"☆".repeat(5 - r.stars)}</div>
        <p>„{r.text}“</p>
        <cite>{r.author}{r.source_url ? <a href={r.source_url} target="_blank" rel="noreferrer">Rezension auf Google</a> : <span>Google-Bewertung</span>}</cite>
      </blockquote>)}
    </div>
    {reviews.length > 3 && <button type="button" className="rv-nav rv-nav--next" aria-label="Weitere Rezensionen" disabled={rand.rechts} onClick={() => blaettern(1)}>›</button>}
  </div>;
}
