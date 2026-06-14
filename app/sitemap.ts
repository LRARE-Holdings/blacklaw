import type { MetadataRoute } from "next";

const SITE = "https://blacklaw.co";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const routes = [
    { path: "/", priority: 1.0, freq: "weekly" as const },
    { path: "/sqe2", priority: 0.9, freq: "weekly" as const },
    { path: "/features", priority: 0.8, freq: "monthly" as const },
    { path: "/pricing", priority: 0.8, freq: "monthly" as const },
    { path: "/about", priority: 0.5, freq: "monthly" as const },
    { path: "/support", priority: 0.4, freq: "monthly" as const },
    { path: "/terms", priority: 0.3, freq: "yearly" as const },
    { path: "/privacy", priority: 0.3, freq: "yearly" as const },
  ];
  return routes.map((r) => ({
    url: `${SITE}${r.path}`,
    lastModified: now,
    changeFrequency: r.freq,
    priority: r.priority,
  }));
}
