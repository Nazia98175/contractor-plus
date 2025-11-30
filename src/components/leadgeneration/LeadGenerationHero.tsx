"use client";
import React, { useEffect, useRef } from "react";
import AppsRating from "../common/AppsRating";
import CardRequiredButton from "../common/CardRequiredButton";
import CardReveal from "../common/CardReveal";
import Copy from "../common/Copy";
import FreeTrialButton from "../common/FreeTrialButton";
import AdaptiveHeroTitle from "../industry/AdaptiveHeroTitle";
import GooglePoster from "./GooglePoster";
import useGsapFadeIn from "@/hooks/useGsapFadeIn";
import gsap from "gsap";
import { SideIcon } from "../common/Icons";
import Link from "next/link";

interface ProcessedLocation {
  city?: string;
  country?: string;
}

interface LeadGenerationHeroProps {
  tag: string;
  heading: string;
  description: string;
  getStartedFreeBtn: string;
  nccTxt: string;
  location?: ProcessedLocation | null; 
}

const LeadGenerationHero: React.FC<LeadGenerationHeroProps> = ({
  tag,
  heading,
  description,
  getStartedFreeBtn,
  nccTxt,
  location,
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

  console.log(getStartedFreeBtn,"getStartedFreeBtn");
  
  useGsapFadeIn(["#common-homepage-wrapper", "#home-page-view-port-screen"]);
  return (
    <section
      ref={wrapperRef}
      className="main-container flex flex-col items-center justify-between gap-8 pt-20 sm:pt-[100px] md:pt-[140px] lg:flex-row lg:gap-4 lg:pt-[164px]"
    >
      <div className="w-full max-w-[650px] xl:max-w-[725px]">
        <CardReveal distance={30} delay={0.1}>
          <div className="hidden items-center justify-center pb-1 md:flex lg:justify-start">
            <span className="field-service text-secondary flex w-full items-center justify-center rounded-md px-3 py-1 text-xs leading-[125%] font-semibold -tracking-[0.24px] sm:w-fit">
              {tag}
            </span>
          </div>
        </CardReveal>
        <AdaptiveHeroTitle
          title={heading || ""}
          className="text-center font-extrabold text-white lg:text-start"
          minFontSize={16}
          maxLines={2}
          maxFontSize={48}
          textAnimation="home-page-view-port-screen-fetures"
        />
        <Copy animateOnScroll={false} delay={0.2}>
          <p className="text-decemberSky mt-4 w-full text-center text-xs font-medium sm:text-sm md:my-[26px] md:text-base lg:text-start lg:text-lg xl:max-w-[75%]">
            {description}
          </p>
        </Copy>
        <div className="mx-auto flex w-fit flex-wrap-reverse items-center justify-center gap-4 sm:gap-5 lg:mx-0 lg:w-full lg:justify-start">
          <AppsRating delayApple={0.3} delayGoogle={0.4} />
          <CardReveal distance={50} delay={0.6} className="w-full sm:w-fit">
            <div className="flex w-full flex-col items-center gap-1.5 px-2 pt-5 sm:w-fit">
             

              <Link
              target="_blank"
        href="https://audit.local.contractorplus.app/"
        className={`secondary-btn bg-red-linear h-10 gap-2`}
      >
       {getStartedFreeBtn}
            <SideIcon />
      </Link>
              <CardRequiredButton
                className="text-wallStreet sm:text-secondary"
                text={nccTxt}
              />
            </div>
          </CardReveal>
        </div>
      </div>
      <div className="relative h-full max-h-[436px] w-full max-w-[650px] rounded-[12px] bg-white lg:max-w-[450px]">
        <GooglePoster location={location} />
      </div>
    </section>
  );
};

export default LeadGenerationHero;
