"use client";
import gsap from "gsap";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useEffect, useRef } from "react";
import AppsRating from "../common/AppsRating";
import CardRequiredButton from "../common/CardRequiredButton";
import CardReveal from "../common/CardReveal";
import Copy from "../common/Copy";
import FreeTrialButton from "../common/FreeTrialButton";
import { RedClipIcon } from "../common/Icons";
import AdaptiveHeroTitle from "../industry/AdaptiveHeroTitle";
import LottieAnimation from "../homepage/LottieAnimation";
import useGsapFadeIn from "@/hooks/useGsapFadeIn";
const AnimatedShape = dynamic(() => import("./AnimatedShape"), { ssr: false });

// import AnimatedShape from "./AnimatedShape";
export interface TheHeroProps {
  hero?: any;
  slug?: string;
  heroImg?: any;
  homeCard?: any;
  commonData?: any;
  featureTag?: string;
  apiData?: boolean;
  isShowHeroImg?: boolean;
}
const CommonHero: React.FC<TheHeroProps> = ({
  hero,
  slug,
  heroImg,
  commonData,
  featureTag,
  isShowHeroImg = true,
}) => {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    gsap.to(wrapperRef.current, {
      opacity: 1,
      duration: 0.1,
      delay: 0.1,
      ease: "elastic.in",
      once: true,
    });
  }, []);

  return (
    <section
      ref={wrapperRef}
      className="relative z-10 pt-[46px] pb-10 opacity-0 sm:pt-20 md:pb-0 lg:pt-[139px] xl:pt-[154px]"
    >
      {isShowHeroImg && (
        <div className="bg-kuroiBlack absolute bottom-[-10px] left-0 z-40 hidden h-[100px] w-full blur-[30px] md:block"></div>
      )}

      <Image
        className="pointer-events-none absolute right-0 bottom-[-34%] z-[80] h-[81%] w-full object-cover opacity-30 sm:bottom-[-27%] sm:hidden"
        src="/images/webp/final-large.webp"
        alt="final-large"
        width={1920}
        height={1000}
        unoptimized
      />
      <RedClipIcon className="pointer-events-none absolute top-[112px] right-[-194px] hidden w-full max-w-[993px] md:top-[-202px] md:right-0 md:block" />
      <div className="via-athenaBlue pointer-events-none absolute top-0 left-[70px] hidden h-[500px] w-full max-w-[90px] rotate-[-45deg] rounded-[10px] bg-gradient-to-r from-transparent to-transparent opacity-15 mix-blend-plus-lighter blur-[48px] lg:block"></div>
      {featureTag && (
        <CardReveal distance={30} delay={0.1}>
          <div className="hidden items-center justify-center pb-1 md:flex">
            <span className="bg-darkKnight text-wallStreet rounded-[6px] px-3 py-1 text-xs font-semibold">
              {featureTag || "Feature Highlight"}
            </span>
          </div>
        </CardReveal>
      )}
      <div
        id="hero"
        className="relative z-50 mx-auto flex w-full max-w-[1050px] flex-col-reverse md:flex-col"
      >
        <div>
          <div className="relative z-[90] mx-auto px-2 pt-8 md:max-w-[90%] md:pt-0">
            {featureTag && (
              <CardReveal distance={30} delay={0.1}>
                <div className="block pb-1 md:hidden">
                  <span className="bg-darkKnight text-wallStreet rounded-[6px] px-3 py-1 text-xs font-semibold">
                    {featureTag || "Feature Highlight"}
                  </span>
                </div>
              </CardReveal>
            )}
            <AdaptiveHeroTitle
              title={hero?.heroTitle || ""}
              className="gradient-2 mb-2 hidden w-fit text-start leading-[140%] font-extrabold sm:mx-auto md:mb-4 md:block md:text-center lg:mb-[26px]"
              minFontSize={16}
              maxLines={2}
              maxFontSize={48}
              textAnimation="home-page-view-port-screen-fetures"
            />
            <AdaptiveHeroTitle
              title={hero?.heroTitle || ""}
              className="gradient-2 mb-2 block w-full text-start leading-[140%] font-extrabold sm:mx-auto md:mb-4 md:hidden md:text-center lg:mb-[26px]"
              minFontSize={16}
              maxLines={3}
              maxFontSize={40}
              textAnimation="home-page-view-port-screen-fetures"
            />
            {/* </Copy> */}
            <Copy delay={0.4} animateOnScroll={false}>
              <p className="text-decemberSky mx-auto mb-4 max-w-[826px] text-start text-xs font-semibold sm:text-sm md:text-center md:text-base md:font-medium lg:mb-[26px] lg:text-lg">
                {hero?.heroDescription}
              </p>
            </Copy>
          </div>

          <div className="flex w-full flex-wrap-reverse items-center justify-center gap-4 sm:gap-5">
            {slug === "construction-bookkeeping-services" ? (
              <div className="relative z-[90] flex flex-col items-center justify-center">
                <FreeTrialButton
                  showIcon={true}
                  className="!flex"
                  text={"Get a bookkeeping quote"}
                />
              </div>
            ) : (
              <>
                <AppsRating />
                <CardReveal
                  distance={50}
                  delay={0.8}
                  className="w-full sm:w-fit"
                >
                  <div className="flex w-full flex-col items-center justify-center gap-1.5 px-2 sm:w-fit">
                    <FreeTrialButton
                      className="!hidden sm:!flex"
                      text={commonData?.getStartedFreeBtn}
                      showIcon={false}
                    />
                    <FreeTrialButton
                      showIcon={false}
                      className="!flex w-full sm:!hidden"
                      text={commonData?.mobileBtn}
                    />
                    <CardRequiredButton
                      className="text-wallStreet sm:text-secondary"
                      text={commonData?.nccTxt}
                    />
                  </div>
                </CardReveal>
              </>
            )}
          </div>
        </div>
        {hero?.isLottieView ? (
          <CardReveal distance={50} delay={0.9}>
            <div className="relative mt-12 mb-16 overflow-hidden sm:mt-16 sm:mb-20 md:mt-20 md:mb-[100px] lg:mt-[127px] lg:mb-[140px]">
              <>
                <LottieAnimation
                  animationData={hero?.lottieJson}
                  loop={true}
                  className="mx-auto w-full max-w-[550px]"
                />
                {hero?.overlay && <AnimatedShape className="top-[-1%]" />}
              </>
            </div>
          </CardReveal>
        ) : (
          <>
            <CardReveal distance={50} delay={0.9}>
              <div className="relative mx-auto w-fit overflow-hidden px-5 pt-5">
                <div className="relative overflow-hidden">
                  <div
                    className={`${hero?.border ? "border-silverMedal rounded-t-[25px] border-4 p-1 md:rounded-[55px] md:p-4" : ""} z-30 mx-auto mt-9 block overflow-hidden max-w-[${hero?.imageMaxWidth || "900"}px] `}
                  >
                    {heroImg && (
                      <img
                        className={`h-full w-full object-cover ${slug === "ai-call-answering-software" ? "xs" : "rounded-t-[20px] md:rounded-[45px]"}`}
                        src={heroImg?.url}
                        alt="crm-hero"
                      />
                    )}

                    {hero?.overlay && <AnimatedShape />}
                  </div>
                </div>
              </div>
            </CardReveal>
          </>
        )}
      </div>
    </section>
  );
};
export default CommonHero;
