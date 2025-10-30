import { NextResponse } from "next/server";

export async function GET() {
  console.log("========== MAIN SITEMAP INDEX CALLED ==========");

  const baseUrl = "https://v2site.contractorplus.app";

  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

  const now = new Date().toISOString();

  // Add all three language sitemaps
  xml += "  <sitemap>\n";
  xml += `    <loc>${baseUrl}/page-sitemap-en.xml</loc>\n`;
  xml += `    <lastmod>${now}</lastmod>\n`;
  xml += "  </sitemap>\n";

  xml += "  <sitemap>\n";
  xml += `    <loc>${baseUrl}/page-sitemap-fr.xml</loc>\n`;
  xml += `    <lastmod>${now}</lastmod>\n`;
  xml += "  </sitemap>\n";

  xml += "  <sitemap>\n";
  xml += `    <loc>${baseUrl}/page-sitemap-es.xml</loc>\n`;
  xml += `    <lastmod>${now}</lastmod>\n`;
  xml += "  </sitemap>\n";

  xml += "</sitemapindex>";

  console.log("Main sitemap index generated with 3 sitemaps");

  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate",
    },
  });
}
