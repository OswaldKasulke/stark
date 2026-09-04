"use client";

import { useEffect, useState } from "react";
import { resolveSharedAddressRemote, searchSharedStreetsRemote, type AddressCandidate, type AddressResolution } from "../gemeinsame-bewertung";

export type ResolvedAddress = { zip:string; district:string; city:string; region:string; valid:boolean; message:string; candidates:AddressCandidate[] };

export default function StreetSearch({postalCode,street,houseNumber,onPostalCodeChange,onStreetChange,onHouseNumberChange,onResolve}:{postalCode:string;street:string;houseNumber:string;onPostalCodeChange:(value:string)=>void;onStreetChange:(value:string)=>void;onHouseNumberChange:(value:string)=>void;onResolve:(result:ResolvedAddress)=>void;}){
  const [open,setOpen]=useState(false); const [selectedId,setSelectedId]=useState("");
  // Strassen- und Adressmaster liegen auf dem Server, nicht im Browser. Beide
  // Abfragen sind deshalb asynchron; eine spaet eintreffende Antwort auf eine
  // alte Eingabe wird verworfen (aktuell-Flag), sonst ueberschreibt sie die neue.
  const [matches,setMatches]=useState<any[]>([]);
  const [resolution,setResolution]=useState<AddressResolution>({valid:false,message:"",candidates:[]});
  useEffect(()=>{let aktuell=true;const timer=setTimeout(()=>{searchSharedStreetsRemote(street,10,postalCode).then(treffer=>{if(aktuell)setMatches(treffer);});},180);return ()=>{aktuell=false;clearTimeout(timer);};},[street,postalCode]);
  useEffect(()=>{let aktuell=true;resolveSharedAddressRemote(selectedId,houseNumber,postalCode).then(ergebnis=>{if(aktuell)setResolution(ergebnis);});return ()=>{aktuell=false;};},[selectedId,houseNumber,postalCode]);
  const first=resolution.candidates[0];
  const result:ResolvedAddress={zip:first?.zip||"",district:first?.area||"",city:first?.city||"",region:first?.region||"",valid:resolution.valid,message:resolution.message,candidates:resolution.candidates};
  useEffect(()=>onResolve(result),[result.zip,result.district,result.city,result.region,result.valid,result.message,JSON.stringify(result.candidates)]);
  return <div className="street-search"><div className="form-row"><label>Postleitzahl *<input value={postalCode} onChange={event=>{onPostalCodeChange(event.target.value.replace(/\D/g,"").slice(0,5));setSelectedId("");}} inputMode="numeric" autoComplete="postal-code" placeholder="z. B. 50939"/></label><label>Hausnummer *<input value={houseNumber} onChange={event=>onHouseNumberChange(event.target.value)} placeholder="z. B. 23" autoComplete="address-line2"/></label></div><label>Straße *<div className="search-field"><span aria-hidden="true">⌕</span><input value={street} onChange={event=>{onStreetChange(event.target.value);setSelectedId("");setOpen(true);}} onFocus={()=>setOpen(true)} autoComplete="off" placeholder="Straße suchen" aria-autocomplete="list" aria-expanded={open}/></div>{open&&<div className="street-results" role="listbox">{matches.length?matches.map((item:any)=><button type="button" role="option" key={item.id} onMouseDown={event=>event.preventDefault()} onClick={()=>{onStreetChange(item.name);setSelectedId(item.id);setOpen(false);}}>{item.name}<span>{item.city}{item.areas.length===1?` · ${item.areas[0]}`:""}</span></button>):<p>Zu dieser Postleitzahl finden wir diese Straße nicht.</p>}</div>}</label><p className={`address-result${result.valid?" valid":""}`}>{result.valid?"✓ ":""}{result.message}</p></div>;
}
