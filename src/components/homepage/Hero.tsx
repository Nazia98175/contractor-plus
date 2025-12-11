"use client";
import gsap from "gsap";
import dynamic from "next/dynamic";
import { useEffect } from "react";
import CardRequiredButton from "../common/CardRequiredButton";
import CardReveal from "../common/CardReveal";
import Copy from "../common/Copy";
import FreeTrialButton from "../common/FreeTrialButton";
import HerosectionBackground from "./HerosectionBackground";
const VideoOptimizer = dynamic(() => import("./VideoOptimizer"), {
  ssr: false,
});

const Hero = ({
  homePageContent,
  commonData,
}: {
  homePageContent: any;
  commonData: any;
}) => {
  const { heroDescription } = homePageContent ?? {};

  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => {
      gsap.to("#home-page-view-port-screen", {
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
    }, 1000);
  }, []);

  return (
    <section className="lg:bg-kuroiBlack relative z-20 w-full overflow-hidden">
      <HerosectionBackground />
      <div className="relative mx-auto w-full max-w-[1920px] overflow-hidden pt-[269px] pb-10 sm:pb-16 md:pb-20 lg:pt-[100px] lg:pb-[140px] xl:pt-[140px] xl:pb-[163px]">
        <div className="main-container relative z-10 flex items-end">
          <div className="relative z-30 flex w-full flex-col gap-1.5 md:max-w-[628px] lg:gap-3 xl:gap-6">
            <Copy animateOnScroll={false} delay={1.1}>
              {/* <AdaptiveHeroTitle
                title={heroTitle}
                className="gradient-text xs:w-full w-full leading-[127%] font-extrabold"
                minFontSize={28}
                maxLines={3}
                maxFontSize={52}
                textAnimation="home-page-view-port-screen"
              /> */}
              <h1 className="gradient-text xs:w-full w-full text-[28px] leading-[127%] font-extrabold sm:text-[35px] md:text-[45px] lg:text-[52px]">
                The <span className="gradient-text-os px-1">OS</span> for build
                & service contractors
              </h1>
            </Copy>
            <Copy animateOnScroll={false} delay={1.2}>
              <p className="text-decemberSky max-w-full text-sm font-semibold sm:max-w-[67%] md:text-base md:font-medium xl:text-lg">
                {heroDescription}
              </p>
            </Copy>
            <div className="xs:items-center mt-2 flex w-full flex-col justify-center gap-2.5 sm:mt-0 sm:w-fit">
              <CardReveal
                className="hidden h-10 sm:flex"
                distance={50}
                delay={1.3}
                animateOnMount={true}
              >
                {/* <FreeTrialButton
                  showIcon={false}
                  text={commonData?.getStartedFreeBtn}
                /> */}
                <FreeTrialButton showIcon={false} text={"Start for FREE"} />
              </CardReveal>
              {/* mobile */}
              <CardReveal
                className="flex w-full sm:hidden"
                distance={50}
                delay={1.4}
                animateOnMount={true}
              >
                {/* <FreeTrialButton
                  showIcon={false}
                  text={commonData?.mobileBtn}
                  className="!w-full"
                /> */}
                <FreeTrialButton
                  showIcon={false}
                  text={"Start for FREE"}
                  className="w-full!"
                />
              </CardReveal>
              <CardReveal className="flex w-fit" distance={50} delay={1.5}>
                <CardRequiredButton
                  className="w-full"
                  text={commonData?.nccTxt}
                />
              </CardReveal>
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 -z-10 flex aspect-video h-1/2 md:h-full xl:w-[70%]">
          <div className="relative -z-10 hidden h-full w-full md:block">
            <VideoOptimizer
              highResUrl={"/video/hero-video-higher.mp4"}
              lowResUrl={"/video/hero-video.mp4"}
              videoUrl={homePageContent?.hero_image?.url}
            />
          </div>
          <div className="relative -z-10 block h-full w-full md:hidden">
            <VideoOptimizer
              highResUrl={"/video/hero-mobile.mp4"}
              lowResUrl={"/video/hero-mobile.webm"}
              videoUrl={homePageContent?.hero_image?.url}
            />
          </div>
        </div>
        <div className="invester-image-gradient pointer-events-none absolute bottom-[-5%] left-0 z-0 h-[26%] w-full"></div>
      </div>
    </section>
  );
};
export default Hero;
