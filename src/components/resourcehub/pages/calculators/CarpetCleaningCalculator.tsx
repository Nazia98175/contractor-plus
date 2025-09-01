"use client";
import { useState } from "react";
import { useMetaTags } from "@/hooks/use-meta-tags";
import { ArrowLeft, Brush } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../../components/ui/breadcrumb";
import { Button } from "../../components/ui/button";
import { useRouter } from "next/navigation";
import { CalculatorForm } from "../../components/calculators/carpet-cleaning/CalculatorForm";
import { CalculationResult } from "../../components/calculators/carpet-cleaning/CalculationResult";
import { EducationalContent } from "../../components/calculators/carpet-cleaning/EducationalContent";

export default function CarpetCleaningCalculator() {
  const [calculationResult, setCalculationResult] = useState<{
    totalCost: number;
    costByArea: number;
    minimumChargeApplied: boolean;
  } | null>(null);

  // Add SEO meta tags
  useMetaTags({
    title:
      "Carpet Cleaning Estimate Calculator | Free Tool for Cleaning Businesses",
    description:
      "Calculate accurate carpet cleaning estimates based on area size, price per square foot, minimum charges, and additional services. Perfect for carpet cleaning businesses.",
    canonicalUrl: "https://contractorplus.app/calculators/carpet-cleaning",
  });

  const onCalculate = (values: {
    carpetedArea: number;
    pricePerSqFt: number;
    minimumCharge: number;
    additionalServices: number;
  }) => {
    // Calculate cost by area
    const costByArea = values.carpetedArea * values.pricePerSqFt;

    // Check if minimum charge should be applied
    const minimumChargeApplied =
      values.minimumCharge > 0 && costByArea < values.minimumCharge;

    // Calculate base cost
    const baseCost = minimumChargeApplied ? values.minimumCharge : costByArea;

    // Add additional services to get total cost
    const totalCost = baseCost + values.additionalServices;

    setCalculationResult({
      totalCost,
      costByArea,
      minimumChargeApplied,
    });
  };
  const router = useRouter();
  return (
    <div className="container mx-auto max-w-5xl px-4 py-6 md:px-6">
      {/* Breadcrumb Navigation */}
      <div className="mb-4">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink
                href="/resources"
                className="text-sm text-gray-700 hover:text-red-600"
              >
                Resources
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink
                href="/resources/calculators"
                className="text-sm text-gray-700 hover:text-red-600"
              >
                Calculators
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage className="text-sm text-gray-500">
                Carpet Cleaning Estimate Calculator
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

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
      <div className="mb-8">
        <div className="mb-2 flex items-center gap-3">
          <div className="rounded-full bg-red-100 p-2">
            <Brush className="h-6 w-6 text-red-600" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900">
            Carpet Cleaning Estimate Calculator
          </h1>
        </div>
        <p className="text-aliceBlue max-w-3xl">
          Calculate accurate carpet cleaning estimates based on area size,
          pricing, minimum charges, and additional services to provide
          professional quotes to your clients.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
        {/* Left side - Calculator form */}
        <div className="lg:col-span-7">
          <CalculatorForm onCalculate={onCalculate} />
        </div>

        {/* Right side - Results & Information */}
        <div className="lg:col-span-5">
          {calculationResult && (
            <CalculationResult result={calculationResult} />
          )}
          {!calculationResult && (
            <div className="bg-muted/30 mb-6 rounded-lg border p-6 text-center">
              <p className="text-aliceBlue">
                Enter carpet area and pricing details to calculate your cleaning
                estimate
              </p>
            </div>
          )}

          {/* Call to Action Card */}
          <div className="rounded-lg border border-red-100 bg-gradient-to-br from-red-50 to-gray-50 p-6 shadow-sm">
            <h3 className="mb-2 text-xl font-semibold text-gray-800">
              Wow Your Clients with Fast, Accurate Quotes
            </h3>
            <p className="mb-4 text-gray-600">
              Try Contractor+ to create carpet cleaning estimates, schedule
              jobs, and send invoices – all in one app. Make your carpet
              cleaning business shine (just like those freshly cleaned carpets)!
            </p>
            <Button
              variant="outline"
              className="w-full border-red-200 bg-white text-red-700 hover:border-red-300 hover:bg-red-50"
            >
              Try Contractor+ Free
            </Button>
          </div>
        </div>
      </div>

      {/* Educational Content Section */}
      <EducationalContent />
    </div>
  );
}
