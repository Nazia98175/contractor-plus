"use client";
import gsap from "gsap";
import Image from "next/image";
import React, { useEffect, useMemo, useState } from "react";
import CardRequiredButton from "../common/CardRequiredButton";
import CardReveal from "../common/CardReveal";
import Copy from "../common/Copy";
import FreeTrialButton from "../common/FreeTrialButton";
import {
  HeroAppStoreIcon,
  HeroPlayStoreIcon,
  LocationIcon,
} from "../common/Icons";
import AdaptiveHeroTitle from "../industry/AdaptiveHeroTitle";
import FieldServiceMap from "./FieldServiceMap";

interface GeolocationData {
  latitude: number;
  longitude: number;
  city?: string;
  country?: string;
}

const DEFAULT_LOCATION: GeolocationData = {
  latitude: 40.7128,
  longitude: 74.006,
  city: "New York",
  country: "US",
};
interface heroProps {
  heroTitle: string;
  heroDescription: string;
}
interface Props {
  hero: heroProps;
  commonData?: any;
  solutionTag?: string;
  geoLocation?: any | null;
  locale?: string | undefined;
}

const FieldServicesHero: React.FC<Props> = ({
  hero,
  commonData,
  solutionTag,
  geoLocation,
  locale,
}) => {
  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => {
      gsap.to("#home-page-view-port-screen-field-service", {
        opacity: 1,
        duration: 1,
      });
      gsap.to("#home-page-header-view-port-screen", {
        opacity: 1,
        duration: 1,
      });
      gsap.to("#home-page-footer-view-port-screen", {
        opacity: 1,
        duration: 1,
      });
    }, 700);
  }, []);

  const [location, setLocation] = useState<GeolocationData | null>(null);
  const [mapKey, setMapKey] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (geoLocation) {
      setLocation({
        latitude: geoLocation?.location?.latitude,
        longitude: geoLocation?.location?.longitude,
        city: geoLocation?.city?.names[locale || "en"],
        country: geoLocation?.country?.iso_code?.toUpperCase() || "",
      });
      setMapKey((prev) => prev + 1);
      return;
    } else {
      setLocation(DEFAULT_LOCATION);
      setMapKey((prev) => prev + 1);
    }
  }, [geoLocation]);

  const processedLocation = useMemo(() => {
    if (!location) return null;
    return {
      latitude: location.latitude,
      longitude: location.longitude,
      city: location.city,
      country: location.country,
    };
  }, [location]);

  return (
    <section className="relative overflow-visible">
      <div className="bg-black-fade-new lg:border-kuroiBlack pointer-events-none absolute top-0 left-0 z-10 h-full w-full bg-cover lg:top-1/2 lg:left-1/2 lg:h-[150%] lg:w-[120%] lg:-translate-x-1/2 lg:-translate-y-1/2 lg:rounded-[1631px] lg:border-[236px] lg:bg-none lg:blur-[25px]"></div>

      <FieldServiceMap
        location={processedLocation}
        // isLoading={isLoading}
        mapKey={mapKey}
        onMapLoad={() => setIsLoading(false)}
        onMapError={(e) => {
          console.error("Map error:", e);
          setIsLoading(false);
        }}
      />
      {/* <div className="pointer-events-none absolute inset-0"></div> */}
      {/* Content overlay */}
      <div className="main-container 900:flex-row z-30 flex flex-col-reverse items-center justify-between gap-[30px] pt-[60px] pb-10 sm:pb-16 md:pb-20 lg:pt-[138px] lg:pb-[100px] xl:pb-[171px] 2xl:pt-[150px] 2xl:pb-[190px]">
        <div className="relative z-20 w-full lg:max-w-[732px]">
          <Copy animateOnScroll={false} delay={0}>
            <div className="field-service text-secondary flex w-full items-center justify-center rounded-md px-3 py-1 text-xs leading-[125%] font-semibold -tracking-[0.24px] sm:w-fit">
              {solutionTag}
            </div>
          </Copy>
          {/* <Copy animateOnScroll={false} delay={0.2}>
            <h3 className="main-heading gradient-text 900:max-w-[470px] 900:hidden mt-1.5">
              {hero?.heroTitle}
            </h3>
          </Copy> */}
          <AdaptiveHeroTitle
            title={hero?.heroTitle || ""}
            className="gradient-text 900:max-w-[470px] 900:hidden mt-1.5 font-extrabold"
            minFontSize={25}
            maxLines={3}
            maxFontSize={52}
            textAnimation="home-page-view-port-screen-field-service"
          />
          <AdaptiveHeroTitle
            title={hero?.heroTitle || ""}
            className="900:block hidden font-extrabold text-white"
            minFontSize={25}
            maxLines={3}
            maxFontSize={52}
            textAnimation="home-page-view-port-screen-field-service"
          />
          {/* <Copy animateOnScroll={false} delay={0.3}>
            <h3 className="main-heading 900:block hidden text-white">
              {hero?.heroTitle}
            </h3>
          </Copy> */}
          <p className="hero-description !text-secondary md:!text-decemberSky 900:max-w-[470px] mt-[6px] mb-4 sm:my-[26px] lg:max-w-[532px]">
            {hero?.heroDescription}
          </p>
          <CardReveal
            distance={50}
            delay={0.6}
            className="flex w-full flex-col-reverse items-center gap-5 sm:flex-row md:gap-2.5"
          >
            <div className="flex items-center gap-2 lg:gap-2.5">
              <button>
                <HeroPlayStoreIcon />
              </button>
              <button>
                <HeroAppStoreIcon />
              </button>
            </div>
            <div className="flex w-full flex-col items-center justify-center gap-[6px] sm:w-fit">
              <FreeTrialButton
                className="!hidden sm:!flex"
                text={commonData?.getStartedFreeBtn}
                showIcon={true}
              />
              <FreeTrialButton
                showIcon={false}
                className="!flex w-full sm:!hidden"
                text={commonData?.mobileBtn}
              />
              <CardRequiredButton
                text={commonData?.nccTxt}
                className="text-secondary hidden sm:flex"
              />
            </div>
          </CardReveal>
        </div>
        <div className="relative z-20 h-full w-full sm:max-w-[270px] xl:max-w-[355px]">
          <Image
            className="z-20 h-full max-h-[301px] w-full object-contain sm:max-h-[355px] sm:object-cover"
            src="/images/webp/group-with-location.webp"
            width={355}
            height={355}
            alt="location"
            // sizes="(max-width: 768px) 100vw, 355px"
            unoptimized
          />
          {processedLocation?.city && (
            <div className="absolute top-[60%] left-[38%] z-20 sm:left-[30%]">
              <div className="bg-rgba11 flex items-center gap-2.5 rounded-lg p-1.5 text-white backdrop-blur-[3px]">
                <LocationIcon />
                <b className="text-sm leading-normal text-white lg:text-base">
                  {processedLocation.city}
                  {processedLocation.country &&
                    `, ${processedLocation.country}`}
                </b>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default FieldServicesHero;
