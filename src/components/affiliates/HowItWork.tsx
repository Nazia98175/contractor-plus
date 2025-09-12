"use client";
import { useScrollDotAnimation } from "@/hooks/useScrollDotAnimation";
import Copy from "../common/Copy";
import HowItWorkCard from "./HowItWorkCard";

interface HowItWorkProps {
  title?: string;
  cardsData: {
    text: string;
    desc: string;
  }[];
}

const HowItWork = ({ title, cardsData }: HowItWorkProps) => {
  const { sectionRef, dotRef } = useScrollDotAnimation({
    delay: 2.6,
  });
  return (
    <section className="relative">
      <img
        className="pointer-events-none absolute top-[-5%] z-0 w-full md:top-[-10%]"
        src="/images/webp/how-it-work.webp"
        alt="bg"
      />
      <div className="main-container pt-[130px] sm:pt-[300px] md:pt-[400px]">
        <Copy delay={0.1}>
          <h4 className="section-heading how-it-work-affiliates text-center">
            {title || "How it works"}
          </h4>
        </Copy>

        <div ref={sectionRef} className="relative z-20">
          {/* Gray line */}
          <span className="bg-wallStreet absolute top-0 left-1/2 z-[1] block h-[97%] w-[1px] -translate-x-1/2"></span>
          {/* Red dot */}
          <span
            ref={dotRef}
            className="from-redPigment to-netherworld absolute top-0 left-1/2 z-[2] block h-[18px] w-[1px] -translate-x-1/2 rounded-full bg-gradient-to-br opacity-100 will-change-transform"
          />
          <HowItWorkCard cardsData={cardsData} />
        </div>
      </div>
    </section>
  );
};

export default HowItWork;
