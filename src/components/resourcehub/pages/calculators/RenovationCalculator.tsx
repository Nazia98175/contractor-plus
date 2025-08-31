"use client";
import React, { useState } from "react";
import { useMetaTags } from "@/hooks/use-meta-tags";
import { PageHeader } from "../../components/calculators/renovation/PageHeader";
import { CalculatorForm } from "../../components/calculators/renovation/CalculatorForm";
import { CalculationResult } from "../../components/calculators/renovation/CalculationResult";
import { EducationalContent } from "../../components/calculators/renovation/EducationalContent";

interface CalculationData {
  baseRenovationCost: number;
  contingencyAmount: number;
  totalRenovationCost: number;
  hasContingency: boolean;
  contingencyPercentage: number;
}

export default function RenovationCalculator() {
  useMetaTags({
    title: "Renovation Cost Calculator | Estimate Remodel Costs Accurately",
    description:
      "Use our free renovation cost calculator to estimate your home remodeling project. Plan your budget with accurate estimates based on square footage and project scope.",
  });

  const [calculationResult, setCalculationResult] =
    useState<CalculationData | null>(null);

  const handleCalculate = (values: {
    renovationArea: number;
    costPerSqFt: number;
    contingencyPercentage: number;
  }) => {
    const { renovationArea, costPerSqFt, contingencyPercentage } = values;

    // Calculate the base renovation cost
    const baseRenovationCost = renovationArea * costPerSqFt;

    // Calculate the contingency amount
    const contingencyAmount =
      baseRenovationCost * (contingencyPercentage / 100);

    // Calculate the total renovation cost
    const totalRenovationCost = baseRenovationCost + contingencyAmount;

    // Set the calculation result
    setCalculationResult({
      baseRenovationCost,
      contingencyAmount,
      totalRenovationCost,
      hasContingency: contingencyPercentage > 0,
      contingencyPercentage,
    });
  };

  return (
    <div className="main-container py-8 md:px-6">
      <PageHeader />

      <div className="mb-8 grid gap-6 md:grid-cols-2 lg:gap-12">
        <div>
          <CalculatorForm onCalculate={handleCalculate} />
        </div>
        <div>
          {calculationResult && (
            <CalculationResult result={calculationResult} />
          )}
        </div>
      </div>

      <EducationalContent />
    </div>
  );
}
