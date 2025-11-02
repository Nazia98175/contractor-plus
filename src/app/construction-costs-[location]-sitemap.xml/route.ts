export const dynamic = "force-dynamic";
export const revalidate = 3600;

import { NextResponse } from "next/server";
import { fetchProjects } from "@/services/resource/costCalculatorService";
import { LOCATIONS } from "@/data/locationsData";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ location: string }> },
) {
  console.log("🔍 ========== DYNAMIC SITEMAP DEBUG ==========");

  const { location: locationParam } = await params;
  console.log("📍 Requested location:", locationParam);

  const baseUrl =
    process.env.NEXT_PUBLIC_DOMAIN || "https://v2site.contractorplus.app";

  // Find the location from LOCATIONS array
  const location = LOCATIONS.find((loc) => loc.value === locationParam);

  if (!location) {
    console.log("❌ Location not found:", locationParam);
    console.log(
      "📋 Available locations:",
      LOCATIONS.slice(0, 5)
        .map((l) => l.value)
        .join(", "),
      "...",
    );
    return new NextResponse(
      `Location '${locationParam}' not found.\n\nAvailable locations:\n${LOCATIONS.map((l) => l.value).join("\n")}`,
      {
        status: 404,
        headers: { "Content-Type": "text/plain" },
      },
    );
  }

  console.log("✅ Location found:", location.label);

  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<?xml-stylesheet type="text/xsl" href="/sitemap-index.xsl"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

  try {
    const projects = await fetchProjects();
    console.log(`📦 Fetched ${projects.length} projects for ${location.label}`);

    let urlCount = 0;
    projects.forEach((project) => {
      if (project.slug) {
        xml += "  <url>\n";
        xml += `    <loc>${baseUrl}/resources/construction-costs/${project.slug}/${location.value}</loc>\n`;
        xml += `    <lastmod>${new Date().toISOString()}</lastmod>\n`;
        xml += `    <changefreq>monthly</changefreq>\n`;
        xml += `    <priority>0.7</priority>\n`;
        xml += "  </url>\n";
        urlCount++;
      }
    });

    console.log(`✅ Generated sitemap for ${location.label}: ${urlCount} URLs`);
  } catch (error) {
    console.error(`❌ Error generating sitemap for ${location.label}:`, error);
  }

  xml += "</urlset>";

  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate",
    },
  });
}
