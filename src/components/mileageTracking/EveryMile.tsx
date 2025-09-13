"use client";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import Copy from "../common/Copy";
import { PlusIconAnimation } from "../common/Icons";

const EveryMile = (cardsData: any) => {
  const sectionRef1 = useRef<HTMLDivElement>(null);
  const sectionRef2 = useRef<HTMLDivElement>(null);
  const sectionRef3 = useRef<HTMLDivElement>(null);
  const sectionRef4 = useRef<HTMLDivElement>(null);
  const sectionRef5 = useRef<HTMLDivElement>(null);
  const sectionRef6 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const refs = [
      sectionRef1,
      sectionRef2,
      sectionRef3,
      sectionRef4,
      sectionRef5,
    ];

    if (!cardsData) return;

    const total_card = cardsData.cardsData.cardsData.length;
    const extra_height = total_card * window.innerHeight;
    let ref_section_height_start = 0;
    let ref_section_height_end = 0;
    const timeout = setTimeout(() => {
      // alert("run");
      refs.forEach((ref, index) => {
        if (!ref.current) {
          return;
        }
        const refHeight = ref.current.getBoundingClientRect().height;
        ref_section_height_start =
          ref_section_height_start + refHeight - refHeight;
        ref_section_height_end = ref_section_height_start + refHeight;
        ScrollTrigger.create({
          trigger: ref.current,
          start: `-200px 40%`,
          end: `bottom center`,
          scrub: 2,
          markers: false,
          id: "boxes",
          onEnter: () => {
            ref.current?.classList.add("scroll-active");
          },
          onLeaveBack: () => {
            if (window.innerWidth >= 768) {
              ref.current?.classList.remove("scroll-active");
            }
          },
        });
      });

      ScrollTrigger.refresh();
    }, 2600);

    return () => {
      clearTimeout(timeout);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [cardsData]);

  return (
    <>
      <section className="relative flex flex-col gap-20 overflow-hidden pt-[67px] sm:gap-[100px] sm:pt-[94px] md:gap-[154px]">
        <div
          ref={sectionRef1}
          className="video-section-wrapper relative z-10 mx-auto max-w-[873px] px-3 backdrop-blur-[2px] sm:p-[22px]"
        >
          <Copy animateOnScroll={true} delay={0}>
            <h3 className="mb-1 text-center text-lg font-medium tracking-[-0.48px] duration-300 md:text-xl lg:text-2xl xl:px-30">
              Start Trip
            </h3>
          </Copy>
          <Copy animateOnScroll={true} delay={0.1}>
            <p className="mb-1 text-center text-sm font-medium duration-300 sm:text-base xl:px-30">
              One tap to begin tracking on mobile
            </p>
          </Copy>
          <span className="how-it-work-icon icon-span">
            <PlusIconAnimation />
          </span>
        </div>
        <div
          ref={sectionRef2}
          className="video-section-wrapper relative z-10 mx-auto max-w-[873px] px-3 backdrop-blur-[2px] sm:p-[22px]"
        >
          <Copy animateOnScroll={true} delay={0}>
            <h3 className="mb-1 text-center text-2xl font-medium tracking-[-0.48px] duration-300 xl:px-30">
              End Trip
            </h3>
          </Copy>
          <Copy animateOnScroll={true} delay={0.1}>
            <p className="mb-1 text-center text-sm font-medium duration-300 sm:text-base xl:px-30">
              Stop with a tap; auto‑logged in your history
            </p>
          </Copy>
          <span className="how-it-work-icon icon-span">
            <PlusIconAnimation />
          </span>
        </div>
        <div
          ref={sectionRef3}
          className="video-section-wrapper relative z-10 mx-auto max-w-[873px] px-3 backdrop-blur-[2px] sm:p-[22px]"
        >
          <Copy animateOnScroll={true} delay={0}>
            <h3 className="mb-1 text-center text-2xl font-medium tracking-[-0.48px] duration-300 xl:px-30">
              Review & Edit
            </h3>
          </Copy>
          <Copy animateOnScroll={true} delay={0.1}>
            <p className="mb-1 text-center text-sm font-medium duration-300 sm:text-base xl:px-30">
              Fix a missed start/stop or add a note
            </p>
          </Copy>
          <span className="how-it-work-icon icon-span">
            <PlusIconAnimation />
          </span>
        </div>

        <div
          ref={sectionRef4}
          className="video-section-wrapper relative z-10 mx-auto max-w-[873px] px-3 backdrop-blur-[2px] sm:p-[22px]"
        >
          <Copy animateOnScroll={true} delay={0}>
            <h3 className="mb-1 text-center text-2xl font-medium tracking-[-0.48px] duration-300 xl:px-30">
              Generate Report
            </h3>
          </Copy>
          <Copy animateOnScroll={true} delay={0.1}>
            <p className="mb-1 text-center text-sm font-medium duration-300 sm:text-base xl:px-30">
              Choose a date range, get totals by person/team
            </p>
          </Copy>
          <span className="how-it-work-icon icon-span">
            <PlusIconAnimation />
          </span>
        </div>
        <div
          ref={sectionRef5}
          className="video-section-wrapper relative z-10 mx-auto max-w-[873px] px-3 backdrop-blur-[2px] sm:p-[22px]"
        >
          <Copy animateOnScroll={true} delay={0}>
            <h3 className="mb-1 text-center text-2xl font-medium tracking-[-0.48px] duration-300 xl:px-30">
              Export & Reimburse
            </h3>
          </Copy>
          <Copy animateOnScroll={true} delay={0.1}>
            <p className="mb-1 text-center text-sm font-medium duration-300 sm:text-base xl:px-30">
              CSV/PDF out, multiply by IRS rate, reimburse with confidence
            </p>
          </Copy>
          <span className="how-it-work-icon icon-span">
            <PlusIconAnimation />
          </span>
        </div>
      </section>
    </>
  );
};

export default EveryMile;
