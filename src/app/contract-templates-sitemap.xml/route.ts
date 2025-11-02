export const dynamic = "force-dynamic";
export const revalidate = 3600;

import { NextResponse } from "next/server";

export async function GET() {
  console.log("========== CONTRACT TEMPLATES SITEMAP ==========");

  const baseUrl = "https://v2site.contractorplus.app";
  const now = new Date().toISOString();

  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
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

  console.log(
    `✅ Contract templates sitemap generated with ${contractTemplates.length} URLs`,
  );

  xml += "</urlset>";

  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate",
    },
  });
}
