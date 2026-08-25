import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { districtBySlug, districts } from "../../stadtteile";
import { streets } from "../../strassen";
import DistrictOffers from "../../DistrictOffers";
import { districtImages } from "../../district-images";
import { breadcrumbSchema, businessSchema, defaultImage, faqSchema, graphSchema, siteUrl } from "../../seo";

export function generateStaticParams(){ return districts.map(({slug})=>({slug})); }

export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{
  const {slug}=await params; const district=districtBySlug(slug);
  if(!district) return {};
  const image=districtImages[slug];
  return {
    title:`Immobilienmakler ${district.name} | Bodenrichtwert & Bewertung`,
    description:`Makler ${district.name}: Immobilienbewertung, Immobilienverkauf und amtliche Informationen zum Bodenrichtwert ${district.name} in Bergisch Gladbach.`,
    alternates:{canonical:`https://immobilienmakler-bergisch-gladbach.de/stadtteile/${district.slug}/`},
    openGraph:{title:`Immobilienmakler ${district.name} | Stark & Hoffmann`,description:`Immobilienbewertung und Bodenrichtwert ${district.name} – lokale Beratung in Bergisch Gladbach.`,url:`https://immobilienmakler-bergisch-gladbach.de/stadtteile/${district.slug}/`,images:[image?.src || defaultImage]},
    twitter:{card:"summary_large_image",images:[image?.src || defaultImage]},
  };
}

export default async function DistrictPage({params}:{params:Promise<{slug:string}>}){
  const {slug}=await params; const district=districtBySlug(slug); if(!district) notFound();
  const image=districtImages[slug];
  const position=districts.findIndex((item)=>item.slug===slug); const nearby=[districts[(position+24)%25],districts[(position+1)%25]];
  const districtStreets=streets.filter((street)=>street.ranges.some((range)=>range[3]===district.name));
  const url=`${siteUrl}/stadtteile/${district.slug}/`;
  const districtFaq=[
    {question:`Was ist eine Immobilie in ${district.name} wert?`,answer:`Der Wert eines Hauses, einer Wohnung oder eines Grundstücks in Bergisch Gladbach-${district.name} hängt von Mikrolage, Größe, Baujahr, Zustand, Energieeffizienz und der konkreten Bodenrichtwertzone ab. Eine belastbare Einschätzung benötigt deshalb die genaue Adresse und Objektdaten.`},
    {question:`Wie verkaufe ich ein Haus oder eine Wohnung in ${district.name}?`,answer:`Am Anfang stehen Wertermittlung und Unterlagenprüfung. Danach folgen Vermarktungsstrategie, Exposé, Interessentenprüfung, Besichtigungen, Verhandlung und notarielle Abwicklung. Stark & Hoffmann begleitet den Verkauf persönlich.`},
    {question:`Ist der Bodenrichtwert der Grundstückspreis in ${district.name}?`,answer:`Nein. Der Bodenrichtwert ist ein amtlicher Orientierungswert für eine Zone. Zuschnitt, Nutzung, Erschließung und Eigenschaften des konkreten Grundstücks können den erzielbaren Preis deutlich verändern.`},
  ];
  const structuredData=graphSchema([
    businessSchema,
    {"@type":"Service","@id":`${url}#service`,name:`Immobilienmakler und Immobilienbewertung ${district.name}`,provider:{"@id":"https://immobilienmakler-bergisch-gladbach.de/#unternehmen"},areaServed:{"@type":"Place",name:`Bergisch Gladbach-${district.name}`},url},
    breadcrumbSchema([{name:"Startseite",url:siteUrl},{name:"Bergisch Gladbach",url:`${siteUrl}/bergisch-gladbach/`},{name:district.name,url}]),
    faqSchema(districtFaq),
  ]);
  return <main className="district-page">
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(structuredData)}} />
    <header className="site-header"><a className="brand" href="/"><span className="brand-mark">S<span>&</span>H</span><span><strong>Stark & Hoffmann</strong><small>Immobilien · Bergisch Gladbach</small></span></a><nav aria-label="Seitennavigation"><a href="/#profil">Profil</a><a href="/#fahrplan">Verkaufsfahrplan</a><a href="/#immobilien">Immobilien</a><a href="/#staedte">Stadtteile</a></nav><a className="header-cta" href="#kontakt">Kostenlose Bewertung</a></header>
    <section className="district-hero" style={image?{backgroundImage:`linear-gradient(90deg,rgba(0,0,0,.84),rgba(0,0,0,.18)),url(${image.src})`}:undefined}><div><p className="eyebrow light">Makler {district.name}</p><h1>Immobilienmakler {district.name}</h1><p>Immobilien verkaufen und bewerten – mit persönlicher Beratung durch den Standort Bergisch Gladbach.</p><a className="button gold" href="#kontakt">Immobilienbewertung {district.name}</a></div>{image&&<a className="district-photo-credit" href={image.source} target="_blank" rel="noreferrer">Foto: {image.author} · Wikimedia Commons · {image.license} ↗</a>}</section>
    <section className="district-intro section"><div><p className="eyebrow">Stadtteilprofil</p><h2>{district.name} im Porträt</h2><p className="lead">{district.profile}</p><p>Zum 31. Dezember 2025 lebten hier <strong>{district.inhabitants} Einwohner</strong>. Für eine Immobilienbewertung werden neben der konkreten Lage auch Grundstück, Baujahr, Zustand, Nutzung und Energieeffizienz betrachtet.</p></div><aside><span>Stadtteilnummer</span><strong>{district.code}</strong><span>Einwohner 2025</span><strong>{district.inhabitants}</strong><small>Stand: 31.12.2025</small></aside></section>
    <DistrictOffers district={district.name} />
    <section className="street-directory section" id="strassen"><p className="eyebrow">Straßenverzeichnis</p><h2>Alle Straßen in Bergisch Gladbach-{district.name}</h2><p>Sie besitzen eine Immobilie in einer dieser {districtStreets.length} Straßen? Ein Klick auf den Straßennamen öffnet die kostenlose Immobilienbewertung mit vorausgewählter Adresse.</p><details><summary>Straßenverzeichnis {district.name} anzeigen ({districtStreets.length} Straßen)</summary><div className="district-street-grid">{districtStreets.map((street)=><div className="district-street" key={street.name}><a href={`/immobilienbewertung?street=${encodeURIComponent(street.name)}`}>{street.name}<span>Bewertung starten →</span></a><a className="map-link" href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${street.name}, Bergisch Gladbach`)}`} target="_blank" rel="noreferrer" aria-label={`${street.name} auf Google Maps anzeigen`}>⌖</a></div>)}</div></details></section>
    <section className="brw section" id="bodenrichtwert"><div className="section-head"><div><p className="eyebrow light">Bodenrichtwert {district.name}</p><h2>Bodenrichtwert {district.name}: amtliche Werte zum 01.01.2026.</h2></div><p>Der Gutachterausschuss hat für Bergisch Gladbach 286 Bodenrichtwertzonen in Wohngebieten ermittelt. Maßgeblich bleibt deshalb die Zone der konkreten Adresse.</p></div>
      {district.brw ? <div className="district-range"><span>Bodenwertspanne für Ein- und Zweifamilienhäuser</span><strong>{district.brw} €/m²</strong><p>Im Grundstücksmarktbericht 2026 ausgewiesen für: {district.brwGroup}.</p></div> : <div className="district-range no-value"><span>Ein- und Zweifamilienhäuser in {district.name}</span><strong>Keine eigene Stadtteilspanne veröffentlicht</strong><p>Der Grundstücksmarktbericht 2026 nennt für {district.name} keine separate Bodenwertspanne. Der amtliche Wert ist daher ausschließlich adressgenau über BORIS-NRW abrufbar.</p></div>}
      <h3 className="table-title">Gebietstypische Bodenrichtwerte Bergisch Gladbach</h3><div className="brw-table-wrap"><table className="brw-table"><thead><tr><th>Unbebaute Grundstücke</th><th>Gute Lage</th><th>Mittlere Lage</th><th>Einfache Lage</th></tr></thead><tbody><tr><td>Freistehende Ein- und Zweifamilienhäuser</td><td>970 €/m²</td><td>660 €/m²</td><td>510 €/m²</td></tr><tr><td>Doppelhaushälften und Reihenendhäuser</td><td>790 €/m²</td><td>570 €/m²</td><td>510 €/m²</td></tr><tr><td>Reihenmittelhäuser</td><td>850 €/m²</td><td>610 €/m²</td><td>490 €/m²</td></tr></tbody></table></div>
      <div className="source-note"><p><strong>Stichtag 01.01.2026.</strong> Die Werte gelten für baureife, erschließungs- und kanalanschlussbeitragsfreie Grundstücke. Lage, Grundstücksgröße und -tiefe, Bodenbeschaffenheit, bauliche Nutzung und Erschließungszustand können zu erheblichen Abweichungen führen.</p><div><a className="button gold" href="https://www.boris.nrw.de/" target="_blank" rel="noreferrer">Adresse in BORIS-NRW prüfen ↗</a><a className="source-link light" href="https://www.gars.nrw/stadt-gl/produkte-gl/grundstuecksmarktbericht-gl" target="_blank" rel="noreferrer">Quelle: Grundstücksmarktbericht 2026, S. 5 und 27–32 ↗</a></div></div>
    </section>
    <section className="valuation section"><p className="eyebrow">Immobilienbewertung {district.name}</p><h2>Der Bodenrichtwert {district.name} ist nur ein Teil der Bewertung.</h2><div className="valuation-grid"><p>Als Makler in {district.name} berücksichtigen wir zusätzlich Art und Maß der baulichen Nutzung, Bodenbeschaffenheit, Erschließungszustand und Grundstücksgestaltung. Diese Merkmale können zu einem vom Bodenrichtwert abweichenden Grundstückswert führen.</p><ul><li>Konkrete Bodenrichtwertzone</li><li>Art und Maß der baulichen Nutzung</li><li>Bodenbeschaffenheit und Erschließung</li><li>Zuschnitt und Gestaltung des Grundstücks</li></ul></div><a className="source-link" href="https://open.nrw/dataset/ce127d47-27d1-4f49-a4dc-65cc1dac339e" target="_blank" rel="noreferrer">Quelle: Open.NRW – Bodenrichtwerte NRW ↗</a></section>
    <section className="faq-section section"><div className="section-head"><div><p className="eyebrow">Kurz beantwortet</p><h2>Haus, Wohnung oder Grundstück in {district.name} verkaufen.</h2></div><p>Antworten für Eigentümer in Bergisch Gladbach-{district.name}.</p></div><div className="faq-grid">{districtFaq.map(item=><details className="faq-item" key={item.question}><summary>{item.question}<span>+</span></summary><div><p>{item.answer}</p></div></details>)}</div><p className="editorial-note">Stand: 25.08.2026 · Redaktion: Stark &amp; Hoffmann Immobilien · Marktdaten werden mit amtlichen Quellen belegt.</p></section>
    <section className="nearby section"><p className="eyebrow">Weitere Stadtteile</p><div>{nearby.map(item=><a href={`/stadtteile/${item.slug}`} key={item.slug}><span>Immobilienmakler</span><strong>{item.name}</strong><b>→</b></a>)}</div></section>
    <section className="district-contact section" id="kontakt"><div><p className="eyebrow light">Kostenlose Erstberatung</p><h2>Immobilienbewertung in {district.name}</h2><p>Unverbindliche Anfrage an unser Team in Bergisch Gladbach.</p></div><div><a className="button gold" href={`/immobilienbewertung/?ort=${encodeURIComponent(`Bergisch Gladbach-${district.name}`)}`}>Bewertung anfragen</a><a href="tel:+4922049147881">+49 2204 914 7881</a></div></section>
    <footer><div className="footer-brand"><span className="brand-mark">S<span>&</span>H</span><div><strong>Stark & Hoffmann Immobilien</strong><small>Evernest Lizenzpartner Bergisch Gladbach</small></div></div><div><h4>Kontakt</h4><p>Schloßstraße 41<br/>51429 Bergisch Gladbach</p><a href="tel:+4922049147881">+49 2204 914 7881</a><a href="/bergisch-gladbach/">Bergisch Gladbach</a></div><div><h4>Quellen</h4><a href="https://www.boris.nrw.de/">BORIS-NRW</a><a href="https://www.gars.nrw/stadt-gl/produkte-gl/bodenrichtwerte-gl">Gutachterausschuss</a></div><div><h4>Rechtliches</h4><a href="/impressum/">Impressum</a><a href="/agb/">AGB</a><a href="https://www.evernest.com/de/datenschutz/" target="_blank" rel="noreferrer">Datenschutz</a><p>Bodenrichtwerte sind Orientierungswerte und keine Verkehrswerte.</p></div></footer>
  </main>;
}
