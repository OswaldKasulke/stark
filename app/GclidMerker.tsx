"use client";

import { useEffect } from "react";
import { gclidMerken } from "./gclid";

// Liest die Klickkennung einmal beim ersten Seitenaufruf aus der URL.
export default function GclidMerker() {
  useEffect(() => { gclidMerken(); }, []);
  return null;
}
