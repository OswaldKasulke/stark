"use client";

import { useEffect, useMemo, useState } from "react";
import { streets, type StreetEntry, type StreetRange } from "../strassen";

export type ResolvedAddress = { zip: string; district: string; valid: boolean; message: string };
const normalize = (value: string) => value.trim().toLocaleLowerCase("de");

function pickRange(entry: StreetEntry, houseNumber: string): StreetRange | undefined {
  const number = Number.parseInt(houseNumber, 10);
  if (!Number.isFinite(number)) return undefined;
  return [...entry.ranges].filter(([start, end]) => {
    const parityFits = start % 2 !== end % 2 || number % 2 === start % 2;
    return number >= start && number <= end && parityFits;
  }).sort((a, b) => (a[1] - a[0]) - (b[1] - b[0]))[0];
}

function resolve(entry: StreetEntry | undefined, houseNumber: string): ResolvedAddress {
  if (!entry) return { zip: "", district: "", valid: false, message: "Bitte eine Straße aus der amtlichen Liste auswählen." };
  const range = pickRange(entry, houseNumber);
  if (range) return { zip: range[2], district: range[3], valid: true, message: `${range[2]} · ${range[3]}` };
  const unique = [...new Map(entry.ranges.map((item) => [`${item[2]}|${item[3]}`, item])).values()];
  if (!houseNumber && unique.length === 1) return { zip: unique[0][2], district: unique[0][3], valid: true, message: `${unique[0][2]} · ${unique[0][3]}` };
  if (!houseNumber) return { zip: "", district: "", valid: false, message: "Diese Straße verläuft durch mehrere Bereiche. Bitte die Hausnummer ergänzen." };
  return { zip: "", district: "", valid: false, message: "Für diese Hausnummer enthält der Straßen-Master keine eindeutige Zuordnung." };
}

export default function StreetSearch({ street, houseNumber, onStreetChange, onHouseNumberChange, onResolve }:{street:string;houseNumber:string;onStreetChange:(value:string)=>void;onHouseNumberChange:(value:string)=>void;onResolve:(result:ResolvedAddress)=>void;}) {
  const [open, setOpen] = useState(false);
  const entry = useMemo(() => streets.find((item) => normalize(item.name) === normalize(street)), [street]);
  const matches = useMemo(() => { const query = normalize(street); return (query ? streets.filter((item) => normalize(item.name).includes(query)) : streets).slice(0, 8); }, [street]);
  const result = useMemo(() => resolve(entry, houseNumber), [entry, houseNumber]);
  useEffect(() => onResolve(result), [result.zip, result.district, result.valid, result.message]);
  return <div className="street-search"><div className="form-row"><label>Straße *<div className="search-field"><span aria-hidden="true">⌕</span><input value={street} onChange={(event)=>{onStreetChange(event.target.value);setOpen(true);}} onFocus={()=>setOpen(true)} autoComplete="off" placeholder="Straße suchen" aria-autocomplete="list" aria-expanded={open}/></div>{open&&<div className="street-results" role="listbox">{matches.length ? matches.map((item)=><button type="button" role="option" key={item.name} onMouseDown={(event)=>event.preventDefault()} onClick={()=>{onStreetChange(item.name);setOpen(false);}}>{item.name}<span>{[...new Set(item.ranges.map(range=>range[2]))].join(" / ")}</span></button>):<p>Keine Straße im Master gefunden.</p>}</div>}</label><label>Hausnummer<input value={houseNumber} onChange={(event)=>onHouseNumberChange(event.target.value)} placeholder="z. B. 12" autoComplete="address-line2"/></label></div><p className={`address-result${result.valid ? " valid" : ""}`}>{result.valid ? "✓ " : ""}{result.message}</p></div>;
}
