"use client";
import React, { useState } from "react";
import { useMetaTags } from "@/hooks/use-meta-tags";
import { PageHeader } from "../../components/calculators/pipe-water-volume/PageHeader";
import { CalculatorForm } from "../../components/calculators/pipe-water-volume/CalculatorForm";
import { EducationalContent } from "../../components/calculators/pipe-water-volume/EducationalContent";
import { CalculationResult } from "../../components/calculators/pipe-water-volume/CalculationResult";

interface CalculationData {
  volumeGallons: number;
  volumeLiters: number;
  volumeCubicInches: number;
  volumeCubicFeet: number;
  diameter: number;
  diameterUnit: string;
  length: number;
  lengthUnit: string;
}

export default function PipeWaterVolumeCalculator() {
  useMetaTags({
    title: "Pipe Water Volume Calculator | Calculate Water in Pipes",
    description:
      "Calculate the volume of water in pipes based on diameter and length. Free online pipe water volume calculator for plumbing and irrigation systems.",
    keywords:
      "pipe water volume calculator, plumbing calculator, irrigation pipe calculator, water volume calculation, pipe capacity calculator",
  });

  const [calculationData, setCalculationData] =
    useState<CalculationData | null>(null);

  // Update the handleCalculate function to match the expected type
  const handleCalculate = (values: {
    length?: number;
    diameter?: number;
    diameterUnit?: "inches" | "mm";
    lengthUnit?: "feet" | "meters";
  }) => {
    // Process the values into the format expected by CalculationResult
    if (values.length && values.diameter) {
      const result: CalculationData = {
        volumeGallons: 0, // These would be calculated based on values
        volumeLiters: 0,
        volumeCubicInches: 0,
        volumeCubicFeet: 0,
        diameter: values.diameter,
        diameterUnit: values.diameterUnit || "inches",
        length: values.length,
        lengthUnit: values.lengthUnit || "feet",
      };

      // Here we would calculate the actual volumes based on dimensions
      // For now, setting placeholder values
      setCalculationData(result);
    }
  };

  return (
    <div className="mx-auto max-w-6xl px-4 py-8 md:px-6">
      <PageHeader />

      <div className="mt-8 grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <div className="border0 border-stiletto overflow-hidden rounded-xl border">
            <div className="bg-red-500 px-4 py-3">
              <h2 className="font-medium">Enter Pipe Dimensions</h2>
              <p className="text-aliceBlue text-sm">
                Fill in the form to calculate water volume
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
