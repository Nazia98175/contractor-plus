"use client";
import { useRef } from "react";
import Copy from "../common/Copy";
import { PlusIconAnimation } from "../common/Icons";
import { useScrollHighlight } from "@/hooks/useScrollHighlight";

const SupplierBenefitList = (cardsData: any) => {
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
      {[
        {
          title: "In-flow product placement",
          desc: "Your SKUs appear where contractors are specifying materials—not in a separate marketplace tab.",
        },
        {
          title: "Higher conversion, lower friction",
          desc: "Estimates, approvals, and orders happen in one flow. No copy/paste, fewer abandoned carts.",
        },
        {
          title: "Local wins",
          desc: "Map catalog to stores and show region-specific pricing & availability to drive pickup or delivery.",
        },
        {
          title: "Demand insights",
          desc: "See which SKUs get spec’d, how often they make final lists, and where to stock deeper.",
        },
        {
          title: "Co-marketing & preferencing",
          desc: "Featured placements, curated lists by trade, and seasonal promos tied to job templates.",
        },
        {
          title: "Mobile-first experience",
          desc: "Specs and ordering that run smoothly in the field, not just at a desk.",
        },
      ].map((item, i) => (
        <div
          key={i}
          ref={refs[i]}
          className="video-section-wrapper relative z-10 mx-auto w-full max-w-[873px] bg-[rgba(255,255,255,0.01)] p-3 backdrop-blur-[2px] sm:px-[22px] sm:py-3"
        >
          <Copy animateOnScroll={true} delay={0}>
            <h3 className="mb-1 text-center text-2xl font-semibold tracking-[-0.48px]">
              {item.title}
            </h3>
          </Copy>
          <Copy animateOnScroll={true} delay={0.1}>
            <p className="mb-1 text-center text-sm sm:text-base">{item.desc}</p>
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
