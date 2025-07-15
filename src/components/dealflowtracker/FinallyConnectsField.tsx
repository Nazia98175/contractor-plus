"use client";
import Button from "../common/Button";
import CardRequiredButton from "../common/CardRequiredButton";
import { ArrowIcon } from "../common/Icons";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

import { SplitText } from "gsap/SplitText";
import Estimate_Scheduled from "../../../public/lotties/Estimate-Scheduled.json";
import Estimate_Sent from "../../../public/lotties/Estimate-Sent.json";
import Initial_Contact from "../../../public/lotties/Initial-Contact.json";
import Job_Scheduled from "../../../public/lotties/Job-Scheduled.json";
import Lead_Captured from "../../../public/lotties/Lead-Captured.json";
import Revenue_Forecast_Updated from "../../../public/lotties/Revenue-Forecast-Updated.json";
import LottieAnimation from "../common/LottieAnimation";
import {
  stepFiveAnimation,
  stepFourAnimation,
  stepOneAnimation,
  stepSixAnimation,
  stepThreeAnimation,
  stepTwoAnimation,
} from "../field-services/dealflowanimation";

// Register the SplitText plugin
gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);

const FinallyConnectsField = () => {
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
          pinType: "transform",
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
      gsap.set("#timeline-wrapper-finally", {
        opacity: 1,
      });
    }, 500);
    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

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
        A system that finally connects field and office
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
      </h2>

      <p className="text-darkness xs:text-sm relative z-[4] my-3 text-center text-xs font-semibold md:mt-5 md:text-base xl:text-lg">
        A drag-and-drop Kanban view that simplifies opportunities
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
            className="absolute top-0 z-[21] h-full w-full"
            alt="Initial background cloud graphic"
          />

          {/* STEP 1 CLOUD */}
          <img
            src="/images/png/step-1-cloud.png"
            id="step-1-cloud"
            className="absolute top-0 z-[21] h-full w-full opacity-0"
            alt="Cloud graphic for step 1 transition"
          />

          {/* STEP 2 CLOUD */}
          <img
            src="/images/png/step-2-cloud.png"
            id="step-2-cloud"
            className="absolute top-0 z-[21] h-full w-full opacity-0"
            alt="Cloud graphic for step 2 transition"
          />

          {/* STEP 3 CLOUD */}
          <img
            src="/images/png/step-3-cloud.png"
            id="step-3-cloud"
            className="absolute top-0 z-[21] h-full w-full opacity-0"
            alt="Cloud graphic for step 3 transition"
          />

          {/* STEP 6 CLOUD */}
          <img
            src="/images/png/step-6-cloud.png"
            id="step-4-cloud"
            className="absolute top-0 z-[21] h-full w-full opacity-0"
            alt="Cloud graphic for step 6 transition"
          />

          {/* STEP 7 CLOUD */}
          <img
            src="/images/png/step-7-cloud.png"
            id="step-5-cloud"
            className="absolute top-0 z-[21] h-full w-full opacity-0"
            alt="Cloud graphic for step 7 transition"
          />

          <div className="relative z-[2000] mx-auto flex w-full max-w-[702px] flex-col items-center justify-center px-2 md:px-0">
            {/* Heading  */}
            <div className="relative">
              <h2
                id="timing-text-heading-1"
                className="timing-text-heading text-phantom relative mt-6 text-center text-[22px] leading-[120%] font-semibold md:text-[28px] lg:text-[35px] xl:text-[42px]"
              >
                Lead Captured
              </h2>
              <h2
                id="timing-text-heading-2"
                className="timing-text-heading text-phantom absolute top-0 left-1/2 min-w-[400px] -translate-x-1/2 transform text-center text-[22px] leading-[120%] font-semibold whitespace-nowrap md:text-[28px] lg:text-[35px] xl:text-[42px]"
              >
                Estimate Scheduled
              </h2>
              <h2
                id="timing-text-heading-3"
                className="timing-text-heading text-phantom absolute top-0 left-0 w-full text-center text-[22px] leading-[120%] font-semibold md:text-[28px] lg:text-[35px] xl:text-[42px]"
              >
                Estimate Sent
              </h2>

              <h2
                id="timing-text-heading-4"
                className="timing-text-heading text-phantom absolute top-0 left-1/2 min-w-[400px] -translate-x-1/2 transform text-center text-[22px] leading-[120%] font-semibold whitespace-nowrap md:text-[28px] lg:text-[35px] xl:text-[42px]"
              >
                Job Scheduled
              </h2>
              <h2
                id="timing-text-heading-5"
                className="timing-text-heading text-phantom absolute top-0 left-1/2 min-w-[400px] -translate-x-1/2 transform text-center text-[22px] leading-[120%] font-semibold whitespace-nowrap md:text-[28px] lg:text-[35px] xl:text-[42px]"
              >
                Revenue Forecast Updated
              </h2>
              <h2
                id="timing-text-heading-6"
                className="timing-text-heading text-phantom absolute top-0 left-1/2 min-w-[400px] -translate-x-1/2 transform text-center text-[22px] leading-[120%] font-semibold whitespace-nowrap md:text-[28px] lg:text-[35px] xl:text-[42px]"
              >
                Initial Contact
              </h2>
            </div>
            {/* Description  */}
            <div className="relative">
              <p
                id="timing-text-1"
                className="timing-text text-secondary relative mt-6 mb-2 text-center text-sm leading-[120%] font-medium md:text-lg lg:text-[22px]"
              >
                A new lead is captured by Big Chief AI or manually entered into
                the CRM. It’s instantly added to your Deal Flow pipeline with
                property, contact info, and project notes.
              </p>
              <p
                id="timing-text-2"
                className="timing-text text-secondary absolute top-0 left-1/2 mb-2 w-full -translate-x-1/2 transform text-center text-sm leading-[120%] font-medium md:text-lg lg:text-[22px]"
              >
                You schedule a walkthrough or site visit directly from the
                opportunity without switching tools.
              </p>
              <p
                id="timing-text-3"
                className="timing-text text-secondary absolute top-0 left-1/2 mb-2 w-full -translate-x-1/2 transform text-center text-sm leading-[120%] font-medium md:text-lg lg:text-[22px]"
              >
                The estimate is generated and linked directly to the deal card.
              </p>

              <p
                id="timing-text-4"
                className="timing-text text-secondary absolute top-0 left-1/2 mb-2 w-full -translate-x-1/2 transform text-center text-sm leading-[120%] font-medium md:text-lg lg:text-[22px]"
              >
                The new job is created and scheduled, with the original deal,
                estimate, and client details fully synced across Contractor+.
              </p>
              <p
                id="timing-text-5"
                className="timing-text text-secondary absolute top-0 left-1/2 mb-2 w-full -translate-x-1/2 transform text-center text-sm leading-[120%] font-medium md:text-lg lg:text-[22px]"
              >
                Your pipeline now reflects the converted value, updating your
                projected revenue and helping you prioritize what’s next.
              </p>
              <p
                id="timing-text-6"
                className="timing-text text-secondary absolute top-0 left-1/2 mb-2 w-full -translate-x-1/2 transform text-center text-sm leading-[120%] font-medium md:text-lg lg:text-[22px]"
              >
                You or your team follows up, logs notes, and assigns a dollar
                value to the opportunity.
              </p>
            </div>
            {/* Images  */}
            <div className="relative mt-5 overflow-hidden">
              <div
                id="timing-img-1"
                className="timing-imgs relative h-[245px] max-w-[611px]"
              >
                <LottieAnimation
                  className="h-full w-full"
                  loop={true}
                  animationData={Lead_Captured}
                />
              </div>

              <div
                id="timing-img-2"
                className="timing-imgs absolute top-0 left-0 h-[245px] max-w-[611px]"
              >
                <LottieAnimation
                  className="h-full w-full"
                  loop={true}
                  animationData={Estimate_Scheduled}
                />
              </div>
              <div
                id="timing-img-3"
                className="timing-imgs absolute top-0 left-0 h-[245px] max-w-[611px]"
              >
                <LottieAnimation
                  className="h-full w-full"
                  loop={true}
                  animationData={Estimate_Sent}
                />
              </div>

              <div
                id="timing-img-4"
                className="timing-imgs absolute top-0 left-0 h-[245px] max-w-[611px]"
              >
                <LottieAnimation
                  className="h-full w-full"
                  loop={true}
                  animationData={Job_Scheduled}
                />
              </div>
              <div
                id="timing-img-5"
                className="timing-imgs absolute top-0 left-0 h-[245px] max-w-[611px]"
              >
                <LottieAnimation
                  className="h-full w-full"
                  loop={true}
                  animationData={Revenue_Forecast_Updated}
                />
              </div>
              <div
                id="timing-img-6"
                className="timing-imgs absolute top-0 left-0 h-[245px] max-w-[611px]"
              >
                <LottieAnimation
                  className="h-full w-full"
                  loop={true}
                  animationData={Initial_Contact}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-20 flex flex-col items-center justify-center px-2">
        <Button variant="primary" className="mx-auto mt-3 mb-1.5 !w-fit">
          Get started FREE
          <ArrowIcon fill="white" />
        </Button>
        <CardRequiredButton text="No credit card required" />
      </div>
    </div>
  );
};

export default FinallyConnectsField;
