export function generateDeepLink(
  path: string, // e.g. "crm", "industry/hvac", etc.
  lang: string = "en",
  device: string = "web",
  pid: string = "web",
) {
  const base = "https://contractorplus.onelink.me/ekwH/homebuttons";

  const deepLinkValue = `${lang}/${path}`; // ✅ includes locale like en/crm

  const params = new URLSearchParams({
    pid,
    lang,
    utm_source: device,
    utm_medium: "deep_link",
    utm_campaign: path.replace(/\//g, "-"),
    utm_term: lang,
    deep_link_value: deepLinkValue,
  });

  return `${base}?${params.toString()}`;
}
