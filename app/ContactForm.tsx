"use client";

import { FormEvent, useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    const form = event.currentTarget;
    const body = new FormData(form);
    body.set("type", "kontakt");
    body.set("site", "BGL");
    body.set("website", "");

    try {
      const response = await fetch("https://romanbecker.de/submit.php", { method: "POST", body });
      if (!response.ok) throw new Error("Versand fehlgeschlagen");
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  return <form onSubmit={submit} aria-describedby="kontakt-pflichtfelder">
    <p id="kontakt-pflichtfelder" className="form-required">Mit * markierte Felder sind Pflichtfelder.</p>
    <div className="form-row">
      <div className="form-field"><label htmlFor="kontakt-vorname">Vorname *</label><input id="kontakt-vorname" name="vorname" autoComplete="given-name" required onInvalid={event=>event.currentTarget.setCustomValidity("Bitte geben Sie Ihren Vornamen ein.")} onInput={event=>event.currentTarget.setCustomValidity("")}/></div>
      <div className="form-field"><label htmlFor="kontakt-nachname">Nachname *</label><input id="kontakt-nachname" name="nachname" autoComplete="family-name" required onInvalid={event=>event.currentTarget.setCustomValidity("Bitte geben Sie Ihren Nachnamen ein.")} onInput={event=>event.currentTarget.setCustomValidity("")}/></div>
    </div>
    <div className="form-field"><label htmlFor="kontakt-email">E-Mail *</label><input id="kontakt-email" name="email" type="email" autoComplete="email" required onInvalid={event=>event.currentTarget.setCustomValidity("Bitte geben Sie eine gültige E-Mail-Adresse ein.")} onInput={event=>event.currentTarget.setCustomValidity("")}/></div>
    <div className="form-field"><label htmlFor="kontakt-telefon">Telefon *</label><input id="kontakt-telefon" name="telefon" type="tel" autoComplete="tel" required onInvalid={event=>event.currentTarget.setCustomValidity("Bitte geben Sie Ihre Telefonnummer ein.")} onInput={event=>event.currentTarget.setCustomValidity("")}/></div>
    <div className="form-field"><label htmlFor="kontakt-anliegen">Worum geht es?</label><select id="kontakt-anliegen" name="immobilientyp"><option>Immobilie verkaufen</option><option>Immobilie bewerten</option><option>Immobilie kaufen</option><option>Allgemeine Anfrage</option></select></div>
    <div className="form-field"><label htmlFor="kontakt-nachricht">Nachricht</label><textarea id="kontakt-nachricht" name="nachricht" rows={4}/></div>
    <label className="consent" htmlFor="kontakt-einwilligung"><input id="kontakt-einwilligung" name="einwilligung" type="checkbox" required onInvalid={event=>event.currentTarget.setCustomValidity("Bitte stimmen Sie der Verarbeitung Ihrer Angaben zu.")} onInput={event=>event.currentTarget.setCustomValidity("")}/> Ich stimme der Verarbeitung meiner Angaben zur Bearbeitung der Anfrage zu. *</label>
    <button className="button gold" type="submit" disabled={status === "sending"}>{status === "sending" ? "Wird gesendet …" : "Anfrage senden"}</button>
    {status === "sent" && <p className="form-status success" role="status">Vielen Dank. Ihre Anfrage wurde versendet.</p>}
    {status === "error" && <p className="form-status error" role="alert">Die Anfrage konnte nicht gesendet werden. Bitte versuchen Sie es erneut.</p>}
  </form>;
}
