export const getMaxMindLocation = async (ip?: string) => {
  const accountId = process.env.NEXT_PUBLIC_API_MAXMIND_ID;
  const licenseKey = process.env.NEXT_PUBLIC_API_MAXMIND_KEY;

  if (!accountId || !licenseKey) {
    console.error("MaxMind credentials are missing.");
    return null;
  }

  const target = ip !== "::1" ? ip : "me"; // if IP is undefined, fallback to "me"
  const encodedCreds = Buffer.from(`${accountId}:${licenseKey}`).toString("base64");

  try {
    const response = await fetch(`https://geoip.maxmind.com/geoip/v2.1/city/${target}`, {
      headers: {
        Authorization: `Basic ${encodedCreds}`,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      console.error("Failed to fetch from MaxMind:", await response.text());
      return null;
    }

    return await response.json();
  } catch (err) {
    console.error("Error calling MaxMind:", err);
    return null;
  }
};

