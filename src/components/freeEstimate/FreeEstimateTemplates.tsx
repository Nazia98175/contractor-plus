"use client";
import FreeEstimateMaker from "@/components/freeEstimate/FreeEstimateMaker";
import { EstimateInfo, EstimateItem } from "@/components/hooks/use-estimate";
import gsap from "gsap";
import React, { useEffect } from "react";

const FreeEstimateTemplates = () => {
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
  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => {
      gsap.to("#home-page-view-port-screen", {
        opacity: 1,
        duration: 1,
      });
      gsap.to("#home-page-header-view-port-screen", {
        opacity: 1,
        duration: 1,
      });
      gsap.to("#home-page-footer-view-port-screen", {
        opacity: 1,
        duration: 1,
      });
    }, 1000);
  }, []);

  return (
    <div className="bg-white">
      <FreeEstimateMaker
        initialItems={initialItems}
        initialEstimateInfo={initialEstimateInfo}
      />
    </div>
  );
};

export default FreeEstimateTemplates;
