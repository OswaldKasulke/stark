import type { MetadataRoute } from "next";
import { districts } from "./stadtteile";
import { standorte } from "./standorte";
import { lastmod } from "./lastmod";

export const dynamic = "force-static";

// Bewusst NICHT einbezogen: app/layout.tsx und app/seo.ts. Sie stecken in jeder
// Seite — würden sie mitzählen, trügen nach jeder Layout-Änderung wieder alle
// Seiten dasselbe Datum. lastmod soll die inhaltliche Änderung einer Seite
// melden, nicht eine Anpassung am Rahmen.

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://immobilienmakler-bergisch-gladbach.de";

  // Jede Route mit der Quelle, die ihren Inhalt bestimmt.
  const seiten: Array<[string, string[], "weekly" | "monthly" | "yearly", number]> = [
    ["/", ["app/page.tsx", "app/immobilien.ts"], "weekly", 1],
    ["/bergisch-gladbach/", ["app/bergisch-gladbach/page.tsx"], "monthly", 0.9],
    ["/immobilienbewertung/", ["app/immobilienbewertung/page.tsx",
      "app/immobilienbewertung/BewertungsForm.tsx",
      "app/immobilienbewertung/StreetSearch.tsx",
      "app/gemeinsame-bewertung.ts", "app/strassen.ts"], "monthly", 0.9],
    ["/haus-verkaufen-bergisch-gladbach/",
      ["app/haus-verkaufen-bergisch-gladbach/page.tsx", "app/VerkaufenPage.tsx"], "monthly", 0.9],
    ["/wohnung-verkaufen-bergisch-gladbach/",
      ["app/wohnung-verkaufen-bergisch-gladbach/page.tsx", "app/VerkaufenPage.tsx"], "monthly", 0.9],
    ["/grundstueck-verkaufen-bergisch-gladbach/",
      ["app/grundstueck-verkaufen-bergisch-gladbach/page.tsx", "app/VerkaufenPage.tsx"], "monthly", 0.9],
    ["/downloads/", ["app/downloads/page.tsx"], "monthly", 0.8],
    ["/team/", ["app/team/page.tsx"], "monthly", 0.8],
    ["/impressum/", ["app/impressum/page.tsx"], "yearly", 0.3],
    ["/agb/", ["app/agb/page.tsx"], "yearly", 0.3],
    ["/datenschutz/", ["app/datenschutz/page.tsx"], "yearly", 0.3],
  ];

  const feste = seiten.map(([pfad, quellen, changeFrequency, priority]) => ({
    url: `${base}${pfad}`,
    lastModified: lastmod(...quellen),
    changeFrequency,
    priority,
  }));

  const orte = standorte.map((place) => ({
    url: `${base}/${place.slug}/`,
    lastModified: lastmod(`app/${place.slug}/page.tsx`, "app/standorte.ts",
      "app/StandortPage.tsx", "app/location-images.ts"),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const veedel = districts.map((district) => ({
    url: `${base}/stadtteile/${district.slug}/`,
    lastModified: lastmod("app/stadtteile/[slug]/page.tsx", "app/stadtteile.ts",
      "app/district-images.ts", "app/DistrictOffers.tsx"),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...feste, ...orte, ...veedel];
}
