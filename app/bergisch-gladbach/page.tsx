import type { Metadata } from "next";
import { districts } from "../stadtteile";
import { breadcrumbSchema, businessSchema, defaultImage, faqSchema, graphSchema, siteUrl } from "../seo";

export const metadata: Metadata = {
  title: "Immobilienmarkt Bergisch Gladbach | Stadtteile & Bewertung",
  description: "Immobilienmarkt Bergisch Gladbach: amtliche Marktdaten 2025, Bodenrichtwerte, 25 Stadtteile und kostenlose Immobilienbewertung.",
  alternates: { canonical: "https://immobilienmakler-bergisch-gladbach.de/bergisch-gladbach/" },
  openGraph: {
    title: "Immobilienmarkt Bergisch Gladbach | Stark & Hoffmann",
    description: "Marktdaten, Bodenrichtwerte und Immobilienbewertung für Bergisch Gladbach und alle 25 Stadtteile.",
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

export default function BergischGladbachPage() {
  const url=`${siteUrl}/bergisch-gladbach/`;
  const pageFaq=[
    {question:"Wofür steht BGL?",answer:"BGL wird in der Region als Kurzform für Bergisch Gladbach verwendet. In amtlichen Bezeichnungen, Anschriften und unseren strukturierten Daten verwenden wir den vollständigen Stadtnamen."},
    {question:"Wie unterscheiden sich die Immobilienpreise in Bergisch Gladbach?",answer:"Die Preise unterscheiden sich nach Stadtteil, Straße, Grundstück, Objektart und Zustand. Deshalb verlinkt diese Übersicht auf 25 eigene Stadtteilprofile und auf die adressgenaue Bewertung."},
    {question:"Wo finde ich den Grundstückswert in Bergisch Gladbach?",answer:"BORIS-NRW zeigt den Bodenrichtwert der konkreten Zone. Für den Grundstückswert müssen zusätzlich Nutzung, Zuschnitt, Erschließung, Topografie und die Bebauung berücksichtigt werden."},
  ];
  const structuredData = graphSchema(
    businessSchema,
    {"@type":"Place","@id":`${url}#ort`,name:"Bergisch Gladbach",alternateName:"BGL",url,containedInPlace:{"@type":"AdministrativeArea",name:"Rheinisch-Bergischer Kreis"}},
    breadcrumbSchema([{name:"Startseite",url:siteUrl},{name:"Immobilienmarkt Bergisch Gladbach",url}]),
    faqSchema(pageFaq),
  );

  return <main className="city-page">
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(structuredData)}} />
    <header className="site-header"><a className="brand" href="/"><span className="brand-mark">S<span>&</span>H</span><span><strong>Stark & Hoffmann</strong><small>Immobilien · Bergisch Gladbach</small></span></a><nav aria-label="Seitennavigation"><a href="#profil">Stadtprofil</a><a href="#markt">Markt</a><a href="#stadtteile">Stadtteile</a></nav><a className="header-cta" href="/immobilienbewertung/">Kostenlose Bewertung</a></header>

    <section className="city-hero"><div><p className="eyebrow light">Immobilienstandort im Bergischen Land</p><h1>Immobilienmarkt Bergisch Gladbach</h1><p>Marktdaten, Immobilienpreise, Bodenrichtwerte und lokale Immobilienbewertung für Bergisch Gladbach (BGL) – von Schildgen bis Lustheide.</p><div className="hero-actions"><a className="button gold" href="/immobilienbewertung/">Immobilie bewerten</a><a className="text-link light" href="#stadtteile">Alle 25 Stadtteile <span>↓</span></a></div></div></section>

    <section className="city-profile section" id="profil"><div><p className="eyebrow">Stadtprofil</p><h2>Zwischen Köln und dem Bergischen Land.</h2><p className="lead">Bergisch Gladbach ist die bevölkerungsreichste Kommune des Rheinisch-Bergischen Kreises. Zum 31. Dezember 2025 waren hier 114.320 Einwohner mit Hauptwohnsitz gemeldet.</p><p>Das Stadtgebiet gliedert sich in sechs statistische Bezirke und 25 Stadtteile. Unterschiedliche Wohnlagen, vom urbanen Zentrum über gewachsene Ortskerne bis zu waldnahen Randlagen, machen eine adressgenaue Betrachtung für die Immobilienbewertung unverzichtbar.</p><a className="source-link" href="https://www.bergischgladbach.de/bevoelkerung.aspx" target="_blank" rel="noreferrer">Quelle: Stadt Bergisch Gladbach, Bevölkerung zum 31.12.2025 ↗</a></div><aside><span>Einwohner</span><strong>114.320</strong><span>Stadtteile</span><strong>25</strong><span>Statistische Bezirke</span><strong>6</strong></aside></section>

    <section className="market-facts section" id="markt"><div className="market-facts-head"><div><p className="eyebrow">Immobilienmarkt Bergisch Gladbach</p><h2>Der Markt in Zahlen.</h2></div><p>Amtlich registrierte Transaktionen und Umsätze im Marktjahr 2025.</p></div><div className="market-facts-grid">{marketFacts.map(([value,label,note])=><article key={label}><strong>{value}</strong><h3>{label}</h3><p>{note}</p></article>)}</div><a className="source-link" href="https://www.gars.nrw/stadt-gl/produkte-gl/grundstuecksmarktbericht-gl" target="_blank" rel="noreferrer">Quelle: Gutachterausschuss Bergisch Gladbach, Grundstücksmarktbericht 2026, S. 5, 7 und 10 ↗</a></section>

    <section className="city-brw section dark-section"><div className="section-head"><div><p className="eyebrow light">Bodenrichtwerte</p><h2>Der Wert beginnt bei der konkreten Lage.</h2></div><p>Bergisch Gladbach umfasst 286 Bodenrichtwertzonen in Wohngebieten. Der amtliche Bodenrichtwert muss deshalb immer für die konkrete Adresse geprüft werden.</p></div><div className="city-brw-grid"><article><span>Gute Lage</span><strong>970 €/m²</strong><p>Freistehende Ein- und Zweifamilienhäuser</p></article><article><span>Mittlere Lage</span><strong>660 €/m²</strong><p>Freistehende Ein- und Zweifamilienhäuser</p></article><article><span>Einfache Lage</span><strong>510 €/m²</strong><p>Freistehende Ein- und Zweifamilienhäuser</p></article></div><div className="city-source-row"><a className="button gold" href="https://www.boris.nrw.de/" target="_blank" rel="noreferrer">Adresse in BORIS-NRW prüfen ↗</a><a className="source-link light" href="https://www.gars.nrw/stadt-gl/produkte-gl/grundstuecksmarktbericht-gl" target="_blank" rel="noreferrer">Quelle: Grundstücksmarktbericht 2026, S. 27–32 ↗</a></div></section>

    <section className="city-districts section" id="stadtteile"><div className="section-head"><div><p className="eyebrow">Stadtteile Bergisch Gladbach</p><h2>25 Lagen. Eine Stadt.</h2></div><p>Für jeden Stadtteil stehen eine eigene Marktseite, das amtliche Straßenverzeichnis und – soweit veröffentlicht – die lokale Bodenwertspanne bereit.</p></div><div className="city-district-grid">{[...districts].sort((a,b)=>a.name.localeCompare(b.name,"de")).map(district=><a href={`/stadtteile/${district.slug}/`} key={district.slug}><div><strong>{district.name}</strong><small>{district.inhabitants} Einwohner</small></div><b>→</b></a>)}</div><a className="source-link" href="https://www.bergischgladbach.de/statistik.aspx" target="_blank" rel="noreferrer">Quelle: Stadt Bergisch Gladbach, Statistikdienststelle ↗</a></section>

    <section className="city-districts section region-links"><div className="section-head"><div><p className="eyebrow">Region &amp; Umland</p><h2>Orte rund um Bergisch Gladbach.</h2></div><p>Eigene Ortsprofile mit kommunalen Quellen und Marktzahlen des jeweils zuständigen Gutachterausschusses.</p></div><div className="city-district-grid">{[["Bechen","bechen"],["Engelskirchen","engelskirchen"],["Königsforst","koenigsforst"],["Kürten","kuerten"],["Lindlar","lindlar"],["Odenthal","odenthal"],["Overath","overath"]].map(([name,slug])=><a href={`/${slug}/`} key={slug}><div><strong>{name}</strong><small>Ortsprofil &amp; Marktdaten</small></div><b>→</b></a>)}</div></section>

    <section className="faq-section section"><div className="section-head"><div><p className="eyebrow">BGL kompakt</p><h2>Preise und Werte richtig einordnen.</h2></div><p>Kurze, überprüfbare Antworten zum Immobilienmarkt.</p></div><div className="faq-grid">{pageFaq.map(item=><details className="faq-item" key={item.question}><summary>{item.question}<span>+</span></summary><div><p>{item.answer}</p></div></details>)}</div><p className="editorial-note">Stand: 25.08.2026 · Redaktion: Stark &amp; Hoffmann Immobilien · Zahlen aus dem Grundstücksmarktbericht 2026 und kommunalen Statistiken.</p></section>

    <section className="district-contact section"><div><p className="eyebrow light">Kostenlose Ersteinschätzung</p><h2>Was ist Ihre Immobilie in Bergisch Gladbach wert?</h2><p>Die Adresse wird dem richtigen Stadtteil und der passenden Marktlage zugeordnet.</p></div><div><a className="button gold" href="/immobilienbewertung/">Bewertung starten</a><a href="tel:+4922049147881">+49 2204 914 7881</a></div></section>

    <footer><div className="footer-brand"><span className="brand-mark">S<span>&</span>H</span><div><strong>Stark & Hoffmann Immobilien</strong><small>Evernest Lizenzpartner Bergisch Gladbach</small></div></div><div><h4>Kontakt</h4><p>Schloßstraße 41<br/>51429 Bergisch Gladbach</p><a href="tel:+4922049147881">+49 2204 914 7881</a><a href="mailto:bergischgladbach@evernest.com">bergischgladbach@evernest.com</a></div><div><h4>Standort</h4><a href="/bergisch-gladbach/">Bergisch Gladbach</a><a href="/immobilienbewertung/">Immobilienbewertung</a></div><div><h4>Rechtliches</h4><a href="/impressum/">Impressum</a><a href="/agb/">AGB</a><a href="/datenschutz/">Datenschutz</a></div></footer>
  </main>;
}
