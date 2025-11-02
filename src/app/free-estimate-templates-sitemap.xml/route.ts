export const dynamic = "force-dynamic";
export const revalidate = 3600;

import { NextResponse } from "next/server";
import axiosInstance from "@/lib/axios";

const getFreeEstimateTemplates = async () => {
  try {
    const response = await axiosInstance.get(
      `free-estimate-templates?locale=en&pagination[page]=1&pagination[pageSize]=100`,
    );
    return response?.data?.data || [];
  } catch (error) {
    console.error("Error fetching free estimate templates:", error);
    return [];
  }
};

export async function GET() {
  console.log("========== FREE ESTIMATE TEMPLATES SITEMAP ==========");

  const baseUrl =
    process.env.NEXT_PUBLIC_DOMAIN || "https://v2site.contractorplus.app";
  const now = new Date().toISOString();

  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<?xml-stylesheet type="text/xsl" href="/sitemap-index.xsl"?>\n';
  xml += '<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

  // Add main page
  xml += "  <url>\n";
  xml += `    <loc>${baseUrl}/resources/free-estimate-templates</loc>\n`;
  xml += `    <lastmod>${now}</lastmod>\n`;
  xml += `    <changefreq>weekly</changefreq>\n`;
  xml += `    <priority>0.8</priority>\n`;
  xml += "  </url>\n";

  try {
    const templates = await getFreeEstimateTemplates();
    console.log(`Found ${templates.length} free estimate templates`);

    templates.forEach((template: any) => {
      if (template?.slug) {
        xml += "  <url>\n";
        xml += `    <loc>${baseUrl}/resources/free-estimate-templates/${template.slug}</loc>\n`;
        xml += `    <lastmod>${template.updatedAt || now}</lastmod>\n`;
        xml += `    <changefreq>monthly</changefreq>\n`;
        xml += `    <priority>0.7</priority>\n`;
        xml += "  </url>\n";
      }
    });

    console.log(
      `✅ Free estimate templates sitemap generated with ${templates.length + 1} URLs`,
    );
  } catch (error) {
    console.error("Error generating free estimate templates sitemap:", error);
  }

  xml += "</urlset>";

  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate",
    },
  });
}
