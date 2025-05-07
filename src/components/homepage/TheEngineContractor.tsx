import React from "react";

const TheEngineContractor = () => {
  return (
    <section className="main-container flex justify-between">
      <div className="flex flex-col gap-1.5 max-w-[515px] w-full">
        <h2 className="section-heading text-white">
          The engine 57,163 contractors run on
        </h2>
        <p className="text-base font-medium text-decemberSky">
          All the power of big software, none of the pain. One platform—not
          six—to manage jobs, crews, customers, and growth.
        </p>
      </div>
      <div className="px-6 flex flex-col -space-y-2 rounded-[14px]">
        <img
          src="/images/webp/engine.webp"
          className="max-w-[322px] object-contain"
          alt="The engine 57,163 contractors run on"
        />
        <div className="py-6 bg-black-red-linear backdrop-blur-sm">
          <h3 className="text-2xl font-medium font-grotesk ">
            Super Easy Estimates
          </h3>
          <p>+11 Hours Average Time Saved Per Week</p>
        </div>
      </div>
    </section>
  );
};

export default TheEngineContractor;
