import type { Metadata } from "next";
import { breadcrumbSchema, businessId, businessSchema, defaultImage, faqSchema, graphSchema, siteUrl } from "./seo";

type SaleKind = "haus" | "wohnung" | "grundstueck";

const content = {
  haus: {
    title: "Haus verkaufen Bergisch Gladbach",
    metaTitle: "Haus verkaufen Bergisch Gladbach | Makler BGL",
    description: "Haus verkaufen in Bergisch Gladbach: Hauswert, Unterlagen, Vermarktung und Ablauf mit lokalem Immobilienmakler für alle 25 Stadtteile.",
    intro: "Wer ein Haus in Bergisch Gladbach verkaufen möchte, benötigt einen belastbaren Hauswert, vollständige Unterlagen und eine Vermarktung, die zur Lage und zum Gebäude passt. Stark & Hoffmann begleitet Einfamilienhäuser, Doppelhaushälften, Reihenhäuser und Mehrfamilienhäuser in allen 25 Stadtteilen.",
    valueTitle: "Was ist mein Haus in Bergisch Gladbach wert?",
    valueText: "Der Hauswert hängt nicht allein von Wohnfläche und Baujahr ab. Relevant sind unter anderem Stadtteil, Straße, Grundstück, Bodenrichtwertzone, Modernisierungszustand, Energieeffizienz, Ausstattung, Nutzung und die Nachfrage nach vergleichbaren Häusern. Die Online-Bewertung liefert eine erste Orientierung; eine belastbare Verkaufspreisempfehlung erfordert die Prüfung des konkreten Hauses.",
    checkIntro: "Der Preis eines Hauses entsteht nicht aus Wohnfläche mal Quadratmeterpreis. Diese Punkte gehen wir bei der Besichtigung durch — so weit sie sich ohne Gutachten oder Behördenauskunft klären lassen. Wo das nicht reicht, sagen wir Ihnen, welcher Schritt Klarheit bringt.",
    checks: [
      ["Lage und Grundstück", "Mikrolage innerhalb des Stadtteils, Zuschnitt und Ausrichtung des Grundstücks, Bebaubarkeit nach Bebauungsplan oder § 34 BauGB, mögliche Teilungs- oder Nachverdichtungsreserven, Erschließungszustand und offene Erschließungsbeiträge."],
      ["Bausubstanz", "Zustand von Dach, Fassade, Fenstern und Kellerabdichtung. Feuchtigkeitsspuren und Risse. Alter und Zustand von Elektrik, Wasser- und Abwasserleitungen, Heizungsanlage mit Baujahr und Energieträger, Bäder und Sanitärstränge."],
      ["Energetischer Stand", "Dämmung von Dach, Fassade und Kellerdecke, Verglasung der Fenster, Art und Alter der Wärmeerzeugung, Energieausweis mit Kennwert und Effizienzklasse. Was bereits gemacht wurde, zählt genauso wie das, was noch aussteht."],
      ["Flächen und Grundriss", "Wohn- und Nutzfläche nach Wohnflächenverordnung nachgerechnet statt aus alten Unterlagen übernommen. Dazu Ausbaureserven im Dach, Keller- und Garagenflächen, Anbauten und Wintergärten samt der Frage, ob sie genehmigt sind."],
      ["Grundbuch und Rechte", "Alle drei Abteilungen: Eigentümerstellung, Wege- und Leitungsrechte, Wohnrechte und Nießbrauch, Vorkaufsrechte, valutierende Grundschulden. Dazu Baulastenverzeichnis, Bauakte mit Genehmigungen, Denkmalschutz und Sanierungssatzungen."],
      ["Vermietung", "Bei vermieteten Objekten Mietverträge, IST-Miete gegen ortsübliche Vergleichsmiete, Laufzeiten und Kündigungsschutz — das entscheidet darüber, ob Selbstnutzer als Käufer überhaupt in Frage kommen."],
    ] as Array<[string,string]>,
    checkNote: "Zwei baugleiche Häuser derselben Straße können weit auseinanderliegen — wegen einer offenen Baulast, einer 30 Jahre alten Heizung oder einer nie genehmigten Dachgaube. Solche Punkte kommen sonst erst beim Notartermin auf den Tisch, wenn sie am teuersten sind.",
    documents: ["Grundbuchauszug und Flurkarte", "Grundrisse sowie Wohn- und Nutzflächenberechnung", "Energieausweis und Bauunterlagen", "Nachweise über Modernisierungen, Rechte und Belastungen"],
    steps: ["Hauswert und lokale Vergleichslage prüfen", "Unterlagen und Verkaufsstrategie vorbereiten", "Haus professionell präsentieren und Käufer qualifizieren", "Verhandlung, Notar und Übergabe begleiten"],
    faq: [
      ["Wie viel kostet ein Haus in Bergisch Gladbach?", "Hauspreise unterscheiden sich deutlich nach Stadtteil, Mikrolage, Grundstück, Baujahr, Zustand und Ausstattung. Ein pauschaler Quadratmeterpreis reicht für den realistischen Hauswert nicht aus."],
      ["Wann ist der beste Zeitpunkt, ein Haus in BGL zu verkaufen?", "Der passende Zeitpunkt hängt von persönlicher Planung, Objektzustand, Nachfrage und Finanzierungsmöglichkeiten der Käufer ab. Eine aktuelle Bewertung zeigt, welche Preis- und Vermarktungsstrategie zur Marktlage passt."],
      ["Welche Kosten entstehen beim Hausverkauf?", "Mögliche Kosten betreffen Energieausweis, fehlende Unterlagen, Vermarktung, Grundbuchthemen oder eine vorzeitige Darlehensablösung. Welche Positionen tatsächlich anfallen, wird vor dem Verkaufsstart geklärt."],
    ] as Array<[string,string]>,
  },
  wohnung: {
    title: "Wohnung verkaufen Bergisch Gladbach",
    metaTitle: "Wohnung verkaufen Bergisch Gladbach | Makler BGL",
    description: "Wohnung verkaufen in Bergisch Gladbach: Wohnungswert, WEG-Unterlagen, Preis und Vermarktung mit lokalem Immobilienmakler.",
    intro: "Beim Verkauf einer Eigentumswohnung in Bergisch Gladbach zählen neben Lage, Wohnfläche und Zustand auch das Gemeinschaftseigentum, die Rücklage und die Beschlüsse der Wohnungseigentümergemeinschaft. Stark & Hoffmann ordnet diese Faktoren ein und richtet die Vermarktung an der passenden Käufergruppe aus.",
    valueTitle: "Was ist meine Wohnung in Bergisch Gladbach wert?",
    valueText: "Der Wohnungswert wird durch Stadtteil, Mikrolage, Etage, Aufzug, Balkon, Stellplatz, Grundriss, Baujahr, Modernisierung und Energiezustand beeinflusst. Hinzu kommen Hausgeld, Erhaltungsrücklage, geplante Maßnahmen und bei vermieteten Wohnungen die Mietsituation. Vergleichspreise sind nur übertragbar, wenn die Wohnungen tatsächlich ähnlich sind.",
    checkIntro: "Bei einer Eigentumswohnung entscheidet nicht nur die Wohnung über den Preis, sondern ebenso das Gebäude und der Zustand der Eigentümergemeinschaft. Diese Punkte gehen wir durch — so weit die Verwaltungsunterlagen und die Besichtigung sie hergeben. Wo etwas offenbleibt, sagen wir Ihnen, welcher Schritt Klarheit bringt.",
    checks: [
      ["Die Wohnung selbst", "Grundriss und Schnitt, Geschosslage und Aufzug, Ausrichtung und Belichtung, Balkon, Loggia oder Terrasse, Stellplatz und Kellerabteil. Dazu der Zustand von Bad, Küche, Bodenbelägen und Fenstern sowie Lärm- und Geruchsbelastung der konkreten Lage im Haus."],
      ["Das Gemeinschaftseigentum", "Dach, Fassade, Kellerabdichtung, Treppenhaus und Aufzug. Besonders wichtig: Sind die Steigleitungen erneuert? Gibt es eine Fassaden- und Kellerdeckendämmung, ist das Dach gedämmt, sind die Fenster zwei- oder dreifach verglast? Wie alt ist die zentrale Heizungsanlage?"],
      ["Beschlusslage der Gemeinschaft", "Protokolle der letzten Eigentümerversammlungen: Was ist beschlossen, was ist aufgeschoben, stehen Sonderumlagen an? Ein beschlossener, aber noch nicht bezahlter Fassadenanstrich gehört genauso auf den Tisch wie ein abgelehnter Aufzugseinbau."],
      ["Zahlen der WEG", "Höhe der Erhaltungsrücklage im Verhältnis zum Sanierungsstau, Hausgeld getrennt nach umlagefähigem und nicht umlagefähigem Anteil, Wirtschaftsplan und die letzten Jahresabrechnungen, Zahlungsrückstände einzelner Eigentümer."],
      ["Teilungserklärung und Grundbuch", "Miteigentumsanteil, Aufteilungsplan gegen den tatsächlichen Zustand geprüft, Sondernutzungsrechte an Garten, Stellplatz oder Dachboden, Regelungen der Gemeinschaftsordnung zu Vermietung und baulichen Veränderungen. Im Wohnungsgrundbuch die Abteilungen II und III."],
      ["Vermietung", "Mietvertrag, IST-Miete gegen ortsübliche Vergleichsmiete, Laufzeit und Kündigungsschutz. Eine deutlich unter Markt vermietete Wohnung wird über den Ertrag bewertet, nicht über den Vergleichswert — der Käuferkreis beschränkt sich dann auf Kapitalanleger."],
    ] as Array<[string,string]>,
    checkNote: "Zwei gleich große Wohnungen im selben Haus können weit auseinanderliegen — wegen einer leeren Rücklage bei anstehender Dachsanierung, einer beschlossenen Sonderumlage oder eines Sondernutzungsrechts am Garten. Wer diese Punkte vor der Vermarktung kennt, verhandelt sie nicht erst beim Notar.",
    documents: ["Teilungserklärung und Aufteilungsplan", "Protokolle der Eigentümerversammlungen", "Wirtschaftsplan, Hausgeld und Erhaltungsrücklage", "Energieausweis, Grundriss und gegebenenfalls Mietvertrag"],
    steps: ["Wohnungswert und Zielgruppe bestimmen", "WEG-Unterlagen vollständig aufbereiten", "Eigennutzer oder Kapitalanleger gezielt ansprechen", "Finanzierung, Notar und Übergabe koordinieren"],
    faq: [
      ["Wie hoch sind die Wohnungspreise in Bergisch Gladbach?", "Wohnungspreise variieren nach Stadtteil, Baujahr, Wohnfläche, Ausstattung und Zustand des Hauses. Für einen belastbaren Wohnungswert müssen außerdem Hausgeld, Rücklage und anstehende Maßnahmen geprüft werden."],
      ["Kann ich eine vermietete Wohnung verkaufen?", "Ja. Das Mietverhältnis bleibt grundsätzlich bestehen. Für Kapitalanleger sind Miete, Mietvertrag, Bewirtschaftungskosten und mögliche Entwicklungsperspektiven besonders wichtig."],
      ["Welche WEG-Unterlagen brauchen Käufer?", "Regelmäßig benötigt werden Teilungserklärung, Aufteilungsplan, Protokolle, Wirtschaftsplan, Hausgeldabrechnung und Angaben zur Erhaltungsrücklage. Je vollständiger die Unterlagen, desto besser kann ein Käufer entscheiden."],
    ] as Array<[string,string]>,
  },
  grundstueck: {
    title: "Grundstück verkaufen Bergisch Gladbach",
    metaTitle: "Grundstück verkaufen Bergisch Gladbach | Makler BGL",
    description: "Grundstück verkaufen in Bergisch Gladbach: Grundstückswert, Bodenrichtwert, Baurecht und Vermarktung mit lokalem Immobilienmakler.",
    intro: "Der Verkauf eines Grundstücks in Bergisch Gladbach beginnt mit der Frage, was tatsächlich gebaut oder entwickelt werden kann. Bodenrichtwert, Planungsrecht, Erschließung, Zuschnitt und Topografie müssen gemeinsam betrachtet werden. Stark & Hoffmann bereitet diese Faktoren für die Vermarktung nachvollziehbar auf.",
    valueTitle: "Was ist mein Grundstück in Bergisch Gladbach wert?",
    valueText: "Der Bodenrichtwert ist ein amtlicher Orientierungswert für ein typisches Grundstück in einer Zone, aber nicht automatisch der Grundstückspreis. Der konkrete Grundstückswert kann durch Größe, Zuschnitt, Tiefe, Erschließung, Altlasten, Rechte, Topografie und Art sowie Maß der zulässigen Bebauung erheblich abweichen.",
    checkIntro: "Der Bodenrichtwert gilt für ein Normgrundstück in einem bestimmten Entwicklungszustand. Was Ihr Grundstück davon unterscheidet, klären diese Punkte — so weit sie sich ohne Bauvoranfrage oder Bodengutachten beantworten lassen. Wo das nicht reicht, sagen wir Ihnen, welcher Schritt Klarheit bringt.",
    checks: [
      ["Baurecht", "Liegt ein Bebauungsplan vor, gelten dessen Festsetzungen zu Art und Maß der baulichen Nutzung, Grund- und Geschossflächenzahl, Bauweise und Baugrenzen. Ohne Plan entscheidet die Einfügung in die Umgebung nach § 34 BauGB, im Außenbereich § 35 BauGB. Wo das offen ist, schafft eine Bauvoranfrage Klarheit."],
      ["Entwicklungszustand", "Bauerwartungsland, Rohbauland oder baureifes Land — die Unterschiede sind erheblich. Ein Bodenrichtwert für baureifes Land lässt sich nicht auf ein Grundstück übertragen, das diesen Zustand noch nicht erreicht hat."],
      ["Erschließung", "Anschlüsse an Straße, Kanal, Wasser, Strom und Telekommunikation, und ob Erschließungs- sowie Kanalanschlussbeiträge bereits gezahlt sind. Offene Beiträge gehen zulasten des Kaufpreises."],
      ["Zuschnitt und Baugrund", "Tiefe und Breite, Hanglage, Zuwegung und Erreichbarkeit für Baufahrzeuge, geschützter Baumbestand nach Baumschutzsatzung. Dazu Tragfähigkeit des Baugrunds, Grundwasserstand sowie Hinweise aus Altlasten- und Kampfmittelverdachtskataster."],
      ["Rechte und Lasten", "Grundbuch Abteilung II mit Wege-, Leitungs- und Überfahrtsrechten, dazu das Baulastenverzeichnis: Abstandsflächen- und Vereinigungsbaulasten können die bebaubare Fläche deutlich verkleinern. Ebenso zu prüfen sind Denkmalschutz, Sanierungssatzungen und gemeindliche Vorkaufsrechte nach § 24 BauGB."],
      ["Bestehende Bebauung", "Steht noch ein Gebäude, sind Abbruchkosten, Entsorgung belasteter Baustoffe und der Zeitbedarf für den Rückbau einzurechnen — sie mindern den erzielbaren Preis unmittelbar."],
    ] as Array<[string,string]>,
    checkNote: "Der Bodenrichtwert mal Quadratmeter ist eine Ausgangsgröße, kein Kaufpreis. Eine Abstandsflächenbaulast, ein nicht erschlossener Zuschnitt oder ein geschützter Baumbestand an der falschen Stelle können die bebaubare Fläche so weit einschränken, dass der Wert deutlich darunter liegt — oder umgekehrt: ein teilbares Grundstück deutlich darüber.",
    documents: ["Aktueller Grundbuchauszug und Flurkarte", "Bebauungsplan oder Auskunft zum Planungsrecht", "Erschließungs- und Baulasteninformationen", "Vermessung, Altlasten- und gegebenenfalls Bodengutachten"],
    steps: ["Bodenrichtwertzone und Grundstücksmerkmale prüfen", "Baurecht und Entwicklungsmöglichkeiten klären", "Zielgruppe und Angebotsstrategie festlegen", "Kaufprüfung, Notar und Übergabe begleiten"],
    faq: [
      ["Wie hoch ist der Grundstückspreis in Bergisch Gladbach?", "Ein einheitlicher Grundstückspreis existiert nicht. Bergisch Gladbach besitzt zahlreiche Bodenrichtwertzonen; zusätzlich entscheiden Baurecht, Erschließung, Zuschnitt, Topografie und Mikrolage über den erzielbaren Wert."],
      ["Ist der Bodenrichtwert gleich dem Verkaufspreis?", "Nein. Der Bodenrichtwert beschreibt ein typisches unbebautes Grundstück innerhalb einer Zone. Der Marktpreis des konkreten Grundstücks kann wegen seiner individuellen Eigenschaften darüber oder darunter liegen."],
      ["Kann ein Grundstück mit Altbestand verkauft werden?", "Ja. Entscheidend ist, ob Käufer den vorhandenen Baukörper nutzen, erweitern oder durch eine Neubebauung ersetzen können. Abrisskosten und baurechtliche Möglichkeiten beeinflussen den Grundstückswert."],
    ] as Array<[string,string]>,
  },
};

export function saleMetadata(kind: SaleKind): Metadata {
  const page = content[kind];
  const url = `${siteUrl}/${kind}-verkaufen-bergisch-gladbach/`;
  return { title: page.metaTitle, description: page.description, alternates: { canonical: url }, openGraph: { title: page.metaTitle, description: page.description, url, images: [{ url: defaultImage, width: 1568, height: 1003, alt: page.title }] }, twitter: { card: "summary_large_image", title: page.metaTitle, description: page.description, images: [defaultImage] } };
}

export default function VerkaufenPage({ kind }: { kind: SaleKind }) {
  const page = content[kind];
  const url = `${siteUrl}/${kind}-verkaufen-bergisch-gladbach/`;
  const schema = graphSchema(
    businessSchema,
    { "@type": "Service", "@id": `${url}#service`, name: page.title, serviceType: page.title, provider: { "@id": businessId }, areaServed: { "@type": "City", name: "Bergisch Gladbach" }, url },
    breadcrumbSchema([{ name: "Startseite", url: `${siteUrl}/` }, { name: page.title, url }]),
    faqSchema(page.faq),
  );
  return <main className="sale-page">
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}}/>
    <header className="site-header"><a className="brand" href="/"><span className="brand-mark">S<span>&amp;</span>H</span><span><strong>Stark &amp; Hoffmann</strong><small>Immobilien · Bergisch Gladbach</small></span></a><nav aria-label="Seitennavigation"><a href="#wert">Wert</a><a href="#pruefung">Prüfung</a><a href="#unterlagen">Unterlagen</a><a href="#ablauf">Ablauf</a><a href="#faq">FAQ</a></nav><a className="header-cta" href="/immobilienbewertung/">Kostenlose Bewertung</a></header>
    <section className="sale-hero"><div><p className="eyebrow light">Immobilienmakler Bergisch Gladbach · BGL</p><h1>{page.title}</h1><p>{page.intro}</p><div className="hero-actions"><a className="button gold" href="/immobilienbewertung/">Wert kostenlos einschätzen</a><a className="text-link light" href="tel:+4922049147881">+49 2204 914 7881 ↗</a></div></div></section>
    <section className="answer-section section" id="wert"><p className="eyebrow">Preis &amp; Wert</p><h2>{page.valueTitle}</h2><p className="lead">{page.valueText}</p><div className="answer-source"><strong>Kurzantwort:</strong> Ein realistischer Verkaufspreis entsteht aus konkreter Lage, Objektmerkmalen, Unterlagen und aktueller Nachfrage – nicht aus einem einzelnen pauschalen Quadratmeterwert.</div></section>
    <section className="check-section section" id="pruefung"><div className="section-head"><div><p className="eyebrow">Objektprüfung</p><h2>Was wir prüfen.</h2></div><p>{page.checkIntro}</p></div><div className="checks">{page.checks.map(([titel,text])=><p key={titel}><b>{titel}.</b> {text}</p>)}</div><div className="callout"><b>Warum das den Preis bewegt</b><p>{page.checkNote}</p></div></section>
    <section className="sale-columns section" id="unterlagen"><article><p className="eyebrow">Vorbereitung</p><h2>Welche Unterlagen werden benötigt?</h2><ul>{page.documents.map(item=><li key={item}>{item}</li>)}</ul><a className="source-link" href="/downloads/">Kostenlose Checklisten herunterladen →</a></article><article id="ablauf"><p className="eyebrow">Verkaufsablauf</p><h2>Vier klare Schritte.</h2><ol>{page.steps.map((item,index)=><li key={item}><span>0{index+1}</span>{item}</li>)}</ol></article></section>
    <section className="faq-section section" id="faq"><div className="section-head"><div><p className="eyebrow">Häufige Fragen</p><h2>Antworten für Eigentümer in Bergisch Gladbach.</h2></div><p>Kurze, belastbare Antworten zu Verkauf, Preis und Wert.</p></div><div className="faq-grid">{page.faq.map(([question,answer])=><details className="faq-item" key={question}><summary>{question}<span>+</span></summary><div><p>{answer}</p></div></details>)}</div><p className="editorial-note">Redaktionell geprüft durch Stark &amp; Hoffmann Immobilien GmbH · Stand 25.08.2026.</p></section>
    <section className="district-contact section"><div><p className="eyebrow light">Kostenlose Ersteinschätzung</p><h2>Verkauf in Bergisch Gladbach vorbereiten.</h2><p>Wir ordnen Lage, Unterlagen und Objektmerkmale ein und besprechen den passenden nächsten Schritt.</p></div><div><a className="button gold" href="/immobilienbewertung/">Bewertung starten</a><a href="tel:+4922049147881">+49 2204 914 7881</a></div></section>
    <footer><div className="footer-brand"><span className="brand-mark">S<span>&amp;</span>H</span><div><strong>Stark &amp; Hoffmann Immobilien</strong><small>Evernest Lizenzpartner Bergisch Gladbach</small></div></div><div><h4>Verkaufen</h4><a href="/haus-verkaufen-bergisch-gladbach/">Haus verkaufen</a><a href="/wohnung-verkaufen-bergisch-gladbach/">Wohnung verkaufen</a><a href="/grundstueck-verkaufen-bergisch-gladbach/">Grundstück verkaufen</a></div><div><h4>Region</h4><a href="/bergisch-gladbach/">Bergisch Gladbach</a><a href="/#staedte">Stadtteile &amp; Umland</a></div><div><h4>Rechtliches</h4><a href="/impressum/">Impressum</a><a href="/agb/">AGB</a></div></footer>
  </main>;
}
