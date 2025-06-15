import axios from "axios";

export const getUserLoc = async () => {
  try {
    const credentials = `${process.env.NEXT_PUBLIC_API_MAXMIND_ID}:${process.env.NEXT_PUBLIC_API_MAXMIND_KEY}`;
    const encoded = Buffer.from(credentials).toString("base64");

    const response = await axios.get(
      "https://geoip.maxmind.com/geoip/v2.1/city/me?pretty",
      {
        headers: {
          Authorization: `Basic ${encoded}`,
        },
      },
    );

    // console.log(response.data);
    return response.data;
  } catch (error: any) {
    console.error("Error fetching user location:", error);
  }
};

// Reverse geocoding function using alternative free service
export const reverseGeocode = async (latitude: number, longitude: number) => {
  try {
    // Using OpenStreetMap Nominatim (free alternative)
    const response = await fetch(
      `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}&zoom=10&addressdetails=1`,
      {
        headers: {
          "User-Agent": "YourApp/1.0", // Required by Nominatim
        },
      },
    );

    if (!response.ok) {
      throw new Error("Geocoding request failed");
    }

    const data = await response.json();

    if (data && data.address) {
      const address = data.address;

      // Extract city name (try multiple fields for best result)
      const city =
        address.city ||
        address.town ||
        address.village ||
        address.suburb ||
        address.neighbourhood ||
        address.hamlet ||
        data.display_name?.split(",")[0] ||
        "Your Location";

      // Extract country code
      const country = address.country_code?.toUpperCase() || "";

      return { city, country };
    }

    return { city: "Your Location", country: "" };
  } catch (error) {
    console.error("Reverse geocoding error:", error);

    // Fallback: Try alternative service (BigDataCloud - also free)
    try {
      const fallbackResponse = await fetch(
        `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`,
      );

      if (fallbackResponse.ok) {
        const fallbackData = await fallbackResponse.json();
        return {
          city: fallbackData.city || fallbackData.locality || "Your Location",
          country: fallbackData.countryCode || "",
        };
      }
    } catch (fallbackError) {
      console.error("Fallback geocoding also failed:", fallbackError);
    }

    return { city: "Your Location", country: "" };
  }
};
