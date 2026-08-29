import type { Metadata } from "next";
import BewertungsForm from "./BewertungsForm";
import { breadcrumbSchema, businessId, businessSchema, defaultImage, faqSchema, graphSchema, siteUrl } from "../seo";

const url = `${siteUrl}/immobilienbewertung/`;
const faqs: Array<[string,string]> = [
  ["Was ist meine Immobilie in Bergisch Gladbach wert?", "Der Immobilienwert hängt von Adresse, Stadtteil, Objektart, Flächen, Grundstück, Baujahr, Zustand, Nutzung und weiteren Merkmalen ab. Die Online-Bewertung liefert eine unverbindliche Ersteinschätzung und ersetzt keine Besichtigung."],
  ["Wie wird der Hauswert in BGL ermittelt?", "Berücksichtigt werden die eingegebenen Objekt- und Lagemerkmale sowie lokale Marktdaten. Die interne Berechnung bleibt geschützt; für eine belastbare Verkaufspreisempfehlung werden Immobilie und Unterlagen zusätzlich individuell geprüft."],
  ["Was beeinflusst den Wohnungswert?", "Neben Lage, Fläche, Baujahr und Zustand sind Etage, Balkon, Aufzug, Stellplatz, Hausgeld, Instandhaltungsrücklage, Gemeinschaftseigentum und gegebenenfalls die Mietsituation relevant."],
  ["Ist der Bodenrichtwert der Grundstückswert?", "Nein. Der Bodenrichtwert ist ein amtlicher Orientierungswert für ein typisches Grundstück innerhalb einer Zone. Baurecht, Zuschnitt, Erschließung, Topografie und weitere Eigenschaften können den konkreten Grundstückswert verändern."],
];

export const metadata:Metadata={
  title:"Immobilienbewertung Bergisch Gladbach | Hauswert BGL",
  description:"Kostenlose Immobilienbewertung Bergisch Gladbach: erste Einschätzung für Hauswert, Wohnungswert, Immobilienwert und Grundstückswert in BGL.",
  alternates:{canonical:url},
  openGraph:{title:"Immobilienbewertung Bergisch Gladbach | Stark & Hoffmann",description:"Haus, Wohnung oder Grundstück in Bergisch Gladbach kostenlos einschätzen.",url,images:[{url:defaultImage,width:1568,height:1003,alt:"Immobilienbewertung Bergisch Gladbach"}]},
  twitter:{card:"summary_large_image",title:"Immobilienbewertung Bergisch Gladbach",description:"Hauswert, Wohnungswert und Grundstückswert kostenlos einschätzen.",images:[defaultImage]},
};

export default function BewertungPage(){
  const schema=graphSchema(
    businessSchema,
    {"@type":"Service","@id":`${url}#service`,name:"Immobilienbewertung Bergisch Gladbach",serviceType:"Immobilienbewertung",provider:{"@id":businessId},areaServed:{"@type":"City",name:"Bergisch Gladbach"},url},
    breadcrumbSchema([{name:"Startseite",url:`${siteUrl}/`},{name:"Immobilienbewertung",url}]),
    faqSchema(faqs),
  );
  return <main className="bewertung-page">
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}}/>
    <header className="site-header"><a className="brand" href="/"><span className="brand-mark">S<span>&amp;</span>H</span><span><strong>Stark &amp; Hoffmann</strong><small>Immobilien · Bergisch Gladbach</small></span></a><nav aria-label="Seitennavigation"><a href="#bewertung">Bewertung</a><a href="#wertfaktoren">Wertfaktoren</a><a href="#faq">FAQ</a></nav><a className="header-phone" href="tel:+4922049147881">+49 2204 914 7881</a></header>
    <section className="tool-hero"><p className="eyebrow light">Unverbindlich &amp; kostenfrei · BGL</p><h1>Immobilienbewertung Bergisch Gladbach</h1><p>Ermitteln Sie eine erste Preisspanne für Haus, Wohnung, Mehrfamilienhaus oder Grundstück. Straße, Postleitzahl und Stadtteil werden anhand des amtlichen Bergisch Gladbacher Straßenverzeichnisses geprüft.</p></section>
    <section className="tool-section section" id="bewertung"><BewertungsForm/></section>
    <section className="answer-section section" id="wertfaktoren"><p className="eyebrow">Hauswert · Wohnungswert · Grundstückswert</p><h2>Was bestimmt den Immobilienwert in Bergisch Gladbach?</h2><p className="lead">Eine belastbare Einschätzung verbindet die konkrete Mikrolage mit Objektart, Flächen, Grundstück, Baujahr, Zustand, Nutzung und Energieeffizienz. Der Bodenrichtwert ist bei Grundstücken ein Ausgangspunkt, aber niemals allein der Verkaufspreis.</p><div className="valuation-links"><a href="/haus-verkaufen-bergisch-gladbach/">Haus verkaufen →</a><a href="/wohnung-verkaufen-bergisch-gladbach/">Wohnung verkaufen →</a><a href="/grundstueck-verkaufen-bergisch-gladbach/">Grundstück verkaufen →</a></div><p className="calculation-note">Die Online-Ausgabe ist eine unverbindliche Ersteinschätzung. Der interne Rechenweg wird nicht veröffentlicht und ersetzt weder Besichtigung noch individuelle Prüfung.</p></section>
    <section className="faq-section section" id="faq"><div className="section-head"><div><p className="eyebrow">Häufige Bewertungsfragen</p><h2>Preis und Wert richtig einordnen.</h2></div><p>Kurze Antworten für Eigentümer in Bergisch Gladbach und allen 25 Stadtteilen.</p></div><div className="faq-grid">{faqs.map(([question,answer])=><details className="faq-item" key={question}><summary>{question}<span>+</span></summary><div><p>{answer}</p></div></details>)}</div><p className="editorial-note">Redaktionell geprüft durch Stark &amp; Hoffmann Immobilien GmbH · Stand 25.08.2026.</p></section>
    <footer><div className="footer-brand"><span className="brand-mark">S<span>&amp;</span>H</span><div><strong>Stark &amp; Hoffmann Immobilien</strong><small>Evernest Lizenzpartner Bergisch Gladbach</small></div></div><div><h4>Kontakt</h4><p>Schloßstraße 41<br/>51429 Bergisch Gladbach</p><a href="tel:+4922049147881">+49 2204 914 7881</a></div><div><h4>Verkaufen</h4><a href="/haus-verkaufen-bergisch-gladbach/">Haus</a><a href="/wohnung-verkaufen-bergisch-gladbach/">Wohnung</a><a href="/grundstueck-verkaufen-bergisch-gladbach/">Grundstück</a></div><div><h4>Rechtliches</h4><a href="/impressum/">Impressum</a><a href="/agb/">AGB</a><a href="/datenschutz/">Datenschutz</a></div></footer>
  </main>;
}
