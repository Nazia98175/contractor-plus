"use client";
import { useOneLinkRedirect } from "@/app/lib/handleOneLinkRedirect";
import gsap from "gsap";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";
import CardRequiredButton from "../common/CardRequiredButton";
import CardReveal from "../common/CardReveal";
import Copy from "../common/Copy";
import FreeAccountButton from "../common/FreeAccountButton";
import { HeroAppStoreIcon, HeroPlayStoreIcon } from "../common/Icons";
import FieldServiceMap from "./FieldServiceMap";

interface GeolocationData {
  latitude: number;
  longitude: number;
  city?: string;
  country?: string;
}
interface heroProps {
  heroTitle: string;
  heroDescription: string;
}
interface Props {
  hero: heroProps;
  commonData?: any;
}

const FieldServicesHero: React.FC<Props> = ({ hero, commonData }) => {
  const pathname = usePathname();
  const { loading, handleRedirect } = useOneLinkRedirect();

  const handleClick = () => {
    handleRedirect({ pathname, email: "user@example.com" });
  };
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

  return (
    <section className="relative overflow-visible">
      <Image
        className="3xl:right-[13%] absolute top-[29%] right-[11%] z-20 w-full max-w-[355px] object-cover min-[2500px]:right-[15%]"
        src="/images/webp/group-with-location.webp"
        width={355}
        height={355}
        alt="location"
        sizes="(max-width: 768px) 100vw, 355px"
        unoptimized
      />
      <div className="bg-black-fade-new lg:border-kuroiBlack absolute top-0 left-0 z-10 h-full w-full bg-cover lg:top-1/2 lg:left-1/2 lg:h-[150%] lg:w-[120%] lg:-translate-x-1/2 lg:-translate-y-1/2 lg:rounded-[1631px] lg:border-[236px] lg:bg-none lg:blur-[25px]"></div>

      <FieldServiceMap />
      {/* Gradient overlay for better text readability */}
      <div className="pointer-events-none absolute inset-0"></div>

      {/* Content overlay */}
      <div className="main-container z-20 flex flex-col-reverse items-center justify-between gap-[30px] pt-[60px] pb-10 sm:pb-16 md:pb-20 lg:flex-row lg:pt-[138px] lg:pb-[100px] xl:pb-[171px] 2xl:pt-[150px] 2xl:pb-[190px]">
        <div className="w-full lg:max-w-[732px]">
          <Copy animateOnScroll={false} delay={0}>
            <div className="field-service text-secondary flex w-full items-center justify-center rounded-md px-3 py-1 text-xs leading-[125%] font-semibold -tracking-[0.24px] sm:w-fit">
              {/* {hero?.heroTitle1} */} Field Service Management
            </div>
          </Copy>
          <Copy animateOnScroll={false} delay={0.2}>
            <h3 className="main-heading gradient-text mt-1.5 sm:max-w-[470px] lg:hidden">
              {hero?.heroTitle}
            </h3>
          </Copy>
          <Copy animateOnScroll={false} delay={0.3}>
            <h3 className="main-heading hidden text-white lg:block">
              {hero?.heroTitle}
            </h3>
          </Copy>
          <p className="hero-description !text-secondary md:!text-decemberSky mt-[6px] mb-4 sm:my-[26px] sm:max-w-[470px] lg:max-w-[532px]">
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
              <FreeAccountButton
                className="!hidden sm:!flex"
                text={commonData?.getStartedFreeBtn}
                showIcon={true}
                onClick={handleClick}
                loading={loading}
                disabled={loading}
              />
              <FreeAccountButton
                showIcon={false}
                className="!flex w-full sm:!hidden"
                text={commonData?.mobileBtn}
                onClick={handleClick}
                loading={loading}
                disabled={loading}
              />
              <CardRequiredButton
                text={commonData?.nccTxt}
                className="text-secondary hidden sm:flex"
              />
            </div>
          </CardReveal>
        </div>
      </div>
    </section>
  );
};

export default FieldServicesHero;
