import React from "react";
import {
  BreakeIcon,
  DashedLineIcon,
  RunningBehindIcon,
  ScreenShotIcon,
} from "../common/Icons";

const field_service = [
  {
    id: 1,
    icon: <RunningBehindIcon />,
    text: "You don’t know who’s free, who’s close, or who’s running behind.",
  },
  {
    id: 2,
    icon: <BreakeIcon />,
    text: "Last-minute changes break the flow because nothing updates automatically.",
  },
  {
    id: 3,
    icon: <ScreenShotIcon />,
    text: "You’re relying on texts, screenshots, and handoffs to keep the day moving.",
  },
];

const GoingFieldSevices = () => {
  return (
    <section className="relative bg-white pb-8">
      <img
        className="h-[210px] w-full object-cover"
        src="/images/webp/field-services.webp"
        alt=""
      />
      <h3 className="sub-heading text-winterWay px-4 text-center font-semibold">
        There’s no easy way to see what’s going on in the field
      </h3>
      <div className="relative mx-auto grid max-w-[1100px] grid-cols-1 items-center justify-between gap-6 px-4 py-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-0">
        {/* Dashed line */}
        <div className="absolute top-[49px] left-1/2 z-0 hidden w-[65%] -translate-x-1/2 transform bg-[#F8F8F8] py-2 lg:block">
          <DashedLineIcon />
        </div>

        {field_service.map((step, index) => (
          <div
            key={index}
            className="relative z-10 flex flex-col items-center text-center"
          >
            <div className="absolute right-[10px] bottom-0 h-[84px] w-[160px] bg-[#f9f2f200] backdrop-blur-[0.6px]"></div>
            <div className="mb-2">{step.icon}</div>
            <p className="text-winterWay font-jakarta max-w-[264px] text-center text-base font-medium sm:text-lg md:text-xl">
              {step.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GoingFieldSevices;
