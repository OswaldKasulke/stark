import type { MetadataRoute } from "next";
import { districts } from "./stadtteile";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://doktorbecker.de/BGL";
  const lastModified = new Date("2026-08-22");
  return [
    { url: `${base}/`, lastModified, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/immobilienbewertung/`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    ...districts.map((district) => ({ url: `${base}/stadtteile/${district.slug}/`, lastModified, changeFrequency: "monthly" as const, priority: 0.8 })),
  ];
}
