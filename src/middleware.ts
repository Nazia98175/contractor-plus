import createMiddleware from "next-intl/middleware";
import { NextRequest } from "next/server";
import { routing } from "./i18n/routing";

const intlMiddleware = createMiddleware(routing);

export function middleware(request: NextRequest) {
  const forwarded = request.headers.get("x-forwarded-for");
  const ip = forwarded?.split(",")[0]?.trim() || "unknown";
  const response = intlMiddleware(request);

  const pathname = request.nextUrl.pathname;
  const localePrefixes = ["/es", "/fr"];
  const hasLocalePrefix = localePrefixes.some(prefix => pathname.startsWith(prefix + "/") || pathname === prefix);
  if (!hasLocalePrefix) {
    response.cookies.set("NEXT_LOCALE", "en", {
      path: "/",
      maxAge: 60 * 60 * 24 * 365,
    });
  }

  const userIp = request.cookies.get("user-ip")?.value;
  if (!userIp) {
    response.cookies.set("user-ip", ip, {
      httpOnly: false,
      path: "/",
      maxAge: 60 * 60 * 24,
    });
  }

  return response;
}

export const config = {
  matcher: "/((?!api|trpc|_next|_vercel|.*\\..*).*)",
};
