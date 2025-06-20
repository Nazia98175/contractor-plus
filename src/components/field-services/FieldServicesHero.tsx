"use client";
import React from "react";
import Button from "../common/Button";
import CardRequiredButton from "../common/CardRequiredButton";
import {
  ArrowIcon,
  HeroAppStoreIcon,
  HeroPlayStoreIcon,
} from "../common/Icons";
import FieldServiceMap from "./FieldServiceMap";
import Image from "next/image";
import TextAnimation from "../common/TextAnimation";
import CardReveal from "../common/CardReveal";

interface GeolocationData {
  latitude: number;
  longitude: number;
  city?: string;
  country?: string;
}
interface heroProps {
  heroTitle: string;
  heroTitle1: string;
  heroDescription: string;
  ncc_txt: string;
  mobileBtn: string;
  createBtn: string;
}
interface Props {
  hero: heroProps;
}

const FieldServicesHero: React.FC<Props> = ({ hero }) => {
  return (
    <section className="relative overflow-visible">
      <div className="bg-black-fade-new lg:border-kuroiBlack absolute top-0 left-0 z-10 h-full w-full bg-cover lg:top-1/2 lg:left-1/2 lg:h-[150%] lg:w-[120%] lg:-translate-x-1/2 lg:-translate-y-1/2 lg:rounded-[1631px] lg:border-[236px] lg:bg-none lg:blur-[25px]"></div>

      <FieldServiceMap />
      {/* Gradient overlay for better text readability */}
      <div className="pointer-events-none absolute inset-0"></div>

      {/* Content overlay */}
      <div className="main-container relative z-20 flex flex-col-reverse items-center justify-between gap-[30px] pt-[60px] pb-10 sm:pb-16 md:pb-20 lg:flex-row lg:pt-[138px] lg:pb-[100px] xl:pb-[171px] 2xl:pt-[150px] 2xl:pb-[190px]">
        <div className="w-full lg:max-w-[732px]">
          <TextAnimation animateOnScroll={false} delay={0}>
            <div className="field-service text-secondary flex w-full items-center justify-center rounded-md px-3 py-1 text-xs leading-[125%] font-semibold -tracking-[0.24px] sm:w-fit">
              {hero?.heroTitle1}
            </div>
          </TextAnimation>
          <TextAnimation animateOnScroll={false} delay={0}>
            <h3 className="main-heading gradient-text mt-1.5 lg:hidden">
              {hero?.heroTitle}
            </h3>
          </TextAnimation>
          <TextAnimation animateOnScroll={false} delay={0.3}>
            <h3 className="main-heading hidden text-white lg:block">
              {hero?.heroTitle}
            </h3>
          </TextAnimation>
          <p className="hero-description !text-secondary md:!text-decemberSky mt-[6px] mb-4 sm:my-[26px] lg:max-w-[532px]">
            {/* Contractor+ brings job scheduling, dispatch, crew visibility, and
            communication into one live hub for office & field teams. */}
            {hero?.heroDescription}
          </p>
          <CardReveal
            distance={50}
            delay={0.6}
            className="flex w-full flex-col-reverse items-center gap-5 sm:flex-row md:gap-2.5"
          >
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
                <span className="hidden sm:flex">{hero?.createBtn}</span>
                <span className="flex sm:hidden">{hero?.mobileBtn}</span>
                <ArrowIcon fill="white" className="hidden sm:block" />
              </Button>
              <CardRequiredButton
                text={hero?.ncc_txt}
                className="hidden text-white sm:flex"
              />
            </div>
          </CardReveal>
        </div>
        <Image
          className="w-full max-w-[355px] object-cover"
          src={"/images/webp/group-with-location.webp"}
          width={22}
          height={22}
          alt="location"
          unoptimized
        />
      </div>
    </section>
  );
};

export default FieldServicesHero;

// "use client";
// import { WIREFRAME_STYLE } from "@/mapStyle/mapStyle";
// import { reverseGeocode } from "@/services/map";
// import React, { useCallback, useEffect, useMemo, useState } from "react";
// import Map, { Layer, Marker, Source } from "react-map-gl/maplibre";
// import Button from "../common/Button";
// import CardRequiredButton from "../common/CardRequiredButton";
// import {
//   ArrowIcon,
//   HeroAppStoreIcon,
//   HeroPlayStoreIcon,
//   LocationIcon,
// } from "../common/Icons";

// interface GeolocationData {
//   latitude: number;
//   longitude: number;
//   city?: string;
//   country?: string;
// }
// interface heroProps {
//   heroTitle: string;
//   heroTitle1: string;
//   heroDescription: string;
//   ncc_txt: string;
//   mobileBtn: string;
//   createBtn: string;
// }
// interface Props {
//   hero: heroProps;
// }

// const FieldServicesHero: React.FC<Props> = ({ hero }) => {
//   const [isLoading, setIsLoading] = useState(true);
//   const [location, setLocation] = useState<GeolocationData | null>(null);
//   const [mapKey, setMapKey] = useState(0);

//   useEffect(() => {
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(
//         async (position) => {
//           const { latitude, longitude } = position.coords;

//           const { city, country } = await reverseGeocode(latitude, longitude);

//           setLocation({
//             latitude,
//             longitude,
//             city,
//             country,
//           });
//           setMapKey((prev) => prev + 1);
//         },
//         (error) => {
//           console.error("Error getting location:", error);
//           setLocation({
//             latitude: 28.6139,
//             longitude: 77.209,
//             city: "Delhi",
//             country: "IN",
//           });
//           setMapKey((prev) => prev + 1);
//         },
//         {
//           enableHighAccuracy: true,
//           timeout: 10000,
//           maximumAge: 600000,
//         },
//       );
//     } else {
//       setLocation({
//         latitude: 28.6139,
//         longitude: 77.209,
//         city: "Delhi",
//         country: "IN",
//       });
//       setMapKey((prev) => prev + 1);
//     }
//   }, []);

//   const processedLocation = useMemo(() => {
//     if (!location) return null;

//     return {
//       latitude: location.latitude,
//       longitude: location.longitude,
//       city: location.city,
//       country: location.country,
//     };
//   }, [location]);

//   const mockUsers = useMemo(() => {
//     const baseUsers = [
//       {
//         id: 1,
//         name: "Mike Johnson",
//         imgUrl: "/images/png/location-1.png",
//       },
//       {
//         id: 2,
//         name: "Sarah Wilson",
//         imgUrl: "/images/png/location-2.png",
//       },
//       {
//         id: 3,
//         name: "David Brown",
//         imgUrl: "/images/png/location-3.png",
//       },
//       {
//         id: 4,
//         name: "Lisa Garcia",
//         imgUrl: "/images/png/location-4.png",
//       },
//       {
//         id: 5,
//         name: "John Smith",
//         imgUrl: "/images/png/location-5.png",
//       },
//     ];

//     if (!processedLocation?.latitude || !processedLocation?.longitude) {
//       return [];
//     }

//     return baseUsers.map((user, index) => {
//       const angle = index * 36 + (Math.random() * 20 - 10);
//       const distance = 0.01 + Math.random() * 0.035;

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

//   return (
//     <section className="relative overflow-visible">
//       <div className="bg-black-fade-new lg:border-kuroiBlack absolute top-0 left-0 z-20 h-full w-full bg-cover lg:top-1/2 lg:left-1/2 lg:h-[160%] lg:w-[130%] lg:-translate-x-1/2 lg:-translate-y-1/2 lg:rounded-[1631px] lg:border-[236px] lg:bg-none lg:blur-[25px]"></div>
//       <div className="absolute inset-0 h-full w-full">
//         {(isLoading || !location) && (
//           <div className="absolute inset-0 z-10 flex items-center justify-center bg-black">
//             <div className="text-center">
//               <div className="mx-auto mb-4 h-12 w-12 animate-spin rounded-full border-b-2 border-white"></div>
//               <p className="text-white">Getting your location...</p>
//             </div>
//           </div>
//         )}

//         {location && (
//           <Map
//             key={mapKey}
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
//             interactive={false}
//           >
//             {mockUsers?.length > 0 &&
//               mockUsers.map((user: any) => (
//                 <Marker
//                   key={user.id}
//                   longitude={user.lng}
//                   latitude={user.lat}
//                   anchor="center"
//                 >
//                   <div className="relative">
//                     <div className="relative h-12 w-12 rounded-full shadow-lg">
//                       <div className="absolute inset-0 rounded-full bg-white p-0.5">
//                         <img
//                           src={user.imgUrl}
//                           alt={user.name}
//                           className="h-full w-full rounded-full object-cover"
//                           onError={(e) => {
//                             (e.target as HTMLImageElement).src =
//                               "/images/png/default-avatar.png";
//                           }}
//                         />
//                       </div>
//                     </div>
//                     <div className="absolute top-full left-1/2 h-0 w-0 -translate-x-1/2 border-t-[8px] border-r-[6px] border-l-[6px] border-t-white border-r-transparent border-l-transparent"></div>
//                   </div>
//                 </Marker>
//               ))}
//           </Map>
//         )}
//       </div>

//       {processedLocation?.city && (
//         <div className="absolute top-1/2 right-10 z-20 -translate-y-1/2 transform">
//           <div className="flex items-center gap-2.5 rounded-lg bg-[#ffffff1a] p-1.5 text-white backdrop-blur-[3px]">
//             <LocationIcon />
//             <b className="text-base leading-normal text-white">
//               {processedLocation.city}
//               {processedLocation.country && `, ${processedLocation.country}`}
//             </b>
//           </div>
//         </div>
//       )}

//       <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent"></div>

//       <div className="main-container 1xl:pb-[160px] relative z-20 pt-[393px] pb-10 sm:pb-16 md:pb-20 lg:pb-[100px] xl:pt-[134px] xl:pb-[120px]">
//         <div className="w-full max-w-[732px]">
//           <div className="w-fit rounded-md bg-[linear-gradient(90deg,_rgba(255,163,163,1)_0%,_rgba(255,163,163,0.59)_8%,_rgba(255,163,163,0)_80%)] p-[1px]">
//             <div className="rounded-md bg-[#333434] px-3 py-1 text-xs font-semibold tracking-[-0.24px]">
//               <span className="text-secondary">
//                 {hero?.heroTitle1}
//               </span>
//             </div>
//           </div>
//           <h3 className="main-heading gradient-text mt-1.5 lg:hidden">
//             {hero?.heroTitle}
//           </h3>
//           <h3 className="main-heading mt-2 hidden text-white lg:block">
//             {hero?.heroTitle}
//           </h3>
//           <p className="hero-description !text-secondary md:!text-decemberSky mt-[6px] mb-4 max-w-[532px] sm:my-[26px]">

//             {hero?.heroDescription}
//           </p>
//           <div className="flex w-full flex-col-reverse items-center gap-5 sm:flex-row md:gap-2.5">
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
//                 <span className="hidden sm:flex">{hero?.createBtn}</span>
//                 <span className="flex sm:hidden">{hero?.mobileBtn}</span>
//                 <ArrowIcon fill="white" className="hidden sm:block" />
//               </Button>
//               <CardRequiredButton
//                 text={hero?.ncc_txt}
//                 className="hidden text-white sm:flex"
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default FieldServicesHero;
