"use client";
import { useRef } from "react";
import Copy from "../common/Copy";
import { PlusIconAnimation } from "../common/Icons";
import { useScrollHighlight } from "@/hooks/useScrollHighlight";

interface SupplierBenefitListProps {
  list: {
    text: string;
    desc: string;
  }[];
}
const EveryMile: React.FC<SupplierBenefitListProps> = ({ list }) => {
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
    <>
      <section className="relative flex flex-col gap-20 overflow-hidden pt-[67px] sm:gap-[100px] sm:pt-[94px] md:gap-[154px]">
        {list.map((item, i) => (
          <div
            key={i}
            ref={refs[i]}
            className="video-section-wrapper2 relative z-10 mx-auto max-w-[873px] px-3 backdrop-blur-[2px] sm:p-[22px]"
          >
            <Copy animateOnScroll={true} delay={0}>
              <h3 className="mb-1 text-center text-2xl font-semibold tracking-[-0.48px]">
                {item.text}
              </h3>
            </Copy>
            <Copy animateOnScroll={true} delay={0.1}>
              <p className="mb-1 text-center text-sm sm:text-base">
                {item.desc}
              </p>
            </Copy>
            <span className="how-it-work-icon icon-span">
              <PlusIconAnimation />
            </span>
          </div>
        ))}
      </section>
    </>
  );
};

export default EveryMile;
