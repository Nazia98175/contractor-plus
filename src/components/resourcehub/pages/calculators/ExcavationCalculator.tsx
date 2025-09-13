"use client";
import React, { useState } from "react";
import { useMetaTags } from "@/hooks/use-meta-tags";
import { PageHeader } from "../../components/calculators/excavation/PageHeader";
import { CalculatorForm } from "../../components/calculators/excavation/CalculatorForm";
import { CalculationResult } from "../../components/calculators/excavation/CalculationResult";
import { EducationalContent } from "../../components/calculators/excavation/EducationalContent";

export default function ExcavationCalculator() {
  useMetaTags({
    title: "Excavation Volume and Cost Calculator | Contractor+",
    description:
      "Calculate excavation volume and cost based on dimensions and rates. Get accurate estimates for your excavation and earthmoving projects.",
    keywords:
      "excavation calculator, excavation volume calculator, cubic yards calculator, excavation cost estimator, earthmoving calculator, contractor calculator",
  });

  const [result, setResult] = useState<{
    volumeCubicFeet: number;
    volumeCubicYards: number;
    cost: number;
  } | null>(null);

  const handleCalculate = (values: {
    length: number;
    width: number;
    depth: number;
    costPerYard: number;
  }) => {
    const { length, width, depth, costPerYard } = values;

    // Calculate volume in cubic feet
    const volumeCubicFeet = length * width * depth;

    // Convert to cubic yards (1 cubic yard = 27 cubic feet)
    const volumeCubicYards = volumeCubicFeet / 27;

    // Calculate cost
    const cost = volumeCubicYards * costPerYard;

    setResult({
      volumeCubicFeet,
      volumeCubicYards,
      cost,
    });
  };

  return (
    <div className="main-container py-8 md:px-6">
      <PageHeader />

      <div className="mt-8">
        <CalculatorForm onCalculate={handleCalculate} />

        {result && <CalculationResult result={result} />}

        <EducationalContent />
      </div>
    </div>
  );
}
