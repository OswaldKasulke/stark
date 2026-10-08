import type { Metadata } from "next";
import { breadcrumbSchema, businessSchema, defaultImage, graphSchema, siteUrl } from "../seo";
import SiteFooter from "@/app/SiteFooter";
import HauptNav from "@/app/HauptNav";
import SuchprofilForm from "@/app/SuchprofilForm";

const url = `${siteUrl}/suchprofil/`;
export const metadata: Metadata = { title: "Suchprofil anlegen | Immobilie kaufen in Bergisch Gladbach", description: "Hinterlegen Sie Ihr Suchprofil für eine Wohnung, ein Haus oder ein Grundstück in Bergisch Gladbach. Wir melden uns, sobald ein passendes Angebot da ist.", alternates: { canonical: url }, openGraph: { title: "Suchprofil anlegen | Stark & Hoffmann Immobilien", description: "Hinterlegen Sie, was Sie in Bergisch Gladbach suchen.", url, images: [defaultImage] }, twitter: { card: "summary_large_image", images: [defaultImage] } };

export default function SuchprofilPage() {
  const schema = graphSchema(businessSchema, breadcrumbSchema([{ name: "Startseite", url: `${siteUrl}/` }, { name: "Suchprofil", url }]));
  return <main className="suchprofil-page">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    <header className="site-header"><a className="brand" href="/" aria-label="Startseite"><span className="brand-mark">S<span>&amp;</span>H</span><span><strong>Stark &amp; Hoffmann</strong><small>Immobilien · Bergisch Gladbach</small></span></a><HauptNav/><a className="header-cta" href="/immobilienbewertung/">Kostenlose Bewertung</a></header>
    <section className="contact section" id="suchprofil">
      <div className="contact-info"><p className="eyebrow light">Suchprofil</p><h1>Sagen Sie uns, was Sie suchen.</h1><p>Hinterlegen Sie Objektart, Lage und Budget. Wir melden uns, sobald ein passendes Angebot da ist.</p><address><strong>Stark &amp; Hoffmann Immobilien GmbH</strong><span>Schloßstraße 41<br/>51429 Bergisch Gladbach</span><a href="tel:+4922049147881">+49 2204 914 7881</a><a href="mailto:patrick.stark@evernest.com">patrick.stark@evernest.com</a></address></div>
      <SuchprofilForm/>
    </section>
    <SiteFooter/>
  </main>;
}
