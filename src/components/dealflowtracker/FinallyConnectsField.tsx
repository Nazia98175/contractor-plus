"use client";
import CardRequiredButton from "../common/CardRequiredButton";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import { SplitText } from "gsap/SplitText";
import CardReveal from "../common/CardReveal";
import FreeTrialButton from "../common/FreeTrialButton";
import LottieAnimation from "../common/LottieAnimation";
import {
  stepOneAnimation,
  stepTwoAnimation,
  stepThreeAnimation,
  stepFourAnimation,
  stepFiveAnimation,
  stepSixAnimation,
  stepSevenAnimation,
} from "../fieldservices/dealflowanimation";

// Register the SplitText plugin
gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);

export interface StepCard {
  title: string;
  description: string;
  lottieJson: object;
  imgClass: string;
}

interface FinallyConnectsFieldProps {
  cards: StepCard[];
  title?: string; // 🔹 optional title
  subTitle?: string;
}

const FinallyConnectsField: React.FC<FinallyConnectsFieldProps> = ({
  cards,
  title,
  subTitle,
}) => {
  const timelineWrapperRef = useRef(null);

  useGSAP(() => {
    setTimeout(() => {
      const scrollTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: "#timeline-wrapper-finally",
          start: "top top",
          end: `+=${window.innerHeight * 6}`,
          pin: true,
          scrub: 1,
          markers: false,
          // pinType: "transform",
        },
      });
      const timingImage = document.querySelectorAll(".timing-imgs");
      const timingTextElements = document.querySelectorAll(".timing-text");
      const timingTextElementsheading = document.querySelectorAll(
        ".timing-text-heading",
      );

      timingImage.forEach((element, index) => {
        if (index == 0) {
          gsap.set(element, {
            y: 0,
            opacity: 1,
          });
        } else {
          gsap.set(element, {
            y: 100,
            opacity: 0,
          });
        }
      });

      timingTextElementsheading.forEach((element, index) => {
        const splitText = new SplitText(element as HTMLElement, {
          type: "lines",
          mask: "lines",
          linesClass: "split-line",
        });
        const line = splitText.lines;
        if (index === 0) {
          gsap.set(line, { y: "0%", opacity: 1 });
        } else {
          gsap.set(line, { y: "100%", opacity: 0 });
        }
      });

      timingTextElements.forEach((element, index) => {
        const splitText = new SplitText(element as HTMLElement, {
          type: "lines",
          mask: "lines",
          linesClass: "split-line",
        });
        const line = splitText.lines;
        if (index === 0) {
          gsap.set(line, { y: "0%", opacity: 1 });
        } else {
          gsap.set(line, { y: "100%", opacity: 0 });
        }
      });
      scrollTimeline.add(stepOneAnimation());
      scrollTimeline.add(stepTwoAnimation());
      scrollTimeline.add(stepThreeAnimation());
      scrollTimeline.add(stepFourAnimation());
      scrollTimeline.add(stepFiveAnimation());
      scrollTimeline.add(stepSixAnimation());
      scrollTimeline.add(stepSevenAnimation());
      gsap.set("#timeline-wrapper-finally", {
        opacity: 1,
      });
    }, 500);
    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);
  // Steps Array

  return (
    <div className="timing-text-style relative overflow-hidden bg-white">
      <h2
        style={{
          background:
            "linear-gradient(276deg, rgba(238, 30, 37, 0.4) 8%, rgba(0, 0, 0, 0) 100%), #D8D8D8",
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
        className="section-heading relative z-[4] hidden px-2 text-center sm:block"
      >
        {title || "A system that finally connects field and office"}
      </h2>
      <h2
        style={{
          background:
            "linear-gradient(276deg, rgba(238, 30, 37, 0.4) 8%, rgba(0, 0, 0, 0) 100%), #D8D8D8",
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
        className="xs:text-[22px] xs:max-w-[88%] relative z-[4] mx-auto px-2 text-center text-[19px] font-bold sm:hidden"
      >
        A system that finally connects field and office
        {title || "A system that finally connects field and office"}
      </h2>

      <p className="text-darkness xs:text-sm relative z-[4] my-3 text-center text-xs font-semibold md:mt-5 md:text-base xl:text-lg">
        {subTitle ||
          "A drag-and-drop Kanban view that simplifies opportunities"}
      </p>
      <div className="timeline-pin-wrapper relative">
        <div
          ref={timelineWrapperRef}
          id="timeline-wrapper-finally"
          className="relative flex h-[100vh] flex-col items-center justify-center overflow-hidden opacity-0"
        >
          <div className="bg-gradient-bar absolute top-0 left-0 z-[100] h-[10vh] w-full"></div>

          {/* TOP WHITE BLUR LINE  */}
          <div className="absolute -top-[17%] left-1/2 z-[10000] hidden h-[180px] w-[120%] -translate-x-1/2 rounded-t-full bg-white blur-[20px] sm:block lg:-top-[25%] lg:blur-[25px] xl:h-[250px]"></div>
          <img
            src="/images/png/initial-cloud.png"
            id="initial-cloud"
            className="absolute top-0 z-[21] h-full w-full object-cover"
            alt="Initial background cloud graphic"
          />

          {/* STEP 1 CLOUD */}
          <img
            src="/images/png/step-1-cloud.png"
            id="step-1-cloud"
            className="absolute top-0 z-[21] h-full w-full object-cover opacity-0"
            alt="Cloud graphic for step 1 transition"
          />

          {/* STEP 2 CLOUD */}
          <img
            src="/images/png/step-2-cloud.png"
            id="step-2-cloud"
            className="absolute top-0 z-[21] h-full w-full object-cover opacity-0"
            alt="Cloud graphic for step 2 transition"
          />

          {/* STEP 3 CLOUD */}
          <img
            src="/images/png/step-3-cloud.png"
            id="step-3-cloud"
            className="absolute top-0 z-[21] h-full w-full object-cover opacity-0"
            alt="Cloud graphic for step 3 transition"
          />

          {/* STEP 6 CLOUD */}
          <img
            src="/images/png/step-6-cloud.png"
            id="step-4-cloud"
            className="absolute top-0 z-[21] h-full w-full object-cover opacity-0"
            alt="Cloud graphic for step 6 transition"
          />

          {/* STEP 7 CLOUD */}
          <img
            src="/images/png/step-7-cloud.png"
            id="step-7-cloud"
            className="absolute top-0 z-[21] h-full w-full object-cover opacity-0"
            alt="Cloud graphic for step 7 transition"
          />

          <div className="relative z-[9999] mx-auto flex w-full max-w-[702px] flex-col items-center justify-center px-2 md:px-0">
            {/* Heading */}
            <div className="relative w-full">
              {cards.map((step, index) => (
                <h2
                  key={index}
                  id={`timing-text-heading-${index + 1}`}
                  className={`timing-text-heading opportunity-card ${
                    index === 0
                      ? "relative mt-6"
                      : "absolute top-0 left-0 w-full"
                  } text-center`}
                >
                  {step.title}
                </h2>
              ))}
            </div>

            {/* Description */}
            <div className="relative">
              {cards.map((step, index) => (
                <p
                  key={index}
                  id={`timing-text-${index + 1}`}
                  className={`timing-text text-secondary ${
                    index === 0
                      ? "relative mt-6"
                      : "absolute top-0 left-1/2 w-full -translate-x-1/2 transform"
                  } mb-2 text-center text-sm leading-[120%] font-medium md:text-lg lg:text-[22px]`}
                >
                  {step.description}
                </p>
              ))}
            </div>

            {/* Images */}
            <div className="relative mt-5 overflow-hidden">
              {cards.map((step, index) => (
                <div
                  key={index}
                  id={`timing-img-${index + 1}`}
                  className={`timing-imgs ${step.imgClass}`}
                >
                  <LottieAnimation
                    className="h-full w-full"
                    animationData={step.lottieJson}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-20 flex flex-col items-center justify-center px-2">
        <CardReveal className="hidden md:block">
          <FreeTrialButton
            className="mx-auto mt-3 mb-1.5 !w-fit"
            text={"Get started FREE"}
          />
        </CardReveal>
        <CardReveal className="block md:hidden">
          <FreeTrialButton
            className="mx-auto mt-3 mb-1.5 !w-fit"
            text={"Download FREE App"}
          />
        </CardReveal>
        <CardRequiredButton text="No credit card required" />
      </div>
    </div>
  );
};

export default FinallyConnectsField;
