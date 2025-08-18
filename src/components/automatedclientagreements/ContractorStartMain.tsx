"use client";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";
import Copy from "../common/Copy";
import ContractorStart from "./ContractorStart";

const ContractorStartMain = (cardsData: any) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const redDotRef = useRef<HTMLSpanElement>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (!cardsData) return;
    // alert("this is run now");
    const ctx = gsap.context(() => {
      if (!sectionRef.current || !redDotRef.current) return;
      setTimeout(() => {
        // ScrollTrigger.refresh();
        const total_crm_cards = cardsData.cardsData.length;
        const crm_cards_height = total_crm_cards * window.innerHeight;

        const sectionEl = sectionRef.current;
        const redDotEl = redDotRef.current;

        if (!sectionEl || !redDotEl) return;

        // Fix: Use sectionEl.offsetHeight directly since we already checked it exists
        const sectionElHeight = sectionEl.getBoundingClientRect().height;

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionEl,
            start: `-12% 40%`,
            end: `bottom center`,
            scrub: 1,
            markers: false,
            id: "main",
          },
        });

        // Animate red dot down the full height of the section
        tl.set(redDotEl, { opacity: 1 });
        tl.to(redDotEl, {
          y: sectionElHeight, // Use the variable directly, not in arrow function
          ease: "none",
        });

        ScrollTrigger.refresh();
      }, 2600);
    }, sectionRef);

    return () => ctx.revert();
  }, [cardsData]);

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
      <div
        id="contractor-section"
        ref={sectionRef}
        className="relative mt-10 sm:mt-[51px]"
      >
        {/* Gray line */}
        <span className="bg-wallStreet absolute top-0 left-1/2 z-[1] block h-[97%] w-[1px] translate-x-[-50%]"></span>
        {/* Red dot */}
        <span
          ref={redDotRef}
          className="from-redPigment to-netherworld absolute top-0 left-1/2 z-[2] block h-[18px] w-[1px] translate-x-[-50%] rounded-full bg-gradient-to-br opacity-100 will-change-transform"
        />

        <ContractorStart cardsData={cardsData} />
      </div>
    </section>
  );
};

export default ContractorStartMain;
