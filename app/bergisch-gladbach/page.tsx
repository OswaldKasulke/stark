import type { Metadata } from "next";
import { districts } from "../stadtteile";
import SoldReferences from "../SoldReferences";
import { soldByDistrict } from "../verkauft";

const soldAll = Object.values(soldByDistrict).flat().reduce<{street:string;typ:string;count:number}[]>((list, item) => {
  const hit = list.find((entry) => entry.street === item.street);
  if (!hit) list.push({ ...item });
  else { hit.count += item.count; if (hit.typ !== item.typ) hit.typ = "Immobilie"; }
  return list;
}, []).sort((a, b) => a.street.localeCompare(b.street, "de"));
import { breadcrumbSchema, businessSchema, defaultImage, faqSchema, graphSchema, siteUrl } from "../seo";
import SiteFooter from "@/app/SiteFooter";
import HauptNav from "@/app/HauptNav";

export const metadata: Metadata = {
  title: "Immobilienpreise Bergisch Gladbach 2026 | Markt & Stadtteile",
  description: "Immobilienpreise Bergisch Gladbach 2026: Kaufpreise und Quadratmeterpreise für Häuser und Wohnungen, Bodenrichtwerte und Marktdaten aus dem Grundstücksmarktbericht.",
  alternates: { canonical: "https://immobilienmakler-bergisch-gladbach.de/bergisch-gladbach/" },
  openGraph: {
    title: "Immobilienpreise Bergisch Gladbach 2026 | Stark & Hoffmann",
    description: "Kaufpreise, Quadratmeterpreise und Bodenrichtwerte für Bergisch Gladbach und alle 25 Stadtteile.",
    url: "https://immobilienmakler-bergisch-gladbach.de/bergisch-gladbach/",
    images:[defaultImage],
  },
  twitter:{card:"summary_large_image",images:[defaultImage]},
};

const marketFacts = [
  ["1.251", "Kaufverträge", "im Marktjahr 2025"],
  ["482 Mio. €", "Geldumsatz", "im gesamten Stadtgebiet"],
  ["332", "Ein- und Zweifamilienhäuser", "Verkäufe im Marktjahr 2025"],
  ["+40,5 %", "Wohnungseigentum", "mehr Kauffälle als 2024"],
];

// Preise: Grundstücksmarktbericht 2026 der Stadt Bergisch Gladbach, geprüft am
// 29.09.2026. Häuser S. 37–40 (wiederverkaufte Objekte, Mittelwerte),
// Eigentumswohnungen S. 5.
const hauspreise = [
  ["Freistehendes Einfamilienhaus", "131–180 m² Wohnfläche, Grundstück 501–700 m²", "483.000 €", "3.130 €/m²", "662.000 €", "4.440 €/m²", "−3 %"],
  ["Doppelhaushälfte", "131–180 m² Wohnfläche, Grundstück 180–400 m²", "501.000 €", "3.330 €/m²", "598.000 €", "4.050 €/m²", "+8 %"],
  ["Reihenendhaus", "116–125 m² Wohnfläche", "430.000 €", "3.560 €/m²", "", "", "+1 %"],
  ["Reihenmittelhaus", "116–125 m² Wohnfläche", "420.000 €", "3.500 €/m²", "", "", "+1 %"],
];

export default function BergischGladbachPage() {
  const url=`${siteUrl}/bergisch-gladbach/`;
  const pageFaq=[
    {question:"Was kostet ein Haus in Bergisch Gladbach?",answer:"Laut Grundstücksmarktbericht 2026 kostete ein wiederverkauftes freistehendes Einfamilienhaus mit 131 bis 180 m² Wohnfläche und 501 bis 700 m² Grundstück im Mittel 483.000 € in mittlerer und 662.000 € in guter Wohnlage. Eine Doppelhaushälfte dieser Größe auf 180 bis 400 m² Grundstück kostete 501.000 € bzw. 598.000 €."},
    {question:"Was kostet eine Eigentumswohnung in Bergisch Gladbach?",answer:"Die Quadratmeterpreise lagen 2025 zwischen 1.000 und 3.500 € in großen Wohnanlagen und zwischen 1.500 und 6.000 € in kleinen und mittleren Wohnanlagen. Wiederverkaufte Wohnungen in kleinen und mittleren Anlagen wurden gegenüber 2024 um 13 % teurer."},
    {question:"Wofür steht BGL?",answer:"BGL wird in der Region als Kurzform für Bergisch Gladbach verwendet. In amtlichen Bezeichnungen, Anschriften und unseren strukturierten Daten verwenden wir den vollständigen Stadtnamen."},
    {question:"Wie unterscheiden sich die Immobilienpreise in Bergisch Gladbach?",answer:"Die Preise unterscheiden sich nach Stadtteil, Straße, Grundstück, Objektart und Zustand. Deshalb verlinkt diese Übersicht auf 25 eigene Stadtteilprofile und auf die adressgenaue Bewertung."},
    {question:"Wo finde ich den Grundstückswert in Bergisch Gladbach?",answer:"BORIS-NRW zeigt den Bodenrichtwert der konkreten Zone. Für den Grundstückswert müssen zusätzlich Nutzung, Zuschnitt, Erschließung, Topografie und die Bebauung berücksichtigt werden."},
  ];
  const structuredData = graphSchema(
    businessSchema,
    {"@type":"Place","@id":`${url}#ort`,name:"Bergisch Gladbach",alternateName:"BGL",url,containedInPlace:{"@type":"AdministrativeArea",name:"Rheinisch-Bergischer Kreis"}},
    breadcrumbSchema([{name:"Startseite",url:siteUrl},{name:"Immobilienpreise Bergisch Gladbach",url}]),
    faqSchema(pageFaq),
  );

  return <main className="city-page">
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(structuredData)}} />
    <header className="site-header"><a className="brand" href="/"><span className="brand-mark">S<span>&</span>H</span><span><strong>Stark & Hoffmann</strong><small>Immobilien · Bergisch Gladbach</small></span></a><HauptNav/><a className="header-cta" href="/immobilienbewertung/">Kostenlose Bewertung</a></header>

    <section className="city-hero"><div><p className="eyebrow light">Immobilienmarkt Bergisch Gladbach 2026</p><h1>Immobilienpreise Bergisch Gladbach</h1><p>Kaufpreise und Quadratmeterpreise für Häuser und Wohnungen, Bodenrichtwerte und Marktdaten für Bergisch Gladbach – von Schildgen bis Lustheide.</p><div className="hero-actions"><a className="button gold" href="/immobilienbewertung/">Immobilie bewerten</a><a className="text-link light" href="#preise">Immobilienpreise <span>↓</span></a></div></div></section>

    <section className="city-profile section" id="profil"><div><p className="eyebrow">Stadtprofil</p><h2>Zwischen Köln und dem Bergischen Land.</h2><p className="lead">Bergisch Gladbach ist die bevölkerungsreichste Kommune des Rheinisch-Bergischen Kreises. Zum 31. Dezember 2025 waren hier 114.320 Einwohner mit Hauptwohnsitz gemeldet.</p><p>Das Stadtgebiet gliedert sich in sechs statistische Bezirke und 25 Stadtteile. Unterschiedliche Wohnlagen, vom urbanen Zentrum über gewachsene Ortskerne bis zu waldnahen Randlagen, machen eine adressgenaue Betrachtung für die Immobilienbewertung unverzichtbar.</p><a className="source-link" href="https://www.bergischgladbach.de/bevoelkerung.aspx" target="_blank" rel="noreferrer">Quelle: Stadt Bergisch Gladbach, Bevölkerung zum 31.12.2025 ↗</a></div><aside><span>Einwohner</span><strong>114.320</strong><span>Stadtteile</span><strong>25</strong><span>Statistische Bezirke</span><strong>6</strong></aside></section>

    <section className="market-facts section" id="markt"><div className="market-facts-head"><div><p className="eyebrow">Immobilienmarkt Bergisch Gladbach</p><h2>Der Markt in Zahlen.</h2></div><p>Amtlich registrierte Transaktionen und Umsätze im Marktjahr 2025.</p></div><div className="market-facts-grid">{marketFacts.map(([value,label,note])=><article key={label}><strong>{value}</strong><h3>{label}</h3><p>{note}</p></article>)}</div><a className="source-link" href="https://www.boris.nrw.de/borisfachdaten/gmb/2026/GMB_20700_2026.pdf" target="_blank" rel="noreferrer">Quelle: Gutachterausschuss Bergisch Gladbach, Grundstücksmarktbericht 2026, S. 5, 7 und 10 ↗</a></section>

    <section className="brw section" id="preise"><div className="section-head"><div><p className="eyebrow light">Immobilienpreise Bergisch Gladbach</p><h2>Was Häuser und Wohnungen kosten.</h2></div><p>Mittelwerte wiederverkaufter Häuser aus dem Grundstücksmarktbericht 2026, Ausstattung mittel bis gut. Der Preis einer einzelnen Immobilie hängt von Lage, Zustand und Grundstück ab.</p></div>
      <div className="brw-table-wrap"><table className="brw-table"><thead><tr><th>Haustyp</th><th>Mittlere Wohnlage</th><th>Gute Wohnlage</th><th>Zu 2024</th></tr></thead><tbody>{hauspreise.map(([typ, groesse, pm, qm, pg, qg, veraenderung]) => <tr key={typ}><td>{typ}<br/><small>{groesse}</small></td><td>{pm}<br/><small>{qm}</small></td><td>{pg ? <>{pg}<br/><small>{qg}</small></> : "ohne Lagetrennung"}</td><td>{veraenderung}</td></tr>)}</tbody></table></div>
      <div className="city-brw-grid"><article><span>Große Wohnanlagen</span><strong>1.000–3.500 €/m²</strong><p>Eigentumswohnungen 2025</p></article><article><span>Kleine und mittlere Wohnanlagen</span><strong>1.500–6.000 €/m²</strong><p>Eigentumswohnungen 2025</p></article><article><span>Wiederverkauf, kleine und mittlere Anlagen</span><strong>+13 %</strong><p>Preisentwicklung gegenüber 2024</p></article></div>
      <div className="city-source-row"><a className="button gold" href="/immobilienbewertung/">Eigene Immobilie bewerten</a><a className="source-link light" href="https://www.boris.nrw.de/borisfachdaten/gmb/2026/GMB_20700_2026.pdf" target="_blank" rel="noreferrer">Quelle: Grundstücksmarktbericht 2026, S. 5 und 37–40 ↗</a></div>
    </section>

    <SoldReferences place="Bergisch Gladbach" items={soldAll} />
    <section className="city-brw section dark-section"><div className="section-head"><div><p className="eyebrow light">Bodenrichtwerte</p><h2>Der Wert beginnt bei der konkreten Lage.</h2></div><p>Bergisch Gladbach umfasst 286 Bodenrichtwertzonen in Wohngebieten. Der amtliche Bodenrichtwert muss deshalb immer für die konkrete Adresse geprüft werden.</p></div><div className="city-brw-grid"><article><span>Gute Lage</span><strong>970 €/m²</strong><p>Freistehende Ein- und Zweifamilienhäuser</p></article><article><span>Mittlere Lage</span><strong>660 €/m²</strong><p>Freistehende Ein- und Zweifamilienhäuser</p></article><article><span>Einfache Lage</span><strong>510 €/m²</strong><p>Freistehende Ein- und Zweifamilienhäuser</p></article></div><div className="city-source-row"><a className="button gold" href="/bodenrichtwert-bergisch-gladbach/">Bodenrichtwert Bergisch Gladbach 2026</a><a className="button gold" href="https://www.boris.nrw.de/" target="_blank" rel="noreferrer">Adresse in BORIS-NRW prüfen ↗</a><a className="source-link light" href="https://www.boris.nrw.de/borisfachdaten/gmb/2026/GMB_20700_2026.pdf" target="_blank" rel="noreferrer">Quelle: Grundstücksmarktbericht 2026, S. 27–32 ↗</a></div></section>

    <section className="city-districts section" id="stadtteile"><div className="section-head"><div><p className="eyebrow">Stadtteile Bergisch Gladbach</p><h2>25 Lagen. Eine Stadt.</h2></div><p>Für jeden Stadtteil stehen eine eigene Marktseite, das amtliche Straßenverzeichnis und – soweit veröffentlicht – die lokale Bodenwertspanne bereit.</p></div><div className="city-district-grid">{[...districts].sort((a,b)=>a.name.localeCompare(b.name,"de")).map(district=><a href={`/stadtteile/${district.slug}/`} key={district.slug}><div><strong>{district.name}</strong><small>{district.inhabitants} Einwohner</small></div><b aria-hidden="true">→</b></a>)}</div><a className="source-link" href="https://www.bergischgladbach.de/statistik.aspx" target="_blank" rel="noreferrer">Quelle: Stadt Bergisch Gladbach, Statistikdienststelle ↗</a></section>

    <section className="city-districts section region-links"><div className="section-head"><div><p className="eyebrow">Region &amp; Umland</p><h2>Orte rund um Bergisch Gladbach.</h2></div><p>Eigene Ortsprofile mit kommunalen Quellen und Marktzahlen des jeweils zuständigen Gutachterausschusses.</p></div><div className="city-district-grid">{[["Bechen","bechen"],["Engelskirchen","engelskirchen"],["Königsforst","koenigsforst"],["Kürten","kuerten"],["Lindlar","lindlar"],["Odenthal","odenthal"],["Overath","overath"]].map(([name,slug])=><a href={`/${slug}/`} key={slug}><div><strong>{name}</strong><small>Ortsprofil &amp; Marktdaten</small></div><b aria-hidden="true">→</b></a>)}</div></section>

    <section className="faq-section section"><div className="section-head"><div><p className="eyebrow">BGL kompakt</p><h2>Preise und Werte richtig einordnen.</h2></div><p>Kurze, überprüfbare Antworten zum Immobilienmarkt.</p></div><div className="faq-grid">{pageFaq.map(item=><details className="faq-item" key={item.question}><summary>{item.question}<span>+</span></summary><div><p>{item.answer}</p></div></details>)}</div><p className="editorial-note">Stand: 29.09.2026 · Redaktion: Stark &amp; Hoffmann Immobilien · Zahlen aus dem Grundstücksmarktbericht 2026 und kommunalen Statistiken.</p></section>

    <section className="district-contact section"><div><p className="eyebrow light">Kostenlose Ersteinschätzung</p><h2>Was ist Ihre Immobilie in Bergisch Gladbach wert?</h2><p>Die Adresse wird dem richtigen Stadtteil und der passenden Marktlage zugeordnet.</p></div><div><a className="button gold" href="/immobilienbewertung/">Bewertung starten</a><a href="tel:+4922049147881">+49 2204 914 7881</a></div></section>

    <SiteFooter/>
  </main>;
}
