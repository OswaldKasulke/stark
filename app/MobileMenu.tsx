"use client";

import { useEffect } from "react";

// Unter 980 px blendet das Stylesheet die Navigation aus - ohne diesen Knopf war
// sie auf Handy und Tablet gar nicht erreichbar. Der Knopf kommt erst nach dem
// Laden in die Kopfzeile, damit die statisch erzeugte Kopfzeile unveraendert
// hydriert. Er toggelt nur eine Klasse; das Aussehen steht in globals.css.
export default function MobileMenu(){
  useEffect(()=>{
    const aufraeumen:Array<()=>void>=[];
    document.querySelectorAll<HTMLElement>(".site-header").forEach((kopf,index)=>{
      const nav=kopf.querySelector("nav");
      if(!nav||kopf.querySelector(".menu-toggle"))return;
      if(!nav.id)nav.id=`hauptmenue-${index}`;
      const knopf=document.createElement("button");
      knopf.type="button";
      knopf.className="menu-toggle";
      knopf.setAttribute("aria-controls",nav.id);
      knopf.setAttribute("aria-expanded","false");
      knopf.innerHTML='<span aria-hidden="true"></span>Menü';
      kopf.insertBefore(knopf,kopf.querySelector(".header-cta,.header-phone"));
      const schliessen=()=>{kopf.classList.remove("menu-offen");knopf.setAttribute("aria-expanded","false");};
      const umschalten=()=>{const offen=kopf.classList.toggle("menu-offen");knopf.setAttribute("aria-expanded",String(offen));};
      // Anker wie #profil bleiben auf der Seite - das Menue muss danach zugehen.
      const beiLink=(ereignis:Event)=>{if((ereignis.target as HTMLElement).closest("a"))schliessen();};
      const beiTaste=(ereignis:KeyboardEvent)=>{if(ereignis.key==="Escape")schliessen();};
      knopf.addEventListener("click",umschalten);
      nav.addEventListener("click",beiLink);
      document.addEventListener("keydown",beiTaste);
      aufraeumen.push(()=>{knopf.remove();kopf.classList.remove("menu-offen");nav.removeEventListener("click",beiLink);document.removeEventListener("keydown",beiTaste);});
    });
    return ()=>aufraeumen.forEach(funktion=>funktion());
  },[]);
  return null;
}
