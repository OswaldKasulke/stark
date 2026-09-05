"use client";

import { useEffect, useState } from "react";
import StreetSearch, { type ResolvedAddress } from "./StreetSearch";
import { calculateShared, getSharedFieldInfo, getSharedRequiredFields, type AddressCandidate } from "../gemeinsame-bewertung";

const propertyTypes=[["Wohnung","▤"],["Haus","⌂"],["Mehrfamilienhaus","▥"],["Grundstück","◫"]];
const standardStufen=[["1","1 – sehr einfach (Kernsanierung)"],["2","2 – sehr einfach – einfach"],["3","3 – einfach"],["4","4 – einfach – mittel"],["5","5 – mittel"],["6","6 – mittel – gehoben"],["7","7 – gehoben"],["8","8 – gehoben – stark gehoben"],["9","9 – stark gehoben"],["10","10 – Luxus (Neubau oder Kernsanierung)"]];
const accessOptions=[["voll","Voll erschlossen"],["teil","Teilerschlossen"],["nicht","Nicht erschlossen"]];
const istIRW=(type:string)=>type==="Wohnung"||type==="Haus";
type ValuationData=Record<string,string>;
type ValuationResult={value:number;low:number;high:number;label:string;basis:string;comparison:string;protocol:string;warning?:string;outside?:boolean;pricePerSqm?:number;zoneId?:string};
// Einheitliche Ausserhalb-Behandlung: identischer Aufbau (Erkennungslink im
// Strassenschritt, Ruckfall-Freitextformular, kein Ergebnis, Lead trotzdem
// senden) auch in leverkusen-makler.de/app/immobilienbewertung/BewertungsForm.tsx
// und in makler-schael-sick.de/src/rechner.py. Nur Gebietsname und Telefon lokal.
const AUSSERHALB_GEBIET="des gemeinsamen Bewertungsgebiets Köln, Rhein-Erft-Kreis, Leverkusen und Bergisch Gladbach";

const money=(value:number)=>new Intl.NumberFormat("de-DE",{style:"currency",currency:"EUR",maximumFractionDigits:0}).format(Math.round(value/1000)*1000);
const numeric=(value:string)=>{
  if(!value)return 0;
  let text=String(value).replace(/[^0-9.,-]/g,"");
  const comma=text.lastIndexOf(","), dot=text.lastIndexOf(".");
  if(comma>-1&&dot>-1){
    // Das hintere Zeichen trennt die Dezimalstellen.
    text = comma>dot ? text.replace(/\./g,"").replace(",",".") : text.replace(/,/g,"");
  } else if(comma>-1){
    text = (text.split(",").length>2||/,\d{3}$/.test(text)) ? text.replace(/,/g,"") : text.replace(",",".");
  } else if(dot>-1){
    // Ein Punkt trennt nur dann Tausender, wenn genau drei Ziffern folgen.
    text = (text.split(".").length>2||/\.\d{3}$/.test(text)) ? text.replace(/\./g,"") : text;
  }
  return Number(text)||0;
};
const modelAttributes=(data:ValuationData)=>{const out:Record<string,string|number|boolean>={WHNFL:numeric(data.living),BJ:numeric(data.year)};if(data.type==="Haus")out.FLAE=numeric(data.plot);Object.entries(data).forEach(([key,value])=>{if(/^[A-Z]+$/.test(key)&&value!=="")out[key]=numeric(value);});if(data.type==="Mehrfamilienhaus")out.KALTMIETE=numeric(data.rent);if(data.gstand)out.GSTAND=numeric(data.gstand);if(data.type==="Grundstück")out.FLAE=numeric(data.plot);return out;};
function calculate(data:ValuationData,candidates:AddressCandidate[]):ValuationResult|null{
  if(data.outside==="yes"){
    const adr=`${data.outsideStreet} ${data.outsideNumber}`.trim()+`, ${data.outsideZip?data.outsideZip+" ":""}${data.outsideCity}`;
    return{value:0,low:0,high:0,label:"Adresse außerhalb unseres Gebiets",basis:"",comparison:"",outside:true,
      protocol:[`Lage: ${adr}.`,`Diese Adresse liegt außerhalb ${AUSSERHALB_GEBIET}; für sie liegt kein amtlicher Vergleichswert aus dem Grundstücksmarktbericht vor.`,"Es wurde deshalb kein automatischer Wert berechnet. Die Anfrage wurde zur persönlichen Einschätzung weitergeleitet."].join("\n")};
  }
  const shared=calculateShared({type:data.type,attributes:modelAttributes(data)},candidates);
  if(!istIRW(data.type)){
    const adresse=`Adresse: ${data.street} ${data.number}, ${data.zip} ${data.city}${data.district?` · ${data.district}`:""}.`;
    const basisNeu=data.type==="Grundstück"
      ?`${shared.bodenrichtwert_eur_m2.toLocaleString("de-DE")} €/m² Bodenrichtwert × 0,8 → ${shared.pricePerSqm.toLocaleString("de-DE")} €/m² × ${numeric(data.plot).toLocaleString("de-DE")} m²`
      :`${money(shared.jahresnettokaltmiete)} Jahresnettokaltmiete × Faktor ${shared.faktor.toFixed(2)}`;
    const protokollNeu=[adresse,`Verfahren: ${shared.verfahren}; ${shared.berechnungsart}.`,`Grundlage: ${shared.modellquelle}.`,`Gerundeter Endwert ${money(shared.value)}; Spanne ±10 % ${money(shared.low)} bis ${money(shared.high)}.`];
    if(shared.untergrenze_gegriffen)protokollNeu.push("Die Untergrenze aus 10 €/m² Kaltmiete hat gegriffen — die angegebene Miete liegt darunter.");
    return{value:shared.value,low:shared.low,high:shared.high,label:data.type==="Grundstück"?"Geschätzter Bodenwert":"Geschätzter Ertragswert",
      basis:basisNeu,comparison:shared.modellquelle,protocol:protokollNeu.join("\n"),pricePerSqm:shared.pricePerSqm,
      warning:"Unverbindliche Orientierung, keine Verkehrswertermittlung und kein Gutachten."};
  }
  const basis=`${shared.preis_master_eur_m2.toLocaleString("de-DE")} €/m² × Zustand ${shared.zustandsfaktor} → ${shared.pricePerSqm.toLocaleString("de-DE")} €/m² × ${numeric(data.living).toLocaleString("de-DE")} m²`;
  const protocol=[`Adresse: ${data.street} ${data.number}, ${data.zip} ${data.city}${data.district?` · ${data.district}`:""}.`,`Preis-Master ${shared.lage}: ${shared.preis_master_eur_m2.toLocaleString("de-DE")} €/m².`,`Zustand und Ausstattung ${data.gstand||"—"} → Faktor ${shared.zustandsfaktor}.`,`${shared.pricePerSqm.toLocaleString("de-DE")} €/m² × ${numeric(data.living).toLocaleString("de-DE")} m² = ${money(shared.value)}; Spanne ±10 % ${money(shared.low)} bis ${money(shared.high)}.`];
  return{value:shared.value,low:shared.low,high:shared.high,label:"Geschätzter Immobilienwert",basis,comparison:shared.modellquelle,protocol:protocol.join("\n"),pricePerSqm:shared.pricePerSqm,warning:"Unverbindliche Orientierung, keine Verkehrswertermittlung und kein Gutachten."};
}

export default function BewertungsForm(){
  const [step,setStep]=useState(1); const [result,setResult]=useState<ValuationResult|null>(null); const [addressValid,setAddressValid]=useState(false); const [sendStatus,setSendStatus]=useState<"idle"|"sending"|"sent"|"error">("idle"); const [calculationError,setCalculationError]=useState("");
  const [addressCandidates,setAddressCandidates]=useState<AddressCandidate[]>([]);
  const [data,setData]=useState<ValuationData>({type:"",street:"",number:"",zip:"",district:"",city:"",living:"",plot:"",rent:"",gstand:"",year:"",first:"",last:"",email:"",phone:"",contactAddress:"",contactZip:"",contactCity:"",consent:"",outside:"",outsideStreet:"",outsideNumber:"",outsideZip:"",outsideCity:""});
  const update=(key:string,value:string)=>setData(prev=>prev[key]===value?prev:{...prev,[key]:value});
  useEffect(()=>{const street=new URLSearchParams(window.location.hash.slice(1)).get("street");if(street)update("street",street);},[]);
  const resolved=(address:ResolvedAddress)=>{setAddressValid(address.valid);setAddressCandidates(address.candidates);update("district",address.district);update("city",address.city);};
  // Ein Grundstück hat kein Baujahr — der Schritt entfällt dort.
  const next=()=>setStep(value=>value===3&&data.type==="Grundstück"?5:Math.min(6,value+1)); const back=()=>setStep(value=>value===5&&data.type==="Grundstück"?3:Math.max(1,value-1));
  const attributes=modelAttributes(data);
  const requiredFields=addressValid?getSharedRequiredFields(data.type,addressCandidates,attributes):[];
  const additionalFields=requiredFields.filter((field:string)=>!["EGART","WHNFL","FLAE","BJ"].includes(field));
  const additionalComplete=additionalFields.every((field:string)=>attributes[field]!==undefined&&attributes[field]!==""&&Number.isFinite(Number(attributes[field])));
  const canContinue=step===1?!!data.type:step===2?(data.outside==="yes"?!!data.outsideStreet&&!!data.outsideCity:!!data.street&&!!data.zip&&addressValid):step===3?(data.type==="Grundstück"?numeric(data.plot)>0:!data.gstand?false:data.type==="Mehrfamilienhaus"?numeric(data.living)>0&&numeric(data.rent)>0:numeric(data.living)>0&&(data.type!=="Haus"||numeric(data.plot)>0)):step===4?(istIRW(data.type)?numeric(data.year)>=1800:true):step===5?!!data.first&&!!data.last&&!!data.email&&!!data.phone&&data.consent==="yes":true;
  const sendLead=async(calculated:ValuationResult)=>{
    setSendStatus("sending"); const body=new FormData();
    const fields:Record<string,string>={type:"immobilienbewertung",site:"BGL",objektart:data.type,wohnflaeche:data.living,grundstuecksflaeche:data.plot,baujahr:data.year,modellmerkmale:JSON.stringify(modelAttributes(data)),immo_strasse:data.outside==="yes"?`${data.outsideStreet} ${data.outsideNumber}`.trim():`${data.street} ${data.number}`.trim(),immo_plz:data.outside==="yes"?data.outsideZip:data.zip,immo_veedel:data.outside==="yes"?"":data.district,immo_ort:data.outside==="yes"?data.outsideCity:data.city,vorname:data.first,nachname:data.last,email:data.email,telefon:data.phone,kontakt_strasse:data.contactAddress,kontakt_plz:data.contactZip,kontakt_ort:data.contactCity,ergebnis:calculated.outside?"":money(calculated.value),preisspanne:calculated.outside?"":`${money(calculated.low)} – ${money(calculated.high)}`,rechenweg:calculated.protocol,website:""};
    Object.entries(fields).forEach(([key,value])=>body.append(key,value));
    try{const response=await fetch("https://romanbecker.de/submit.php",{method:"POST",body});setSendStatus(response.ok?"sent":"error");}catch{setSendStatus("error");}
  };
  const evaluate=()=>{try{setCalculationError("");const calculated=calculate(data,addressCandidates);if(!calculated)return;setResult(calculated);setStep(6);void sendLead(calculated);}catch(error){setCalculationError(error instanceof Error?error.message:"Die amtliche Berechnung konnte nicht ausgeführt werden.");}};

  return <div className="valuation-tool"><div className="progress" aria-label={`Schritt ${step} von 6`}>{[1,2,3,4,5,6,7].map(n=><span className={n<=step?"active":""} key={n}>{n}</span>)}</div><div className="tool-panel">
    {step===1&&<><p className="eyebrow">Schritt 1 von 6</p><h2>Was möchten Sie bewerten?</h2><div className="type-grid">{propertyTypes.map(([type,icon])=><button type="button" className={data.type===type?"selected":""} onClick={()=>update("type",type)} key={type}><span>{icon}</span><strong>{type}</strong></button>)}</div></>}
    {step===2&&data.outside!=="yes"&&<><p className="eyebrow">Schritt 2 von 6</p><h2>Wo liegt die Immobilie?</h2><StreetSearch postalCode={data.zip} street={data.street} houseNumber={data.number} onPostalCodeChange={(value)=>update("zip",value)} onStreetChange={(value)=>update("street",value)} onHouseNumberChange={(value)=>update("number",value)} onResolve={resolved}/>{addressValid&&<div className="resolved-grid"><span>PLZ<strong>{data.zip}</strong></span><span>Ort<strong>{data.city}</strong></span><span>Preisgebiet<strong>{data.district}</strong></span></div>}<p className="address-result"><button type="button" className="link-btn" onClick={()=>update("outside","yes")}>Adresse nicht gefunden? Manuell eingeben →</button></p></>}{step===2&&data.outside==="yes"&&<><p className="eyebrow">Schritt 2 von 6</p><h2>Wo liegt die Immobilie?</h2><p className="tool-intro">Diese Adresse liegt außerhalb {AUSSERHALB_GEBIET}. Wir berechnen hier keinen automatischen Wert, schauen uns Ihre Immobilie aber gern persönlich an.</p><div className="form-row"><label>Straße *<input value={data.outsideStreet} onChange={e=>update("outsideStreet",e.target.value)}/></label><label>Hausnummer<input value={data.outsideNumber} onChange={e=>update("outsideNumber",e.target.value)}/></label></div><div className="form-row"><label>PLZ<input value={data.outsideZip} onChange={e=>update("outsideZip",e.target.value)} inputMode="numeric"/></label><label>Ort *<input value={data.outsideCity} onChange={e=>update("outsideCity",e.target.value)}/></label></div><p className="address-result"><button type="button" className="link-btn" onClick={()=>update("outside","")}>← Zur gemeinsamen Straßensuche</button></p></>}
    {step===3&&<><p className="eyebrow">Schritt 3 von 6</p><h2>{data.type==="Grundstück"?"Wie groß ist das Grundstück?":"Wie groß ist die Immobilie?"}</h2>{data.type!=="Grundstück"&&<label>Wohnfläche in m² *<input inputMode="decimal" value={data.living} onChange={e=>update("living",e.target.value)} placeholder="z. B. 120"/></label>}{(data.type==="Haus"||data.type==="Grundstück")&&<label>Grundstücksfläche in m² *<input inputMode="decimal" value={data.plot} onChange={e=>update("plot",e.target.value)} placeholder="z. B. 450"/></label>}{data.type==="Mehrfamilienhaus"&&<label>Monatliche Nettokaltmiete in € *<input inputMode="decimal" value={data.rent||""} onChange={e=>update("rent",e.target.value)} placeholder="z. B. 4200"/></label>}{data.type!=="Grundstück"&&<label>Zustand und Ausstattung *<select value={data.gstand||""} onChange={e=>update("gstand",e.target.value)}><option value="">Bitte auswählen</option>{standardStufen.map(([wert,text])=><option value={wert} key={wert}>{text}</option>)}</select></label>}</>}
    {step===4&&<><p className="eyebrow">Schritt 4 von 6</p><h2>Baujahr</h2><label>Baujahr{istIRW(data.type)?" *":""}<input type="number" min="1760" max="2026" value={data.year} onChange={e=>update("year",e.target.value)} placeholder="z. B. 1965"/></label></>}
    {step===5&&<><p className="eyebrow">Schritt 5 von 6</p><h2>Ihre Kontaktdaten</h2><p className="tool-intro">Nach der Berechnung wird Ihnen der Wert direkt angezeigt. Das Rechenprotokoll wird zur Bearbeitung Ihrer Anfrage übermittelt.</p><div className="form-row"><label>Vorname *<input value={data.first} onChange={e=>update("first",e.target.value)} autoComplete="given-name"/></label><label>Nachname *<input value={data.last} onChange={e=>update("last",e.target.value)} autoComplete="family-name"/></label></div><div className="form-row"><label>E-Mail *<input type="email" value={data.email} onChange={e=>update("email",e.target.value)} autoComplete="email"/></label><label>Telefon *<input type="tel" value={data.phone} onChange={e=>update("phone",e.target.value)} autoComplete="tel"/></label></div><label>Ihre Adresse (optional)<input value={data.contactAddress} onChange={e=>update("contactAddress",e.target.value)} placeholder="Straße und Hausnummer"/></label><div className="form-row"><label>PLZ<input value={data.contactZip} onChange={e=>update("contactZip",e.target.value)} inputMode="numeric"/></label><label>Ort<input value={data.contactCity} onChange={e=>update("contactCity",e.target.value)}/></label></div><label className="tool-consent"><input type="checkbox" checked={data.consent==="yes"} onChange={e=>update("consent",e.target.checked?"yes":"")}/> Ich bin damit einverstanden, dass meine Angaben zur Bearbeitung der Bewertungsanfrage gespeichert und verarbeitet werden. *</label></>}
    {step===6&&result&&result.outside&&<><p className="eyebrow">Ihre Anfrage</p><h2>{result.label}</h2><div className="valuation-notice"><strong>Kein automatischer Wert</strong><p style={{whiteSpace:"pre-line"}}>{result.protocol}</p></div></>}{step===6&&result&&!result.outside&&<><p className="eyebrow">Ihre Immobilienbewertung</p><h2>{result.label}</h2><div className="valuation-result"><span>Geschätzter Wert</span><strong>{money(result.value)}</strong><p>Orientierungsspanne: {money(result.low)} – {money(result.high)}</p></div><div className="summary"><p><span>Immobilie</span><strong>{data.type}</strong></p><p><span>Adresse</span><strong>{data.street} {data.number}, {data.zip} {data.city}{data.district?` · ${data.district}`:""}</strong></p><p><span>Veedel</span><strong>{data.district||data.city}</strong></p><p><span>Angepasster Preis</span><strong>{result.pricePerSqm?.toLocaleString("de-DE")} €/m²</strong></p></div>{result.warning&&<div className="valuation-notice"><strong>Einordnung</strong><p>{result.warning}</p></div>}<div className="valuation-notice"><strong>Wichtiger Hinweis zur individuellen Preisgestaltung</strong><p>Der berechnete Wert ist eine Orientierung. Der Angebotspreis am Markt kann davon abweichen, wenn besondere Merkmale vorliegen:</p><p><strong>Besondere Lage:</strong> Innerhalb eines Veedels gibt es Top-Lagen, die deutliche Preisaufschläge erzielen.</p>{data.type==="Grundstück"?<p><strong>Bebauung:</strong> Der Wert unterstellt ein Einfamilienhaus-Grundstück. Lässt der Bebauungsplan ein Mehrfamilienhaus zu, liegt der Marktwert deutlich höher.</p>:<p><strong>Objekt-Typ:</strong> Besondere Wohnformen wie Penthouse oder Loft unterliegen eigenen Marktmechanismen.</p>}<p><strong>Individuelle Ausstattung:</strong> Exklusive Einbauten oder historische Details erfasst die Formel nicht.</p><p><strong>Tipp:</strong> Für eine exakte Punktlandung beim Verkaufspreis empfiehlt sich eine persönliche Besichtigung.</p></div>{sendStatus==="error"&&<p className="result-send-error">Die Bewertung wurde angezeigt, das Rechenprotokoll konnte jedoch nicht automatisch übermittelt werden.</p>}<div className="result-sources"><a className="source-link" href="https://www.boris.nrw.de/" target="_blank" rel="noreferrer">Quelle: zuständiger Gutachterausschuss / BORIS NRW, Stichtag 01.01.2026 ↗</a></div></>}
    {calculationError&&<p className="result-send-error">{calculationError}</p>}
    <div className="tool-actions">{step>1&&<button type="button" className="button outline" onClick={back}>{step===6?"Angaben ändern":"Zurück"}</button>}{step<6&&<button type="button" className="button gold" disabled={!canContinue} onClick={next}>Weiter</button>}{step===5&&<button type="button" className="button gold" disabled={!canContinue||sendStatus==="sending"} onClick={evaluate}>Bewertung berechnen</button>}</div>
  </div></div>;
}
