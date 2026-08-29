import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Allgemeine Geschäftsbedingungen | Stark & Hoffmann Immobilien",
  description: "Allgemeine Geschäftsbedingungen der Stark & Hoffmann Immobilien GmbH.",
  alternates: { canonical: "https://immobilienmakler-bergisch-gladbach.de/agb/" },
};

export default function AgbPage() {
  return <main className="legal-page">
    <header className="site-header"><a className="brand" href="/"><span className="brand-mark">S<span>&</span>H</span><span><strong>Stark & Hoffmann</strong><small>Immobilien · Bergisch Gladbach</small></span></a><a className="header-cta" href="/immobilienbewertung/">Kostenlose Bewertung</a></header>
    <section className="legal-hero"><p className="eyebrow light">Vertragsgrundlagen</p><h1>Allgemeine Geschäftsbedingungen</h1></section>
    <section className="legal-content section">
      <article>
        <p className="legal-version">Stand: August 2026</p>
        <h2>1. Geltungsbereich</h2>
        <p>Diese Allgemeinen Geschäftsbedingungen gelten für die Nutzung dieser Website sowie für Maklerleistungen der Stark &amp; Hoffmann Immobilien GmbH. Abweichende oder ergänzende Vereinbarungen in einem konkreten Maklervertrag oder Immobilienangebot gehen diesen Bedingungen vor.</p>
        <h2>2. Angebote und Objektangaben</h2>
        <p>Unsere Immobilienangebote und sonstigen Angaben sind freibleibend und unverbindlich. Objektinformationen beruhen regelmäßig auf Angaben von Eigentümern, Behörden oder sonstigen Dritten. Wir prüfen diese Angaben mit der geschäftsüblichen Sorgfalt, übernehmen jedoch keine Gewähr für ihre Vollständigkeit und Richtigkeit. Zwischenverkauf, Zwischenvermietung sowie Irrtum und Änderungen bleiben vorbehalten.</p>
        <h2>3. Online-Immobilienbewertung</h2>
        <p>Die kostenlose Online-Bewertung liefert eine unverbindliche Ersteinschätzung auf Grundlage der vom Nutzer eingegebenen Daten und verfügbarer Marktinformationen. Sie ist weder Gutachten noch Verkehrswertermittlung im Sinne des § 194 BauGB und ersetzt keine Besichtigung oder individuelle Prüfung der Immobilie. Ein bestimmter Verkaufs- oder Kaufpreis wird nicht zugesichert.</p>
        <h2>4. Maklervertrag und Provision</h2>
        <p>Allein durch den Besuch der Website oder die Nutzung der kostenlosen Online-Bewertung entsteht keine Provisionspflicht. Ein Maklervertrag und eine etwaige Provision richten sich nach der jeweils gesondert getroffenen Vereinbarung und den Angaben im konkreten Immobilienangebot. Eine Provision ist nur geschuldet, wenn die gesetzlichen und vertraglichen Voraussetzungen erfüllt sind.</p>
        <h2>5. Pflichten der Nutzer und Auftraggeber</h2>
        <p>Nutzer und Auftraggeber stellen die für eine Anfrage oder Bewertung erforderlichen Angaben vollständig und wahrheitsgemäß bereit. Exposés und sonstige vertrauliche Informationen dürfen ohne unsere vorherige Zustimmung nicht an Dritte weitergegeben werden. Gesetzliche Informations- und Mitwirkungspflichten bleiben unberührt.</p>
        <h2>6. Haftung</h2>
        <p>Wir haften unbeschränkt für Schäden aus der Verletzung von Leben, Körper oder Gesundheit, für vorsätzlich oder grob fahrlässig verursachte Schäden sowie in den gesetzlich zwingenden Fällen. Bei leicht fahrlässiger Verletzung wesentlicher Vertragspflichten ist die Haftung auf den vertragstypischen, vorhersehbaren Schaden begrenzt. Im Übrigen ist die Haftung für leichte Fahrlässigkeit ausgeschlossen.</p>
        <h2>7. Widerrufsrecht für Verbraucher</h2>
        <p>Verbrauchern steht bei außerhalb von Geschäftsräumen geschlossenen Verträgen und Fernabsatzverträgen gegebenenfalls ein gesetzliches Widerrufsrecht zu. Soweit ein Widerrufsrecht besteht, erfolgt eine gesonderte Widerrufsbelehrung. Die kostenlose Nutzung der Online-Bewertung begründet für sich allein keinen entgeltlichen Maklervertrag.</p>
        <h2>8. Verbraucherstreitbeilegung</h2>
        <p>Wir sind nicht bereit und nicht verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>
        <h2>9. Schlussbestimmungen</h2>
        <p>Es gilt deutsches Recht. Gegenüber Verbrauchern gilt diese Rechtswahl nur, soweit dadurch zwingende Schutzvorschriften des Staates ihres gewöhnlichen Aufenthalts nicht entzogen werden. Für Kaufleute und juristische Personen des öffentlichen Rechts ist, soweit gesetzlich zulässig, Bergisch Gladbach Gerichtsstand. Sollte eine Bestimmung unwirksam sein oder werden, bleiben die übrigen Bestimmungen davon unberührt.</p>
      </article>
    </section>
    <footer><div className="footer-brand"><span className="brand-mark">S<span>&</span>H</span><div><strong>Stark &amp; Hoffmann Immobilien</strong><small>Evernest Lizenzpartner Bergisch Gladbach</small></div></div><div><h4>Kontakt</h4><p>Schloßstraße 41<br/>51429 Bergisch Gladbach</p><a href="tel:+4922049147881">+49 2204 914 7881</a><a href="mailto:bergischgladbach@evernest.com">bergischgladbach@evernest.com</a></div><div><h4>Unternehmen</h4><a href="/impressum/">Impressum</a><a href="/agb/">AGB</a><a href="/datenschutz/">Datenschutz</a></div><div><h4>Register</h4><p>Amtsgericht Köln<br/>HRB 116396</p></div></footer>
  </main>;
}
