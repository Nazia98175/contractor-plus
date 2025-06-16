"use client";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTranslations } from "next-intl";
import React from "react";
import ScrollOverlapCards from "../common/ScrollOverlapCards";
import TextAnimation from "../common/TextAnimation";

export interface TheServiceProps {
  fieldService: any;
  slug?: string;
  theme: "light" | "dark" | "estimateTheme";
}

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const FieldService: React.FC<TheServiceProps> = ({
  fieldService,
  slug,
  theme,
}) => {
  const t = useTranslations();

  return (
    <section className="relative z-30 px-2 pt-14 sm:pt-20 lg:pt-2">
      {/* <TextAnimation animateOnScroll={true} delay={0.3}>
        <h2 className="text-secondary 3xl:hidden mx-auto max-w-[830px] pb-6 text-center text-xl font-semibold -tracking-[0.72px]">
          {fieldService?.title}
        </h2>
      </TextAnimation> */}
      <TextAnimation animateOnScroll={true} delay={0.3}>
        <h2 className="gradient-text 3xl:hidden mx-auto block max-w-[813px] pb-10 text-center text-4xl font-semibold -tracking-[0.72px]">
          {fieldService?.title}
        </h2>
      </TextAnimation>
      <ScrollOverlapCards
        theme={theme}
        slug={slug || ""}
        fieldService={fieldService}
      />
    </section>
  );
};

export default FieldService;
