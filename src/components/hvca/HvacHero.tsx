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

const HvacHero = () => {
  return (
    <section className="bg-kuroiBlack relative overflow-hidden">
      <div className="relative overflow-hidden">
        <Image
          width={769}
          height={800}
          src="/images/webp/hero-video-ovelay.webp"
          alt="Red Circle For designing"
          className="pointer-events-none absolute top-0 left-0 block h-full w-full object-cover lg:hidden"
          layout="lazy"
        />
        <div className="main-container relative flex items-end pt-[395px] pb-16 sm:pt-[269px] sm:pb-28 md:pb-[100px] lg:pt-[180px] lg:pb-[150px] xl:-mr-20 xl:pb-[208px]">
          <HvacGlowHeroMobileIcon />
          <HvacGlowHeroDesktopIcon />
          <div className="relative z-30 w-full sm:space-y-6 lg:max-w-[750px]">
            <TextAnimation animateOnScroll={false} delay={3}>
              <h1 className="main-heading gradient-white">
                Not just HVAC software. Meet your operating system.
              </h1>
            </TextAnimation>
            {/* <TextAnimation animateOnScroll={false} delay={3}> */}
            <p className="text-decemberSky my-4 mb-4 max-w-[478px] text-xs font-semibold sm:text-sm md:text-base md:font-medium lg:text-lg xl:my-[26px]">
              Contractor+ connects every function of your business so it finally
              all works in sync.
            </p>
            {/* </TextAnimation> */}
            <div className="flex w-full flex-col items-center gap-2.5 sm:w-fit">
              <Button variant="primary">
                <span className="block md:flex"> Get started FREE</span>
                <span className="flex md:hidden">Download App</span>{" "}
                <SideIcon />
              </Button>
              <CardRequiredButton />
            </div>
          </div>
        </div>
        <div className="absolute right-[2%] bottom-16 z-10 hidden h-[70%] w-[314px] lg:flex xl:right-[7%]">
          <HvacHeroSlider features={features} />
        </div>
        <div className="absolute top-0 right-0 h-full max-h-[1200px] w-full max-w-[945px] lg:max-h-[750px]">
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
            className="absolute -top-[6%] !left-[-1%] hidden !h-[111%] w-full object-cover lg:left-0 lg:block"
            src="/images/webp/hero-video-ovelay.webp"
            alt="hero-video-ovelay"
          />
        </div>
      </div>
      <CloudsAnimation className="-bottom-[11%]" />
    </section>
  );
};

export default HvacHero;
