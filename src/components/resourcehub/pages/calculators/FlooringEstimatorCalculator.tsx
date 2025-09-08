"use client";
import { useMetaTags } from "@/hooks/use-meta-tags";
import { useRouter } from "next/navigation";
import { useState } from "react";
import {
  CalculationResult,
  FlooringCalculationResult,
} from "../../components/calculators/flooring/CalculationResult";
import {
  CalculatorForm,
  type FlooringCalculationValues,
} from "../../components/calculators/flooring/CalculatorForm";
import { EducationalContent } from "../../components/calculators/flooring/EducationalContent";
import { PageHeader } from "../../components/calculators/flooring/PageHeader";
import { Button } from "../../components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import Link from "next/link";

export default function FlooringEstimatorCalculator() {
  const router = useRouter();

  const [calculationResult, setCalculationResult] =
    useState<FlooringCalculationResult | null>(null);

  useMetaTags({
    title: "Flooring Estimator Calculator | Free Tool for Flooring Contractors",
    description:
      "Calculate flooring project costs with this free estimator. Account for materials, labor, waste factor, and additional costs for accurate flooring estimates.",
    canonicalUrl: "https://contractorplus.app/calculators/flooring-estimator",
  });

  const calculateResults = (values: FlooringCalculationValues) => {
    const effectiveArea = values.floorArea * (1 + values.wasteFactor / 100);
    const materialCost = effectiveArea * values.materialCostPerSqFt;
    const laborCost = values.floorArea * values.laborCostPerSqFt;
    const totalCost = materialCost + laborCost + values.additionalCosts;

    setCalculationResult({
      effectiveArea,
      materialCost,
      laborCost,
      additionalCosts: values.additionalCosts,
      totalCost,
    });
  };

  return (
    <div className="mx-auto max-w-6xl px-4 py-6 md:px-6">
      {/* Back button */}
      {/* <Button
        variant="ghost"
        size="sm"
        onClick={() => router.push("/resources/cost-calculator")}
        className="mb-6 flex items-center gap-1 hover:text-red-500"
      >
        <ArrowLeft className="mr-1 h-4 w-4" />
        Back to Calculators
      </Button> */}

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
          <Card className="border-stiletto border">
            <CardHeader>
              <CardTitle className="text-xl text-red-500">
                Lay down flooring estimates with confidence.
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-decemberSky mb-4">
                Contractor+ empowers flooring contractors to calculate materials
                (including waste) and labor costs in a snap. Create
                comprehensive flooring quotes, order the right amount of
                product, and keep your projects profitable with our easy-to-use
                platform.
              </p>
              <Button variant="outline" className="w-full" asChild>
                <Link
                  target="_blank"
                  href="https://my.contractorplus.app/authentication/register"
                >
                  Try Contractor Plus
                </Link>
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
