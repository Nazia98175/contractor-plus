import { NextResponse } from "next/server";

export async function GET() {
  console.log("========== MAIN SITEMAP INDEX ==========");

  const baseUrl =
    process.env.NEXT_PUBLIC_DOMAIN || "https://contractorplus.app";
  const now = new Date().toISOString();

  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<?xml-stylesheet type="text/xsl" href="/sitemap-index.xsl"?>\n';
  xml += '<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

  // Static Pages Sitemap
  xml += "  <sitemap>\n";
  xml += `    <loc>${baseUrl}/page-sitemap.xml</loc>\n`;
  xml += `    <lastmod>${now}</lastmod>\n`;
  xml += "  </sitemap>\n";

  // Blog/Post Sitemap
  xml += "  <sitemap>\n";
  xml += `    <loc>${baseUrl}/post-sitemap.xml</loc>\n`;
  xml += `    <lastmod>${now}</lastmod>\n`;
  xml += "  </sitemap>\n";

  // Industry Sitemap
  xml += "  <sitemap>\n";
  xml += `    <loc>${baseUrl}/industry-sitemap.xml</loc>\n`;
  xml += `    <lastmod>${now}</lastmod>\n`;
  xml += "  </sitemap>\n";

  // Feature Sitemap
  xml += "  <sitemap>\n";
  xml += `    <loc>${baseUrl}/feature-sitemap.xml</loc>\n`;
  xml += `    <lastmod>${now}</lastmod>\n`;
  xml += "  </sitemap>\n";

  // Integration Sitemap
  xml += "  <sitemap>\n";
  xml += `    <loc>${baseUrl}/integration-sitemap.xml</loc>\n`;
  xml += `    <lastmod>${now}</lastmod>\n`;
  xml += "  </sitemap>\n";

  // Event Sitemap
  xml += "  <sitemap>\n";
  xml += `    <loc>${baseUrl}/event-sitemap.xml</loc>\n`;
  xml += `    <lastmod>${now}</lastmod>\n`;
  xml += "  </sitemap>\n";

  // ===== RESOURCE SITEMAP INDEX (Contains all resource sub-sitemaps) =====
  xml += "  <sitemap>\n";
  xml += `    <loc>${baseUrl}/resource-sitemap.xml</loc>\n`;
  xml += `    <lastmod>${now}</lastmod>\n`;
  xml += "  </sitemap>\n";

  // ===== LP Pages Index =====
  xml += "  <sitemap>\n";
  xml += `    <loc>${baseUrl}/lp-pages-sitemap.xml</loc>\n`;
  xml += `    <lastmod>${now}</lastmod>\n`;
  xml += "  </sitemap>\n";

  xml += "</sitemapindex>";

  console.log("✅ Main sitemap index generated with 7 sitemaps");

  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate",
    },
  });
}
