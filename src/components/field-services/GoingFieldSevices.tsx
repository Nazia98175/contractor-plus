import React from "react";
import {
  BreakeIcon,
  DashedLineIcon,
  RunningBehindIcon,
  ScreenShotIcon,
} from "../common/Icons";

const GoingFieldSevices = () => {
  return (
    <section className="bg-white py-8">
      <h3 className="sub-heading text-winterWay text-center font-semibold">
        There’s no easy way to see what’s going on in the field
      </h3>
      <div className="relative mx-auto grid max-w-[1100px] grid-cols-1 items-center justify-between gap-6 px-4 py-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-0">
        {/* Dashed line - left side */}
        <div className="absolute top-[49px] left-1/2 z-0 hidden w-[65%] -translate-x-1/2 transform bg-[#F8F8F8] py-2 lg:block">
          <DashedLineIcon />
        </div>
        {/* Step 1 */}
        <div className="relative z-10 flex flex-col items-center text-center">
          <div className="mb-2">
            <RunningBehindIcon />
          </div>
          <p className="text-winterWay font-jakarta max-w-[264px] text-center text-base font-medium sm:text-lg md:text-xl">
            You don’t know who’s free, who’s close, or who’s running behind.
          </p>
        </div>

        {/* Line & Step 2 */}
        <div className="relative z-10 flex flex-col items-center text-center">
          <div className="mb-2">
            <BreakeIcon />
          </div>
          <p className="text-winterWay font-jakarta max-w-[264px] text-center text-base font-medium sm:text-lg md:text-xl">
            Last-minute changes break the flow because nothing updates
            automatically.
          </p>
        </div>

        {/* Step 3 */}
        <div className="relative z-10 flex flex-col items-center text-center">
          <div className="mb-2">
            <ScreenShotIcon />
          </div>
          <p className="text-winterWay font-jakarta max-w-[264px] text-center text-base font-medium sm:text-lg md:text-xl">
            You’re relying on texts, screenshots, and handoffs to keep the day
            moving.
          </p>
        </div>
      </div>
    </section>
  );
};

export default GoingFieldSevices;
