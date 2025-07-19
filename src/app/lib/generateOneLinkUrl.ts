interface OneLinkOptions {
  email?: string;
}

// Helper function to detect device type
function getDeviceType(): "mobile" | "desktop" {
  if (typeof window === "undefined") return "desktop";

  const userAgent = navigator.userAgent.toLowerCase();
  const isMobile =
    /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(
      userAgent,
    );

  return isMobile ? "mobile" : "desktop";
}

export function generateOneLinkUrl(
  pathname: string,
  options: OneLinkOptions = {},
): string {
  const baseUrl = "https://contractorplus.onelink.me/ekwH/homebuttons";

  // Extract language from pathname
  const pathParts = pathname.split("/").filter(Boolean);
  const lang = pathParts[0] === "es" ? "es" : "en";

  // Remove language prefix if present
  const cleanPath =
    lang === "es" && pathParts[0] === "es"
      ? pathParts.slice(1).join("/")
      : pathParts.join("/");

  const campaign = cleanPath || "home";

  const deepLinkValue = cleanPath;

  // Get device type
  const deviceType = getDeviceType();

  // Build URL with parameters
  const params = new URLSearchParams({
    pid: deviceType,
    utm_source: deviceType,
    utm_medium: "feature",
    utm_campaign: campaign,
    utm_term: lang,
    lang: lang,
    ...(deepLinkValue && { deep_link_value: deepLinkValue }),
    ...(options.email && { register_email: options.email }),
  });

  return `${baseUrl}?${params.toString()}`;
}
