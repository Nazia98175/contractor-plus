import Image from "next/image";
import React from "react";
import RealTimeServiceConnectorSlider from "./RealTimeServiceConnectorSlider";
import { RealTimeServiceConnectorIcon } from "../common/Icons";

const RealTimeServiceConnector = () => {
  const sliderData = [
    {
      title: "Smart Schedule",
      description:
        "See every crew, job, and asset in one screen. Drag and drop booking makes scheduling simple.",
    },
    {
      title: "Real-Time Updates",
      description:
        "Get live updates from field workers and sync your team's progress instantly.",
    },
    {
      title: "Asset Tracking",
      description:
        "Track the location and status of your tools, vehicles, and resources in real time.",
    },
    {
      title: "Smart Schedule",
      description:
        "See every crew, job, and asset in one screen. Drag and drop booking makes scheduling simple.",
    },
    {
      title: "Real-Time Updates",
      description:
        "Get live updates from field workers and sync your team's progress instantly.",
    },
    {
      title: "Asset Tracking",
      description:
        "Track the location and status of your tools, vehicles, and resources in real time.",
    },
  ];
  return (
    <section className="relative z-20 overflow-hidden bg-white">
      <RealTimeServiceConnectorIcon className="pointer-events-none absolute bottom-[10%] -left-[65%] -z-10 sm:bottom-[15%] sm:left-0 lg:bottom-[18%]" />
      <h3 className="main-heading section-heading text-gradient-black relative z-20 mx-auto max-w-[1029px] px-2 text-center xl:px-0">
        Field service management software that connects the work, the people,
        and the updates in <b>real time</b>
      </h3>
      <div className="relative">
        <div className="mx-auto max-w-[1029px] overflow-hidden px-6 pt-[33px] sm:overflow-visible md:px-2 md:pt-[72px] xl:px-0">
          <Image
            width={871}
            height={532}
            className="shadow-c3 mx-auto hidden w-full max-w-[871px] rounded-t-[63px] object-cover md:block"
            src={"/images/webp/real-time-service-connector-screen.webp"}
            alt="real-time-service-connector-screen"
            unoptimized
          />
          <Image
            width={871}
            height={532}
            className="shadow-c4 mx-auto block w-full max-w-[871px] object-cover md:hidden"
            src={"/images/webp/real-time-service-connector-screen-mobile.webp"}
            alt="real-time-service-connector-screen"
            unoptimized
          />
          <div className="img-linear xs:bottom-[18%] xs:h-[56%] absolute bottom-[37%] left-0 z-10 block h-[34%] w-full rotate-180 sm:hidden"></div>
        </div>
        <div className="img-linear absolute -bottom-[1%] z-10 hidden h-[60%] w-full rotate-180 sm:block"></div>
        <div className="w-full sm:-mt-10">
          <RealTimeServiceConnectorSlider sliderData={sliderData} />
        </div>
      </div>
    </section>
  );
};

export default RealTimeServiceConnector;
