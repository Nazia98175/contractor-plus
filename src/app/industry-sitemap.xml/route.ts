export const dynamic = "force-dynamic";
export const revalidate = 3600;

import { NextResponse } from "next/server";
import { getAllIndustries } from "@/services/industries/getIndustryPageData";

export async function GET() {
  console.log("========== INDUSTRY SITEMAP ==========");

  const locale = "en";
  const baseUrl =
    process.env.NEXT_PUBLIC_DOMAIN || "https://v2site.contractorplus.app";

  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<?xml-stylesheet type="text/xsl" href="/sitemap-index.xsl"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

  try {
    const industries = await getAllIndustries(locale);

    console.log(
      "📦 Raw industries data:",
      JSON.stringify(industries?.slice(0, 2), null, 2),
    ); // Show first 2

    if (industries && Array.isArray(industries)) {
      console.log(`✅ Found ${industries.length} industries`);

      let addedCount = 0; // Counter for successfully added URLs

      industries.forEach((industry: any, index: number) => {
        console.log(`🔄 Processing industry ${index + 1}:`, {
          slug: industry?.slug,
          name: industry?.name,
          hasSlug: !!industry?.slug,
        });

        if (industry?.slug) {
          xml += "  <url>\n";
          xml += `    <loc>${baseUrl}/industries/${industry.slug}</loc>\n`;
          xml += `    <lastmod>${new Date().toISOString()}</lastmod>\n`;
          xml += `    <changefreq>weekly</changefreq>\n`;
          xml += `    <priority>0.8</priority>\n`;
          xml += "  </url>\n";

          addedCount++;
          console.log(
            `   ✓ Added URL #${addedCount}: /industries/${industry.slug}`,
          );
        } else {
          console.log(`   ✗ Skipped - no slug`);
        }
      });

      console.log(
        `✅ Industry sitemap generated with ${addedCount} URLs (out of ${industries.length} industries)`,
      );
    } else {
      console.log("❌ Industries is not an array or is empty:", industries);
    }
  } catch (error) {
    console.error("❌ ERROR generating industry sitemap:", error);
  }

  xml += "</urlset>";

  console.log("📄 Final XML length:", xml.length, "characters");
  console.log("📄 First 500 characters of XML:", xml.substring(0, 500));

  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate",
    },
  });
}
