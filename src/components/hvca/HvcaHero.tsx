import Image from "next/image";
import React from "react";
import { HeroAnimatedIcon, HeroAnimatedMobileIcon } from "../common/Icons";
import TextAnimation from "../common/TextAnimation";
import VideoOptimizer from "../homepage/VideoOptimizer";

const HvcaHero = () => {
  return (
    <section className="lg:bg-kuroiBlack hero-mobile-bg relative z-20 overflow-hidden">
      <div className="bg-athenaBlue absolute top-56 right-0 h-6 w-full max-w-[800px] rotate-45 blur-[40px]"></div>
      <HeroAnimatedIcon />
      <HeroAnimatedMobileIcon />
      <Image
        width={769}
        height={800}
        src="/images/webp/hero-video-ovelay.webp"
        alt="Red Circle For designing"
        className="pointer-events-none absolute top-0 left-0 z-20 block h-full w-full object-cover lg:hidden"
        layout="lazy"
      />
      <div className="main-container relative z-20 flex items-end pt-[269px] pb-9 md:pb-[100px] lg:pt-[180px] lg:pb-[150px] xl:pb-[208px]">
        <div className="relative z-30 w-full sm:space-y-6 lg:max-w-[750px]">
          <TextAnimation animateOnScroll={false} delay={3}>
            <h1 className="main-heading gradient-text">
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
            <button className="bg-red-linear primary-btn h-10">
              <span className="hidden md:flex">Get started FREE</span>
              {/* <span className="flex md:hidden">{cta_button_text}</span> */}
            </button>
            <button className="font-myriad flex cursor-pointer items-center gap-1.5 text-sm text-white">
              No Credit Card Required
            </button>
          </div>
        </div>
      </div>
      <div className="absolute top-0 aspect-video h-full max-h-[1200px] w-full object-bottom lg:right-[-15%] lg:max-h-[750px]">
        <VideoOptimizer
          highResUrl="/video/hero-video.mp4"
          lowResUrl="/video/hero-video.mp4"
        />
        {/* <video
            autoPlay
            muted
            loop
            playsInline
            className="3xl:object-cover relative -z-20 h-full w-full object-cover lg:object-right"
            src="/video/hero-video.mp4"
          ></video> */}
        <Image
          priority
          fill
          unoptimized
          className="absolute -top-[6%] hidden h-[110%] w-full object-cover lg:block"
          src={"/images/webp/hero-video-ovelay.webp"}
          alt="hero-video-ovelay"
        />
        <div className="bg-kuroiBlack absolute bottom-[-3px] z-[9999] hidden h-[10px] w-full lg:block"></div>
      </div>
    </section>
  );
};

export default HvcaHero;
