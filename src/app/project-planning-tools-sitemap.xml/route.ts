export const dynamic = "force-dynamic";
export const revalidate = 3600;

import { NextResponse } from "next/server";

export async function GET() {
  console.log("========== PROJECT PLANNING TOOLS SITEMAP ==========");

  const baseUrl = "https://v2site.contractorplus.app";
  const now = new Date().toISOString();

  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

  const tools = [
    "construction-cash-flow-forecaster",
    "construction-rfi-generator",
    "construction-timeline-generator",
  ];

  tools.forEach((tool) => {
    xml += "  <url>\n";
    xml += `    <loc>${baseUrl}/resources/project-planning-tools/${tool}</loc>\n`;
    xml += `    <lastmod>${now}</lastmod>\n`;
    xml += `    <changefreq>monthly</changefreq>\n`;
    xml += `    <priority>0.7</priority>\n`;
    xml += "  </url>\n";
  });

  console.log(
    `✅ Project planning tools sitemap generated with ${tools.length} URLs`,
  );

  xml += "</urlset>";

  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate",
    },
  });
}
