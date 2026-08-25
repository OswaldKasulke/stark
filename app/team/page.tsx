import type { Metadata } from "next";
import { breadcrumbSchema, businessSchema, defaultImage, graphSchema, siteUrl } from "../seo";

export const metadata: Metadata = {
  title: "Team | Immobilienmakler Bergisch Gladbach",
  description: "Das Team von Stark & Hoffmann Immobilien in Bergisch Gladbach: persönliche Ansprechpartner für Immobilienbewertung, Verkauf und Vermietung.",
  alternates: { canonical: `${siteUrl}/team/` },
  openGraph: { title: "Unser Team | Stark & Hoffmann Immobilien", description: "Ihre persönlichen Ansprechpartner in Bergisch Gladbach.", url: `${siteUrl}/team/`, images: [defaultImage] },
  twitter: { card: "summary_large_image", images: [defaultImage] },
};

const team = [
  ["Patrick Stark", "Lizenzpartner", "patrick.jpg"], ["Julian Hoffmann", "Lizenzpartner", "julian.jpg"],
  ["Johannes Brauns", "Teamlead Acquisition", "jo.jpg"], ["Vanessa Rogge", "Assistenz der Geschäftsführung", "vanessa.jpg"],
  ["Doreen Kaschner", "Operations & Marketing Managerin", "doreen.jpg"], ["Joelle Hoffmann", "Social Media Creator", "joelle.jpg"],
  ["Bernd Breuer", "Selbstständiger Senior Immobilienmakler", "bernd.jpg"], ["Christian Engelke", "Selbstständiger Immobilienmakler", "christian.jpg"],
  ["Luba Schneider", "Selbstständige Senior Immobilienmaklerin", "luba.jpg"], ["Mario Mentel", "Selbstständiger Immobilienmakler", "mario.jpg"],
  ["Robin Köppe", "Selbstständiger Immobilienmakler", "robin.jpg"], ["Sarah Di Gangi", "Selbstständige Immobilienmaklerin", "sarah.jpg"],
] as const;

export default function TeamPage() {
  const url = `${siteUrl}/team/`;
  const schema = graphSchema(businessSchema, breadcrumbSchema([{ name: "Startseite", url: siteUrl }, { name: "Team", url }]), ...team.map(([name, role, image]) => ({ "@type": "Person", name, jobTitle: role, image: `${siteUrl}/team/${image}`, worksFor: { "@id": `${siteUrl}/#immobilienmakler` } })));
  return <main className="team-page">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    <header className="site-header"><a className="brand" href="/"><span className="brand-mark">S<span>&amp;</span>H</span><span><strong>Stark &amp; Hoffmann</strong><small>Immobilien · Bergisch Gladbach</small></span></a><nav aria-label="Seitennavigation"><a href="/#profil">Profil</a><a href="/team/">Team</a><a href="/#markt">Markt</a><a href="/#staedte">Region</a></nav><a className="header-cta" href="/immobilienbewertung/">Kostenlose Bewertung</a></header>
    <section className="team-hero"><div><p className="eyebrow light">Stark &amp; Hoffmann Immobilien</p><h1>Unser Team in Bergisch Gladbach.</h1><p>Persönliche Ansprechpartner, lokale Marktkenntnis und ein gemeinsames Ziel: Eigentümer vom ersten Gespräch bis zum erfolgreichen Abschluss verlässlich zu begleiten.</p></div></section>
    <section className="team-content section"><div className="section-head"><div><p className="eyebrow">Menschen vor Ort</p><h2>Das Team hinter Stark &amp; Hoffmann.</h2></div><p>Wir verbinden persönliche Beratung mit professioneller Bewertung, Vermarktung und Verkaufsbegleitung in Bergisch Gladbach und der Region.</p></div><div className="team-grid">{team.map(([name, role, image]) => <article className="team-card" key={name}><img src={`/team/${image}`} alt={`${name} – ${role} bei Stark & Hoffmann Immobilien Bergisch Gladbach`} loading="lazy"/><div><h3>{name}</h3><p>{role}</p></div></article>)}</div><a className="source-link team-source" href="https://www.evernest.com/de/seiten/immobilienmakler-in-bergisch-gladbach/" target="_blank" rel="noreferrer">Quelle der Namen und Funktionen: Evernest Bergisch Gladbach ↗</a></section>
    <section className="district-contact section"><div><p className="eyebrow light">Persönlich kennenlernen</p><h2>Sprechen wir über Ihre Immobilie.</h2><p>Unser Team begleitet Sie bei Bewertung, Verkauf und Vermietung in Bergisch Gladbach.</p></div><div><a className="button gold" href="/immobilienbewertung/">Bewertung starten</a><a href="tel:+4922049147881">+49 2204 914 7881</a></div></section>
    <footer><div className="footer-brand"><span className="brand-mark">S<span>&amp;</span>H</span><div><strong>Stark &amp; Hoffmann Immobilien</strong><small>Evernest Lizenzpartner Bergisch Gladbach</small></div></div><div><h4>Kontakt</h4><p>Schloßstraße 41<br/>51429 Bergisch Gladbach</p><a href="tel:+4922049147881">+49 2204 914 7881</a><a href="https://www.instagram.com/evernest.bergischgladbach/" target="_blank" rel="noreferrer">Instagram ↗</a></div><div><h4>Unternehmen</h4><a href="/">Startseite</a><a href="/team/">Team</a><a href="/downloads/">Downloads</a></div><div><h4>Rechtliches</h4><a href="/impressum/">Impressum</a><a href="/agb/">AGB</a><a href="https://www.evernest.com/de/datenschutz/" target="_blank" rel="noreferrer">Datenschutz</a></div></footer>
  </main>;
}
