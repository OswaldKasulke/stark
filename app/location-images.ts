export type LocationImage = {
  src: string;
  alt: string;
  source: string;
};

export const locationImages: Record<string, LocationImage> = {
  bechen: { src: "/locations/bechen.webp", alt: "Ortsansicht von Bechen", source: "https://de.wikipedia.org/wiki/Bechen" },
  engelskirchen: { src: "/locations/engelskirchen.webp", alt: "Kirche St. Peter und Paul in Engelskirchen", source: "https://de.wikipedia.org/wiki/Engelskirchen" },
  koenigsforst: { src: "/locations/koenigsforst.webp", alt: "Kettners Weiher im Königsforst", source: "https://de.wikipedia.org/wiki/K%C3%B6nigsforst" },
  kuerten: { src: "/locations/kuerten.webp", alt: "Ortsansicht von Kürten", source: "https://de.wikipedia.org/wiki/K%C3%BCrten" },
  lindlar: { src: "/locations/lindlar.webp", alt: "Kirchplatz in Lindlar", source: "https://de.wikipedia.org/wiki/Lindlar" },
  odenthal: { src: "/locations/odenthal.webp", alt: "Hans-Klein-Platz in Odenthal", source: "https://de.wikipedia.org/wiki/Odenthal" },
  overath: { src: "/locations/overath.webp", alt: "Panorama von Overath", source: "https://de.wikipedia.org/wiki/Overath" },
};
