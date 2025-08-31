"use client";
import React, { useState } from "react";
import { CalculatorForm } from "../../components/calculators/snow-removal/CalculatorForm";
import { CalculationResult } from "../../components/calculators/snow-removal/CalculationResult";
import { EducationalContent } from "../../components/calculators/snow-removal/EducationalContent";
import { useMetaTags } from "@/hooks/use-meta-tags";
import { Info } from "lucide-react";
import { PageHeader } from "../../components/calculators/snow-removal/PageHeader";
import { Card, CardContent } from "../../components/ui/card";

interface CalculationData {
  baseRate: number;
  extraCost: number;
  totalCharge: number;
  overageInches: number;
  includedDepth: number;
}

export default function SnowRemovalCalculator() {
  useMetaTags({
    title:
      "Snow Removal Pricing Calculator | Calculate Fair Snow Plowing Rates",
    description:
      "Use our free snow removal calculator to price your services fairly based on snow depth. Calculate pricing for plowing, shoveling, and snow management services.",
  });

  const [calculationResult, setCalculationResult] =
    useState<CalculationData | null>(null);

  const handleCalculate = (values: {
    baseRate: number;
    includedDepth: number;
    extraRate: number;
    actualSnowfall: number;
  }) => {
    const { baseRate, includedDepth, extraRate, actualSnowfall } = values;

    // Calculate overage inches
    const overageInches = Math.max(0, actualSnowfall - includedDepth);

    // Calculate extra cost for snow over the included depth
    const extraCost = overageInches * extraRate;

    // Calculate total charge
    const totalCharge = baseRate + extraCost;

    // Set the calculation result
    setCalculationResult({
      baseRate,
      extraCost,
      totalCharge,
      overageInches,
      includedDepth,
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
            <Card className="h-full border border-gray-200 bg-white shadow-sm">
              <CardContent className="flex h-full flex-col items-center justify-center p-6 text-center">
                <h3 className="mb-2 text-lg font-medium text-gray-700">
                  Enter snow removal details to calculate your price
                </h3>
                <p className="text-muted-foreground mb-4">
                  Complete the form on the left and click "Calculate" to see
                  your fair pricing estimate.
                </p>
                <div className="mb-4 w-full rounded-md border border-gray-200 bg-gray-50 px-6 py-4">
                  <ul className="space-y-2 text-left text-sm text-gray-600">
                    <li className="flex items-center gap-2">
                      <div className="flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full bg-red-100">
                        <div className="h-1.5 w-1.5 rounded-full bg-red-600"></div>
                      </div>
                      <span>Base rate calculation</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full bg-red-100">
                        <div className="h-1.5 w-1.5 rounded-full bg-red-600"></div>
                      </div>
                      <span>Additional charges for excess snow</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full bg-red-100">
                        <div className="h-1.5 w-1.5 rounded-full bg-red-600"></div>
                      </div>
                      <span>Total service charge</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full bg-red-100">
                        <div className="h-1.5 w-1.5 rounded-full bg-red-600"></div>
                      </div>
                      <span>Detailed pricing breakdown</span>
                    </li>
                  </ul>
                </div>

                <div className="w-full rounded-md border border-red-100 bg-red-50 p-4">
                  <div className="flex gap-2">
                    <Info className="mt-0.5 h-5 w-5 flex-shrink-0 text-red-600" />
                    <p className="text-sm text-gray-700">
                      Professional snow removal pricing should account for
                      equipment costs, labor, risk, and the extra time required
                      for deeper snow.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>

      <EducationalContent />
    </div>
  );
}
