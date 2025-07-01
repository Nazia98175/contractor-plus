// src/app/api/image-proxy/route.ts

import { NextRequest } from "next/server";
import http from "http";
import https from "https";
import { parse } from "url";

export async function GET(req: NextRequest): Promise<Response> {
  const url = req.nextUrl.searchParams.get("url");

  if (!url) {
    return new Response("Missing 'url' query parameter", { status: 400 });
  }

  const parsed = parse(url);
  if (!parsed.hostname?.includes("167.88.43.123")) {
    return new Response("Access denied.", { status: 403 });
  }

  const client = url.startsWith("https") ? https : http;

  return new Promise<Response>((resolve, reject) => {
    client.get(url, (imageRes) => {
      const contentType = imageRes.headers["content-type"] || "image/webp";
      const headers = new Headers({
        "Content-Type": contentType,
        "Cache-Control": "public, max-age=31536000, immutable",
      });

      const chunks: Uint8Array[] = [];

      imageRes.on("data", (chunk) => chunks.push(chunk));
      imageRes.on("end", () => {
        const buffer = Buffer.concat(chunks);
        resolve(new Response(buffer, { status: 200, headers }));
      });
    }).on("error", (err) => {
      console.error("Proxy error:", err);
      resolve(new Response("Image proxy failed", { status: 500 }));
    });
  });
}
