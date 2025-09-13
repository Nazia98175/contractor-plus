"use client";
import gsap from "gsap";
import Image from "next/image";
import CardReveal from "../common/CardReveal";
import Copy from "../common/Copy";
import FreeTrialButton from "../common/FreeTrialButton";
import AdaptiveHeroTitle from "../industry/AdaptiveHeroTitle";
import { useEffect, useRef } from "react";
export interface AffiliatesHeroProps {
  heroTitle?: string;
  heroDescription?: string;
  heroImg?: any;
  ctaButton?: {
    text: string;
    url: string;
  } | null;
}

const AffiliatesHero = ({
  heroTitle,
  heroDescription,
  heroImg,
}: AffiliatesHeroProps) => {
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
    <div id="home-page-view-port-screen-fetures" className="opacity-0">
      <section className="relative z-10 pt-[46px] pb-10 sm:pt-20 md:pb-0 lg:pt-[139px] xl:pt-[154px]">
        <div className="relative mx-auto flex w-full max-w-[876px] flex-col items-center justify-center px-2 pt-8 md:pt-0">
          <CardReveal distance={30} delay={0.1}>
            <div className="items-center justify-center pb-3">
              <span className="bg-darkKnight text-wallStreet rounded-[6px] px-3 py-1 text-xs font-semibold">
                Affiliate Program
              </span>
            </div>
          </CardReveal>
          <AdaptiveHeroTitle
            title={`${heroTitle}`}
            className="developer-api-hero mb-4 w-full text-center leading-[140%] font-extrabold"
            minFontSize={16}
            maxLines={2}
            maxFontSize={48}
            textAnimation="home-page-view-port-screen-fetures"
          />
          <Copy delay={0.3} animateOnScroll={false}>
            <p className="text-ashGray mx-auto mb-3 max-w-[826px] text-center text-xs font-semibold sm:text-sm md:text-base md:font-medium lg:text-lg">
              {heroDescription}
            </p>
          </Copy>
          <Copy delay={0.4} animateOnScroll={false}>
            <FreeTrialButton
              showIcon={true}
              text={"Apply to join"}
              className="flex"
            />
          </Copy>
          <CardReveal distance={50} delay={0.5}>
            <div className="relative pb-10">
              <div className="relative text-[29px]">
                <h4 className="font-portar AffiliatesHero mt-[70px] mb-1 text-center text-[50px] md:text-[65px]">
                  50/50
                  <p className="AffiliatesHeroBackground AffiliatesHeroBackground pointer-events-none absolute top-0 left-0 z-50 h-full w-full">
                    50/50
                  </p>
                </h4>
                <h5 className="AffiliatesHero-subheading font-portar text-center text-xl md:text-2xl lg:text-[29px]">
                  PARTNERSHIP
                </h5>
              </div>
              <Image
                src={heroImg?.url}
                alt="partnership-cash-hero"
                width={600}
                height={300}
              />
              <div className="AffiliatesHero-layers pointer-events-none absolute top-0 left-0 h-full w-[40%]"></div>
              <div className="AffiliatesHero-layers pointer-events-none absolute top-0 right-0 h-full w-[40%] rotate-180"></div>
            </div>
          </CardReveal>
        </div>
      </section>
    </div>
  );
};

export default AffiliatesHero;
