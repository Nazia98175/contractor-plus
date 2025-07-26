"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ContractorStart from "./ContractorStart";

const ContractorStartMain = () => {
  const sectionRef = useRef<HTMLElement>(null);
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
          start: "top top",
          end: "bottom bottom",
          scrub: true,
          invalidateOnRefresh: true,
        },
      });

      // Animate red dot down the full height of the section
      tl.to(redDotEl, {
        y: () => sectionEl.offsetHeight - 100, // Adjust to avoid overflow
        ease: "none",
      });

      ScrollTrigger.refresh();
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <main
      ref={sectionRef}
      className="bg-kuroiBlack relative pt-[67px] sm:pt-[157px]"
    >
      {/* Gray line */}
      <span className="bg-wallStreet absolute top-0 left-1/2 z-[1] block h-full w-[1px] translate-x-[-50%]"></span>

      {/* Red dot */}
      <span
        ref={redDotRef}
        className="absolute top-0 left-1/2 z-[2] block h-[18px] w-[1px] translate-x-[-50%] rounded-full bg-gradient-to-br from-[#EE1E25] to-[#881115]"
      ></span>

      <ContractorStart />
    </main>
  );
};

export default ContractorStartMain;
