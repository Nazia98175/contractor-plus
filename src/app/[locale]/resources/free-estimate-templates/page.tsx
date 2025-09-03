import FreeEstimateMaker from "@/components/resourcehub/pages/FreeEstimateMaker";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Free Estimate Templates for Contractors",
  description:
    "Download customizable estimate templates for jobs, bids, and proposals, created for every type of contractor.",
};
const FreeEstimatePage = () => {
  return (
    <>
      <FreeEstimateMaker />
    </>
  );
};

export default FreeEstimatePage;
