"use client";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";
import Copy from "../common/Copy";
import HowItWorkLIst from "./HowItWorkLIst";

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
    <section className="relative mt-[60px] sm:mt-[80px] md:mt-[90px]">
      <div className="bg-athenaBlue pointer-events-none absolute top-0 right-0 hidden h-[500px] w-full max-w-[70px] rotate-[35deg] rounded-[10px] opacity-15 blur-[34px] lg:block"></div>
      <div className="main-container">
        <Copy delay={0.1}>
          <h4 className="section-heading gradient-text text-center">
            How it works
          </h4>
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

          <HowItWorkLIst cardsData={cardsData} />
        </div>
      </div>
    </section>
  );
};

export default HowItWork;
