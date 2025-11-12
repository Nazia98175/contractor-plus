"use client";
import React, { useEffect, useRef } from "react";
import { RedClipIcon, SideIcon, SlackIcon } from "../common/Icons";
import CardReveal from "../common/CardReveal";
import AdaptiveHeroTitle from "../industry/AdaptiveHeroTitle";
import Copy from "../common/Copy";
import Link from "next/link";
import useGsapFadeIn from "@/hooks/useGsapFadeIn";
import gsap from "gsap";
interface mainItems {
  heroSubTitle?: string;
  heroTitle?: string;
  heroDescription?: string;
  btnText?: string;
}
interface DevelopersApiHeroProps {
  mainItems: mainItems;
}
const DevelopersApiHero: React.FC<DevelopersApiHeroProps> = ({ mainItems }) => {
  const { heroSubTitle, heroTitle, heroDescription, btnText } = mainItems;
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
  useGsapFadeIn(["#common-homepage-wrapper", "#home-page-view-port-screen"]);
  return (
    <section className="relative z-10 pt-[46px] pb-10 sm:pt-20 md:pb-0 lg:pt-[139px] xl:pt-[154px]">
      <RedClipIcon className="pointer-events-none absolute top-[112px] right-[-194px] hidden w-full max-w-[993px] md:top-[-202px] md:right-0 md:block" />

      <div className="relative mx-auto flex w-full max-w-[876px] flex-col items-center justify-center px-2 pt-8 md:pt-0">
        <CardReveal distance={30} delay={0.1}>
          <div className="items-center justify-center">
            <span className="bg-darkKnight text-wallStreet rounded-[6px] px-3 py-1 text-xs font-semibold">
              {heroSubTitle || "Developers API"}
            </span>
          </div>
        </CardReveal>
        <AdaptiveHeroTitle
          title={
            heroTitle ||
            "The OS at the center of your stack—not just another app"
          }
          className="developer-api-hero mb-4 w-full text-center leading-[140%] font-extrabold"
          minFontSize={16}
          maxLines={2}
          maxFontSize={48}
          textAnimation="home-page-view-port-screen-fetures"
        />
        <Copy delay={0.4} animateOnScroll={false}>
          <p className="text-ashGray mx-auto mb-3 max-w-[826px] text-center text-xs font-semibold sm:text-sm md:text-base md:font-medium lg:text-lg">
            {heroDescription ||
              "Build custom flows, multi-location (or division) dashboards, automate the busywork, and wire Contractor+ into your stack so it fits like a glove. Trusted by 50,000+ contractors."}
          </p>
        </Copy>
        <CardReveal distance={50} delay={0.5}>
          <div className="flex w-full flex-col items-center justify-center gap-2 sm:flex-row">
            <Link
              href={"https://developer.contractorplus.app"}
              className="secondary-btn bg-red-linear h-10 gap-2"
            >
              {btnText || "View API Reference"} <SideIcon />
            </Link>
            <Link
              href={
                "https://contractorapisupport.slack.com/join/shared_invite/zt-3hc04uiiq-w4KYFmUX1NMm9CTgyb1XYg#/shared-invite/email"
              }
              target="_blank"
            >
              <button className="font-montserrat flex items-center gap-1.5 px-6 py-2.5 text-base font-bold tracking-[0.1px] text-white">
                <SlackIcon /> Join us on Slack
              </button>
              <span className="font-myriad text-gray pl-10 text-base font-semibold">
                Need help integrating?
              </span>
            </Link>
          </div>
        </CardReveal>
      </div>
    </section>
  );
};

export default DevelopersApiHero;
