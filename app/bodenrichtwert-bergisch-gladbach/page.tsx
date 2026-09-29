import type { Metadata } from "next";
import { breadcrumbSchema, businessSchema, defaultImage, faqSchema, graphSchema, siteUrl } from "../seo";
import SiteFooter from "@/app/SiteFooter";
import HauptNav from "@/app/HauptNav";

// Alle Zahlen: Grundstücksmarktbericht 2026 der Stadt Bergisch Gladbach
// (GMB_20700_2026.pdf), geprüft am 29.09.2026 – S. 5 (Spannen je Stadtteil),
// S. 27 (Anzahl Bodenrichtwerte), S. 30 (gebietstypische Werte), S. 31
// (Indexreihe), S. 32 (ausgewählte Bodenrichtwerte).
const url = `${siteUrl}/bodenrichtwert-bergisch-gladbach/`;
const gmb = "https://www.boris.nrw.de/borisfachdaten/gmb/2026/GMB_20700_2026.pdf";

export const metadata: Metadata = {
  title: "Bodenrichtwert Bergisch Gladbach 2026",
  description: "Bodenrichtwert Bergisch Gladbach 2026: gebietstypische Werte, Spannen je Stadtteil und ausgewählte Richtwerte aus dem Grundstücksmarktbericht – adressgenau über BORIS.NRW.",
  alternates: { canonical: url },
  openGraph: { title: "Bodenrichtwert Bergisch Gladbach 2026 | Stark & Hoffmann", description: "Amtliche Bodenrichtwerte für Bergisch Gladbach zum 01.01.2026.", url, images: [defaultImage] },
  twitter: { card: "summary_large_image", images: [defaultImage] },
};

const gebietstypisch = [
  ["Freistehende Ein- und Zweifamilienhäuser", "970", "660", "510"],
  ["Doppelhaushälften und Reihenendhäuser", "790", "570", "510"],
  ["Reihenmittelhäuser", "850", "610", "490"],
  ["Gewerbliche Bauflächen", "160", "135", "115"],
];

// [Stadtteil laut Bericht, Spanne, Stadtteilseiten]
const spannen: [string, string, [string, string][]][] = [
  ["Refrath", "790 bis 970", [["Refrath", "refrath"]]],
  ["Bensberg", "570 bis 930", [["Bensberg", "bensberg"]]],
  ["Gladbach", "480 bis 720", []],
  ["Paffrath / Nußbaum", "540 bis 720", [["Paffrath", "paffrath"], ["Nußbaum", "nussbaum"]]],
  ["Schildgen", "490 bis 660", [["Schildgen", "schildgen"]]],
  ["Hand", "510 bis 660", [["Hand", "hand"]]],
  ["Moitzfeld", "480 bis 630", [["Moitzfeld", "moitzfeld"]]],
  ["Herkenrath", "430 bis 540", [["Herkenrath", "herkenrath"]]],
  ["Herrenstrunden", "400 bis 490", [["Herrenstrunden", "herrenstrunden"]]],
];

const ausgewaehlt = [
  ["Refrath", "Eidechsenweg", "970", "gute Lage"],
  ["Refrath", "Scharrenbroichstraße", "850", "mittlere Lage"],
  ["Refrath", "Lustheide", "790", "einfache Lage"],
  ["Bensberg", "Moureauxstraße", "930", "gute Lage"],
  ["Bensberg", "Milchborntalweg", "720", "mittlere Lage"],
  ["Bensberg", "Saaler Straße", "690", "einfache Lage"],
  ["Gladbach", "Schreibersheide", "690", "gute Lage"],
  ["Gladbach", "An der Engelsfuhr", "560", "mittlere Lage"],
  ["Gladbach", "Odenthaler Straße (zw. An der Engelsfuhr und Alte Wipperfürther Straße)", "490", "einfache Lage"],
];

const index = [["2019", "+10 %"], ["2020", "+11 %"], ["2021", "+15 %"], ["2022", "+5 %"], ["2023", "0 %"], ["2024", "0 %"], ["2025", "0 %"]];

export default function BodenrichtwertPage() {
  const pageFaq = [
    { question: "Wie hoch ist der Bodenrichtwert in Bergisch Gladbach?", answer: "Für freistehende Ein- und Zweifamilienhäuser nennt der Gutachterausschuss als gebietstypische Werte 970 €/m² in guter, 660 €/m² in mittlerer und 510 €/m² in einfacher Lage (Stand 01.01.2026). Der Wert für ein bestimmtes Grundstück hängt von seiner Bodenrichtwertzone ab." },
    { question: "Wie viele Bodenrichtwerte gibt es in Bergisch Gladbach?", answer: "Zum 01.01.2026 hat der Gutachterausschuss 286 Bodenrichtwerte in Wohngebieten ermittelt, dazu 45 in Mischgebieten, 18 in Kerngebieten, 20 in Gewerbegebieten und 46 für Sondernutzungsflächen." },
    { question: "Wo finde ich den Bodenrichtwert für meine Adresse?", answer: "In BORIS.NRW, dem Informationssystem der Gutachterausschüsse in Nordrhein-Westfalen. Die Bodenrichtwerte mit ihren Merkmalen lassen sich dort kostenfrei und ohne Registrierung abrufen, auch als PDF." },
    { question: "Haben sich die Bodenpreise zuletzt verändert?", answer: "Nach der Indexreihe des Gutachterausschusses für den individuellen Wohnungsbau sind die Bodenpreise 2023, 2024 und 2025 unverändert geblieben. 2022 stiegen sie um 5 %, 2021 um 15 %." },
  ];
  const schema = graphSchema(businessSchema, breadcrumbSchema([{ name: "Startseite", url: siteUrl }, { name: "Bodenrichtwert Bergisch Gladbach", url }]), faqSchema(pageFaq));
  const quelle = (seiten: string, light = false) => <a className={`source-link${light ? " light" : ""}`} href={gmb} target="_blank" rel="noreferrer">Quelle: Gutachterausschuss Bergisch Gladbach, Grundstücksmarktbericht 2026, S. {seiten} ↗</a>;

  return <main className="city-page">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    <header className="site-header"><a className="brand" href="/"><span className="brand-mark">S<span>&</span>H</span><span><strong>Stark & Hoffmann</strong><small>Immobilien · Bergisch Gladbach</small></span></a><HauptNav/><a className="header-cta" href="/immobilienbewertung/">Kostenlose Bewertung</a></header>

    <section className="city-hero"><div><p className="eyebrow light">Stichtag 1. Januar 2026</p><h1>Bodenrichtwert Bergisch Gladbach 2026</h1><p>Der Gutachterausschuss hat für Bergisch Gladbach 286 Bodenrichtwerte in Wohngebieten ermittelt. Hier finden Sie die gebietstypischen Werte, die Spannen je Stadtteil und ausgewählte Richtwerte – den Wert Ihrer Adresse zeigt BORIS.NRW.</p><div className="hero-actions"><a className="button gold" href="https://www.boris.nrw.de/" target="_blank" rel="noreferrer">Adresse in BORIS.NRW prüfen ↗</a><a className="text-link light" href="#stadtteile">Spannen je Stadtteil <span>↓</span></a></div></div></section>

    <section className="brw section" id="gebietstypisch"><div className="section-head"><div><p className="eyebrow light">Gebietstypische Bodenrichtwerte</p><h2>Das Preisniveau in Euro je Quadratmeter.</h2></div><p>Beschlossen am 10.03.2026 für baureife, erschließungs- und kanalanschlussbeitragsfreie Grundstücke. Das einzelne Grundstück kann nach Lage, Größe, Tiefe, Boden, Nutzung und Erschließung erheblich abweichen.</p></div>
      <div className="brw-table-wrap"><table className="brw-table"><thead><tr><th>Unbebaute Grundstücke</th><th>Gute Lage</th><th>Mittlere Lage</th><th>Einfache Lage</th></tr></thead><tbody>{gebietstypisch.map(([art, g, m, e]) => <tr key={art}><td>{art}</td><td>{g} €/m²</td><td>{m} €/m²</td><td>{e} €/m²</td></tr>)}</tbody></table></div>
      {quelle("30", true)}
    </section>

    <section className="brw section" id="stadtteile"><div className="section-head"><div><p className="eyebrow light">Bodenrichtwert je Stadtteil</p><h2>Bodenwertspannen für Ein- und Zweifamilienhäuser.</h2></div><p>So weist der Grundstücksmarktbericht die Spannen pro Quadratmeter Grundstücksfläche aus. Für die übrigen Stadtteile nennt er keine eigene Spanne.</p></div>
      <div className="brw-table-wrap"><table className="brw-table"><thead><tr><th>Stadtteil</th><th>Spanne</th><th>Stadtteilseite</th></tr></thead><tbody>{spannen.map(([name, spanne, seiten]) => <tr key={name}><td>{name}</td><td>{spanne} €/m²</td><td>{seiten.length ? seiten.map(([n, s], i) => <span key={s}>{i ? " · " : ""}<a href={`/stadtteile/${s}/`}>{n}</a></span>) : "–"}</td></tr>)}</tbody></table></div>
      {quelle("5", true)}
    </section>

    <section className="brw section" id="ausgewaehlt"><div className="section-head"><div><p className="eyebrow light">Ausgewählte Bodenrichtwerte</p><h2>Beispiele aus Refrath, Bensberg und Gladbach.</h2></div><p>Wohnbauflächen für Eigentumsmaßnahmen, Stand 01.01.2026 – vom Gutachterausschuss als Beispiele für gute, mittlere und einfache Lage genannt.</p></div>
      <div className="brw-table-wrap"><table className="brw-table"><thead><tr><th>Lage</th><th>Stadtteil</th><th>Bodenrichtwert</th><th>Einstufung</th></tr></thead><tbody>{ausgewaehlt.map(([st, lage, wert, stufe]) => <tr key={lage}><td>{lage}</td><td>{st}</td><td>{wert} €/m²</td><td>{stufe}</td></tr>)}</tbody></table></div>
      {quelle("32", true)}
    </section>

    <section className="city-profile section" id="einordnung"><div><p className="eyebrow">Einordnung</p><h2>Was der Bodenrichtwert aussagt.</h2><p className="lead">Der Bodenrichtwert ist der durchschnittliche Lagewert des Bodens für eine Zone von Grundstücken mit weitgehend gleichen Merkmalen – bezogen auf den Quadratmeter eines typischen Richtwertgrundstücks.</p><p>Er gilt nur für baureifes Land und in Wohngebieten fast ausschließlich für den individuellen Wohnungsbau. Für Grundstücke, die tiefer oder flacher sind als das Richtwertgrundstück, veröffentlicht der Gutachterausschuss Umrechnungskoeffizienten.</p></div><aside><span>Bodenpreisindex 2025</span><strong>0 %</strong><span>Ohne Veränderung</span><strong>2023–2025</strong><span>Bodenrichtwerte Wohnen</span><strong>286</strong></aside></section>

    <section className="market-facts section" id="entwicklung"><div className="market-facts-head"><div><p className="eyebrow">Bodenpreisindex</p><h2>Entwicklung seit 2019.</h2></div><p>Veränderung zum Vorjahr für den individuellen Wohnungsbau im Stadtgebiet, jeweils zum 31.12.</p></div><div className="market-facts-grid">{index.map(([jahr, wert]) => <article key={jahr}><strong>{wert}</strong><h3>{jahr}</h3><p>zum Vorjahr</p></article>)}</div>{quelle("31")}</section>

    <section className="faq-section section"><div className="section-head"><div><p className="eyebrow">Bodenrichtwert kompakt</p><h2>Häufige Fragen zum Bodenrichtwert.</h2></div><p>Kurze Antworten, belegt mit dem Grundstücksmarktbericht 2026.</p></div><div className="faq-grid">{pageFaq.map(item => <details className="faq-item" key={item.question}><summary>{item.question}<span>+</span></summary><div><p>{item.answer}</p></div></details>)}</div></section>

    <section className="district-contact section"><div><p className="eyebrow light">Vom Bodenwert zum Marktwert</p><h2>Was ist Ihre Immobilie in Bergisch Gladbach wert?</h2><p>Der Bodenrichtwert ist nur ein Teil. Für den Marktwert zählen Gebäude, Zustand und die aktuelle Nachfrage.</p></div><div><a className="button gold" href="/immobilienbewertung/">Bewertung starten</a><a href="tel:+4922049147881">+49 2204 914 7881</a></div></section>

    <SiteFooter/>
  </main>;
}
