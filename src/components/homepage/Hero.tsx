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
  const wrapperRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    gsap.to(wrapperRef.current, {
      opacity: 1,
      duration: 0.1,
      delay: 0.2,
      ease: "power2.out",
    });
  }, []);
  return (
    <section className="lg:bg-kuroiBlack relative z-20 w-full overflow-hidden">
      <HerosectionBackground />
      <div className="relative mx-auto w-full max-w-[1920px] overflow-hidden pt-[269px] lg:pt-[140px]">
        <div className="main-container relative z-10 flex items-end">
          <div
            ref={wrapperRef}
            style={{ opacity: 0 }}
            className="relative z-30 flex w-full flex-col gap-[6px] sm:gap-6 lg:max-w-[628px]"
          >
            <TextAnimation animateOnScroll={false} delay={0.2}>
              <h1 className="main-heading gradient-text">{hero_title}</h1>
            </TextAnimation>
            <TextAnimation animateOnScroll={false} delay={0.35}>
              <p className="text-decemberSky text-xs font-semibold sm:text-sm md:text-base md:font-medium lg:text-lg">
                {hero_description}
              </p>
            </TextAnimation>
            <div className="mt-2 flex w-fit flex-col items-center gap-2.5 sm:mt-0">
              <CardReveal
                className="hidden h-10 sm:flex"
                distance={50}
                delay={0.5}
                animateOnMount={true}
              >
                <FreeAccountButton showIcon={false} text={cta_button_text} />
              </CardReveal>
              <CardReveal
                className="flex sm:hidden"
                distance={50}
                delay={0.6}
                animateOnMount={true}
              >
                <FreeAccountButton showIcon={false} text={mobileBtn} />
              </CardReveal>
              <CardReveal distance={50} delay={0.8}>
                <CardRequiredButton text={ncc_text} />
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
