import type { MetadataRoute } from "next";
import { districts } from "./stadtteile";
import { standorte } from "./standorte";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://immobilienmakler-bergisch-gladbach.de";
  const lastModified = new Date("2026-08-27");
  return [
    { url: `${base}/`, lastModified, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/bergisch-gladbach/`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/immobilienbewertung/`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/haus-verkaufen-bergisch-gladbach/`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/wohnung-verkaufen-bergisch-gladbach/`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/grundstueck-verkaufen-bergisch-gladbach/`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/downloads/`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/team/`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/impressum/`, lastModified, changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/agb/`, lastModified, changeFrequency: "yearly", priority: 0.3 },
    ...standorte.map((place) => ({ url: `${base}/${place.slug}/`, lastModified, changeFrequency: "monthly" as const, priority: 0.8 })),
    ...districts.map((district) => ({ url: `${base}/stadtteile/${district.slug}/`, lastModified, changeFrequency: "monthly" as const, priority: 0.8 })),
  ];
}
