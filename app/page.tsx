import type { Metadata } from "next";
import { artikel } from "./ratgeber/artikel";
import { districts } from "./stadtteile";
import ContactForm from "./ContactForm";
import { businessSchema, graphSchema, siteUrl } from "./seo";
import SiteFooter from "@/app/SiteFooter";
import HauptNav from "@/app/HauptNav";

export const metadata: Metadata = { description: "Immobilienmakler Bergisch Gladbach: Immobilie verkaufen mit Stark & Hoffmann, Ihrem Makler für Häuser, Wohnungen und Grundstücke in allen 25 Stadtteilen." };

const serviceLinks = [
  ["Haus verkaufen", "/haus-verkaufen-bergisch-gladbach/", "Bewertung, Unterlagen und Vermarktung für Ein- und Zweifamilienhäuser."],
  ["Wohnung verkaufen", "/wohnung-verkaufen-bergisch-gladbach/", "Wohnungswert, Gemeinschaftsunterlagen und passende Käuferansprache."],
  ["Grundstück verkaufen", "/grundstueck-verkaufen-bergisch-gladbach/", "Bodenrichtwert, Baurecht und Entwicklungspotenzial richtig einordnen."],
];

const steps = [
  ["01", "Bewertung & Erstgespräch", "Wir analysieren Lage, Zustand, Baujahr, Energieeffizienz und aktuelle Vergleichswerte – persönlich und transparent."],
  ["02", "Individuelle Strategie", "Gemeinsam legen wir Preis, Zeitplan und die passende Form der Vermarktung fest: klassisch, diskret oder Off-Market."],
  ["03", "Vorbereitung", "Wir koordinieren Pflichtunterlagen, professionelle Fotografie, Grundrisse und ein hochwertiges Exposé."],
  ["04", "Vermarktung", "Digitale Reichweite, große Immobilienportale und unser Netzwerk bringen Ihre Immobilie zu den richtigen Interessenten."],
  ["05", "Besichtigung & Prüfung", "Wir organisieren Besichtigungen, qualifizieren Kaufinteressenten und prüfen Finanzierungsnachweise."],
  ["06", "Notar & Übergabe", "Von der Verhandlung über den Notartermin bis zur protokollierten Schlüsselübergabe bleiben wir an Ihrer Seite."],
];

const locations = [
  ["Bechen", "bechen"],
  ["Engelskirchen", "engelskirchen"],
  ["Königsforst", "koenigsforst"],
  ["Kürten", "kuerten"],
  ["Lindlar", "lindlar"],
  ["Odenthal", "odenthal"],
  ["Overath", "overath"],
];

const marketFacts = [
  ["1.251", "Kaufverträge", "im Marktjahr 2025 · +28 % zu 2024"],
  ["482 Mio. €", "Geldumsatz", "im gesamten Stadtgebiet 2025 · +34 % zu 2024"],
  ["332", "Ein- und Zweifamilienhäuser", "Verkäufe im Marktjahr 2025 · +17,7 % zu 2024"],
  ["+40,5 %", "Wohnungseigentum", "mehr Kauffälle als 2024"],
];

export default function Home() {
  const structuredData = graphSchema(
    businessSchema,
    { "@type": "WebSite", "@id": `${siteUrl}/#website`, url: `${siteUrl}/`, name: "Stark & Hoffmann Immobilien", publisher: { "@id": `${siteUrl}/#immobilienmakler` }, inLanguage: "de-DE" },
  );
  return <main>
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(structuredData)}} />
    <header className="site-header">
      <a className="brand" href="#top" aria-label="Startseite">
        <span className="brand-mark">S<span>&</span>H</span>
        <span><strong>Stark & Hoffmann</strong><small>Immobilien · Bergisch Gladbach</small></span>
      </a>
      <HauptNav/>
      <a className="header-cta" href="/immobilienbewertung/">Kostenlose Bewertung</a>
    </header>

    <section className="hero" id="top">
      <div className="hero-content">
        <p className="eyebrow light">Immobilienmakler Bergisch Gladbach</p>
        <h1>Immobilienmakler Bergisch Gladbach.<br/>Persönlich begleitet.</h1>
        <p className="hero-copy">Sie möchten Ihre Immobilie in Bergisch Gladbach verkaufen? Stark &amp; Hoffmann begleitet Eigentümer beim Verkauf und bei der Bewertung von Häusern, Wohnungen und Grundstücken – in allen 25 Stadtteilen und im Umland.</p>
        <div className="hero-actions"><a className="button gold" href="/immobilienbewertung/">Immobilie bewerten lassen</a><a className="text-link light" href="tel:+4922049147881">+49 2204 914 7881 <span>↗</span></a></div>
        <div className="trust-row"><span>Lokale Expertise</span><span>Persönliche Beratung</span><span>Digital unterstützt</span></div>
      </div>
    </section>

    <section className="profile section" id="profil">
      <div className="profile-copy">
        <p className="eyebrow">Unser Profil</p><h2>Ihr Makler in Bergisch Gladbach – zuhause in Bensberg.</h2>
        <p className="lead">Stark &amp; Hoffmann Immobilien GmbH begleitet Eigentümer in Bergisch Gladbach bei Bewertung, Verkauf und Vermietung. Geschäftsführer sind Patrick Stark und Julian Hoffmann.</p>
        <p>Wer uns besuchen möchte, findet den Showroom an der Schloßstraße: Es ist das letzte Geschäft, bevor die Auffahrt zum Bensberger Schloss beginnt. Von hier aus sind wir für Eigentümer in allen 25 Stadtteilen da, dazu in Odenthal, Kürten, Overath, Lindlar und Engelskirchen – egal, ob ein Verkauf ansteht, ein Kauf oder eine Vermietung. Digitale Werkzeuge erledigen bei uns die Routine; für Ihre Fragen nehmen wir uns im direkten Gespräch Zeit.</p>
        <div className="profile-points"><span>Bewertung mit örtlichen Marktdaten</span><span>Klassisch, diskret oder Off-Market</span><span>Kaufinteressenten vorab geprüft</span><span>Begleitung bis zur Übergabe</span></div>
        <a className="button dark" href="/team/">Das Team kennenlernen</a>
      </div>
    </section>

    <section className="seo-services section" aria-labelledby="verkaufen-heading">
      <div className="section-head"><div><p className="eyebrow">Haus, Wohnung oder Grundstück</p><h2 id="verkaufen-heading">Immobilie verkaufen in Bergisch Gladbach.</h2></div><p>Objektart, Lage und Unterlagen bestimmen den richtigen Verkaufsweg. Unsere Fachseiten beantworten die wichtigsten Fragen mit lokalen Markt- und Bewertungsinformationen.</p></div>
      <div className="seo-service-grid">{serviceLinks.map(([title,url,text])=><a href={url} key={url}><span>Verkaufsratgeber</span><h3>{title}</h3><p>{text}</p><b>Mehr erfahren →</b></a>)}</div>
    </section>

    <section className="market-facts section" id="markt">
      <div className="market-facts-head"><div><p className="eyebrow">Immobilienmarkt Bergisch Gladbach</p><h2>Der Markt in Zahlen.</h2></div><p>Amtlich registrierte Transaktionen und Umsätze in Bergisch Gladbach im Marktjahr 2025.</p></div>
      <div className="market-facts-grid">{marketFacts.map(([value,label,note])=><article key={label}><strong>{value}</strong><h3>{label}</h3><p>{note}</p></article>)}</div>
      <a className="source-link" href="https://www.boris.nrw.de/borisfachdaten/gmb/2026/GMB_20700_2026.pdf" target="_blank" rel="noreferrer">Quelle: Gutachterausschuss Bergisch Gladbach, Grundstücksmarktbericht 2026, S. 5, 7 und 10 ↗</a>
    </section>

    <section className="process section dark-section" id="fahrplan">
      <div className="section-head"><div><p className="eyebrow light">Verkaufsfahrplan</p><h2>So verkaufen wir Ihre Immobilie in Bergisch Gladbach – in sechs Schritten.</h2></div><p>Ein klarer Prozess schafft Sicherheit. Wir halten Sie in jeder Phase auf dem Laufenden und kümmern uns um die vollständige Abwicklung.</p></div>
      <div className="steps">{steps.map(([number,title,text])=><article className="step" key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
    </section>

    <section className="properties section" id="immobilien">
      <div className="section-head"><div><p className="eyebrow">Ihre Immobiliensuche</p><h2>Finden Sie ein Zuhause, das zu Ihnen passt.</h2></div><p>Teilen Sie uns Ihre Wunschlage, die passende Objektart und Ihr Budget mit. Wir besprechen mit Ihnen die nächsten Schritte Ihrer Suche.</p></div>
      <a className="button dark" href="/suchprofil/">Suchwunsch mitteilen</a>
    </section>

    <section className="cities section" id="staedte">
      <div className="district-list-head"><p className="eyebrow">Bergisch Gladbach</p><h2>Alle 25 Stadtteile.</h2></div>
      <div className="city-grid">{[...districts].sort((a,b)=>a.name.localeCompare(b.name,"de")).map((district)=><a className="city" href={`/stadtteile/${district.slug}/`} key={district.slug}><span>Stadtteilprofil</span><strong>{district.name}</strong><b aria-hidden="true">↗</b></a>)}</div>
      <div className="section-head region-list-head"><div><p className="eyebrow">Region &amp; Umland</p><h2>Ortsprofile im Bergischen Land.</h2></div><p>Lokale Marktseiten mit Ortsprofil, Immobilienpreisen und amtlichen Quellen für die Region rund um Bergisch Gladbach.</p></div>
      <div className="location-grid">{locations.map(([name,slug])=><a href={`/${slug}/`} key={slug}><span>Ortsprofil</span><strong>{name}</strong><b aria-hidden="true">↗</b></a>)}</div>
      <div className="section-head region-list-head"><div><p className="eyebrow">Nachbarregionen</p><h2>Jenseits des Bergischen.</h2></div><p>Für Leverkusen und Köln führen Kolleginnen und Kollegen eigene Marktseiten mit Ortsprofilen, Preisen und amtlichen Quellen.</p></div>
      <div className="location-grid location-grid--drei">
        <a href="https://leverkusen-makler.de/"><span>Stadtprofile &amp; Marktdaten</span><strong>Leverkusen</strong><b aria-hidden="true">↗</b></a>
        <a href="https://makler-schael-sick.de/"><span>18 Stadtteile rechts des Rheins</span><strong>Köln, rechtsrheinisch</strong><b aria-hidden="true">↗</b></a>
        <a href="https://romanbecker.de/"><span>Stadtteilprofile für ganz Köln</span><strong>Köln</strong><b aria-hidden="true">↗</b></a>
      </div>
    </section>

    <section className="faq-section section" id="ratgeber">
      <div className="section-head"><div><p className="eyebrow">Ratgeber</p><h2>Wissen für Eigentümer in Bergisch Gladbach.</h2></div><p>Fachbeiträge rund um Kauf, Verkauf und Recht der Immobilie – dazu die häufigsten Fragen zu Bewertung und Verkauf.</p></div>
      <div className="seo-service-grid">{artikel.slice(0, 3).map((a) => <a href={`/ratgeber/${a.slug}/`} key={a.slug}><span>Ratgeber</span><h3>{a.titel}</h3><p>{a.kurz}</p><b>Weiterlesen →</b></a>)}</div>
      <div className="faq-cta"><a className="button dark" href="/ratgeber/">Alle Beiträge und häufigen Fragen</a><a href="tel:+4922049147881">Weitere Frage? +49 2204 914 7881</a></div>
    </section>

    <section className="contact section" id="kontakt">
      <div className="contact-info"><p className="eyebrow light">Kontakt</p><h2>Sprechen wir über Ihre Immobilie.</h2><p>Unverbindlich, persönlich und ohne Zeitdruck. Besuchen Sie Ihre Makler in Bergisch Gladbach im Showroom in Bensberg oder schreiben Sie uns.</p><address><strong>Stark & Hoffmann Immobilien GmbH</strong><span>Schloßstraße 41<br/>51429 Bergisch Gladbach</span><a href="tel:+4922049147881">+49 2204 914 7881</a><a href="mailto:hallo@immobilienmakler-bergisch-gladbach.de">hallo@immobilienmakler-bergisch-gladbach.de</a></address></div>
      <ContactForm/>
    </section>

    <SiteFooter/>
    <div className="copyright">© 2026 Stark & Hoffmann Immobilien GmbH · Alle Angaben unverbindlich. Irrtümer und Änderungen vorbehalten.</div>
  </main>;
}
