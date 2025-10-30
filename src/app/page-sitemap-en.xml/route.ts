export const dynamic = "force-dynamic";
export const revalidate = 3600;

import { NextResponse } from "next/server";

export async function GET() {
  console.log("========== PAGE SITEMAP FR CALLED ==========");

  const baseUrl = "https://v2site.contractorplus.app";
  const localePrefix = "/fr";

  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

  const addUrl = (
    path: string,
    lastmod: string,
    changefreq: string,
    priority: number,
  ) => {
    xml += "  <url>\n";
    xml += `    <loc>${baseUrl}${localePrefix}${path}</loc>\n`;
    xml += `    <lastmod>${lastmod}</lastmod>\n`;
    xml += `    <changefreq>${changefreq}</changefreq>\n`;
    xml += `    <priority>${priority}</priority>\n`;
    xml += "  </url>\n";
  };

  const now = new Date().toISOString();

  addUrl("", now, "daily", 1.0);

  const staticPages = [
    { path: "/pricing", priority: 0.9, changeFrequency: "weekly" },
    { path: "/why-contractor", priority: 0.8, changeFrequency: "monthly" },
    { path: "/all-features", priority: 0.8, changeFrequency: "weekly" },
    { path: "/industries", priority: 0.8, changeFrequency: "weekly" },
    { path: "/integrations", priority: 0.7, changeFrequency: "weekly" },
    { path: "/blogs", priority: 0.7, changeFrequency: "daily" },
    { path: "/resources", priority: 0.7, changeFrequency: "weekly" },
    { path: "/events", priority: 0.7, changeFrequency: "weekly" },
    { path: "/investors", priority: 0.6, changeFrequency: "monthly" },
    { path: "/affiliates", priority: 0.6, changeFrequency: "monthly" },
    { path: "/opportunity-tracker", priority: 0.6, changeFrequency: "monthly" },
    { path: "/suppliers", priority: 0.6, changeFrequency: "monthly" },
    { path: "/podcasts", priority: 0.6, changeFrequency: "weekly" },
    { path: "/lp", priority: 0.5, changeFrequency: "monthly" },
    {
      path: "/local-seo-for-contractors",
      priority: 0.6,
      changeFrequency: "monthly",
    },
    { path: "/privacy-policy", priority: 0.3, changeFrequency: "yearly" },
    { path: "/cookie-policy", priority: 0.3, changeFrequency: "yearly" },
    { path: "/terms-of-service", priority: 0.3, changeFrequency: "yearly" },
    { path: "/gdpr", priority: 0.3, changeFrequency: "yearly" },
    { path: "/accessibility", priority: 0.3, changeFrequency: "yearly" },
  ];

  staticPages.forEach((page) => {
    addUrl(page.path, now, page.changeFrequency, page.priority);
  });

  xml += "</urlset>";

  console.log("Page sitemap FR generated with", staticPages.length + 1, "URLs");

  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate",
    },
  });
}
