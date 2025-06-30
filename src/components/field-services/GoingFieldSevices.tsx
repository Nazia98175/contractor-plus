import React from "react";
import {
  BreakeIcon,
  DashedLineIcon,
  RunningBehindIcon,
  ScreenShotIcon,
} from "../common/Icons";
import GoingFieldSevicesCard from "./GoingFieldSevicesCard";
import { TheSwitchingToolProps } from "../crmbussiness/SwitchingTool";
import { debugLog } from "@/utils/getConsole";
import TextAnimation from "../common/TextAnimation";
import Image from "next/image";

const GoingFieldSevices: React.FC<TheSwitchingToolProps> = ({
  switchingTool,
}) => {
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
  debugLog("switchingTool", switchingTool);
  return (
    <section className="relative z-20 pb-[52px] sm:pb-[60px] lg:pb-[95px]">
      <Image
        width={1440}
        height={150}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1440px"
        unoptimized
        className="h-[150px] w-full object-cover sm:h-[180px]"
        src="/images/webp/field-services.webp"
        alt="Map Image"
      />

      {/* <TextAnimation animateOnScroll={true} delay={0.2}> */}
      <h3 className="sub-heading text-winterWay mx-auto hidden max-w-[500px] px-2 text-center font-semibold sm:block xl:max-w-[868px]">
        <span>{switchingTool?.title}</span>
      </h3>
      {/* </TextAnimation> */}

      <h3 className="sub-heading crm-gradient mx-auto w-full max-w-[350px] px-2 text-center font-bold sm:hidden">
        {switchingTool?.title}
      </h3>
      <div className="relative mx-auto flex max-w-[1100px] grid-cols-1 flex-wrap justify-center gap-6 px-0.5 pt-9 lg:grid lg:grid-cols-3 lg:gap-0">
        {/* Dashed line */}
        <div className="absolute top-11 left-1/2 z-0 hidden w-[66%] -translate-x-1/2 transform bg-[#F8F8F8] py-2 lg:block">
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
