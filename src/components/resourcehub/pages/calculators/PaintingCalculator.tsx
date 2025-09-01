"use client";
import React, { useState } from "react";
import { useMetaTags } from "@/hooks/use-meta-tags";
import { Paintbrush, Info } from "lucide-react";
import { PageHeader } from "../../components/calculators/painting/PageHeader";
import { CalculatorForm } from "../../components/calculators/painting/CalculatorForm";
import { CalculationResult } from "../../components/calculators/painting/CalculationResult";
import { Card, CardContent } from "../../components/ui/card";
import { EducationalContent } from "../../components/calculators/painting/EducationalContent";

interface CalculationData {
  gallonsNeeded: number;
  paintCost: number;
  laborHours: number;
  laborCost: number;
  totalCost: number;
}

export default function PaintingCalculator() {
  useMetaTags({
    title: "Painting Cost Estimator | Calculate Paint and Labor Costs",
    description:
      "Use our free painting cost calculator to estimate materials and labor for your painting project. Calculate how much paint you need and total costs for professional or DIY painting.",
  });

  const [calculationResult, setCalculationResult] =
    useState<CalculationData | null>(null);

  const handleCalculate = (values: {
    surfaceArea: number;
    coats: number;
    coverage: number;
    paintCost: number;
    laborRate: number;
    coverageRate: number;
  }) => {
    const { surfaceArea, coats, coverage, paintCost, laborRate, coverageRate } =
      values;

    // Calculate total paint coverage needed
    const totalCoverageRequired = surfaceArea * coats;

    // Calculate gallons needed (raw)
    const rawGallonsNeeded = totalCoverageRequired / coverage;

    // Round up to the next whole gallon
    const gallonsNeeded = Math.ceil(rawGallonsNeeded);

    // Calculate paint material cost
    const totalPaintCost = gallonsNeeded * paintCost;

    // Calculate labor hours
    const hoursPerCoat = surfaceArea / coverageRate;
    const totalLaborHours = hoursPerCoat * coats;

    // Calculate labor cost
    const totalLaborCost = totalLaborHours * laborRate;

    // Calculate total cost
    const totalCost = totalPaintCost + totalLaborCost;

    // Set the calculation result
    setCalculationResult({
      gallonsNeeded,
      paintCost: totalPaintCost,
      laborHours: totalLaborHours,
      laborCost: totalLaborCost,
      totalCost,
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
            <Card className="border-stiletto bg-shutter h-full border shadow-sm">
              <CardContent className="flex h-full flex-col items-center justify-center p-6 text-center">
                <h3 className="mb-2 text-lg font-medium text-gray-700">
                  Enter painting details to calculate your estimate
                </h3>
                <p className="text-aliceBlue mb-4">
                  Complete the form on the left and click "Calculate" to see
                  your estimated painting costs here.
                </p>
                <div className="mb-4 w-full rounded-md border border-gray-200 bg-gray-50 px-6 py-4">
                  <ul className="text-alice space-y-2 text-left text-sm">
                    <li className="flex items-center gap-2">
                      <div className="flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full bg-red-100">
                        <div className="h-1.5 w-1.5 rounded-full bg-red-600"></div>
                      </div>
                      <span>Paint quantity needed</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full bg-red-100">
                        <div className="h-1.5 w-1.5 rounded-full bg-red-600"></div>
                      </div>
                      <span>Material costs breakdown</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full bg-red-100">
                        <div className="h-1.5 w-1.5 rounded-full bg-red-600"></div>
                      </div>
                      <span>Labor hours and costs</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full bg-red-100">
                        <div className="h-1.5 w-1.5 rounded-full bg-red-600"></div>
                      </div>
                      <span>Total project cost</span>
                    </li>
                  </ul>
                </div>

                <div className="w-full rounded-md border border-red-100 bg-red-50 p-4">
                  <div className="flex gap-2">
                    <Info className="mt-0.5 h-5 w-5 flex-shrink-0 text-red-600" />
                    <p className="text-sm text-gray-700">
                      Accurate estimates require precise measurements of surface
                      area and realistic rates for your services.
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
