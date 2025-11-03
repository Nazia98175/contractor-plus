export const dynamic = "force-dynamic";
export const revalidate = 3600;

import { getAllBlogsForSitemap } from "@/services/blog/getBlogData";
import { NextResponse } from "next/server";

export async function GET() {
  console.log("========== POST SITEMAP EN CALLED ==========");

  const locale = "en";
  const baseUrl =
    process.env.NEXT_PUBLIC_DOMAIN || "https://contractorplus.app";

  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<?xml-stylesheet type="text/xsl" href="/sitemap-index.xsl"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

  try {
    const blogs = await getAllBlogsForSitemap(locale);

    if (!blogs || blogs.length === 0) {
      console.warn("⚠️ No blogs found for", locale);
    } else {
      blogs.forEach((blog: any) => {
        const slug = blog?.blogUrl;
        const publishedAt = blog?.postedOn;

        if (slug) {
          xml += "  <url>\n";
          xml += `    <loc>${baseUrl}/blogs/${slug}</loc>\n`;
          xml += `    <lastmod>${publishedAt || new Date().toISOString()}</lastmod>\n`;
          xml += `    <changefreq>monthly</changefreq>\n`;
          xml += `    <priority>0.7</priority>\n`;
          xml += "  </url>\n";
        }
      });

      console.log(`✅ Post sitemap EN completed with ${blogs.length} URLs`);
    }
  } catch (error: any) {
    console.error("❌ Error generating blog sitemap for EN:", error?.message);
  }

  xml += "</urlset>";

  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate",
    },
  });
}
