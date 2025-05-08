import React from "react";

const ContractorIndustry = () => {
  return (
    <section className="relative py-10">
      <img
        className="absolute top-0 w-full h-full z-[-1]"
        src="/images/webp/contractor-industry-bg.webp"
        alt="webp bg"
      />
      <div>
        <h3 className="section-heading text-center text-white">
          Contractor+ serves 30+ industries
        </h3>
        <p className="text-base font-medium sm:font-normal text-center text-superSilver font-jakarta py-4">
          The only platform made for field service, trades, and general
          contractors
        </p>
        <div className="flex justify-center items-center">
          <button className="bg-red-linear h-10 primary-btn">
            Browse All Service Category
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContractorIndustry;
