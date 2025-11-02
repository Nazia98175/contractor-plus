export const dynamic = "force-dynamic";
export const revalidate = 3600;

import { NextResponse } from "next/server";

export async function GET() {
  console.log("========== COST CALCULATOR SITEMAP ==========");

  const baseUrl = "https://v2site.contractorplus.app";
  const now = new Date().toISOString();

  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

  // All cost calculators
  const calculators = [
    "carpet-cleaning",
    "commercial-space-cleaning",
    "construction-cost",
    "custom-woodwork",
    "drywall",
    "electrician-cost",
    "elevator-maintenance",
    "elevator-maintenance-cost",
    "excavation",
    "fence-cost",
    "flooring-estimator",
    "house-cleaning",
    "hvac-cfm",
    "hvac-markup",
    "irrigation-system",
    "labor",
    "landscape-design",
    "margin",
    "masonry-work",
    "multi-service-job-estimator",
    "painting",
    "paver",
    "pipe-water-volume",
    "plumbing-bid",
    "profit-margin",
    "renovation",
    "roof-square-footage",
    "snow-removal",
  ];

  calculators.forEach((calculator) => {
    xml += "  <url>\n";
    xml += `    <loc>${baseUrl}/resources/cost-calculator/${calculator}</loc>\n`;
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
