export const dynamic = "force-dynamic";
export const revalidate = 3600;

import { NextResponse } from "next/server";
import { LOCATIONS } from "@/data/locationsData";

export async function GET() {
  const baseUrl =
    process.env.NEXT_PUBLIC_DOMAIN || "https://v2site.contractorplus.app";

  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<?xml-stylesheet type="text/xsl" href="/sitemap-index.xsl"?>\n';
  xml += '<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

  // Main construction costs page
  xml += "  <sitemap>\n";
  xml += `    <loc>${baseUrl}/construction-costs-main-sitemap.xml</loc>\n`;
  xml += `    <lastmod>${new Date().toISOString()}</lastmod>\n`;
  xml += "  </sitemap>\n";

  // One sitemap per location (181 sitemaps)
  LOCATIONS.forEach((location) => {
    xml += "  <sitemap>\n";
    xml += `    <loc>${baseUrl}/construction-costs-${location.value}-sitemap.xml</loc>\n`;
    xml += `    <lastmod>${new Date().toISOString()}</lastmod>\n`;
    xml += "  </sitemap>\n";
  });

  xml += "</sitemapindex>";

  console.log(
    `✅ Construction costs sitemap index generated with ${LOCATIONS.length + 1} sitemaps`,
  );

  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate",
    },
  });
}
