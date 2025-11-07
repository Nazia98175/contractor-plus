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

  const calculators = [
    "carpet-cleaning",
    "commercial-space-cleaning-cost-calculator",
    "construction-cost-estimator",
    "custom-woodwork-pricing-calculator",
    "drywall-materials-calculator",
    "electrician-cost-per-hour-calculator",
    "elevator-maintenance-cost",
    "elevator-maintenance-cost-calculator",
    "excavation-volume-cost-calculator",
    "fence-cost-calculator",
    "flooring-estimator-calculator",
    "house-cleaning-cost-calculator",
    "hvac-cfm-calculator",
    "hvac-markup",
    "irrigation-system-material-calculator",
    "labor-cost-calculator",
    "landscape-design-cost-calculator",
    "margin-calculator",
    "multi-service-job-estimator",
    "painting-cost-estimator",
    "paver-calculator-price-estimato",
    "pipe-water-volume-calculator",
    "plumbing-bid-calculator",
    "profit-margin-calculator",
    "renovation-cost-calculator",
    "roof-square-footage-calculator",
    "snow-removal-pricing-calculator",
  ];

  calculators.forEach((calculator) => {
    xml += "  <url>\n";
    xml += `    <loc>${baseUrl}/resources/cost-calculator/${calculator}</loc>\n`;
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
