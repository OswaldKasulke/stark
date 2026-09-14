import type { Metadata } from "next";
import { artikel } from "./artikel";
import { RatgeberFuss, RatgeberKopf } from "./Rahmen";
import { Verlinkt } from "../Verlinkt";
import { faq } from "../haeufige-fragen";
import { breadcrumbSchema, businessId, businessSchema, defaultImage, faqSchema, graphSchema, siteUrl } from "../seo";

const url = `${siteUrl}/ratgeber/`;
const titel = "Ratgeber für Eigentümer in Bergisch Gladbach";
const beschreibung = "Fachbeiträge und häufige Fragen rund um Immobilien in Bergisch Gladbach: Recht, Kosten, Verkauf und Bewertung verständlich erklärt.";

export const metadata: Metadata = {
  title: `${titel} | Stark & Hoffmann`,
  description: beschreibung,
  alternates: { canonical: url },
  openGraph: { title: `${titel} | Stark & Hoffmann`, description: beschreibung, url, images: [defaultImage] },
};

export default function RatgeberUebersicht() {
  const schema = graphSchema(
    businessSchema,
    breadcrumbSchema([{ name: "Startseite", url: `${siteUrl}/` }, { name: "Ratgeber", url }]),
    { "@type": "CollectionPage", "@id": `${url}#seite`, url, name: titel, description: beschreibung, inLanguage: "de-DE", publisher: { "@id": businessId }, hasPart: artikel.map((a) => ({ "@type": "Article", headline: a.titel, url: `${url}${a.slug}/` })) },
    faqSchema(faq),
  );
  return <main className="legal-page rg-seite">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    <RatgeberKopf />
    <section className="legal-hero"><p className="eyebrow light">Ratgeber</p><h1>{titel}</h1><p>Fachbeiträge zu Recht, Kosten und Verkauf der eigenen Immobilie – und die Antworten auf die Fragen, die uns Eigentümer in Bergisch Gladbach am häufigsten stellen.</p></section>
    <section className="seo-services section" aria-labelledby="rg-beitraege">
      <div className="section-head"><div><p className="eyebrow">Fachbeiträge</p><h2 id="rg-beitraege">Immobilienwissen, verständlich erklärt.</h2></div><p>Jeder Beitrag erklärt ein Thema kompakt und verständlich.</p></div>
      <div className="seo-service-grid rg-overview-grid">{artikel.map((a) => <a href={`/ratgeber/${a.slug}/`} key={a.slug}><span>Ratgeber</span><h3>{a.titel}</h3><p>{a.kurz}</p><b>Weiterlesen →</b></a>)}</div>
    </section>
    <section className="faq-section section" id="faq">
      <div className="section-head"><div><p className="eyebrow">Häufige Fragen</p><h2>Was Eigentümer in Bergisch Gladbach wissen wollen.</h2></div><p>Antworten rund um Immobilienbewertung, Hausverkauf, Unterlagen und Bodenrichtwerte.</p></div>
      <div className="faq-grid">{faq.map(([question, answer]) => <details className="faq-item" key={question}><summary>{question}<span aria-hidden="true">+</span></summary><div><p><Verlinkt text={answer} /></p></div></details>)}</div>
      <div className="faq-cta"><a className="button dark" href="/immobilienbewertung/">Immobilie kostenlos bewerten</a><a href="tel:+4922049147881">Weitere Frage? +49 2204 914 7881</a></div>
      <p className="editorial-note">Redaktionell geprüft durch Stark &amp; Hoffmann Immobilien GmbH · zuletzt aktualisiert am 25.08.2026 · Marktdaten aus amtlichen Grundstücksmarktberichten.</p>
    </section>
    <RatgeberFuss />
  </main>;
}
