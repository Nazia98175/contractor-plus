// src/app/cost-calculator-sitemap.xml/route.ts

export const dynamic = "force-dynamic";
export const revalidate = 3600;

import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET() {
  console.log("========== COST CALCULATOR SITEMAP ==========");

  const baseUrl =
    process.env.NEXT_PUBLIC_DOMAIN || "https://contractorplus.app";
  const now = new Date().toISOString();

  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<?xml-stylesheet type="text/xsl" href="/sitemap-index.xsl"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

  // Cost calculator pages
  // Discover cost calculator pages by scanning each locale folder under src/app
  function getCalculatorSlugsFromFilesystem(): string[] {
    const appDir = path.join(process.cwd(), "src", "app");
    const found = new Set<string>();

    try {
      if (!fs.existsSync(appDir)) return [];

      const localeEntries = fs.readdirSync(appDir, { withFileTypes: true });

      for (const localeEntry of localeEntries) {
        if (!localeEntry.isDirectory()) continue;

        const calcDir = path.join(
          appDir,
          localeEntry.name,
          "resources",
          "cost-calculator",
        );

        if (!fs.existsSync(calcDir)) continue;

        const calculators = fs.readdirSync(calcDir, { withFileTypes: true });
        for (const c of calculators) {
          if (c.isDirectory()) found.add(c.name);
        }
      }
    } catch (err) {
      // If something goes wrong, fall back to an empty list and log the error.
      console.error("Error reading cost calculator folders:", err);
    }

    return Array.from(found).sort();
  }

  // Fallback: if nothing found, keep a minimal list so sitemap isn't empty.
  const discovered = getCalculatorSlugsFromFilesystem();
  const calculators =
    discovered.length > 0
      ? discovered
      : [
          "concrete-calculator",
          "drywall-calculator",
          "roofing-calculator",
          "flooring-calculator",
          "paint-calculator",
        ];

  calculators.forEach((calculator) => {
    xml += "  <url>\n";
    xml += `    <loc>${baseUrl}/resources/cost-calculator/${calculator}</loc>\n`;
    xml += `    <lastmod>${now}</lastmod>\n`;
    xml += `    <changefreq>monthly</changefreq>\n`;
    xml += `    <priority>0.7</priority>\n`;
    xml += "  </url>\n";
  });

  console.log(
    `✅ Cost calculator sitemap generated with ${calculators.length} URLs`,
  );

  xml += "</urlset>";

  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate",
    },
  });
}
