"use client";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import Copy from "../common/Copy";
import { PlusIconAnimation } from "../common/Icons";

const HowItWorkCard = (cardsData: any) => {
  const sectionRef1 = useRef<HTMLDivElement>(null);
  const sectionRef2 = useRef<HTMLDivElement>(null);
  const sectionRef3 = useRef<HTMLDivElement>(null);
  const sectionRef4 = useRef<HTMLDivElement>(null);
  const sectionRef5 = useRef<HTMLDivElement>(null);

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
          className="video-section-wrapper bg-rgba18 relative z-10 mx-auto w-full max-w-[873px] p-3 backdrop-blur-[.52px] sm:p-[22px]"
        >
          <Copy animateOnScroll={true} delay={0}>
            <h4 className="how-it-work-aff">Apply & get approved</h4>
          </Copy>
          <Copy animateOnScroll={true} delay={0.1}>
            <p className="how-it-work-description">
              Tell us about your audience and angle.
            </p>
          </Copy>
          <span className="how-it-work-icon icon-span">
            <PlusIconAnimation />
          </span>
        </div>
        <div
          ref={sectionRef2}
          className="video-section-wrapper bg-rgba18 relative z-10 mx-auto w-full max-w-[873px] p-3 backdrop-blur-[2.5px] sm:p-[22px]"
        >
          <Copy animateOnScroll={true} delay={0}>
            <h4 className="how-it-work-aff">Get your partner kit</h4>
          </Copy>
          <Copy animateOnScroll={true} delay={0.1}>
            <p className="how-it-work-description">
              Messaging, creative, examples, and your referral link.
            </p>
          </Copy>
          <span className="how-it-work-icon icon-span">
            <PlusIconAnimation />
          </span>
        </div>
        <div
          ref={sectionRef3}
          className="video-section-wrapper bg-rgba18 relative z-10 mx-auto w-full max-w-[873px] p-3 backdrop-blur-[2.5px] sm:p-[22px]"
        >
          <Copy animateOnScroll={true} delay={0}>
            <h4 className="how-it-work-aff">Send traffic or introductions</h4>
          </Copy>
          <Copy animateOnScroll={true} delay={0.1}>
            <p className="how-it-work-description">
              Content, webinars, email drops, events—your call.
            </p>
          </Copy>
          <span className="how-it-work-icon icon-span">
            <PlusIconAnimation />
          </span>
        </div>
        <div
          ref={sectionRef4}
          className="video-section-wrapper bg-rgba18 relative z-10 mx-auto w-full max-w-[873px] p-3 backdrop-blur-[2.5px] sm:p-[22px]"
        >
          <Copy animateOnScroll={true} delay={0}>
            <h4 className="how-it-work-aff">We onboard & support</h4>
          </Copy>
          <Copy animateOnScroll={true} delay={0.1}>
            <p className="how-it-work-description">
              Our team converts, activates, and retains.
            </p>
          </Copy>
          <span className="how-it-work-icon icon-span">
            <PlusIconAnimation />
          </span>
        </div>
        <div
          ref={sectionRef5}
          className="video-section-wrapper bg-rgba18 relative z-10 mx-auto w-full max-w-[873px] p-3 backdrop-blur-[.52px] sm:p-[22px]"
        >
          <Copy animateOnScroll={true} delay={0}>
            <h4 className="how-it-work-aff">Get paid monthly</h4>
          </Copy>
          <Copy animateOnScroll={true} delay={0.1}>
            <p className="how-it-work-description">
              Recurring shares for as long as the customer stays active.
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

export default HowItWorkCard;
