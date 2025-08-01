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
}
const CommonHero: React.FC<TheHeroProps> = ({
  hero,
  slug,
  heroImg,
  commonData,
  featureTag,
  apiData = true,
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
      <div className="bg-kuroiBlack absolute bottom-[-10px] left-0 z-40 hidden h-[100px] w-full blur-[30px] md:block"></div>
      <RedClipIcon className="pointer-events-none absolute top-[112px] right-[-194px] hidden w-full max-w-[993px] md:top-[-202px] md:right-0 md:block" />
      <RedClipIconMobile className="pointer-events-none absolute top-0 right-0 block w-full md:hidden" />
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
        className="mx-auto flex w-full max-w-[1050px] flex-col-reverse md:flex-col"
      >
        <div>
          <div className="px-2 pt-8 md:pt-0">
            <AdaptiveHeroTitle
              title={hero?.heroTitle || ""}
              className="gradient-2 mb-2 w-fit text-start leading-[127%] font-extrabold sm:mx-auto md:mb-4 md:text-center lg:mb-[26px]"
              minFontSize={16}
              maxLines={2}
              maxFontSize={48}
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
            <AppsRating />
            <CardReveal distance={50} delay={0.8} className="w-full sm:w-fit">
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
          </div>
        </div>
        <CardReveal distance={50} delay={0.9}>
          <div className="relative mx-auto w-fit overflow-hidden px-5 pt-5">
            <div className="relative overflow-hidden">
              {apiData ? (
                <div className="border-silverMedal z-30 mx-auto mt-9 block max-w-[900px] overflow-hidden rounded-t-[25px] border-4 p-1 md:rounded-[55px] md:p-4">
                  {heroImg?.url && (
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
                  <AnimatedShape />
                </div>
              ) : (
                <div className="border-silverMedal z-30 mx-auto mt-9 block max-w-[900px] overflow-hidden rounded-t-[25px] border-4 p-1 md:rounded-[55px] md:p-4">
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
                  <AnimatedShape />
                </div>
              )}
            </div>
          </div>
        </CardReveal>
      </div>
    </section>
  );
};
export default CommonHero;
