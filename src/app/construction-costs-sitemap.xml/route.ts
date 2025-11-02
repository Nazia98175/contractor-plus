export const dynamic = "force-dynamic";
export const revalidate = 3600;

import { NextResponse } from "next/server";
import axiosInstance from "@/lib/axios";

const getConstructionCosts = async () => {
  try {
    const response = await axiosInstance.get(
      `construction-costs?locale=en&pagination[page]=1&pagination[pageSize]=100&populate=*`,
    );
    return response?.data?.data || [];
  } catch (error) {
    console.error("Error fetching construction costs:", error);
    return [];
  }
};

export async function GET() {
  console.log("========== CONSTRUCTION COSTS SITEMAP ==========");

  const baseUrl = "https://v2site.contractorplus.app";

  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

  try {
    const costs = await getConstructionCosts();
    console.log(`Found ${costs.length} construction cost pages`);

    costs.forEach((cost: any) => {
      const projectSlug = cost?.projectSlug || cost?.slug;
      const location = cost?.location || "default-location";

      if (projectSlug) {
        xml += "  <url>\n";
        xml += `    <loc>${baseUrl}/resources/construction-costs/${projectSlug}/${location}</loc>\n`;
        xml += `    <lastmod>${cost.updatedAt || new Date().toISOString()}</lastmod>\n`;
        xml += `    <changefreq>monthly</changefreq>\n`;
        xml += `    <priority>0.7</priority>\n`;
        xml += "  </url>\n";
      }
    });

    console.log(
      `✅ Construction costs sitemap generated with ${costs.length} URLs`,
    );
  } catch (error) {
    console.error("Error generating construction costs sitemap:", error);
  }

  xml += "</urlset>";

  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate",
    },
  });
}
