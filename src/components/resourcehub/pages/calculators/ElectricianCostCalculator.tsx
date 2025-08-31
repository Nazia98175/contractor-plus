"use client";
import React, { useState } from "react";
import { ArrowLeft, Zap } from "lucide-react";
import { useMetaTags } from "@/hooks/use-meta-tags";
import { useRouter } from "next/navigation";
import {
  CalculationResult,
  ElectricianCostResult,
} from "../../components/calculators/electrician-cost/CalculationResult";
import { Button } from "../../components/ui/button";
import { PageHeader } from "../../components/calculators/electrician-cost/PageHeader";
import { CalculatorForm } from "../../components/calculators/electrician-cost/CalculatorForm";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { EducationalContent } from "../../components/calculators/electrician-cost/EducationalContent";
// Define the calculation values type
export interface ElectricianCostValues {
  baseWage: number;
  laborBurden: number;
  overhead: number;
  profitMarkup: number;
}

export default function ElectricianCostCalculator() {
  const router = useRouter();

  const [calculationResult, setCalculationResult] =
    useState<ElectricianCostResult | null>(null);

  // Add SEO meta tags
  useMetaTags({
    title:
      "Electrician Cost Per Hour Calculator | Free Tool for Electrical Contractors",
    description:
      "Calculate accurate hourly billing rates for electricians based on wages, labor burden, overhead and desired profit. Perfect for electrical contractors and business owners.",
    canonicalUrl: "https://contractorplus.app/calculators/electrician-cost",
  });

  // Calculate results when form values change
  const calculateResults = (values: ElectricianCostValues) => {
    // Step 1: Calculate the burdened wage
    const burdenedWage = values.baseWage * (1 + values.laborBurden / 100);

    // Step 2: Calculate the cost per hour (break-even rate)
    const costPerHour = burdenedWage + values.overhead;

    // Step 3: Calculate the profit amount
    const profitPerHour = costPerHour * (values.profitMarkup / 100);

    // Step 4: Determine the billable rate
    const billableRate = costPerHour + profitPerHour;

    // Update state with the results
    setCalculationResult({
      burdenedWage,
      costPerHour,
      profitPerHour,
      billableRate,
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
          <Card className="border-red-100 bg-gradient-to-br from-red-50 to-gray-50">
            <CardHeader>
              <CardTitle className="text-xl text-red-800">
                Work smarter, charge smarter.
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-gray-600">
                With Contractor+, electricians can easily calculate true hourly
                costs, set profitable rates, and track every job. Know what you
                should charge, and use Contractor+ to manage scheduling,
                quoting, and invoicing—keeping your electrical business grounded
                and profitable.
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
