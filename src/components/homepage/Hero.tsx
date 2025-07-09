"use client";
import gsap from "gsap";
import dynamic from "next/dynamic";
import { useEffect } from "react";
import CardRequiredButton from "../common/CardRequiredButton";
import CardReveal from "../common/CardReveal";
import FreeAccountButton from "../common/FreeAccountButton";
import HerosectionBackground from "./HerosectionBackground";
import TextAnimation from "../common/TextAnimation";
import SplitText from "../common/SplitText";
const VideoOptimizer = dynamic(() => import("./VideoOptimizer"), {
  ssr: false,
});

const Hero = ({ homePageContent }: { homePageContent: any }) => {
  const { heroTitle, heroDescription, createBtn, nccTxt, mobileBtn } =
    homePageContent ?? {};
  // const wrapperRef = useRef<HTMLDivElement | null>(null);
  // useEffect(() => {
  //   gsap.to(wrapperRef.current, {
  //     opacity: 1,
  //     duration: 0.1,
  //     delay: 0.1,
  //     ease: "elastic.in",
  //     once: true,
  //   });
  // }, []);
  useEffect(() => {
    setTimeout(() => {
      gsap.to(".main-loader", {
        opacity: 0,
      });
    }, 5000);
  }, []);

  return (
    <section className="lg:bg-kuroiBlack relative z-20 w-full">
      <HerosectionBackground />
      <div className="relative mx-auto w-full max-w-[1920px] overflow-hidden pt-[269px] pb-10 sm:pb-16 md:pb-20 lg:pt-[140px] lg:pb-[140px] xl:pb-[163px]">
        <div className="main-container relative z-10 flex items-end">
          <div className="relative z-30 flex w-full flex-col gap-[6px] sm:gap-6 lg:max-w-[628px]">
            <TextAnimation delay={0.1}>
              <h1 className="main-heading gradient-text xs:w-full w-full max-w-[85%]">
                {heroTitle}
              </h1>
            </TextAnimation>
            {/* <SplitText
              splitType="lines"
              className="main-heading w-full max-w-[300px] text-white"
              text="dsfghvcdfxgchjbklkkfghjklljhgfhjkl;kjhghjkl;kjhgfhjkl"
            /> */}
            <CardReveal distance={50} delay={0.4}>
              <p className="text-decemberSky max-w-[304px] text-xs font-semibold sm:max-w-[87%] sm:text-sm md:text-base md:font-medium lg:text-lg">
                {heroDescription}
              </p>
            </CardReveal>
            <div className="xs:items-center mt-2 flex w-full flex-col justify-center gap-2.5 sm:mt-0 sm:w-fit">
              <CardReveal
                className="hidden h-10 sm:flex"
                distance={50}
                delay={0.6}
                animateOnMount={true}
              >
                <FreeAccountButton showIcon={false} text={createBtn} />
              </CardReveal>
              <CardReveal
                className="flex w-full sm:hidden"
                distance={50}
                delay={0.8}
                animateOnMount={true}
              >
                <FreeAccountButton
                  showIcon={false}
                  text={mobileBtn}
                  className="!w-full"
                />
              </CardReveal>
              <CardReveal className="flex w-fit" distance={50} delay={1}>
                <CardRequiredButton className="w-full" text={nccTxt} />
              </CardReveal>
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 -z-10 flex aspect-video h-full object-bottom lg:w-[70%]">
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
