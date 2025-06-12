"use client";
import React, { useState, useCallback, useMemo, useEffect } from "react";
import Map, { Source, Layer, NavigationControl } from "react-map-gl/maplibre";
import type { FeatureCollection } from "geojson";
import { WIREFRAME_STYLE } from "@/mapStyle/mapStyle";
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
  location?: MaxMindLocation;
}

const FieldServicesHero = (props?: Props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [location, setLocation] = useState({
    latitude: 28.6139, // Default to Delhi - this ensures map loads immediately
    longitude: 77.209,
    city: "",
    country: "",
  });

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          console.log("Latitude:", position.coords.latitude);
          console.log("Longitude:", position.coords.longitude);
          setLocation((prevLocation) => ({
            ...prevLocation, // Use functional update to avoid stale closure
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          }));
        },
        (error) => {
          console.error("Error getting location:", error);
          // Map will still work with Delhi default coordinates
        },
      );
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  }, []);

  // Process location data
  const processedLocation = useMemo(() => {
    const latitude = location?.latitude;
    const longitude = location?.longitude;

    return {
      latitude,
      longitude,
      city: location.city,
      country: location.country,
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
    ];

    // Use fixed seed for consistent positions - this prevents regeneration issues
    const fixedAngles = [0, 72, 144, 216, 288]; // Fixed angles for 5 users
    const fixedDistances = [0.015, 0.02, 0.018, 0.022, 0.017]; // Fixed distances

    return baseUsers.map((user, index) => {
      const angle = fixedAngles[index];
      const distance = fixedDistances[index];

      const offsetLat = distance * Math.sin((angle * Math.PI) / 180);
      const offsetLng = distance * Math.cos((angle * Math.PI) / 180);

      return {
        ...user,
        lat: processedLocation.latitude + offsetLat,
        lng: processedLocation.longitude + offsetLng,
      };
    });
  }, [processedLocation.latitude, processedLocation.longitude]); // Only depend on actual coordinates

  const onMapLoad = useCallback(() => {
    setIsLoading(false);
  }, []);

  const onMapError = useCallback((event: any) => {
    console.error("Map error:", event);
    setIsLoading(false);
  }, []);

  console.log(location, "location");
  console.log(mockUsers, "mockUsers - check coordinates"); // Debug log
  console.log(mockUsers, "mockUsers"); // Debug log to check if users are being generated

  return (
    <section className="relative overflow-hidden">
      {/* Map Background */}
      <div className="absolute inset-0 h-full w-full">
        {/* Black shadow overlay around the edges */}
        <div className="pointer-events-none absolute inset-0 z-10">
          <div className="absolute inset-0 shadow-[inset_0_0_150px_50px_rgba(0,0,0,0.8)]"></div>
        </div>

        {isLoading && (
          <div className="absolute inset-0 z-20 flex items-center justify-center bg-black">
            <div className="text-center">
              <div className="mx-auto mb-4 h-12 w-12 animate-spin rounded-full border-b-2 border-white"></div>
            </div>
          </div>
        )}

        {/* Always render map since we have default coordinates */}
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
          {mockUsers?.length > 0 &&
            mockUsers.map((user: any) => {
              // Add safety check for coordinates
              if (
                !user.lat ||
                !user.lng ||
                isNaN(user.lat) ||
                isNaN(user.lng)
              ) {
                console.warn(
                  `Invalid coordinates for user ${user.id}:`,
                  user.lat,
                  user.lng,
                );
                return null;
              }

              return (
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
                        "circle-radius": 25, // Increased size for better visibility
                        "circle-color": "#FFFFFF",
                        "circle-opacity": 0.95,
                        "circle-stroke-width": 3,
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
                        "circle-radius": 20, // Increased size
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
                        "text-size": 14, // Increased font size
                        "text-anchor": "center",
                      }}
                      paint={{
                        "text-color": "#FFFFFF",
                        "text-halo-color": "rgba(0,0,0,0.8)",
                        "text-halo-width": 2,
                        "text-opacity": 1,
                      }}
                    />
                  </Source>
                </div>
              );
            })}
        </Map>
      </div>

      {/* City Label - Middle Right */}
      {processedLocation.city && processedLocation.country && (
        <div className="absolute top-1/2 right-10 z-30 -translate-y-1/2 transform">
          <div className="flex items-center space-x-2 rounded-lg border border-gray-600 bg-[rgba(255,255,255,0.1)] px-4 py-2 text-white backdrop-blur-sm">
            <div className="h-2 w-2 rounded-full bg-white"></div>
            <span className="text-sm font-medium">
              {processedLocation.city}, {processedLocation.country}
            </span>
          </div>
        </div>
      )}

      {/* Gradient overlay for better text readability */}
      <div className="pointer-events-none absolute inset-0 z-15 bg-gradient-to-r from-black/60 via-black/20 to-transparent"></div>

      {/* Content overlay */}
      <div className="main-container 1xl:pb-[171px] relative z-30 pt-[393px] pb-10 sm:pb-16 md:pt-[110px] md:pb-20 lg:pb-[100px] xl:pt-[134px] xl:pb-[120px]">
        <div className="w-full max-w-[732px]">
          <div className="w-full rounded-md bg-[linear-gradient(90deg,_rgba(255,163,163,1)_0%,_rgba(255,163,163,0.59)_8%,_rgba(255,163,163,0)_80%)] p-[1px] sm:w-fit">
            <div className="rounded-md bg-[#333434] px-3 py-1 text-xs font-semibold tracking-[-0.24px] backdrop-filter-[1.50px]">
              <span className="text-secondary">
                Field Service Management Software
              </span>
            </div>
          </div>
          <h3 className="main-heading grey-gradient mt-2 sm:mt-0 sm:text-white">
            One command center to visualize and run your entire field operation
          </h3>
          <p className="hero-description !text-secondary md:!text-decemberSky mt-[6px] mb-4 max-w-[532px] sm:my-[26px]">
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
              <CardRequiredButton text="No credit card required" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FieldServicesHero;

// "use client";
// import React, { useState, useCallback, useMemo, useEffect } from "react";
// import Map, { Source, Layer, NavigationControl } from "react-map-gl/maplibre";
// import type { FeatureCollection } from "geojson";
// import {
//   ArrowIcon,
//   HeroAppStoreIcon,
//   HeroPlayStoreIcon,
// } from "../common/Icons";
// import Button from "../common/Button";
// import CardRequiredButton from "../common/CardRequiredButton";
// import { WIREFRAME_STYLE } from "@/mapStyle/mapStyle";

// interface MaxMindLocation {
//   city?: {
//     geoname_id: number;
//     names: {
//       en: string;
//       [key: string]: string;
//     };
//   };
//   continent?: {
//     code: string;
//     geoname_id: number;
//     names: {
//       en: string;
//       [key: string]: string;
//     };
//   };
//   country?: {
//     iso_code: string;
//     geoname_id: number;
//     names: {
//       en: string;
//       [key: string]: string;
//     };
//   };
//   location?: {
//     accuracy_radius: number;
//     latitude: number;
//     longitude: number;
//     time_zone: string;
//   };
//   postal?: {
//     code: string;
//   };
//   subdivisions?: Array<{
//     iso_code: string;
//     geoname_id: number;
//     names: {
//       en: string;
//       [key: string]: string;
//     };
//   }>;
//   traits?: {
//     autonomous_system_number?: number;
//     autonomous_system_organization?: string;
//     connection_type?: string;
//     isp?: string;
//     organization?: string;
//     ip_address?: string;
//     network?: string;
//   };
//   maxmind?: {
//     queries_remaining: number;
//   };
// }

// interface Props {
//   location: MaxMindLocation;
// }

// const FieldServicesHero = () => {
//   const [isLoading, setIsLoading] = useState(true);
//   const [location, setLocation] = useState({
//     latitude: 0,
//     longitude: 0,
//     city: "",
//     country: "",
//   });

//   useEffect(() => {
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(
//         (position) => {
//           console.log("Latitude:", position.coords.latitude);
//           console.log("Longitude:", position.coords.longitude);
//           setLocation({...location , latitude : position.coords.latitude  , longitude: position.coords.longitude})
//         },
//         (error) => {
//           console.error("Error getting location:", error);
//         },
//       );
//     } else {
//       console.log("Geolocation is not supported by this browser.");
//     }
//   }, []);
//   // Default location (Delhi, India)
//   // Process location data
//   const processedLocation = useMemo(() => {
//     const latitude = location?.latitude;
//     const longitude = location?.longitude;

//     return {
//       latitude,
//       longitude,
//       city: location.city,
//       country: location.country,
//     };
//   }, [location]);

//   // Generate dynamic user positions around the actual location
//   const mockUsers = useMemo(() => {
//     const baseUsers = [
//       { id: 1, name: "Mike Johnson", initials: "MJ", color: "#FF6B6B" },
//       { id: 2, name: "Sarah Wilson", initials: "SW", color: "#4ECDC4" },
//       { id: 3, name: "David Brown", initials: "DB", color: "#45B7D1" },
//       { id: 4, name: "Lisa Garcia", initials: "LG", color: "#96CEB4" },
//       { id: 5, name: "John Smith", initials: "JS", color: "#FFEAA7" },
//     ];
//  // Only generate positions if we have valid coordinates
//     if (!processedLocation?.latitude || !processedLocation?.longitude) {
//       return [];
//     }
//     // Generate positions within a radius around the actual location
//     return baseUsers.map((user, index) => {
//       // Create a circle of positions around the center
//       const angle = index * 36 + (Math.random() * 20 - 10); // 36 degrees apart with some randomness
//       const distance = 0.01 + Math.random() * 0.035; // 0.01 to 0.025 degrees (~1-3km radius)

//       const offsetLat = distance * Math.sin((angle * Math.PI) / 180);
//       const offsetLng = distance * Math.cos((angle * Math.PI) / 180);

//       if (processedLocation?.latitude && processedLocation?.longitude) {
//         return {
//           ...user,
//           lat: processedLocation?.latitude + offsetLat,
//           lng: processedLocation?.longitude + offsetLng,
//         };
//       }
//     });
//   }, [processedLocation]);

//   const onMapLoad = useCallback(() => {
//     setIsLoading(false);
//   }, []);

//   const onMapError = useCallback((event: any) => {
//     console.error("Map error:", event);
//     setIsLoading(false);
//   }, []);
//   console.log(processedLocation, "location");
//   return (
//     <section className="relative overflow-hidden">
//       {/* Map Background */}
//       <div className="absolute inset-0 h-full w-full">
//         {isLoading && (
//           <div className="absolute inset-0 z-10 flex items-center justify-center bg-black">
//             <div className="text-center">
//               <div className="mx-auto mb-4 h-12 w-12 animate-spin rounded-full border-b-2 border-white"></div>
//               {/* <p className="text-white">Loading field operations...</p> */}
//             </div>
//           </div>
//         )}

//         {location?.latitude || location?.longitude && (
//           <Map
//             initialViewState={{
//               longitude: processedLocation?.longitude,
//               latitude: processedLocation?.latitude,
//               zoom: 13,
//               pitch: 0,
//               bearing: 0,
//             }}
//             style={{
//               width: "100%",
//               height: "100%",
//               opacity: isLoading ? 0 : 1,
//               transition: "opacity 0.5s ease-in-out",
//             }}
//             mapStyle={WIREFRAME_STYLE}
//             onLoad={onMapLoad}
//             onError={onMapError}
//             maxZoom={16}
//             minZoom={8}
//             attributionControl={false}
//             interactive={false} // Disable map interaction for hero section
//           >
//             {/* User Profile Pins */}
//             {mockUsers?.length > 0 &&
//               mockUsers.map((user: any) => (
//                 <div key={user.id}>
//                   {/* Pin Background Circle */}
//                   <Source
//                     id={`user-bg-${user.id}`}
//                     type="geojson"
//                     data={{
//                       type: "FeatureCollection",
//                       features: [
//                         {
//                           type: "Feature",
//                           geometry: {
//                             type: "Point",
//                             coordinates: [user.lng, user.lat],
//                           },
//                           properties: {},
//                         },
//                       ],
//                     }}
//                   >
//                     <Layer
//                       id={`user-bg-layer-${user.id}`}
//                       type="circle"
//                       paint={{
//                         "circle-radius": 20,
//                         "circle-color": "#FFFFFF",
//                         "circle-opacity": 0.9,
//                         "circle-stroke-width": 2,
//                         "circle-stroke-color": user.color,
//                         "circle-stroke-opacity": 1,
//                       }}
//                     />
//                   </Source>

//                   {/* Profile Picture Circle */}
//                   <Source
//                     id={`user-profile-${user.id}`}
//                     type="geojson"
//                     data={{
//                       type: "FeatureCollection",
//                       features: [
//                         {
//                           type: "Feature",
//                           geometry: {
//                             type: "Point",
//                             coordinates: [user.lng, user.lat],
//                           },
//                           properties: {},
//                         },
//                       ],
//                     }}
//                   >
//                     <Layer
//                       id={`user-profile-layer-${user.id}`}
//                       type="circle"
//                       paint={{
//                         "circle-radius": 16,
//                         "circle-color": user.color,
//                         "circle-opacity": 1,
//                       }}
//                     />
//                   </Source>

//                   {/* User Initials */}
//                   <Source
//                     id={`user-text-${user.id}`}
//                     type="geojson"
//                     data={{
//                       type: "FeatureCollection",
//                       features: [
//                         {
//                           type: "Feature",
//                           geometry: {
//                             type: "Point",
//                             coordinates: [user.lng, user.lat],
//                           },
//                           properties: {
//                             initials: user.initials,
//                           },
//                         },
//                       ],
//                     }}
//                   >
//                     <Layer
//                       id={`user-text-layer-${user.id}`}
//                       type="symbol"
//                       layout={{
//                         "text-field": ["get", "initials"],
//                         "text-font": ["Noto Sans Bold"],
//                         "text-size": 12,
//                         "text-anchor": "center",
//                       }}
//                       paint={{
//                         "text-color": "#FFFFFF",
//                         "text-halo-color": "rgba(0,0,0,0.3)",
//                         "text-halo-width": 1,
//                       }}
//                     />
//                   </Source>
//                 </div>
//               ))}
//           </Map>
//         )}
//       </div>

//       {/* City Label - Middle Right */}
//       {processedLocation.city && processedLocation.country && (
//         <div className="absolute top-1/2 right-10 z-20 -translate-y-1/2 transform">
//           <div className="flex items-center space-x-2 rounded-lg border border-gray-600 bg-[rgba(255,255,255,0.1)] px-4 py-2 text-white backdrop-blur-sm">
//             <div className="h-2 w-2 rounded-full bg-white"></div>
//             <span className="text-sm font-medium">
//               {processedLocation.city}, {processedLocation.country}
//             </span>
//           </div>
//         </div>
//       )}
//       {/* Gradient overlay for better text readability */}
//       <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent"></div>

//       {/* Content overlay */}
//       <div className="main-container 1xl:pb-[150px] relative z-20 pt-[393px] pb-11 sm:pb-16 md:pt-[110px] md:pb-20 lg:pb-[100px] xl:pt-[134px] xl:pb-[120px]">
//         <div className="w-full max-w-[732px]">
//           <div className="w-fit rounded-md bg-[linear-gradient(90deg,_rgba(255,163,163,1)_0%,_rgba(255,163,163,0.59)_8%,_rgba(255,163,163,0)_80%)] p-[1px]">
//             <div className=" rounded-md bg-[#333434] px-3 py-1 text-xs font-semibold tracking-[-0.24px]">
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
//               <CardRequiredButton text="No CC" />
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default FieldServicesHero;
