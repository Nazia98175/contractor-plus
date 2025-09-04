"use client";
import { useMetaTags } from "@/hooks/use-meta-tags";
import { ArrowLeft, Square } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../../components/ui/breadcrumb";
import { Button } from "../../components/ui/button";
import { DrywallCalculatorForm } from "../../components/calculators/drywall/CalculatorForm";
import { CalculationResult } from "../../components/calculators/drywall/CalculationResult";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { EducationalContent } from "../../components/calculators/drywall/EducationalContent";

// Define the calculation values type
export interface DrywallCalculationValues {
  totalArea: number;
  sheetLength: number;
  sheetWidth: number;
  wasteFactor: number;
  costPerSheet: number;
}

export interface DrywallCalculationResult {
  sheetsNeeded: number;
  sheetArea: number;
  effectiveArea: number;
  totalCost: number;
}

export default function DrywallCalculator() {
  const router = useRouter();

  const [calculationResult, setCalculationResult] =
    useState<DrywallCalculationResult | null>(null);

  // Add SEO meta tags
  useMetaTags({
    title: "Drywall Materials Calculator | Free Tool for Contractors",
    description:
      "Calculate how many drywall sheets you need for your project based on room dimensions, sheet size, and waste factor. Perfect for contractors and DIYers.",
    canonicalUrl: "https://contractorplus.app/calculators/drywall",
  });

  // Calculate results when form values change
  const calculateResults = (values: DrywallCalculationValues) => {
    // Step 1: Calculate the area of one drywall sheet
    const sheetArea = values.sheetLength * values.sheetWidth;

    // Step 2: Calculate the effective area including waste factor
    const effectiveArea = values.totalArea * (1 + values.wasteFactor / 100);

    // Step 3: Determine how many sheets are needed
    const rawSheetsNeeded = effectiveArea / sheetArea;

    // Step 4: Round up to the nearest whole sheet
    const sheetsNeeded = Math.ceil(rawSheetsNeeded);

    // Step 5: Calculate total cost
    const totalCost = sheetsNeeded * values.costPerSheet;

    // Update state with the results
    setCalculationResult({
      sheetsNeeded,
      sheetArea,
      effectiveArea,
      totalCost,
    });
  };

  return (
    <div className="container mx-auto max-w-5xl px-4 py-6 md:px-6">
      {/* Breadcrumb Navigation */}
      <div className="mb-4">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Resources</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/resources/cost-calculator">
                Calculators
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage className="text-decemberSky text-sm">
                Drywall Materials Calculator
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/* Back button */}
      <Button
        variant="ghost"
        size="sm"
        onClick={() => router.push("/resources/cost-calculator")}
        className="mb-6 flex items-center gap-1 hover:text-red-500"
      >
        <ArrowLeft className="mr-1 h-4 w-4" />
        Back to Calculators
      </Button>

      {/* Main header */}
      <div className="mb-8">
        <div className="mb-2 flex items-center gap-3">
          <div className="rounded-full bg-red-100 p-2">
            <Square className="h-6 w-6 text-red-500" />
          </div>
          <h1 className="text-3xl font-bold">Drywall Materials Calculator</h1>
        </div>
        <p className="text-aliceBlue max-w-3xl">
          Calculate how many drywall sheets you need for your project. Perfect
          for contractors and DIY homeowners to estimate material quantities and
          costs.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
        {/* Left side - Calculator form */}
        <div className="lg:col-span-7">
          <DrywallCalculatorForm onCalculate={calculateResults} />
        </div>

        {/* Right side - Results & Information */}
        <div className="lg:col-span-5">
          {/* Results Card */}
          <CalculationResult calculationResult={calculationResult} />

          {/* Call to Action Card */}
          <Card className="border-stiletto bg-shutter border">
            <CardHeader>
              <CardTitle className="text-xl text-red-500">
                Ready to Streamline Your Drywall Business?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-decemberSky mb-4">
                From takeoff to hanging board, accuracy matters. Contractor+
                helps drywall contractors calculate materials, track costs, and
                manage projects with ease. Estimate your drywall, order the
                right amount, and keep your projects on schedule and on budget.
              </p>
              <Button variant="outline" className="w-full">
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
