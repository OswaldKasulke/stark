import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/BGL/" },
    sitemap: "https://doktorbecker.de/BGL/sitemap.xml",
  };
}
