import type { Metadata } from "next";
import { breadcrumbSchema, businessSchema, graphSchema, siteUrl } from "../seo";

const url = `${siteUrl}/impressum/`;
export const metadata: Metadata = {
  title: "Impressum | Stark & Hoffmann Immobilien",
  description: "Impressum der Stark & Hoffmann Immobilien GmbH in Bergisch Gladbach.",
  alternates: { canonical: url },
};

export default function ImpressumPage() {
  const schema = graphSchema(businessSchema, breadcrumbSchema([{ name: "Startseite", url: `${siteUrl}/` }, { name: "Impressum", url }]));
  return <main className="legal-page">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    <header className="site-header"><a className="brand" href="/"><span className="brand-mark">S<span>&</span>H</span><span><strong>Stark & Hoffmann</strong><small>Immobilien · Bergisch Gladbach</small></span></a><a className="header-cta" href="/immobilienbewertung/">Kostenlose Bewertung</a></header>
    <section className="legal-hero"><p className="eyebrow light">Rechtliche Angaben</p><h1>Impressum</h1></section>
    <section className="legal-content section">
      <article>
        <h2>Angaben gemäß § 5 DDG</h2>
        <p><strong>Stark &amp; Hoffmann Immobilien GmbH</strong><br/>Schloßstraße 41<br/>51429 Bergisch Gladbach<br/>Deutschland</p>
        <h3>Vertretungsberechtigte Geschäftsführer</h3>
        <p>Patrick Stark<br/>Julian Hoffmann</p>
        <h3>Kontakt</h3>
        <p>Telefon: <a href="tel:+4922049147881">+49 2204 914 7881</a><br/>E-Mail: <a href="mailto:bergischgladbach@evernest.com">bergischgladbach@evernest.com</a></p>
        <h3>Registereintrag</h3>
        <p>Registergericht: Amtsgericht Köln<br/>Handelsregisternummer: HRB 116396</p>
        <h3>Berufsbezeichnung und zuständige Kammer</h3> <p>Berufsbezeichnung: Immobilienmakler (IHK-zertifiziert)<br/>Zuständige Kammer: Industrie- und Handelskammer zu Köln<br/>Verliehen in: Deutschland</p> <h3>Erlaubnis und Aufsichtsbehörde</h3>
        <p>Erlaubnis nach § 34c Abs. 1 Satz 1 Nr. 1 Gewerbeordnung (GewO).</p>
        <p>Rheinisch-Bergischer Kreis<br/>Der Landrat<br/>Am Rübezahlwald 7<br/>51469 Bergisch Gladbach</p>
        <h3>Berufsrechtliche Regelungen</h3>
        <p><a href="https://www.gesetze-im-internet.de/gewo/__34c.html" target="_blank" rel="noreferrer">§ 34c Gewerbeordnung (GewO) ↗</a><br/><a href="https://www.gesetze-im-internet.de/gewo_34cdv/" target="_blank" rel="noreferrer">Makler- und Bauträgerverordnung (MaBV) ↗</a></p> <p>Kooperationspartner der EVERNEST GmbH | Mönkedamm 9-11 | 20457 Hamburg</p>
        <h3>Haftung für Inhalte</h3> <p>Als Diensteanbieter sind wir gemäß § 7 Abs. 1 DDG in Verbindung mit den Artikeln 4 bis 8 der Verordnung (EU) 2022/2065 (Digital Services Act) für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach Artikel 8 der Verordnung (EU) 2022/2065 sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.</p> <h3>Haftung für Links</h3> <p>Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.</p> <h3>Urheberrecht</h3> <p>Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.</p> <h3>Verbraucherstreitbeilegung</h3>
        <p>Wir sind nicht bereit und nicht verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>
        <h3>Verantwortlich für den Inhalt</h3>
        <p>Patrick Stark und Julian Hoffmann<br/>Anschrift wie oben.</p>
      </article>
    </section>
    <footer><div className="footer-brand"><span className="brand-mark">S<span>&</span>H</span><div><strong>Stark &amp; Hoffmann Immobilien</strong><small>Evernest Lizenzpartner Bergisch Gladbach</small></div></div><div><h4>Kontakt</h4><p>Schloßstraße 41<br/>51429 Bergisch Gladbach</p><a href="tel:+4922049147881">+49 2204 914 7881</a><a href="mailto:bergischgladbach@evernest.com">bergischgladbach@evernest.com</a></div><div><h4>Unternehmen</h4><a href="/impressum/">Impressum</a><a href="/agb/">AGB</a><a href="/datenschutz/">Datenschutz</a></div><div><h4>Register</h4><p>Amtsgericht Köln<br/>HRB 116396</p></div></footer>
  </main>;
}
