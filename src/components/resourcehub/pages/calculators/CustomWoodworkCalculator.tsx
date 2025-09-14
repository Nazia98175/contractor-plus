"use client";
import React, { useState } from "react";
import { useMetaTags } from "@/hooks/use-meta-tags";
import { PageHeader } from "../../components/calculators/woodwork/PageHeader";
import { CalculatorForm } from "../../components/calculators/woodwork/CalculatorForm";
import { CalculationResult } from "../../components/calculators/woodwork/CalculationResult";
import { EducationalContent } from "../../components/calculators/woodwork/EducationalContent";

interface CalculationData {
  materialsTotal: number;
  laborCost: number;
  otherCosts: number;
  subtotal: number;
  profit: number;
  totalPrice: number;
  markupPercentage: number;
}

export default function CustomWoodworkCalculator() {
  useMetaTags({
    title: "Custom Woodwork Pricing Calculator | Quote Woodworking Projects",
    description:
      "Use our custom woodwork pricing calculator to easily estimate material costs, labor, and profit markup for woodworking projects. Create professional quotes for custom furniture and woodworking.",
  });

  const [calculationResult, setCalculationResult] =
    useState<CalculationData | null>(null);

  const handleCalculate = (values: {
    materialsTotal: number;
    laborHours: number;
    hourlyRate: number;
    otherCosts: number;
    profitMarkup: number;
  }) => {
    const { materialsTotal, laborHours, hourlyRate, otherCosts, profitMarkup } =
      values;

    // Calculate labor cost
    const laborCost = laborHours * hourlyRate;

    // Calculate subtotal (materials + labor + other costs)
    const subtotal = materialsTotal + laborCost + otherCosts;

    // Calculate profit amount
    const profit = subtotal * (profitMarkup / 100);

    // Calculate final price
    const totalPrice = subtotal + profit;

    // Set the calculation result
    setCalculationResult({
      materialsTotal,
      laborCost,
      otherCosts,
      subtotal,
      profit,
      totalPrice,
      markupPercentage: profitMarkup,
    });
  };

  return (
    <div className="main-container py-8 md:px-6">
      <PageHeader />

      <div className="mb-8 grid gap-6 md:grid-cols-2 lg:gap-8">
        <div>
          <CalculatorForm onCalculate={handleCalculate} />
        </div>
        <div>
          {calculationResult ? (
            <CalculationResult result={calculationResult} />
          ) : (
            <div className="border-stiletto bg-shutter flex h-full flex-col items-center rounded-md border p-6 shadow-sm">
              <h3 className="mb-2 w-full text-lg font-medium">
                Enter project details to calculate your price
              </h3>
              <p className="text-aliceBlue mb-4">
                Complete the form on the left and click "Calculate" to see your
                estimated woodworking project pricing here.
              </p>
              <div className="mb-4 w-full rounded-md px-6 py-4">
                <ul className="text-alice space-y-3 text-left text-sm">
                  <li className="flex items-center gap-2">
                    <div className="h-2.5 w-2.5 rounded-full bg-red-600"></div>

                    <span>Materials breakdown</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2.5 w-2.5 rounded-full bg-red-600"></div>

                    <span>Labor costs</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2.5 w-2.5 rounded-full bg-red-600"></div>

                    <span>Profit margin</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2.5 w-2.5 rounded-full bg-red-600"></div>

                    <span>Total project price</span>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>

      <EducationalContent />
    </div>
  );
}
