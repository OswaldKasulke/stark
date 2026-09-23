import type { SoldReference } from "./verkauft";

// Liste verkaufter Objekte – nur Straßenname und Objektart, nie Hausnummer.
export default function SoldReferences({ place, items }: { place: string; items: SoldReference[] | undefined }) {
  if (!items || items.length === 0) return null;
  const total = items.reduce((sum, item) => sum + item.count, 0);
  return (
    <section className="sold-references section" id="verkauft">
      <div className="section-head">
        <div>
          <p className="eyebrow">Referenzen</p>
          <h2>Verkaufte Immobilien in {place}</h2>
        </div>
        <p>Über das Evernest-Netzwerk vermittelt, Auswahl aus den letzten rund drei Jahren. Aus Diskretion nennen wir nur die Straße.</p>
      </div>
      <div className="sold-grid">
        <ul>
          {items.map((item) => (
            <li key={item.street}>
              {item.street} <span>({item.typ}{item.count > 1 ? `, ${item.count} Einheiten` : ""})</span>
            </li>
          ))}
        </ul>
        <aside><strong>{total}</strong><span>vermittelte Objekte<br />in {place}</span></aside>
      </div>
    </section>
  );
}
