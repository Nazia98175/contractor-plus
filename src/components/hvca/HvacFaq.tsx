"use client";
import React from "react";
import TextAnimation from "../common/TextAnimation";

import UseFaqToggle from "../hook/UseFaqToggle";
import HvacFaqList from "./HvacFaqList";
import Image from "next/image";
import PrimaryAnimatedText from "../common/PrimaryAnimatedText";
import CloudsAnimation from "../common/CloudsAnimation";
import CommonFaqLayout from "../common/CommonFaqLayout";


type FaqItemType = {
  id: number;
  question: string;
  answer: string;
};

interface Props {
  faqitems: {
    title?: string;
    sub_title?: string;
    faq?: FaqItemType[]; 
  };
  className?: string;
  variant?: "hvac" | "light" | "dark";
}

const HvacFaq: React.FC<Props> = ({ className = "", faqitems, variant }) => {
  const { openIndex, toggleFaq } = UseFaqToggle();
console.log(faqitems , "feild faq")
  return (
    <div className={`${className} relative overflow-hidden`}>
      <section className="relative z-30 overflow-hidden">
        <div className="bg-athenaBlue pointer-events-none absolute top-0 right-0 hidden h-[500px] w-full max-w-[70px] rotate-[35deg] rounded-[10px] opacity-15 blur-[34px] lg:block"></div>
        <CommonFaqLayout
          className="w-full px-2 py-10"
          heading={faqitems?.title || ""}
          description={faqitems?.sub_title || ""}
          faqitems={faqitems?.faq || []}
          openIndex={openIndex}
          onToggle={toggleFaq}
          variant={variant}
        />
      </section>
      <div className="mt-8 md:h-[76px]">
        <CloudsAnimation
          cloud1Class="bottom-[61px] sm:bottom-[50px] md:bottom-[53px] lg:bottom-0"
          cloud2Class="bottom-[57px] sm:bottom-[50px] md:bottom-[55px] lg:bottom-0"
        />
        <div className="bg-white-linear absolute -bottom-3 z-50 h-7 w-full drop-shadow-[0_30px_30px_rgba(255,255,255,0.7)]"></div>
      </div>
    </div>
  );
};

export default HvacFaq;
