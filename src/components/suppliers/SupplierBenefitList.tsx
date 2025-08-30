"use client";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import Copy from "../common/Copy";
import { PlusIconAnimation } from "../common/Icons";

const SupplierBenefitList = (cardsData: any) => {
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
      sectionRef6,
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
            ref.current?.classList.add("scroll-active-2");
          },
          onLeaveBack: () => {
            if (window.innerWidth >= 768) {
              ref.current?.classList.remove("scroll-active-2");
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
          className="video-section-wrapper relative z-10 mx-auto w-full max-w-[873px] bg-[rgba(255,255,255,0.01)] p-3 backdrop-blur-[2px] sm:px-[22px] sm:py-3"
        >
          <Copy animateOnScroll={true} delay={0}>
            <h3 className="mb-1 text-center text-lg font-semibold tracking-[-0.48px] duration-300 md:text-xl lg:text-2xl">
              In‑flow product placement
            </h3>
          </Copy>
          <Copy animateOnScroll={true} delay={0.1}>
            <p className="mb-1 text-center text-sm font-semibold duration-300 sm:text-base">
              Your SKUs appear where contractors are specifying materials—not in
              a separate marketplace tab.
            </p>
          </Copy>
          <span className="icon-span mt-[18px] flex justify-center duration-300">
            <PlusIconAnimation />
          </span>
        </div>
        <div
          ref={sectionRef2}
          className="video-section-wrapper relative z-10 mx-auto w-full max-w-[873px] bg-[rgba(255,255,255,0.01)] p-3 backdrop-blur-[2px] sm:px-[22px] sm:py-3"
        >
          <Copy animateOnScroll={true} delay={0}>
            <h3 className="mb-1 text-center text-2xl font-semibold tracking-[-0.48px] duration-300">
              Higher conversion, lower friction
            </h3>
          </Copy>
          <Copy animateOnScroll={true} delay={0.1}>
            <p className="mb-1 text-center text-sm duration-300 sm:text-base">
              Estimates, approvals, and orders happen in one flow. No
              copy/paste, fewer abandoned carts.
            </p>
          </Copy>
          <span className="icon-span mt-[18px] flex justify-center duration-300">
            <PlusIconAnimation />
          </span>
        </div>
        <div
          ref={sectionRef3}
          className="video-section-wrapper relative z-10 mx-auto w-full max-w-[873px] bg-[rgba(255,255,255,0.01)] p-3 backdrop-blur-[2px] sm:px-[22px] sm:py-3"
        >
          <Copy animateOnScroll={true} delay={0}>
            <h3 className="mb-1 text-center text-2xl font-semibold tracking-[-0.48px] duration-300">
              Local wins
            </h3>
          </Copy>
          <Copy animateOnScroll={true} delay={0.1}>
            <p className="mb-1 text-center text-sm duration-300 sm:text-base">
              Map catalog to stores and show region‑specific pricing &
              availability to drive pickup or delivery.
            </p>
          </Copy>
          <span className="icon-span mt-[18px] flex justify-center duration-300">
            <PlusIconAnimation />
          </span>
        </div>

        <div
          ref={sectionRef4}
          className="video-section-wrapper relative z-10 mx-auto w-full max-w-[873px] bg-[rgba(255,255,255,0.01)] p-3 backdrop-blur-[2px] sm:px-[22px] sm:py-3"
        >
          <Copy animateOnScroll={true} delay={0}>
            <h3 className="mb-1 text-center text-2xl font-semibold tracking-[-0.48px] duration-300">
              Demand insights
            </h3>
          </Copy>
          <Copy animateOnScroll={true} delay={0.1}>
            <p className="mb-1 text-center text-sm duration-300 sm:text-base">
              See which SKUs get spec’d, how often they make final lists, and
              where to stock deeper.
            </p>
          </Copy>
          <span className="icon-span mt-[18px] flex justify-center duration-300">
            <PlusIconAnimation />
          </span>
        </div>
        <div
          ref={sectionRef5}
          className="video-section-wrapper relative z-10 mx-auto w-full max-w-[873px] bg-[rgba(255,255,255,0.01)] p-3 backdrop-blur-[2px] sm:px-[22px] sm:py-3"
        >
          <Copy animateOnScroll={true} delay={0}>
            <h3 className="mb-1 text-center text-2xl font-semibold tracking-[-0.48px] duration-300">
              Co‑marketing & preferencing
            </h3>
          </Copy>
          <Copy animateOnScroll={true} delay={0.1}>
            <p className="mb-1 text-center text-sm duration-300 sm:text-base">
              Featured placements, curated lists by trade, and seasonal promos
              tied to job templates.
            </p>
          </Copy>
          <span className="icon-span mt-[18px] flex justify-center duration-300">
            <PlusIconAnimation />
          </span>
        </div>
        <div
          ref={sectionRef6}
          className="video-section-wrapper relative z-10 mx-auto w-full max-w-[873px] bg-[rgba(255,255,255,0.01)] p-3 backdrop-blur-[2px] sm:px-[22px] sm:py-3"
        >
          <Copy animateOnScroll={true} delay={0}>
            <h3 className="mb-1 text-center text-2xl font-semibold tracking-[-0.48px] duration-300">
              Mobile‑first experience
            </h3>
          </Copy>
          <Copy animateOnScroll={true} delay={0.1}>
            <p className="mb-1 text-center text-sm duration-300 sm:text-base">
              Specs and ordering that run smoothly in the field, not just at a
              desk.
            </p>
          </Copy>
          <span className="icon-span mt-[18px] flex justify-center duration-300">
            <PlusIconAnimation />
          </span>
        </div>
      </section>
    </>
  );
};

export default SupplierBenefitList;
