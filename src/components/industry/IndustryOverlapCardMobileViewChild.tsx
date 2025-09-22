"use client";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React from "react";
import AdaptiveHeroTitle from "../industry/AdaptiveHeroTitle";
import WantingMoreMobile from "./WantingMoreMobile";

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);
export interface TheServiceProps {
  fieldServiceData: any;
  slug?: any;
  theme: "light" | "dark" | "estimateTheme";
  apiData?: boolean;
  mainClassName?: string;
}

const OverlapCardMobileViewChild: React.FC<TheServiceProps> = ({
  fieldServiceData,
  slug,
  theme,
  apiData = true,
  mainClassName,
}) => {
  return (
    <section className="relative z-30 px-2 pt-14 sm:pt-20 lg:pt-2">
      <div>
        <AdaptiveHeroTitle
          title={fieldServiceData?.title}
          className={`section-heading-2 gradient-text-2 mx-auto block pb-10 text-center leading-relaxed font-semibold -tracking-[0.72px] ${mainClassName || "max-w-[813px]"}`}
          minFontSize={24}
          maxLines={2}
          maxFontSize={42}
        />
      </div>
      <WantingMoreMobile
        theme={theme}
        slug={slug || ""}
        fieldServiceData={fieldServiceData}
        apiData={apiData}
      />
    </section>
  );
};

export default OverlapCardMobileViewChild;
