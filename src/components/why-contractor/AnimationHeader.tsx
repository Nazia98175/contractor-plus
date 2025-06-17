'use client'
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TextAnimation from "../common/TextAnimation";
import { PlusIcon } from "./Icons";

const AnimationHeader = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Alternative approach: Use CSS classes instead of direct color changes
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top center",
        end: "bottom center",
        scrub: 1,
        onEnter: () => {
          // Add red color class
          sectionRef.current?.classList.add('text-red-active');
        },
        onLeave: () => {
          // Remove red color class
          sectionRef.current?.classList.remove('text-red-active');
        },
        onEnterBack: () => {
          // Add red color class when scrolling back
          sectionRef.current?.classList.add('text-red-active');
        },
        onLeaveBack: () => {
          // Remove red color class when scrolling back up
          sectionRef.current?.classList.remove('text-red-active');
        }
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div 
      ref={sectionRef}
      className="relative z-10 mx-auto mt-11 max-w-[873px] p-3 backdrop-blur-[5px] sm:mt-[133px] sm:p-[22px]"
    >
      <style jsx>{`
        .text-red-active h3 {
          color: #EE1E25 !important;
          transition: color 0.3s ease;
        }
        .text-red-active h6 {
          color: #EE1E25 !important;
          transition: color 0.3s ease;
        }
        .text-red-active span {
          color: #EE1E25 !important;
          transition: color 0.3s ease;
        }
        .text-red-active svg {
          color: #EE1E25 !important;
          fill: #EE1E25 !important;
          stroke: #EE1E25 !important;
          transition: all 0.3s ease;
        }
        .text-red-active svg path {
          fill: #EE1E25 !important;
          stroke: #EE1E25 !important;
          transition: all 0.3s ease;
        }
        .text-red-active svg circle {
          fill: #EE1E25 !important;
          stroke: #EE1E25 !important;
          transition: all 0.3s ease;
        }
        .text-red-active svg line {
          stroke: #EE1E25 !important;
          transition: all 0.3s ease;
        }
        /* Default transition for smooth color changes */
        h3, h6, span, svg, svg path, svg circle, svg line {
          transition: all 0.3s ease;
        }
      `}</style>
      
      <TextAnimation animateOnScroll={true} delay={0}>
        <h3 className="sub-heading max-sm:!text-lg text-cyanBlue mb-1 text-center font-semibold">
          The contractors pulling ahead aren't grinding harder.
        </h3>
      </TextAnimation>
      <TextAnimation animateOnScroll={true} delay={0}>
        <h6 className="text-wallStreet text-center text-xs leading-[130%] lg:text-lg xl:text-[22px]">
          They've{" "}
          <span className="text-decemberSky font-medium italic">
            {" "}
            rebuilt the back end,{" "}
          </span>{" "}
          because it's the only way forward.
        </h6>
      </TextAnimation>
      <span className="mt-[18px] flex justify-center">
        <PlusIcon />
      </span>
    </div>
  );
};

export default AnimationHeader;