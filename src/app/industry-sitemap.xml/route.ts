export const dynamic = "force-dynamic";
export const revalidate = 3600;

import { NextResponse } from "next/server";
import { getAllIndustries } from "@/services/industries/getIndustryPageData";

export async function GET() {
  const locale = "en";
  const baseUrl =
    process.env.NEXT_PUBLIC_DOMAIN || "https://contractorplus.app";

  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<?xml-stylesheet type="text/xsl" href="/sitemap-index.xsl"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

  try {
    const industries = await getAllIndustries(locale);

    if (industries && Array.isArray(industries)) {
      let addedCount = 0; // Counter for successfully added URLs

      industries.forEach((industry: any, index: number) => {
        if (industry?.slug) {
          xml += "  <url>\n";
          xml += `    <loc>${baseUrl}/industries/${industry.slug}</loc>\n`;
          xml += `    <lastmod>${new Date().toISOString()}</lastmod>\n`;
          xml += `    <changefreq>weekly</changefreq>\n`;
          xml += `    <priority>0.8</priority>\n`;
          xml += "  </url>\n";

          addedCount++;
        } else {
          console.log(`   ✗ Skipped - no slug`);
        }
      });
    } else {
      console.log("❌ Industries is not an array or is empty:", industries);
    }
  } catch (error) {
    console.error("❌ ERROR generating industry sitemap:", error);
  }

  xml += "</urlset>";

  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate",
    },
  });
}
