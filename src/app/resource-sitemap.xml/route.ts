import { NextResponse } from "next/server";

export async function GET() {
  console.log("========== RESOURCE SITEMAP INDEX ==========");

  const baseUrl = "https://v2site.contractorplus.app";
  const now = new Date().toISOString();

  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<?xml-stylesheet type="text/xsl" href="/sitemap-index.xsl"?>\n';
  xml += '<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

  // Contract Templates Sitemap
  xml += "  <sitemap>\n";
  xml += `    <loc>${baseUrl}/contract-templates-sitemap.xml</loc>\n`;
  xml += `    <lastmod>${now}</lastmod>\n`;
  xml += "  </sitemap>\n";

  // Cost Calculator Sitemap
  xml += "  <sitemap>\n";
  xml += `    <loc>${baseUrl}/cost-calculator-sitemap.xml</loc>\n`;
  xml += `    <lastmod>${now}</lastmod>\n`;
  xml += "  </sitemap>\n";

  // Project Planning Tools Sitemap
  xml += "  <sitemap>\n";
  xml += `    <loc>${baseUrl}/project-planning-tools-sitemap.xml</loc>\n`;
  xml += `    <lastmod>${now}</lastmod>\n`;
  xml += "  </sitemap>\n";

  // Construction Costs Sitemap
  xml += "  <sitemap>\n";
  xml += `    <loc>${baseUrl}/construction-costs-sitemap.xml</loc>\n`;
  xml += `    <lastmod>${now}</lastmod>\n`;
  xml += "  </sitemap>\n";

  // Free Estimate Templates Sitemap
  xml += "  <sitemap>\n";
  xml += `    <loc>${baseUrl}/free-estimate-templates-sitemap.xml</loc>\n`;
  xml += `    <lastmod>${now}</lastmod>\n`;
  xml += "  </sitemap>\n";

  // Material Price Comparison Sitemap
  xml += "  <sitemap>\n";
  xml += `    <loc>${baseUrl}/material-price-comparison-sitemap.xml</loc>\n`;
  xml += `    <lastmod>${now}</lastmod>\n`;
  xml += "  </sitemap>\n";

  // USA Labour Rate Sitemap
  xml += "  <sitemap>\n";
  xml += `    <loc>${baseUrl}/usa-labour-rate-sitemap.xml</loc>\n`;
  xml += `    <lastmod>${now}</lastmod>\n`;
  xml += "  </sitemap>\n";

  // Resources Miscellaneous Pages
  xml += "  <sitemap>\n";
  xml += `    <loc>${baseUrl}/resources-misc-sitemap.xml</loc>\n`;
  xml += `    <lastmod>${now}</lastmod>\n`;
  xml += "  </sitemap>\n";

  xml += "</sitemapindex>";

  console.log("✅ Resource sitemap index generated with 8 sub-sitemaps");

  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate",
    },
  });
}
