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
import { stepOneAnimation, stepTwoAnimation } from "./animations";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

const TimmingEffect = () => {
  const timelineWrapperRef = useRef(null);

  console.log("====================================");
  console.log(timelineWrapperRef, "timelineWrapperRef");
  console.log("====================================");
  useGSAP(() => {
    // if (typeof window === "undefined") return;
    // setTimeout(() => {
    const firstStepUpperMin = 6450;
    const secondStepUpperMin = 8900;
    const thirdStepUpperMin = 14150;
    const fourStepUpperMin = 18650;
    const fiveStepUpperMin = 22400;
    const sixStepUpperMin = 26900;
    const seventhStepUpperMin = 34400;
    const scrollTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#timeline-wrapper",
        start: "top 0%",
        end: `+=${window.innerHeight * 6}`,
        pin: true,
        scrub: 1,
        markers: true,
      },
    });

    // STEP ONE ANIMATION
    scrollTimeline.add(stepOneAnimation());

    scrollTimeline.addPause(1);
    // STEP TWO ANIMATION
    scrollTimeline.add(stepTwoAnimation());
    scrollTimeline.addPause(2);
    // STEP THREE ANIMATION
    scrollTimeline
      .to(
        ".upper-minute-time",
        {
          y: -thirdStepUpperMin - 50,
          ease: "expo.inOut",
        },
        "step-3",
      )

      .to(
        ".middle-minute-time",
        {
          y: -thirdStepUpperMin - 100,
          ease: "expo.inOut",
        },
        "step-3",
      )
      .to(
        ".bottom-minute-time",
        {
          y: -thirdStepUpperMin - 150,
          ease: "expo.inOut",
        },
        "step-3",
      )
      .to(
        ".upper-hour-time",
        {
          y: -400,
          ease: "expo.inOut",
        },
        "step-3",
      )
      .to(
        ".middle-hour-time",
        {
          y: -450,
          ease: "expo.inOut",
        },
        "step-3",
      )
      .to(
        ".bottom-hour-time",
        {
          y: -500,
          ease: "expo.inOut",
        },
        "step-3",
      );
    scrollTimeline.addPause(2);
    // STEP FOUR ANIMATION
    scrollTimeline
      .to(
        ".upper-minute-time",
        {
          y: -fourStepUpperMin - 50,
          ease: "expo.inOut",
        },
        "step-4",
      )
      .to(
        ".middle-minute-time",
        {
          y: -fourStepUpperMin - 100,
          ease: "expo.inOut",
        },
        "step-4",
      )
      .to(
        ".bottom-minute-time",
        {
          y: -fourStepUpperMin - 150,
          ease: "expo.inOut",
        },
        "step-4",
      )
      .to(
        ".upper-hour-time",
        {
          y: -500,
          ease: "expo.inOut",
        },
        "step-4",
      )
      .to(
        ".middle-hour-time",
        {
          y: -550,
          ease: "expo.inOut",
        },
        "step-4",
      )
      .to(
        ".bottom-hour-time",
        {
          y: -600,
          ease: "expo.inOut",
        },
        "step-4",
      );
    scrollTimeline.to(
      "#am-pm-wrapper",
      {
        y: -50,
        ease: "none",
        duration: 0.06,
        delay: 0.31,
      },
      "step-4",
    );
    // STEP FIVE ANIMATION
    scrollTimeline
      .to(
        ".upper-minute-time",
        {
          y: -fiveStepUpperMin - 50,
          ease: "expo.inOut",
        },
        "step-5",
      )
      .to(
        ".middle-minute-time",
        {
          y: -fiveStepUpperMin - 100,
          ease: "expo.inOut",
        },
        "step-5",
      )
      .to(
        ".bottom-minute-time",
        {
          y: -fiveStepUpperMin - 150,
          ease: "expo.inOut",
        },
        "step-5",
      )
      .to(
        ".upper-hour-time",
        {
          y: -550,
          ease: "expo.inOut",
        },
        "step-5",
      )
      .to(
        ".middle-hour-time",
        {
          y: -600,
          ease: "expo.inOut",
        },
        "step-5",
      )
      .to(
        ".bottom-hour-time",
        {
          y: -650,
          ease: "expo.inOut",
        },
        "step-5",
      );

    scrollTimeline.addPause(2);

    scrollTimeline
      .to(
        ".upper-minute-time",
        {
          y: -sixStepUpperMin - 50,
          ease: "expo.inOut",
        },
        "step-6",
      )
      .to(
        ".middle-minute-time",
        {
          y: -sixStepUpperMin - 100,
          ease: "expo.inOut",
        },
        "step-6",
      )
      .to(
        ".bottom-minute-time",
        {
          y: -sixStepUpperMin - 150,
          ease: "expo.inOut",
        },
        "step-6",
      )
      .to(
        ".upper-hour-time",
        {
          y: -650,
          ease: "expo.inOut",
        },
        "step-6",
      )
      .to(
        ".middle-hour-time",
        {
          y: -700,
          ease: "expo.inOut",
        },
        "step-6",
      )
      .to(
        ".bottom-hour-time",
        {
          y: -750,
          ease: "expo.inOut",
        },
        "step-6",
      );

    scrollTimeline
      .to(
        ".upper-minute-time",
        {
          y: -seventhStepUpperMin - 50,
          ease: "expo.inOut",
        },
        "step-7",
      )
      .to(
        ".middle-minute-time",
        {
          y: -seventhStepUpperMin - 100,
          ease: "expo.inOut",
        },
        "step-7",
      )
      .to(
        ".bottom-minute-time",
        {
          y: -seventhStepUpperMin - 150,
          ease: "expo.inOut",
        },
        "step-7",
      )
      .to(
        ".upper-hour-time",
        {
          y: -750,
          ease: "expo.inOut",
        },
        "step-7",
      )
      .to(
        ".middle-hour-time",
        {
          y: -800,
          ease: "expo.inOut",
        },
        "step-7",
      )
      .to(
        ".bottom-hour-time",
        {
          y: -850,
          ease: "expo.inOut",
        },
        "step-7",
      );
    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <div className="relative">
      <section
        // ref={timelineWrapperRef}

        className="relative min-h-[100vh] bg-white" // Back to original height
      >
        <h2
          style={{
            background:
              "linear-gradient(276deg, rgba(238, 30, 37, 0.4) 8%, rgba(0, 0, 0, 0) 100%), #D8D8D8",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
          className="section-heading relative z-[4] px-2 text-center"
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
            className="sun-bg absolute -top-[5%] -right-[20%] z-[3] h-[165px] w-[165px] rounded-full min-[400px]:-right-[13%] sm:-top-[10%] sm:z-[1] sm:h-[250px] sm:w-[250px] md:h-[300px] md:w-[300px] xl:h-[400] xl:w-[400px]"
          ></div>
          {/* TOP WHITE BLUR LINE  */}
          <div className="absolute -top-[17%] left-1/2 z-[3] hidden h-[180px] w-[120%] -translate-x-1/2 rounded-t-full bg-white blur-[20px] sm:block lg:-top-[25%] lg:blur-[25px] xl:h-[250px]"></div>
          {/* BOTTOM WHITE BLUR LINE  */}
          <div className="absolute -bottom-[25%] left-1/2 z-[3] h-[180px] w-[120%] -translate-x-1/2 rounded-t-full bg-white blur-[25px] md:h-[250px]"></div>

          {/* ORANGE BLUR LINEAR BACKGROUND  */}
          <div className="sun-reflect absolute right-0 h-full w-full rotate-180"></div>
          {/* CLOUD IMAGE 1  */}
          <img
            id="cloud-1"
            className="absolute top-[-30%] right-[-14%] z-[2] w-full max-w-[300px] -rotate-20 object-cover opacity-40 md:right-0 md:opacity-100"
            src="/images/png/timming-effect-cloud-2.png"
            alt="Claud For design"
          />
          {/* CLOUD IMAGE 2  */}
          <img
            id="cloud-2"
            className="absolute top-0 left-0 z-[1] max-h-[305px] w-full object-center opacity-40 md:opacity-100"
            src="/images/webp/timming-effect-cloud-1.webp"
            alt="Claud For design"
          />
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
