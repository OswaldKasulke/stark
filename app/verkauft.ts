// Über das Evernest-Netzwerk verkaufte Objekte – nur Straßenname, nie Hausnummer.
// Quelle: Evernest-CRM, Stand 23.09.2026 (erzeugt mit evernest-data/bgl_verkauft.py).
// Stadtteil über das amtliche Straßenverzeichnis (strassen.ts) samt Hausnummernbereich.
export type SoldReference = { street: string; typ: string; count: number };
export const soldByDistrict: Record<string, SoldReference[]> = {
 "Asselborn": [
  {
   "street": "Braunsberg",
   "typ": "Haus",
   "count": 1
  }
 ],
 "Bensberg": [
  {
   "street": "Hackberg",
   "typ": "Haus",
   "count": 1
  },
  {
   "street": "Eichelstraße",
   "typ": "Haus",
   "count": 1
  },
  {
   "street": "Engelbertstraße",
   "typ": "Wohnung",
   "count": 1
  }
 ],
 "Bockenberg": [
  {
   "street": "Graf-Hermann-Straße",
   "typ": "Wohnung",
   "count": 1
  },
  {
   "street": "Giselbertstraße",
   "typ": "Wohnung",
   "count": 4
  }
 ],
 "Frankenforst": [
  {
   "street": "Wingertsheide",
   "typ": "Wohnung",
   "count": 1
  },
  {
   "street": "Im Vogelsang",
   "typ": "Wohnung",
   "count": 1
  },
  {
   "street": "Kurt-Schumacher-Straße",
   "typ": "Wohnung",
   "count": 1
  }
 ],
 "Gronau": [
  {
   "street": "Mülheimer Straße",
   "typ": "Wohnung",
   "count": 1
  }
 ],
 "Hebborn": [
  {
   "street": "An der Engelsfuhr",
   "typ": "Haus",
   "count": 1
  },
  {
   "street": "Engelsgut",
   "typ": "Wohnung",
   "count": 1
  }
 ],
 "Heidkamp": [
  {
   "street": "Bensberger Straße",
   "typ": "Wohnung",
   "count": 1
  },
  {
   "street": "Scheidtbachstraße",
   "typ": "Wohnung",
   "count": 1
  }
 ],
 "Herkenrath": [
  {
   "street": "Straßen",
   "typ": "Wohnung",
   "count": 1
  },
  {
   "street": "Arnold-von-Lülsdorf-Str.",
   "typ": "Haus",
   "count": 1
  }
 ],
 "Katterbach": [
  {
   "street": "Im Neuen Feld",
   "typ": "Haus",
   "count": 1
  },
  {
   "street": "Weidenbuscher Weg",
   "typ": "Grundstück",
   "count": 1
  }
 ],
 "Kaule": [
  {
   "street": "Broicher Straße",
   "typ": "Haus",
   "count": 1
  },
  {
   "street": "Theodor-Storm-Straße",
   "typ": "Haus",
   "count": 1
  },
  {
   "street": "Im Mondsröttchen",
   "typ": "Haus",
   "count": 1
  }
 ],
 "Kippekausen": [
  {
   "street": "Am Rittersteg",
   "typ": "Haus",
   "count": 1
  },
  {
   "street": "Burgstraße",
   "typ": "Haus",
   "count": 1
  }
 ],
 "Lustheide": [
  {
   "street": "Neufeldweg",
   "typ": "Haus",
   "count": 1
  },
  {
   "street": "Pippelstein",
   "typ": "Haus",
   "count": 1
  }
 ],
 "Lückerath": [
  {
   "street": "Saaler Straße",
   "typ": "Haus",
   "count": 1
  },
  {
   "street": "Imbuschstraße",
   "typ": "Wohnung",
   "count": 1
  },
  {
   "street": "Jakob-Euler-Straße",
   "typ": "Haus",
   "count": 1
  },
  {
   "street": "Hans-Böckler-Straße",
   "typ": "Wohnung",
   "count": 1
  }
 ],
 "Moitzfeld": [
  {
   "street": "Platzer Höhenweg",
   "typ": "Immobilie",
   "count": 2
  },
  {
   "street": "Enrico-Fermi-Straße",
   "typ": "Haus",
   "count": 1
  },
  {
   "street": "Löher Höhenweg",
   "typ": "Wohnung",
   "count": 1
  }
 ],
 "Nußbaum": [
  {
   "street": "Reuterstraße",
   "typ": "Haus",
   "count": 1
  }
 ],
 "Paffrath": [
  {
   "street": "Töpferweg",
   "typ": "Haus",
   "count": 1
  },
  {
   "street": "Hufer Weg",
   "typ": "Haus",
   "count": 1
  }
 ],
 "Refrath": [
  {
   "street": "In der Auen",
   "typ": "Wohnung",
   "count": 2
  },
  {
   "street": "Im Bruch",
   "typ": "Haus",
   "count": 1
  },
  {
   "street": "Beningsfeld",
   "typ": "Wohnung",
   "count": 1
  },
  {
   "street": "Merkelweg",
   "typ": "Wohnung",
   "count": 1
  }
 ],
 "Sand": [
  {
   "street": "Dombach-Sander-Straße",
   "typ": "Haus",
   "count": 1
  },
  {
   "street": "Häuser Dombach",
   "typ": "Haus",
   "count": 1
  }
 ],
 "Schildgen": [
  {
   "street": "Broicher Feld",
   "typ": "Haus",
   "count": 1
  },
  {
   "street": "Voiswinkeler Straße",
   "typ": "Haus",
   "count": 1
  },
  {
   "street": "Auf dem Kirchenfeld",
   "typ": "Haus",
   "count": 1
  }
 ],
 "Stadtmitte": [
  {
   "street": "Sonnenweg",
   "typ": "Wohnung",
   "count": 1
  }
 ]
};
export const soldByPlace: Record<string, SoldReference[]> = {
 "kuerten": [
  {
   "street": "Heiderjansfelder Straße",
   "typ": "Wohnung",
   "count": 1
  },
  {
   "street": "Wipperfürther Straße",
   "typ": "Haus",
   "count": 1
  },
  {
   "street": "Am Lindchen",
   "typ": "Haus",
   "count": 1
  },
  {
   "street": "Sperberweg",
   "typ": "Haus",
   "count": 1
  },
  {
   "street": "Dorpe",
   "typ": "Haus",
   "count": 1
  }
 ],
 "odenthal": [
  {
   "street": "Am Steinhauser Busch",
   "typ": "Immobilie",
   "count": 2
  },
  {
   "street": "Wingensiefer Kamp",
   "typ": "Haus",
   "count": 1
  },
  {
   "street": "Am Geus Garten",
   "typ": "Haus",
   "count": 1
  },
  {
   "street": "Am Köttersbach",
   "typ": "Haus",
   "count": 1
  }
 ],
 "overath": [
  {
   "street": "Nachtigallenweg",
   "typ": "Haus",
   "count": 1
  },
  {
   "street": "Krombacher Straße",
   "typ": "Haus",
   "count": 2
  }
 ]
};
