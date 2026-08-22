export type District = { slug:string; name:string; code:string; inhabitants:string; area:string; brw?:string; brwGroup?:string };

export const districts: District[] = [
  {slug:"schildgen",name:"Schildgen",code:"11",inhabitants:"6.151",area:"Statistischer Bezirk 1",brw:"490–660",brwGroup:"Schildgen"},
  {slug:"katterbach",name:"Katterbach",code:"12",inhabitants:"4.990",area:"Statistischer Bezirk 1"},
  {slug:"nussbaum",name:"Nußbaum",code:"13",inhabitants:"1.092",area:"Statistischer Bezirk 1",brw:"540–720",brwGroup:"Paffrath / Nußbaum"},
  {slug:"paffrath",name:"Paffrath",code:"14",inhabitants:"7.076",area:"Statistischer Bezirk 1",brw:"540–720",brwGroup:"Paffrath / Nußbaum"},
  {slug:"hand",name:"Hand",code:"15",inhabitants:"8.865",area:"Statistischer Bezirk 1",brw:"510–660",brwGroup:"Hand"},
  {slug:"stadtmitte",name:"Stadtmitte",code:"21",inhabitants:"11.875",area:"Statistischer Bezirk 2",brw:"480–720",brwGroup:"Gladbach"},
  {slug:"hebborn",name:"Hebborn",code:"22",inhabitants:"5.943",area:"Statistischer Bezirk 2"},
  {slug:"heidkamp",name:"Heidkamp",code:"23",inhabitants:"6.551",area:"Statistischer Bezirk 2"},
  {slug:"gronau",name:"Gronau",code:"24",inhabitants:"6.407",area:"Statistischer Bezirk 2"},
  {slug:"romaney",name:"Romaney",code:"31",inhabitants:"722",area:"Statistischer Bezirk 3"},
  {slug:"herrenstrunden",name:"Herrenstrunden",code:"32",inhabitants:"911",area:"Statistischer Bezirk 3",brw:"400–490",brwGroup:"Herrenstrunden"},
  {slug:"sand",name:"Sand",code:"33",inhabitants:"2.510",area:"Statistischer Bezirk 3"},
  {slug:"herkenrath",name:"Herkenrath",code:"41",inhabitants:"3.631",area:"Statistischer Bezirk 4",brw:"430–540",brwGroup:"Herkenrath"},
  {slug:"asselborn",name:"Asselborn",code:"42",inhabitants:"882",area:"Statistischer Bezirk 4"},
  {slug:"baerbroich",name:"Bärbroich",code:"43",inhabitants:"1.280",area:"Statistischer Bezirk 4"},
  {slug:"lueckerath",name:"Lückerath",code:"51",inhabitants:"4.177",area:"Statistischer Bezirk 5"},
  {slug:"bensberg",name:"Bensberg",code:"52",inhabitants:"5.757",area:"Statistischer Bezirk 5",brw:"570–930",brwGroup:"Bensberg"},
  {slug:"bockenberg",name:"Bockenberg",code:"53",inhabitants:"3.083",area:"Statistischer Bezirk 5"},
  {slug:"kaule",name:"Kaule",code:"54",inhabitants:"3.997",area:"Statistischer Bezirk 5"},
  {slug:"moitzfeld",name:"Moitzfeld",code:"55",inhabitants:"4.491",area:"Statistischer Bezirk 5",brw:"480–630",brwGroup:"Moitzfeld"},
  {slug:"refrath",name:"Refrath",code:"61",inhabitants:"9.437",area:"Statistischer Bezirk 6",brw:"790–970",brwGroup:"Refrath"},
  {slug:"alt-refrath",name:"Alt-Refrath",code:"62",inhabitants:"3.261",area:"Statistischer Bezirk 6"},
  {slug:"kippekausen",name:"Kippekausen",code:"63",inhabitants:"2.530",area:"Statistischer Bezirk 6"},
  {slug:"frankenforst",name:"Frankenforst",code:"64",inhabitants:"5.452",area:"Statistischer Bezirk 6"},
  {slug:"lustheide",name:"Lustheide",code:"65",inhabitants:"3.401",area:"Statistischer Bezirk 6"},
];

export const districtBySlug = (slug:string) => districts.find((item)=>item.slug===slug);
