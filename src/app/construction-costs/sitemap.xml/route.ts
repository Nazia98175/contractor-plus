import { NextResponse } from "next/server";

const CATEGORIES = [
  { id: "appliances", name: "Appliances" },
  { id: "audio_video", name: "Audio / Video" },
  { id: "bathroom_remodeling", name: "Bathroom Remodeling" },
  { id: "concrete_masonry", name: "Concrete / Masonry" },
  { id: "decks", name: "Decks" },
  { id: "doors", name: "Doors" },
  { id: "drywall", name: "Drywall" },
  { id: "electrical", name: "Electrical" },
  { id: "fences", name: "Fences" },
  { id: "flooring", name: "Flooring" },
  { id: "framing_carpentry", name: "Framing/Carpentry" },
  { id: "general_contractor", name: "General Contractor" },
  { id: "hvac", name: "HVAC" },
  { id: "handyman", name: "Handyman" },
  { id: "kitchen_remodeling", name: "Kitchen Remodeling" },
  { id: "landscaping_lawn_care", name: "Landscaping / Lawn Care" },
  { id: "mold_remediation", name: "Mold Remediation" },
  { id: "painting", name: "Painting" },
  { id: "plumbing", name: "Plumbing" },
  { id: "restoration", name: "Restoration" },
  { id: "roofing", name: "Roofing" },
  { id: "siding", name: "Siding" },
  { id: "smart_home", name: "Smart Home" },
  { id: "windows", name: "Windows" },
];

export async function GET() {
  const baseUrl =
    process.env.NEXT_PUBLIC_DOMAIN || "https://v2site.contractorplus.app";

  console.log("🏗️ Generating construction costs sitemap index...");

  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<?xml-stylesheet type="text/xsl" href="/sitemap-index.xsl"?>\n';
  xml += '<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

  // Main construction costs page
  xml += "  <sitemap>\n";
  xml += `    <loc>${baseUrl}/construction-costs/main-sitemap.xml</loc>\n`;
  xml += `    <lastmod>${new Date().toISOString()}</lastmod>\n`;
  xml += "  </sitemap>\n";

  // One sitemap per category (using the dynamic [slug] route)
  CATEGORIES.forEach((category) => {
    xml += "  <sitemap>\n";
    xml += `    <loc>${baseUrl}/construction-costs/${category.id}-sitemap.xml</loc>\n`;
    xml += `    <lastmod>${new Date().toISOString()}</lastmod>\n`;
    xml += "  </sitemap>\n";
  });

  xml += "</sitemapindex>";

  console.log(
    `✅ Construction costs sitemap index generated with ${CATEGORIES.length + 1} sitemaps`,
  );

  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate",
    },
  });
}
