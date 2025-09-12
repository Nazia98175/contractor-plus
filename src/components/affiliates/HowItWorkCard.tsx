"use client";
import { useScrollHighlight } from "@/hooks/useScrollHighlight";
import { useRef } from "react";
import Copy from "../common/Copy";
import { PlusIconAnimation } from "../common/Icons";

interface HowItWorkCardProps {
  cardsData: {
    text: string;
    desc: string;
  }[];
}

const HowItWorkCard = ({ cardsData }: HowItWorkCardProps) => {
  const refs = cardsData.map(() => useRef<HTMLDivElement>(null));

  // hook call
  useScrollHighlight({
    refs,
    delay: 2.6,
  });

  return (
    <section className="relative flex flex-col gap-20 overflow-hidden pt-[67px] sm:gap-[100px] sm:pt-[94px] md:gap-[154px]">
      {cardsData.map((card, index) => (
        <div
          key={index}
          ref={refs[index]}
          className="video-section-wrapper bg-rgba18 relative z-10 mx-auto w-full max-w-[873px] p-3 backdrop-blur-[.52px] sm:p-[22px]"
        >
          <h3 className="mb-1 text-center text-2xl font-semibold tracking-[-0.48px]">
            {card.text}
          </h3>
          <Copy animateOnScroll={true} delay={0.1}>
            <p className="how-it-work-description">{card.desc}</p>
          </Copy>
          <span className="how-it-work-icon icon-span">
            <PlusIconAnimation />
          </span>
        </div>
      ))}
    </section>
  );
};

export default HowItWorkCard;
