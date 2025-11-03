export const dynamic = "force-dynamic";
export const revalidate = 3600;

import { NextResponse } from "next/server";
import { getAllFeaturesPages } from "@/services/all-features/allFeatures";

export async function GET() {
  console.log("========== FEATURE SITEMAP ==========");

  const locale = "en";
  const baseUrl =
    process.env.NEXT_PUBLIC_DOMAIN || "https://contractorplus.app";

  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<?xml-stylesheet type="text/xsl" href="/sitemap-index.xsl"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

  try {
    // ✅ Reuse the same function from your page
    const features = await getAllFeaturesPages(
      locale,
      "&fields[0]=pageName&fields[1]=slug&pagination[pageSize]=100",
    );

    console.log(`📦 Found ${features?.length || 0} features`);

    if (features && Array.isArray(features)) {
      features.forEach((feature: any) => {
        if (feature?.slug) {
          xml += "  <url>\n";
          xml += `    <loc>${baseUrl}/all-features/${feature.slug}</loc>\n`;
          xml += `    <lastmod>${new Date().toISOString()}</lastmod>\n`;
          xml += `    <changefreq>weekly</changefreq>\n`;
          xml += `    <priority>0.7</priority>\n`;
          xml += "  </url>\n";
        }
      });

      console.log(`✅ Feature sitemap generated with ${features.length} URLs`);
    }
  } catch (error) {
    console.error("❌ Error generating feature sitemap:", error);
  }

  xml += "</urlset>";

  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate",
    },
  });
}
