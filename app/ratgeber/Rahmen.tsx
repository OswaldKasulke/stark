import SiteFooter from "@/app/SiteFooter";
import HauptNav from "@/app/HauptNav";
export function RatgeberKopf() {
  return <header className="site-header"><a className="brand" href="/" aria-label="Startseite"><span className="brand-mark">S<span>&amp;</span>H</span><span><strong>Stark &amp; Hoffmann</strong><small>Immobilien · Bergisch Gladbach</small></span></a><HauptNav/><a className="header-cta" href="/immobilienbewertung/">Kostenlose Bewertung</a></header>;
}

export function RatgeberFuss() {
  return <>
    <SiteFooter/>
    <div className="copyright">© 2026 Stark &amp; Hoffmann Immobilien GmbH · Alle Angaben unverbindlich. Irrtümer und Änderungen vorbehalten.</div>
  </>;
}
