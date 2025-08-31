"use client";
import React from "react";
import { useMetaTags } from "@/hooks/use-meta-tags";
import { PageHeader } from "../../components/calculators/multi-service/PageHeader";
import { CalculatorForm } from "../../components/calculators/multi-service/CalculatorForm";
import { EducationalContent } from "../../components/calculators/multi-service/EducationalContent";

export default function MultiServiceJobEstimator() {
  useMetaTags({
    title: "Multi-Service Job Estimator | Free Calculator for Contractors",
    description:
      "Estimate multi-service projects with our free calculator. Add different trades, include markup, and generate accurate estimates for complex jobs.",
    keywords:
      "multi-service estimator, job cost calculator, contractor markup calculator, project cost estimator, multiple trade estimate",
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <PageHeader />
      <CalculatorForm />
      <EducationalContent />
    </div>
  );
}
