import type { Metadata } from "next";
import { standorte, standortBySlug } from "./standorte";
import { breadcrumbSchema, businessSchema, defaultImage, faqSchema, graphSchema, siteUrl } from "./seo";

export function standortMetadata(slug: string): Metadata {
  const place = standortBySlug(slug)!;
  const url = `https://immobilienmakler-bergisch-gladbach.de/${place.slug}/`;
  return {
    title: `Immobilienmakler ${place.name} | Haus & Wohnung verkaufen`,
    description: `Makler ${place.name}: Haus, Wohnung oder Grundstück verkaufen, Preis und Wert ermitteln – mit amtlichen Marktdaten und persönlicher Beratung.`,
    alternates: { canonical: url },
    openGraph: { title: `Immobilienmakler ${place.name} | Stark & Hoffmann`, description: place.intro, url, images:[defaultImage] },
    twitter:{card:"summary_large_image",images:[defaultImage]},
  };
}

export default function StandortPage({ slug }: { slug: string }) {
  const place = standortBySlug(slug)!;
  const related = standorte.filter((entry) => entry.slug !== slug);
  const url=`${siteUrl}/${place.slug}/`;
  const placeFaq=[
    {question:`Was ist eine Immobilie in ${place.name} wert?`,answer:`Der Immobilienwert in ${place.name} ergibt sich aus Lage, Grundstück, Wohnfläche, Baujahr, Zustand, Energieeffizienz und Vergleichsverkäufen. Amtliche Marktdaten und Bodenrichtwerte bilden eine Grundlage, ersetzen aber keine objektbezogene Bewertung.`},
    {question:`Wie verkaufe ich ein Haus oder eine Wohnung in ${place.name}?`,answer:`Nach Bewertung und Unterlagenprüfung werden Angebotspreis, Zielgruppe und Vermarktung festgelegt. Es folgen Exposé, Interessentenprüfung, Besichtigungen, Verhandlung und Notartermin.`},
    {question:`Was sagt der Bodenrichtwert in ${place.name} aus?`,answer:`Der Bodenrichtwert ist ein amtlicher durchschnittlicher Lagewert des Bodens. Der Wert eines konkreten Grundstücks kann wegen Nutzung, Zuschnitt, Erschließung und Mikrolage davon abweichen.`},
  ];
  const structuredData = graphSchema([
    businessSchema,
    {"@type":"Place","@id":`${url}#ort`,name:place.name,url,containedInPlace:{"@type":"AdministrativeArea",name:place.region}},
    {"@type":"Service","@id":`${url}#service`,name:`Immobilienmakler ${place.name}`,provider:{"@id":"https://immobilienmakler-bergisch-gladbach.de/#unternehmen"},areaServed:{"@id":`${url}#ort`},url},
    breadcrumbSchema([{name:"Startseite",url:siteUrl},{name:place.name,url}]),
    faqSchema(placeFaq),
  ]);
  return <main className="city-page location-page">
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(structuredData)}} />
    <header className="site-header"><a className="brand" href="/"><span className="brand-mark">S<span>&</span>H</span><span><strong>Stark & Hoffmann</strong><small>Immobilien · Bergisch Gladbach</small></span></a><nav aria-label="Seitennavigation"><a href="#profil">Profil</a><a href="#markt">Markt</a><a href="#bodenrichtwert">Bodenrichtwert</a></nav><a className="header-cta" href="/immobilienbewertung/">Kostenlose Bewertung</a></header>
    <section className="city-hero location-hero"><div><p className="eyebrow light">{place.label} · {place.region}</p><h1>Immobilienmakler {place.name}</h1><p>{place.intro} Wir unterstützen Eigentümer dabei, Haus, Wohnung oder Grundstück marktgerecht zu bewerten und zu verkaufen.</p><div className="hero-actions"><a className="button gold" href="/immobilienbewertung/">Immobilie bewerten</a><a className="text-link light" href="#profil">Ortsprofil <span>↓</span></a></div></div></section>
    <section className="city-profile section" id="profil"><div><p className="eyebrow">Profil {place.name}</p><h2>{place.profileLead}</h2><p className="lead">{place.profile}</p><div className="profile-sources"><a className="source-link" href={place.municipalitySource.url} target="_blank" rel="noreferrer">Quelle: {place.municipalitySource.label} ↗</a><a className="source-link" href={place.wikipedia} target="_blank" rel="noreferrer">Ergänzende Quelle: Wikipedia ↗</a></div></div><aside>{place.facts.map(([value,label])=><div key={label}><span>{label}</span><strong>{value}</strong></div>)}</aside></section>
    <section className="market-facts section" id="markt"><div className="market-facts-head"><div><p className="eyebrow">Immobilienmarkt {place.name}</p><h2>Der Markt in Zahlen.</h2></div><p>{place.marketIntro}</p></div><div className="market-facts-grid location-market-grid">{place.marketFacts.map(([value,label,note])=><article key={label}><strong>{value}</strong><h3>{label}</h3><p>{note}</p></article>)}</div><a className="source-link" href={place.marketSource.url} target="_blank" rel="noreferrer">Quelle: {place.marketSource.label} ↗</a></section>
    <section className="city-brw section dark-section" id="bodenrichtwert"><div className="section-head"><div><p className="eyebrow light">Bodenrichtwert {place.name}</p><h2>Amtliche Werte – korrekt eingeordnet.</h2></div><p>{place.brwNote}</p></div><div className="city-brw-grid">{place.brw.map(([label,value,note])=><article key={label}><span>{label}</span><strong>{value}</strong><p>{note}</p></article>)}</div><div className="city-source-row"><a className="button gold" href="https://www.boris.nrw.de/" target="_blank" rel="noreferrer">Adresse in BORIS-NRW prüfen ↗</a><a className="source-link light" href={place.marketSource.url} target="_blank" rel="noreferrer">Quelle: {place.marketSource.label} ↗</a></div></section>
    <section className="faq-section section"><div className="section-head"><div><p className="eyebrow">Fragen zum Verkauf</p><h2>Immobilienpreis und Verkauf in {place.name}.</h2></div><p>Kurze Antworten für Eigentümer in {place.name} und Umgebung.</p></div><div className="faq-grid">{placeFaq.map(item=><details className="faq-item" key={item.question}><summary>{item.question}<span>+</span></summary><div><p>{item.answer}</p></div></details>)}</div><p className="editorial-note">Stand: 25.08.2026 · Redaktion: Stark &amp; Hoffmann Immobilien · Orts- und Marktdaten sind mit ihren Quellen gekennzeichnet.</p></section>
    <section className="city-districts section" id="region"><div className="section-head"><div><p className="eyebrow">Region rund um Bergisch Gladbach</p><h2>Weitere Ortsprofile.</h2></div><p>Ortsprofile und Marktdaten mit jeweils ausgewiesenen kommunalen und amtlichen Quellen.</p></div><div className="city-district-grid">{related.map((entry,index)=><a href={`/${entry.slug}/`} key={entry.slug}><span>{String(index+1).padStart(2,"0")}</span><div><strong>{entry.name}</strong><small>{entry.label}</small></div><b>→</b></a>)}</div></section>
    <section className="district-contact section"><div><p className="eyebrow light">Kostenlose Ersteinschätzung</p><h2>Was ist Ihre Immobilie in {place.name} wert?</h2><p>Wir prüfen Lage, Grundstück und Gebäude – nicht nur einen pauschalen Durchschnitt.</p></div><div><a className="button gold" href="/immobilienbewertung/">Bewertung starten</a><a href="tel:+4922049147881">+49 2204 914 7881</a></div></section>
    <footer><div className="footer-brand"><span className="brand-mark">S<span>&</span>H</span><div><strong>Stark & Hoffmann Immobilien</strong><small>Evernest Lizenzpartner Bergisch Gladbach</small></div></div><div><h4>Kontakt</h4><p>Schloßstraße 41<br/>51429 Bergisch Gladbach</p><a href="tel:+4922049147881">+49 2204 914 7881</a></div><div><h4>Region</h4><a href="/bergisch-gladbach/">Bergisch Gladbach</a><a href="#region">Region &amp; Umland</a></div><div><h4>Rechtliches</h4><a href="/impressum/">Impressum</a><a href="/agb/">AGB</a><a href="/datenschutz/">Datenschutz</a></div></footer>
  </main>;
}
