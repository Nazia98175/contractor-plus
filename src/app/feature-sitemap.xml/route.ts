export const dynamic = "force-dynamic";
export const revalidate = 3600;

import { NextResponse } from "next/server";
import axiosInstance from "@/lib/axios";

const getAllFeatures = async (locale: string) => {
  try {
    const response = await axiosInstance.get(
      `features-pages?locale=${locale}&pagination[page]=1&pagination[pageSize]=100`,
    );
    return response?.data?.data || [];
  } catch (error) {
    console.error("Error fetching features:", error);
    return [];
  }
};

export async function GET() {
  console.log("========== FEATURE SITEMAP ==========");

  const locale = "en";
  const baseUrl = "https://v2site.contractorplus.app";

  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

  try {
    const features = await getAllFeatures(locale);
    console.log(`Found ${features.length} features`);

    features.forEach((feature: any) => {
      if (feature?.slug) {
        xml += "  <url>\n";
        xml += `    <loc>${baseUrl}/all-features/${feature.slug}</loc>\n`;
        xml += `    <lastmod>${feature.updatedAt || new Date().toISOString()}</lastmod>\n`;
        xml += `    <changefreq>weekly</changefreq>\n`;
        xml += `    <priority>0.7</priority>\n`;
        xml += "  </url>\n";
      }
    });

    console.log(`✅ Feature sitemap generated with ${features.length} URLs`);
  } catch (error) {
    console.error("Error generating feature sitemap:", error);
  }

  xml += "</urlset>";

  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate",
    },
  });
}
