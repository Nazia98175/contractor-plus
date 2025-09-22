"use client";
import { useState } from "react";
import { useMetaTags } from "@/hooks/use-meta-tags";
import { PageHeader } from "../../components/calculators/margin/PageHeader";
import {
  CalculatorForm,
  CalculatorValues,
} from "../../components/calculators/margin/CalculatorForm";
import { ResultsPanel } from "../../components/calculators/margin/CalculationResult";
import { EducationalContent } from "../../components/calculators/margin/EducationalContent";

export default function MarginCalculator() {
  const [calculationResult, setCalculationResult] = useState<{
    price: number;
    profit: number;
  } | null>(null);
  const [isHighMargin, setIsHighMargin] = useState(false);
  const [currentMargin, setCurrentMargin] = useState(30); // Default margin for display

  // Add SEO meta tags
  useMetaTags({
    title:
      "Profit Margin Calculator for Contractors | Free Construction Business Tool",
    description:
      "Calculate the selling price needed to achieve your desired profit margin. Essential for contractors and construction businesses who want to price profitably.",
    canonicalUrl: "https://contractorplus.app/calculators/margin",
  });

  // Calculate required selling price and profit
  const onCalculate = (values: CalculatorValues) => {
    const { cost, margin } = values;
    const marginDecimal = margin / 100;

    // Update current margin for display in results
    setCurrentMargin(margin);

    // Check for high margin warnings
    setIsHighMargin(margin > 90);

    // Handle edge case for 100% margin
    if (margin >= 99.99) {
      setCalculationResult({
        price: Number.MAX_SAFE_INTEGER, // Effectively infinity for UI purposes
        profit: Number.MAX_SAFE_INTEGER - cost,
      });
      return;
    }

    // Calculate price and profit using margin formula
    const price = cost / (1 - marginDecimal);
    const profit = price - cost;

    setCalculationResult({ price, profit });
  };

  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <PageHeader />

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        {/* Calculator Form */}
        <div className="lg:col-span-2">
          <CalculatorForm onCalculate={onCalculate} />
        </div>

        {/* Results Panel */}
        <div>
          <ResultsPanel
            calculationResult={calculationResult}
            margin={currentMargin}
            isHighMargin={isHighMargin}
          />
        </div>
      </div>

      {/* Educational Content */}
      <EducationalContent />
    </div>
  );
}
