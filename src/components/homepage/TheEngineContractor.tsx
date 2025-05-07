import React from "react";

const TheEngineContractor = () => {
  return (
    <section className="main-container flex md:justify-between flex-col items-center md:flex-row justify-center gap-8 py-8 xl:bg-black-red-linear rounded-[22px] md:!px-12">
      <div className="flex flex-col gap-1.5 md:max-w-[515px] w-full">
        <h2 className="section-heading text-white text-center md:text-left">
          The engine 57,163 contractors run on
        </h2>
        <p className="text-base font-medium text-decemberSky text-center md:text-left">
          All the power of big software, none of the pain. One platform—not
          six—to manage jobs, crews, customers, and growth.
        </p>
      </div>
      <div className="flex flex-col max-w-[356px] w-full -space-y-2  items-center">
        <img
          src="/images/webp/engine.webp"
          className="max-w-[322px] object-contain"
          alt="The engine 57,163 contractors run on"
        />

        <div className="p-6 w-full bg-black-red-linear backdrop-blur-sm rounded-[14px] overflow-hidden font-grotesk text-sm font-bold text-darkGrey space-y-1">
          <h3 className="text-2xl font-medium  text-doctor">
            Super Easy Estimates
          </h3>
          <p>
            <span className="text-monstrousGreen">+11</span> Hours Average Time
            Saved Per Week
          </p>
        </div>
      </div>
    </section>
  );
};

export default TheEngineContractor;
