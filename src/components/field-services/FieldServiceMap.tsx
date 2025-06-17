"use client";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import Map, { Layer, Source } from "react-map-gl/maplibre";
import { WIREFRAME_STYLE } from "@/mapStyle/mapStyle";
import { reverseGeocode } from "@/services/map";
import { LocationIcon } from "../common/Icons";

interface GeolocationData {
  latitude: number;
  longitude: number;
  city?: string;
  country?: string;
}

interface MockUser {
  id: number;
  name: string;
  initials: string;
  color: string;
  imgUrl: string;
  lat?: number;
  lng?: number;
}

const BASE_MOCK_USERS: MockUser[] = [
  {
    id: 1,
    name: "Mike Johnson",
    initials: "MJ",
    color: "#FF6B6B",
    imgUrl: "/images/png/location-1.png",
  },
  {
    id: 2,
    name: "Sarah Wilson",
    initials: "SW",
    color: "#4ECDC4",
    imgUrl: "/images/png/location-2.png",
  },
  {
    id: 3,
    name: "David Brown",
    initials: "DB",
    color: "#45B7D1",
    imgUrl: "/images/png/location-3.png",
  },
  {
    id: 4,
    name: "Lisa Garcia",
    initials: "LG",
    color: "#96CEB4",
    imgUrl: "/images/png/location-4.png",
  },
  {
    id: 5,
    name: "John Smith",
    initials: "JS",
    color: "#FFEAA7",
    imgUrl: "/images/png/location-5.png",
  },
];

const DEFAULT_LOCATION: GeolocationData = {
  latitude: 28.6139,
  longitude: 77.209,
  city: "Delhi",
  country: "IN",
};

const FieldServiceMap: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [location, setLocation] = useState<GeolocationData | null>(null);
  const [mapKey, setMapKey] = useState(0);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          const { city, country } = await reverseGeocode(latitude, longitude);

          setLocation({ latitude, longitude, city, country });
          setMapKey((prev) => prev + 1);
        },
        (error) => {
          console.error("Error getting location:", error);
          setLocation(DEFAULT_LOCATION);
          setMapKey((prev) => prev + 1);
        },
        {
          enableHighAccuracy: true,
          timeout: 10000,
          maximumAge: 600000,
        },
      );
    } else {
      setLocation(DEFAULT_LOCATION);
      setMapKey((prev) => prev + 1);
    }
  }, []);

  const processedLocation = useMemo(() => {
    if (!location) return null;
    return {
      latitude: location.latitude,
      longitude: location.longitude,
      city: location.city,
      country: location.country,
    };
  }, [location]);

  const mockUsers = useMemo(() => {
    if (!processedLocation?.latitude || !processedLocation?.longitude)
      return [];

    return BASE_MOCK_USERS.map((user, index) => {
      const angle = index * 36 + (Math.random() * 20 - 10);
      const distance = 0.01 + Math.random() * 0.035;
      const offsetLat = distance * Math.sin((angle * Math.PI) / 180);
      const offsetLng = distance * Math.cos((angle * Math.PI) / 180);

      return {
        ...user,
        lat: processedLocation.latitude + offsetLat,
        lng: processedLocation.longitude + offsetLng,
      };
    });
  }, [processedLocation]);

  const onMapLoad = useCallback(
    (event: any) => {
      const map = event.target;

      mockUsers.forEach((user) => {
        if (!map.hasImage(`user-icon-${user.id}`)) {
          const img = new Image(84, 90);
          img.src = user.imgUrl;
          img.onload = () => {
            if (!map.hasImage(`user-icon-${user.id}`)) {
              map.addImage(`user-icon-${user.id}`, img, { pixelRatio: 2 });
            }
          };
        }
      });

      setIsLoading(false);
    },
    [mockUsers],
  );

  const onMapError = useCallback((event: any) => {
    console.error("Map error:", event);
    setIsLoading(false);
  }, []);

  return (
    <>
      <div className="absolute inset-0 h-full w-full">
        {(isLoading || !location) && (
          <div className="absolute inset-0 z-10 flex items-center justify-center bg-black">
            <div className="text-center">
              <div className="mx-auto mb-4 h-12 w-12 animate-spin rounded-full border-b-2 border-white"></div>
              <p className="text-white">Getting your location...</p>
            </div>
          </div>
        )}

        {location && (
          <Map
            key={mapKey}
            initialViewState={{
              longitude: processedLocation?.longitude,
              latitude: processedLocation?.latitude,
              zoom: 13,
            }}
            style={{
              width: "100%",
              height: "100%",
              opacity: isLoading ? 0 : 1,
              transition: "opacity 0.5s ease-in-out",
            }}
            mapStyle={WIREFRAME_STYLE}
            onLoad={onMapLoad}
            onError={onMapError}
            maxZoom={16}
            minZoom={8}
            attributionControl={false}
            interactive={false}
          >
            {mockUsers.map((user) => (
              <Source
                key={user.id}
                id={`user-icon-${user.id}-src`}
                type="geojson"
                data={{
                  type: "FeatureCollection",
                  features: [
                    {
                      type: "Feature",
                      geometry: {
                        type: "Point",
                        coordinates: [user.lng!, user.lat!],
                      },
                      properties: {
                        icon: `user-icon-${user.id}`,
                      },
                    },
                  ],
                }}
              >
                <Layer
                  id={`user-icon-${user.id}-layer`}
                  type="symbol"
                  layout={{
                    "icon-image": ["get", "icon"],
                    "icon-size": 1,
                    "icon-allow-overlap": true,
                    "icon-anchor": "bottom",
                    "icon-offset": [0, 0],
                  }}
                />
              </Source>
            ))}
          </Map>
        )}
      </div>

      {processedLocation?.city && (
        <div className="absolute top-1/2 right-10 z-20 -translate-y-1/2 transform">
          <div className="flex items-center gap-2.5 rounded-lg bg-[#ffffff1a] p-1.5 text-white backdrop-blur-[3px]">
            <LocationIcon />
            <b className="text-sm leading-normal text-white lg:text-base">
              {processedLocation.city}
              {processedLocation.country && `, ${processedLocation.country}`}
            </b>
          </div>
        </div>
      )}

      <div className="pointer-events-none absolute inset-0"></div>
    </>
  );
};

export default FieldServiceMap;
