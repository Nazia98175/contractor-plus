export const dynamic = "force-dynamic";
export const revalidate = 3600;

import { NextResponse } from "next/server";

export async function GET() {
  console.log("========== USA LABOUR RATE SITEMAP ==========");

  const baseUrl =
    process.env.NEXT_PUBLIC_DOMAIN || "https://contractorplus.app";

  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<?xml-stylesheet type="text/xsl" href="/sitemap-index.xsl"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

  try {
    // Add main page
    const now = new Date().toISOString();
    xml += "  <url>\n";
    xml += `    <loc>${baseUrl}/resources/project-planning-tools/construction-cash-flow-forecaster-calculator</loc>\n`;
    xml += `    <lastmod>${now}</lastmod>\n`;
    xml += `    <changefreq>weekly</changefreq>\n`;
    xml += `    <priority>0.8</priority>\n`;
    xml += "  </url>\n";

    xml += "  <url>\n";
    xml += `    <loc>${baseUrl}/resources/project-planning-tools/construction-rfi-generator</loc>\n`;
    xml += `    <lastmod>${now}</lastmod>\n`;
    xml += `    <changefreq>weekly</changefreq>\n`;
    xml += `    <priority>0.8</priority>\n`;
    xml += "  </url>\n";

    xml += "  <url>\n";
    xml += `    <loc>${baseUrl}/resources/project-planning-tools/construction-timeline-generator</loc>\n`;
    xml += `    <lastmod>${now}</lastmod>\n`;
    xml += `    <changefreq>weekly</changefreq>\n`;
    xml += `    <priority>0.8</priority>\n`;
    xml += "  </url>\n";
    
  } catch (error) {
    console.error(
      "Error generating Project planning tools rate sitemap:",
      error,
    );
  }

  xml += "</urlset>";

  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate",
    },
  });
}
