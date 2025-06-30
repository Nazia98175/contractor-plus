export const reverseGeocode = async (latitude: number, longitude: number) => {
  try {
    // 1. Try MapBox first (most reliable)
    if (process.env.NEXT_PUBLIC_MAPBOX_TOKEN) {
      try {
        const mapboxResponse = await fetch(
          `https://api.mapbox.com/geocoding/v5/mapbox.places/${longitude},${latitude}.json?access_token=${process.env.NEXT_PUBLIC_MAPBOX_TOKEN}&types=place,locality,neighborhood`
        );

        if (mapboxResponse.ok) {
          const mapboxData = await mapboxResponse.json();
          if (mapboxData.features && mapboxData.features.length > 0) {
            const feature = mapboxData.features[0];
            
            // Extract city from Mapbox response
            let city = '';
            let country = '';
            
            // Look through context array for place/locality
            if (feature.context) {
              const placeContext = feature.context.find((ctx: any) => 
                ctx.id.startsWith('place.') 
              // || ctx.id.startsWith('locality.')
              );
              if (placeContext) {
                city = placeContext.text;
              }
              
              // Find country
              const countryContext = feature.context.find((ctx: any) => 
                ctx.id.startsWith('country.')
              );
              if (countryContext) {
                country = countryContext.short_code?.toUpperCase() || '';
              }
            }
            
            // If no context, use the main feature text
            if (city === '' && feature.text) {
              city = feature.text;
            }
            
            // Try to get country from properties
            if (!country && feature.properties) {
              country = feature.properties.short_code?.toUpperCase() || '';
            }

            return {
              city,
              country,
              source: 'mapbox'
            };
          }
        }
      } catch (mapboxError) {
        console.error('Mapbox geocoding failed:', mapboxError);
      }
    }

    // 2. Try OpenStreetMap Nominatim as fallback
    try {
      const nominatimResponse = await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}&zoom=10&addressdetails=1`,
        {
          headers: {
            "User-Agent": "YourApp/1.0", // Required by Nominatim
          },
        }
      );

      if (nominatimResponse.ok) {
        const nominatimData = await nominatimResponse.json();

        if (nominatimData && nominatimData.address) {
          const address = nominatimData.address;

          // Extract city name (try multiple fields for best result)
          const city = address.city ||
                      address.town ||
                      address.village ||
                      address.suburb ||
                      address.neighbourhood ||
                      address.hamlet ||
                      nominatimData.display_name?.split(",")[0] ||
                      "Your Location";

          // Extract country code
          const country = address.country_code?.toUpperCase() || "";

          return { 
            city, 
            country, 
            source: 'nominatim' 
          };
        }
      }
    } catch (nominatimError) {
      console.error("Nominatim geocoding failed:", nominatimError);
    }

    // 3. Try BigDataCloud as final fallback
    try {
      const bigDataResponse = await fetch(
        `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`
      );

      if (bigDataResponse.ok) {
        const bigDataData = await bigDataResponse.json();
        return {
          city: bigDataData.city || bigDataData.locality || "Your Location",
          country: bigDataData.countryCode?.toUpperCase() || "",
          source: 'bigdatacloud'
        };
      }
    } catch (bigDataError) {
      console.error("BigDataCloud geocoding failed:", bigDataError);
    }

    // If all services fail
    return { 
      city: "Your Location", 
      country: "", 
      source: 'fallback' 
    };

  } catch (error) {
    console.error("Reverse geocoding error:", error);
    return { 
      city: "Your Location", 
      country: "", 
      source: 'error' 
    };
  }
};
