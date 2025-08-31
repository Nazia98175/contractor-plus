"use client";
import { useState } from "react";
import { useMetaTags } from "@/hooks/use-meta-tags";
import {
  CalculatorForm,
  CalculatorValues,
} from "../../components/calculators/labor/CalculatorForm";
import { PageHeader } from "../../components/calculators/labor/PageHeader";
import { ResultsPanel } from "../../components/calculators/labor/CalculationResult";
import { EducationalContent } from "../../components/calculators/labor/EducationalContent";

export default function LaborCalculator() {
  const [calculationResult, setCalculationResult] = useState<{
    totalLaborHours: number;
    laborCost: number;
    burdenCost: number;
    totalLaborCost: number;
    profitAmount: number;
    priceToClient: number;
    hasMarkup: boolean;
  } | null>(null);

  // Add SEO meta tags
  useMetaTags({
    title:
      "Labor Cost Calculator for Contractors | Free Construction Business Tool",
    description:
      "Calculate accurate labor costs and charges with our free contractor calculator. Account for wages, burden, and markup to ensure profitable pricing.",
    canonicalUrl: "https://contractorplus.app/calculators/labor",
  });

  // Calculate labor costs
  const onCalculate = (values: CalculatorValues) => {
    const { workers, hoursPerWorker, hourlyWage, laborBurden, markup } = values;

    // Step 1: Calculate total labor hours
    const totalLaborHours = workers * hoursPerWorker;

    // Step 2: Calculate direct labor cost
    const laborCost = totalLaborHours * hourlyWage;

    // Step 3: Calculate burden cost
    const burdenCost = laborCost * (laborBurden / 100);

    // Step 4: Get total labor cost
    const totalLaborCost = laborCost + burdenCost;

    // Step 5 & 6: Calculate price to client with markup if applicable
    const hasMarkup = markup > 0;
    const profitAmount = hasMarkup ? totalLaborCost * (markup / 100) : 0;
    const priceToClient = totalLaborCost + profitAmount;

    setCalculationResult({
      totalLaborHours,
      laborCost,
      burdenCost,
      totalLaborCost,
      profitAmount,
      priceToClient,
      hasMarkup,
    });
  };

  return (
    <div className="container mx-auto max-w-5xl px-4 py-8">
      <PageHeader />

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        {/* Calculator Form */}
        <div className="lg:col-span-2">
          <CalculatorForm onCalculate={onCalculate} />
        </div>

        {/* Results Panel */}
        <div>
          <ResultsPanel calculationResult={calculationResult} />
        </div>
      </div>

      {/* Educational Content */}
      <EducationalContent />
    </div>
  );
}
