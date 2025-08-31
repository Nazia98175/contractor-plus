"use client";
import { useState } from "react";
import { useMetaTags } from "@/hooks/use-meta-tags";
import {
  CalculatorForm,
  CalculatorValues,
} from "../../components/calculators/hvac-markup/CalculatorForm";
import { PageHeader } from "../../components/calculators/hvac-markup/PageHeader";
import { ResultsPanel } from "../../components/calculators/hvac-markup/CalculationResult";
import { EducationalContent } from "../../components/calculators/hvac-markup/EducationalContent";

export default function HvacMarkupCalculator() {
  const [calculationResult, setCalculationResult] = useState<{
    markedUpPrice: number;
    taxAmount: number;
    finalPrice: number;
    profit: number;
    hasTax: boolean;
    taxRate: number;
  } | null>(null);

  // Add SEO meta tags
  useMetaTags({
    title: "HVAC Parts Markup Calculator | Free Construction Business Tool",
    description:
      "Calculate selling prices for HVAC parts with our free markup calculator. Apply custom markups and tax rates to optimize your parts pricing strategy.",
    canonicalUrl: "https://contractorplus.app/calculators/hvac-markup",
  });

  // Calculate part pricing
  const onCalculate = (values: CalculatorValues) => {
    const { partCost, markup, salesTax } = values;

    // Step 1: Calculate the marked-up price (before tax)
    const markedUpPrice = partCost * (1 + markup / 100);

    // Step 2: Calculate sales tax amount if applicable
    const hasTax = salesTax > 0;
    const taxAmount = hasTax ? markedUpPrice * (salesTax / 100) : 0;

    // Step 3: Calculate the final price including tax
    const finalPrice = markedUpPrice + taxAmount;

    // Step 4: Calculate the profit amount
    const profit = markedUpPrice - partCost;

    setCalculationResult({
      markedUpPrice,
      taxAmount,
      finalPrice,
      profit,
      hasTax,
      taxRate: salesTax,
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
