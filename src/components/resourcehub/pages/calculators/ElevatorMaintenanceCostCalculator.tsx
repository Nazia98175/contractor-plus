"use client";
import React, { useState } from "react";
import { useMetaTags } from "@/hooks/use-meta-tags";
import { PageHeader } from "../../components/calculators/elevator-maintenance/PageHeader";
import { CalculatorForm } from "../../components/calculators/elevator-maintenance/CalculatorForm";
import { EducationalContent } from "../../components/calculators/elevator-maintenance/EducationalContent";
import { CalculationResult } from "../../components/calculators/elevator-maintenance/CalculationResult";

interface CalculationData {
  annualCostPerElevator: number;
  totalAnnualCost: number;
  numberOfElevators: number;
  serviceVisitsPerYear: number;
  costPerVisit: number;
  additionalAnnualCost: number;
}

export default function ElevatorMaintenanceCostCalculator() {
  useMetaTags({
    title: "Elevator Maintenance Cost Calculator | Contractor+",
    description:
      "Calculate annual elevator maintenance costs based on service visits, per-visit costs, and additional fees. Free maintenance planning calculator for building managers and service providers.",
    keywords:
      "elevator maintenance calculator, elevator service cost, maintenance contract calculator, building maintenance cost, annual elevator maintenance, elevator service plan",
  });

  const [calculationData, setCalculationData] =
    useState<CalculationData | null>(null);

  const handleCalculate = (results: CalculationData) => {
    setCalculationData(results);
  };

  return (
    <div className="main-container py-8 md:px-6">
      <PageHeader />

      <div className="mt-8 grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <div className="overflow-hidden rounded-xl border bg-white dark:border-gray-800 dark:bg-gray-950">
            <div className="bg-shutter border-stiletto border-b px-4 py-3 dark:border-gray-800 dark:bg-gray-900">
              <h2 className="font-medium">
                Enter Elevator Maintenance Details
              </h2>
              <p className="text-aliceBlue text-sm">
                Fill in the form to calculate annual maintenance costs
              </p>
            </div>
            <div className="p-4 md:p-6">
              <CalculatorForm onCalculate={handleCalculate} />
            </div>
          </div>

          <EducationalContent />
        </div>

        <div className="space-y-6">
          {calculationData && <CalculationResult result={calculationData} />}
        </div>
      </div>
    </div>
  );
}
