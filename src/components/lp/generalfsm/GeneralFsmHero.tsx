"use client";
import gsap from "gsap";
import Image from "next/image";
import { useEffect } from "react";
import useGsapFadeIn from "@/hooks/useGsapFadeIn";
import Copy from "@/components/common/Copy";
import AdaptiveHeroTitle from "@/components/industry/AdaptiveHeroTitle";
import CardReveal from "@/components/common/CardReveal";
import FreeTrialButton from "@/components/common/FreeTrialButton";
import CardRequiredButton from "@/components/common/CardRequiredButton";
import StatisticCard from "@/components/estimaticAi/StatisticCard";
import CommonFormField from "@/components/common/CommonFormField";
import { AppleIcon, PlayStoreIcon, StartIcon } from "@/components/common/Icons";

const GeneralFsmHero = () => {
  useGsapFadeIn(["#common-homepage-wrapper", "#home-page-view-port-screen"]);
  const statisticsData = [
    {
      id: 1,
      title: "5-10%",
      subTitle: "Revenue increase from capturing un-invoiced billables",
    },
    {
      id: 2,
      title: "$100k+",
      subTitle: "More in annual profit from fewer underbids",
    },
    {
      id: 3,
      title: "11+ hours",
      subTitle: "Saved weekly for a 5-person crew",
    },
    {
      id: 4,
      title: "<9 minutes",
      subTitle: "Average time to create a ready-to-send AI estimate",
    },
  ];
  return (
    <section className="bg-cover pb-8 text-white md:pb-14 xl:bg-[url('/images/webp/estimatic-hero-bg.webp')]">
      <div className="main-container flex justify-center gap-10 pt-[126px] pb-1.5 xl:justify-between">
        {/* Left Content */}
        <div className="w-full md:max-w-[640px] md:pt-8">
          <Image
            src="/images/svg/estimatic.svg"
            width={160}
            height={24}
            className="mx-auto mb-[51px] xl:hidden"
            alt="Estimatic logo"
          />

          <Copy animateOnScroll={false} delay={1}>
            <h5 className="text-wallStreet mb-[10px] text-center text-xs font-semibold tracking-[-0.24px] lg:mb-0 xl:text-left">
              The Contractor OS
            </h5>
          </Copy>
          <AdaptiveHeroTitle
            title={
              "Your all-in-one app locks features behind the priciest plans"
            }
            className="gradient-2 text-center leading-[128%] font-extrabold xl:text-left"
            minFontSize={25}
            maxLines={2}
            maxFontSize={52}
            textAnimation="home-page-view-port-screen-estimatic-ai"
          />
          <Copy animateOnScroll={false} delay={1.2}>
            <p className="text-secondary sm:text-decemberSky mx-auto mt-2.5 mb-4 text-center text-xs font-semibold sm:my-4 sm:text-sm md:text-base md:font-medium lg:my-[26px] lg:text-lg xl:text-left">
              They promised one software to run your business, but forgot to
              mention features come at a price. Contractor+ gives you
              everything.
            </p>
          </Copy>

          {/* Buttons */}
          <div className="flex w-full flex-col items-center gap-4 sm:gap-5 md:flex-row">
            {/* Free Account Buttons */}
            <CardReveal distance={50} className="w-full xl:w-fit" delay={1.3}>
              <div>
                <CommonFormField
                  title=""
                  subTitle=""
                  ncc={"No credit card required"}
                  placeholder="Your email"
                  createBtn={"Get started FREE"}
                  mobileBtn={"Download Free App"}
                  showTitle={false}
                  variant="secondary"
                  showDescription={false}
                  desktopbtn="!min-w-[170px]"
                />
              </div>
            </CardReveal>
            <CardReveal distance={50} className="w-full xl:w-fit" delay={1.3}>
              <div className="hidden items-center justify-between gap-4 xl:flex">
                <div className="flex items-center justify-between gap-2">
                  <PlayStoreIcon />
                  <p className="text-decemberSky text-lg font-bold">4.5</p>
                  <span className="max-w-[14px]">
                    <StartIcon />
                  </span>
                </div>
                <div className="flex items-center justify-between gap-2">
                  <AppleIcon />
                  <p className="text-decemberSky text-lg font-bold">4.5</p>
                  <span className="max-w-[14px]">
                    <StartIcon />
                  </span>
                </div>
              </div>
            </CardReveal>
          </div>
        </div>

        {/* Right Content: Mock AI Message + Image */}
        <CardReveal
          distance={50}
          delay={1.2}
          className="hidden flex-col xl:flex"
        >
          <div className="relative max-w-[560px] overflow-hidden pb-10">
            <Image
              width={730}
              height={410}
              className="object-cover"
              src={"/images/webp/general-fsm-hero.webp"}
              alt="Estimatic AI software interface mockup"
            />
            <div className="ai-blur absolute bottom-[-30%] left-0 h-[80%] w-full"></div>
          </div>
        </CardReveal>
      </div>

      {/* Stats Cards */}
      <div className="main-container relative z-30 mt-12 grid grid-cols-1 place-items-center gap-5 sm:grid-cols-2 lg:grid-cols-4 xl:gap-8">
        {statisticsData.map((obj, index) => (
          <CardReveal key={index} distance={50} delay={1 + index * 0.1}>
            <StatisticCard obj={obj} />
          </CardReveal>
        ))}
      </div>
    </section>
  );
};

export default GeneralFsmHero;
