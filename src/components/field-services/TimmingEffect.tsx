"use client";
import CardRequiredButton from "../common/CardRequiredButton";

import { useOneLinkRedirect } from "@/app/lib/handleOneLinkRedirect";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { usePathname } from "next/navigation";
import { useRef } from "react";
import Ai_Call from "../../../public/lotties/AI-Call-Attendant.json";
import checked_back from "../../../public/lotties/checked-back.json";
import dispatch_board from "../../../public/lotties/dispatch-board.json";
import drag_drop from "../../../public/lotties/drag-and-drop.json";
import Field_Updates from "../../../public/lotties/Field-Updates.json";
import job_closed from "../../../public/lotties/job-closed.json";
import Live_dispatch from "../../../public/lotties/Live-dispatch.json";
import payment_sign from "../../../public/lotties/playement-sign.json";
import location from "../../../public/lotties/location.json";
import FreeAccountButton from "../common/FreeAccountButton";
import LottieAnimation from "../common/LottieAnimation";
import {
  stepFiveAnimation,
  stepFourAnimation,
  stepOneAnimation,
  stepSevenAnimation,
  stepSixAnimation,
  stepThreeAnimation,
  stepTwoAnimation,
} from "./animations";
import TimeAnimation from "./TimeAnimation";

// Register the SplitText plugin
gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);

interface TimmingEffectProps {
  timingEff?: any;
  commonData?: any;
}

const TimmingEffect: React.FC<TimmingEffectProps> = ({
  timingEff,
  commonData,
}) => {
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

      // STEP SEVEN ANIMATION
      // TIll 5:30PM
      scrollTimeline.add(stepSevenAnimation());

      gsap.set("#timeline-wrapper", {
        opacity: 1,
      });
    }, 500);
    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);
  console.log(timingEff, "timingEff");
  const pathname = usePathname();
  const { loading, handleRedirect } = useOneLinkRedirect();

  const handleClick = () => {
    handleRedirect({ pathname, email: "user@example.com" });
  };
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
        className="section-heading relative z-[4] hidden px-2 text-center sm:block"
      >
        {timingEff?.title}
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
        {timingEff?.title}
      </h2>

      <p className="text-darkness xs:text-sm relative z-[4] my-3 text-center text-xs font-semibold md:mt-5 md:text-base xl:text-lg">
        {timingEff?.subTitle}
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

        {/* STEP 7 CLOUD */}
        <img
          src="/images/png/step-7-cloud.png"
          id="step-7-cloud"
          className="absolute top-0 z-[21] h-full w-full opacity-0"
          alt="Cloud graphic for step 7 transition"
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
        <img
          id="bg-step-7"
          src="/images/png/bg-gradient-step-7.png"
          className="absolute top-0 left-0 h-full w-full opacity-0"
        />
        <div className="relative z-[2000] mx-auto flex w-full max-w-[702px] flex-col items-center justify-center px-2 md:px-0">
          <div className="flex items-center">
            <TimeAnimation />
            <div className="text-phantom relative flex h-[50px] flex-col items-center overflow-hidden text-center text-[28px] font-semibold -tracking-[0.84px] sm:text-3xl md:text-[42px]">
              <div id="am-pm-wrapper" className="flex flex-col">
                <span className="h-[50px]">AM</span>
                <span className="h-[50px]">PM</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <p
              id="timing-text-1"
              className="timing-text relative mt-6 mb-2 text-center text-sm leading-[120%] font-medium text-black md:text-lg lg:text-[22px]"
            >
              You check the live crew map, see who's already moving, drag
              unassigned jobs onto the calendar & assign based on proximity.
            </p>
            <p
              id="timing-text-2"
              className="timing-text absolute top-0 left-0 mt-6 mb-2 text-center text-sm leading-[120%] font-medium text-black md:text-lg lg:text-[22px]"
            >
              Big Chief AI call attendant answers two calls while you’re in a
              meeting, books a walkthrough, and adds the leads to your CRM.
            </p>
            <p
              id="timing-text-3"
              className="timing-text absolute top-0 left-0 mt-6 mb-2 text-center text-sm leading-[120%] font-medium text-black md:text-lg lg:text-[22px]"
            >
              A technician updates task status and uploads job photos without
              needing a check-in.
            </p>
            <p
              id="timing-text-4"
              className="timing-text absolute top-0 left-0 mt-6 mb-2 text-center text-sm leading-[120%] font-medium text-black md:text-lg lg:text-[22px]"
            >
              One tech’s stuck in traffic. You reassign their next visit to a
              nearby available team with a single drag and drop.
            </p>
            <p
              id="timing-text-5"
              className="timing-text absolute top-0 left-0 mt-6 mb-2 text-center text-sm leading-[120%] font-medium text-black md:text-lg lg:text-[22px]"
            >
              A tech completes a work order, gets the docs signed via mobile,
              and takes payment on-site.
            </p>
            <p
              id="timing-text-6"
              className="timing-text absolute top-0 left-0 mt-6 mb-2 text-center text-sm leading-[120%] font-medium text-black md:text-lg lg:text-[22px]"
            >
              A recurring client submits a service request through the portal—it
              drops straight into your dispatch board.
            </p>
            <p
              id="timing-text-7"
              className="timing-text absolute top-0 left-0 mt-6 mb-2 text-center text-sm leading-[120%] font-medium text-black md:text-lg lg:text-[22px]"
            >
              You get an alert that a tool hasn’t been checked back in. You
              follow up immediately.
            </p>{" "}
            <p
              id="timing-text-8"
              className="timing-text absolute top-0 left-0 mt-6 mb-2 text-center text-sm leading-[120%] font-medium text-black md:text-lg lg:text-[22px]"
            >
              All crews are clocked out, all jobs are closed, and you didn’t
              once need to chase down an update.
            </p>
          </div>
          <div className="relative mt-4 overflow-hidden">
            <div
              id="timing-img-1"
              className="timing-imgs relative mx-auto h-[245px] w-full max-w-[611px]"
            >
              <LottieAnimation
                className="h-full w-full"
                loop={true}
                animationData={location}
              />
            </div>
            <div
              id="timing-img-2"
              className="timing-imgs absolute top-0 left-0 mx-auto h-[245px] w-full max-w-[611px]"
            >
              <LottieAnimation
                className="h-full w-full"
                loop={true}
                animationData={Ai_Call}
              />
            </div>
            <div
              id="timing-img-3"
              className="timing-imgs absolute top-0 left-0 mx-auto h-[245px] w-full max-w-[611px]"
            >
              <LottieAnimation
                className="h-full w-full"
                loop={true}
                animationData={Field_Updates}
              />
            </div>
            <div
              id="timing-img-4"
              className="timing-imgs absolute top-0 left-0 mx-auto h-[245px] w-full max-w-[611px]"
            >
              <LottieAnimation
                className="h-full w-full"
                loop={true}
                animationData={drag_drop}
              />
            </div>
            <div
              id="timing-img-5"
              className="timing-imgs absolute top-0 left-0 mx-auto h-[245px] w-full max-w-[611px]"
            >
              <LottieAnimation
                className="h-full w-full"
                loop={true}
                animationData={payment_sign}
              />
            </div>
            <div
              id="timing-img-6"
              className="timing-imgs absolute top-0 left-0 mx-auto h-[245px] w-full max-w-[611px]"
            >
              <LottieAnimation
                className="h-full w-full"
                loop={true}
                animationData={dispatch_board}
              />
            </div>
            <div
              id="timing-img-7"
              className="timing-imgs absolute top-0 left-0 mx-auto h-[245px] w-full max-w-[611px]"
            >
              <LottieAnimation
                className="h-full w-full"
                loop={true}
                animationData={checked_back}
              />
            </div>
            <div
              id="timing-img-8"
              className="timing-imgs absolute top-0 left-0 mx-auto h-[245px] w-full max-w-[611px]"
            >
              <LottieAnimation
                className="h-full w-full"
                loop={true}
                animationData={job_closed}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-20 flex flex-col items-center justify-center px-2">
        <FreeAccountButton
          text={commonData?.getStartedFreeBtn}
          showIcon={true}
          onClick={handleClick}
          loading={loading}
          disabled={loading}
        />
        <CardRequiredButton text={commonData?.nccTxt} />
      </div>
    </div>
  );
};

export default TimmingEffect;
