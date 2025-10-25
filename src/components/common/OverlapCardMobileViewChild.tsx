"use client";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React from "react";
import AdaptiveHeroTitle from "../industry/AdaptiveHeroTitle";
import OverlapCardMobileView from "./OverlapCardMobileView";

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);
export interface TheServiceProps {
  fieldService: any;
  slug?: string;
  theme: "light" | "dark" | "estimateTheme";
  apiData?: boolean;
  mainClassName?: string;
}

const OverlapCardMobileViewChild: React.FC<TheServiceProps> = ({
  fieldService,
  slug,
  theme,
  apiData = true,
  mainClassName,
}) => {
  console.log(fieldService, "field service");

  return (
    <section className="relative z-30 px-2 pt-14 sm:pt-20 lg:pt-2">
      <div>
        <AdaptiveHeroTitle
          title={fieldService?.title}
          className={`gradient-text mx-auto block pb-10 text-center leading-relaxed font-semibold -tracking-[0.72px] ${mainClassName || "max-w-[813px]"}`}
          minFontSize={24}
          maxLines={2}
          maxFontSize={42}
        />
      </div>
      <OverlapCardMobileView
        theme={theme}
        slug={slug || ""}
        fieldService={fieldService}
        apiData={apiData}
      />
    </section>
  );
};

export default OverlapCardMobileViewChild;
