"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TextAnimation from "../common/TextAnimation";
import { FrictionTextGroup } from "./Icons";

const SeperateSolution = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const frictionItems = [
    "Photos are scattered across phones, Google Drive, and group chats",
    "You use one software for estimates & invoices and another for e-signature",
    "Customer notes are logged in a CRM and manually pasted into a PM tool",
    'You\'re using tools like Zapier to force everything to "work together"',
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    const headings = section?.querySelectorAll("h3");
    const paragraphs = section?.querySelectorAll("p");
    const svgs = section?.querySelectorAll(".grid svg path");
    const frictionGroupSvgs = section?.querySelectorAll("span svg path"); // For FrictionTextGroup SVGs

    // Animate <h3> with reversible behavior
    headings?.forEach((el) => {
      ScrollTrigger.create({
        trigger: el,
        start: "top 60%",
        end: "bottom 40%",
        onEnter: () => {
          gsap.to(el, { color: "#fff", duration: 0.3 });
        },
        onLeaveBack: () => {
          gsap.to(el, { color: "#8A8E91", duration: 0.3 });
        },
        onEnterBack: () => {
          gsap.to(el, { color: "#fff", duration: 0.3 });
        },
        onLeave: () => {
          // Optional: uncomment to revert when scrolling past
          // gsap.to(el, { color: "#8A8E91", duration: 0.3 });
        },
      });
    });

    // Animate <p> with reversible behavior
    paragraphs?.forEach((el) => {
      ScrollTrigger.create({
        trigger: el,
        start: "top 60%",
        end: "bottom 40%",
        onEnter: () => {
          gsap.to(el, { color: "#fff", duration: 0.3 });
        },
        onLeaveBack: () => {
          gsap.to(el, { color: "#656C73", duration: 0.3 });
        },
        onEnterBack: () => {
          gsap.to(el, { color: "#fff", duration: 0.3 });
        },
        onLeave: () => {
          // Optional: uncomment to revert when scrolling past
          // gsap.to(el, { color: "#656C73", duration: 0.3 });
        },
      });
    });

    // Animate <svg> paths with reversible behavior
    svgs?.forEach((el) => {
      ScrollTrigger.create({
        trigger: el,
        start: "top 60%",
        end: "bottom 40%",
        onEnter: () => {
          gsap.to(el, {
            fill: "#F21314",
            stroke: "#F21314",
            duration: 0.3,
          });
        },
        onLeaveBack: () => {
          gsap.to(el, {
            fill: "#25292D",
            stroke: "#25292D",
            duration: 0.3,
          });
        },
        onEnterBack: () => {
          gsap.to(el, {
            fill: "#F21314",
            stroke: "#F21314",
            duration: 0.3,
          });
        },
        onLeave: () => {
          // Optional: uncomment to revert when scrolling past
          // gsap.to(el, {
          //   fill: "#25292D",
          //   stroke: "#25292D",
          //   duration: 0.3,
          // });
        },
      });
    });

    // Animate FrictionTextGroup SVG paths with reversible behavior
    frictionGroupSvgs?.forEach((el) => {
      ScrollTrigger.create({
        trigger: el,
        start: "top 60%",
        end: "bottom 40%",
        onEnter: () => {
          gsap.to(el, {
            fill: "#F21314",
            stroke: "#F21314",
            duration: 0.3,
            opacity: 1,
          });
        },
        onLeaveBack: () => {
          gsap.to(el, {
            fill: "#25292D", // Assuming original fill color
            stroke: "#25292D", // Assuming original stroke color
            duration: 0.3,
            opacity: 0.5, // Assuming original opacity
          });
        },
        onEnterBack: () => {
          gsap.to(el, {
            fill: "#F21314",
            stroke: "#F21314",
            duration: 0.3,
            opacity: 1,
          });
        },
        onLeave: () => {
          // Optional: uncomment to revert when scrolling past
          // gsap.to(el, {
          //   fill: "#25292D",
          //   stroke: "#25292D",
          //   duration: 0.3,
          //   opacity: 0.5,
          // });
        },
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} className="pt-9 pb-[46px]">
      <div className="relative z-20 mx-auto max-w-[733px]">
        <TextAnimation animateOnScroll={true} delay={0}>
          <h3
            className="sub-heading mb-10 text-center font-semibold sm:mb-[73px] xl:px-4"
            style={{ color: "#8A8E91" }}
          >
            Every separate solution introduces friction into your business
          </h3>
        </TextAnimation>
        <div className="grid grid-cols-1 gap-x-11 gap-y-8 sm:grid-cols-2">
          {frictionItems.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center gap-6 px-3 py-2.5"
            >
              <svg
                width="70"
                height="69"
                viewBox="0 0 70 69"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M67.5715 58.0335L46.3958 35.1268L69.2905 13.9507L58.4106 2.17092L35.5039 23.3466L14.3281 0.443819L2.55587 11.3361L23.7237 34.2385L0.828925 55.4146L11.7212 67.1868L34.6159 46.0107L55.7837 68.9131L67.5715 58.0335Z"
                  fill="#25292D"
                  stroke="#25292D"
                />
              </svg>
              <TextAnimation animateOnScroll={true} delay={0}>
                <p
                  className="text-center text-sm leading-[130%] font-semibold lg:text-base xl:text-lg"
                  style={{ color: "#656C73" }}
                >
                  {item}
                </p>
              </TextAnimation>
            </div>
          ))}
        </div>
        <TextAnimation animateOnScroll={true} delay={0}>
          <span className="mt-11 flex justify-center">
            <FrictionTextGroup />
          </span>
        </TextAnimation>
      </div>
    </section>
  );
};

export default SeperateSolution;
