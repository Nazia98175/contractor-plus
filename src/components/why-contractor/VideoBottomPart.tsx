"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TextAnimation from "../common/TextAnimation";

const VideoBottomPart = () => {
  const headingRefs = useRef<HTMLElement[]>([]);
  const iconRefs = useRef<SVGPathElement[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    headingRefs.current.forEach((h3, i) => {
      const path = iconRefs.current[i];

      if (h3 && path) {
        gsap.fromTo(
          h3,
          { color: "#8A8E91" },
          {
            color: "#D2D4D6",
            scrollTrigger: {
              trigger: h3,
              start: "top 80%",
              end: "bottom center",
              scrub: true,
            },
          },
        );

        gsap.fromTo(
          path,
          { fill: "#3F464B", stroke: "#1C2731" },
          {
            fill: "#D2D4D6",
            stroke: "#D2D4D6",
            scrollTrigger: {
              trigger: h3,
              start: "top 80%",
              end: "bottom center",
              scrub: true,
            },
          },
        );
      }
    });
  }, []);

  const addHeadingRef = (el: HTMLHeadingElement | null) => {
    if (el && !headingRefs.current.includes(el)) {
      headingRefs.current.push(el);
    }
  };

  const addIconPathRef = (el: SVGPathElement | null) => {
    if (el && !iconRefs.current.includes(el)) {
      iconRefs.current.push(el);
    }
  };

  return (
    <section className="relative flex flex-col gap-[154px] pt-[67px] sm:gap-[170px] sm:pt-[94px]">
      <div className="flex flex-col gap-[154px] sm:gap-[123px]">
        {[
          "Your work ethic isn’t broken… But your workflow IS.",
          "It’s a thousand micro inefficiencies stealing time and bleeding margin.",
        ].map((text, i) => (
          <TextAnimation key={i} animateOnScroll={true} delay={0}>
            <div className="relative z-10 mx-auto max-w-[873px] p-3 backdrop-blur-[5px] sm:p-[22px]">
              <h3
                ref={addHeadingRef}
                className={`sub-heading mb-1 text-center font-semibold xl:px-44`}
              >
                {text}
              </h3>
              <span className="mt-[18px] flex justify-center">
                <svg
                  width="31"
                  height="31"
                  viewBox="0 0 31 31"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    ref={addIconPathRef}
                    d="M29.4149 12.9151L29.4122 18.1976L29.4115 19.1968H19.1405L19.1391 28.4735L19.1398 29.4741L18.1385 29.4727L12.8546 29.4685L11.8554 29.4678L11.8561 28.4686L11.8574 19.1962L2.58632 19.1989H1.58643V18.199L1.58367 12.9164V11.9165L2.58425 11.9159L11.8561 11.9138L11.8581 2.64198V1.64209L12.8573 1.64278L18.1399 1.64002H19.1398L19.1405 2.6406V11.9145L28.4151 11.9152H29.4149V12.9151Z"
                    fill="#3F464B"
                    stroke="#1C2731"
                    strokeWidth="2"
                  />
                </svg>
              </span>
            </div>
          </TextAnimation>
        ))}
      </div>

      <div className="flex flex-col gap-[154px] sm:gap-[235px]">
        {[
          "You’re not scaling, you’re just surviving.",
          "And in this market, if you’re not getting ahead.. you’re falling more and more behind.",
        ].map((text, i) => (
          <TextAnimation key={i + 2} animateOnScroll={true} delay={0}>
            <div className="relative z-10 mx-auto max-w-[873px] p-3 backdrop-blur-[5px] sm:p-[22px]">
              <h3
                ref={addHeadingRef}
                className={`sub-heading text-center font-semibold xl:px-6`}
              >
                {text}
              </h3>
              <span className="mt-[18px] flex justify-center">
                <svg
                  width="31"
                  height="31"
                  viewBox="0 0 31 31"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    ref={addIconPathRef}
                    d="M29.4149 12.9151L29.4122 18.1976L29.4115 19.1968H19.1405L19.1391 28.4735L19.1398 29.4741L18.1385 29.4727L12.8546 29.4685L11.8554 29.4678L11.8561 28.4686L11.8574 19.1962L2.58632 19.1989H1.58643V18.199L1.58367 12.9164V11.9165L2.58425 11.9159L11.8561 11.9138L11.8581 2.64198V1.64209L12.8573 1.64278L18.1399 1.64002H19.1398L19.1405 2.6406V11.9145L28.4151 11.9152H29.4149V12.9151Z"
                    fill="#3F464B"
                    stroke="#1C2731"
                    strokeWidth="2"
                  />
                </svg>
              </span>
            </div>
          </TextAnimation>
        ))}
      </div>
    </section>
  );
};

export default VideoBottomPart;
