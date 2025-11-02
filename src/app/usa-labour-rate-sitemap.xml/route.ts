export const dynamic = "force-dynamic";
export const revalidate = 3600;

import { NextResponse } from "next/server";
import axiosInstance from "@/lib/axios";

const getUSALabourRates = async () => {
  try {
    const response = await axiosInstance.get(
      `usa-labour-rates?locale=en&pagination[page]=1&pagination[pageSize]=100`,
    );
    return response?.data?.data || [];
  } catch (error) {
    console.error("Error fetching USA labour rates:", error);
    return [];
  }
};

export async function GET() {
  console.log("========== USA LABOUR RATE SITEMAP ==========");

  const baseUrl = "https://v2site.contractorplus.app";

  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

  // Add main page
  const now = new Date().toISOString();
  xml += "  <url>\n";
  xml += `    <loc>${baseUrl}/resources/usa-labour-rate</loc>\n`;
  xml += `    <lastmod>${now}</lastmod>\n`;
  xml += `    <changefreq>weekly</changefreq>\n`;
  xml += `    <priority>0.8</priority>\n`;
  xml += "  </url>\n";

  try {
    const rates = await getUSALabourRates();
    console.log(`Found ${rates.length} USA labour rates`);

    rates.forEach((rate: any) => {
      if (rate?.slug) {
        xml += "  <url>\n";
        xml += `    <loc>${baseUrl}/resources/usa-labour-rate/${rate.slug}</loc>\n`;
        xml += `    <lastmod>${rate.updatedAt || now}</lastmod>\n`;
        xml += `    <changefreq>monthly</changefreq>\n`;
        xml += `    <priority>0.7</priority>\n`;
        xml += "  </url>\n";
      }
    });
  } catch (error) {
    console.error("Error generating USA labour rate sitemap:", error);
  }

  xml += "</urlset>";

  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate",
    },
  });
}
