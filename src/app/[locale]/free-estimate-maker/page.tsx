import FreeEstimateMaker from "@/components/freeEstimate/FreeEstimateMaker";
import { EstimateInfo, EstimateItem } from "@/components/hooks/use-estimate";
import React from "react";

const page = () => {
  const initialEstimateInfo: EstimateInfo = {
    title: "New Estimate",
    companyName: "",
    companyLogo: null,
    companyAddress: "",
    companyPhone: "",
    companyEmail: "",
    clientName: "",
    clientAddress: "",
    clientPhone: "",
    clientEmail: "",
    estimateNumber: `EST-${Date.now()}`, // Deterministic ID
    estimateDate: new Date().toISOString().split("T")[0],
    expiryDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000)
      .toISOString()
      .split("T")[0],
    notes: "",
    salesTax: 0,
    markup: 0,
  };

  const initialItems: EstimateItem[] = [];
  return (
    <div className="bg-white">
      <FreeEstimateMaker
        initialItems={initialItems}
        initialEstimateInfo={initialEstimateInfo}
      />
    </div>
  );
};

export default page;
