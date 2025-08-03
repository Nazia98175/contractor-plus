"use client";
import CardRequiredButton from "@/components/common/CardRequiredButton";
import CloudsAnimation from "@/components/common/CloudsAnimation";
import FreeAccountButton from "@/components/common/FreeAccountButton";
import { TheHeroProps } from "@/components/crmbussiness/CommonHero";
import gsap from "gsap";
import Image from "next/image";
import React, { useEffect } from "react";
import AdaptiveHeroTitle from "./AdaptiveHeroTitle";
import IndustryHeroSlider from "./IndustryHeroSlider";
import { useOneLinkRedirect } from "@/app/lib/handleOneLinkRedirect";
import { usePathname } from "next/navigation";
import FreeTrialButton from "../common/FreeTrialButton";

const IndustryHero: React.FC<TheHeroProps> = ({
  hero,
  homeCard,
  heroImg,
  commonData,
}) => {
  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => {
      gsap.to("#home-page-view-port-screen-hvac", {
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
    <section className="bg-kuroiBlack relative overflow-hidden">
      <div className="relative mx-auto w-full max-w-[1920px] overflow-hidden">
        <Image
          width={769}
          height={800}
          src="/images/webp/hero-video-ovelay.webp"
          alt="Red Circle For designing"
          className="pointer-events-none absolute top-0 left-0 block h-full w-full object-cover lg:hidden"
          sizes="(max-width: 768px) 100vw, (min-width: 769px) 50vw"
        />
        <div className="main-container relative flex items-end pt-[300px] pb-[100px] md:pt-[168px] md:pb-[150px] xl:pb-[195px]">
          <Image
            sizes="(max-width: 768px) 100vw, (min-width: 769px) 50vw"
            width={1920}
            height={100}
            priority
            className="pointer-events-none absolute top-0 left-0 z-10 w-full max-w-[320px] object-cover sm:max-w-[400px] lg:hidden xl:left-[13%]"
            src="/images/webp/hvac-hero-gradient-mobile.webp"
            alt="hvac gradient"
          />
          <div className="relative z-30 w-full sm:space-y-6 md:max-w-[70%]">
            {/* Replace the original h1 with AdaptiveHeroTitle */}
            <AdaptiveHeroTitle
              // title={`Property Maintenance`}
              title={hero?.heroTitle || ""}
              className="xs:text-[28px] gradient-white text-[26px] leading-[127%] font-extrabold sm:text-4xl lg:text-5xl"
              minFontSize={16}
              maxFontSize={48}
            />

            <p className="text-decemberSky xs:text-sm mt-2 mb-4 max-w-[300px] text-xs font-semibold sm:max-w-[514px] md:text-base md:font-medium lg:my-[26px] lg:text-lg">
              {hero?.heroDescription}
            </p>

            <div className="flex w-full flex-col items-center gap-3 sm:w-fit md:gap-2">
              <FreeTrialButton
                text={commonData?.getStartedFreeBtn}
                className="!hidden sm:!flex"
              />
              <FreeTrialButton
                text={commonData?.mobileBtn}
                className="flex sm:!hidden"
              />
              <CardRequiredButton
                className="text-wallStreet sm:text-secondary"
                text={commonData?.nccTxt}
              />
            </div>
          </div>
        </div>
        {homeCard?.length > 0 && (
          <div className="absolute right-[2%] bottom-0 z-10 hidden h-[70%] w-[314px] lg:flex xl:right-[2%]">
            <IndustryHeroSlider features={homeCard} />
          </div>
        )}
        <div className="absolute top-0 right-0 h-full w-full lg:max-w-[945px]">
          <span className="pointer-events-none absolute top-0 -left-[30%] z-10 hidden h-full w-full lg:block">
            <Image
              sizes="(max-width: 768px) 300px, (min-width: 769px) 300px"
              width={300}
              height={1000}
              priority
              className="w-full"
              src="/images/webp/hvac-hero-gradient.webp"
              alt="hvac gradient"
            />
          </span>
          <div className="bg-black-fade-custom absolute right-0 bottom-0 h-full w-full"></div>
          <Image
            alt="HVAC industry hero illustration"
            src={`${heroImg?.url}`}
            width={945}
            height={729}
            className="block h-full w-full object-cover"
            unoptimized
          />
          <Image
            priority
            fill
            className="absolute -top-[6%] hidden h-full w-full object-cover lg:-right-[3%] lg:block"
            src="/images/webp/hero-video-ovelay.webp"
            alt="hero-video-ovelay"
          />
          <div className="3xl:block bg-rgba16 absolute top-[-4%] right-[-64px] hidden h-[104%] w-[10%] blur-[11px]"></div>
        </div>
      </div>
      <CloudsAnimation
        className="!-bottom-[7%] lg:-bottom-[4%]"
        imageClassMobile="hidden"
      />
      <div className="cloud-layer-bottom absolute bottom-[-2%] z-50 block h-[48px] w-full sm:bottom-[-2%] sm:h-[56px] md:bottom-[-2%] xl:bottom-[-5%]"></div>
    </section>
  );
};

export default IndustryHero;
