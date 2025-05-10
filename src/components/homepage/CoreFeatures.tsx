import React from "react";
import { Pathbg } from "../common/Icons";
import CoreFeaturesCard from "./CoreFeaturesCard";

const CoreFeatures = () => {
  return (
    <section className="max-w-[991px] mx-auto px-2 pt-12 md:pt-0">
      <h3 className="sub-heading text-lightBlack font-semibold text-center md:text-start">
        Core Features
      </h3>
      <p className="mt-4 text-base font-jakarta font-medium text-wallStreet">
        Discover the powerful tools that make Contractor+ the ultimate solution
        for your contracting business
      </p>
      <CoreFeaturesCard />
    </section>
  );
};

export default CoreFeatures;
