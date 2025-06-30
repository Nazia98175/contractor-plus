"use client";
import dynamic from "next/dynamic";
import CardRequiredButton from "../common/CardRequiredButton";
import CardReveal from "../common/CardReveal";
import FreeAccountButton from "../common/FreeAccountButton";
import TextAnimation from "../common/TextAnimation";
import HerosectionBackground from "./HerosectionBackground";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const VideoOptimizer = dynamic(() => import("./VideoOptimizer"), {
  ssr: false,
});

const Hero = ({ homePageContent }: { homePageContent: any }) => {
  const { hero_title, hero_description, cta_button_text, ncc_text, mobileBtn } =
    homePageContent ?? {};

  useEffect(() => {
    setTimeout(() => {
      gsap.to(".main-loader", {
        opacity: 0,
      });
    }, 1000);
  }, []);
  return (
    <section className="lg:bg-kuroiBlack relative z-20 w-full overflow-hidden">
      <HerosectionBackground />
      <div className="relative mx-auto w-full max-w-[1920px] overflow-hidden pt-[269px] pb-10 sm:pb-16 md:pb-20 lg:pt-[140px] lg:pb-[140px] xl:pb-[163px]">
        <div className="main-container relative z-10 flex items-end">
          <div className="relative z-30 flex w-full flex-col gap-[6px] sm:gap-6 lg:max-w-[628px]">
            {/* <TextAnimation delay={0.2}> */}
            <h1 className="main-heading gradient-text xs:w-full w-full max-w-[85%]">
              {hero_title}
            </h1>
            {/* </TextAnimation> */}
            {/* <TextAnimation delay={0.35}> */}
            <p className="text-decemberSky max-w-[304px] text-xs font-semibold sm:max-w-[97%] sm:text-sm md:text-base md:font-medium lg:text-lg">
              {hero_description}
            </p>
            {/* </TextAnimation> */}
            <div className="xs:w-fit xs:items-center mt-2 flex w-full flex-col justify-center gap-2.5 sm:mt-0">
              <CardReveal
                className="hidden h-10 sm:flex"
                distance={50}
                delay={0.45}
                animateOnMount={true}
              >
                <FreeAccountButton showIcon={false} text={cta_button_text} />
              </CardReveal>
              <CardReveal
                className="flex sm:hidden"
                distance={50}
                delay={0.5}
                animateOnMount={true}
              >
                <FreeAccountButton showIcon={false} text={mobileBtn} />
              </CardReveal>
              <CardReveal
                className="xs:w-fit w-full"
                distance={50}
                delay={0.55}
              >
                <CardRequiredButton className="w-full" text={ncc_text} />
              </CardReveal>
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 -z-10 flex aspect-video h-full object-bottom lg:w-[64%]">
          <div className="relative -z-10 h-full w-full">
            <VideoOptimizer
              highResUrl={"/video/hero-video-higher.mp4"}
              lowResUrl={"/video/hero-video.mp4"}
              videoUrl={homePageContent?.hero_image?.url}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
