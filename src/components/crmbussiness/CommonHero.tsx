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
import { RedClipIcon, RedClipIconMobile } from "../common/Icons";
import AdaptiveHeroTitle from "../industry/AdaptiveHeroTitle";
import LottieAnimation from "../homepage/LottieAnimation";
import heroLottie from "../../../public/lotties/real-time.json";
const AnimatedShape = dynamic(() => import("./AnimatedShape"), { ssr: false });

// import AnimatedShape from "./AnimatedShape";
export interface TheHeroProps {
  hero: any;
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
  apiData = true,
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

  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => {
      gsap.to("#home-page-view-port-screen-fetures", {
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
    }, 700);
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
        className="absolute right-0 bottom-[-9%] z-[80] h-[90%] w-full opacity-90 sm:bottom-[-23%] md:hidden"
        src="/images/webp/large-comet-common-hero.webp"
        alt=""
        width={1920}
        height={1000}
      />
      {/* <Image
        className="absolute right-0 bottom-[-16%] z-[80] h-[90%] w-full sm:bottom-[-25%] md:hidden"
        src="/images/webp/large-comet-common-hero.webp"
        alt=""
        width={1920}
        height={1000}
      /> */}
      <RedClipIcon className="pointer-events-none absolute top-[112px] right-[-194px] hidden w-full max-w-[993px] md:top-[-202px] md:right-0 md:block" />
      {/* <RedClipIconMobile className="pointer-events-none absolute top-0 right-0 z-[999] block h-[80%] w-full opacity-80 md:hidden" /> */}
      <div className="via-athenaBlue pointer-events-none absolute top-0 left-[70px] hidden h-[500px] w-full max-w-[90px] rotate-[-45deg] rounded-[10px] bg-gradient-to-r from-transparent to-transparent opacity-15 mix-blend-plus-lighter blur-[48px] lg:block"></div>
      <CardReveal distance={30} delay={0.1}>
        <div className="hidden items-center justify-center pb-1 md:flex">
          <span className="bg-darkKnight text-wallStreet rounded-[6px] px-3 py-1 text-xs font-semibold">
            {featureTag || "Feature Highlight"}
          </span>
        </div>
      </CardReveal>
      <div
        id="hero"
        className="relative z-50 mx-auto flex w-full max-w-[1050px] flex-col-reverse md:flex-col"
      >
        <div>
          <div className="mx-auto px-2 pt-8 sm:max-w-[90%] md:pt-0">
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
              className="gradient-2 mb-2 block w-fit text-start leading-[140%] font-extrabold sm:mx-auto md:mb-4 md:hidden md:text-center lg:mb-[26px]"
              minFontSize={16}
              maxLines={3}
              maxFontSize={40}
              textAnimation="home-page-view-port-screen-fetures"
            />
            {/* </Copy> */}
            <Copy delay={0.4} animateOnScroll={false}>
              <p className="text-decemberSky mx-auto mb-4 max-w-[826px] text-start text-xs font-semibold sm:text-center sm:text-sm md:text-base md:font-medium lg:mb-[26px] lg:text-lg">
                {hero?.heroDescription}
              </p>
            </Copy>
          </div>

          <div className="flex w-full flex-wrap-reverse items-center justify-center gap-4 sm:gap-5">
            {slug === "construction-bookkeeping-services" ? (
              <div className="flex flex-col items-center justify-center">
                <FreeTrialButton
                  showIcon={true}
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
        {slug === "construction-bookkeeping-services" ? (
          <div className="relative mt-12 mb-16 sm:mt-16 sm:mb-20 md:mt-20 md:mb-[100px] lg:mt-[127px] lg:mb-[140px]">
            <Image
              className="mx-auto h-full w-full max-w-[389px] object-cover"
              src={"/images/svg/construction-bookkeeping-services-hero.svg"}
              width={389}
              height={616}
              alt="crm-hero"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 900px"
              priority
            />
            <div className="bg-kuroiBlack absolute bottom-0 left-0 z-30 h-[10%] w-full blur-[15px]"></div>
          </div>
        ) : (
          <>
            {isShowHeroImg && (
              <CardReveal distance={50} delay={0.9}>
                <div className="relative mx-auto w-fit overflow-hidden px-5 pt-5">
                  <div className="relative overflow-hidden">
                    {apiData ? (
                      <div
                        className={`${hero?.border ? "border-silverMedal rounded-t-[25px] border-4 p-1 md:rounded-[55px] md:p-4" : ""} z-30 mx-auto mt-9 block overflow-hidden max-w-[${hero?.imageMaxWidth || "900"}px] `}
                      >
                        {heroImg?.url && (
                          <>
                            {slug === "contractor-time-tracking-software" ? (
                              <>
                                <LottieAnimation
                                  animationData={heroLottie}
                                  loop={false}
                                />
                              </>
                            ) : (
                              <Image
                                className="h-full w-full rounded-t-[20px] object-cover md:rounded-[45px]"
                                src={heroImg?.url}
                                width={900}
                                height={616}
                                alt="crm-hero"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 900px"
                                priority
                              />
                            )}
                          </>
                        )}
                        {hero?.overlay && <AnimatedShape />}
                      </div>
                    ) : (
                      <div
                        className={`${hero?.border ? "border-silverMedal overflow-hidden rounded-t-[25px] border-4 p-1 md:rounded-[55px] md:p-4" : ""} z-30 mx-auto mt-9 block max-w-[${hero?.imageMaxWidth || "900"}px] `}
                      >
                        {heroImg && (
                          <Image
                            className="h-full w-full rounded-t-[20px] object-cover md:rounded-[45px]"
                            src={heroImg}
                            width={900}
                            height={616}
                            alt="crm-hero"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 900px"
                            priority
                          />
                        )}
                        {hero?.overlay && <AnimatedShape />}
                      </div>
                    )}
                  </div>
                </div>
              </CardReveal>
            )}
          </>
        )}
      </div>
    </section>
  );
};
export default CommonHero;
