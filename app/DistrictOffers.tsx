import { properties } from "./immobilien";

function uniqueProperties() {
  const unique = new Map<string, (typeof properties)[number]>();

  for (const property of properties) {
    const key = `${property.place}|${property.price}|${property.image}`;
    unique.set(key, property);
  }

  return [...unique.values()];
}

export function bergischGladbachOfferCount() {
  return uniqueProperties().filter((property) => property.place.startsWith("Bergisch Gladbach-")).length;
}

export default function DistrictOffers({ district }: { district: string }) {
  const all = uniqueProperties();
  const local = all.filter((property) => property.place.startsWith(`Bergisch Gladbach-${district},`));
  const fallback = all.filter((property) => property.place.startsWith("Bergisch Gladbach-")).slice(0, 3);
  const offers = local.length ? local : fallback;
  const localOffers = local.length > 0;

  return (
    <section className="properties section district-offers" id="angebote">
      <div className="section-head">
        <div>
          <p className="eyebrow">Immobilienangebote & Referenzen</p>
          <h2>{localOffers ? `Immobilien in ${district}` : "Angebote aus Bergisch Gladbach und Umgebung"}</h2>
        </div>
        <p>{localOffers ? `Evernest-Angebote und verkaufte Referenzen mit der Lageangabe Bergisch Gladbach-${district}.` : `Derzeit ist in ${district} kein eigenes Angebot oder keine verkaufte Referenz in der Evernest-Suche geführt. Hier sehen Sie Immobilien aus dem näheren Marktumfeld.`}</p>
      </div>
      <div className="property-grid">
        {offers.map((property, index) => (
          <a className="property-card" href={property.url} target="_blank" rel="noreferrer" key={property.url}>
            <div className="property-photo">
              <img src={property.image} alt={property.alt} loading={index < 2 ? "eager" : "lazy"} />
              {property.status && <span>{property.status}</span>}
            </div>
            <p className="property-place">{property.place}</p>
            <h3>{property.price}</h3>
            <span className="arrow-link">Immobilie ansehen ↗</span>
          </a>
        ))}
      </div>
    </section>
  );
}
