"use client";
import { WIREFRAME_STYLE } from "@/mapStyle/mapStyle";
import React from "react";
import Map from "react-map-gl/maplibre";


interface GeolocationData {
  latitude: number;
  longitude: number;
  city?: string;
  country?: string;
}

const FieldServiceMap: React.FC<{
  location: GeolocationData | null;
  isLoading?: boolean;
  mapKey: number;
  onMapLoad: () => void;
  onMapError: (event: any) => void;
}> = ({ location, isLoading, mapKey, onMapLoad, onMapError }) => {
  return (
    <>
      <div className="absolute inset-0 h-full w-full">
        {(isLoading || !location) && (
          <div className="absolute inset-0 z-0 flex items-center justify-center bg-black">
            <div className="text-center">
              <div className="mx-auto mb-4 h-12 w-12 animate-spin rounded-full border-b-2 border-white"></div>
              {/* <p className="text-white">Getting your location...</p> */}
            </div>
          </div>
        )}

        {location && (
          <Map
            key={mapKey}
            initialViewState={{
              longitude: location.longitude,
              latitude: location.latitude,
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
    </>
  );
};

export default FieldServiceMap;
