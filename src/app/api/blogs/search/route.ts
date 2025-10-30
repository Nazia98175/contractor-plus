
const STRAPI_BASE = process.env.STRAPI_BASE_URL as string;

export async function GET(req: Request) {
  try {
    const url = new URL(req.url);

    const queryParams = url.searchParams;

    const params = new URLSearchParams();

    const q = queryParams.get("query");
    const locale = queryParams.get("locale");
    if (q && q.trim().length > 0) {
      params.set("filters[blogTitle][$containsi]", q.trim());
    }

    queryParams.forEach((value, key) => {
      if (key === "query") return;
      params.append(key, value);
    });

    const target = `${STRAPI_BASE}/blogs?locale=${locale}${params.toString() ? `?${params.toString()}` : ""}&populate=*`;

    const upstream = await fetch(target, {
      method: "GET",
      headers: {
        accept: req.headers.get("accept") || "application/json",
      },
    });

    const body = await upstream.arrayBuffer();

    const resHeaders: Record<string, string> = {};
    const contentType = upstream.headers.get("content-type");

    if (contentType) resHeaders["content-type"] = contentType;

    const cache = upstream.headers.get("cache-control");
    
    if (cache) resHeaders["cache-control"] = cache;

    return new Response(body, {
      status: upstream.status,
      headers: resHeaders,
    });
  } catch (err: any) {
    const message = err?.message || "Unknown proxy error";
    return new Response(
      JSON.stringify({ message: "Proxy error", detail: message }),
      {
        status: 500,
        headers: { "content-type": "application/json" },
      },
    );
  }
}
