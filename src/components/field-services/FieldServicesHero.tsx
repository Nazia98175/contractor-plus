"use client";
import React, { useState, useCallback, useMemo } from "react";
import Map, { Source, Layer, NavigationControl } from "react-map-gl/maplibre";
import type { FeatureCollection } from "geojson";
import type { StyleSpecification } from "maplibre-gl";
import {
  ArrowIcon,
  HeroAppStoreIcon,
  HeroPlayStoreIcon,
} from "../common/Icons";
import Button from "../common/Button";
import CardRequiredButton from "../common/CardRequiredButton";

interface MaxMindLocation {
  city?: {
    geoname_id: number;
    names: {
      en: string;
      [key: string]: string;
    };
  };
  continent?: {
    code: string;
    geoname_id: number;
    names: {
      en: string;
      [key: string]: string;
    };
  };
  country?: {
    iso_code: string;
    geoname_id: number;
    names: {
      en: string;
      [key: string]: string;
    };
  };
  location?: {
    accuracy_radius: number;
    latitude: number;
    longitude: number;
    time_zone: string;
  };
  postal?: {
    code: string;
  };
  subdivisions?: Array<{
    iso_code: string;
    geoname_id: number;
    names: {
      en: string;
      [key: string]: string;
    };
  }>;
  traits?: {
    autonomous_system_number?: number;
    autonomous_system_organization?: string;
    connection_type?: string;
    isp?: string;
    organization?: string;
    ip_address?: string;
    network?: string;
  };
  maxmind?: {
    queries_remaining: number;
  };
}

interface Props {
  location: MaxMindLocation;
}
// Dark wireframe map style from MapComponent
const WIREFRAME_STYLE: StyleSpecification = {
  version: 8,
  sources: {
    openmaptiles: {
      type: "vector",
      url: "https://tiles.openfreemap.org/planet",
    },
  },
  sprite: "https://tiles.openfreemap.org/sprites/ofm_f384/ofm",
  glyphs: "https://tiles.openfreemap.org/fonts/{fontstack}/{range}.pbf",
  layers: [
    {
      id: "background",
      type: "background",
      paint: {
        "background-color": "rgb(8,8,8)",
      },
    },
    {
      id: "water",
      type: "fill",
      source: "openmaptiles",
      "source-layer": "water",
      filter: [
        "all",
        ["match", ["geometry-type"], ["MultiPolygon", "Polygon"], true, false],
      ],
      paint: {
        "fill-color": "rgb(12,12,12)",
        "fill-outline-color": "rgb(25,25,25)",
      },
    },
    {
      id: "roads_major",
      type: "line",
      source: "openmaptiles",
      "source-layer": "transportation",
      filter: [
        "all",
        [
          "match",
          ["geometry-type"],
          ["LineString", "MultiLineString"],
          true,
          false,
        ],
        [
          "match",
          ["get", "class"],
          ["motorway", "trunk", "primary"],
          true,
          false,
        ],
      ],
      layout: {
        "line-cap": "round",
        "line-join": "round",
      },
      paint: {
        "line-color": "rgb(120,120,120)",
        "line-width": ["interpolate", ["linear"], ["zoom"], 8, 2, 12, 4, 16, 8],
        "line-opacity": 0.9,
      },
    },
    {
      id: "roads_secondary",
      type: "line",
      source: "openmaptiles",
      "source-layer": "transportation",
      filter: [
        "all",
        [
          "match",
          ["geometry-type"],
          ["LineString", "MultiLineString"],
          true,
          false,
        ],
        ["match", ["get", "class"], ["secondary", "tertiary"], true, false],
      ],
      layout: {
        "line-cap": "round",
        "line-join": "round",
      },
      paint: {
        "line-color": "rgb(90,90,90)",
        "line-width": [
          "interpolate",
          ["linear"],
          ["zoom"],
          8,
          1.5,
          12,
          3,
          16,
          6,
        ],
        "line-opacity": 0.8,
      },
    },
    {
      id: "roads_minor",
      type: "line",
      source: "openmaptiles",
      "source-layer": "transportation",
      filter: [
        "all",
        [
          "match",
          ["geometry-type"],
          ["LineString", "MultiLineString"],
          true,
          false,
        ],
        ["match", ["get", "class"], ["minor", "service", "track"], true, false],
      ],
      layout: {
        "line-cap": "round",
        "line-join": "round",
      },
      paint: {
        "line-color": "rgb(70,70,70)",
        "line-width": [
          "interpolate",
          ["linear"],
          ["zoom"],
          10,
          1,
          12,
          2,
          16,
          4,
        ],
        "line-opacity": 0.7,
      },
    },
    {
      id: "roads_residential",
      type: "line",
      source: "openmaptiles",
      "source-layer": "transportation",
      filter: [
        "all",
        [
          "match",
          ["geometry-type"],
          ["LineString", "MultiLineString"],
          true,
          false,
        ],
        ["match", ["get", "class"], ["residential"], true, false],
      ],
      layout: {
        "line-cap": "round",
        "line-join": "round",
      },
      paint: {
        "line-color": "rgb(60,60,60)",
        "line-width": ["interpolate", ["linear"], ["zoom"], 12, 1, 16, 3],
        "line-opacity": 0.6,
      },
    },
    {
      id: "building_outline",
      type: "line",
      source: "openmaptiles",
      "source-layer": "building",
      minzoom: 14,
      filter: [
        "match",
        ["geometry-type"],
        ["MultiPolygon", "Polygon"],
        true,
        false,
      ],
      paint: {
        "line-color": "rgb(35,35,35)",
        "line-width": 0.5,
        "line-opacity": 0.4,
      },
    },
  ],
};

const FieldServicesHero = ({ location }: Props) => {
  const [isLoading, setIsLoading] = useState(true);

  // Default location (Delhi, India)
  // Process location data
  const processedLocation = useMemo(() => {
    const latitude = location.location?.latitude;
    const longitude = location.location?.longitude;

    return {
      latitude,
      longitude,
      city: location.city?.names?.en,
      country: location.country?.iso_code,
    };
  }, [location]);

  // Generate dynamic user positions around the actual location
  const mockUsers = useMemo(() => {
    const baseUsers = [
      { id: 1, name: "Mike Johnson", initials: "MJ", color: "#FF6B6B" },
      { id: 2, name: "Sarah Wilson", initials: "SW", color: "#4ECDC4" },
      { id: 3, name: "David Brown", initials: "DB", color: "#45B7D1" },
      { id: 4, name: "Lisa Garcia", initials: "LG", color: "#96CEB4" },
      { id: 5, name: "John Smith", initials: "JS", color: "#FFEAA7" },
      // { id: 6, name: "Maria Lopez", initials: "ML", color: "#DDA0DD" },
      // { id: 7, name: "Robert Davis", initials: "RD", color: "#98D8C8" },
      // { id: 8, name: "Jennifer White", initials: "JW", color: "#F7DC6F" },
      // { id: 9, name: "Alex Turner", initials: "AT", color: "#BB8FCE" },
      // { id: 10, name: "Emma Davis", initials: "ED", color: "#85C1E9" },
    ];

    // Generate positions within a radius around the actual location
    return baseUsers.map((user, index) => {
      // Create a circle of positions around the center
      const angle = index * 36 + (Math.random() * 20 - 10); // 36 degrees apart with some randomness
      const distance = 0.01 + Math.random() * 0.035; // 0.01 to 0.025 degrees (~1-3km radius)

      const offsetLat = distance * Math.sin((angle * Math.PI) / 180);
      const offsetLng = distance * Math.cos((angle * Math.PI) / 180);

      if (processedLocation?.latitude && processedLocation?.longitude) {
        return {
          ...user,
          lat: processedLocation?.latitude + offsetLat,
          lng: processedLocation?.longitude + offsetLng,
        };
      }
    });
  }, [processedLocation]);

  const onMapLoad = useCallback(() => {
    setIsLoading(false);
  }, []);

  const onMapError = useCallback((event: any) => {
    console.error("Map error:", event);
    setIsLoading(false);
  }, []);
  console.log(location, "location");
  return (
    <section className="relative overflow-hidden">
      {/* Map Background */}
      <div className="absolute inset-0 h-full w-full">
        {isLoading && (
          <div className="absolute inset-0 z-10 flex items-center justify-center bg-black">
            <div className="text-center">
              <div className="mx-auto mb-4 h-12 w-12 animate-spin rounded-full border-b-2 border-white"></div>
              {/* <p className="text-white">Loading field operations...</p> */}
            </div>
          </div>
        )}

        {location && (
          <Map
            initialViewState={{
              longitude: processedLocation.longitude,
              latitude: processedLocation.latitude,
              zoom: 13,
              pitch: 0,
              bearing: 0,
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
            interactive={false} // Disable map interaction for hero section
          >
            {/* User Profile Pins */}
            {mockUsers?.length > 0 && mockUsers.map((user:any) => (
              <div key={user.id}>
                {/* Pin Background Circle */}
                <Source
                  id={`user-bg-${user.id}`}
                  type="geojson"
                  data={{
                    type: "FeatureCollection",
                    features: [
                      {
                        type: "Feature",
                        geometry: {
                          type: "Point",
                          coordinates: [user.lng, user.lat],
                        },
                        properties: {},
                      },
                    ],
                  }}
                >
                  <Layer
                    id={`user-bg-layer-${user.id}`}
                    type="circle"
                    paint={{
                      "circle-radius": 20,
                      "circle-color": "#FFFFFF",
                      "circle-opacity": 0.9,
                      "circle-stroke-width": 2,
                      "circle-stroke-color": user.color,
                      "circle-stroke-opacity": 1,
                    }}
                  />
                </Source>

                {/* Profile Picture Circle */}
                <Source
                  id={`user-profile-${user.id}`}
                  type="geojson"
                  data={{
                    type: "FeatureCollection",
                    features: [
                      {
                        type: "Feature",
                        geometry: {
                          type: "Point",
                          coordinates: [user.lng, user.lat],
                        },
                        properties: {},
                      },
                    ],
                  }}
                >
                  <Layer
                    id={`user-profile-layer-${user.id}`}
                    type="circle"
                    paint={{
                      "circle-radius": 16,
                      "circle-color": user.color,
                      "circle-opacity": 1,
                    }}
                  />
                </Source>

                {/* User Initials */}
                <Source
                  id={`user-text-${user.id}`}
                  type="geojson"
                  data={{
                    type: "FeatureCollection",
                    features: [
                      {
                        type: "Feature",
                        geometry: {
                          type: "Point",
                          coordinates: [user.lng, user.lat],
                        },
                        properties: {
                          initials: user.initials,
                        },
                      },
                    ],
                  }}
                >
                  <Layer
                    id={`user-text-layer-${user.id}`}
                    type="symbol"
                    layout={{
                      "text-field": ["get", "initials"],
                      "text-font": ["Noto Sans Bold"],
                      "text-size": 12,
                      "text-anchor": "center",
                    }}
                    paint={{
                      "text-color": "#FFFFFF",
                      "text-halo-color": "rgba(0,0,0,0.3)",
                      "text-halo-width": 1,
                    }}
                  />
                </Source>
              </div>
            ))}
          </Map>
        )}
      </div>

{/* City Label - Middle Right */}
      {processedLocation.city && processedLocation.country && (
        <div className="absolute top-1/2 right-10 transform -translate-y-1/2 z-20">
          <div className="bg-[rgba(255,255,255,0.1)] backdrop-blur-sm text-white px-4 py-2 rounded-lg border border-gray-600 flex items-center space-x-2">
            <div className="w-2 h-2 bg-white rounded-full"></div>
            <span className="text-sm font-medium">
              {processedLocation.city}, {processedLocation.country}
            </span>
          </div>
        </div>
      )}
      {/* Gradient overlay for better text readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent"></div>

      {/* Content overlay */}
      <div className="main-container 1xl:pb-[150px] relative z-20 pt-[393px] pb-11 sm:pb-16 md:pt-[110px] md:pb-20 lg:pb-[100px] xl:pt-[134px] xl:pb-[120px]">
        <div className="w-full max-w-[732px]">
          <div className="w-fit rounded-md bg-[linear-gradient(90deg,_rgba(255,163,163,1)_0%,_rgba(255,163,163,0.59)_8%,_rgba(255,163,163,0)_80%)] p-[1px]">
            <div className="font-jakarta rounded-md bg-[#333434] px-3 py-1 text-xs font-semibold tracking-[-0.24px]">
              <span className="text-secondary">
                Field Service Management Software
              </span>
            </div>
          </div>
          <h3 className="main-heading gradient-white sm:text-white">
            One command center to visualize and run your entire field operation
          </h3>
          <p className="hero-description mt-[6px] mb-4 sm:my-[26px]">
            Contractor+ brings job scheduling, dispatch, crew visibility, and
            communication into one live hub for office & field teams.
          </p>
          <div className="flex w-full flex-col-reverse items-center gap-2.5 sm:flex-row">
            <div className="flex items-center gap-2.5">
              <button>
                <HeroPlayStoreIcon />
              </button>
              <button>
                <HeroAppStoreIcon />
              </button>
            </div>
            <div className="flex w-full flex-col items-center justify-center gap-[6px] sm:w-fit">
              <Button variant="primary">
                <span className="hidden sm:flex">Get started FREE</span>
                <span className="flex sm:hidden">Download FREE App</span>
                <ArrowIcon fill="white" className="hidden sm:block" />
              </Button>
              <CardRequiredButton />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FieldServicesHero;

// import {
//   ArrowIcon,
//   HeroAppStoreIcon,
//   HeroPlayStoreIcon,
// } from "../common/Icons";
// import Button from "../common/Button";
// import CardRequiredButton from "../common/CardRequiredButton";

// const FieldServicesHero = () => {
//   return (
//     <section>
//       <div className="main-container 1xl:pb-[150px] relative z-20 pt-[393px] pb-11 sm:pb-16 md:pt-[110px] md:pb-20 lg:pb-[100px] xl:pt-[134px] xl:pb-[120px]">
//         <div className="w-full max-w-[732px]">
//           <div className="w-fit rounded-md bg-[linear-gradient(90deg,_rgba(255,163,163,1)_0%,_rgba(255,163,163,0.59)_8%,_rgba(255,163,163,0)_80%)] p-[1px]">
//             <div className="font-jakarta rounded-md bg-[#333434] px-3 py-1 text-xs font-semibold tracking-[-0.24px]">
//               <span className="text-secondary">
//                 Field Service Management Software
//               </span>
//             </div>
//           </div>
//           <h3 className="main-heading gradient-white sm:text-white">
//             One command center to visualize and run your entire field operation
//           </h3>
//           <p className="hero-description mt-[6px] mb-4 sm:my-[26px]">
//             Contractor+ brings job scheduling, dispatch, crew visibility, and
//             communication into one live hub for office & field teams.
//           </p>
//           <div className="flex w-full flex-col-reverse items-center gap-2.5 sm:flex-row">
//             <div className="flex items-center gap-2.5">
//               <button>
//                 <HeroPlayStoreIcon />
//               </button>
//               <button>
//                 <HeroAppStoreIcon />
//               </button>
//             </div>
//             <div className="flex w-full flex-col items-center justify-center gap-[6px] sm:w-fit">
//               <Button variant="primary">
//                 <span className="hidden sm:flex">Get started FREE</span>
//                 <span className="flex sm:hidden">Download FREE App</span>
//                 <ArrowIcon fill="white" className="hidden sm:block" />
//               </Button>
//               <CardRequiredButton />
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default FieldServicesHero;
