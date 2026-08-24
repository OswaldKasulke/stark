import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Downloads für Immobilieneigentümer | Stark & Hoffmann",
  description: "Kostenlose PDF-Checklisten für Immobilienbewertung, Verkaufsunterlagen und den Immobilienverkauf in Bergisch Gladbach.",
  alternates: { canonical: "https://immobilienmakler-bergisch-gladbach.de/downloads/" },
};

const checklists = [
  { title:"Unterlagen für den Immobilienverkauf", text:"Grundbuch, Flurkarte, Energieausweis sowie zusätzliche Unterlagen für Wohnungen und vermietete Immobilien.", file:"/downloads/checkliste-verkaufsunterlagen.pdf", label:"Checkliste · PDF · 2 Seiten" },
  { title:"19 Angaben für den Kaufvertragsentwurf", text:"Die Praxis-Checkliste für alle Angaben, die das Notariat zur Vorbereitung des Immobilienkaufvertrags benötigt.", file:"/downloads/checkliste-notar-kaufvertrag.pdf", label:"Notar-Checkliste · PDF · 1 Seite" },
  { title:"Immobilienbewertung richtig vorbereiten", text:"Alle wichtigen Angaben zu Objekt, Zustand, Ausstattung, Lage und Rechten übersichtlich zum Abhaken.", file:"/downloads/checkliste-immobilienbewertung.pdf", label:"Checkliste · PDF · 1 Seite" },
  { title:"Immobilienverkauf in sechs Schritten", text:"Der kompakte Fahrplan von Bewertung und Vorbereitung über Vermarktung und Notar bis zur Übergabe.", file:"/downloads/fahrplan-immobilienverkauf.pdf", label:"Fahrplan · PDF · 1 Seite" },
];

const marketReports = [
  { area:"Stadt Bergisch Gladbach", scope:"Eigenständiger Gutachterausschuss für das Stadtgebiet", url:"https://www.gars.nrw/stadt-gl/produkte-gl/grundstuecksmarktbericht-gl", note:"Aktueller Bericht und Archiv über BORIS.NRW" },
  { area:"Rheinisch-Bergischer Kreis", scope:"Unter anderem Odenthal, Overath und Kürten - ohne Stadt Bergisch Gladbach", url:"https://www.gars.nrw/rbk/produkte-rbk/grundstuecksmarktberichte-rbk", note:"Aktueller Bericht und frühere Jahrgänge" },
  { area:"Stadt Leverkusen", scope:"Grundstücksmarktbericht 2026 für das Stadtgebiet", url:"https://gars.nrw/images/user/GA_Leverkusen/pdf/GMB_11600_2026.pdf", note:"Amtliches PDF · 62 Seiten" },
  { area:"Oberbergischer Kreis", scope:"Unter anderem Lindlar und Engelskirchen", url:"https://gars.nrw/images/user/GA_OBK/gmb/obk_pdf-gmb2026-20260402-120244.pdf", note:"Grundstücksmarktbericht 2026 · amtliches PDF" },
  { area:"Stadt Köln", scope:"Unter anderem die Kölner Bereiche des Königsforsts", url:"https://www.gars.nrw/images/user/GA_K%C3%B6ln/GMB2026_Digitalversion.pdf", note:"Grundstücksmarktbericht 2026 · amtliches PDF" },
  { area:"Rhein-Erft-Kreis", scope:"Unter anderem Hürth, Wesseling, Kerpen, Brühl und Bergheim", url:"https://www.gars.nrw/images/user/GA_Rhein-Erft-Kreis/GMB_2026.pdf", note:"Grundstücksmarktbericht 2026 · amtliches PDF" },
  { area:"Rhein-Sieg-Kreis und Troisdorf", scope:"Östliches und südliches Kölner Umland", url:"https://www.gars.nrw/rhein-sieg-kreis/produkte-rsk/grundstuecksmarktbericht-rsk", note:"Aktueller Bericht und Halbjahresberichte" },
];

export default function DownloadsPage(){
  return <main className="downloads-page">
    <header className="site-header"><a className="brand" href="/"><span className="brand-mark">S<span>&amp;</span>H</span><span><strong>Stark &amp; Hoffmann</strong><small>Immobilien · Bergisch Gladbach</small></span></a><nav aria-label="Hauptnavigation"><a href="/#profil">Profil</a><a href="/#markt">Markt</a><a href="/#staedte">Standorte</a><a href="/downloads/">Downloads</a></nav><a className="header-cta" href="/immobilienbewertung/">Kostenlose Bewertung</a></header>
    <section className="downloads-hero"><div><p className="eyebrow light">Kostenlose Downloads</p><h1>Gut vorbereitet verkaufen.</h1><p>Praktische Checklisten für Eigentümer in Bergisch Gladbach und im Bergischen Land - kompakt, druckbar und ohne Anmeldung verfügbar.</p></div></section>
    <section className="downloads-content section">
      <div className="section-head"><div><p className="eyebrow">Checklisten</p><h2>Praktische Hilfen für Ihren Immobilienverkauf.</h2></div><p>Die beiden Verkaufs- und Notarchecklisten basieren auf den Ratgeber-Inhalten von Roman Becker und wurden für Bergisch Gladbach und das Bergische Land angepasst.</p></div>
      <div className="download-grid">{checklists.map((item,index)=><article key={item.file}><span className="download-number">0{index+1}</span><p className="download-label">{item.label}</p><h3>{item.title}</h3><p>{item.text}</p><a className="button dark" href={item.file} download>PDF herunterladen ↓</a><a className="download-view" href={item.file} target="_blank" rel="noreferrer">Im Browser ansehen ↗</a></article>)}</div>
      <p className="download-origin">Redaktionelle Grundlage der ersten beiden Checklisten: <a href="https://romanbecker.de/ratgeber/unterlagen-immobilienverkauf.html" target="_blank" rel="noreferrer">Unterlagen Immobilienverkauf ↗</a> und <a href="https://romanbecker.de/ratgeber/was-braucht-der-notar-fuer-den-kaufvertrag.html" target="_blank" rel="noreferrer">Notar-Checkliste ↗</a> auf romanbecker.de.</p>
      <div className="reports-head"><p className="eyebrow">Amtliche Marktdaten</p><h2>Grundstücksmarktberichte der Region.</h2><p>Die Berichte stammen ausschließlich von den jeweils zuständigen Gutachterausschüssen. Bei Gremien, die aktuelle Jahrgänge zentral über BORIS.NRW anbieten, führt der Link zur amtlichen Auswahlseite.</p></div>
      <div className="report-grid">{marketReports.map(item=><a href={item.url} target="_blank" rel="noreferrer" key={item.area}><span>{item.note}</span><h3>{item.area}</h3><p>{item.scope}</p><b>Amtliche Quelle öffnen ↗</b></a>)}</div>
      <p className="boris-note">Alle Grundstücksmarktberichte Nordrhein-Westfalens und Bodenrichtwerte finden Sie zusätzlich zentral bei <a href="https://www.boris.nrw.de/" target="_blank" rel="noreferrer">BORIS.NRW ↗</a>.</p>
      <div className="downloads-cta"><div><p className="eyebrow">Nächster Schritt</p><h2>Was ist Ihre Immobilie wert?</h2><p>Nutzen Sie unsere kostenlose Ersteinschätzung für Bergisch Gladbach und die Region.</p></div><a className="button gold" href="/immobilienbewertung/">Immobilie bewerten lassen</a></div>
    </section>
    <footer><div className="footer-brand"><span className="brand-mark">S<span>&amp;</span>H</span><div><strong>Stark &amp; Hoffmann Immobilien</strong><small>Evernest Lizenzpartner Bergisch Gladbach</small></div></div><div><h4>Kontakt</h4><p>Schloßstraße 41<br/>51429 Bergisch Gladbach</p><a href="tel:+4922049147881">+49 2204 914 7881</a><a href="mailto:bergischgladbach@evernest.com">bergischgladbach@evernest.com</a></div><div><h4>Unternehmen</h4><a href="/bergisch-gladbach/">Bergisch Gladbach</a><a href="/downloads/">Downloads</a><a href="/impressum/">Impressum</a><a href="/agb/">AGB</a></div><div><h4>Rechtliches</h4><p>Stark &amp; Hoffmann Immobilien GmbH<br/>Amtsgericht Köln, HRB 116396</p></div></footer>
  </main>;
}
