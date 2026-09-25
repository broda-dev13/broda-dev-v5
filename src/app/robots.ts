import type { MetadataRoute } from "next";
import { PREVIEW, SITE_URL } from "@/lib/site";

// While PREVIEW is on (src/lib/site.ts) nothing is crawled. Once live, every
// page is open except the capture surfaces of the coded mockups.
export default function robots(): MetadataRoute.Robots {
  if (PREVIEW) return { rules: { userAgent: "*", disallow: "/" } };
  return {
    rules: { userAgent: "*", allow: "/", disallow: ["/fr/maquettes/", "/ar/maquettes/"] },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
