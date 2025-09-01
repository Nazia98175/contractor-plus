"use client";
import { useState } from "react";
import { useMetaTags } from "@/hooks/use-meta-tags";
import { PageHeader } from "../../components/calculators/plumbing-bid/PageHeader";
import { CalculatorForm } from "../../components/calculators/plumbing-bid/CalculatorForm";
import { CalculationResult } from "../../components/calculators/plumbing-bid/CalculationResult";
import { EducationalContent } from "../../components/calculators/plumbing-bid/EducationalContent";

export default function PlumbingBidCalculator() {
  // State for calculated results
  const [calculationResult, setCalculationResult] = useState<{
    laborCost: number;
    subtotalCost: number;
    profitAmount: number;
    bidPrice: number;
    profitMargin: number;
  } | null>(null);

  // Add SEO meta tags
  useMetaTags({
    title: "Plumbing Bid Calculator for Contractors | Estimate Plumbing Jobs",
    description:
      "Create accurate plumbing bids with our free calculator. Factor in materials, labor hours, and profit margin to determine the right price for your plumbing jobs.",
    canonicalUrl: "https://contractorplus.app/calculators/plumbing-bid",
  });

  // Calculate plumbing bid components
  const onCalculate = (values: {
    materialsCost: number;
    laborHours: number;
    laborRate: number;
    otherCosts: number;
    profitMarkup: number;
  }) => {
    const { materialsCost, laborHours, laborRate, otherCosts, profitMarkup } =
      values;

    // Calculate labor cost
    const laborCost = laborHours * laborRate;

    // Calculate subtotal cost
    const subtotalCost = materialsCost + laborCost + otherCosts;

    // Calculate profit amount
    const profitAmount = subtotalCost * (profitMarkup / 100);

    // Calculate bid price
    const bidPrice = subtotalCost + profitAmount;

    // Calculate profit margin (profit as percentage of total price)
    // Handle division by zero
    const profitMargin = bidPrice === 0 ? 0 : (profitAmount / bidPrice) * 100;

    setCalculationResult({
      laborCost,
      subtotalCost,
      profitAmount,
      bidPrice,
      profitMargin,
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
            <div className="border-stiletto bg-shutter rounded-lg border-2 px-4 py-6 text-center text-sm shadow-sm">
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
