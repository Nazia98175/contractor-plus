import React from "react";

const EraOfSoftware = () => {
  return (
    <section className="no-scrollbar relative overflow-x-hidden">
      <div className="bg-white-linear absolute -bottom-[1%] left-0 z-[2] h-24 w-full sm:h-[180px] lg:h-[237px]"></div>
      <div className="bg-romanRed absolute top-1/2 -left-5 -z-[1] hidden h-5 w-full max-w-[300px] -translate-y-[60%] rotate-45 rounded-full blur-[44px] md:block"></div>
      <h2 className="section-heading text-gradient-black mx-auto max-w-[730px] px-2 text-center">
        The era of software for HVAC is out. The operating system is in.
      </h2>
      <p className="text-gradient-light card-desc mx-auto mt-4 max-w-[1024px] px-2 text-center !font-semibold">
        What other solutions call “all-in-one” is really just a collection of
        features under one roof. The problem? Those features still don’t do
        enough to REALLY make a huge difference in your business. Contractor+ is
        the anti-software. We’re an operating system.
      </p>

      <div className="mx-auto w-full max-w-[700px] overflow-hidden sm:mt-16 sm:px-2 lg:mt-[117px] xl:rounded-[45px]">
        <div className="bg-secondary absolute bottom-0 left-1/2 -z-[1] hidden h-full max-h-[550px] w-full max-w-[760px] -translate-x-1/2 rounded-[760px] blur-[70px] sm:block"></div>
        <img
          src="/images/webp/era-of-software.webp"
          className="z-[1] hidden h-full w-full object-cover sm:block"
          alt="Era of Software"
        />
        <img
          src="/images/webp/mobile-software-era.webp"
          className="z-[1] block h-full w-full object-cover sm:hidden"
          alt="Era of Software"
        />
      </div>
    </section>
  );
};

export default EraOfSoftware;
