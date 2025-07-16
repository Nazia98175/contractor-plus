interface OneLinkOptions {
  email?: string;
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

  // Use the clean path as campaign (or 'home' if empty)
  const campaign = cleanPath || "home";

  // For deep_link_value, we can use the same path
  // or you can remove this if not needed
  const deepLinkValue = cleanPath;

  // Build URL with parameters
  const params = new URLSearchParams({
    pid: "web",
    utm_source: "web",
    utm_medium: "feature",
    utm_campaign: campaign,
    utm_term: lang,
    lang: lang,
    ...(deepLinkValue && { deep_link_value: deepLinkValue }),
    ...(options.email && { register_email: options.email }),
  });

  return `${baseUrl}?${params.toString()}`;
}
