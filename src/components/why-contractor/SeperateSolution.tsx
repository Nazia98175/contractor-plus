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

    // Animate <h3>
    headings?.forEach((el) => {
      gsap.fromTo(
        el,
        { color: "#8A8E91" },
        {
          color: "#D2D4D6",
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            end: "bottom 20%",
            scrub: true,
            onLeave: () => gsap.to(el, { color: "#8A8E91", duration: 0.3 }),
            onLeaveBack: () => gsap.to(el, { color: "#8A8E91", duration: 0.3 }),
          },
        },
      );
    });

    // Animate <p>
    paragraphs?.forEach((el) => {
      gsap.fromTo(
        el,
        { color: "#656C73" },
        {
          color: "#D2D4D6",
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            end: "bottom 20%",
            scrub: true,
            onLeave: () => gsap.to(el, { color: "#656C73", duration: 0.3 }),
            onLeaveBack: () => gsap.to(el, { color: "#656C73", duration: 0.3 }),
          },
        },
      );
    });

    // Animate <svg> paths
    // Animate <svg> paths
    svgs?.forEach((el) => {
      gsap.fromTo(
        el,
        { fill: "#25292D", stroke: "#25292D" },
        {
          fill: "#7F0F12",
          stroke: "#7F0F12",
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            end: "bottom 20%",
            scrub: true,
            onLeave: () =>
              gsap.to(el, {
                fill: "#25292D",
                stroke: "#25292D",
                duration: 0.3,
              }),
            onLeaveBack: () =>
              gsap.to(el, {
                fill: "#25292D",
                stroke: "#25292D",
                duration: 0.3,
              }),
          },
        },
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} className="pt-9 pb-[46px]">
      <div className="relative z-20 mx-auto max-w-[733px]">
        <TextAnimation animateOnScroll={true} delay={0}>
          <h3 className="sub-heading mb-10 text-center font-semibold sm:mb-16 xl:px-4">
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
                  opacity="0.5"
                  d="M67.5715 58.0335L46.3958 35.1268L69.2905 13.9507L58.4106 2.17092L35.5039 23.3466L14.3281 0.443819L2.55587 11.3361L23.7237 34.2385L0.828925 55.4146L11.7212 67.1868L34.6159 46.0107L55.7837 68.9131L67.5715 58.0335Z"
                  fill="#25292D"
                  stroke="#25292D"
                />
              </svg>
              <TextAnimation animateOnScroll={true} delay={0}>
                <p className="text-center text-sm leading-[130%] font-semibold lg:text-base xl:text-lg">
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
