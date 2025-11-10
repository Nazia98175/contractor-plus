import { NextResponse } from "next/server";

export async function GET() {
  console.log("========== RESOURCE SITEMAP INDEX ==========");

  const baseUrl =
    process.env.NEXT_PUBLIC_DOMAIN || "https://contractorplus.app";
  const now = new Date().toISOString();

  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<?xml-stylesheet type="text/xsl" href="/sitemap-index.xsl"?>\n';
  xml += '<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

  // Define sitemaps with titles (optional, for better display)
  const sitemaps = [
    { url: "/contract-templates-sitemap.xml", name: "Contract Templates" },
    { url: "/cost-calculator-sitemap.xml", name: "Cost Calculators" },
    {
      url: "/project-planning-tools-sitemap.xml",
      name: "Project Planning Tools",
    },
    { url: "/construction-project-costs-sitemap.xml", name: "Construction Costs" },
    {
      url: "/free-estimate-templates-sitemap.xml",
      name: "Free Estimate Templates",
    },
    {
      url: "/material-price-comparison-sitemap.xml",
      name: "Material Price Comparison",
    },
    { url: "/usa-labor-rate-sitemap.xml", name: "USA Labour Rates" },
  ];

  sitemaps.forEach(({ url }) => {
    xml += "  <sitemap>\n";
    xml += `    <loc>${baseUrl}${url}</loc>\n`;
    xml += `    <lastmod>${now}</lastmod>\n`;
    xml += "  </sitemap>\n";
  });

  xml += "</sitemapindex>";

  console.log("✅ Resource sitemap index generated with 8 sub-sitemaps");

  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate",
    },
  });
}
