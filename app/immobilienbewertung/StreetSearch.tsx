"use client";

import { useEffect, useMemo, useState } from "react";
import { resolveSharedAddress, searchSharedStreets, type AddressCandidate } from "../gemeinsame-bewertung";

export type ResolvedAddress = { zip:string; district:string; city:string; region:string; valid:boolean; message:string; candidates:AddressCandidate[] };

export default function StreetSearch({postalCode,street,houseNumber,onPostalCodeChange,onStreetChange,onHouseNumberChange,onResolve}:{postalCode:string;street:string;houseNumber:string;onPostalCodeChange:(value:string)=>void;onStreetChange:(value:string)=>void;onHouseNumberChange:(value:string)=>void;onResolve:(result:ResolvedAddress)=>void;}){
  const [open,setOpen]=useState(false); const [selectedId,setSelectedId]=useState("");
  const matches=useMemo(()=>searchSharedStreets(street,10,postalCode),[street,postalCode]);
  const resolution=useMemo(()=>resolveSharedAddress(selectedId,houseNumber,postalCode),[selectedId,houseNumber,postalCode]);
  const first=resolution.candidates[0];
  const result:ResolvedAddress={zip:first?.zip||"",district:first?.area||"",city:first?.city||"",region:first?.region||"",valid:resolution.valid,message:resolution.message,candidates:resolution.candidates};
  useEffect(()=>onResolve(result),[result.zip,result.district,result.city,result.region,result.valid,result.message,JSON.stringify(result.candidates)]);
  return <div className="street-search"><div className="form-row"><label>Postleitzahl *<input value={postalCode} onChange={event=>{onPostalCodeChange(event.target.value.replace(/\D/g,"").slice(0,5));setSelectedId("");}} inputMode="numeric" autoComplete="postal-code" placeholder="z. B. 50939"/></label><label>Hausnummer *<input value={houseNumber} onChange={event=>onHouseNumberChange(event.target.value)} placeholder="z. B. 23" autoComplete="address-line2"/></label></div><label>Straße *<div className="search-field"><span aria-hidden="true">⌕</span><input value={street} onChange={event=>{onStreetChange(event.target.value);setSelectedId("");setOpen(true);}} onFocus={()=>setOpen(true)} autoComplete="off" placeholder="Straße suchen" aria-autocomplete="list" aria-expanded={open}/></div>{open&&<div className="street-results" role="listbox">{matches.length?matches.map((item:any)=><button type="button" role="option" key={item.id} onMouseDown={event=>event.preventDefault()} onClick={()=>{onStreetChange(item.name);setSelectedId(item.id);setOpen(false);}}>{item.name}<span>{item.city}{item.areas.length===1?` · ${item.areas[0]}`:""}</span></button>):<p>Keine Straße für diese PLZ im gemeinsamen Master gefunden.</p>}</div>}</label><p className={`address-result${result.valid?" valid":""}`}>{result.valid?"✓ ":""}{result.message}</p></div>;
}
