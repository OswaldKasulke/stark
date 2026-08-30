"use client";

import { useRef } from "react";
import { properties } from "./immobilien";

export default function ImmobilienGalerie() {
  const rail = useRef<HTMLDivElement>(null);

  const move = (direction: -1 | 1) => {
    const element = rail.current;
    if (!element) return;
    element.scrollBy({ left: direction * element.clientWidth * 0.86, behavior: "smooth" });
  };

  return (
    <div className="listing-carousel">
      <button className="listing-arrow listing-arrow-prev" type="button" aria-label="Vorherige Immobilien" onClick={() => move(-1)}>←</button>
      <div className="listing-rail" ref={rail}>
        {properties.map((property, index) => (
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
      <button className="listing-arrow listing-arrow-next" type="button" aria-label="Nächste Immobilien" onClick={() => move(1)}>→</button>
      <p className="listing-more"><a className="button dark" href="https://evernest.com/de/search/?lat=50.9924&lng=7.1287&zoom=11" target="_blank" rel="noreferrer">Alle Immobilien im Umkreis ansehen</a></p>
    </div>
  );
}
