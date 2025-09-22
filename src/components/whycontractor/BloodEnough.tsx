"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef, useState } from "react";
import Copy from "../common/Copy";
interface PropbloodEnough {
  bloodEnough: any;
}
const BloodEnough:React.FC<PropbloodEnough> = ({bloodEnough}) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const hasAnimatedOnMobile = useRef(false);

  useEffect(() => {
    // Check if device is mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust breakpoint as needed
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const trigger = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top center",
      end: "bottom center",
      scrub: 1,
      onEnter: () => {
        // On mobile, only animate once
        if (isMobile && hasAnimatedOnMobile.current) {
          return;
        }

        sectionRef.current?.classList.add("scroll-active");

        if (isMobile) {
          hasAnimatedOnMobile.current = true;
        }
      },
      onLeaveBack: () => {
        // Only remove class on desktop
        if (!isMobile) {
          sectionRef.current?.classList.remove("scroll-active");
        }
      },
      onEnterBack: () => {
        // Only re-add class on desktop
        if (!isMobile) {
          sectionRef.current?.classList.add("scroll-active");
        }
      },
      onLeave: () => {
        // Optional: Remove class when scrolling past the element
        // Only on desktop
        // if (!isMobile) {
        //   sectionRef.current?.classList.remove("scroll-active");
        // }
      },
    });

    return () => {
      trigger.kill();
    };
  }, [isMobile]);

  return (
    <div
      ref={sectionRef}
      className="relative z-10 mx-auto mb-10 max-w-[873px] p-3 backdrop-blur-[5px] sm:mb-24 sm:p-[22px]"
    >
      <style jsx>{`
        h3 {
          color: #8a8e91;
          transition: color 0.3s ease-in-out;
        }

        h6 {
          color: #656c73;
          transition: color 0.3s ease-in-out;
        }

        .highlighted-span {
          color: #d2d4d6;
          transition: color 0.3s ease-in-out;
        }

        .scroll-active h3 {
          color: #fff !important;
        }

        .scroll-active h6 {
          color: #fff !important;
        }

        .scroll-active .highlighted-span {
          color: #f21314 !important;
        }

        svg path {
          fill: #3f464b;
          stroke: #1c2731;
          transition: all 0.3s ease-in-out;
        }

        .scroll-active svg path {
          fill: #fff !important;
          stroke: #fff !important;
        }

        .icon-span {
          transition: transform 0.3s ease-in-out;
        }

        .scroll-active .icon-span {
          transform: rotate(45deg);
        }
      `}</style>

      <Copy animateOnScroll={true} delay={0}>
        <h3 className="sub-heading mb-1 text-center font-semibold duration-300 max-sm:!text-lg">
          {bloodEnough?.title}
        </h3>
      </Copy>

      <Copy animateOnScroll={true} delay={0}>
        <h6 className="text-center text-xs leading-[130%] duration-300 sm:text-sm lg:text-lg xl:text-[22px]">
          {bloodEnough?.subTitle1}
          <span className="highlighted-span font-medium italic duration-300">
            {" "}
           {bloodEnough?.subTitleRed}
          </span>
        </h6>
      </Copy>

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

export default BloodEnough;
