export const dynamic = "force-dynamic";
export const revalidate = 3600;
import { getAllLpPages } from "@/services/lp/getLpData";
import { NextResponse } from "next/server";

export async function GET() {
  const locale = "en";
  const baseUrl =
    process.env.NEXT_PUBLIC_DOMAIN || "https://contractorplus.app";

  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<?xml-stylesheet type="text/xsl" href="/sitemap-index.xsl"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

  try {
    const lpPages = await getAllLpPages("en");

    if (!lpPages || lpPages.length === 0) {
      console.warn("⚠️ No LP pages found for", locale);
    } else {
      lpPages.forEach((itm) => {
        const slug = itm.slug;
        const publishedAt = itm.publishedAt;

        if (slug) {
          xml += "  <url>\n";
          xml += `    <loc>${baseUrl}/lp/${slug}</loc>\n`;
          xml += `    <lastmod>${publishedAt || new Date().toISOString()}</lastmod>\n`;
          xml += `    <changefreq>monthly</changefreq>\n`;
          xml += `    <priority>0.7</priority>\n`;
          xml += "  </url>\n";
        }
      });
    }
  } catch (error: any) {
    console.error("❌ Error generating LP sitemap for EN:", error?.message);
  }

  xml += "</urlset>";

  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate",
    },
  });
}
