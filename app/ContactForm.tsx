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

  return <form onSubmit={submit}>
    <div className="form-row"><label>Vorname<input name="vorname" required/></label><label>Nachname<input name="nachname" required/></label></div>
    <label>E-Mail<input name="email" type="email" required/></label>
    <label>Telefon<input name="telefon" type="tel" required/></label>
    <label>Worum geht es?<select name="immobilientyp"><option>Immobilie verkaufen</option><option>Immobilie bewerten</option><option>Immobilie kaufen</option><option>Allgemeine Anfrage</option></select></label>
    <label>Nachricht<textarea name="nachricht" rows={4}/></label>
    <label className="consent"><input type="checkbox" required/> Ich stimme der Verarbeitung meiner Angaben zur Bearbeitung der Anfrage zu.</label>
    <button className="button gold" type="submit" disabled={status === "sending"}>{status === "sending" ? "Wird gesendet …" : "Anfrage senden"}</button>
    {status === "sent" && <p className="form-status success" role="status">Vielen Dank. Ihre Anfrage wurde versendet.</p>}
    {status === "error" && <p className="form-status error" role="alert">Die Anfrage konnte nicht gesendet werden. Bitte versuchen Sie es erneut.</p>}
  </form>;
}
