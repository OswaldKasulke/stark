import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Verlinkt } from "../../Verlinkt";
import { artikel, autoren, datumLang, findeArtikel, type Artikel, type Block } from "../artikel";
import { RatgeberFuss, RatgeberKopf } from "../Rahmen";
import { breadcrumbSchema, businessId, businessSchema, defaultImage, faqSchema, graphSchema, siteUrl } from "../../seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return artikel.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const a = findeArtikel((await params).slug);
  if (!a) return {};
  const url = `${siteUrl}/ratgeber/${a.slug}/`;
  return { title: a.metaTitel, description: a.beschreibung, alternates: { canonical: url }, openGraph: { title: a.metaTitel, description: a.beschreibung, url, type: "article", images: [defaultImage] } };
}

function Baustein({ b }: { b: Block }) {
  if (b.h2) return <h2>{b.h2}</h2>;
  if (b.p) return <p><Verlinkt text={b.p} /></p>;
  if (b.ul) return <ul className="rg-liste">{b.ul.map((x, i) => <li key={i}><Verlinkt text={x} /></li>)}</ul>;
  if (b.ol) return <ol className="rg-liste">{b.ol.map((x, i) => <li key={i}><Verlinkt text={x} /></li>)}</ol>;
  if (b.table) return <div className="rg-tabelle"><table><thead><tr>{b.table[0].map((z) => <th key={z}>{z}</th>)}</tr></thead><tbody>{b.table.slice(1).map((reihe, i) => <tr key={i}>{reihe.map((z, j) => <td key={j}><Verlinkt text={z} /></td>)}</tr>)}</tbody></table></div>;
  return null;
}

export default async function RatgeberArtikel({ params }: { params: Promise<{ slug: string }> }) {
  const a = findeArtikel((await params).slug);
  if (!a) notFound();
  const url = `${siteUrl}/ratgeber/${a.slug}/`;
  const weitere = (a.verwandt ?? []).map(findeArtikel).filter((x): x is Artikel => Boolean(x));
  const fragen = (a.faq ?? []).map(([question, answer]) => ({ question, answer }));
  const schema = graphSchema(
    businessSchema,
    breadcrumbSchema([{ name: "Startseite", url: `${siteUrl}/` }, { name: "Ratgeber", url: `${siteUrl}/ratgeber/` }, { name: a.titel, url }]),
    { "@type": "Article", "@id": `${url}#artikel`, headline: a.titel, description: a.beschreibung, datePublished: a.stand, dateModified: a.stand, inLanguage: "de-DE", mainEntityOfPage: url, image: defaultImage, author: autoren.map((p) => ({ "@type": "Person", name: p.name, jobTitle: p.funktion, worksFor: { "@id": businessId } })), publisher: { "@id": businessId } },
    ...(fragen.length ? [faqSchema(fragen)] : []),
  );
  return <main className="legal-page rg-seite">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    <RatgeberKopf />
    <section className="legal-hero"><p className="rg-pfad"><a href="/">Startseite</a> / <a href="/ratgeber/">Ratgeber</a></p><h1>{a.titel}</h1><p>{a.lead}</p></section>
    <section className="legal-content section">
      <article>
        <p className="rg-autoren">Von {autoren.map((p) => p.name).join(" und ")}, Geschäftsführer der Stark &amp; Hoffmann Immobilien GmbH · Stand {datumLang(a.stand)}</p>
        {a.bloecke.map((b, i) => <Baustein b={b} key={i} />)}
        {fragen.length > 0 && <div className="rg-faq"><h2>Häufige Fragen</h2>{fragen.map((f) => <details className="faq-item" key={f.question}><summary>{f.question}<span aria-hidden="true">+</span></summary><div><p><Verlinkt text={f.answer} /></p></div></details>)}</div>}
        {weitere.length > 0 && <div className="rg-weiter"><h2>Weiterlesen</h2><ul className="rg-liste">{weitere.map((w) => <li key={w.slug}><a href={`/ratgeber/${w.slug}/`}>{w.titel}</a></li>)}</ul></div>}
        <p className="rg-hinweis">Dieser Beitrag gibt einen allgemeinen Überblick und ersetzt keine Rechts-, Steuer- oder Finanzberatung im Einzelfall.</p>
      </article>
    </section>
    <section className="district-contact section"><div><p className="eyebrow light">Persönliche Beratung</p><h2>Fragen zu Ihrer Immobilie in Bergisch Gladbach?</h2><p>Wir ordnen Ihre Situation ein und besprechen den nächsten Schritt – unverbindlich.</p></div><div><a className="button gold" href="/immobilienbewertung/">Bewertung starten</a><a href="tel:+4922049147881">+49 2204 914 7881</a></div></section>
    <RatgeberFuss />
  </main>;
}
