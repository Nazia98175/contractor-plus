"use client";
import Image from "next/image";
import Button from "../common/Button";
import CardRequiredButton from "../common/CardRequiredButton";
import { ArrowIcon } from "../common/Icons";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import TimeAnimation from "./TimeAnimation";
import { useGSAP } from "@gsap/react";
import {
  stepFiveAnimation,
  stepFourAnimation,
  stepOneAnimation,
  stepSevenAnimation,
  stepSixAnimation,
  stepThreeAnimation,
  stepTwoAnimation,
} from "./animations";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

const TimmingEffect = () => {
  const timelineWrapperRef = useRef(null);

  console.log("====================================");
  console.log(timelineWrapperRef, "timelineWrapperRef");
  console.log("====================================");
  useGSAP(() => {
    const scrollTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#timeline-wrapper",
        start: "top 0%",
        end: `+=${window.innerHeight * 8}`,
        pin: true,
        scrub: 1,
        markers: false,
      },
    });

    // STEP ONE ANIMATION
    // TIll 8:10AM
    scrollTimeline.add(stepOneAnimation());
    scrollTimeline.addPause(1);

    // STEP TWO ANIMATION
    // TIll 9:00AM
    scrollTimeline.add(stepTwoAnimation());
    scrollTimeline.addPause(2);

    // STEP THREE ANIMATION
    // TIll 10:45AM
    scrollTimeline.add(stepThreeAnimation());
    scrollTimeline.addPause(4);

    // STEP FOUR ANIMATION
    // TIll 12:45PM
    scrollTimeline.add(stepFourAnimation());
    scrollTimeline.addPause(6);

    // STEP FIVE ANIMATION
    // TIll 1:30PM
    scrollTimeline.add(stepFiveAnimation());
    scrollTimeline.addPause(4);

    // STEP SIX ANIMATION
    // TIll 3:00PM
    scrollTimeline.add(stepSixAnimation());
    scrollTimeline.addPause(4);

    // STEP SEVEN ANIMATION
    // TIll 5:30PM
    scrollTimeline.add(stepSevenAnimation());
    scrollTimeline.addPause(4);

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <div className="relative">
      <section className="relative min-h-[100vh] bg-white">
        <h2
          style={{
            background:
              "linear-gradient(276deg, rgba(238, 30, 37, 0.4) 8%, rgba(0, 0, 0, 0) 100%), #D8D8D8",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
          className="section-heading relative z-[4] px-2 pt-8 text-center"
        >
          A system that finally connects field and office
        </h2>

        <p className="text-darkness relative z-[4] mt-3 text-center text-xs font-semibold sm:text-sm md:mt-5 md:text-base xl:text-lg">
          Here's what it feels like when everything just works
        </p>
        <div
          ref={timelineWrapperRef}
          id="timeline-wrapper"
          className="relative mt-10 flex min-h-[100vh] flex-col items-center justify-center overflow-hidden md:overflow-hidden"
        >
          {/* SUN IMAGE  */}
          <div
            id="sun-wrapper"
            className="sun-bg absolute -top-[5%] -right-[20%] z-[13] h-[165px] w-[165px] rounded-full min-[400px]:-right-[13%] sm:-top-[10%] sm:z-[1] sm:h-[250px] sm:w-[250px] md:h-[300px] md:w-[300px] xl:h-[400] xl:w-[400px]"
          ></div>
          {/* TOP WHITE BLUR LINE  */}
          <div className="absolute -top-[17%] left-1/2 z-[10000] hidden h-[180px] w-[120%] -translate-x-1/2 rounded-t-full bg-white blur-[20px] sm:block lg:-top-[25%] lg:blur-[25px] xl:h-[250px]"></div>
          {/* BOTTOM WHITE BLUR LINE  */}
          {/* <div className="absolute -bottom-[25%] left-1/2 z-[3] h-[180px] w-[120%] -translate-x-1/2 rounded-t-full bg-red-400 blur-[25px] md:h-[250px]"></div> */}
          {/* ORANGE BLUR LINEAR BACKGROUND  */}
          {/* <div className="sun-reflect absolute top-[-7.29vw] right-[-13.5vw] z-[20] h-[25.64vw] w-[25.64vw] rotate-180"></div> */}
          {/* INITIAL CLOUD 1  */}
          <img
            src="/images/png/initial-cloud.png"
            id="initial-cloud"
            className="absolute top-0 z-[21] w-full"
            alt=""
          />
          {/* STEP 1 CLOUD */}
          <img
            src="/images/png/step-1-cloud.png"
            id="step-1-cloud"
            className="absolute top-0 z-[21] w-full opacity-0"
            alt=""
          />
          {/* STEP 2 CLOUD */}
          <img
            src="/images/png/step-2-cloud.png"
            id="step-2-cloud"
            className="absolute top-0 z-[21] w-full opacity-0"
            alt=""
          />
          {/* STEP 3 CLOUD */}
          <img
            src="/images/png/step-3-cloud.png"
            id="step-3-cloud"
            className="absolute top-0 z-[21] w-full opacity-0"
            alt=""
          />{" "}
          {/* STEP 4 CLOUD */}
          <img
            src="/images/png/step-4-cloud.png"
            id="step-4-cloud"
            className="absolute top-0 z-[21] w-full opacity-0"
            alt=""
          />
          {/* STEP 6 CLOUD */}
          <img
            src="/images/png/step-6-cloud.png"
            id="step-6-cloud"
            className="absolute top-0 z-[21] w-full opacity-0"
            alt=""
          />{" "}
          {/* STEP 7 CLOUD */}
          <img
            src="/images/png/step-7-cloud.png"
            id="step-7-cloud"
            className="absolute top-0 z-[21] w-full opacity-0"
            alt=""
          />
          {/* ENVIRONMENT BACKGROUND GRADIENT */}
          <div
            id="bg-initial"
            className="bg-gradient-initial absolute top-0 left-0 h-full w-full"
          ></div>
          <div
            id="bg-step-1"
            className="bg-gradient-step-1 absolute top-0 left-0 h-full w-full opacity-0"
          ></div>
          <div
            id="bg-step-2"
            className="bg-gradient-step-2 absolute top-0 left-0 h-full w-full opacity-0"
          ></div>
          <div
            id="bg-step-3"
            className="bg-gradient-step-3 absolute top-0 left-0 h-full w-full opacity-0"
          ></div>
          <div
            id="bg-step-4"
            className="bg-gradient-step-4 absolute top-0 left-0 h-full w-full opacity-0"
          ></div>
          <div
            id="bg-step-5"
            className="bg-gradient-step-5 absolute top-0 left-0 h-full w-full opacity-0"
          ></div>
          <div
            id="bg-step-6"
            className="bg-gradient-step-6 absolute top-0 left-0 h-full w-full opacity-0"
          ></div>
          <div
            id="bg-step-7"
            className="bg-gradient-step-7 absolute top-0 left-0 h-full w-full opacity-0"
          ></div>
          <div className="relative z-20 mx-auto flex w-full max-w-[702px] flex-col items-center justify-center px-2 md:px-0">
            <div className="flex items-center">
              <TimeAnimation />
              <div className="text-phantom relative flex h-[50px] flex-col items-center overflow-hidden text-center text-[28px] font-semibold -tracking-[0.84px] sm:text-3xl md:text-[42px]">
                <div id="am-pm-wrapper" className="flex flex-col">
                  <span className="h-[50px]">AM</span>
                  <span className="h-[50px]">PM</span>
                </div>
              </div>
            </div>
            <p className="text-secondary mt-6 mb-2 text-center text-sm leading-[110%] font-medium md:text-lg lg:text-[22px]">
              You check the live crew map, see who's already moving, drag
              unassigned jobs onto the calendar & assign based on proximity.
            </p>
            <Image
              width={611}
              height={245}
              src="/images/webp/timing.webp"
              alt="Timing Image"
            />
          </div>
        </div>

        <div className="relative z-[3] flex flex-col items-center justify-center px-2">
          <Button variant="primary" className="mt-3 mb-1.5">
            Get started FREE
            <ArrowIcon fill="white" />
          </Button>
          <CardRequiredButton text="No credit card required" />
        </div>
      </section>
    </div>
  );
};

export default TimmingEffect;
