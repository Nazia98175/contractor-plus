"use client";
import React from "react";
import CloudsAnimation from "../common/CloudsAnimation";
import CommonFaqLayout from "../common/CommonFaqLayout";
import UseFaqToggle from "../hook/UseFaqToggle";

type FaqItemType = {
  id: number;
  question: string;
  answer: string;
  className?: string;
  variant?: string;
};
interface Props {
  faqitems: FaqItemType[];
  className?: string;
  variant?: "hvac" | "light" | "dark";
  heading: string;
  isClaud?: boolean;
  isBlueLinear?: boolean;
}
const HvacFaq: React.FC<Props> = ({
  className = "",
  faqitems,
  variant,
  heading,
  isClaud = true,
  isBlueLinear = true,
}) => {
  const { openIndex, toggleFaq } = UseFaqToggle();

  return (
    <div className={`${className} relative overflow-hidden`}>
      <section className="relative z-30 overflow-hidden">
        {isBlueLinear && (
          <div className="bg-athenaBlue pointer-events-none absolute top-0 right-0 hidden h-[500px] w-full max-w-[70px] rotate-[35deg] rounded-[10px] opacity-15 blur-[34px] lg:block"></div>
        )}
        <CommonFaqLayout
          className="w-full px-2 py-10"
          heading={heading}
          description="Frequently asked questions"
          faqitems={faqitems}
          openIndex={openIndex}
          onToggle={toggleFaq}
          variant={variant}
        />
      </section>
      {isClaud && (
        <div className="mt-8 md:h-[76px]">
          <CloudsAnimation
            cloud1Class="bottom-[61px] sm:bottom-[50px] md:bottom-[53px] lg:bottom-0"
            cloud2Class="bottom-[57px] sm:bottom-[50px] md:bottom-[55px] lg:bottom-0"
          />
          <div className="bg-white-linear absolute -bottom-3 z-50 h-7 w-full drop-shadow-[0_30px_30px_rgba(255,255,255,0.7)]"></div>
        </div>
      )}
    </div>
  );
};

export default HvacFaq;
