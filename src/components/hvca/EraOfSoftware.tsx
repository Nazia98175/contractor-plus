import React from "react";

const EraOfSoftware = () => {
  return (
    <section className="relative z-30 px-2">
      <h2 className="section-heading mx-auto max-w-[730px] text-center">
        The era of software for HVAC is out. The operating system is in.
      </h2>
      <p className="text-wallStreet mx-auto mt-4 max-w-[1024px] text-center text-base font-semibold">
        What other solutions call “all-in-one” is really just a collection of
        features under one roof. The problem? Those features still don’t do
        enough to REALLY make a huge difference in your business. Contractor+ is
        the anti-software. We’re an operating system.
      </p>
      <div className="mx-auto max-w-[700px] overflow-hidden">
        <img
          src="/images/webp/era-of-software.webp"
          className="rounded-3xl"
          alt="Era of Software"
        />
      </div>
    </section>
  );
};

export default EraOfSoftware;
