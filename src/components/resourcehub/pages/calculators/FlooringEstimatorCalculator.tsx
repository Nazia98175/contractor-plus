"use client";
import React, { useState } from "react";
import { ArrowLeft, Ruler } from "lucide-react";
import { useMetaTags } from "@/hooks/use-meta-tags";
import {
  CalculationResult,
  FlooringCalculationResult,
} from "../../components/calculators/flooring/CalculationResult";
import { useRouter } from "next/navigation";
import { Button } from "../../components/ui/button";
import { PageHeader } from "../../components/calculators/flooring/PageHeader";
import { CalculatorForm } from "../../components/calculators/flooring/CalculatorForm";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { EducationalContent } from "../../components/calculators/flooring/EducationalContent";

// Define the calculation values type
export interface FlooringCalculationValues {
  floorArea: number;
  materialCostPerSqFt: number;
  laborCostPerSqFt: number;
  wasteFactor: number;
  additionalCosts: number;
}

export default function FlooringEstimatorCalculator() {
  const router = useRouter();

  const [calculationResult, setCalculationResult] =
    useState<FlooringCalculationResult | null>(null);

  // Add SEO meta tags
  useMetaTags({
    title: "Flooring Estimator Calculator | Free Tool for Flooring Contractors",
    description:
      "Calculate flooring project costs with this free estimator. Account for materials, labor, waste factor, and additional costs for accurate flooring estimates.",
    canonicalUrl: "https://contractorplus.app/calculators/flooring-estimator",
  });

  // Calculate results when form values change
  const calculateResults = (values: FlooringCalculationValues) => {
    // Step 1: Apply the waste factor to the floor area
    const effectiveArea = values.floorArea * (1 + values.wasteFactor / 100);

    // Step 2: Calculate material cost
    const materialCost = effectiveArea * values.materialCostPerSqFt;

    // Step 3: Calculate labor cost (on actual area, not including waste)
    const laborCost = values.floorArea * values.laborCostPerSqFt;

    // Step 4: Calculate total cost
    const totalCost = materialCost + laborCost + values.additionalCosts;

    // Update state with the results
    setCalculationResult({
      effectiveArea,
      materialCost,
      laborCost,
      additionalCosts: values.additionalCosts,
      totalCost,
    });
  };

  return (
    <div className="container mx-auto max-w-5xl px-4 py-6 md:px-6">
      {/* Back button */}
      <Button
        variant="ghost"
        size="sm"
        onClick={() => router.push("/resources/calculators")}
        className="mb-6 flex items-center gap-1 text-gray-700 hover:text-red-600"
      >
        <ArrowLeft className="mr-1 h-4 w-4" />
        Back to Calculators
      </Button>

      {/* Main header */}
      <PageHeader />

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
        {/* Left side - Calculator form */}
        <div className="lg:col-span-7">
          <CalculatorForm onCalculate={calculateResults} />
        </div>

        {/* Right side - Results & Information */}
        <div className="lg:col-span-5">
          {/* Results Card */}
          <CalculationResult calculationResult={calculationResult} />

          {/* Call to Action Card */}
          <Card className="border-stiletto bg-shutter border">
            <CardHeader>
              <CardTitle className="text-xl text-red-800">
                Lay down flooring estimates with confidence.
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-alice mb-4">
                Contractor+ empowers flooring contractors to calculate materials
                (including waste) and labor costs in a snap. Create
                comprehensive flooring quotes, order the right amount of
                product, and keep your projects profitable with our easy-to-use
                platform.
              </p>
              <Button
                variant="outline"
                className="w-full border-red-200 bg-white text-red-700 hover:border-red-300 hover:bg-red-50"
              >
                Try Contractor Plus
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Educational Content Section */}
      <EducationalContent />
    </div>
  );
}
