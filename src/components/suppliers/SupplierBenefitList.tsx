"use client";
import { useRef } from "react";
import Copy from "../common/Copy";
import { PlusIconAnimation } from "../common/Icons";
import { useScrollHighlight } from "@/hooks/useScrollHighlight";
interface SupplierBenefitListProps {
  cardsData: {
    text: string;
    desc: string;
  }[];
}
const SupplierBenefitList: React.FC<SupplierBenefitListProps> = ({
  cardsData,
}) => {
  const refs = [
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
  ];

  useScrollHighlight({
    refs,
    delay: 2.6,
  });

  return (
    <section className="relative flex flex-col gap-20 overflow-hidden pt-[67px] sm:gap-[100px] sm:pt-[94px] md:gap-[154px]">
      {cardsData.map((item, i) => (
        <div
          key={i}
          ref={refs[i]}
          className="video-section-wrapper relative z-10 mx-auto w-full max-w-[873px] bg-[rgba(255,255,255,0.01)] p-3 backdrop-blur-[2px] sm:px-[22px] sm:py-3"
        >
          <Copy animateOnScroll={true} delay={0}>
            <h3 className="mb-1 text-center text-2xl font-semibold tracking-[-0.48px]">
              {item.text}
            </h3>
          </Copy>
          <Copy animateOnScroll={true} delay={0.1}>
            <p
              role="paragraph"
              className="mb-1 text-center text-sm sm:text-base"
            >
              {item.desc}
            </p>
          </Copy>
          <span className="how-it-work-icon icon-span">
            <PlusIconAnimation />
          </span>
        </div>
      ))}
    </section>
  );
};

export default SupplierBenefitList;
