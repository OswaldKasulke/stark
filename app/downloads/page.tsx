import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Downloads für Immobilieneigentümer | Stark & Hoffmann",
  description: "Kostenlose PDF-Checklisten für Immobilienbewertung, Verkaufsunterlagen und den Immobilienverkauf in Bergisch Gladbach.",
  alternates: { canonical: "https://immobilienmakler-bergisch-gladbach.de/downloads/" },
};

const downloads = [
  { title:"Unterlagen für den Immobilienverkauf", text:"Grundbuch, Flurkarte, Energieausweis sowie zusätzliche Unterlagen für Wohnungen und vermietete Immobilien.", file:"/downloads/checkliste-verkaufsunterlagen.pdf", label:"Checkliste · PDF · 1 Seite" },
  { title:"Immobilienbewertung richtig vorbereiten", text:"Alle wichtigen Angaben zu Objekt, Zustand, Ausstattung, Lage und Rechten übersichtlich zum Abhaken.", file:"/downloads/checkliste-immobilienbewertung.pdf", label:"Checkliste · PDF · 1 Seite" },
  { title:"Immobilienverkauf in sechs Schritten", text:"Der kompakte Fahrplan von Bewertung und Vorbereitung über Vermarktung und Notar bis zur Übergabe.", file:"/downloads/fahrplan-immobilienverkauf.pdf", label:"Fahrplan · PDF · 1 Seite" },
];

export default function DownloadsPage(){
  return <main className="downloads-page">
    <header className="site-header"><a className="brand" href="/"><span className="brand-mark">S<span>&amp;</span>H</span><span><strong>Stark &amp; Hoffmann</strong><small>Immobilien · Bergisch Gladbach</small></span></a><nav aria-label="Hauptnavigation"><a href="/#profil">Profil</a><a href="/#markt">Markt</a><a href="/#staedte">Standorte</a><a href="/downloads/">Downloads</a></nav><a className="header-cta" href="/immobilienbewertung/">Kostenlose Bewertung</a></header>
    <section className="downloads-hero"><div><p className="eyebrow light">Kostenlose Downloads</p><h1>Gut vorbereitet verkaufen.</h1><p>Praktische Checklisten für Eigentümer in Bergisch Gladbach und im Bergischen Land - kompakt, druckbar und ohne Anmeldung verfügbar.</p></div></section>
    <section className="downloads-content section">
      <div className="section-head"><div><p className="eyebrow">Wissen zum Mitnehmen</p><h2>Drei Hilfen für Ihren Immobilienverkauf.</h2></div><p>Alle Dokumente enthalten weiterführende Quellen und einen klaren Hinweis, wo eine individuelle rechtliche, steuerliche oder energetische Beratung erforderlich sein kann.</p></div>
      <div className="download-grid">{downloads.map((item,index)=><article key={item.file}><span className="download-number">0{index+1}</span><p className="download-label">{item.label}</p><h3>{item.title}</h3><p>{item.text}</p><a className="button dark" href={item.file} download>PDF herunterladen ↓</a><a className="download-view" href={item.file} target="_blank" rel="noreferrer">Im Browser ansehen ↗</a></article>)}</div>
      <div className="downloads-cta"><div><p className="eyebrow">Nächster Schritt</p><h2>Was ist Ihre Immobilie wert?</h2><p>Nutzen Sie unsere kostenlose Ersteinschätzung für Bergisch Gladbach und die Region.</p></div><a className="button gold" href="/immobilienbewertung/">Immobilie bewerten lassen</a></div>
    </section>
    <footer><div className="footer-brand"><span className="brand-mark">S<span>&amp;</span>H</span><div><strong>Stark &amp; Hoffmann Immobilien</strong><small>Evernest Lizenzpartner Bergisch Gladbach</small></div></div><div><h4>Kontakt</h4><p>Schloßstraße 41<br/>51429 Bergisch Gladbach</p><a href="tel:+4922049147881">+49 2204 914 7881</a><a href="mailto:bergischgladbach@evernest.com">bergischgladbach@evernest.com</a></div><div><h4>Unternehmen</h4><a href="/bergisch-gladbach/">Bergisch Gladbach</a><a href="/downloads/">Downloads</a><a href="/impressum/">Impressum</a><a href="/agb/">AGB</a></div><div><h4>Rechtliches</h4><p>Stark &amp; Hoffmann Immobilien GmbH<br/>Amtsgericht Köln, HRB 116396</p></div></footer>
  </main>;
}
