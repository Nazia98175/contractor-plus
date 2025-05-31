import React from "react";

const EraOfSoftware = () => {
  return (
    <section className="no-scrollbar relative z-10 overflow-x-hidden px-2">
      <div className="sm:bg-white-linear absolute -bottom-[2%] left-0 z-[2] block h-24 w-full bg-white blur-lg sm:h-[180px] sm:blur-none lg:h-[237px]"></div>
      <div className="bg-romanRed absolute top-1/2 -left-5 hidden h-5 w-full max-w-[300px] -translate-y-[60%] rotate-45 rounded-full blur-[44px] md:block"></div>
      <h2 className="section-heading text-gradient-black mx-auto max-w-[730px] text-center">
        The era of software for HVAC is out. The operating system is in.
      </h2>
      <p className="text-gradient-light card-desc mx-auto mt-4 max-w-[1024px] text-center !font-semibold">
        What other solutions call “all-in-one” is really just a collection of
        features under one roof. The problem? Those features still don’t do
        enough to REALLY make a huge difference in your business. Contractor+ is
        the anti-software. We’re an operating system.
      </p>

      <div className="mx-auto mt-16 w-full max-w-[700px] overflow-hidden lg:mt-[117px] xl:rounded-[45px]">
        <div className="bg-secondary absolute bottom-0 left-1/2 -z-[1] h-full max-h-[300px] w-full max-w-[760px] -translate-x-1/2 rounded-[760px] blur-[200px] md:max-h-[550px]"></div>
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
