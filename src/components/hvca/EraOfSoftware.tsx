import React from "react";

const EraOfSoftware = () => {
  return (
    <section className="no-scrollbar relative overflow-x-hidden px-2">
      <div className="bg-white-linear absolute -bottom-[2%] left-0 -z-20 h-[237px] w-full"></div>
      <div className="bg-romanRed absolute top-1/2 -left-5 h-5 w-full max-w-[300px] -translate-y-[60%] rotate-45 rounded-full blur-[44px]"></div>
      <h2 className="section-heading text-gradient-black mx-auto max-w-[730px] text-center">
        The era of software for HVAC is out. The operating system is in.
      </h2>
      <p className="text-gradient-light mx-auto mt-4 max-w-[1024px] text-center text-base font-semibold">
        What other solutions call “all-in-one” is really just a collection of
        features under one roof. The problem? Those features still don’t do
        enough to REALLY make a huge difference in your business. Contractor+ is
        the anti-software. We’re an operating system.
      </p>

      <div className="mx-auto mt-[117px] w-full max-w-[700px] overflow-hidden rounded-[45px]">
        <div className="bg-secondary absolute bottom-0 left-1/2 -z-10 h-[500px] w-[760px] -translate-x-1/2 rounded-[760px] blur-[240px]"></div>
        <img
          src="/images/webp/era-of-software.webp"
          className="z-0 h-full w-full object-cover"
          alt="Era of Software"
        />
      </div>
    </section>
  );
};

export default EraOfSoftware;
