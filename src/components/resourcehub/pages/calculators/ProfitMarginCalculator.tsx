"use client";
import { useState } from "react";
import { useMetaTags } from "@/hooks/use-meta-tags";
import { PageHeader } from "../../components/calculators/profit-margin/PageHeader";
import { CalculatorForm } from "../../components/calculators/profit-margin/CalculatorForm";
import { CalculationResult } from "../../components/calculators/profit-margin/CalculationResult";
import { EducationalContent } from "../../components/calculators/profit-margin/EducationalContent";

export default function ProfitMarginCalculator() {
  // State for calculated results
  const [calculationResult, setCalculationResult] = useState<{
    profit: number;
    marginPercent: number;
    isLoss: boolean;
  } | null>(null);

  // Add SEO meta tags
  useMetaTags({
    title:
      "Profit Margin Calculator for Contractors | Construction Business Tool",
    description:
      "Calculate your profit margin accurately with our free contractor calculator. Know your profitability on every job and make better pricing decisions.",
    canonicalUrl: "https://contractorplus.app/calculators/profit-margin",
  });

  // Calculate profit and margin
  const onCalculate = (values: {
    totalCost: number;
    priceToClient: number;
  }) => {
    const { totalCost, priceToClient } = values;

    // Calculate profit amount
    const profit = priceToClient - totalCost;

    // Calculate profit margin percentage
    // Handle edge case: if price is zero, set margin to 0 to avoid division by zero
    const marginPercent =
      priceToClient === 0 ? 0 : (profit / priceToClient) * 100;

    // Determine if this is a loss
    const isLoss = profit < 0;

    setCalculationResult({
      profit,
      marginPercent,
      isLoss,
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
            <div className="rounded-lg border-2 border-red-100 bg-white py-6 text-center shadow-sm">
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
