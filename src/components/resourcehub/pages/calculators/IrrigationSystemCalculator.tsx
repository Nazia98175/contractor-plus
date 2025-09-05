"use client";
import React, { useState } from "react";
import { useMetaTags } from "@/hooks/use-meta-tags";
import { Droplet, Info } from "lucide-react";
import { PageHeader } from "../../components/calculators/irrigation-system/PageHeader";
import { CalculatorForm } from "../../components/calculators/irrigation-system/CalculatorForm";
import { CalculationResult } from "../../components/calculators/irrigation-system/CalculationResult";
import { Card, CardContent } from "../../components/ui/card";
import { EducationalContent } from "../../components/calculators/irrigation-system/EducationalContent";

interface CalculationData {
  sprinklerHeadCost: number;
  pipeCost: number;
  valveCost: number;
  additionalMaterialsCost: number;
  totalCost: number;
  sprinklerHeadCount: number;
  pipeLength: number;
  zoneCount: number;
}

export default function IrrigationSystemCalculator() {
  useMetaTags({
    title:
      "Irrigation System Material Calculator | Cost Estimator for Sprinklers",
    description:
      "Use our free irrigation system calculator to estimate materials and costs for sprinkler heads, pipes, valves, and more. Perfect for contractors and DIY landscapers.",
  });

  const [calculationResult, setCalculationResult] =
    useState<CalculationData | null>(null);

  const handleCalculate = (values: {
    numberOfZones: number;
    sprinklerHeads: number;
    pipeLength: number;
    costPerSprinklerHead: number;
    costPerFtPipe: number;
    costPerValve: number;
    additionalMaterials: number;
  }) => {
    const {
      numberOfZones,
      sprinklerHeads,
      pipeLength,
      costPerSprinklerHead,
      costPerFtPipe,
      costPerValve,
      additionalMaterials,
    } = values;

    // Calculate costs for each component
    const sprinklerHeadCost = sprinklerHeads * costPerSprinklerHead;
    const pipeCost = pipeLength * costPerFtPipe;
    const valveCost = numberOfZones * costPerValve;

    // Calculate total cost
    const totalCost =
      sprinklerHeadCost + pipeCost + valveCost + additionalMaterials;

    // Set the calculation result
    setCalculationResult({
      sprinklerHeadCost,
      pipeCost,
      valveCost,
      additionalMaterialsCost: additionalMaterials,
      totalCost,
      sprinklerHeadCount: sprinklerHeads,
      pipeLength,
      zoneCount: numberOfZones,
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
              <CardContent className="flex h-full flex-col p-6">
                <h3 className="mb-2 text-lg font-medium">
                  Enter irrigation system details to calculate your estimate
                </h3>
                <p className="text-aliceBlue mb-4">
                  Complete the form on the left and click "Calculate" to see
                  your estimated irrigation material costs here.
                </p>
                <div className="border-stiletto mb-4 w-full rounded-md border px-6 py-4">
                  <ul className="text-alice space-y-3 text-left text-sm">
                    <li className="flex items-center gap-2">
                      <div className="flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full bg-red-100">
                        <div className="h-1.5 w-1.5 rounded-full bg-red-600"></div>
                      </div>
                      <span>Sprinkler head costs</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full bg-red-100">
                        <div className="h-1.5 w-1.5 rounded-full bg-red-600"></div>
                      </div>
                      <span>Pipe material costs</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full bg-red-100">
                        <div className="h-1.5 w-1.5 rounded-full bg-red-600"></div>
                      </div>
                      <span>Valve costs per zone</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full bg-red-100">
                        <div className="h-1.5 w-1.5 rounded-full bg-red-600"></div>
                      </div>
                      <span>Total material cost</span>
                    </li>
                  </ul>
                </div>

                <div className="border-stiletto w-full rounded-md border p-4">
                  <div className="flex gap-2">
                    <Info className="mt-0.5 h-5 w-5 flex-shrink-0 text-red-500" />
                    <p className="text-sm">
                      This calculator provides material cost estimates only.
                      Labor costs for installation are not included and would
                      need to be calculated separately.
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
