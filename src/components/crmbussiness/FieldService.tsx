"use client";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTranslations } from "next-intl";
import React from "react";
import ScrollOverlapCards from "../common/ScrollOverlapCards";
import TextAnimation from "../common/TextAnimation";

interface TheServiceProps {
  fieldService: any;
  slug: string;
}

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const FieldService: React.FC<TheServiceProps> = ({ fieldService, slug }) => {
  const t = useTranslations();

  return (
    <section className="relative z-30 px-2 pt-14 sm:pt-20 lg:pt-2">
      <TextAnimation animateOnScroll={true} delay={0.3}>
        <h2 className="text-secondary mx-auto max-w-[830px] pb-6 text-center text-xl font-semibold -tracking-[0.72px] md:hidden">
          {fieldService?.title}
        </h2>
      </TextAnimation>
      <TextAnimation animateOnScroll={true} delay={0.3}>
        <h2 className="gradient-text mx-auto hidden max-w-[813px] pb-10 text-center text-4xl font-semibold -tracking-[0.72px] md:block">
          {fieldService?.title}
        </h2>
      </TextAnimation>
      <ScrollOverlapCards
        theme="dark"
        slug={slug}
        fieldService={fieldService}
      />
    </section>
  );
};

export default FieldService;
