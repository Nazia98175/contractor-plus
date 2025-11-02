export const dynamic = "force-dynamic";
export const revalidate = 3600;

import { NextResponse } from "next/server";
import axiosInstance from "@/lib/axios";

const getMaterialPriceComparisons = async () => {
  try {
    const response = await axiosInstance.get(
      `material-price-comparisons?locale=en&pagination[page]=1&pagination[pageSize]=100`,
    );
    return response?.data?.data || [];
  } catch (error) {
    console.error("Error fetching material price comparisons:", error);
    return [];
  }
};

export async function GET() {
  console.log("========== MATERIAL PRICE COMPARISON SITEMAP ==========");

  const baseUrl = "https://v2site.contractorplus.app";

  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<?xml-stylesheet type="text/xsl" href="/sitemap-index.xsl"?>\n';
  xml += '<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

  // Add main page
  const now = new Date().toISOString();
  xml += "  <url>\n";
  xml += `    <loc>${baseUrl}/resources/material-price-comparison</loc>\n`;
  xml += `    <lastmod>${now}</lastmod>\n`;
  xml += `    <changefreq>weekly</changefreq>\n`;
  xml += `    <priority>0.8</priority>\n`;
  xml += "  </url>\n";

  try {
    const materials = await getMaterialPriceComparisons();
    console.log(`Found ${materials.length} material price comparisons`);

    materials.forEach((material: any) => {
      if (material?.slug) {
        xml += "  <url>\n";
        xml += `    <loc>${baseUrl}/resources/material-price-comparison/${material.slug}</loc>\n`;
        xml += `    <lastmod>${material.updatedAt || now}</lastmod>\n`;
        xml += `    <changefreq>weekly</changefreq>\n`;
        xml += `    <priority>0.7</priority>\n`;
        xml += "  </url>\n";
      }
    });
  } catch (error) {
    console.error("Error generating material price comparison sitemap:", error);
  }

  xml += "</urlset>";

  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate",
    },
  });
}
