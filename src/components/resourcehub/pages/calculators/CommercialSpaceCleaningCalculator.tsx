"use client";
import React, { useState } from "react";

import { CalculatorForm } from "../../components/calculators/commercial-space-cleaning/CalculatorForm";
import { CalculationResult } from "../../components/calculators/commercial-space-cleaning/CalculationResult";
import { EducationalContent } from "../../components/calculators/commercial-space-cleaning/EducationalContent";
import { useMetaTags } from "@/hooks/use-meta-tags";
import { Info } from "lucide-react";
import { PageHeader } from "../../components/calculators/commercial-space-cleaning/PageHeader";
import { Card, CardContent } from "../../components/ui/card";

interface CalculationData {
  baseCleaningCost: number;
  restroomCost: number;
  additionalServicesCost: number;
  totalCost: number;
  numberOfRestrooms: number;
}

export default function CommercialSpaceCleaningCalculator() {
  useMetaTags({
    title:
      "Commercial Space Cleaning Cost Calculator | Estimate Cleaning Costs",
    description:
      "Calculate accurate commercial cleaning costs based on facility size, restrooms, and additional services with our free commercial cleaning calculator.",
  });

  const [calculationResult, setCalculationResult] =
    useState<CalculationData | null>(null);

  const handleCalculate = (values: {
    facilitySize: number;
    ratePerSqFt: number;
    numberOfRestrooms: number;
    extraCostPerRestroom: number;
    additionalServices: number;
  }) => {
    const {
      facilitySize,
      ratePerSqFt,
      numberOfRestrooms,
      extraCostPerRestroom,
      additionalServices,
    } = values;

    // Calculate base cleaning cost
    const baseCleaningCost = facilitySize * ratePerSqFt;

    // Calculate restroom cost
    const restroomCost = numberOfRestrooms * extraCostPerRestroom;

    // Calculate subtotal
    const subtotal = baseCleaningCost + restroomCost;

    // Calculate total cost
    const totalCost = subtotal + additionalServices;

    // Set the calculation result
    setCalculationResult({
      baseCleaningCost,
      restroomCost,
      additionalServicesCost: additionalServices,
      totalCost,
      numberOfRestrooms,
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
                  Enter commercial cleaning details to calculate your estimate
                </h3>
                <p className="text-aliceBlue mb-4">
                  Complete the form on the left and click "Calculate" to see
                  your estimated commercial cleaning costs here.
                </p>
                <div className="mb-4 w-full rounded-md border border-gray-200 bg-gray-50 px-6 py-4">
                  <ul className="text-alice space-y-2 text-left text-sm">
                    <li className="flex items-center gap-2">
                      <div className="flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full bg-red-100">
                        <div className="h-1.5 w-1.5 rounded-full bg-red-600"></div>
                      </div>
                      <span>Base cleaning cost</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full bg-red-100">
                        <div className="h-1.5 w-1.5 rounded-full bg-red-600"></div>
                      </div>
                      <span>Restroom service costs</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full bg-red-100">
                        <div className="h-1.5 w-1.5 rounded-full bg-red-600"></div>
                      </div>
                      <span>Additional service charges</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full bg-red-100">
                        <div className="h-1.5 w-1.5 rounded-full bg-red-600"></div>
                      </div>
                      <span>Total cleaning cost</span>
                    </li>
                  </ul>
                </div>

                <div className="w-full rounded-md border border-red-100 bg-red-50 p-4">
                  <div className="flex gap-2">
                    <Info className="mt-0.5 h-5 w-5 flex-shrink-0 text-red-600" />
                    <p className="text-sm text-gray-700">
                      Accurate estimates require detailed measurements and
                      specific rates for your cleaning services.
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
