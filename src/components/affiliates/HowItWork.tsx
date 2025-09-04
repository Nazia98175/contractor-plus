"use client";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";
import Copy from "../common/Copy";
import HowItWorkCard from "./HowItWorkCard";
import Image from "next/image";

const HowItWork = (cardsData: any) => {
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
    <section className="relative">
      <img
        className="pointer-events-none absolute top-[-10%] z-0 w-full"
        src={"/images/webp/how-it-work.webp"}
        alt=""
      />
      <div className="main-container pt-[400px]">
        <Copy delay={0.1}>
          <h4 className="section-heading how-it-work-affiliates text-center">
            How it works
          </h4>
        </Copy>

        <div id="contractor-section" ref={sectionRef} className="relative z-20">
          {/* Gray line */}
          <span className="bg-wallStreet absolute top-0 left-1/2 z-[1] block h-[97%] w-[1px] translate-x-[-50%]"></span>
          {/* Red dot */}
          <span
            ref={redDotRef}
            className="from-redPigment to-netherworld absolute top-0 left-1/2 z-[2] block h-[18px] w-[1px] translate-x-[-50%] rounded-full bg-gradient-to-br opacity-100 will-change-transform"
          />

          <HowItWorkCard cardsData={cardsData} />
        </div>
      </div>
    </section>
  );
};

export default HowItWork;
