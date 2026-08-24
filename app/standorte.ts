export type Standort = {
  slug: string;
  name: string;
  label: string;
  region: string;
  postal: string;
  intro: string;
  profile: string;
  profileLead: string;
  facts: [string, string][];
  municipalitySource: { label: string; url: string };
  wikipedia: string;
  marketIntro: string;
  marketFacts: [string, string, string][];
  brw: [string, string, string][];
  brwNote: string;
  marketSource: { label: string; url: string };
};

const rbkReport = {
  label: "Gutachterausschuss Rheinisch-Bergischer Kreis, Grundstücksmarktbericht 2026",
  url: "https://www.gars.nrw/rbk/produkte-rbk/grundstuecksmarktberichte-rbk",
};

const obkReport = {
  label: "Gutachterausschuss Oberbergischer Kreis, Grundstücksmarktbericht 2026",
  url: "https://www.gars.nrw/images/user/GA_OBK/gmb/obk_pdf-gmb2026-20260402-120244.pdf",
};

export const standorte: Standort[] = [
  {
    slug: "overath", name: "Overath", label: "Stadt", region: "Rheinisch-Bergischer Kreis", postal: "51491",
    intro: "Immobilienmarkt, Bodenrichtwerte und lokale Bewertung für Overath – vom Aggertal bis in die Höhenlagen.",
    profileLead: "Overath liegt rund 25 Kilometer östlich von Köln im südlichen Bergischen Land.",
    profile: "Die Stadt erstreckt sich entlang der Agger, der Sülz und über die umliegenden Höhen. Acht Stadtteile verbinden den Kernort mit gewachsenen dörflichen Wohnlagen. Zum 31. Dezember 2025 waren 27.794 Einwohner gemeldet; die Stadtfläche beträgt 68,88 km².",
    facts: [["27.794", "Einwohner"], ["68,88 km²", "Stadtfläche"], ["8", "Stadtteile"]],
    municipalitySource: { label: "Stadt Overath – Stadtportrait und Einwohnerstatistik", url: "https://www.overath.de/freizeit-kultur/stadtportrait-stadtgeschichte/" },
    wikipedia: "https://de.wikipedia.org/wiki/Overath",
    marketIntro: "Amtliche Bodenwertspanne für Grundstücke des individuellen Wohnungsbaus in Overath zum 01.01.2026.",
    marketFacts: [["215–440 €/m²", "Bodenwertspanne", "individueller Wohnungsbau"], ["01.01.2026", "Stichtag", "amtliche Bodenrichtwerte"], ["51491", "Postleitzahl", "adressgenau in BORIS prüfen"]],
    brw: [["Obere Spanne", "440 €/m²", "gute Wohnlage"], ["Gesamtspanne", "215–440 €/m²", "Stadtgebiet Overath"], ["Untere Spanne", "215 €/m²", "einfachere Wohnlage"]],
    brwNote: "Die Spanne beschreibt das Preisniveau im Stadtgebiet, nicht den Wert eines einzelnen Grundstücks. Maßgeblich sind die konkrete Bodenrichtwertzone und die Merkmale des Richtwertgrundstücks.", marketSource: rbkReport,
  },
  {
    slug: "odenthal", name: "Odenthal", label: "Gemeinde", region: "Rheinisch-Bergischer Kreis", postal: "51519",
    intro: "Immobilienmarkt, Bodenrichtwerte und lokale Bewertung für Odenthal und seine unterschiedlichen Wohnlagen.",
    profileLead: "Odenthal liegt wald- und wasserreich zwischen Bergisch Gladbach, Leverkusen und dem Bergischen Land.",
    profile: "Die Dhünn prägt das Gemeindegebiet; Teile der Großen Dhünntalsperre liegen auf Odenthaler Gebiet. Der Altenberger Dom und der historische Ortskern zählen zu den bekanntesten Zielen. Die Nähe zu Köln und zugleich ländlich geprägte Ortsteile schaffen sehr unterschiedliche Immobilienlagen.",
    facts: [["51519", "Postleitzahl"], ["18 km", "bis Köln"], ["Dhünn", "prägendes Gewässer"]],
    municipalitySource: { label: "Gemeinde Odenthal – Gemeindeportrait", url: "https://www.odenthal.de/rathaus/gemeindeportrait/" },
    wikipedia: "https://de.wikipedia.org/wiki/Odenthal",
    marketIntro: "Amtliche Bodenwertspanne für Grundstücke des individuellen Wohnungsbaus in Odenthal zum 01.01.2026.",
    marketFacts: [["260–525 €/m²", "Bodenwertspanne", "individueller Wohnungsbau"], ["01.01.2026", "Stichtag", "amtliche Bodenrichtwerte"], ["51519", "Postleitzahl", "adressgenau in BORIS prüfen"]],
    brw: [["Obere Spanne", "525 €/m²", "gute Wohnlage"], ["Gesamtspanne", "260–525 €/m²", "Gemeinde Odenthal"], ["Untere Spanne", "260 €/m²", "einfachere Wohnlage"]],
    brwNote: "Zwischen dem Hauptort, Altenberg und den dörflichen Ortsteilen bestehen deutliche Lageunterschiede. Der konkrete Bodenrichtwert ist deshalb nur über die Adresse belastbar.", marketSource: rbkReport,
  },
  {
    slug: "kuerten", name: "Kürten", label: "Gemeinde", region: "Rheinisch-Bergischer Kreis", postal: "51515",
    intro: "Immobilienmarkt, Bodenrichtwerte und lokale Bewertung für Kürten – ländlich, grün und nah an Köln.",
    profileLead: "Kürten ist eine ländlich geprägte Flächengemeinde im Osten des Rheinisch-Bergischen Kreises.",
    profile: "Wälder, offene Höhen und klare Bäche prägen die rund 67,5 km² große Gemeinde. Kürten versteht sich zugleich als familienfreundlicher Wohn- und Pendlerstandort. Zum 31. Dezember 2024 lebten hier 20.033 Menschen.",
    facts: [["20.033", "Einwohner"], ["67,5 km²", "Gemeindefläche"], ["51515", "Postleitzahl"]],
    municipalitySource: { label: "Gemeinde Kürten – Gemeindeportrait", url: "https://www.kuerten.de/gemeinde/" },
    wikipedia: "https://de.wikipedia.org/wiki/K%C3%BCrten",
    marketIntro: "Amtliche Bodenwertspanne für Grundstücke des individuellen Wohnungsbaus in Kürten zum 01.01.2026.",
    marketFacts: [["150–390 €/m²", "Bodenwertspanne", "individueller Wohnungsbau"], ["01.01.2026", "Stichtag", "amtliche Bodenrichtwerte"], ["51515", "Postleitzahl", "adressgenau in BORIS prüfen"]],
    brw: [["Obere Spanne", "390 €/m²", "gute Wohnlage"], ["Gesamtspanne", "150–390 €/m²", "Gemeinde Kürten"], ["Untere Spanne", "150 €/m²", "einfachere Wohnlage"]],
    brwNote: "Die große Gemeindefläche umfasst Hauptorte, Dörfer und Außenbereiche. Ein gemeindeweiter Mittelwert ersetzt daher nicht die konkrete BORIS-Zone.", marketSource: rbkReport,
  },
  {
    slug: "bechen", name: "Bechen", label: "Ortsteil von Kürten", region: "Rheinisch-Bergischer Kreis", postal: "51515",
    intro: "Immobilienmarkt und lokale Bewertung für Bechen – mit amtlichen Bodenwerten der Gemeinde Kürten.",
    profileLead: "Bechen ist ein Ortsteil der Gemeinde Kürten am südlichen Rand der Großen Dhünntalsperre.",
    profile: "Der Ort wird durch die Bundesstraße 506 erschlossen und ist für den Bechener Esel als Wahrzeichen bekannt. Seine erste urkundliche Erwähnung wird auf das Jahr 1175 datiert. Bechen hat rund 3.127 Einwohner.",
    facts: [["3.127", "Einwohner"], ["1175", "erste Erwähnung"], ["51515", "Postleitzahl"]],
    municipalitySource: { label: "Gemeinde Kürten – Geschichte der Gemeinde", url: "https://www.kuerten.de/gemeinde/" },
    wikipedia: "https://de.wikipedia.org/wiki/Bechen",
    marketIntro: "Für Bechen veröffentlicht der Gutachterausschuss keine eigenständige Ortsteilspanne. Ausgewiesen wird das Preisniveau der Gemeinde Kürten.",
    marketFacts: [["150–390 €/m²", "Kürtener Bodenwertspanne", "individueller Wohnungsbau"], ["keine", "eigene Ortsteilspanne", "für Bechen veröffentlicht"], ["01.01.2026", "Stichtag", "amtliche Bodenrichtwerte"]],
    brw: [["Gemeinde Kürten", "150–390 €/m²", "amtliche Gesamtspanne"], ["Bechen", "adressabhängig", "keine pauschale Ortszahl"], ["Prüfung", "BORIS-NRW", "konkrete Zone verwenden"]],
    brwNote: "Die Kürtener Spanne darf nicht als pauschaler Bodenrichtwert für Bechen verwendet werden. Für ein Grundstück in Bechen gilt ausschließlich die konkrete Bodenrichtwertzone.", marketSource: rbkReport,
  },
  {
    slug: "lindlar", name: "Lindlar", label: "Gemeinde", region: "Oberbergischer Kreis", postal: "51789",
    intro: "Immobilienmarkt, amtliche Kaufzahlen und Bodenrichtwerte für Lindlar.",
    profileLead: "Lindlar liegt im Westen des Oberbergischen Kreises, rund 30 Kilometer von Köln entfernt.",
    profile: "Zur Gemeinde gehören neben dem Hauptort unter anderem Frielingsdorf, Hohkeppel, Kapellensüng, Linde und Schmitzhöhe. Das kommunale Profil hebt die ausgeprägte soziale, wirtschaftliche und kulturelle Infrastruktur hervor.",
    facts: [["ca. 21.500", "Einwohner"], ["86 km²", "Gemeindefläche"], ["51789", "Postleitzahl"]],
    municipalitySource: { label: "Gemeinde Lindlar – Gemeindeportrait", url: "https://www.lindlar.de/tourismus-und-freizeit/gemeindeportraet.html" },
    wikipedia: "https://de.wikipedia.org/wiki/Lindlar",
    marketIntro: "Amtlich registrierte Transaktionen sowie gebietstypische Bodenrichtwerte im Marktjahr 2025 beziehungsweise zum Stichtag 01.01.2026.",
    marketFacts: [["235", "Kauffälle", "im Marktjahr 2025"], ["71,1 Mio. €", "Geldumsatz", "im Marktjahr 2025"], ["77,5 ha", "Flächenumsatz", "im Marktjahr 2025"]],
    brw: [["Gute Lage", "230 €/m²", "Hauptort Lindlar"], ["Mittlere Lage", "185 €/m²", "Hauptort Lindlar"], ["Dörfliche Lagen", "120–190 €/m²", "mäßig bis gut"]],
    brwNote: "Die gebietstypischen Werte zeigen das Preisniveau des individuellen Wohnungsbaus und sind laut Gutachterausschuss für die Bewertung eines konkreten Grundstücks in der Regel nicht geeignet.", marketSource: obkReport,
  },
  {
    slug: "engelskirchen", name: "Engelskirchen", label: "Gemeinde", region: "Oberbergischer Kreis", postal: "51766",
    intro: "Immobilienmarkt, amtliche Kaufzahlen und Bodenrichtwerte für Engelskirchen.",
    profileLead: "Engelskirchen bildet das westliche Tor zum Oberbergischen Kreis und liegt im Aggertal.",
    profile: "Die Gemeinde verbindet Berge, Wiesen und Wälder mit einer guten Verkehrsanbindung über A4, B55 und die Bahnstrecke in Richtung Köln. Zu den bekannten Zielen gehören Aggertalhöhle, Schloss Ehreshoven, Oelchenshammer und das LVR-Industriemuseum.",
    facts: [["ca. 19.800", "Einwohner"], ["63 km²", "Gemeindefläche"], ["51766", "Postleitzahl"]],
    municipalitySource: { label: "Gemeinde Engelskirchen – kurz und knapp", url: "https://www.engelskirchen.de/portal/seiten/engelskirchen-kurz-und-knapp-900000036-23501.html" },
    wikipedia: "https://de.wikipedia.org/wiki/Engelskirchen",
    marketIntro: "Amtlich registrierte Transaktionen sowie gebietstypische Bodenrichtwerte im Marktjahr 2025 beziehungsweise zum Stichtag 01.01.2026.",
    marketFacts: [["209", "Kauffälle", "im Marktjahr 2025"], ["45,8 Mio. €", "Geldumsatz", "im Marktjahr 2025"], ["38,9 ha", "Flächenumsatz", "im Marktjahr 2025"]],
    brw: [["Gute Lage", "210 €/m²", "Hauptort Engelskirchen"], ["Mittlere Lage", "165 €/m²", "Hauptort Engelskirchen"], ["Dörfliche Lagen", "130–145 €/m²", "mäßig bis gut"]],
    brwNote: "Die gebietstypischen Werte zeigen das Preisniveau des individuellen Wohnungsbaus und sind laut Gutachterausschuss für die Bewertung eines konkreten Grundstücks in der Regel nicht geeignet.", marketSource: obkReport,
  },
  {
    slug: "koenigsforst", name: "Königsforst", label: "Wald- und Wohnlage", region: "Köln · Bergisch Gladbach · Rösrath", postal: "51427 / 51429",
    intro: "Lokale Immobilienbewertung rund um den Königsforst – mit klarer Zuordnung zur tatsächlichen Kommune und Adresse.",
    profileLead: "Der Königsforst ist ein großes zusammenhängendes Waldgebiet östlich von Köln und keine eigenständige Gemeinde.",
    profile: "Das rund 25 km² große Schutz- und Erholungsgebiet berührt Köln, Bergisch Gladbach und Rösrath. Für Immobilien rund um den Königsforst ist daher zuerst die exakte Kommune und Wohnlage zu bestimmen; erst danach lässt sich der zuständige Gutachterausschuss auswählen.",
    facts: [["2.519 ha", "Waldgebiet"], ["3", "angrenzende Städte"], ["FFH", "Schutzgebiet"]],
    municipalitySource: { label: "Stadt Bergisch Gladbach – Schutzgebiet Königsforst", url: "https://mandatsinfo.bergischgladbach.de/bi/getfile.asp?id=25965&type=do" },
    wikipedia: "https://de.wikipedia.org/wiki/K%C3%B6nigsforst",
    marketIntro: "Der Königsforst besitzt keinen eigenen Grundstücksmarktbericht. Die amtlichen Werte richten sich nach der Kommune der konkreten Adresse.",
    marketFacts: [["keine", "eigene Markttabelle", "Königsforst ist keine Kommune"], ["3", "mögliche Zuständigkeiten", "Köln, Bergisch Gladbach, Rösrath"], ["Adresse", "entscheidet", "über Gutachterausschuss und Zone"]],
    brw: [["Bergisch Gladbach", "510–970 €/m²", "gebietstypische Wohnlagen"], ["Köln", "adressabhängig", "Gutachterausschuss Köln"], ["Rösrath", "adressabhängig", "Gutachterausschuss RBK"]],
    brwNote: "Die Bergisch Gladbacher Werte gelten nur für Grundstücke innerhalb Bergisch Gladbachs und nicht pauschal für den Königsforst. Für Köln und Rösrath gelten andere Gutachterausschüsse.",
    marketSource: { label: "Gutachterausschuss Bergisch Gladbach, Grundstücksmarktbericht 2026", url: "https://www.gars.nrw/stadt-gl/produkte-gl/grundstuecksmarktbericht-gl" },
  },
];

export const standortBySlug = (slug: string) => standorte.find((entry) => entry.slug === slug);
