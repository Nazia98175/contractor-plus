"use client";
import Image from "next/image";
import "swiper/css"; // Core Swiper styles
import CardRequiredButton from "../common/CardRequiredButton";
import CloudsAnimation from "../common/CloudsAnimation";
import {
  ArrowIcon,
  HvacGlowHeroDesktopIcon,
  HvacGlowHeroMobileIcon,
  SideIcon,
} from "../common/Icons";
import TextAnimation from "../common/TextAnimation";
import HvacHeroSlider from "./HvacHeroSlider";
import { features } from "../common/Helper";
import Button from "../common/Button";
import FreeAccountButton from "../common/FreeAccountButton";

const HvacHero = () => {
  return (
    <section className="bg-kuroiBlack relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 z-20 block h-20 w-[120%] -translate-x-1/2 bg-[#0E0F12] blur-md"></div>
      <div className="relative overflow-hidden">
        <Image
          width={769}
          height={800}
          src="/images/webp/hero-video-ovelay.webp"
          alt="Red Circle For designing"
          className="pointer-events-none absolute top-0 left-0 block h-full w-full object-cover lg:hidden"
          layout="lazy"
        />
        <div className="main-container relative flex items-end pt-[395px] pb-16 sm:pt-[269px] sm:pb-28 md:pb-[100px] lg:pt-[180px] lg:pb-[150px] xl:pb-[208px] 2xl:pt-[280px] 2xl:pb-[308px]">
          <HvacGlowHeroMobileIcon />

          <div className="relative z-30 w-full sm:space-y-6 lg:max-w-[750px]">
            <TextAnimation animateOnScroll={false} delay={3}>
              <h1 className="main-heading gradient-white">
                Not just HVAC software. Meet your operating system.
              </h1>
            </TextAnimation>
            {/* <TextAnimation animateOnScroll={false} delay={3}> */}
            <p className="text-decemberSky mt-2 mb-4 max-w-[300px] text-xs font-semibold sm:max-w-[478px] sm:text-sm md:text-base md:font-medium lg:my-[26px] lg:text-lg">
              Contractor+ connects every function of your business so it finally
              all works in sync.
            </p>
            {/* </TextAnimation> */}
            <div className="flex w-full flex-col items-center gap-3 sm:w-fit md:gap-2">
              {/* <Button variant="primary">
                <span className="hidden md:flex"> Get started FREE</span>
                <span className="flex md:hidden">Download App</span>{" "}
                <SideIcon />
              </Button>
              {/* <CardRequiredButton /> */}
            </div>
          </div>
        </div>
        <div className="absolute right-[2%] bottom-16 z-10 hidden h-[70%] w-[314px] lg:flex xl:right-[7%] 2xl:h-[60%]">
          <HvacHeroSlider features={features} />
        </div>
        <div className="absolute top-0 right-0 h-full max-h-[1200px] w-full max-w-[945px] lg:max-h-[750px]">
          <span className="pointer-events-none absolute top-0 -left-[40%] z-10 hidden h-full w-full lg:block">
            <HvacGlowHeroDesktopIcon />
          </span>
          <div className="bg-black-fade-custom absolute right-0 bottom-0 h-full w-full"></div>
          <Image
            alt="hvac-hero"
            src={"/images/webp/hvac-hero.webp"}
            width={945}
            height={729}
            className="hidden w-full object-right sm:block"
            unoptimized
          />
          <Image
            alt=""
            src={"/images/webp/hvac-hero-mobile.webp"}
            width={945}
            height={729}
            className="block w-full object-contain sm:hidden"
            unoptimized
          />
          <Image
            priority
            fill
            unoptimized
            className="absolute -top-[6%] hidden !h-[111%] w-full object-cover lg:-right-[3%] lg:block"
            src="/images/webp/hero-video-ovelay.webp"
            alt="hero-video-ovelay"
          />
        </div>
      </div>
      <CloudsAnimation className="-bottom-[6%]" />
    </section>
  );
};

export default HvacHero;
