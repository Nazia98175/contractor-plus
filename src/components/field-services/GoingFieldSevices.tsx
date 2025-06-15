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



const GoingFieldSevices:React.FC<TheSwitchingToolProps> = ({switchingTool}) => {

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
  debugLog("switchingTool" , switchingTool)
  return (
    <section className="relative z-20 bg-white pb-[52px] sm:pb-[60px] lg:pb-[95px]">
      <img
        className="h-[210px] w-full object-cover"
        src="/images/webp/field-services.webp"
        alt="Map Image"
      />
      <h3 className="sub-heading text-winterWay hidden px-2 text-center font-semibold sm:block">
        {switchingTool?.title}
      </h3>
      <h3 className="sub-heading crm-gradient block px-2 text-center font-bold sm:hidden">
        {/* There’s no easy way to see what’s going on in the field */}
         {switchingTool?.title}
      </h3>
      <div className="relative mx-auto flex max-w-[1100px] grid-cols-1 flex-wrap justify-center gap-6 px-0.5 px-2 pt-9 lg:grid lg:grid-cols-3 lg:gap-0">
        {/* Dashed line */}
        <div className="absolute top-[49px] left-1/2 z-0 hidden w-[65%] -translate-x-1/2 transform bg-[#F8F8F8] py-2 lg:block">
          <DashedLineIcon />
        </div>

        {field_service?.map((step:any, index:any) => (
          <GoingFieldSevicesCard step={step} key={index} />
        ))}
      </div>
    </section>
  );
};

export default GoingFieldSevices;
