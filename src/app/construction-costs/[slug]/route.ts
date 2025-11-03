// src/app/construction-costs/[slug]-sitemap.xml/route.ts

import { NextResponse } from "next/server";
import { LOCATIONS } from "@/data/locationsData";
import { fetchFilteredProjects } from "@/services/resource/costCalculatorService";

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
  { params }: { params: Promise<{ slug: string }> },
) {
  try {
    const { slug } = await params;

    console.log("🔍 Dynamic route hit! Full slug received:", slug);

    // Extract category from slug
    // URL: /plumbing-sitemap.xml -> slug: "plumbing-sitemap.xml"
    // Remove ".xml" first, then remove "-sitemap"
    let categorySlug = slug.replace(/\.xml$/i, ""); // Remove .xml -> "plumbing-sitemap"
    categorySlug = categorySlug.replace(/-sitemap$/i, ""); // Remove -sitemap -> "plumbing"

    console.log("📝 Extracted category slug:", categorySlug);

    // Get the proper category name for the API
    const categoryName = CATEGORY_MAP[categorySlug];

    if (!categoryName) {
      console.error(`❌ Category not found for slug: ${categorySlug}`);
      console.log("Available slugs:", Object.keys(CATEGORY_MAP));

      const emptyXml = `<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="/sitemap-index.xsl"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <!-- No URLs found for category: ${categorySlug} -->
</urlset>`;

      return new NextResponse(emptyXml, {
        headers: {
          "Content-Type": "application/xml; charset=utf-8",
          "Cache-Control": "public, s-maxage=3600, stale-while-revalidate",
        },
      });
    }

    const baseUrl =
      process.env.NEXT_PUBLIC_DOMAIN || "https://contractorplus.app";

    console.log(
      `📡 Fetching projects for category: ${categoryName} (slug: ${categorySlug})`,
    );
    const projects = await fetchFilteredProjects(categoryName);
    console.log(`✅ Found ${projects.length} projects for ${categoryName}`);

    let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
    xml += '<?xml-stylesheet type="text/xsl" href="/sitemap-index.xsl"?>\n';
    xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

    let urlCount = 0;
    const maxUrls = 45000;

    // Generate URLs for each project-location combination
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

    console.log(
      `✅ Sitemap generated successfully for ${categoryName} with ${urlCount} URLs`,
    );

    return new NextResponse(xml, {
      headers: {
        "Content-Type": "application/xml; charset=utf-8",
        "Cache-Control": "public, s-maxage=3600, stale-while-revalidate",
      },
    });
  } catch (error) {
    console.error(`❌ Error in dynamic sitemap route:`, error);

    const errorXml = `<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="/sitemap-index.xsl"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <!-- Error generating sitemap -->
</urlset>`;

    return new NextResponse(errorXml, {
      status: 200,
      headers: {
        "Content-Type": "application/xml; charset=utf-8",
      },
    });
  }
}
