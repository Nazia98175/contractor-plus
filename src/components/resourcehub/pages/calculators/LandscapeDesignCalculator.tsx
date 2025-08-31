"use client";
import React, { useState } from "react";
import { useMetaTags } from "@/hooks/use-meta-tags";
import {
  CalculatorForm,
  LandscapeCalculatorValues,
} from "../../components/calculators/landscape-design/CalculatorForm";
import { PageHeader } from "../../components/calculators/landscape-design/PageHeader";
import { CalculationResult } from "../../components/calculators/landscape-design/CalculationResult";
import { EducationalContent } from "../../components/calculators/landscape-design/EducationalContent";

export default function LandscapeDesignCalculator() {
  useMetaTags({
    title: "Landscape Design Cost Calculator | Free Landscaping Estimate Tool",
    description:
      "Calculate landscape design and installation costs based on area, materials, and features. Free tool for landscape contractors and homeowners.",
    keywords:
      "landscape design calculator, landscaping cost estimator, landscape installation costs, garden design pricing",
  });

  const [calculationResult, setCalculationResult] = useState<{
    installationCost: number;
    designFee: number;
    additionalCosts: number;
    totalCost: number;
  } | null>(null);

  const handleCalculate = (values: LandscapeCalculatorValues) => {
    // Calculate the installation cost (area * cost per sq ft)
    const installationCost = values.area * values.costPerSqFt;

    // Calculate subtotal (installation + design fee)
    const subtotal = installationCost + values.designFee;

    // Calculate total cost (subtotal + additional costs)
    const totalCost = subtotal + values.additionalCosts;

    // Set the calculation result
    setCalculationResult({
      installationCost,
      designFee: values.designFee,
      additionalCosts: values.additionalCosts,
      totalCost,
    });

    // Scroll to results
    setTimeout(() => {
      const resultElement = document.getElementById("calculation-result");
      if (resultElement) {
        resultElement.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <div className="container mx-auto max-w-5xl px-4 py-8 md:px-6">
      <PageHeader />

      <div className="grid gap-8 md:grid-cols-2">
        <div>
          <CalculatorForm onCalculate={handleCalculate} />

          <div className="mt-8 rounded-lg border border-red-100 bg-red-50 p-4">
            <h3 className="mb-2 text-base font-medium text-red-700">
              Design, build, and impress – and let us handle the math.
            </h3>
            <p className="text-sm text-red-600">
              Contractor+ helps landscape designers and contractors estimate
              both design and installation costs effortlessly. Create beautiful
              outdoor spaces with the confidence that you've priced them right.
              From planning to planting, Contractor+ is your partner in growing
              a successful landscaping business.
            </p>
          </div>
        </div>

        <div>
          <div id="calculation-result">
            {calculationResult ? (
              <CalculationResult result={calculationResult} />
            ) : (
              <div className="flex h-full items-center justify-center rounded-lg border border-dashed border-gray-200 bg-gray-50 p-8 text-center">
                <div className="space-y-2">
                  <p className="text-lg font-medium">
                    Enter your project details
                  </p>
                  <p className="text-muted-foreground">
                    Fill out the form to calculate your landscape design costs
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <EducationalContent />
    </div>
  );
}
