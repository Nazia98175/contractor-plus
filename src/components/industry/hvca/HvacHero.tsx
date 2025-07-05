"use client";
import Image from "next/image";
import "swiper/css"; // Core Swiper styles
import HvacHeroSlider from "./HvacHeroSlider";
import { useEffect } from "react";
import gsap from "gsap";
import FreeAccountButton from "@/components/common/FreeAccountButton";
import CloudsAnimation from "@/components/common/CloudsAnimation";
import { features } from "@/components/common/Helper";
import CardRequiredButton from "@/components/common/CardRequiredButton";
import { TheHeroProps } from "@/components/crmbussiness/CrmHero";

const HvacHero:React.FC<TheHeroProps> = ({hero , homeCard , heroImg}) => {
  useEffect(() => {
    setTimeout(() => {
      gsap.to(".main-loader", {
        opacity: 0,
      });
    }, 1000);
  }, []);
   const imageBaseUrl = `${process.env.NEXT_PUBLIC_API_IMAGE_URL_STRAPI as string}`;
   console.log(heroImg, "hero in hvac hero");
  return (
    <section className="bg-kuroiBlack relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 z-20 block h-20 w-[120%] -translate-x-1/2 bg-[#0E0F12] blur-md md:bottom-[10%] lg:bottom-0"></div>
      <div className="overflow-hidden">
        <Image
          width={769}
          height={800}
          src="/images/webp/hero-video-ovelay.webp"
          alt="Red Circle For designing"
          className="pointer-events-none absolute top-0 left-0 block h-full w-full object-cover lg:hidden"
          sizes="(max-width: 768px) 100vw, (min-width: 769px) 50vw"
        />
        <div className="main-container xs:pb-28 relative flex items-end pt-[395px] pb-16 md:pt-[250px] md:pb-[100px] lg:pt-[168px] lg:pb-[150px] xl:pb-[355px] 2xl:pt-[180px] 2xl:pb-[370px]">
          <Image
            sizes="(max-width: 768px) 100vw, (min-width: 769px) 50vw"
            width={1920}
            height={100}
            priority
            className="pointer-events-none absolute top-0 left-0 z-10 w-full max-w-[320px] object-cover sm:max-w-[400px] lg:hidden xl:left-[13%]"
            src="/images/webp/hvac-hero-gradient-mobile.webp"
            alt="hvac gradient"
          />
          <div className="relative z-30 w-full sm:space-y-6 lg:max-w-[750px]">
            {/* <TextAnimation animateOnScroll={false} delay={3}> */}
            <h1 className="main-heading gradient-white">
              {hero?.heroTitle}
            </h1>
            {/* </TextAnimation> */}
            {/* <TextAnimation animateOnScroll={false} delay={3}> */}
            <p className="text-decemberSky xs:text-sm mt-2 mb-4 max-w-[300px] text-xs font-semibold sm:max-w-[478px] md:text-base md:font-medium lg:my-[26px] lg:text-lg">
              {hero?.heroDescription}
            </p>
            {/* </TextAnimation> */}
            <div className="flex w-full flex-col items-center gap-3 sm:w-fit md:gap-2">
              <FreeAccountButton
                text={hero?.createBtn}
                className="!hidden sm:!flex"
              />
              <FreeAccountButton
                text={hero?.mobileBtn}
                className="flex sm:!hidden"
              />
              <CardRequiredButton
                className="text-wallStreet sm:text-secondary"
                text={hero?.nccTxt}
              />
            </div>
          </div>
        </div>
        <div className="absolute right-[2%] bottom-16 z-10 hidden h-[62%] w-[314px] lg:flex xl:right-[2%]">
          <HvacHeroSlider features={homeCard} />
        </div>
        <div className="absolute top-0 right-0 h-full max-h-[1200px] w-full lg:max-h-[750px] lg:max-w-[945px]">
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
            {/* <HvacGlowHeroDesktopIcon /> */}
          </span>
          <div className="bg-black-fade-custom absolute right-0 bottom-0 h-full w-full"></div>
          {heroImg?.url && <Image
            alt="hvac-hero"
            src={`${imageBaseUrl}${heroImg?.url}`}
            width={945}
            height={729}
            className="hidden w-full object-right md:block"
            unoptimized
          />}
         {heroImg?.url && <Image
            alt=""
            src={`${imageBaseUrl}${heroImg?.url}`}
            width={945}
            height={729}
            className="block w-full object-cover md:hidden"
            unoptimized
          />}
          <Image
            priority
            fill
            className="absolute -top-[6%] hidden !h-[111%] w-full object-cover lg:-right-[3%] lg:block"
            src="/images/webp/hero-video-ovelay.webp"
            alt="hero-video-ovelay"
          />
        </div>
      </div>
      <CloudsAnimation className="-bottom-[6%] lg:-bottom-[4%]" />
    </section>
  );
};
export default HvacHero;
