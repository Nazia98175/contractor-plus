export const dynamic = "force-dynamic";
export const revalidate = 3600;

import { NextResponse } from "next/server";

export async function GET() {
  const baseUrl =
    process.env.NEXT_PUBLIC_DOMAIN || "https://contractorplus.app";
  const now = new Date().toISOString();

  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<?xml-stylesheet type="text/xsl" href="/sitemap-index.xsl"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

  // Contract template pages
  const contractTemplates = [
    "cost-plus-contract",
    "general-construction-contract",
    "maintenance-service-contract",
    "punch-list-completion-agreement",
    "standard-construction-agreement",
    "subcontractor-agreement",
    "time-and-materials-contract",
    "warranty-agreement",
  ];

  contractTemplates.forEach((template) => {
    xml += "  <url>\n";
    xml += `    <loc>${baseUrl}/resources/contract-templates/${template}</loc>\n`;
    xml += `    <lastmod>${now}</lastmod>\n`;
    xml += `    <changefreq>monthly</changefreq>\n`;
    xml += `    <priority>0.7</priority>\n`;
    xml += "  </url>\n";
  });

  xml += "</urlset>";

  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate",
    },
  });
}
