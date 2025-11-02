export const dynamic = "force-dynamic";
export const revalidate = 3600;

import { NextResponse } from "next/server";
import { getAllIndustries } from "@/services/industries/getIndustryPageData";

export async function GET() {
  console.log("========== INDUSTRY SITEMAP ==========");

  const locale = "en";
  const baseUrl = "https://v2site.contractorplus.app";

  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

  try {
    const industries = await getAllIndustries(locale);

    if (industries && Array.isArray(industries)) {
      console.log(`Found ${industries.length} industries`);

      industries.forEach((industry: any) => {
        if (industry?.slug) {
          xml += "  <url>\n";
          xml += `    <loc>${baseUrl}/industries/${industry.slug}</loc>\n`;
          xml += `    <lastmod>${industry.updatedAt || new Date().toISOString()}</lastmod>\n`;
          xml += `    <changefreq>weekly</changefreq>\n`;
          xml += `    <priority>0.8</priority>\n`;
          xml += "  </url>\n";
        }
      });

      console.log(
        `✅ Industry sitemap generated with ${industries.length} URLs`,
      );
    }
  } catch (error) {
    console.error("Error generating industry sitemap:", error);
  }

  xml += "</urlset>";

  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate",
    },
  });
}
