import type { Metadata } from "next";
import { breadcrumbSchema, businessSchema, graphSchema, siteUrl } from "../seo";
import SiteFooter from "@/app/SiteFooter";
import HauptNav from "@/app/HauptNav";

const url = `${siteUrl}/datenschutz/`;

export const metadata: Metadata = {
  title: "Datenschutzerklärung | Stark & Hoffmann Immobilien Bergisch Gladbach",
  description: "Datenschutzerklärung von Stark & Hoffmann Immobilien für immobilienmakler-bergisch-gladbach.de: verantwortliche Stelle, Hosting, Kontakt- und Bewertungsformular, externe Inhalte und Ihre Rechte.",
  alternates: { canonical: url },
  robots: { index: true, follow: true },
};

export default function DatenschutzPage(){
  const schema = graphSchema(businessSchema, breadcrumbSchema([{ name: "Startseite", url: `${siteUrl}/` }, { name: "Datenschutz", url }]));
  return <main className="legal-page">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    <header className="site-header"><a className="brand" href="/"><span className="brand-mark">S<span>&amp;</span>H</span><span><strong>Stark &amp; Hoffmann</strong><small>Immobilien · Bergisch Gladbach</small></span></a><HauptNav/><a className="header-phone" href="tel:+4922049147881">+49 2204 914 7881</a></header>

    <section className="legal-hero"><p className="eyebrow light">Rechtliches</p><h1>Datenschutzerklärung</h1><p>Diese Erklärung beschreibt, welche personenbezogenen Daten beim Besuch von immobilienmakler-bergisch-gladbach.de verarbeitet werden und wozu.</p></section>

    <section className="legal-content section">
      <article>
        <h2>1. Verantwortliche Stelle</h2>
        <p>Verantwortlich für die Datenverarbeitung auf dieser Website ist:</p>
        <p>Stark &amp; Hoffmann Immobilien GmbH<br/>Schloßstraße 41<br/>51429 Bergisch Gladbach<br/>Amtsgericht Köln, HRB 116396<br/>Geschäftsführer: Patrick Stark, Julian Hoffmann</p>
        <p>Telefon: <a href="tel:+4922049147881">+49 2204 914 7881</a><br/>E-Mail: <a href="mailto:bergischgladbach@evernest.com">bergischgladbach@evernest.com</a></p>
        <p>Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten entscheidet.</p>

        <h2>2. Hosting</h2>
        <p>Diese Website wird bei einem externen Dienstleister gehostet: ALL-INKL.COM – Neue Medien Münnich, Inhaber René Münnich, Hauptstraße 68, 02742 Friedersdorf. Beim Aufruf der Website werden personenbezogene Daten auf den Servern des Hosters verarbeitet, insbesondere die in Abschnitt 4 genannten Server-Log-Dateien.</p>
        <p>Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Wir haben ein berechtigtes Interesse an einer zuverlässigen und sicheren Darstellung unserer Website. Mit dem Hoster besteht ein Vertrag über Auftragsverarbeitung nach Art. 28 DSGVO.</p>

        <h2>3. Allgemeine Hinweise</h2>
        <h3>Verschlüsselung</h3>
        <p>Diese Seite nutzt aus Sicherheitsgründen eine TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von „http://" auf „https://" wechselt. Bei aktivierter Verschlüsselung können die Daten, die Sie an uns übermitteln, nicht von Dritten mitgelesen werden.</p>
        <h3>Speicherdauer</h3>
        <p>Soweit in dieser Erklärung keine speziellere Speicherdauer genannt wird, verbleiben Ihre Daten bei uns, bis der Zweck für die Verarbeitung entfällt. Wenn Sie ein berechtigtes Löschersuchen geltend machen oder eine Einwilligung widerrufen, werden Ihre Daten gelöscht, sofern keine gesetzlichen Aufbewahrungsfristen entgegenstehen.</p>
        <h3>Widerruf Ihrer Einwilligung</h3>
        <p>Viele Verarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Eine bereits erteilte Einwilligung können Sie jederzeit widerrufen. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Verarbeitung bleibt vom Widerruf unberührt.</p>

        <h2>4. Datenerfassung auf dieser Website</h2>
        <h3>Cookies</h3>
        <p>Google Analytics wird nur geladen, wenn Sie die Statistik ausdrücklich erlauben. Externe Bilder haben eine eigene, davon unabhängige Auswahl. Die Nutzung unserer Formulare erfordert keine Zustimmung zu Bildern oder Statistik.</p>
        <p>Ihre Auswahl für externe Bilder und Statistik sowie die Version der Datenschutzeinstellungen werden im localStorage Ihres Browsers gespeichert. Diese Einstellungen werden nicht als Besucherkennung verwendet und nicht an uns übertragen. Die Speicherung dient dazu, Ihre Auswahl zu beachten (§ 25 Abs. 2 Nr. 2 TDDDG). Sie können beide Zwecke unabhängig voneinander über „Datenschutzeinstellungen“ im Footer ändern oder widerrufen.</p>
        <h3>Server-Log-Dateien</h3>
        <p>Der Provider der Seiten erhebt und speichert automatisch Informationen in Server-Log-Dateien, die Ihr Browser automatisch übermittelt. Dies sind: Browsertyp und Browserversion, verwendetes Betriebssystem, Referrer-URL, Hostname des zugreifenden Rechners, Uhrzeit der Serveranfrage und IP-Adresse. Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen. Die Erfassung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO.</p>
        <h3>Kontaktformular</h3>
        <p>Wenn Sie uns über das Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Formular inklusive der von Ihnen angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Die technische Verarbeitung erfolgt über den unten beschriebenen Formularendpunkt.</p>
        <h3>Suchprofil</h3>
        <p>Wenn Sie ein Suchprofil anlegen, verarbeiten wir Ihre Angaben zur gesuchten Immobilie (Objektart, Wunschlage, Budget, Fläche, Zimmerzahl, Anmerkungen) sowie Ihre Kontaktdaten (Vorname, Nachname, E-Mail-Adresse, Telefonnummer), um Sie über passende Angebote zu informieren. Die technische Verarbeitung erfolgt über den unten beschriebenen Formularendpunkt.</p>
        <h3>Immobilienbewertung</h3>
        <p>Bei Nutzung der Online-Immobilienbewertung verarbeiten wir die von Ihnen eingegebenen Objektangaben (Objektart, Bauweise, Adresse, Flächen, Baujahr, Zustand, gegebenenfalls Mietangaben) sowie Ihre Kontaktdaten (Vorname, Nachname, E-Mail-Adresse, Telefonnummer und optional Ihre Anschrift). Zusammen mit dem Ergebnis und dem Rechenweg werden diese Angaben zur Bearbeitung Ihrer Anfrage übermittelt und gespeichert.</p>
        <p>Die Adresse der Immobilie wird schon während der Eingabe geprüft. Dafür werden Straßenname, Hausnummer und Postleitzahl an die Adressprüfung unter romanbecker.de/<wbr />bewertung-adressen.php übermittelt, die ebenfalls von uns beauftragt betrieben wird. Sie liefert Straßenvorschläge und den Ort zur Postleitzahl und bestätigt, dass es die Adresse gibt. Name und Kontaktdaten werden dabei nicht übertragen, Cookies werden nicht gesetzt; die Zugriffe erfasst der Server wie in Abschnitt 4 beschrieben. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO, weil die Prüfung für die von Ihnen angefragte Bewertung erforderlich ist.</p>
        <p>Die technische Entgegennahme der Formulare erfolgt über den Endpunkt <span className="nowrap">romanbecker.de/submit.php</span>, der von uns beauftragt betrieben wird. Anfragen zur Anbahnung oder Erfüllung eines Vertrags und die angefragte Immobilienbewertung bearbeiten wir nach Art. 6 Abs. 1 lit. b DSGVO. Sonstige Anfragen bearbeiten wir aufgrund unseres berechtigten Interesses an ihrer Beantwortung (Art. 6 Abs. 1 lit. f DSGVO). Für die Benachrichtigung über passende Angebote aufgrund eines Suchprofils ist Ihre Einwilligung maßgeblich (Art. 6 Abs. 1 lit. a DSGVO); diese können Sie jederzeit widerrufen. Eine Zustimmung zur Statistik ist dafür nicht erforderlich.</p>

        <h3>Zuordnung von Anfragen zu Anzeigen</h3><p>Wenn Sie über eine Google-Anzeige auf diese Website gelangen, kann die aufgerufene Adresse eine Google-Ads-Klickkennung (gclid) enthalten. Diese Kennung wird derzeit über interne Links weitergereicht und bei einer Formularanfrage zusammen mit Ihren Angaben an romanbecker.de/submit.php übermittelt, um die Anfrage einem Anzeigenklick zuordnen zu können. Diese Zuordnung ist ein eigener Verarbeitungsvorgang und wird durch die Auswahl zur Google-Analytics-Statistik nicht gesteuert.</p>
<h2>5. Externe Inhalte</h2>
        <p>Auf der Startseite, den Stadtteilseiten und den Ortsseiten zeigen wir Objektbilder, die vom Bildserver <span className="nowrap">images.ctfassets.net</span> (Contentful GmbH) geladen werden. Beim Nachladen dieser Bilder wird Ihre IP-Adresse an den Anbieter übertragen.</p>
        <p>Diese Bilder werden erst geladen, nachdem Sie externe Bilder ausdrücklich erlaubt haben. Ohne diese Zustimmung bleiben die Bildflächen leer; alle Texte und Funktionen der Website stehen Ihnen unverändert zur Verfügung. Rechtsgrundlage ist Ihre Einwilligung nach Art. 6 Abs. 1 lit. a DSGVO. Ihre Auswahl können Sie unabhängig von der Statistik jederzeit hier ändern:</p>

        <p><button type="button" className="button outline" data-privacy-open>Datenschutzeinstellungen</button></p>

        <h2>6. Schriftarten</h2>
        <p>Diese Website verwendet ausschließlich lokal auf unserem Server gespeicherte Schriftarten. Es werden keine Google Fonts und keine anderen externen Schriftdienste eingebunden; beim Aufruf der Seite wird deshalb keine Verbindung zu Servern von Schriftanbietern hergestellt.</p>

        <h2>7. Reichweitenmessung mit Google Analytics</h2>
        <p>Diese Website nutzt Google Analytics 4, einen Webanalysedienst der Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland. Wir messen damit, welche Seiten aufgerufen werden und über welchen Weg Besucher zu uns finden.</p>
        <p><strong>Der Dienst wird erst geladen, nachdem Sie der Statistik zugestimmt haben.</strong> Bis dahin wird keine Verbindung zu Google hergestellt, kein Skript von Google geladen und kein Cookie gesetzt. Lehnen Sie ab, bleibt es dauerhaft dabei.</p>
        <p>Nach Ihrer Zustimmung setzt Google Analytics Cookies und verarbeitet unter anderem die aufgerufenen Seiten, Zeitpunkt und Dauer des Besuchs, die verweisende Seite, Gerätetyp und Browser sowie eine aus der IP-Adresse abgeleitete ungefähre Region. Google verwendet bei Zugriffen aus der EU die IP-Adresse zur Ableitung einer ungefähren Region und verwirft sie nach eigenen Angaben, bevor die Daten gespeichert werden. Das macht die übrigen Nutzungsdaten nicht automatisch anonym. Die Ereignisdaten dieser Property werden nach zwei Monaten gelöscht.</p>
        <p>Google verarbeitet die Daten auch auf Servern in den USA. Google LLC ist unter dem EU-US Data Privacy Framework zertifiziert; für Übermittlungen dorthin besteht ein Angemessenheitsbeschluss der Europäischen Kommission vom 10. Juli 2023. Ein Restrisiko des Zugriffs durch US-Behörden lässt sich gleichwohl nicht vollständig ausschließen.</p>
        <p>Rechtsgrundlage ist ausschließlich Ihre Einwilligung nach Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TDDDG. Sie können die Statistik jederzeit mit Wirkung für die Zukunft über <a href="#privacy-settings" data-privacy-open>Datenschutzeinstellungen</a> abwählen. Dabei wird die Messung gestoppt und die von dieser Website gesetzten Analytics-Cookies werden gelöscht. Die Rechtmäßigkeit der vorherigen Verarbeitung bleibt unberührt.</p>
        <p>Es findet kein Profiling und keine automatisierte Entscheidungsfindung statt. Wir führen die Analysedaten nicht mit den Angaben aus dem Kontaktformular oder dem Bewertungsrechner zusammen.</p>

        <h2>8. Ihre Rechte</h2>
        <p>Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten (Art. 15 DSGVO). Sie haben außerdem ein Recht auf Berichtigung (Art. 16 DSGVO), Löschung (Art. 17 DSGVO), Einschränkung der Verarbeitung (Art. 18 DSGVO) und Datenübertragbarkeit (Art. 20 DSGVO).</p>
        <p>Sie haben das Recht, aus Gründen, die sich aus Ihrer besonderen Situation ergeben, jederzeit gegen die Verarbeitung Ihrer personenbezogenen Daten Widerspruch einzulegen, die auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO erfolgt (Art. 21 DSGVO).</p>
        <p>Ihnen steht ferner ein Beschwerderecht bei einer Aufsichtsbehörde zu, insbesondere bei der Landesbeauftragten für Datenschutz und Informationsfreiheit Nordrhein-Westfalen, Kavalleriestraße 2–4, 40213 Düsseldorf.</p>
        <p>Für Anliegen zum Datenschutz erreichen Sie uns unter <a href="mailto:bergischgladbach@evernest.com">bergischgladbach@evernest.com</a>.</p>

        <p className="editorial-note">Stand dieser Datenschutzerklärung: 30. September 2026.</p>
      </article>
    </section>

    <SiteFooter/>
  </main>;
}
