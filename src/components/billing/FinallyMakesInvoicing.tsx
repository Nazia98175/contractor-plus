"use client";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import LottieAnimation from "../common/LottieAnimation";
import TimeAnimation from "../fieldservices/TimeAnimation";
import {
  stepOneAnimation,
  stepTwoAnimation,
  stepThreeAnimation,
  stepFourAnimation,
  stepFiveAnimation,
  stepSixAnimation,
} from "./InvoiceAnimation";

// Register GSAP plugins
gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);

export interface InvoiceStep {
  description: string;
  lottieJson: object;
  imgClass: string;
}

interface FinallyMakesInvoicingProps {
  steps: InvoiceStep[];
  title?: string;
  subTitle?: string;
}

const FinallyMakesInvoicing: React.FC<FinallyMakesInvoicingProps> = ({
  steps,
  title,
  subTitle,
}) => {
  const timelineWrapperRef = useRef(null);

  useGSAP(() => {
    setTimeout(() => {
      const scrollTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: "#timeline-wrapper-invoicing",
          start: "top top",
          end: `+=${window.innerHeight * 6}`,
          pin: true,
          scrub: 1,
        },
      });

      const timingImage = document.querySelectorAll(".timing-imgs");
      const timingTextElements = document.querySelectorAll(".timing-text");

      timingImage.forEach((element, index) => {
        gsap.set(element, {
          y: index === 0 ? 0 : 100,
          opacity: index === 0 ? 1 : 0,
        });
      });

      timingTextElements.forEach((element, index) => {
        const splitText = new SplitText(element as HTMLElement, {
          type: "lines",
          mask: "lines",
          linesClass: "split-line",
        });
        const line = splitText.lines;
        gsap.set(line, {
          y: index === 0 ? "0%" : "100%",
          opacity: index === 0 ? 1 : 0,
        });
      });

      // Add animations step by step
      scrollTimeline.add(stepOneAnimation());
      scrollTimeline.add(stepTwoAnimation());
      scrollTimeline.add(stepThreeAnimation());
      scrollTimeline.add(stepFourAnimation());
      scrollTimeline.add(stepFiveAnimation());
      scrollTimeline.add(stepSixAnimation());

      gsap.set("#timeline-wrapper-invoicing", { opacity: 1 });
    }, 500);

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <div className="timing-text-style relative overflow-hidden bg-white">
      {/* Headings */}
      <h2
        style={{
          background:
            "linear-gradient(276deg, rgba(238, 30, 37, 0.4) 8%, rgba(0, 0, 0, 0) 100%), #D8D8D8",
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
        className="section-heading relative z-[4] mx-auto hidden max-w-[760px] px-2 text-center sm:block"
      >
        {title || "A system that finally makes invoicing take care of itself"}
      </h2>

      <p className="text-darkness xs:text-sm relative z-[4] my-3 text-center text-xs font-semibold md:mt-5 md:text-base xl:text-lg">
        {subTitle || "Here's what it feels like when everything just works"}
      </p>

      {/* Timeline Wrapper */}
      <div
        ref={timelineWrapperRef}
        id="timeline-wrapper-invoicing"
        className="relative flex h-[100vh] flex-col items-center justify-center overflow-hidden opacity-0"
      >
        {/* Sun + Environment Clouds */}
        <div className="bg-gradient-bar absolute top-0 left-0 z-[100] h-[10vh] w-full"></div>
        <div
          id="sun-wrapper"
          className="sun-bg absolute top-[-20%] right-[-10%] z-[13] h-[27.7vw] w-[27.7vw] rounded-full"
        ></div>

        <img
          src="/images/png/initial-cloud.png"
          id="initial-cloud"
          className="absolute top-0 z-[21] h-full w-full"
          alt="Initial background cloud"
        />
        <img
          src="/images/png/step-1-cloud.png"
          id="step-1-cloud"
          className="absolute top-0 z-[21] h-full w-full opacity-0"
          alt="Cloud step 1"
        />
        <img
          src="/images/png/step-2-cloud.png"
          id="step-2-cloud"
          className="absolute top-0 z-[21] h-full w-full opacity-0"
          alt="Cloud step 2"
        />
        <img
          src="/images/png/step-3-cloud.png"
          id="step-3-cloud"
          className="absolute top-0 z-[21] h-full w-full opacity-0"
          alt="Cloud step 3"
        />
        <img
          src="/images/png/step-4-cloud.png"
          id="step-4-cloud"
          className="absolute top-0 z-[21] h-full w-full opacity-0"
          alt="Cloud step 4"
        />
        <img
          src="/images/png/step-6-cloud.png"
          id="step-6-cloud"
          className="absolute top-0 z-[21] h-full w-full opacity-0"
          alt="Cloud step 6"
        />

        {/* Background Gradients */}
        <img
          id="bg-initial"
          src="/images/png/initial-step-one.png"
          className="absolute top-0 left-0 h-full w-full"
        />
        <img
          id="bg-step-1"
          src="/images/png/bg-gradient-step-1.png"
          className="absolute top-0 left-0 h-full w-full opacity-0"
        />
        <img
          id="bg-step-2"
          src="/images/png/bg-gradient-step-2.png"
          className="absolute top-0 left-0 h-full w-full opacity-0"
        />
        <img
          id="bg-step-3"
          src="/images/png/bg-gradient-step-3.png"
          className="absolute top-0 left-0 h-full w-full opacity-0"
        />
        <img
          id="bg-step-4"
          src="/images/png/bg-gradient-step-4.png"
          className="absolute top-0 left-0 h-full w-full opacity-0"
        />
        <img
          id="bg-step-5"
          src="/images/png/bg-gradient-step-5.png"
          className="absolute top-0 left-0 h-full w-full opacity-0"
        />
        <img
          id="bg-step-6"
          src="/images/png/bg-gradient-step-6.png"
          className="absolute top-0 left-0 h-full w-full opacity-0"
        />

        {/* Content */}
        <div className="relative z-[2000] mx-auto flex w-full max-w-[702px] flex-col items-center justify-center px-2 md:px-0">
          {/* Time + AM/PM */}
          <div className="flex items-center">
            <TimeAnimation />
            <div className="relative flex h-[50px] flex-col items-center overflow-hidden text-center text-[28px] font-semibold -tracking-[0.84px] sm:text-3xl md:text-[42px]">
              <div
                id="am-pm-wrapper"
                className="timing-text-heading text-phantom flex flex-col"
              >
                <span className="h-[50px]">AM</span>
                <span className="h-[50px]">PM</span>
              </div>
            </div>
          </div>

          {/* Step Descriptions */}
          <div className="relative">
            {steps.map((step, index) => (
              <p
                key={index}
                id={`timing-text-${index + 1}`}
                className={`timing-text text-secondary ${
                  index === 0 ? "relative mt-6" : "absolute top-0 left-0 mt-6"
                } mb-2 text-center text-sm leading-[120%] font-medium md:text-lg lg:text-[22px]`}
              >
                {step.description}
              </p>
            ))}
          </div>

          {/* Step Animations */}
          <div className="relative mt-5 flex w-full items-center justify-center overflow-hidden">
            {steps.map((step, index) => (
              <div
                key={index}
                id={`timing-img-${index + 1}`}
                className={`timing-imgs ${
                  index === 0
                    ? "relative h-[245px]"
                    : "absolute top-0 left-0 h-[245px]"
                } ${step.imgClass}`}
              >
                <LottieAnimation
                  className="h-full w-full"
                  loop={true}
                  animationData={step.lottieJson}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinallyMakesInvoicing;
