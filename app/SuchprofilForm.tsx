"use client";

import { FormEvent, useState } from "react";
import { gclidLesen } from "./gclid";

// Suchprofil fuer Kaufinteressenten. Ersetzt den Link auf das Evernest-Formular:
// das war zu lang (man sah nicht, was noch fehlt) und schickte keine Mail.
// Geht wie das Kontaktformular an romanbecker.de/submit.php (type "suchprofil").
const pflicht = (text: string) => ({
  required: true,
  onInvalid: (event: FormEvent<HTMLInputElement | HTMLSelectElement>) => event.currentTarget.setCustomValidity(text),
  onInput: (event: FormEvent<HTMLInputElement | HTMLSelectElement>) => event.currentTarget.setCustomValidity(""),
});

export default function SuchprofilForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    const form = event.currentTarget;
    const body = new FormData(form);
    body.set("type", "suchprofil");
    body.set("site", "BGL");
    body.set("website", "");
    const gclid = gclidLesen();
    if (gclid) body.set("gclid", gclid);

    try {
      const response = await fetch("https://romanbecker.de/submit.php", { method: "POST", body });
      if (!response.ok) throw new Error("Versand fehlgeschlagen");
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  return <form className="suchprofil-form" onSubmit={submit} aria-describedby="such-pflichtfelder">
    <p id="such-pflichtfelder" className="form-required">Mit * markierte Felder sind Pflichtfelder.</p>
    <div className="form-row">
      <div className="form-field"><label htmlFor="such-objektart">Objektart *</label><select id="such-objektart" name="such_objektart" defaultValue="" {...pflicht("Bitte wählen Sie eine Objektart.")}><option value="" disabled>Bitte wählen</option><option>Wohnung</option><option>Haus</option><option>Grundstück</option><option>Mehrfamilienhaus</option></select></div>
      <div className="form-field"><label htmlFor="such-lage">Wunschlage *</label><input id="such-lage" name="such_lage" placeholder="z. B. Refrath, Bensberg, Paffrath" {...pflicht("Bitte nennen Sie die gewünschte Lage.")}/></div>
    </div>
    <div className="form-row form-row--3">
      <div className="form-field"><label htmlFor="such-budget">Budget bis (€)</label><input id="such-budget" name="such_budget" type="number" min="0" step="1000" inputMode="numeric"/></div>
      <div className="form-field"><label htmlFor="such-flaeche">Fläche ab (m²)</label><input id="such-flaeche" name="such_flaeche" type="number" min="0" inputMode="numeric"/></div>
      <div className="form-field"><label htmlFor="such-zimmer">Zimmer ab</label><input id="such-zimmer" name="such_zimmer" type="number" min="0" step="0.5" inputMode="decimal"/></div>
    </div>
    <div className="form-row">
      <div className="form-field"><label htmlFor="such-vorname">Vorname *</label><input id="such-vorname" name="vorname" autoComplete="given-name" {...pflicht("Bitte geben Sie Ihren Vornamen ein.")}/></div>
      <div className="form-field"><label htmlFor="such-nachname">Nachname *</label><input id="such-nachname" name="nachname" autoComplete="family-name" {...pflicht("Bitte geben Sie Ihren Nachnamen ein.")}/></div>
    </div>
    <div className="form-row">
      <div className="form-field"><label htmlFor="such-email">E-Mail *</label><input id="such-email" name="email" type="email" autoComplete="email" {...pflicht("Bitte geben Sie eine gültige E-Mail-Adresse ein.")}/></div>
      <div className="form-field"><label htmlFor="such-telefon">Telefon *</label><input id="such-telefon" name="telefon" type="tel" autoComplete="tel" {...pflicht("Bitte geben Sie Ihre Telefonnummer ein.")}/></div>
    </div>
    <div className="form-field"><label htmlFor="such-nachricht">Anmerkungen</label><textarea id="such-nachricht" name="nachricht" rows={2}/></div>
    <label className="consent" htmlFor="such-einwilligung"><input id="such-einwilligung" name="einwilligung" type="checkbox" {...pflicht("Bitte stimmen Sie der Verarbeitung Ihrer Angaben zu.")}/> Ich stimme der Verarbeitung meiner Angaben zur Bearbeitung des Suchprofils zu. *</label>
    <button className="button gold" type="submit" disabled={status === "sending"}>{status === "sending" ? "Wird gesendet …" : "Suchprofil senden"}</button>
    {status === "sent" && <p className="form-status success" role="status">Vielen Dank. Ihr Suchprofil wurde versendet.</p>}
    {status === "error" && <p className="form-status error" role="alert">Das Suchprofil konnte nicht gesendet werden. Bitte versuchen Sie es erneut.</p>}
  </form>;
}
