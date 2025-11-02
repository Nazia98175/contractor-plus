export const dynamic = "force-dynamic";
export const revalidate = 3600;

import { NextResponse } from "next/server";

export async function GET() {
  console.log("========== RESOURCES MISC SITEMAP ==========");

  const baseUrl = "https://v2site.contractorplus.app";
  const now = new Date().toISOString();

  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

  // Main resource category pages
  const resourcePages = [
    "/resources",
    "/resources/contract-templates",
    "/resources/cost-calculator",
    "/resources/construction-costs",
    "/resources/free-estimate-templates",
    "/resources/material-price-comparison",
    "/resources/project-planning-tools",
    "/resources/usa-labour-rate",
  ];

  resourcePages.forEach((page) => {
    xml += "  <url>\n";
    xml += `    <loc>${baseUrl}${page}</loc>\n`;
    xml += `    <lastmod>${now}</lastmod>\n`;
    xml += `    <changefreq>weekly</changefreq>\n`;
    xml += `    <priority>0.8</priority>\n`;
    xml += "  </url>\n";
  });

  console.log(
    `✅ Resources misc sitemap generated with ${resourcePages.length} URLs`,
  );

  xml += "</urlset>";

  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate",
    },
  });
}
