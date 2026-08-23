import { districts } from "./stadtteile";
import ImmobilienGalerie from "./ImmobilienGalerie";

const heroImage = "https://images.ctfassets.net/if6f7uzjzqut/1JeuSYJErKOHJUm9Ojx7LE/0ce8fa4b065d01703dd781a78c71b173/bergisch_gladbach_key_visual.jpg?f=top&fit=fill&fm=webp&q=82&w=1800";

const steps = [
  ["01", "Bewertung & Erstgespräch", "Wir analysieren Lage, Zustand, Baujahr, Energieeffizienz und aktuelle Vergleichswerte – persönlich und transparent."],
  ["02", "Individuelle Strategie", "Gemeinsam legen wir Preis, Zeitplan und die passende Form der Vermarktung fest: klassisch, diskret oder Off-Market."],
  ["03", "Vorbereitung", "Wir koordinieren Pflichtunterlagen, professionelle Fotografie, Grundrisse und ein hochwertiges Exposé."],
  ["04", "Vermarktung", "Digitale Reichweite, große Immobilienportale und unser Netzwerk bringen Ihre Immobilie zu den richtigen Interessenten."],
  ["05", "Besichtigung & Prüfung", "Wir organisieren Besichtigungen, qualifizieren Kaufinteressenten und prüfen Finanzierungsnachweise."],
  ["06", "Notar & Übergabe", "Von der Verhandlung über den Notartermin bis zur protokollierten Schlüsselübergabe bleiben wir an Ihrer Seite."],
];

const legacyProperties = [
  { place:"Odenthal-Erberich · 51519", title:"Bungalow mit großem Grundstück, Pool, Doppelgaragen und viel Potenzial in Odenthal-Erberich", price:"475.000 €", image:"https://images.ctfassets.net/if6f7uzjzqut/76CeSFsWDiiAKSJb9tvCSe/8e58988f93315789dff5f7877458d5f5/2d598894-db1b-4133-ac08-58679835c64b?fm=webp&w=900&h=700&fit=fill&q=75", url:"https://www.evernest.com/de/listing/1ZKQZJSBzBfGNYG63GJxSq/" },
  { place:"Lohmar-Donrath · 53797", title:"Ein Haus für Mehrgenerationen, ein Zuhause fürs Leben: Zweifamilienhaus mit positiver Bauvoranfrage.", price:"879.000 €", image:"https://images.ctfassets.net/if6f7uzjzqut/5upwrosoUSQH08gO88KXBA/4dec6c4526f499e58140363f8ca1acd0/838dfc47-62c2-4ed0-ad9e-8b2a26f0d9d1?fm=webp&w=900&h=700&fit=fill&q=75", url:"https://www.evernest.com/de/listing/6KHhvo2dzdK42fEv3KVSH9/" },
  { place:"Bergisch Gladbach-Schildgen · 51467", title:"Charmantes freistehendes Einfamilienhaus mit 280 m² Wohnfläche – stilvolles Wohnen & Arbeiten", price:"892.000 €", image:"https://images.ctfassets.net/if6f7uzjzqut/1VdUEglILwR1pj27rLPb0/d99fce6d19050aac68244799ba3fa21d/7d3afb4b-4a74-48f9-912e-f43fe08905cc?fm=webp&w=900&h=700&fit=fill&q=75", url:"https://www.evernest.com/de/listing/4QkJceuNhZnDcrDUTfgDCy/" },
  { place:"Bergisch Gladbach-Stadtmitte · 51465", title:"Energieeffizienter Neubau-Bungalow mit Fernblick: bezugsfrei, barrierearm und flexibel nutzbar", price:"949.000 €", image:"https://images.ctfassets.net/if6f7uzjzqut/6IlBzgGyd54Glg0XcTV66q/20d7e2c8ec1c079ff17e21cfc18b220e/4f38bfb9-4bfc-4714-ab54-691cf1d6cb58?fm=webp&w=900&h=700&fit=fill&q=75", url:"https://www.evernest.com/de/listing/6hq9UOIn1AAgKSkUGRDhcN/" },
  { place:"Bergisch Gladbach-Stadtmitte · 51465", title:"Stilvolle Altbau-Doppelhaushälfte, Architektur mit Geschichte", price:"486.000 €", image:"https://images.ctfassets.net/if6f7uzjzqut/4yoN32qeWKVoJfdFDx1BkW/edc5f3e1f8318b9a86843b95bc346901/5e34cac0-b5f7-4e45-b11c-7c03fd5ab2bc?fm=webp&w=900&h=700&fit=fill&q=75", url:"https://www.evernest.com/de/listing/49onmenXN9iMpvIeb5mXxO/" },
  { place:"Odenthal-Glöbusch · 51519", title:"Exklusives Mehrgenerationenhaus mit zwei Wohneinheiten in grüner Wohnlage von Odenthal-Glöbusch", price:"875.000 €", image:"https://images.ctfassets.net/if6f7uzjzqut/56yJ2L4XSKMPwm7abkSHhO/f2fb5546df56ba09719424f20c7880b8/64e66707-0915-41a1-9810-f6ceba72cefa?fm=webp&w=900&h=700&fit=fill&q=75", url:"https://www.evernest.com/de/listing/ZUXtatV9l9NnxJLqKo0DZ/" },
  { place:"Bergisch Gladbach-Lustheide · 51427", title:"Freistehendes Einfamilienhaus mit großem Grundstück", price:"895.000 €", image:"https://images.ctfassets.net/if6f7uzjzqut/60oR1MQiK4A6kfjmUVxNkH/9337dd8a982993b4df863eef141b2eef/337733cc-e6ca-453f-9791-ac620b47be1e?fm=webp&w=900&h=700&fit=fill&q=75", url:"https://www.evernest.com/de/listing/4sOpQWb7lTSp2u8YVKd1b1/" },
  { place:"Bergisch Gladbach-Stadtmitte · 51465", title:"Klassische Eleganz auf weitläufigem Parkareal in bester Lage", price:"Preis auf Anfrage", image:"https://images.ctfassets.net/if6f7uzjzqut/xshBvzhUPe2oJUYoARyeg/9d992a4697aef920a3172182d8f6924c/8c174356-5f12-4844-8b0a-9c1e6e5f5df0?fm=webp&w=900&h=700&fit=fill&q=75", url:"https://www.evernest.com/de/listing/1b2iW8md9sRyBgpa3zrWnU/" },
  { place:"Odenthal-Erberich · 51519", title:"Vielseitiges Zweifamilienhaus mit Einliegerwohnung und großem Grundstück in Odenthal", price:"695.000 €", image:"https://images.ctfassets.net/if6f7uzjzqut/5kO8RPl3P0l6T4JG8wpxCV/3296ca9e8d382f8b811ec589b6fd7a07/7a7c0d21-d168-4771-9ca3-7023dc24b9ef?fm=webp&w=900&h=700&fit=fill&q=75", url:"https://www.evernest.com/de/listing/2a0HNTmKuXRf1lohi07T7p/" },
  { place:"Bergisch Gladbach-Stadtmitte · 51465", title:"Charmante 3-Zimmer-Wohnung mit Garten in stilvoller Villa, Bestlage Citynähe GL", price:"370.000 €", image:"https://images.ctfassets.net/if6f7uzjzqut/6VrSkiZxS3PVfDf30e21FS/3ca0b64da69a93a8c66fee80803e7475/bbf49d9a-6dc9-4932-8bf7-02e117c3821b?fm=webp&w=900&h=700&fit=fill&q=75", url:"https://www.evernest.com/de/listing/739anoEJHURONwToX1fsi9/" },
  { place:"Odenthal-Klasmühle · 51519", title:"Weite, Waldnähe & Wellness – ein Zuhause voller Möglichkeiten", price:"Verkauft", image:"https://images.ctfassets.net/if6f7uzjzqut/2qNnfq4qwHhOaNTqCHHeXm/787afb2d5086c23aa0eee3811cc6a336/52f5b64c-ce1b-421b-8d2d-7f797e1a9500?fm=webp&w=900&h=700&fit=fill&q=75", url:"https://www.evernest.com/de/listing/2xTP7fOu3avF27PR8p7Xu7/" },
  { place:"Bergisch Gladbach-Nußbaum · 51467", title:"Design trifft Lebensqualität: Architektenhaus mit Spa und Smart-Home in bester Lage von BGL-Nußbaum", price:"1.399.000 €", image:"https://images.ctfassets.net/if6f7uzjzqut/3htTTDunHlqMvj1OpSt3b7/47ed6d560cb78911a6c0d36b65591a69/a4ef604a-7cee-425d-a13a-6de57f4dc527?fm=webp&w=900&h=700&fit=fill&q=75", url:"https://www.evernest.com/de/listing/6Z7zXP636pyMpcqvah3tRt/" },
  { place:"Santanyí", title:"Cala d'Or Mallorca: „El arte de vivir bien!“", price:"1.250.000 €", image:"https://images.ctfassets.net/if6f7uzjzqut/3OQ50bWbRADIRg7vs8J2uY/f9274610b74098bed87a0fb6b7db12ce/a3ccfdf4-f7df-49e9-9f27-c34b6f483bf5?fm=webp&w=900&h=700&fit=fill&q=75", url:"https://www.evernest.com/de/listing/3pxIrXS5DaxcfNDhbTrHPX/" },
  { place:"Bergisch Gladbach-Lückerath · 51429", title:"Mit Liebe gepflegt, mit Pool gekrönt: Doppelhaushälfte in Bensberg", price:"Verkauft", image:"https://images.ctfassets.net/if6f7uzjzqut/1GohMKdyEwpKHfupI1600v/43c280f723ec8b8f192eda26b980f7e9/67e7d896-c4b0-4822-94aa-39b1f6037671?fm=webp&w=900&h=700&fit=fill&q=75", url:"https://www.evernest.com/de/listing/79T5H2ABzWbB6JhrCie8qP/" },
  { place:"Bergisch Gladbach-Refrath · 51427", title:"Hochwertige Eigentumswohnungen in KfW-40-Bauweise in Bergisch Gladbach-Refrath", price:"Ab 346.500 €", image:"https://images.ctfassets.net/if6f7uzjzqut/7e6r8vJCYnvMy3gw5Xvn3H/19af800523918cf9f65ecd86f9827012/7d92867d-15c2-48f6-9bdf-68b8b99dbb95?fm=webp&w=900&h=700&fit=fill&q=75", url:"https://www.evernest.com/de/listing/0dLo3OABJS1e4BTJ7bdtM/" },
];

const reviews = [
  ["Andreas Wierich", "Ich bin sehr zufrieden mit der unkomplizierten, kompetenten und professionellen Abwicklung des Verkaufes unseres Elternhauses."],
  ["A. Hasse", "Die Kommunikation war stets klar und offen, und ich fühlte mich in jeder Phase des Prozesses bestens betreut."],
  ["George Mukasa", "Bei den Besichtigungen selbst hat Herr Brauns auf mich einen sehr professionellen Eindruck gemacht."],
];

const marketFacts = [
  ["1.251", "Kaufverträge", "im Marktjahr 2025"],
  ["482,26 Mio. €", "Geldumsatz", "im gesamten Stadtgebiet 2025"],
  ["332", "Ein- und Zweifamilienhäuser", "Verkäufe im Marktjahr 2025"],
  ["+40,5 %", "Wohnungseigentum", "mehr Kauffälle als 2024"],
];

export default function Home() {
  return <main>
    <header className="site-header">
      <a className="brand" href="#top" aria-label="Startseite">
        <span className="brand-mark">S<span>&</span>H</span>
        <span><strong>Stark & Hoffmann</strong><small>Immobilien · Bergisch Gladbach</small></span>
      </a>
      <nav aria-label="Hauptnavigation"><a href="#profil">Profil</a><a href="#markt">Markt</a><a href="#fahrplan">Verkaufsfahrplan</a><a href="#immobilien">Immobilien</a><a href="#staedte">Stadtteile</a></nav>
      <a className="header-cta" href="/BGL/immobilienbewertung">Kostenlose Bewertung</a>
    </header>

    <section className="hero" id="top" style={{backgroundImage:`linear-gradient(90deg,rgba(0,0,0,.82) 0%,rgba(0,0,0,.5) 52%,rgba(0,0,0,.08) 82%),url(${heroImage})`}}>
      <div className="hero-content">
        <p className="eyebrow light">Ihre Immobilienmakler in Bergisch Gladbach</p>
        <h1>Erfolgreich verkaufen.<br/>Persönlich begleitet.</h1>
        <p className="hero-copy">Lokale Marktkenntnis, moderne Vermarktung und ein starkes Netzwerk – für den Verkauf Ihrer Immobilie in Bergisch Gladbach und Umgebung.</p>
        <div className="hero-actions"><a className="button gold" href="/BGL/immobilienbewertung">Immobilie bewerten lassen</a><a className="text-link light" href="tel:+4922049147881">+49 2204 914 7881 <span>↗</span></a></div>
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

    <section className="market-facts section" id="markt">
      <div className="market-facts-head"><div><p className="eyebrow">Immobilienmarkt Bergisch Gladbach</p><h2>Der Markt in Zahlen.</h2></div><p>Amtlich registrierte Transaktionen und Umsätze in Bergisch Gladbach im Marktjahr 2025.</p></div>
      <div className="market-facts-grid">{marketFacts.map(([value,label,note])=><article key={label}><strong>{value}</strong><h3>{label}</h3><p>{note}</p></article>)}</div>
      <a className="source-link" href="https://www.gars.nrw/stadt-gl/produkte-gl/grundstuecksmarktbericht-gl" target="_blank" rel="noreferrer">Quelle: Gutachterausschuss Bergisch Gladbach, Grundstücksmarktbericht 2026, S. 5, 7 und 10 ↗</a>
    </section>

    <section className="process section dark-section" id="fahrplan">
      <div className="section-head"><div><p className="eyebrow light">Verkaufsfahrplan</p><h2>In sechs Schritten zum erfolgreichen Verkauf.</h2></div><p>Ein klarer Prozess schafft Sicherheit. Wir halten Sie in jeder Phase auf dem Laufenden und kümmern uns um die vollständige Abwicklung.</p></div>
      <div className="steps">{steps.map(([number,title,text])=><article className="step" key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
    </section>

    <section className="properties section" id="immobilien">
      <div className="section-head"><div><p className="eyebrow">Unsere Immobilien</p><h2>Immobilienangebote in Bergisch Gladbach und Umgebung.</h2><p className="gallery-status">51 Einträge · nach Angebotspreis absteigend · Stand 22.08.2026</p></div><a className="arrow-link" href="https://www.evernest.com/de/search/?lat=50.9929303&amp;lng=7.1277379&amp;zoom=12" target="_blank" rel="noreferrer">Alle Immobilien ansehen ↗</a></div>
      <ImmobilienGalerie />
    </section>

    <section className="reviews section">
      <div className="reviews-title"><p className="eyebrow light">Was Kunden über uns sagen</p><h2>Vertrauen entsteht durch gute Arbeit.</h2><p className="rating">★★★★★ <span>9,2 / 10 bei Trustlocal · 91 Bewertungen</span></p><a className="source-link light" href="https://trustlocal.de/nordrhein-westfalen/bergisch-gladbach/immobilienmakler/patrick-stark-immobilien/" target="_blank" rel="noreferrer">Quelle und vollständige Bewertungen: Trustlocal ↗</a></div>
      <div className="review-grid">{reviews.map(([name,quote])=><blockquote key={name}><div>★★★★★</div><p>„{quote}“</p><cite>{name}<span>Google-Bewertung, 2025</span></cite></blockquote>)}</div>
    </section>

    <section className="cities section" id="staedte">
      <div className="section-head"><div><p className="eyebrow">Unsere Städte</p><h2>Zu Hause im Bergischen Land.</h2></div><p>Unser Standort in Bensberg verbindet lokale Marktkenntnis mit einem Netzwerk über die Stadtgrenzen hinaus.</p></div>
      <div className="city-grid">{districts.map((district)=><a className="city" href={`/stadtteile/${district.slug}`} key={district.slug}><span>{district.code}</span><strong>{district.name}</strong><b>↗</b></a>)}</div>
    </section>

    <section className="contact section" id="kontakt">
      <div className="contact-info"><p className="eyebrow light">Kontakt</p><h2>Sprechen wir über Ihre Immobilie.</h2><p>Unverbindlich, persönlich und ohne Zeitdruck. Besuchen Sie uns im Showroom in Bensberg oder schreiben Sie uns.</p><address><strong>Stark & Hoffmann Immobilien GmbH</strong><span>Schloßstraße 41<br/>51429 Bergisch Gladbach</span><a href="tel:+4922049147881">+49 2204 914 7881</a><a href="mailto:bergischgladbach@evernest.com">bergischgladbach@evernest.com</a></address></div>
      <form action="mailto:bergischgladbach@evernest.com" method="post" encType="text/plain"><div className="form-row"><label>Vorname<input name="Vorname" required/></label><label>Nachname<input name="Nachname" required/></label></div><label>E-Mail<input name="E-Mail" type="email" required/></label><label>Telefon<input name="Telefon" type="tel"/></label><label>Worum geht es?<select name="Anliegen"><option>Immobilie verkaufen</option><option>Immobilie bewerten</option><option>Immobilie kaufen</option><option>Allgemeine Anfrage</option></select></label><label>Nachricht<textarea name="Nachricht" rows={4}/></label><label className="consent"><input type="checkbox" required/> Ich stimme der Verarbeitung meiner Angaben zur Bearbeitung der Anfrage zu.</label><button className="button gold" type="submit">Anfrage senden</button></form>
    </section>

    <footer><div className="footer-brand"><span className="brand-mark">S<span>&</span>H</span><div><strong>Stark & Hoffmann Immobilien</strong><small>Evernest Lizenzpartner Bergisch Gladbach</small></div></div><div><h4>Kontakt</h4><p>Schloßstraße 41<br/>51429 Bergisch Gladbach</p><a href="tel:+4922049147881">+49 2204 914 7881</a><a href="mailto:bergischgladbach@evernest.com">bergischgladbach@evernest.com</a></div><div><h4>Unternehmen</h4><a href="https://www.evernest.com/de/unsere-makler/bergisch-gladbach/" target="_blank" rel="noreferrer">Evernest Bergisch Gladbach</a><a href="https://www.evernest.com/de/impressum/" target="_blank" rel="noreferrer">Impressum</a><a href="https://www.evernest.com/de/datenschutz/" target="_blank" rel="noreferrer">Datenschutz</a></div><div><h4>Rechtliches</h4><p>Stark & Hoffmann Immobilien GmbH<br/>Amtsgericht Köln, HRB 116396<br/>Geschäftsführer: Patrick Stark, Julian Hoffmann</p></div></footer>
    <div className="copyright">© 2026 Stark & Hoffmann Immobilien GmbH · Alle Angaben unverbindlich. Irrtümer und Änderungen vorbehalten.</div>
  </main>;
}
