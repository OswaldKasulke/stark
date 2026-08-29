import type { Metadata } from "next";
import { breadcrumbSchema, businessSchema, graphSchema, siteUrl } from "../seo";

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
    <header className="site-header"><a className="brand" href="/"><span className="brand-mark">S<span>&amp;</span>H</span><span><strong>Stark &amp; Hoffmann</strong><small>Immobilien · Bergisch Gladbach</small></span></a><nav aria-label="Seitennavigation"><a href="/">Startseite</a><a href="/team/">Team</a><a href="/impressum/">Impressum</a></nav><a className="header-phone" href="tel:+4922049147881">+49 2204 914 7881</a></header>

    <section className="legal-hero"><p className="eyebrow light">Rechtliches</p><h1>Datenschutzerklärung</h1><p>Diese Erklärung beschreibt, welche personenbezogenen Daten beim Besuch von immobilienmakler-bergisch-gladbach.de verarbeitet werden und wozu.</p></section>

    <section className="legal-content section">
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
      <p>Diese Website setzt keine Cookies und bindet keine Analyse-, Werbe- oder Trackingdienste ein. Ihre Entscheidung über das Nachladen externer Inhalte (Abschnitt 5) wird ausschließlich lokal in Ihrem Browser gespeichert (localStorage) und nicht an uns übertragen.</p>
      <h3>Server-Log-Dateien</h3>
      <p>Der Provider der Seiten erhebt und speichert automatisch Informationen in Server-Log-Dateien, die Ihr Browser automatisch übermittelt. Dies sind: Browsertyp und Browserversion, verwendetes Betriebssystem, Referrer-URL, Hostname des zugreifenden Rechners, Uhrzeit der Serveranfrage und IP-Adresse. Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen. Die Erfassung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO.</p>
      <h3>Kontaktformular</h3>
      <p>Wenn Sie uns über das Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Formular inklusive der von Ihnen angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.</p>
      <h3>Immobilienbewertung</h3>
      <p>Bei Nutzung der Online-Immobilienbewertung verarbeiten wir die von Ihnen eingegebenen Objektangaben (Objektart, Bauweise, Adresse, Flächen, Baujahr, Zustand, gegebenenfalls Mietangaben) sowie Ihre Kontaktdaten (Vorname, Nachname, E-Mail-Adresse, Telefonnummer und optional Ihre Anschrift). Zusammen mit dem Ergebnis und dem Rechenweg werden diese Angaben zur Bearbeitung Ihrer Anfrage übermittelt und gespeichert.</p>
      <p>Die technische Entgegennahme des Formulars erfolgt über den Endpunkt <span className="nowrap">romanbecker.de/submit.php</span>, der von uns beauftragt betrieben wird. Die Verarbeitung erfolgt auf Grundlage Ihrer Einwilligung nach Art. 6 Abs. 1 lit. a DSGVO, die Sie im Formular ausdrücklich erteilen, sowie nach Art. 6 Abs. 1 lit. b DSGVO zur Durchführung vorvertraglicher Maßnahmen. Sie können Ihre Einwilligung jederzeit widerrufen.</p>

      <h2>5. Externe Inhalte</h2>
      <p>Auf der Startseite, den Stadtteilseiten und den Ortsseiten zeigen wir Objektbilder, die vom Bildserver <span className="nowrap">images.ctfassets.net</span> (Contentful GmbH) geladen werden. Beim Nachladen dieser Bilder wird Ihre IP-Adresse an den Anbieter übertragen.</p>
      <p>Diese Bilder werden erst geladen, nachdem Sie zugestimmt haben. Ohne Ihre Zustimmung bleiben die Bildflächen leer; alle Texte und Funktionen der Website stehen Ihnen unverändert zur Verfügung. Rechtsgrundlage ist Ihre Einwilligung nach Art. 6 Abs. 1 lit. a DSGVO. Ihre Entscheidung können Sie jederzeit hier zurücksetzen:</p>

      <p><button type="button" className="button outline" data-consent-reset>Entscheidung zu externen Inhalten zurücksetzen</button></p>

      <h2>6. Schriftarten</h2>
      <p>Diese Website verwendet ausschließlich lokal auf unserem Server gespeicherte Schriftarten. Es werden keine Google Fonts und keine anderen externen Schriftdienste eingebunden; beim Aufruf der Seite wird deshalb keine Verbindung zu Servern von Schriftanbietern hergestellt.</p>

      <h2>7. Analyse-Tools</h2>
      <p>Diese Website nutzt keine Webanalyse. Es kommen weder Google Analytics noch vergleichbare Reichweitenmessungen zum Einsatz. Es findet kein Profiling und keine automatisierte Entscheidungsfindung statt.</p>

      <h2>8. Ihre Rechte</h2>
      <p>Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten (Art. 15 DSGVO). Sie haben außerdem ein Recht auf Berichtigung (Art. 16 DSGVO), Löschung (Art. 17 DSGVO), Einschränkung der Verarbeitung (Art. 18 DSGVO) und Datenübertragbarkeit (Art. 20 DSGVO).</p>
      <p>Sie haben das Recht, aus Gründen, die sich aus Ihrer besonderen Situation ergeben, jederzeit gegen die Verarbeitung Ihrer personenbezogenen Daten Widerspruch einzulegen, die auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO erfolgt (Art. 21 DSGVO).</p>
      <p>Ihnen steht ferner ein Beschwerderecht bei einer Aufsichtsbehörde zu, insbesondere bei der Landesbeauftragten für Datenschutz und Informationsfreiheit Nordrhein-Westfalen, Kavalleriestraße 2–4, 40213 Düsseldorf.</p>
      <p>Für Anliegen zum Datenschutz erreichen Sie uns unter <a href="mailto:bergischgladbach@evernest.com">bergischgladbach@evernest.com</a>.</p>

      <p className="editorial-note">Stand dieser Datenschutzerklärung: 30. August 2026.</p>
    </section>

    <footer><div className="footer-brand"><span className="brand-mark">S<span>&amp;</span>H</span><div><strong>Stark &amp; Hoffmann Immobilien</strong><small>Evernest Lizenzpartner Bergisch Gladbach</small></div></div><div><h4>Kontakt</h4><p>Schloßstraße 41<br/>51429 Bergisch Gladbach</p><a href="tel:+4922049147881">+49 2204 914 7881</a><a href="mailto:bergischgladbach@evernest.com">bergischgladbach@evernest.com</a></div><div><h4>Unternehmen</h4><a href="/">Startseite</a><a href="/team/">Team</a><a href="/downloads/">Downloads</a><a href="/immobilienbewertung/">Immobilienbewertung</a></div><div><h4>Rechtliches</h4><a href="/impressum/">Impressum</a><a href="/agb/">AGB</a><a href="/datenschutz/">Datenschutz</a></div></footer>
  </main>;
}
