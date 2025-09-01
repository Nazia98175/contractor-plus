"use client";
import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { ArrowLeft, Fence } from "lucide-react";
import { useMetaTags } from "@/hooks/use-meta-tags";

import {
  CalculationResult,
  FenceCostResult,
} from "../../components/calculators/fence-cost/CalculationResult";
import { EducationalContent } from "../../components/calculators/fence-cost/EducationalContent";
import { PageHeader } from "../../components/calculators/fence-cost/PageHeader";
import { Button } from "../../components/ui/button";
import { CalculatorForm } from "../../components/calculators/fence-cost/CalculatorForm";
import { useRouter } from "next/navigation";

// Define the calculation values type
export interface FenceCostValues {
  fenceLength: number;
  costPerFoot: number;
  numberOfGates: number;
  costPerGate: number;
  additionalCosts: number;
}

export default function FenceCostCalculator() {
  const router = useRouter();

  const [calculationResult, setCalculationResult] =
    useState<FenceCostResult | null>(null);

  // Add SEO meta tags
  useMetaTags({
    title: "Fence Cost Calculator | Free Tool for Fence Contractors",
    description:
      "Calculate accurate fence costs based on length, materials, gates, and additional factors. Perfect for fence contractors and property owners planning a new fence.",
    canonicalUrl: "https://contractorplus.app/calculators/fence-cost",
  });

  // Calculate results when form values change
  const calculateResults = (values: FenceCostValues) => {
    // Step 1: Calculate the base fence cost
    const baseFenceCost = values.fenceLength * values.costPerFoot;

    // Step 2: Calculate the total gate cost
    const totalGateCost = values.numberOfGates * values.costPerGate;

    // Step 3: Sum up all costs
    const totalCost = baseFenceCost + totalGateCost + values.additionalCosts;

    // Update state with the results
    setCalculationResult({
      baseFenceCost,
      totalGateCost,
      additionalCosts: values.additionalCosts,
      totalCost,
      numberOfGates: values.numberOfGates,
    });
  };

  return (
    <div className="container mx-auto max-w-5xl px-4 py-6 md:px-6">
      {/* Back button */}
      <Button
        variant="ghost"
        size="sm"
        onClick={() => router.push("/calculators")}
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
                Build your fencing bids faster.
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-alice mb-4">
                Contractor+ gives fencing contractors an edge with quick
                calculators for linear footage, gates, and more. Create detailed
                estimates, schedule your crew, and manage projects all in one
                place – fence projects (and your business) run smoother with
                Contractor+.
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
