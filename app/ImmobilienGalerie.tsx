"use client";

import { useEffect, useRef, useState } from "react";
import { properties } from "./immobilien";

type Item = (typeof properties)[number];

// Galerie in einer Reihe zum seitlichen Blättern. Ohne `items` zeigt sie die
// Startseitenauswahl; die Stadtteilseiten übergeben ihre eigene Auswahl.
export default function ImmobilienGalerie({ items, moreLink = true }: { items?: Item[]; moreLink?: boolean } = {}) {
  const rail = useRef<HTMLDivElement>(null);
  const [overflow, setOverflow] = useState(true);

  useEffect(() => {
    const element = rail.current;
    if (!element) return;
    const update = () => setOverflow(element.scrollWidth > element.clientWidth + 2);
    const observer = new ResizeObserver(update);
    observer.observe(element);
    update();
    return () => observer.disconnect();
  }, []);

  const move = (direction: -1 | 1) => {
    const element = rail.current;
    if (!element) return;
    element.scrollBy({ left: direction * element.clientWidth * 0.86, behavior: "smooth" });
  };

  return (
    <div className="listing-carousel">
      <button className="listing-arrow listing-arrow-prev" type="button" hidden={!overflow} aria-label="Vorherige Immobilien" onClick={() => move(-1)}>←</button>
      <div className="listing-rail" ref={rail}>
        {(items ?? properties).map((property, index) => (
          <a className="listing-card" href={property.url} target="_blank" rel="noreferrer" key={property.url}>
            <img data-src={property.image} alt={property.alt} loading={index < 3 ? "eager" : "lazy"} className="external-media" />
            <div className="listing-card-overlay">
              {property.status && <span className={`listing-badge${property.status === "Verkauft" ? " sold" : ""}`}>{property.status}</span>}
              <p>{property.place}</p>
              <strong>{property.price}</strong>
            </div>
          </a>
        ))}
      </div>
      <button className="listing-arrow listing-arrow-next" type="button" hidden={!overflow} aria-label="Nächste Immobilien" onClick={() => move(1)}>→</button>
      {moreLink && <p className="listing-more"><a className="button dark" href="https://evernest.com/de/search/?lat=50.9924&lng=7.1287&zoom=11" target="_blank" rel="noreferrer">Alle Immobilien im Umkreis ansehen</a></p>}
    </div>
  );
}
