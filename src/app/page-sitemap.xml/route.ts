import { NextResponse } from "next/server";

export async function GET() {
  console.log("========== MAIN SITEMAP INDEX ==========");

  const baseUrl =
    process.env.NEXT_PUBLIC_DOMAIN || "https://contractorplus.app";

  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<?xml-stylesheet type="text/xsl" href="/sitemap-index.xsl"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

  try {
    const now = new Date().toISOString();

    const paths = [
      "/",
      "/accessibility",
      "/affiliates",
      "/ai-estimating-ads",
      "/ai-estimating-software",
      "/all-features",
      "/contractor-invoicing-software",
      "/cookie-policy",
      "/developers-api",
      "/field-service-management",
      "/gdpr",
      "/local-seo-for-contractors",
      "/opportunity-tracker",
      "/podcasts",
      "/pricing",
      "/privacy-policy",
      "/suppliers",
      "/terms-of-service",
      "/why-contractor-plus",
    ];

    const changefreq = "weekly";
    const priority = "0.8";

    for (const path of paths) {
      xml += "  <url>\n";
      xml += `    <loc>${baseUrl}${path}</loc>\n`;
      xml += `    <lastmod>${now}</lastmod>\n`;
      xml += `    <changefreq>${changefreq}</changefreq>\n`;
      xml += `    <priority>${priority}</priority>\n`;
      xml += "  </url>\n";
    }
  } catch (error) {
    console.error("Error generating sitemap index:", error);
  }

  xml += "</urlset>";

  console.log(
    `✅ Main sitemap index generated with ${xml.includes("<url>") ? (xml.match(/<url>/g)?.length ?? 0) : 0} entries`,
  );

  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate",
    },
  });
}
