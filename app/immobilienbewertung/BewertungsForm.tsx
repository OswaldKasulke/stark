"use client";

import { useEffect, useState } from "react";
import StreetSearch, { type ResolvedAddress } from "./StreetSearch";

const propertyTypes=[["Wohnung","▤","Eigentumswohnung"],["Haus","⌂","Freistehendes Ein- oder Zweifamilienhaus"],["Mehrfamilienhaus","▥","Drei oder mehr Wohneinheiten"],["Grundstück","◇","Unbebautes Wohngrundstück"]];
const conditions=[["1 – Sehr gut","Neuwertig oder umfassend saniert"],["2 – Gut","Modernisiert und gut ausgestattet"],["3 – Befriedigend","Gepflegt und altersgemäß"],["4 – Ausreichend","Leichter Renovierungsbedarf"],["5 – Mangelhaft","Deutlicher Modernisierungsbedarf"],["6 – Ungenügend","Sanierungsstau und hoher Aufwand"]];
type ValuationData=Record<string,string>;
type ValuationResult={value:number;low:number;high:number;label:string;basis:string;comparison:string;protocol:string;grossYield?:number;warning?:string};

const money=(value:number)=>new Intl.NumberFormat("de-DE",{style:"currency",currency:"EUR",maximumFractionDigits:0}).format(Math.round(value/1000)*1000);
const numeric=(value:string)=>Number(value.replace(/[^0-9,.-]/g,"").replace(/\./g,"").replace(",","."))||0;
const brw:Record<string,[number,number]>={Schildgen:[490,660],Nußbaum:[540,720],Paffrath:[540,720],Hand:[510,660],Stadtmitte:[480,720],Herrenstrunden:[400,490],Herkenrath:[430,540],Bensberg:[570,930],Moitzfeld:[480,630],Refrath:[790,970]};
const houseSqm=[
  {plot:[0,500],values:[4715,4030,3380]},
  {plot:[501,700],values:[4630,3785,3315]},
  {plot:[701,900],values:[4965,4190,3520]},
  {plot:[901,Infinity],values:[5460,4420,3930]},
];

const apartmentPrice=(district:string,year:number,units:number):[number,string]=>{
  if(units>60)return[2250,"Wohnanlagen mit mehr als 60 Wohneinheiten: Mitte der veröffentlichten stadtweiten Spanne 1.000–3.500 €/m²"];
  if(["Schildgen","Stadtmitte","Paffrath","Hand"].includes(district)){
    if(year<=1977)return[2820,"Schildgen / Gladbach / Paffrath / Hand, Baujahr 1960–1977"];
    if(year<=1990)return[2820,"Schildgen / Gladbach / Paffrath / Hand, Baujahr 1978–1990; Mittel der veröffentlichten Wohnlagen"];
    if(year<=2015)return[3155,"Schildgen / Gladbach / Paffrath / Hand, Baujahr 1991–2015; Mittel der veröffentlichten Wohnlagen"];
  }
  if(["Moitzfeld","Herkenrath"].includes(district))return year<=1985?[2490,"Moitzfeld / Herkenrath, Baujahr 1970–1985"]:[2790,"Moitzfeld / Herkenrath, Baujahr 1986–2015"];
  if(district==="Bensberg")return year<=1985?[3075,"Bensberg, Baujahr 1965–1985; Mittel der veröffentlichten Wohnlagen"]:[3630,"Bensberg, Baujahr 1986–2015; Mittel der veröffentlichten Wohnlagen"];
  if(district==="Refrath"){
    if(year<=1975)return[2960,"Refrath, Baujahr 1960–1975"];
    if(year<=1989)return[3240,"Refrath, Baujahr 1976–1989"];
    if(year<=2000)return[3680,"Refrath, Baujahr 1990–2000"];
    return[4750,"Refrath, Baujahr 2001–2015"];
  }
  return[3750,"Kleine und mittlere Wohnanlagen: Mitte der veröffentlichten stadtweiten Spanne 1.500–6.000 €/m²"];
};

const roundFive=(value:number)=>Math.round(value/5000)*5000;
function calculate(data:ValuationData):ValuationResult|null{
  const living=numeric(data.living),plot=numeric(data.plot),year=numeric(data.year),units=numeric(data.units);
  const rentMonth=numeric(data.rentCurrentMonth)||(numeric(data.rentCurrentYear)/12);
  const conditionFactor=({1:1.2,2:1.1,3:1,4:.9,5:.8,6:.7} as Record<number,number>)[Number.parseInt(data.condition)]||1;
  const protocol:string[]=[`Lage: ${data.street} ${data.number}, ${data.zip} Bergisch Gladbach-${data.district}. Zuordnung über Straßen-Master und Hausnummernbereich.`];
  let value=0,label="Geschätzter Immobilienwert",basis="",comparison="",warning:string|undefined;
  if(data.type==="Grundstück"){
    const range=brw[data.district]||[510,970];
    const brwValue=(range[0]+range[1])/2;
    const development= data.development==="Erschlossen"?1:data.development==="Teilerschlossen"?.75:data.development==="Nicht erschlossen"?.5:1;
    value=plot*(brwValue*.7)*development; label="Geschätzter Bodenwert";
    basis=`${plot.toLocaleString("de-DE")} m² × (${brwValue.toLocaleString("de-DE")} €/m² × 0,70) × ${development.toLocaleString("de-DE")}`;
    comparison=brw[data.district]?`Mitte der veröffentlichten Bodenwertspanne ${range[0]}–${range[1]} €/m² für ${data.district}`:`Mittlerer lagetypischer Bodenrichtwert 660 €/m² für Bergisch Gladbach`;
    protocol.push(`Bodenrichtwert: ${comparison}.`,`Verfahren Bodenwert: ${basis} = ${money(value)}.`);
    warning="Der adressgenaue Bodenrichtwert richtet sich nach der konkreten BORIS-NRW-Zone und ist kein Verkehrswert.";
  } else if(rentMonth>0){
    const multiplier=data.type==="Mehrfamilienhaus"?(units>0&&units<=4?23.5:19.9):Math.max(16.67,1/.045);
    value=rentMonth*12*multiplier; basis=`${rentMonth.toLocaleString("de-DE")} € × 12 × ${multiplier.toLocaleString("de-DE",{maximumFractionDigits:2})}`;
    comparison=data.type==="Mehrfamilienhaus"?(units>0&&units<=4?"Rohertragsfaktor 2025 für Drei- und Vierfamilienhäuser":"Rohertragsfaktor 2025 für Mehrfamilienhäuser"):"Multiplikator-Untergrenze bei 4,5 % Bruttorendite";
    protocol.push(`Multiplikator: ${multiplier.toLocaleString("de-DE",{maximumFractionDigits:2})}; ${comparison}.`,`Verfahren Ertragswert: ${basis} = ${money(value)}. Zustand nicht zusätzlich angesetzt, da die Miete ihn bereits abbildet.`);
  } else if(data.type==="Mehrfamilienhaus"){
    return null;
  } else {
    let sqm=0,objectFactor=1;
    if(data.type==="Wohnung"){
      const item=apartmentPrice(data.district,year,units); sqm=item[0]; comparison=item[1]; objectFactor=1;
    } else {
      const group=houseSqm.find(item=>plot>=item.plot[0]&&plot<=item.plot[1])||houseSqm[0]; const livingIndex=living<=130?0:living<=180?1:2;
      sqm=group.values[livingIndex]; objectFactor=1;
      comparison=`Wiederverkaufte freistehende Eigenheime, passende Wohn- und Grundstücksgrößenklasse; Mittel der veröffentlichten Wohnlagen`;
    }
    value=living*sqm*objectFactor*conditionFactor;
    basis=`${living.toLocaleString("de-DE")} m² × ${sqm.toLocaleString("de-DE")} €/m² × ${objectFactor.toLocaleString("de-DE")} × ${conditionFactor.toLocaleString("de-DE")}`;
    protocol.push(`Preis je m²: ${sqm.toLocaleString("de-DE")} €/m². Quelle: Grundstücksmarktbericht 2026; ${comparison}.`,`Verfahren Sachwert: ${basis} = ${money(value)}.`);
  }
  const rounded=roundFive(value),low=roundFive(rounded*.9),high=roundFive(rounded*1.1);
  const grossYield=rentMonth>0?(rentMonth*12/rounded)*100:undefined;
  protocol.push(`Rundung: ${money(value)} auf ${money(rounded)}; Spanne ±10 % = ${money(low)} bis ${money(high)}.${grossYield?` Bruttorendite: ${grossYield.toFixed(2).replace(".",",")} %.`:""}`);
  return{value:rounded,low,high,label,basis,comparison,protocol:protocol.join("\n"),grossYield,warning};
}

export default function BewertungsForm(){
  const [step,setStep]=useState(1); const [result,setResult]=useState<ValuationResult|null>(null); const [addressValid,setAddressValid]=useState(false); const [sendStatus,setSendStatus]=useState<"idle"|"sending"|"sent"|"error">("idle");
  const [data,setData]=useState<ValuationData>({type:"",street:"",number:"",zip:"",district:"",city:"Bergisch Gladbach",living:"",plot:"",rooms:"",units:"",development:"",rentCurrentMonth:"",rentCurrentYear:"",condition:"",year:"",first:"",last:"",email:"",phone:"",contactAddress:"",contactZip:"",contactCity:"",consent:""});
  const update=(key:string,value:string)=>setData(prev=>prev[key]===value?prev:{...prev,[key]:value});
  useEffect(()=>{const street=new URLSearchParams(window.location.search).get("street");if(street)update("street",street);},[]);
  const resolved=(address:ResolvedAddress)=>{setAddressValid(address.valid);update("zip",address.zip);update("district",address.district);};
  const next=()=>setStep(value=>Math.min(7,value+1)); const back=()=>setStep(value=>Math.max(1,value-1));
  const hasSize=data.type==="Grundstück"?numeric(data.plot)>0:numeric(data.living)>0;
  const rentPresent=numeric(data.rentCurrentMonth)>0||numeric(data.rentCurrentYear)>0;
  const canContinue=step===1?!!data.type:step===2?!!data.street&&addressValid:step===3?hasSize:step===4?data.type!=="Mehrfamilienhaus"||rentPresent:step===5?!!data.condition&&numeric(data.year)>=1800:step===6?!!data.first&&!!data.last&&!!data.email&&!!data.phone&&data.consent==="yes":true;
  const sendLead=async(calculated:ValuationResult)=>{
    setSendStatus("sending"); const body=new FormData();
    const fields:Record<string,string>={type:"immobilienbewertung",site:"BGL",objektart:data.type,wohnflaeche:data.living,grundstuecksflaeche:data.plot,zimmer:data.rooms,einheiten:data.units,erschliessung:data.development,zustand:data.condition,baujahr:data.year,miete_ist:data.rentCurrentMonth,miete_ist_jahr:data.rentCurrentYear,immo_strasse:`${data.street} ${data.number}`.trim(),immo_plz:data.zip,immo_veedel:data.district,immo_ort:"Bergisch Gladbach",vorname:data.first,nachname:data.last,email:data.email,telefon:data.phone,kontakt_strasse:data.contactAddress,kontakt_plz:data.contactZip,kontakt_ort:data.contactCity,ergebnis:money(calculated.value),preisspanne:`${money(calculated.low)} – ${money(calculated.high)}`,rechenweg:calculated.protocol,website:""};
    Object.entries(fields).forEach(([key,value])=>body.append(key,value));
    try{const response=await fetch("https://romanbecker.de/submit.php",{method:"POST",body});setSendStatus(response.ok?"sent":"error");}catch{setSendStatus("error");}
  };
  const evaluate=()=>{const calculated=calculate(data);if(!calculated)return;setResult(calculated);setStep(7);void sendLead(calculated);};

  return <div className="valuation-tool"><div className="progress" aria-label={`Schritt ${step} von 7`}>{[1,2,3,4,5,6,7].map(n=><span className={n<=step?"active":""} key={n}>{n}</span>)}</div><div className="tool-panel">
    {step===1&&<><p className="eyebrow">Schritt 1 von 7</p><h2>Was möchten Sie bewerten?</h2><p className="tool-intro">Wählen Sie die Art Ihrer Immobilie.</p><div className="type-grid">{propertyTypes.map(([type,icon,description])=><button type="button" className={data.type===type?"selected":""} onClick={()=>update("type",type)} key={type}><span>{icon}</span><strong>{type}</strong><small>{description}</small></button>)}</div></>}
    {step===2&&<><p className="eyebrow">Schritt 2 von 7</p><h2>Wo liegt die Immobilie?</h2><p className="tool-intro">Suchen Sie die Straße. PLZ und Stadtteil werden anhand der Hausnummer aus dem Straßen-Master der Stadt Bergisch Gladbach zugeordnet.</p><StreetSearch street={data.street} houseNumber={data.number} onStreetChange={(value)=>update("street",value)} onHouseNumberChange={(value)=>update("number",value)} onResolve={resolved}/>{addressValid&&<div className="resolved-grid"><span>PLZ<strong>{data.zip}</strong></span><span>Ort<strong>Bergisch Gladbach</strong></span><span>Stadtteil<strong>{data.district}</strong></span></div>}<a className="data-source" href="https://www.bergischgladbach.de/strassenabfrage.aspx" target="_blank" rel="noreferrer">Quelle: Straßenabfrage der Stadt Bergisch Gladbach · Stand 22.08.2026 ↗</a></>}
    {step===3&&<><p className="eyebrow">Schritt 3 von 7</p><h2>Wie groß ist die Immobilie?</h2><p className="tool-intro">Geben Sie die vorhandenen Flächen an.</p>{data.type!=="Grundstück"&&<label>Wohnfläche in m² *<input type="number" min="1" value={data.living} onChange={e=>update("living",e.target.value)} placeholder="z. B. 120"/></label>}<label>Grundstücksfläche in m² {data.type==="Grundstück"&&"*"}<input type="number" min="1" value={data.plot} onChange={e=>update("plot",e.target.value)} placeholder="z. B. 450"/></label></>}
    {step===4&&<><p className="eyebrow">Schritt 4 von 7</p><h2>Weitere Angaben</h2><p className="tool-intro">Eine vorhandene Kaltmiete aktiviert das Ertragswertverfahren. Beim Mehrfamilienhaus ist sie erforderlich.</p><div className="form-row"><label>Anzahl Zimmer<input type="number" min="0" step="0.5" value={data.rooms} onChange={e=>update("rooms",e.target.value)} placeholder="z. B. 4"/></label><label>Wohneinheiten<input type="number" min="1" value={data.units} onChange={e=>update("units",e.target.value)} placeholder="z. B. 2"/></label></div>{data.type==="Grundstück"?<label>Erschließungsstatus<select value={data.development} onChange={e=>update("development",e.target.value)}><option value="">Bitte auswählen</option><option>Erschlossen</option><option>Teilerschlossen</option><option>Nicht erschlossen</option><option>Unbekannt</option></select></label>:<div className="rent-grid"><label>Kaltmiete IST monatlich {data.type==="Mehrfamilienhaus"&&"*"}<input value={data.rentCurrentMonth} onChange={e=>update("rentCurrentMonth",e.target.value)} placeholder="z. B. 1.200 €"/></label><label>Kaltmiete IST jährlich<input value={data.rentCurrentYear} onChange={e=>update("rentCurrentYear",e.target.value)} placeholder="z. B. 14.400 €"/></label></div>}{data.type==="Mehrfamilienhaus"&&!rentPresent&&<p className="address-result">Für Mehrfamilienhäuser ist die Ist-Miete erforderlich.</p>}</>}
    {step===5&&<><p className="eyebrow">Schritt 5 von 7</p><h2>Zustand & Baujahr</h2><p className="tool-intro">Bei einer Bewertung ohne Miete wird der Zustand mit dem vorgegebenen Zustandsfaktor berücksichtigt.</p><div className="condition-grid">{conditions.map(([item,description])=><button type="button" className={data.condition===item?"selected":""} onClick={()=>update("condition",item)} key={item}><strong>{item}</strong><small>{description}</small></button>)}</div><label>Baujahr *<input type="number" min="1800" max="2026" value={data.year} onChange={e=>update("year",e.target.value)} placeholder="z. B. 1965"/></label></>}
    {step===6&&<><p className="eyebrow">Schritt 6 von 7</p><h2>Ihre Kontaktdaten</h2><p className="tool-intro">Nach der Berechnung wird Ihnen der Wert direkt angezeigt. Das Rechenprotokoll wird zur Bearbeitung Ihrer Anfrage übermittelt.</p><div className="form-row"><label>Vorname *<input value={data.first} onChange={e=>update("first",e.target.value)} autoComplete="given-name"/></label><label>Nachname *<input value={data.last} onChange={e=>update("last",e.target.value)} autoComplete="family-name"/></label></div><div className="form-row"><label>E-Mail *<input type="email" value={data.email} onChange={e=>update("email",e.target.value)} autoComplete="email"/></label><label>Telefon *<input type="tel" value={data.phone} onChange={e=>update("phone",e.target.value)} autoComplete="tel"/></label></div><label>Ihre Adresse (optional)<input value={data.contactAddress} onChange={e=>update("contactAddress",e.target.value)} placeholder="Straße und Hausnummer"/></label><div className="form-row"><label>PLZ<input value={data.contactZip} onChange={e=>update("contactZip",e.target.value)} inputMode="numeric"/></label><label>Ort<input value={data.contactCity} onChange={e=>update("contactCity",e.target.value)}/></label></div><label className="tool-consent"><input type="checkbox" checked={data.consent==="yes"} onChange={e=>update("consent",e.target.checked?"yes":"")}/> Ich bin damit einverstanden, dass meine Angaben zur Bearbeitung der Bewertungsanfrage gespeichert und verarbeitet werden. *</label></>}
    {step===7&&result&&<><p className="eyebrow">Ihre Immobilienbewertung</p><h2>{result.label}</h2><div className="valuation-result"><span>Geschätzter Wert</span><strong>{money(result.value)}</strong><p>Orientierungsspanne: {money(result.low)} – {money(result.high)}</p></div><div className="summary"><p><span>Immobilie</span><strong>{data.type}</strong></p><p><span>Adresse</span><strong>{data.street} {data.number}, {data.zip} Bergisch Gladbach-{data.district}</strong></p><p><span>Datengrundlage</span><strong>{result.comparison}</strong></p><p><span>Rechnung</span><strong>{result.basis}</strong></p>{result.grossYield&&<p><span>Bruttorendite</span><strong>{result.grossYield.toFixed(2).replace(".",",")} %</strong></p>}</div>{result.warning&&<div className="valuation-notice"><strong>Einordnung</strong><p>{result.warning}</p></div>}{sendStatus==="error"&&<p className="result-send-error">Die Bewertung wurde angezeigt, das Rechenprotokoll konnte jedoch nicht automatisch übermittelt werden.</p>}<div className="result-sources"><a className="source-link" href="https://www.gars.nrw/stadt-gl/produkte-gl/grundstuecksmarktbericht-gl" target="_blank" rel="noreferrer">Quelle: Grundstücksmarktbericht Bergisch Gladbach 2026, S. 5, 27–40 und 49–64 ↗</a>{data.type==="Grundstück"&&<a className="source-link" href="https://www.boris.nrw.de/" target="_blank" rel="noreferrer">Adressgenaue Zone in BORIS-NRW prüfen ↗</a>}</div><p className="valuation-disclaimer">Automatisch ermittelte, unverbindliche Orientierung auf Basis generalisierter amtlicher Marktdaten; keine Verkehrswertermittlung und kein Gutachten.</p></>}
    <div className="tool-actions">{step>1&&<button type="button" className="button outline" onClick={back}>{step===7?"Angaben ändern":"Zurück"}</button>}{step<6&&<button type="button" className="button gold" disabled={!canContinue} onClick={next}>Weiter</button>}{step===6&&<button type="button" className="button gold" disabled={!canContinue||sendStatus==="sending"} onClick={evaluate}>Bewertung berechnen</button>}</div>
  </div></div>;
}
