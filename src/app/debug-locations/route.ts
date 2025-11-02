export const dynamic = "force-dynamic";
// Remove the revalidate line completely for dynamic routes

import { NextResponse } from "next/server";
import { LOCATIONS } from "@/data/locationsData";
import axios from "axios";

interface Project {
  slug: string;
  projectName: string;
  estimateCategory: string;
}

export async function GET(
  request: Request,
  context: { params: Promise<{ location: string }> },
) {
  console.log("🔍 ========== CONSTRUCTION COSTS SITEMAP ==========");

  try {
    const { location: locationParam } = await context.params;
    console.log("📍 Requested location:", locationParam);

    const baseUrl =
      process.env.NEXT_PUBLIC_SITE_URL || "https://v2site.contractorplus.app";

    console.log(baseUrl, "baseUrl");

    // Find the location from LOCATIONS array
    const location = LOCATIONS.find((loc) => loc.value === locationParam);

    console.log(location, "location");

    if (!location) {
      console.log("❌ Location not found:", locationParam);
      return new NextResponse(`Location '${locationParam}' not found`, {
        status: 404,
      });
    }

    console.log("✅ Location found:", location.label);

    let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
    xml += '<?xml-stylesheet type="text/xsl" href="/sitemap-index.xsl"?>\n';
    xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

    // Fetch projects from API
    console.log("📦 Fetching projects from API...");
    const response = await axios.get<Project[]>(
      "https://reshubapi.contractorplus.app/labor-index/projects",
      {
        headers: {
          "Content-Type": "application/json",
        },
        timeout: 10000, // 10 second timeout
      },
    );

    const projects = response.data;
    console.log(`✅ Fetched ${projects.length} projects`);

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

    xml += "</urlset>";

    console.log(`✅ Generated sitemap for ${location.label}: ${urlCount} URLs`);

    return new NextResponse(xml, {
      headers: {
        "Content-Type": "application/xml; charset=utf-8",
        "Cache-Control": "public, s-maxage=3600, stale-while-revalidate",
      },
    });
  } catch (error) {
    console.error("❌ Error generating sitemap:", error);
    return new NextResponse(
      `Error generating sitemap: ${error instanceof Error ? error.message : String(error)}`,
      { status: 500 },
    );
  }
}
