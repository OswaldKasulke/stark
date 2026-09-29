// Porträttexte je Stadtteil. Jede Aussage ist belegt (siehe belege), die
// Quellen erscheinen nicht auf der Seite. Stand der Prüfung: 29.09.2026.
export type Portraet = { titel: string; absaetze: string[]; belege: Record<string, string> };
export const portraets: Record<string, Portraet> = {
  "schildgen": {
    "titel": "Schildgen im Porträt",
    "absaetze": [
      "Der Name Schildgen, gesprochen „Schildchen“, geht vermutlich auf das Siedlungsland zurück: Es liegt auf einer Anhöhe und hatte die Form eines Dreiecks, ähnlich einem gewölbten Schild. Der Ort liegt am Südhang des Dhünntals; im Nordwesten bildet die Dhünn streckenweise die Grenze zu Leverkusen, im Westen grenzt Köln an, im Osten Odenthal.",
      "Schildgen wuchs aus mehreren Hofstellen und Weilern zusammen, ältester Siedlungskern ist der Hof Nittum. Weite Teile gehörten bis zur Gebietsreform am 1. Januar 1975 zur Gemeinde Odenthal. Die katholische Pfarrkirche mit ihrer eigenwilligen Beton-Glas-Architektur stammt von Gottfried Böhm.",
      "Die L 101 verbindet Schildgen mit Köln-Dünnwald und Odenthal; im Ortskern treffen die Kempener Straße aus dem Bergisch Gladbacher Zentrum und die Straße aus Schlebusch auf sie. Die nächste Autobahnanschlussstelle liegt in Leverkusen an der A 3."
    ],
    "belege": {
      "Alle Aussagen": "https://de.wikipedia.org/wiki/Schildgen",
      "geprüft": "2026-09-29"
    }
  },
  "katterbach": {
    "titel": "Katterbach im Porträt",
    "absaetze": [
      "Katterbach verdankt seinen Namen einem Bach, der dort entspringt, wo Voiswinkeler Straße und Hufer Weg zusammentreffen. Das Wort geht höchstwahrscheinlich auf das althochdeutsche „kataro“, Kater, zurück – ein Gewässer, an dem einst die Wildkatze lebte.",
      "Die Siedlung wurde vermutlich in fränkischer Zeit gegründet und zählt zu den ältesten Siedlungskernen im Stadtgebiet. 1222 wird ein „Jakob Herr zu Katterbach und über dem Bach“ erwähnt, das gleichnamige Adelsgeschlecht erlosch 1802. Noch 1841 bestand der Weiler aus nur vier bis sechs Gebäuden; erst seit den 1880er Jahren entstanden neue Straßen und Siedlungen, aus denen der heutige, dicht bebaute Stadtteil wurde.",
      "Katterbach liegt im Nordwesten Bergisch Gladbachs zwischen Schildgen, Nußbaum und Paffrath und grenzt im Westen an Köln."
    ],
    "belege": {
      "Alle Aussagen": "https://de.wikipedia.org/wiki/Katterbach%20%28Bergisch%20Gladbach%29",
      "geprüft": "2026-09-29"
    }
  },
  "nussbaum": {
    "titel": "Nußbaum im Porträt",
    "absaetze": [
      "Nußbaum liegt im Norden Bergisch Gladbachs zwischen Katterbach, Schildgen, Hebborn und Paffrath und grenzt im Norden an Odenthal.",
      "Der Ort ging aus einer spätmittelalterlichen Hofgründung nördlich von Paffrath hervor. Der Name ist 1448 als „Nusboem“ belegt, ab 1586 in der heutigen Schreibweise. Um 1790 war Nußbaum mit 17 Hofstellen die größte Siedlung der Gemeinde Paffrath.",
      "Im 19. und frühen 20. Jahrhundert wurde hier Eisenerz abgebaut; bedeutendstes Bergwerk war die Grube Eduard & Amalia, an deren Stelle heute der „grüne Weiher“ liegt."
    ],
    "belege": {
      "Alle Aussagen": "https://de.wikipedia.org/wiki/Nu%C3%9Fbaum%20%28Bergisch%20Gladbach%29",
      "geprüft": "2026-09-29"
    }
  },
  "paffrath": {
    "titel": "Paffrath im Porträt",
    "absaetze": [
      "Paffrath bedeutet „Pfaffenrodung“: Das Dorf entstand aus einer frühmittelalterlichen Siedlung, die das Kölner Domkapitel auf gerodetem Waldland anlegen ließ. 1160 wird Paffrath erstmals urkundlich erwähnt. Zur früheren Gemeinde Paffrath gehörten auch Hand und Katterbach.",
      "Mittelpunkt war der Fronhof mit der romanischen Wehrkirche St. Clemens, errichtet um 1150. 1908 bis 1911 wurde sie erweitert, die alte Kirche wurde zum nördlichen Seitenschiff; die fast vollständig erhaltene Mauer und die erhöhte Lage bewahren den Charakter der Wehrkirche. Sehenswert sind außerdem einige Fachwerkhäuser, das Wasserschloss Haus Blegge und die Paffrather Mühle.",
      "Die Buslinien 222 und 227 fahren das Zentrum an und verbinden Paffrath mit dem S-Bahnhof Bergisch Gladbach, die Linie 435 fährt nach Köln-Dellbrück."
    ],
    "belege": {
      "Alle Aussagen": "https://de.wikipedia.org/wiki/Paffrath",
      "geprüft": "2026-09-29"
    }
  },
  "hand": {
    "titel": "Hand im Porträt",
    "absaetze": [
      "Hand liegt im Westen Bergisch Gladbachs, zwischen Paffrath und Gronau, und grenzt im Süden an Köln. Der Ort geht auf eine frühneuzeitliche Gründung zurück, die 1594 als „Gut an der Handt“ erstmals erwähnt wird. Die Deutung des Namens ist umstritten; eine Erklärung verweist auf einen Wegweiser in Form einer Hand an einem alten Weg nach Paffrath.",
      "Im Diepeschrather Wald am Mutzbach liegt die Diepeschrather Mühle mit einem großen Abenteuerspielplatz in der Nähe. Die Paffrather Mühle am See wurde in eine Wohnanlage integriert. Auffällig sind die drei Hochhäuser auf dem Zuckerberg, bekannt als „Die drei Eisheiligen“.",
      "Jeden Sommer feiert die Sankt-Sebastianus-Schützenbruderschaft Hand 1911 ihr großes Schützen- und Volksfest mit Königsvogelschießen, Kirmes und Trödelmarkt."
    ],
    "belege": {
      "Alle Aussagen": "https://de.wikipedia.org/wiki/Hand%20%28Bergisch%20Gladbach%29",
      "geprüft": "2026-09-29"
    }
  },
  "stadtmitte": {
    "titel": "Stadtmitte im Porträt",
    "absaetze": [
      "Stadtmitte hieß ursprünglich Gladbach. Nach dem Zusammenschluss von Bergisch Gladbach und Bensberg 1975 trug das alte Zentrum zunächst die Bezeichnung Gladbach; am 12. Januar 1999 beschloss der Rat, dafür den Namen Stadtmitte einzuführen. Der Stadtteil reicht weit über den Konrad-Adenauer-Platz hinaus und ist der einwohnerstärkste der Stadt.",
      "Die Strunde prägte die Entwicklung: Acht Mühlen lagen hier an ihrem Lauf, darunter die Gohrsmühle, die Buchmühle und die Gladbacher Mühle. Im Strundetal wurde über Jahrhunderte Bergbau betrieben, ehemalige Steinbrüche lieferten Kalkstein für die Kalkbrennereien. Am S-Bahnhof sind Reste eines Kalkofens erhalten, der unter Denkmalschutz steht.",
      "Nachbarn sind Gronau, Paffrath, Hebborn, Romaney, Herrenstrunden, Sand und Heidkamp. Am Bahnhof Bergisch Gladbach endet die S 11 aus Köln und Düsseldorf."
    ],
    "belege": {
      "Alle Aussagen": "https://de.wikipedia.org/wiki/Stadtmitte%20%28Bergisch%20Gladbach%29",
      "S 11 bis Bergisch Gladbach": "https://de.wikipedia.org/wiki/Paffrath",
      "geprüft": "2026-09-29"
    }
  },
  "hebborn": {
    "titel": "Hebborn im Porträt",
    "absaetze": [
      "Hebborn geht auf den Hebborner Hof zurück, eine hochmittelalterliche Gründung der Grafen von Berg, die 1280 als „Hadeburne“ erstmals erwähnt wird. Der herzogliche Hof besaß ein eigenes Hofgericht. Um 1800 zählte der Weiler an der Wipperfürther Straße mit Unter- und Oberhebborn 20 Häuser und war damit größer als Gladbach selbst.",
      "Bis in die Mitte des 20. Jahrhunderts wurde im Schladetal Kalk gebrannt, in der Grube Prinz Wilhelm bis 1925 Eisenerz gefördert. Das Ortsbild prägt die neugotische Pfarrkirche Hl. Drei Könige von 1912; sie und der Hebborner Hof stehen unter Denkmalschutz.",
      "Hebborn grenzt an Nußbaum, Romaney, Stadtmitte und Paffrath, im Norden an Odenthal."
    ],
    "belege": {
      "Alle Aussagen": "https://de.wikipedia.org/wiki/Hebborn",
      "geprüft": "2026-09-29"
    }
  },
  "heidkamp": {
    "titel": "Heidkamp im Porträt",
    "absaetze": [
      "Der Name Heidkamp – ein Feld in der Heide – beschreibt die Lage auf dem bergischen Heidesandstreifen. Belegt ist die Hofgründung erstmals 1582 als „am Heidkamp“. Mit der Industrialisierung wuchs aus „Heidkamps Gut“ eine größere Siedlung, um 1830 mit Unter-, Mittel- und Oberheidkamp beiderseits der alten Straße von Gladbach nach Bensberg.",
      "1975 kam die Gronauer Waldsiedlung hinzu, die zuvor zu Gronau gehörte. Die Braunkohlenstraße erinnert an den jahrhundertelangen Braunkohleabbau für die Kalkbrennereien. Im Gewerbegebiet Zinkhütte arbeiten viele Menschen. Die katholische Kirche St. Joseph ist überwiegend aus Lindlarer Grauwacke gebaut.",
      "Heidkamp grenzt an Gronau, Stadtmitte, Sand und Lückerath."
    ],
    "belege": {
      "Alle Aussagen": "https://de.wikipedia.org/wiki/Heidkamp%20%28Bergisch%20Gladbach%29",
      "geprüft": "2026-09-29"
    }
  },
  "gronau": {
    "titel": "Gronau im Porträt",
    "absaetze": [
      "Der Name Gronau soll auf „Groenauwe“, grüne Aue, zurückgehen: Um 1845 lag hier noch ein Wiesental in der Rheinebene, durchflossen von der Strunde. Heute stehen an ihrer Stelle Industrie- und Wohnansiedlungen, die Strunde fließt in einem engen Bett, und ein Randkanal schützt vor Hochwasser.",
      "Sechs Strundemühlen lagen in Gronau, unter ihnen die Kieppemühle, die Dünnmühle und die Gierather Mühle. Ab der Mitte des 19. Jahrhunderts wurde nach Eisenerz und Buntmetallen gegraben, etwa in den Gruben Habsburg und Hohenzollern.",
      "Gronau liegt im Westen der Stadt, grenzt an Köln und an die Stadtteile Hand, Paffrath, Stadtmitte, Heidkamp, Lückerath, Kippekausen, Alt Refrath und Refrath. Bis zur A 4 in Lustheide sind es etwa drei Kilometer."
    ],
    "belege": {
      "Alle Aussagen": "https://de.wikipedia.org/wiki/Gronau%20%28Bergisch%20Gladbach%29",
      "geprüft": "2026-09-29"
    }
  },
  "romaney": {
    "titel": "Romaney im Porträt",
    "absaetze": [
      "Romaney ist Stadtteil und zugleich ein Abschnitt der Romaneyer Straße, die von Hebborn bis an die Stadtgrenze zu Kürten führt. Der Name bezieht sich auf einen Weiler an der alten Straße von Mülheim nach Wipperfürth.",
      "Die Siedlung wird 1448 als „Rumenye“ erstmals erwähnt und scheint um 1450 verlassen gewesen zu sein. In der ersten Hälfte des 16. Jahrhunderts wird der Hof unter den Lehngütern der Herrschaft Strauweiler in Odenthal geführt. Bis ins frühe 20. Jahrhundert wuchs daraus ein kleiner Weiler mit sechs Ackergütern und 34 Einwohnern.",
      "Romaney grenzt an Hebborn, Herrenstrunden und Stadtmitte, im Norden an Odenthal."
    ],
    "belege": {
      "Alle Aussagen": "https://de.wikipedia.org/wiki/Romaney",
      "geprüft": "2026-09-29"
    }
  },
  "herrenstrunden": {
    "titel": "Herrenstrunden im Porträt",
    "absaetze": [
      "Herrenstrunden liegt fast im äußersten Nordosten Bergisch Gladbachs, am Beginn des Strundetals. Der Name erinnert an die „Herren von Strune“ – den Johanniterorden, der an der Quelle der Strunde eine Komturei besaß.",
      "Erstmals urkundlich erwähnt wird die Komturei 1300, errichtet wurde sie wohl schon vor 1294; 1328 wurde sie zur Ballei erhoben. Die zugehörige Kirche, Johannes dem Täufer geweiht, wurde 1345 vollendet. Das heutige Komturgebäude ist ein Wiederaufbau von 1950, nachdem der Vorgängerbau am Ende des Zweiten Weltkriegs ausgebrannt war; es ist in Privatbesitz und beherbergt ein Hotel und ein Restaurant. Dazu gehört die Maltesermühle an der Strunde.",
      "Herrenstrunden grenzt an Romaney, Asselborn, Herkenrath, Sand und Stadtmitte sowie im Norden an Odenthal und Kürten."
    ],
    "belege": {
      "Alle Aussagen": "https://de.wikipedia.org/wiki/Herrenstrunden",
      "geprüft": "2026-09-29"
    }
  },
  "sand": {
    "titel": "Sand im Porträt",
    "absaetze": [
      "Sand liegt in der Mitte Bergisch Gladbachs und ist nach dem sandigen Boden des bergischen Heidesandstreifens benannt. Das Kirchdorf zählt zu den frühesten Siedlungskernen im Stadtgebiet; genannt wird es in einer Urkunde des Klosters Meer von 1229 und 1349 als „van me Sande“. Die Entstehung des Sander Hofes fiel vermutlich mit der Gründung einer Eigenkirche zusammen.",
      "In der angrenzenden Hardt wurde im 19. und frühen 20. Jahrhundert in mehreren Gruben Eisen-, Blei- und Zinkerz gefördert.",
      "Sand grenzt an Heidkamp, Stadtmitte, Herrenstrunden, Herkenrath, Moitzfeld, Bensberg und Lückerath."
    ],
    "belege": {
      "Alle Aussagen": "https://de.wikipedia.org/wiki/Sand%20%28Bergisch%20Gladbach%29",
      "geprüft": "2026-09-29"
    }
  },
  "herkenrath": {
    "titel": "Herkenrath im Porträt",
    "absaetze": [
      "Der älteste Beleg für Herkenrath stammt von 1163/64: Im Codex Thioderici wird es neben Bensberg als Pfarrei genannt. Um 1224 übertrug Dietrich von Dorndorf die Kirche dem Johanniterorden. Ab 1363 gehörte der Ort zum Amt Porz, bis 1975 war er ein Stadtteil von Bensberg.",
      "Einmal im Jahr, in der ersten Juliwoche, feiert Herkenrath seine Kirmes – die „Decke-Bunne-Kirmes“, benannt nach den Dicken Bohnen, die dann reif werden. „Decke Bunne“ ist bis heute auch ein Spitzname für die Herkenrather.",
      "Hauptachse ist die L 289, die den Ort von Norden nach Süden durchquert. Herkenrath ist an das Busnetz angeschlossen, Knotenpunkt ist die Haltestelle Ball am Gymnasium Herkenrath. Nachbarn sind Sand, Herrenstrunden, Asselborn, Bärbroich und Moitzfeld."
    ],
    "belege": {
      "Alle Aussagen": "https://de.wikipedia.org/wiki/Herkenrath",
      "geprüft": "2026-09-29"
    }
  },
  "asselborn": {
    "titel": "Asselborn im Porträt",
    "absaetze": [
      "Asselborn ist ein mittelalterlicher Siedlungsname, 1294 als „de Astelburne“ nachgewiesen. Wahrscheinlich bezeichnete er eine Quelle („born“) bei einem Haselstrauch; eine andere Deutung verweist auf Rodungstätigkeit. Den Namen trägt auch ein mittelalterliches Rittergut, das im Urkataster als „Asenborns Hof“ verzeichnet ist.",
      "Von der Bevölkerung wird Asselborn bis heute als Teil von Herkenrath empfunden; 1789 gehörte es zur Honschaft Herkenrath. Der Stadtteil grenzt an Romaney, Herkenrath, Sand und Stadtmitte sowie im Norden an Kürten."
    ],
    "belege": {
      "Alle Aussagen": "https://de.wikipedia.org/wiki/Asselborn%20%28Bergisch%20Gladbach%29",
      "geprüft": "2026-09-29"
    }
  },
  "baerbroich": {
    "titel": "Bärbroich im Porträt",
    "absaetze": [
      "Bärbroich ist ein junger Ort: Im Urkataster fehlt er noch, er entstand vermutlich in der zweiten Hälfte des 19. Jahrhunderts aus den Weilern Dresherscheid, Ottoherscheid, Wüstenherscheid, Oberselbach und Kotzfeld. In der Umgebung waren seit der Mitte des 19. Jahrhunderts mehrere Bergwerke in Betrieb.",
      "Schon 1925/26 erhielt Bärbroich eine erste Kirche, gebaut zum Teil mit Material aus den stillgelegten Gruben Berzelius und Weiß. Nach erheblichen Baumängeln wurde sie 1967 abgerissen; die heutige Kirche St. Maria Empfängnis entstand 1969/70 nach Plänen von Ernst Isenlar. Im Stadtteil liegt das Bauernhaus-Museum Oberkülheim.",
      "Bärbroich grenzt an Asselborn, Moitzfeld und Herkenrath sowie im Norden und Osten an Kürten. Im nahen Moitzfeld ist die A 4 erreichbar."
    ],
    "belege": {
      "Alle Aussagen": "https://de.wikipedia.org/wiki/B%C3%A4rbroich",
      "geprüft": "2026-09-29"
    }
  },
  "lueckerath": {
    "titel": "Lückerath im Porträt",
    "absaetze": [
      "Lückerath entstand in der großen Rodeepoche zwischen 1000 und 1300. Aus dem adeligen Gut Lückerath, 1556 als „Lüggeraedt“ belegt, entwickelte sich in der frühen Neuzeit der östliche Ortsteil Oberlückerath an der Gladbacher Straße; Lückerath und Oberlückerath sind bis heute Ortsteile.",
      "Bis in die 1980er Jahre wurde in der Kalkgrube Cox Dolomit für die Glasindustrie abgebaut. Heute ist das Gelände das Naturschutzgebiet Grube Cox mit vier kleinen Seen, Wald und Felsen und ein beliebtes Ausflugsziel. Nordöstlich schließt das Naturschutzgebiet Hardt an.",
      "Lückerath grenzt an Kippekausen, Gronau, Heidkamp, Sand, Bensberg, Kaule und Frankenforst."
    ],
    "belege": {
      "Alle Aussagen": "https://de.wikipedia.org/wiki/L%C3%BCckerath%20%28Bergisch%20Gladbach%29",
      "geprüft": "2026-09-29"
    }
  },
  "bensberg": {
    "titel": "Bensberg im Porträt",
    "absaetze": [
      "Bensberg war von 1947 bis zur Eingemeindung am 1. Januar 1975 eine eigenständige Stadt. Urkundlich erwähnt wird es erstmals 1139; der Ort entstand vermutlich schon gegen Ende des Frühmittelalters um eine fränkische Burg.",
      "Fast 30 Baudenkmäler stehen in Bensberg. Herausragend ist das neue Schloss Bensberg; nicht weit davon liegt das burgähnliche Alte Schloss mit dem Rathaus, das Gottfried Böhm 1962 bis 1972 für die damalige Stadt entwarf. Am Burggraben widmet sich das Bergische Museum für Bergbau, Handwerk und Gewerbe dem Erzbergbau im Bensberger Erzrevier. Seit 1988 gibt es den Puppenpavillon Bensberg.",
      "Zum Grün gehören der Schlosspark, das Milchborntal und der 11,6 Hektar große Stadtgarten mit Blick auf Köln. Die Stadtbahnlinie 1 endet seit 2000 im Bus- und U-Bahnhof Bensberg und fährt über Refrath und Brück nach Köln. Bensberg grenzt an Sand, Moitzfeld, Bockenberg, Kaule und Lückerath."
    ],
    "belege": {
      "Alle Aussagen": "https://de.wikipedia.org/wiki/Bensberg",
      "Linie 1": "https://de.wikipedia.org/wiki/Stadtbahn_K%C3%B6ln",
      "geprüft": "2026-09-29"
    }
  },
  "bockenberg": {
    "titel": "Bockenberg im Porträt",
    "absaetze": [
      "Bockenberg ist Stadtteil, Flurname und zugleich eine Anhöhe am Westabfall des Bergischen Landes zur Kölner Bucht. Auf dem höchsten Punkt steht das Vinzenz-Pallotti-Hospital, nördlich davon die Erdbebenstation Bensberg der Universität zu Köln. Anfang der 1920er Jahre ließ die Erzdiözese Köln hier das Priesterseminar errichten, heute das Kardinal-Schulte-Haus.",
      "1887 wurde der „Luftkurort Bockenberg“ angelegt, ein Ausflugsziel der Kölner; die Gaststätte Haus Bockenberg war um 1900 besonders beliebt, erst recht, als 1913 die Vorortbahn aus Köln Bensberg erreichte. Die Hochhäuser des Wohnparks Bensberg an der Giselbertstraße und der Reginharstraße entstanden 1970 bis 1974.",
      "Der größte Teil des Stadtteils liegt südlich der A 4 im Königsforst. Bockenberg grenzt an Frankenforst, Kaule, Bensberg und Moitzfeld sowie im Süden an Rösrath."
    ],
    "belege": {
      "Alle Aussagen": "https://de.wikipedia.org/wiki/Bockenberg",
      "geprüft": "2026-09-29"
    }
  },
  "kaule": {
    "titel": "Kaule im Porträt",
    "absaetze": [
      "Der Name Kaule kommt vom mittelhochdeutschen „kûle“, Grube, und meint eine künstlich angelegte Vertiefung, aus der Erz, Sand, Kies oder Lehm gewonnen wurde. Er geht auf drei mittelalterliche Hofstellen „auf der Kaule“ in der Freiheit Bensberg zurück; im 17. Jahrhundert gab es hier zehn Güter.",
      "Bergbau ist in Kaule schon für das Hochmittelalter bekannt. Seit der Mitte des 19. Jahrhunderts bestimmte die Grube Julien auf Blei- und Zinkerz das Bild, daran erinnert der Straßenname Auf der Halde.",
      "Der Stadtteil liegt im Süden Bergisch Gladbachs zwischen Frankenforst, Lückerath, Bensberg und Bockenberg. Die Straße Kaule, die ihn durchquert, führt von der Kauler Straße bis zur Kölner Straße."
    ],
    "belege": {
      "Alle Aussagen": "https://de.wikipedia.org/wiki/Kaule%20%28Bergisch%20Gladbach%29",
      "geprüft": "2026-09-29"
    }
  },
  "moitzfeld": {
    "titel": "Moitzfeld im Porträt",
    "absaetze": [
      "Moitzfeld – gesprochen mit langem O – liegt im Südosten Bergisch Gladbachs und grenzt an Overath. Der Name bezeichnet wahrscheinlich eine mit Hartriegel bewachsene Fläche, mundartlich „Mutz“. In der Nähe liegt die Erdenburg, die früheste nachweisbare Besiedlung der Umgebung, datiert auf etwa 310 v. Chr.",
      "Der Ort wuchs aus drei getrennten Siedlungskernen entlang des Weges von Bensberg nach Herkenrath und Immekeppel zusammen, vermutlich gegründet um 1100 und 1550 als „Moisfeld“ belegt. Bis in die 1930er Jahre hieß die Doppelortschaft Platz-Moitzfeld, benannt nach dem Gutshof Platz; auf Wunsch der Einwohner wurde der Name zwischen 1933 und 1940 auf Moitzfeld verkürzt.",
      "Moitzfeld grenzt an Bensberg, Sand, Herkenrath, Bärbroich und Bockenberg; über den Stadtteil ist die A 4 zu erreichen."
    ],
    "belege": {
      "Alle Aussagen": "https://de.wikipedia.org/wiki/Moitzfeld",
      "A 4 in Moitzfeld": "https://de.wikipedia.org/wiki/B%C3%A4rbroich",
      "geprüft": "2026-09-29"
    }
  },
  "refrath": {
    "titel": "Refrath im Porträt",
    "absaetze": [
      "Refrath setzt sich aus „Ref“, Ufer, und „rath“, Rodung, zusammen. Sichere schriftliche Belege gibt es erst aus dem 12. Jahrhundert. Um 1700 begannen an der Steinbreche die Steinbrucharbeiten für das Bensberger Schloss; 1846 wurde Refrath wieder eigenständige katholische Pfarre.",
      "Der Stadtteil liegt im Westen Bergisch Gladbachs und grenzt an Köln sowie an Gronau, Alt Refrath, Kippekausen, Frankenforst und Lustheide. Im Süden fließt der Frankenforstbach, der jenseits der Stadtgrenze Bruchbach heißt. Nach der Stadtmitte ist Refrath der einwohnerstärkste Stadtteil.",
      "Über die Anschlussstellen Refrath und Frankenforst ist die A 4 erreichbar. Die Stadtbahnlinie 1 fährt in kurzen Abständen nach Bensberg und nach Köln, Buslinien verbinden Refrath mit der Innenstadt, ein Schnellbus fährt über die Autobahn zum Kölner Hauptbahnhof. Der Turn-Verein Refrath besteht seit 1893."
    ],
    "belege": {
      "Alle Aussagen": "https://de.wikipedia.org/wiki/Refrath",
      "Einwohnerrang": "https://de.wikipedia.org/wiki/Stadtmitte%20%28Bergisch%20Gladbach%29",
      "geprüft": "2026-09-29"
    }
  },
  "alt-refrath": {
    "titel": "Alt-Refrath im Porträt",
    "absaetze": [
      "Alt Refrath ist der älteste Siedlungskern im Refrather Raum. Gerodet wurde hier vermutlich ab dem 9. Jahrhundert; Ausgangspunkte der fränkischen Landnahme waren die frühmittelalterliche Refrather Kirche, der Herrenhof Kippekausen und wohl auch die Saaler Mühle.",
      "An der kurzen Straße Alt Refrath steht die Alte Pfarrkirche, ein verputzter Bruchsteinbau aus der Zeit um 1200 auf einem ummauerten Friedhof. Ebenfalls Baudenkmal ist das Haus Steinbreche, 1712 von einem Steinmetzmeister gebaut und benannt nach dem nahen Steinbruch, der Steine für das neue Bensberger Schloss lieferte. Am Mohnweg liegt die Freie Waldorfschule, die seit 1987 besteht.",
      "Alt Refrath grenzt an Refrath, Gronau und Kippekausen."
    ],
    "belege": {
      "Alle Aussagen": "https://de.wikipedia.org/wiki/Alt%20Refrath",
      "geprüft": "2026-09-29"
    }
  },
  "kippekausen": {
    "titel": "Kippekausen im Porträt",
    "absaetze": [
      "Den Namen gab die Motte Kippekausen, eine um das Jahr 1000 errichtete Burganlage, die ab dem frühen 15. Jahrhundert nicht mehr bewohnt war. An ihrer Stelle entstand später Gut Kippekausen; es wurde 1965 für die Parksiedlung Kippekausen abgerissen. Als Stadtteil gibt es Kippekausen seit der Neugliederung 1975, zuvor gehörte es zum Bensberger Stadtteil Refrath.",
      "Zu Kippekausen gehört der Bereich um den Saaler Mühlenteich mit der Eissporthalle und dem Thermalbad Mediterana. Der Teich ist ein Relikt des Braunkohletagebaus der Grube Consolidation Alfred. Die Kölner Stadtbahnlinie 1 hat hier die Station Kippekausen.",
      "Kippekausen grenzt an Refrath, Alt Refrath, Gronau, Lückerath und Frankenforst."
    ],
    "belege": {
      "Alle Aussagen": "https://de.wikipedia.org/wiki/Kippekausen",
      "geprüft": "2026-09-29"
    }
  },
  "frankenforst": {
    "titel": "Frankenforst im Porträt",
    "absaetze": [
      "Frankenforst liegt im Süden Bergisch Gladbachs; der größte Teil seiner Fläche liegt südlich der A 4 im unbewohnten Königsforst. Im Südosten grenzt Rösrath an, im Südwesten Köln, dazu die Stadtteile Lustheide, Refrath, Kippekausen, Lückerath, Kaule und Bockenberg.",
      "Traditionell gilt Frankenforst als bevorzugter Wohnplatz. Im alten Frankenforst entstand um 1900 eine Parksiedlung mit teils großen Villen; für sie gilt seit 2010 eine Denkmalbereichssatzung. Westlich davon wuchs ab den 1920er Jahren das neue Frankenforst, auch mit Reihenhäusern. Die Pfarrkirche St. Maria Königin ist ein Baudenkmal.",
      "Nach dem Zweiten Weltkrieg entstand zwischen Kölner Straße und Brüderstraße ein Gewerbegebiet, in dem die Bundesanstalt für Straßenwesen sitzt. Zur Erholung liegen das Naturschutzgebiet Königsforst im Süden und der Erholungspark Saaler Mühle im Norden nahe."
    ],
    "belege": {
      "Alle Aussagen": "https://de.wikipedia.org/wiki/Frankenforst",
      "geprüft": "2026-09-29"
    }
  },
  "lustheide": {
    "titel": "Lustheide im Porträt",
    "absaetze": [
      "Lustheide liegt im Südwesten Bergisch Gladbachs an der Stadtgrenze zu Köln. Im Norden begrenzt die Stadtbahnlinie 1 den Stadtteil, im Osten die Vürfelser Kaule, im Süden und Westen die A 4; Nachbarn sind Refrath und Frankenforst.",
      "Der Name geht auf die hochmittelalterliche Hofstelle „Gut auf der Lauffsheiden“ zurück, vermutlich angelegt unter den Grafen von Meer im späten 11. oder frühen 12. Jahrhundert. Noch zu Beginn des 20. Jahrhunderts bestimmten Äcker und Einzelhöfe beiderseits der Landstraße von Köln nach Bensberg das Bild, heute ist die Fläche geschlossen bebaut.",
      "Die Pfarrkirche St. Elisabeth an der Straße In der Auen liegt zwar schon auf Refrather Gebiet, dient aber auch den Bewohnern von Lustheide."
    ],
    "belege": {
      "Alle Aussagen": "https://de.wikipedia.org/wiki/Lustheide",
      "geprüft": "2026-09-29"
    }
  }
};
