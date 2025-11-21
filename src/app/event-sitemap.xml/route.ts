export const dynamic = "force-dynamic";
export const revalidate = 3600;

import { NextResponse } from "next/server";
import { getAllEvents } from "@/services/events/getEventData";

export async function GET() {
  const locale = "en";
  const baseUrl =
    process.env.NEXT_PUBLIC_DOMAIN || "https://contractorplus.app";

  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<?xml-stylesheet type="text/xsl" href="/sitemap-index.xsl"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

  try {
    const events = await getAllEvents(locale, true);

    if (events && Array.isArray(events)) {
      events.forEach((event: any) => {
        // Using eventUrl as the slug (matches your route structure)
        if (event?.eventUrl) {
          xml += "  <url>\n";
          xml += `    <loc>${baseUrl}/events/${event.eventUrl}</loc>\n`;
          xml += `    <lastmod>${new Date().toISOString()}</lastmod>\n`;
          xml += `    <changefreq>weekly</changefreq>\n`;
          xml += `    <priority>0.7</priority>\n`;
          xml += "  </url>\n";
        }
      });
    }
  } catch (error) {
    console.error("❌ Error generating event sitemap:", error);
  }

  xml += "</urlset>";

  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate",
    },
  });
}
