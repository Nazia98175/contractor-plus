"use client";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";
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
  const sectionRef = useRef<HTMLDivElement>(null);
  const redDotRef = useRef<HTMLSpanElement>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (!cardsData || cardsData.length === 0) return;

    const ctx = gsap.context(() => {
      if (!sectionRef.current || !redDotRef.current) return;

      setTimeout(() => {
        const sectionEl = sectionRef.current!;
        const redDotEl = redDotRef.current!;
        const sectionElHeight = sectionEl.getBoundingClientRect().height;

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionEl,
            start: `-12% 40%`,
            end: `bottom center`,
            scrub: 1,
            markers: false,
          },
        });

        tl.set(redDotEl, { opacity: 1 });
        tl.to(redDotEl, {
          y: sectionElHeight,
          ease: "none",
        });

        ScrollTrigger.refresh();
      }, 2600);
    }, sectionRef);

    return () => ctx.revert();
  }, [cardsData]);

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
            ref={redDotRef}
            className="from-redPigment to-netherworld absolute top-0 left-1/2 z-[2] block h-[18px] w-[1px] -translate-x-1/2 rounded-full bg-gradient-to-br opacity-100 will-change-transform"
          />
          <HowItWorkCard cardsData={cardsData} />
        </div>
      </div>
    </section>
  );
};

export default HowItWork;
