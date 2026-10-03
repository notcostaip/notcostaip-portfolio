import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://notcostaip.site";
  const lastModified = new Date("2026-10-03T00:00:00-03:00");
  return [
    { url: base, lastModified, changeFrequency: "monthly", priority: 1 },
    { url: `${base}/historia`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/projects`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/negocios/coldconnectpay`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/negocios/ishopbox`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/servicos`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/system-log`, lastModified, changeFrequency: "monthly", priority: 0.8 },
  ];
}
