"use client";
import React from "react";
import { RedClipIcon, SlackIcon } from "../common/Icons";
import CardReveal from "../common/CardReveal";
import AdaptiveHeroTitle from "../industry/AdaptiveHeroTitle";
import Copy from "../common/Copy";
import FreeTrialButton from "../common/FreeTrialButton";
import Link from "next/link";

const DevelopersApiHero = () => {
  return (
    <section className="relative z-10 pt-[46px] pb-10 sm:pt-20 md:pb-0 lg:pt-[139px] xl:pt-[154px]">
      <RedClipIcon className="pointer-events-none absolute top-[112px] right-[-194px] hidden w-full max-w-[993px] md:top-[-202px] md:right-0 md:block" />

      <div className="relative mx-auto flex w-full max-w-[876px] flex-col items-center justify-center px-2 pt-8 md:pt-0">
        <CardReveal distance={30} delay={0.1}>
          <div className="items-center justify-center">
            <span className="bg-darkKnight text-wallStreet rounded-[6px] px-3 py-1 text-xs font-semibold">
              Developers API
            </span>
          </div>
        </CardReveal>
        <AdaptiveHeroTitle
          title="The OS at the center of your stack—not just another app"
          className="developer-api-hero mb-4 w-full text-center leading-[140%] font-extrabold"
          minFontSize={16}
          maxLines={2}
          maxFontSize={48}
          textAnimation="home-page-view-port-screen-fetures"
        />
        <Copy delay={0.4} animateOnScroll={false}>
          <p className="text-ashGray mx-auto mb-3 max-w-[826px] text-center text-xs font-semibold sm:text-sm md:text-base md:font-medium lg:text-lg">
            Build custom flows, multi-location (or division) dashboards,
            automate the busywork, and wire Contractor+ into your stack so it
            fits like a glove. Trusted by 50,000+ contractors.
          </p>
        </Copy>
        <div className="flex w-full flex-col items-center justify-center gap-2 sm:flex-row">
          <FreeTrialButton showIcon={true} text={"View API Reference"} />
          <div>
            <button className="font-montserrat flex items-center gap-1.5 px-6 py-2.5 text-base font-bold tracking-[0.1px] text-white">
              <SlackIcon /> Join us on Slack
            </button>
            <Link
              className="font-myriad text-gray pl-10 text-base font-semibold"
              href={"/"}
            >
              Need help integrating?
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DevelopersApiHero;
