import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://blacklaw.co/sitemap.xml",
    host: "https://blacklaw.co",
  };
}
