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
            <img src={property.image} alt={property.alt} loading={index < 3 ? "eager" : "lazy"} />
            <div className="listing-card-overlay">
              {property.status && <span className={`listing-badge${property.status === "Verkauft" ? " sold" : ""}`}>{property.status}</span>}
              <p>{property.place}</p>
              <strong>{property.price}</strong>
              <span className="listing-card-title">Immobilie ansehen ↗</span>
            </div>
          </a>
        ))}
      </div>
      <button className="listing-arrow listing-arrow-next" type="button" aria-label="Nächste Immobilien" onClick={() => move(1)}>→</button>
      <p className="listing-source">Quelle: Evernest-Immobiliensuche, Kartenausschnitt Bergisch Gladbach · Stand 22.08.2026</p>
    </div>
  );
}
