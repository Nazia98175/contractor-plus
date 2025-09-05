"use client";
import React, { useState } from "react";
import { CalculatorForm } from "../../components/calculators/roof-square-footage/CalculatorForm";
import { CalculationResult } from "../../components/calculators/roof-square-footage/CalculationResult";
import { EducationalContent } from "../../components/calculators/roof-square-footage/EducationalContent";
import { useMetaTags } from "@/hooks/use-meta-tags";
import { Info, Calculator } from "lucide-react";
import { PageHeader } from "../../components/calculators/roof-square-footage/PageHeader";
import { Card, CardContent } from "../../components/ui/card";

interface CalculationData {
  roofArea: number;
  roofSquares: number;
  roundedSquares: number;
  footprintArea: number;
  pitchFactor: number;
}

export default function RoofSquareFootageCalculator() {
  useMetaTags({
    title: "Roof Square Footage Calculator | Estimate Roofing Materials",
    description:
      "Calculate roof square footage based on building dimensions and pitch. Get accurate material estimates for your next roofing project with our free roofing calculator.",
    keywords:
      "roof calculator, roofing square footage, roof area calculator, roofing materials, roof pitch calculator",
  });

  const [calculationResult, setCalculationResult] =
    useState<CalculationData | null>(null);

  const handleCalculate = (values: {
    length: number;
    width: number;
    pitch: number;
  }) => {
    const { length, width, pitch } = values;

    // Step 1: Calculate the footprint area
    const footprintArea = length * width;

    // Step 2: Calculate the pitch factor
    const pitchFactor = Math.sqrt(1 + Math.pow(pitch / 12, 2));

    // Step 3: Calculate the actual roof surface area
    const roofArea = Math.round(footprintArea * pitchFactor);

    // Step 4: Convert to squares
    const roofSquares = roofArea / 100;

    // Round up to the nearest whole square for ordering
    const roundedSquares = Math.ceil(roofSquares);

    // Set the calculation result
    setCalculationResult({
      roofArea,
      roofSquares,
      roundedSquares,
      footprintArea,
      pitchFactor,
    });
  };

  return (
    <div className="animate-fade-in main-container py-8 md:px-6">
      <PageHeader />

      <div className="mb-12 grid gap-6 md:grid-cols-2 lg:gap-8">
        <div>
          <Card className="border-stiletto bg-shutter h-full border shadow-sm">
            <CardContent className="py-6">
              <div className="mb-4 flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-red-100">
                  <Calculator className="h-4 w-4 text-red-500" />
                </div>
                <h2 className="text-lg font-semibold">Calculate Roof Area</h2>
              </div>
              <CalculatorForm onCalculate={handleCalculate} />
            </CardContent>
          </Card>
        </div>

        <div>
          {calculationResult ? (
            <CalculationResult result={calculationResult} />
          ) : (
            <Card className="border-stiletto bg-shutter h-full border shadow-sm">
              <CardContent className="flex h-full flex-col p-6">
                <h3 className="mb-2 text-lg font-medium">
                  Enter roof details to calculate square footage
                </h3>
                <p className="text-aliceBlue mb-4">
                  Complete the form on the left and click "Calculate Roof Area"
                  to see your roof area estimation here.
                </p>
                <div className="border-stiletto mb-4 w-full rounded-md border px-6 py-4">
                  <ul className="text-alice space-y-3 text-left text-sm">
                    <li className="flex items-center gap-2">
                      <div className="flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full bg-red-100">
                        <div className="h-1.5 w-1.5 rounded-full bg-red-600"></div>
                      </div>
                      <span>Total roof area in square feet</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full bg-red-100">
                        <div className="h-1.5 w-1.5 rounded-full bg-red-600"></div>
                      </div>
                      <span>Roof area in squares (100 sq ft)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full bg-red-100">
                        <div className="h-1.5 w-1.5 rounded-full bg-red-600"></div>
                      </div>
                      <span>Detailed calculation breakdown</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full bg-red-100">
                        <div className="h-1.5 w-1.5 rounded-full bg-red-600"></div>
                      </div>
                      <span>Material ordering guidance</span>
                    </li>
                  </ul>
                </div>

                <div className="border-stiletto w-full rounded-md border p-4">
                  <div className="flex gap-2">
                    <Info className="mt-0.5 h-5 w-5 flex-shrink-0 text-red-500" />
                    <p className="text-discoBall text-sm">
                      This calculator works best for simple gable roofs. For
                      complex roofs with multiple sections, calculate each
                      section separately and add them together.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>

      <div className="border-stiletto bg-shutter mb-12 rounded-lg border p-6 shadow-sm">
        <EducationalContent />
      </div>
    </div>
  );
}
