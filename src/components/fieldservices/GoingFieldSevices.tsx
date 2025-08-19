"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import React, { useEffect } from "react";
import {
  BreakeIcon,
  DashedLineIcon,
  RunningBehindIcon,
  ScreenShotIcon,
} from "../common/Icons";
import { TheSwitchingToolProps } from "../crmbussiness/SwitchingTool";
import GoingFieldSevicesCard from "./GoingFieldSevicesCard";
// Register the SplitText plugin
gsap.registerPlugin(useGSAP, ScrollTrigger);
const GoingFieldSevices: React.FC<
  TheSwitchingToolProps & { isImageshow?: boolean }
> = ({ switchingTool, isImageshow = true }) => {
  const field_service = [
    {
      id: 1,
      icon: <RunningBehindIcon />,
      text: switchingTool?.cardsDetail?.[0]?.text,
    },
    {
      id: 2,
      icon: <BreakeIcon />,
      text: switchingTool?.cardsDetail?.[1]?.text,
    },
    {
      id: 3,
      icon: <ScreenShotIcon />,
      text: switchingTool?.cardsDetail?.[2]?.text,
    },
  ];

  useEffect(() => {
    const scrollTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#going-field-service",
        start: "top 50%",
        endTrigger: "#parallex-img-wrapper",
        end: `bottom 100px`,
        scrub: 2,
      },
    });

    scrollTimeline.to("#parallex-img", {
      y: -100,
      ease: "none",
    });
  }, []);

  return (
    <section
      id="going-field-service"
      className="relative z-20 overflow-hidden pb-[52px] sm:pb-[60px] lg:pb-[95px]"
    >
      {isImageshow && (
        <div id="parallex-img-wrapper"> 
          <Image
            width={1440}
            height={150}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1440px"
            unoptimized
            className="h-[150px] w-full object-cover sm:h-[180px]"
            id="parallex-img"
            src="/images/webp/field-services.webp"
            alt="Map Image"
          />
        </div>
      )}

      {/* <Copy animateOnScroll={true} delay={0.2}> */}
      <h3 className="sub-heading text-winterWay mx-auto hidden max-w-[500px] px-2 text-center font-semibold sm:block xl:max-w-[1068px]">
        <span>{switchingTool?.title}</span>
      </h3>
      {/* </Copy> */}

      <h3 className="sub-heading crm-gradient mx-auto w-full max-w-[350px] px-2 text-center font-bold sm:hidden">
        {switchingTool?.title}
      </h3>
      <div className="relative mx-auto flex max-w-[1100px] grid-cols-1 flex-wrap justify-center gap-6 px-0.5 pt-9 lg:grid lg:grid-cols-3 lg:gap-0">
        {/* Dashed line */}
        <div className="bg-doctor2 absolute top-11 left-1/2 z-0 hidden w-[66%] -translate-x-1/2 transform py-2 lg:block">
          <DashedLineIcon />
        </div>

        {field_service?.map((step: any, index: any) => (
          <GoingFieldSevicesCard step={step} key={index} />
        ))}
      </div>
    </section>
  );
};

export default GoingFieldSevices;
