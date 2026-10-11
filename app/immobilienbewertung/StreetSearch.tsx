"use client";

import { useEffect, useRef, useState } from "react";
import { ortZuPlz, resolveSharedAddressRemote, searchSharedStreetsRemote, type AddressCandidate, type AddressResolution } from "../gemeinsame-bewertung";

export type ResolvedAddress = { zip:string; district:string; city:string; region:string; valid:boolean; message:string; candidates:AddressCandidate[] };

// Strasse und Hausnummer stehen in EINEM Feld ("Strasse + Hausnr."). Die
// Hausnummer ist der abschliessende Zahlenteil, auch als Bereich ("17-21",
// "12/14") - sonst bleibt die Nummer im Suchbegriff und die Trefferliste leer.
const NUMMER=/[\s,]+(\d+\s*[a-zA-Z]?(?:\s*[-–\/]\s*\d+\s*[a-zA-Z]?)?)\s*$/;
// Gespeicherte Browser-Adressen bringen oft einen Zusatz hinter der Hausnummer
// mit ("Musterweg 5, Firma XY GmbH"). Alles ab dem Komma nach der
// Nummer faellt weg, sonst findet die Suche die Strasse nicht.
const ZUSATZ=/^(.*?\D[\s,]+\d+\s*[a-zA-Z]?(?:\s*[-–\/]\s*\d+\s*[a-zA-Z]?)?)\s*,.*$/;
export function ohneZusatz(eingabe:string){return (eingabe||"").replace(ZUSATZ,"$1");}
export function trenneAdresse(eingabe:string){
  const t=(eingabe||"").trim();
  const m=t.match(NUMMER);
  return m&&m.index!==undefined?{strasse:t.slice(0,m.index).trim(),nummer:m[1].replace(/\s+/g,"")}:{strasse:t,nummer:""};
}

export default function StreetSearch({postalCode,street,onPostalCodeChange,onStreetChange,onResolve}:{postalCode:string;street:string;onPostalCodeChange:(value:string)=>void;onStreetChange:(value:string)=>void;onResolve:(result:ResolvedAddress)=>void;}){
  const [open,setOpen]=useState(false); const [selectedId,setSelectedId]=useState("");
  // Die gewaehlte Strasse bleibt erhalten, solange das Feld mit ihr beginnt -
  // wer danach die Hausnummer tippt, muss die Strasse nicht erneut anklicken.
  const [selectedName,setSelectedName]=useState("");
  // Kam die Adresse auf einmal ins Feld (Autofill, Einfuegen), wird ein
  // eindeutiger Treffer direkt uebernommen - sonst bliebe "Weiter" gesperrt.
  const autoWahl=useRef(false);
  // Strassen- und Adressmaster liegen auf dem Server, nicht im Browser. Beide
  // Abfragen sind deshalb asynchron; eine spaet eintreffende Antwort auf eine
  // alte Eingabe wird verworfen (aktuell-Flag), sonst ueberschreibt sie die neue.
  // Der Ort steht im Adressbestand und wird eingetragen, sobald die
  // Postleitzahl fuenfstellig ist. Nur 50226 gehoert zu zwei Orten.
  const [ortAusPlz,setOrtAusPlz]=useState("");
  const [plzHinweis,setPlzHinweis]=useState("");
  useEffect(()=>{let aktuell=true;ortZuPlz(postalCode).then(a=>{if(!aktuell)return;if(!a.bekannt){setOrtAusPlz("");setPlzHinweis(/^\d{5}$/.test(postalCode)?"Diese Postleitzahl liegt außerhalb unseres Gebiets.":"");return;}setOrtAusPlz(a.orte.length===1?a.orte[0]:"");setPlzHinweis(a.orte.length>1?"Diese Postleitzahl gehört zu "+a.orte.join(" und ")+".":"");});return ()=>{aktuell=false;};},[postalCode]);
  const {strasse,nummer}=trenneAdresse(street);
  const [matches,setMatches]=useState<any[]>([]);
  const [resolution,setResolution]=useState<AddressResolution>({valid:false,message:"",candidates:[]});
  useEffect(()=>{let aktuell=true;const timer=setTimeout(()=>{if(strasse.trim().length<2){setMatches([]);return;}searchSharedStreetsRemote(strasse,10,postalCode).then(treffer=>{if(!aktuell)return;setMatches(treffer);if(autoWahl.current&&treffer.length===1&&nummer&&!selectedId){autoWahl.current=false;const t=treffer[0];onStreetChange(`${t.name} ${nummer}`);setSelectedId(t.id);setSelectedName(t.name);setOpen(false);}});},180);return ()=>{aktuell=false;clearTimeout(timer);};},[strasse,postalCode]);
  useEffect(()=>{let aktuell=true;resolveSharedAddressRemote(selectedId,nummer,postalCode).then(ergebnis=>{if(aktuell)setResolution(ergebnis);});return ()=>{aktuell=false;};},[selectedId,nummer,postalCode]);
  const first=resolution.candidates[0];
  const result:ResolvedAddress={zip:first?.zip||"",district:first?.area||"",city:first?.city||"",region:first?.region||"",valid:resolution.valid,message:resolution.message,candidates:resolution.candidates};
  useEffect(()=>onResolve(result),[result.zip,result.district,result.city,result.region,result.valid,result.message,JSON.stringify(result.candidates)]);
  return <div className="street-search"><div className="form-row"><label>PLZ *<input value={postalCode} onChange={event=>{onPostalCodeChange(event.target.value.replace(/\D/g,"").slice(0,5));setSelectedId("");setSelectedName("");}} inputMode="numeric" autoComplete="postal-code" placeholder="50939"/></label><label>Ort<input value={ortAusPlz} placeholder="wird eingetragen" readOnly/></label></div>{plzHinweis&&<p className="address-result">{plzHinweis}</p>}<label>Straße + Hausnr. *<div className="search-field"><span aria-hidden="true">⌕</span><input value={street} onChange={event=>{const wert=ohneZusatz(event.target.value);autoWahl.current=wert.length-street.length>2;onStreetChange(wert);if(!selectedName||wert.trim().indexOf(selectedName)!==0){setSelectedId("");setSelectedName("");}setOpen(true);}} onFocus={()=>setOpen(true)} autoComplete="off" placeholder="Ersten 2 Buchstaben der Straße eintippen und aus der Liste wählen" aria-autocomplete="list" aria-expanded={open}/></div>{open&&<div className="street-results" role="listbox">{matches.length?matches.map((item:any)=><button type="button" role="option" key={item.id} onMouseDown={event=>event.preventDefault()} onClick={()=>{onStreetChange(nummer?`${item.name} ${nummer}`:`${item.name} `);setSelectedId(item.id);setSelectedName(item.name);setOpen(false);}}>{item.name}<span>{item.city}{item.areas.length===1?` · ${item.areas[0]}`:""}</span></button>):<p>{strasse.trim().length<2?"Tippen Sie die ersten 2 Buchstaben Ihrer Straße ein und wählen Sie sie aus der Liste.":"Zu dieser Postleitzahl finden wir diese Straße nicht."}</p>}</div>}</label><p className={`address-result${result.valid?" valid":""}`}>{result.valid?"✓ ":""}{result.message}</p></div>;
}
