import type { SoldReference } from "./verkauft";

// Verkaufte Objekte als Straßenzeile – nur Straßenname, nie Hausnummer.
export default function SoldReferences({ place, items }: { place: string; items: SoldReference[] | undefined }) {
  if (!items || items.length === 0) return null;
  return (
    <section className="sold-references section" id="verkauft">
      <p className="eyebrow">Aus dem Netzwerk</p>
      <h2>Verkaufte Immobilien in {place}</h2>
      <p className="sold-streets">{items.map((item) => item.street).join(", ")}</p>
      <p className="sold-question">Fragen? <a href="#kontakt">Sprechen Sie uns an</a></p>
    </section>
  );
}
