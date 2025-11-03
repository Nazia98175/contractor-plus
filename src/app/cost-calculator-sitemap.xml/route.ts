// src/app/cost-calculator-sitemap.xml/route.ts

export const dynamic = "force-dynamic";
export const revalidate = 3600;

import { NextResponse } from "next/server";

export async function GET() {
  console.log("========== COST CALCULATOR SITEMAP ==========");

  const baseUrl =
    process.env.NEXT_PUBLIC_DOMAIN || "https://contractorplus.app";
  const now = new Date().toISOString();

  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<?xml-stylesheet type="text/xsl" href="/sitemap-index.xsl"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

  // Cost calculator pages
  const calculators = [
    "concrete-calculator",
    "drywall-calculator",
    "roofing-calculator",
    "flooring-calculator",
    "paint-calculator",
    // Add all your cost calculator slugs here
  ];

  calculators.forEach((calculator) => {
    xml += "  <url>\n";
    xml += `    <loc>${baseUrl}/resources/cost-calculators/${calculator}</loc>\n`;
    xml += `    <lastmod>${now}</lastmod>\n`;
    xml += `    <changefreq>monthly</changefreq>\n`;
    xml += `    <priority>0.7</priority>\n`;
    xml += "  </url>\n";
  });

  console.log(
    `✅ Cost calculator sitemap generated with ${calculators.length} URLs`,
  );

  xml += "</urlset>";

  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate",
    },
  });
}
