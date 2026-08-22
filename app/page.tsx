import { districts } from "./stadtteile";

const heroImage = "https://images.ctfassets.net/if6f7uzjzqut/1JeuSYJErKOHJUm9Ojx7LE/0ce8fa4b065d01703dd781a78c71b173/bergisch_gladbach_key_visual.jpg?f=top&fit=fill&fm=webp&q=82&w=1800";

const steps = [
  ["01", "Bewertung & Erstgespräch", "Wir analysieren Lage, Zustand, Baujahr, Energieeffizienz und aktuelle Vergleichswerte – persönlich und transparent."],
  ["02", "Individuelle Strategie", "Gemeinsam legen wir Preis, Zeitplan und die passende Form der Vermarktung fest: klassisch, diskret oder Off-Market."],
  ["03", "Vorbereitung", "Wir koordinieren Pflichtunterlagen, professionelle Fotografie, Grundrisse und ein hochwertiges Exposé."],
  ["04", "Vermarktung", "Digitale Reichweite, große Immobilienportale und unser Netzwerk bringen Ihre Immobilie zu den richtigen Interessenten."],
  ["05", "Besichtigung & Prüfung", "Wir organisieren Besichtigungen, qualifizieren Kaufinteressenten und prüfen Finanzierungsnachweise."],
  ["06", "Notar & Übergabe", "Von der Verhandlung über den Notartermin bis zur protokollierten Schlüsselübergabe bleiben wir an Ihrer Seite."],
];

const properties = [
  { place:"Bergisch Gladbach-Nußbaum · 51467", title:"Architektenhaus mit Spa und Smart Home", price:"1.399.000 €", facts:"ca. 276 m² · 6 Zimmer · 855 m² Grundstück", image:"https://images.ctfassets.net/if6f7uzjzqut/3htTTDunHlqMvj1OpSt3b7/47ed6d560cb78911a6c0d36b65591a69/a4ef604a-7cee-425d-a13a-6de57f4dc527?f=center&fit=fill&fm=webp&q=70&w=1200", url:"https://www.evernest.com/de/listing/6Z7zXP636pyMpcqvah3tRt/" },
  { place:"Bergisch Gladbach-Schildgen · 51467", title:"Freistehendes Einfamilienhaus mit viel Raum", price:"892.000 €", facts:"ca. 282 m² · 7 Zimmer · 728 m² Grundstück", image:"https://images.ctfassets.net/if6f7uzjzqut/1VdUEglILwR1pj27rLPb0/d99fce6d19050aac68244799ba3fa21d/7d3afb4b-4a74-48f9-912e-f43fe08905cc?f=center&fit=fill&fm=webp&q=70&w=1200", url:"https://www.evernest.com/de/listing/4QkJceuNhZnDcrDUTfgDCy/" },
  { place:"Bergisch Gladbach-Refrath · 51427", title:"Eigentumswohnungen in KfW-40-Bauweise", price:"ab 346.500 €", facts:"ab ca. 55 m² · ab 2 Zimmer · Neubau", image:"https://images.ctfassets.net/if6f7uzjzqut/2LJgyVp7QdwfyY5zSfhvMy/d24c9c489ffaaa85cec7898bb1e6c21a/177cba6c-5c27-4c63-9a3b-22c54aac20cf?f=top&fit=fill&fm=webp&q=75&w=1200", url:"https://www.evernest.com/de/listing/0dLo3OABJS1e4BTJ7bdtM/" },
];

const reviews = [
  ["Andreas Wierich", "Ich bin sehr zufrieden mit der unkomplizierten, kompetenten und professionellen Abwicklung des Verkaufes unseres Elternhauses."],
  ["A. Hasse", "Die Kommunikation war stets klar und offen, und ich fühlte mich in jeder Phase des Prozesses bestens betreut."],
  ["George Mukasa", "Bei den Besichtigungen selbst hat Herr Brauns auf mich einen sehr professionellen Eindruck gemacht."],
];

export default function Home() {
  return <main>
    <header className="site-header">
      <a className="brand" href="#top" aria-label="Startseite">
        <span className="brand-mark">S<span>&</span>H</span>
        <span><strong>Stark & Hoffmann</strong><small>Immobilien · Bergisch Gladbach</small></span>
      </a>
      <nav aria-label="Hauptnavigation"><a href="#profil">Profil</a><a href="#fahrplan">Verkaufsfahrplan</a><a href="#immobilien">Immobilien</a><a href="#staedte">Unsere Städte</a></nav>
      <a className="header-cta" href="/BGL/immobilienbewertung/">Kostenlose Bewertung</a>
    </header>

    <section className="hero" id="top" style={{backgroundImage:`linear-gradient(90deg,rgba(7,35,38,.94) 0%,rgba(7,35,38,.75) 45%,rgba(7,35,38,.12) 76%),url(${heroImage})`}}>
      <div className="hero-content">
        <p className="eyebrow light">Ihre Immobilienmakler in Bergisch Gladbach</p>
        <h1>Erfolgreich verkaufen.<br/>Persönlich begleitet.</h1>
        <p className="hero-copy">Lokale Marktkenntnis, moderne Vermarktung und ein starkes Netzwerk – für den Verkauf Ihrer Immobilie in Bergisch Gladbach und Umgebung.</p>
        <div className="hero-actions"><a className="button gold" href="/BGL/immobilienbewertung/">Immobilie bewerten lassen</a><a className="text-link light" href="tel:+4922049147881">+49 2204 914 7881 <span>↗</span></a></div>
        <div className="trust-row"><span>Lokale Expertise</span><span>Persönliche Beratung</span><span>Digital unterstützt</span></div>
      </div>
    </section>

    <section className="profile section" id="profil">
      <div className="profile-image"><img src="https://images.ctfassets.net/if6f7uzjzqut/51Q5Kc6ioaMR8Z5f6qgwDf/207bb0c0af4ffd48b5cf917a3eb69b2a/_DSC5868.jpg?f=face&fit=fill&fm=webp&q=70&w=1400" alt="Team von Evernest Bergisch Gladbach"/><div className="image-label"><strong>Stark & Hoffmann</strong><span>Evernest Lizenzpartner</span></div></div>
      <div className="profile-copy">
        <p className="eyebrow">Unser Profil</p><h2>Erfahrene Branchenkenner und Vertriebsprofis.</h2>
        <p className="lead">Patrick Stark und Julian Hoffmann verantworten das operative und strategische Geschäft am Bergisch Gladbacher Standort.</p>
        <p>Mit umfangreicher Vertriebs- und Branchenerfahrung begleitet unser Team Eigentümer persönlich und transparent – bei Verkauf, Kauf und Vermietung. Moderne Prozesse unterstützen unsere Arbeit, ersetzen aber nie das persönliche Gespräch.</p>
        <div className="profile-points"><span>Professionelle Immobilienbewertung</span><span>Zielgerichtete Vermarktung</span><span>Geprüfte Kaufinteressenten</span><span>Begleitung bis zum Abschluss</span></div>
        <a className="button dark" href="#kontakt">Team kennenlernen</a><a className="source-link" href="https://www.evernest.com/de/seiten/immobilienmakler-in-bergisch-gladbach/" target="_blank" rel="noreferrer">Quelle: Evernest – Team Bergisch Gladbach ↗</a>
      </div>
    </section>

    <section className="process section dark-section" id="fahrplan">
      <div className="section-head"><div><p className="eyebrow light">Verkaufsfahrplan</p><h2>In sechs Schritten zum erfolgreichen Verkauf.</h2></div><p>Ein klarer Prozess schafft Sicherheit. Wir halten Sie in jeder Phase auf dem Laufenden und kümmern uns um die vollständige Abwicklung.</p></div>
      <div className="steps">{steps.map(([number,title,text])=><article className="step" key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
    </section>

    <section className="properties section" id="immobilien">
      <div className="section-head"><div><p className="eyebrow">Unsere Immobilien</p><h2>Aktuelle Angebote in Bergisch Gladbach.</h2></div><a className="arrow-link" href="https://www.evernest.com/de/unsere-makler/bergisch-gladbach/" target="_blank" rel="noreferrer">Alle Immobilien ansehen ↗</a></div>
      <div className="property-grid">{properties.map(p=><a className="property-card" href={p.url} target="_blank" rel="noreferrer" key={p.title}><div className="property-photo"><img src={p.image} alt={p.title}/><span>Zum Exposé ↗</span></div><p className="property-place">{p.place}</p><h3>{p.title}</h3><p className="property-facts">{p.facts}</p><strong>{p.price}</strong></a>)}</div>
    </section>

    <section className="reviews section">
      <div className="reviews-title"><p className="eyebrow light">Was Kunden über uns sagen</p><h2>Vertrauen entsteht durch gute Arbeit.</h2><p className="rating">★★★★★ <span>9,2 / 10 bei Trustlocal · 91 Bewertungen</span></p><a className="source-link light" href="https://trustlocal.de/nordrhein-westfalen/bergisch-gladbach/immobilienmakler/patrick-stark-immobilien/" target="_blank" rel="noreferrer">Quelle und vollständige Bewertungen: Trustlocal ↗</a></div>
      <div className="review-grid">{reviews.map(([name,quote])=><blockquote key={name}><div>★★★★★</div><p>„{quote}“</p><cite>{name}<span>Google-Bewertung, 2025</span></cite></blockquote>)}</div>
    </section>

    <section className="cities section" id="staedte">
      <div className="section-head"><div><p className="eyebrow">Unsere Städte</p><h2>Zu Hause im Bergischen Land.</h2></div><p>Unser Standort in Bensberg verbindet lokale Marktkenntnis mit einem Netzwerk über die Stadtgrenzen hinaus.</p></div>
      <div className="city-grid">{districts.map((district)=><a className="city" href={`/BGL/stadtteile/${district.slug}/`} key={district.slug}><span>{district.code}</span><strong>{district.name}</strong><b>↗</b></a>)}</div>
    </section>

    <section className="contact section" id="kontakt">
      <div className="contact-info"><p className="eyebrow light">Kontakt</p><h2>Sprechen wir über Ihre Immobilie.</h2><p>Unverbindlich, persönlich und ohne Zeitdruck. Besuchen Sie uns im Showroom in Bensberg oder schreiben Sie uns.</p><address><strong>Stark & Hoffmann Immobilien GmbH</strong><span>Schloßstraße 41<br/>51429 Bergisch Gladbach</span><a href="tel:+4922049147881">+49 2204 914 7881</a><a href="mailto:bergischgladbach@evernest.com">bergischgladbach@evernest.com</a></address></div>
      <form action="mailto:bergischgladbach@evernest.com" method="post" encType="text/plain"><div className="form-row"><label>Vorname<input name="Vorname" required/></label><label>Nachname<input name="Nachname" required/></label></div><label>E-Mail<input name="E-Mail" type="email" required/></label><label>Telefon<input name="Telefon" type="tel"/></label><label>Worum geht es?<select name="Anliegen"><option>Immobilie verkaufen</option><option>Immobilie bewerten</option><option>Immobilie kaufen</option><option>Allgemeine Anfrage</option></select></label><label>Nachricht<textarea name="Nachricht" rows={4}/></label><label className="consent"><input type="checkbox" required/> Ich stimme der Verarbeitung meiner Angaben zur Bearbeitung der Anfrage zu.</label><button className="button gold" type="submit">Anfrage senden</button></form>
    </section>

    <footer><div className="footer-brand"><span className="brand-mark">S<span>&</span>H</span><div><strong>Stark & Hoffmann Immobilien</strong><small>Evernest Lizenzpartner Bergisch Gladbach</small></div></div><div><h4>Kontakt</h4><p>Schloßstraße 41<br/>51429 Bergisch Gladbach</p><a href="tel:+4922049147881">+49 2204 914 7881</a><a href="mailto:bergischgladbach@evernest.com">bergischgladbach@evernest.com</a></div><div><h4>Unternehmen</h4><a href="https://www.evernest.com/de/unsere-makler/bergisch-gladbach/" target="_blank" rel="noreferrer">Evernest Bergisch Gladbach</a><a href="https://www.evernest.com/de/impressum/" target="_blank" rel="noreferrer">Impressum</a><a href="https://www.evernest.com/de/datenschutz/" target="_blank" rel="noreferrer">Datenschutz</a></div><div><h4>Rechtliches</h4><p>Stark & Hoffmann Immobilien GmbH<br/>Amtsgericht Köln, HRB 116396<br/>Geschäftsführer: Patrick Stark, Julian Hoffmann</p></div></footer>
    <div className="copyright">© 2026 Stark & Hoffmann Immobilien GmbH · Alle Angaben unverbindlich. Irrtümer und Änderungen vorbehalten.</div>
  </main>;
}
