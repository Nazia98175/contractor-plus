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
      duration: 0.5,
      delay: 0.2,
      ease: "power2.out",
    });
  }, []);
  return (
    <section className="lg:bg-kuroiBlack relative z-20 w-full overflow-hidden">
      <HerosectionBackground />
      <div className="relative mx-auto w-full max-w-[1920px] pt-[269px] pb-9 md:pb-[100px] lg:pt-[140px] lg:pb-[150px] xl:pb-[196px]">
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
            <div className="mt-2 flex w-full flex-col items-center gap-2.5 sm:mt-0 sm:w-fit">
              <CardReveal distance={50} delay={0.5}>
                <FreeAccountButton
                  showIcon={false}
                  text={cta_button_text}
                  className="!hidden sm:!flex"
                />
              </CardReveal>

              <CardReveal distance={50} delay={0.7}>
                <FreeAccountButton
                  showIcon={false}
                  text={mobileBtn}
                  className="flex sm:!hidden"
                />
              </CardReveal>
              <CardReveal distance={50} delay={0.9}>
                <CardRequiredButton text={ncc_text} />
              </CardReveal>
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 -z-10 flex aspect-video h-full object-bottom lg:w-[64%]">
          <div className="relative -z-10 h-full w-full">
            <VideoOptimizer
              highResUrl={"/video/hero-video.mp4"}
              lowResUrl={"/video/hero-video-higher.mp4"}
            />
            {/* <div className="ccc absolute top-0 left-0 z-50 h-full w-full bg-black"></div> */}
          </div>
          {/* <Image
            fill
            className="absolute -top-[6%] hidden h-[110%] w-full object-cover lg:block"
            src={"/images/webp/hero-video-ovelay.webp"}
            alt="hero-video-ovelay"
            priority
          /> */}
          {/* <div className="bg-kuroiBlack absolute bottom-[-3px] z-[9999] hidden h-[10px] w-full lg:block"></div> */}
        </div>
      </div>
    </section>
  );
};
export default Hero;
