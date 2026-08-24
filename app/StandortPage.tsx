import type { Metadata } from "next";
import { standorte, standortBySlug } from "./standorte";

export function standortMetadata(slug: string): Metadata {
  const place = standortBySlug(slug)!;
  const url = `https://immobilienmakler-bergisch-gladbach.de/${place.slug}/`;
  return {
    title: `Immobilienmarkt ${place.name} | Bodenrichtwerte & Bewertung`,
    description: `${place.name}: Ortsprofil, amtliche Marktdaten, Bodenrichtwerte und kostenlose Immobilienbewertung.`,
    alternates: { canonical: url },
    openGraph: { title: `Immobilienmarkt ${place.name} | Stark & Hoffmann`, description: place.intro, url },
  };
}

export default function StandortPage({ slug }: { slug: string }) {
  const place = standortBySlug(slug)!;
  const related = standorte.filter((entry) => entry.slug !== slug);
  const structuredData = { "@context": "https://schema.org", "@type": "Place", name: place.name, url: `https://immobilienmakler-bergisch-gladbach.de/${place.slug}/`, containedInPlace: { "@type": "AdministrativeArea", name: place.region } };
  return <main className="city-page location-page">
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(structuredData)}} />
    <header className="site-header"><a className="brand" href="/"><span className="brand-mark">S<span>&</span>H</span><span><strong>Stark & Hoffmann</strong><small>Immobilien · Bergisch Gladbach</small></span></a><nav aria-label="Seitennavigation"><a href="#profil">Profil</a><a href="#markt">Markt</a><a href="#bodenrichtwert">Bodenrichtwert</a></nav><a className="header-cta" href="/immobilienbewertung/">Kostenlose Bewertung</a></header>
    <section className="city-hero location-hero"><div><p className="eyebrow light">{place.label} · {place.region}</p><h1>{place.name}</h1><p>{place.intro}</p><div className="hero-actions"><a className="button gold" href="/immobilienbewertung/">Immobilie bewerten</a><a className="text-link light" href="#profil">Standortprofil <span>↓</span></a></div></div></section>
    <section className="city-profile section" id="profil"><div><p className="eyebrow">Profil {place.name}</p><h2>{place.profileLead}</h2><p className="lead">{place.profile}</p><div className="profile-sources"><a className="source-link" href={place.municipalitySource.url} target="_blank" rel="noreferrer">Quelle: {place.municipalitySource.label} ↗</a><a className="source-link" href={place.wikipedia} target="_blank" rel="noreferrer">Ergänzende Quelle: Wikipedia ↗</a></div></div><aside>{place.facts.map(([value,label])=><div key={label}><span>{label}</span><strong>{value}</strong></div>)}</aside></section>
    <section className="market-facts section" id="markt"><div className="market-facts-head"><div><p className="eyebrow">Immobilienmarkt {place.name}</p><h2>Der Markt in Zahlen.</h2></div><p>{place.marketIntro}</p></div><div className="market-facts-grid location-market-grid">{place.marketFacts.map(([value,label,note])=><article key={label}><strong>{value}</strong><h3>{label}</h3><p>{note}</p></article>)}</div><a className="source-link" href={place.marketSource.url} target="_blank" rel="noreferrer">Quelle: {place.marketSource.label} ↗</a></section>
    <section className="city-brw section dark-section" id="bodenrichtwert"><div className="section-head"><div><p className="eyebrow light">Bodenrichtwert {place.name}</p><h2>Amtliche Werte – korrekt eingeordnet.</h2></div><p>{place.brwNote}</p></div><div className="city-brw-grid">{place.brw.map(([label,value,note])=><article key={label}><span>{label}</span><strong>{value}</strong><p>{note}</p></article>)}</div><div className="city-source-row"><a className="button gold" href="https://www.boris.nrw.de/" target="_blank" rel="noreferrer">Adresse in BORIS-NRW prüfen ↗</a><a className="source-link light" href={place.marketSource.url} target="_blank" rel="noreferrer">Quelle: {place.marketSource.label} ↗</a></div></section>
    <section className="city-districts section" id="region"><div className="section-head"><div><p className="eyebrow">Region rund um Bergisch Gladbach</p><h2>Weitere Standortseiten.</h2></div><p>Ortsprofile und Marktdaten mit jeweils ausgewiesenen kommunalen und amtlichen Quellen.</p></div><div className="city-district-grid">{related.map((entry,index)=><a href={`/${entry.slug}/`} key={entry.slug}><span>{String(index+1).padStart(2,"0")}</span><div><strong>{entry.name}</strong><small>{entry.label}</small></div><b>→</b></a>)}</div></section>
    <section className="district-contact section"><div><p className="eyebrow light">Kostenlose Ersteinschätzung</p><h2>Was ist Ihre Immobilie in {place.name} wert?</h2><p>Wir prüfen Lage, Grundstück und Gebäude – nicht nur einen pauschalen Durchschnitt.</p></div><div><a className="button gold" href="/immobilienbewertung/">Bewertung starten</a><a href="tel:+4922049147881">+49 2204 914 7881</a></div></section>
    <footer><div className="footer-brand"><span className="brand-mark">S<span>&</span>H</span><div><strong>Stark & Hoffmann Immobilien</strong><small>Evernest Lizenzpartner Bergisch Gladbach</small></div></div><div><h4>Kontakt</h4><p>Schloßstraße 41<br/>51429 Bergisch Gladbach</p><a href="tel:+4922049147881">+49 2204 914 7881</a></div><div><h4>Standorte</h4><a href="/bergisch-gladbach/">Bergisch Gladbach</a><a href="#region">Region &amp; Umland</a></div><div><h4>Rechtliches</h4><a href="/impressum/">Impressum</a><a href="/agb/">AGB</a><a href="https://www.evernest.com/de/datenschutz/" target="_blank" rel="noreferrer">Datenschutz</a></div></footer>
  </main>;
}
