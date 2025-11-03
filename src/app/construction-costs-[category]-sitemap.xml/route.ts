// src/app/construction-costs-[category]-sitemap.xml/route.ts
import { NextResponse } from "next/server";
import { LOCATIONS } from "@/data/locationsData";
import { fetchFilteredProjects } from "@/services/resource/costCalculatorService";

// Remove these lines - they're causing the conflict
// export const dynamic = "force-dynamic";
// export const revalidate = 3600;

// Map URL slugs to API category names
const CATEGORY_MAP: Record<string, string> = {
  appliances: "Appliances",
  audio_video: "Audio / Video",
  bathroom_remodeling: "Bathroom Remodeling",
  concrete_masonry: "Concrete / Masonry",
  decks: "Decks",
  doors: "Doors",
  drywall: "Drywall",
  electrical: "Electrical",
  fences: "Fences",
  flooring: "Flooring",
  framing_carpentry: "Framing/Carpentry",
  general_contractor: "General Contractor",
  hvac: "HVAC",
  handyman: "Handyman",
  kitchen_remodeling: "Kitchen Remodeling",
  landscaping_lawn_care: "Landscaping / Lawn Care",
  mold_remediation: "Mold Remediation",
  painting: "Painting",
  plumbing: "Plumbing",
  restoration: "Restoration",
  roofing: "Roofing",
  siding: "Siding",
  smart_home: "Smart Home",
  windows: "Windows",
};

export async function GET(
  request: Request,
  { params }: { params: Promise<{ category: string }> },
) {
  const { category } = await params;

  console.log("🔍 Generating sitemap for category:", category);

  // Get the proper category name for the API
  const categoryName = CATEGORY_MAP[category];

  if (!categoryName) {
    console.error(`❌ Category not found: ${category}`);
    return new NextResponse("Category not found", { status: 404 });
  }

  const baseUrl =
    process.env.NEXT_PUBLIC_DOMAIN || "https://v2site.contractorplus.app";

  try {
    console.log(`📡 Fetching projects for category: ${categoryName}`);
    const projects = await fetchFilteredProjects(categoryName);
    console.log(`✅ Found ${projects.length} projects for ${categoryName}`);

    let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
    xml += '<?xml-stylesheet type="text/xsl" href="/sitemap-index.xsl"?>\n';
    xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

    let urlCount = 0;
    const maxUrls = 45000;

    for (const project of projects) {
      for (const location of LOCATIONS) {
        if (urlCount >= maxUrls) break;

        xml += "  <url>\n";
        xml += `    <loc>${baseUrl}/resources/construction-costs/${project.slug}/${location.value}</loc>\n`;
        xml += `    <lastmod>${new Date().toISOString()}</lastmod>\n`;
        xml += `    <changefreq>weekly</changefreq>\n`;
        xml += `    <priority>0.7</priority>\n`;
        xml += "  </url>\n";

        urlCount++;
      }
      if (urlCount >= maxUrls) break;
    }

    xml += "</urlset>";

    console.log(`✅ Generated ${urlCount} URLs for ${categoryName}`);

    return new NextResponse(xml, {
      headers: {
        "Content-Type": "application/xml; charset=utf-8",
        "Cache-Control": "public, s-maxage=3600, stale-while-revalidate",
      },
    });
  } catch (error) {
    console.error(`❌ Error generating sitemap for ${categoryName}:`, error);
    return new NextResponse(
      `Error generating sitemap: ${error instanceof Error ? error.message : "Unknown error"}`,
      { status: 500 },
    );
  }
}
