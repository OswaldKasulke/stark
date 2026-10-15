"use client";

import { useEffect, useRef, useState } from "react";
import { ortZuPlz, resolveSharedAddressRemote, searchSharedStreetsRemote, type AddressCandidate, type AddressResolution } from "../gemeinsame-bewertung";

export type ResolvedAddress = { zip:string; district:string; city:string; region:string; valid:boolean; message:string; candidates:AddressCandidate[] };

// Strasse und Hausnummer stehen in zwei Feldern. Tippt jemand die Nummer
// trotzdem ins Strassenfeld (auch als Bereich "17-21", "12/14"), wird sie fuer
// die Suche abgeschnitten und beim Auswaehlen ins Hausnummernfeld uebernommen.
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

export default function StreetSearch({postalCode,street,number,onPostalCodeChange,onStreetChange,onNumberChange,onResolve}:{postalCode:string;street:string;number:string;onPostalCodeChange:(value:string)=>void;onStreetChange:(value:string)=>void;onNumberChange:(value:string)=>void;onResolve:(result:ResolvedAddress)=>void;}){
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
  const {strasse,nummer:nummerImStrassenfeld}=trenneAdresse(street);
  const nummer=number.trim();
  const hausnrRef=useRef<HTMLInputElement>(null);
  const waehle=(t:any)=>{onStreetChange(t.name);if(nummerImStrassenfeld&&!nummer)onNumberChange(nummerImStrassenfeld);setSelectedId(t.id);setSelectedName(t.name);setOpen(false);if(!nummer&&!nummerImStrassenfeld)setTimeout(()=>hausnrRef.current?.focus(),0);};
  const [matches,setMatches]=useState<any[]>([]);
  const [resolution,setResolution]=useState<AddressResolution>({valid:false,message:"",candidates:[]});
  useEffect(()=>{let aktuell=true;const timer=setTimeout(()=>{if(strasse.trim().length<2){setMatches([]);return;}searchSharedStreetsRemote(strasse,10,postalCode).then(treffer=>{if(!aktuell)return;setMatches(treffer);if(autoWahl.current&&treffer.length===1&&nummerImStrassenfeld&&!selectedId){autoWahl.current=false;waehle(treffer[0]);}});},180);return ()=>{aktuell=false;clearTimeout(timer);};},[strasse,postalCode]);
  useEffect(()=>{let aktuell=true;resolveSharedAddressRemote(selectedId,nummer,postalCode).then(ergebnis=>{if(aktuell)setResolution(ergebnis);});return ()=>{aktuell=false;};},[selectedId,nummer,postalCode]);
  const first=resolution.candidates[0];
  const result:ResolvedAddress={zip:first?.zip||"",district:first?.area||"",city:first?.city||"",region:first?.region||"",valid:resolution.valid,message:resolution.message,candidates:resolution.candidates};
  useEffect(()=>onResolve(result),[result.zip,result.district,result.city,result.region,result.valid,result.message,JSON.stringify(result.candidates)]);
  return <div className="street-search"><div className="form-row"><label>PLZ *<input value={postalCode} onChange={event=>{onPostalCodeChange(event.target.value.replace(/\D/g,"").slice(0,5));setSelectedId("");setSelectedName("");}} inputMode="numeric" autoComplete="off" placeholder="50939"/></label><label>Ort<input value={ortAusPlz} placeholder="wird eingetragen" readOnly/></label></div>{plzHinweis&&<p className="address-result">{plzHinweis}</p>}{/* type="search": Chrome legt dort kein Adress-Autofill ueber die Trefferliste (autoComplete="off" allein ignoriert Chrome). */}<div className="form-row address-row"><label>Straße *<div className="search-field"><span aria-hidden="true">⌕</span><input type="search" value={street} onChange={event=>{const wert=ohneZusatz(event.target.value);autoWahl.current=wert.length-street.length>2;onStreetChange(wert);if(!selectedName||wert.trim().indexOf(selectedName)!==0){setSelectedId("");setSelectedName("");}setOpen(true);}} onFocus={()=>setOpen(true)} autoComplete="off" placeholder="Ersten 2 Buchstaben eintippen und aus der Liste wählen" aria-autocomplete="list" aria-expanded={open}/></div>{open&&<div className="street-results" role="listbox">{matches.length?matches.map((item:any)=><button type="button" role="option" key={item.id} onMouseDown={event=>event.preventDefault()} onClick={()=>waehle(item)}>{item.name}<span>{item.city}{item.areas.length===1?` · ${item.areas[0]}`:""}</span></button>):<p>{strasse.trim().length<2?"Tippen Sie die ersten 2 Buchstaben Ihrer Straße ein und wählen Sie sie aus der Liste.":"Zu dieser Postleitzahl finden wir diese Straße nicht."}</p>}</div>}</label><label>Hausnr. *<input ref={hausnrRef} type="search" value={number} onChange={event=>onNumberChange(event.target.value.slice(0,12))} autoComplete="off" placeholder="z. B. 12a"/></label></div><p className={`address-result${result.valid?" valid":""}`}>{result.valid?"✓ ":""}{result.message}</p></div>;
}
