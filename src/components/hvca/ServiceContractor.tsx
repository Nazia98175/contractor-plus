import React from "react";
import TrustBar from "../homepage/TrustBar";
import { blackPlatforms } from "../common/Helper";

const ServiceContractor = () => {
  return (
    <section className="relative z-20 mx-auto w-full max-w-[1050px] space-y-9 px-2 pt-3 pb-5">
      <h2 className="section-heading crm-gradient text-center !font-black lg:!font-semibold">
        Trusted by over <strong>50,000</strong> build and service contractors
      </h2>{" "}
      <TrustBar platforms={blackPlatforms} />
    </section>
  );
};

export default ServiceContractor;
