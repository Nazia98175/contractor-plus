"use client";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import Copy from "../common/Copy";
import { PlusIconAnimation } from "../common/Icons";

const ContractorStart = (cardsData: any) => {
  const sectionRef1 = useRef<HTMLDivElement>(null);
  const sectionRef2 = useRef<HTMLDivElement>(null);
  const sectionRef3 = useRef<HTMLDivElement>(null);
  const sectionRef4 = useRef<HTMLDivElement>(null);
  const sectionRef5 = useRef<HTMLDivElement>(null);
  const sectionRef6 = useRef<HTMLDivElement>(null);
  const sectionRef7 = useRef<HTMLDivElement>(null);
  console.log(cardsData, "===================>>>>>>>>>>>>>>>>>>>>>>>>");
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const refs = [
      sectionRef1,
      sectionRef2,
      sectionRef3,
      sectionRef4,
      sectionRef5,
      sectionRef6,
      sectionRef7,
    ];
    const total_card = cardsData.cardsData.cardsData.length;
    const extra_height = total_card * window.innerHeight;
    let ref_section_height_start = 0;
    let ref_section_height_end = 0;
    const timeout = setTimeout(() => {
      refs.forEach((ref, index) => {
        if (!ref.current) {
          return;
        }
        const refHeight = ref.current.getBoundingClientRect().height;
        ref_section_height_start =
          ref_section_height_start + refHeight - refHeight;
        ref_section_height_end = ref_section_height_start + refHeight;
        console.log(refHeight, ">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
        ScrollTrigger.create({
          trigger: ref.current,
          start: `${extra_height + ref_section_height_start} center`,
          end: `${extra_height + ref_section_height_end} center`,
          scrub: false,
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
    }, 1500);

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
          className="video-section-wrapper relative z-10 mx-auto max-w-[873px] border px-3 backdrop-blur-[2px] sm:p-[22px]"
        >
          <Copy animateOnScroll={true} delay={0}>
            <h3 className="mb-1 text-center text-lg font-medium tracking-[-0.48px] duration-300 md:text-xl lg:text-2xl xl:px-44">
              Creation
            </h3>
          </Copy>
          <Copy animateOnScroll={true} delay={0.1}>
            <p className="mb-1 text-center text-sm font-medium duration-300 sm:text-base xl:px-44">
              Intelligent, customizable templates that dynamically pull data
              from estimates
            </p>
          </Copy>
          <span className="icon-span mt-[18px] flex justify-center duration-300">
            <PlusIconAnimation />
          </span>
        </div>
        <div
          ref={sectionRef2}
          className="video-section-wrapper relative z-10 mx-auto max-w-[927px] px-3 backdrop-blur-[2px] sm:p-[22px]"
        >
          <Copy animateOnScroll={true} delay={0}>
            <h3 className="mb-1 text-center text-2xl font-medium tracking-[-0.48px] duration-300 xl:px-44">
              Creation
            </h3>
          </Copy>
          <Copy animateOnScroll={true} delay={0.1}>
            <p className="mb-1 text-center text-sm font-medium duration-300 sm:text-base xl:px-44">
              Intelligent, customizable templates that dynamically pull data
              from estimates
            </p>
          </Copy>
          <span className="icon-span mt-[18px] flex justify-center duration-300">
            <PlusIconAnimation />
          </span>
        </div>
        <div
          ref={sectionRef3}
          className="video-section-wrapper relative z-10 mx-auto max-w-[873px] px-3 backdrop-blur-[2px] sm:p-[22px]"
        >
          <Copy animateOnScroll={true} delay={0}>
            <h3 className="mb-1 text-center text-2xl font-medium tracking-[-0.48px] duration-300 xl:px-44">
              Approval
            </h3>
          </Copy>
          <Copy animateOnScroll={true} delay={0.1}>
            <p className="mb-1 text-center text-sm font-medium duration-300 sm:text-base xl:px-44">
              A clear, professional, client-facing portal for review and
              acceptance
            </p>
          </Copy>
          <span className="icon-span mt-[18px] flex justify-center duration-300">
            <PlusIconAnimation />
          </span>
        </div>
        <div
          ref={sectionRef4}
          className="video-section-wrapper relative z-10 mx-auto max-w-[873px] px-3 backdrop-blur-[2px] sm:p-[22px]"
        >
          <Copy animateOnScroll={true} delay={0}>
            <h3 className="mb-1 text-center text-2xl font-medium tracking-[-0.48px] duration-300 xl:px-44">
              Signature
            </h3>
          </Copy>
          <Copy animateOnScroll={true} delay={0.1}>
            <p className="mb-1 text-center text-sm font-medium duration-300 sm:text-base xl:px-44">
              Secure, legally-binding electronic signatures
            </p>
          </Copy>
          <span className="icon-span mt-[18px] flex justify-center duration-300">
            <PlusIconAnimation />
          </span>
        </div>
        <div
          ref={sectionRef5}
          className="video-section-wrapper relative z-10 mx-auto max-w-[873px] px-3 backdrop-blur-[2px] sm:p-[22px]"
        >
          <Copy animateOnScroll={true} delay={0}>
            <h3 className="mb-1 text-center text-2xl font-medium tracking-[-0.48px] duration-300 xl:px-44">
              Storage & Retrieval
            </h3>
          </Copy>
          <Copy animateOnScroll={true} delay={0.1}>
            <p className="mb-1 text-center text-sm font-medium duration-300 sm:text-base xl:px-44">
              A centralized, searchable database of all past and present
              agreements
            </p>
          </Copy>
          <span className="icon-span mt-[18px] flex justify-center duration-300">
            <PlusIconAnimation />
          </span>
        </div>
        <div
          ref={sectionRef6}
          className="video-section-wrapper relative z-10 mx-auto max-w-[927px] px-3 backdrop-blur-[2px] sm:p-[22px]"
        >
          <Copy animateOnScroll={true} delay={0}>
            <h3 className="mb-1 text-center text-2xl font-medium tracking-[-0.48px] duration-300 xl:px-44">
              Amendment
            </h3>
          </Copy>
          <Copy animateOnScroll={true} delay={0.1}>
            <p className="mb-1 text-center text-sm font-medium duration-300 sm:text-base xl:px-44">
              A dedicated, integrated workflow for creating and signing change
              orders
            </p>
          </Copy>
          <span className="icon-span mt-[18px] flex justify-center duration-300">
            <PlusIconAnimation />
          </span>
        </div>
        <div
          ref={sectionRef7}
          className="video-section-wrapper relative z-10 mx-auto max-w-[873px] px-3 backdrop-blur-[2px] sm:p-[22px]"
        >
          <Copy animateOnScroll={true} delay={0}>
            <h3 className="mb-1 text-center text-2xl font-medium tracking-[-0.48px] duration-300 xl:px-44">
              Renewal
            </h3>
          </Copy>
          <Copy animateOnScroll={true} delay={0.1}>
            <p className="mb-1 text-center text-sm font-medium duration-300 sm:text-base xl:px-44">
              Automation and tracking for recurring service agreements and
              memberships
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

export default ContractorStart;
