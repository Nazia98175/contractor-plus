export const dynamic = "force-dynamic";
export const revalidate = 3600;

import { NextResponse } from "next/server";
import { getAllIntegration } from "@/services/integation/getIntegrationData"; // ✅ Import existing function

export async function GET() {
  console.log("========== INTEGRATION SITEMAP ==========");

  const locale = "en";
  const baseUrl =
    process.env.NEXT_PUBLIC_DOMAIN || "https://contractorplus.app";

  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<?xml-stylesheet type="text/xsl" href="/sitemap-index.xsl"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

  try {
    // ✅ Use existing function with ISR mode for minimal data
    const integrations = await getAllIntegration(locale, true);

    console.log(`Found ${integrations?.length || 0} integrations`);

    if (integrations && Array.isArray(integrations)) {
      integrations.forEach((integration: any) => {
        if (integration?.slug) {
          xml += "  <url>\n";
          xml += `    <loc>${baseUrl}/integrations/${integration.slug}</loc>\n`;
          xml += `    <lastmod>${new Date().toISOString()}</lastmod>\n`;
          xml += `    <changefreq>monthly</changefreq>\n`;
          xml += `    <priority>0.6</priority>\n`;
          xml += "  </url>\n";
        }
      });

      console.log(
        `✅ Integration sitemap generated with ${integrations.length} URLs`,
      );
    }
  } catch (error) {
    console.error("Error generating integration sitemap:", error);
  }

  xml += "</urlset>";

  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate",
    },
  });
}
