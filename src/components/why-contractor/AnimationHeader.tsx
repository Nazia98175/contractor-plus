"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TextAnimation from "../common/TextAnimation";

const AnimationHeader = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const trigger = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top 30%", // Changed from "top center" to trigger when element is 30% from top
      end: "bottom center",
      scrub: 1,
      onEnter: () => {
        // Add the class when entering the trigger zone
        sectionRef.current?.classList.add("scroll-active");
      },
      // Remove toggleClass to prevent class removal on scroll back
      // onLeaveBack: () => {} // Don't do anything when scrolling back
    });

    return () => {
      trigger.kill();
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className="relative z-10 mx-auto mt-11 max-w-[873px] p-3 backdrop-blur-[5px] sm:mt-[133px] sm:p-[22px]"
    >
      <style jsx>{`
        h3 {
          color: #8a8e91;
        }

        h6 {
          color: #656c73;
        }

        .highlighted-span {
          color: #fff;
        }

        .scroll-active h3 {
          color: #fff !important;
        }

        .scroll-active h6 {
          color: #fff !important;
        }

        .scroll-active .highlighted-span {
          color: #F21314 !important;
        }

        /* Plus icon default */
        svg path {
          fill: #3f464b;
          stroke: #1c2731;
          transition: all 0.3s ease-in-out;
        }

        /* Plus icon on scroll */
        .scroll-active svg path {
          fill: #fff !important;
          stroke: #fff !important;
        }
        .scroll-active .icon-span {
          transform: rotate(45deg);
        }
      `}</style>

      <TextAnimation animateOnScroll={true} delay={0}>
        <h3 className="sub-heading mb-1 text-center font-semibold max-sm:!text-lg duration-300">
          The contractors pulling ahead aren't grinding harder.
        </h3>
      </TextAnimation>

      <TextAnimation animateOnScroll={true} delay={0}>
        <h6 className="text-center text-xs leading-[130%] lg:text-lg xl:text-[22px] duration-300">
          They've
          <span className="highlighted-span font-medium italic duration-300">
            {" "}
            rebuilt the back end,{" "}
          </span>
          because it's the only way forward.
        </h6>
      </TextAnimation>

      <span className="icon-span mt-[18px] flex justify-center duration-300">
        <svg
          width="31"
          height="31"
          viewBox="0 0 31 31"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M29.4149 12.9151L29.4122 18.1976L29.4115 19.1968H19.1405L19.1391 28.4735L19.1398 29.4741L18.1385 29.4727L12.8546 29.4685L11.8554 29.4678L11.8561 28.4686L11.8574 19.1962L2.58632 19.1989H1.58643V18.199L1.58367 12.9164V11.9165L2.58425 11.9159L11.8561 11.9138L11.8581 2.64198V1.64209L12.8573 1.64278L18.1399 1.64002H19.1398L19.1405 2.6406V11.9145L28.4151 11.9152H29.4149V12.9151Z"
            fill="#3F464B"
            stroke="#1C2731"
            strokeWidth="2"
          />
        </svg>
      </span>
    </div>
  );
};

export default AnimationHeader;
