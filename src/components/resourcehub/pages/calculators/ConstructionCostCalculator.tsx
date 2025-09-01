"use client";
import { useState } from "react";
import { useMetaTags } from "@/hooks/use-meta-tags";
import { PageHeader } from "../../components/calculators/construction-cost/PageHeader";
import { CalculatorForm } from "../../components/calculators/construction-cost/CalculatorForm";
import { CalculationResult } from "../../components/calculators/construction-cost/CalculationResult";
import { EducationalContent } from "../../components/calculators/construction-cost/EducationalContent";

export default function ConstructionCostCalculator() {
  // State for calculated results
  const [calculationResult, setCalculationResult] = useState<{
    baseCost: number;
    extraAmount: number;
    totalCost: number;
    hasContingency: boolean;
    contingencyPercentage: number;
  } | null>(null);

  // Add SEO meta tags
  useMetaTags({
    title: "Construction Cost Estimator | Calculate Building Project Costs",
    description:
      "Estimate construction costs based on square footage, cost per square foot, and contingency. Free calculator for contractors and homeowners.",
    canonicalUrl: "https://contractorplus.app/calculators/construction-cost",
  });

  // Calculate construction costs
  const onCalculate = (values: {
    projectSize: number;
    costPerSqFt: number;
    contingencyPercentage: number;
  }) => {
    const { projectSize, costPerSqFt, contingencyPercentage } = values;

    // Calculate base cost
    const baseCost = projectSize * costPerSqFt;

    // Apply contingency percentage (if any)
    const effectiveContingency = Math.max(0, contingencyPercentage);
    const extraAmount = baseCost * (effectiveContingency / 100);

    // Calculate total cost
    const totalCost = baseCost + extraAmount;

    setCalculationResult({
      baseCost,
      extraAmount,
      totalCost,
      hasContingency: effectiveContingency > 0,
      contingencyPercentage: effectiveContingency,
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
          {calculationResult ? (
            <CalculationResult result={calculationResult} />
          ) : (
            <div className="border-shutter rounded-lg border-2 bg-white py-6 text-center shadow-sm">
              <p className="text-aliceBlue">
                Enter values and calculate to see results
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Educational Content */}
      <EducationalContent />
    </div>
  );
}
