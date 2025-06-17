"use client";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import Map from "react-map-gl/maplibre";
import { WIREFRAME_STYLE } from "@/mapStyle/mapStyle";
import { reverseGeocode } from "@/services/map";
import { LocationIcon } from "../common/Icons";
import Image from "next/image";

interface GeolocationData {
  latitude: number;
  longitude: number;
  city?: string;
  country?: string;
}

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

  const onMapLoad = useCallback(() => {
    setIsLoading(false);
  }, []);

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
          />
        )}
      </div>

      {/* {processedLocation?.city && (
        <div className="absolute top-[53%] right-[17%] z-20 transform">
          <div className="flex items-center gap-2.5 rounded-lg bg-[#ffffff1a] p-1.5 text-white backdrop-blur-[3px]">
            <LocationIcon />
            <b className="text-sm leading-normal text-white lg:text-base">
              {processedLocation.city}
              {processedLocation.country && `, ${processedLocation.country}`}
            </b>
          </div>
        </div>
      )} */}
    </>
  );
};

export default FieldServiceMap;
