"use client";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import TimeAnimation from "../field-services/TimeAnimation";
import request_change from "../../../public/lotties/request-change.json";
import img1 from "../../../public/lotties/billing-animation-1.json";
import img2 from "../../../public/lotties/billing-animation-2.json";
import img4 from "../../../public/lotties/billing-animation-4.json";
import img5 from "../../../public/lotties/billing-animation-5.json";
import img6 from "../../../public/lotties/billing-animation-6.json";
import img7 from "../../../public/lotties/billing-animation-7.json";
import {
  stepFiveAnimation,
  stepFourAnimation,
  stepOneAnimation,
  stepSixAnimation,
  stepThreeAnimation,
  stepTwoAnimation,
} from "./InvoiceAnimation";
import LottieAnimation from "../common/LottieAnimation";

// Register the SplitText plugin
gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);

const FinallyMakesInvoicing = () => {
  const timelineWrapperRef = useRef(null);

  useGSAP(() => {
    setTimeout(() => {
      const scrollTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: "#timeline-wrapper",
          start: "top 0%",
          end: `+=${window.innerHeight * 6}`,
          pin: true,
          scrub: 1,
          markers: false,
        },
      });
      const timingImage = document.querySelectorAll(".timing-imgs");
      const timingTextElements = document.querySelectorAll(".timing-text");

      if (timingTextElements.length === 0) return;
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
      // STEP ONE ANIMATION
      // TIll 8:10AM
      scrollTimeline.add(stepOneAnimation());

      // STEP TWO ANIMATION
      // TIll 9:00AMAR
      scrollTimeline.add(stepTwoAnimation());

      // STEP THREE ANIMATION
      // TIll 10:45AM
      scrollTimeline.add(stepThreeAnimation());

      // STEP FOUR ANIMATION
      // TIll 12:45PM
      scrollTimeline.add(stepFourAnimation());

      // STEP FIVE ANIMATION
      // TIll 1:30PM
      scrollTimeline.add(stepFiveAnimation());

      // STEP SIX ANIMATION
      // TIll 3:00PM
      scrollTimeline.add(stepSixAnimation());

      gsap.set("#timeline-wrapper", {
        opacity: 1,
      });
    }, 500);
    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <div className="timing-text-style relative bg-white">
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
        A system that finally makes invoicing take care of itself
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
        Here's what it feels like when everything just works
      </p>
      <div
        ref={timelineWrapperRef}
        id="timeline-wrapper"
        className="relative flex h-[100vh] flex-col items-center justify-center overflow-hidden opacity-0"
      >
        <div className="bg-gradient-bar absolute top-0 left-0 z-[100] h-[10vh] w-full"></div>
        {/* SUN IMAGE  */}
        <div
          id="sun-wrapper"
          className="sun-bg absolute top-[-20%] right-[-10%] z-[13] h-[27.7vw] w-[27.7vw] rounded-full"
        ></div>
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

        {/* STEP 4 CLOUD */}
        <img
          src="/images/png/step-4-cloud.png"
          id="step-4-cloud"
          className="absolute top-0 z-[21] h-full w-full opacity-0"
          alt="Cloud graphic for step 4 transition"
        />

        {/* STEP 6 CLOUD */}
        <img
          src="/images/png/step-6-cloud.png"
          id="step-6-cloud"
          className="absolute top-0 z-[21] h-full w-full opacity-0"
          alt="Cloud graphic for step 6 transition"
        />

        {/* ENVIRONMENT BACKGROUND GRADIENT */}
        <img
          id="bg-initial"
          src="/images/png/initial-step-one.png"
          className="bg-gradient-initial absolute top-0 left-0 h-full w-full"
        />
        <img
          id="bg-step-1"
          src="/images/png/bg-gradient-step-1.png"
          className="bg-gradient-step-1 absolute top-0 left-0 h-full w-full opacity-0"
        />
        <img
          id="bg-step-2"
          src="/images/png/bg-gradient-step-2.png"
          className="bg-gradient-step-2 absolute top-0 left-0 h-full w-full opacity-0"
        />
        <img
          id="bg-step-3"
          src="/images/png/bg-gradient-step-3.png"
          className="bg-gradient-step-3 absolute top-0 left-0 h-full w-full opacity-0"
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

        <div className="relative z-[2000] mx-auto flex w-full max-w-[702px] flex-col items-center justify-center px-2 md:px-0">
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
          <div className="relative">
            <p
              id="timing-text-1"
              className="timing-text text-secondary relative mt-6 mb-2 text-center text-sm leading-[120%] font-medium md:text-lg lg:text-[22px]"
            >
              The crew clocks in from the mobile app. Mileage starts tracking
              automatically.
            </p>
            <p
              id="timing-text-2"
              className="timing-text text-secondary absolute top-0 left-0 mt-6 mb-2 text-center text-sm leading-[120%] font-medium md:text-lg lg:text-[22px]"
            >
              Two team members log time and materials used so far—already tagged
              to the invoice draft.
            </p>
            <p
              id="timing-text-3"
              className="timing-text text-secondary absolute top-0 left-0 mt-6 mb-2 text-center text-sm leading-[120%] font-medium md:text-lg lg:text-[22px]"
            >
              The customer requests two small extras. You create a change order,
              and send it for eSignature.
            </p>
            <p
              id="timing-text-4"
              className="timing-text text-secondary absolute top-0 left-0 mt-6 mb-2 text-center text-sm leading-[120%] font-medium md:text-lg lg:text-[22px]"
            >
              Change order is signed by the customer. Contractor+ updates the
              invoice, adjusts totals, and logs the time stamped signature.
            </p>
            <p
              id="timing-text-5"
              className="timing-text text-secondary absolute top-0 left-0 mt-6 mb-2 text-center text-sm leading-[120%] font-medium md:text-lg lg:text-[22px]"
            >
              The crew wraps up the job. With one tap, the aggregated uninvoiced
              billable items are added to the invoice.
            </p>
            <p
              id="timing-text-6"
              className="timing-text text-secondary absolute top-0 left-0 mt-6 mb-2 text-center text-sm leading-[120%] font-medium md:text-lg lg:text-[22px]"
            >
              The client pays online using ACH. Contractor+ confirms payment and
              auto-applies it to the job record.
            </p>
            <p
              id="timing-text-7"
              className="timing-text text-secondary absolute top-0 left-0 mt-6 mb-2 text-center text-sm leading-[120%] font-medium md:text-lg lg:text-[22px]"
            >
              Job closed, books updated, and you didn’t have to manually change
              a thing or re-enter any information.
            </p>{" "}
          </div>
          <div className="relative flex items-center justify-center overflow-hidden">
            <div
              id="timing-img-1"
              className="timing-imgs relative h-[245px] max-w-[611px]"
            >
              <LottieAnimation
                className="h-full w-full"
                loop={true}
                animationData={img1}
              />
            </div>

            <div
              id="timing-img-2"
              className="timing-imgs absolute top-0 left-0 h-[245px] max-w-[611px]"
            >
              <LottieAnimation
                className="h-full w-full"
                loop={true}
                animationData={img2}
              />
            </div>
            <div
              id="timing-img-3"
              className="timing-imgs absolute top-0 left-0 h-[245px] max-w-[611px]"
            >
              <LottieAnimation
                className="h-full w-full"
                loop={true}
                animationData={request_change}
              />
            </div>
            <div
              id="timing-img-4"
              className="timing-imgs absolute top-0 left-0 mx-auto h-[245px] max-w-[400px]"
            >
              <LottieAnimation
                className="h-full w-full"
                loop={true}
                animationData={img4}
              />
            </div>
            <div
              id="timing-img-5"
              className="timing-imgs absolute top-0 left-0 h-[245px] max-w-[611px]"
            >
              <LottieAnimation
                className="h-full w-full"
                loop={true}
                animationData={img5}
              />
            </div>
            <div
              id="timing-img-6"
              className="timing-imgs absolute top-0 left-0 h-[245px] max-w-[611px]"
            >
              <LottieAnimation
                className="h-full w-full"
                loop={true}
                animationData={img6}
              />
            </div>
            <div
              id="timing-img-7"
              className="timing-imgs absolute top-0 left-0 h-[245px] max-w-[611px]"
            >
              <LottieAnimation
                className="h-full w-full"
                loop={true}
                animationData={img7}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinallyMakesInvoicing;
