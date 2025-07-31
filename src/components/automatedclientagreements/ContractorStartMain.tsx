"use client";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import Copy from "../common/Copy";
import ContractorStart from "./ContractorStart";

const ContractorStartMain = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const redDotRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      if (!sectionRef.current || !redDotRef.current) return;

      const sectionEl = sectionRef.current;
      const redDotEl = redDotRef.current;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionEl,
          start: "top 40%",
          end: "bottom center",
          scrub: true,
          invalidateOnRefresh: true,
        },
      });

      // Animate red dot down the full height of the section
      tl.set(redDotEl, { opacity: 1 });
      tl.to(redDotEl, {
        y: () => sectionEl.offsetHeight - 110, // Adjust value as needed
        ease: "none",
      });

      ScrollTrigger.refresh();
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="main-container mt-[90px]">
      <Copy delay={0.1}>
        <h4 className="section-heading gradient-text-2 text-center">
          (We) Manage every contract from start to finish
        </h4>
      </Copy>
      <Copy delay={0.2}>
        <p className="text-wallStreet mt-4 text-center text-sm font-medium sm:text-base">
          The features they hide behind paywalls come standard here.
        </p>
      </Copy>
      <div ref={sectionRef} className="relative mt-10 sm:mt-[51px]">
        {/* Gray line */}
        <span className="bg-wallStreet absolute top-0 left-1/2 z-[1] block h-[97%] w-[1px] translate-x-[-50%]"></span>
        {/* Red dot */}
        <span
          ref={redDotRef}
          className="from-redPigment to-netherworld absolute top-0 left-1/2 z-[2] block h-[18px] w-[1px] translate-x-[-50%] rounded-full bg-gradient-to-br opacity-0 will-change-transform"
        />

        <ContractorStart />
      </div>
    </section>
  );
};

export default ContractorStartMain;
