"use client";
import { useState } from "react";
import { useMetaTags } from "@/hooks/use-meta-tags";
import { ArrowLeft, AirVent } from "lucide-react";
import { useRouter } from "next/navigation";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../../components/ui/breadcrumb";
import { Button } from "../../components/ui/button";
import { CalculatorForm } from "../../components/calculators/hvac-cfm/CalculatorForm";
import { CalculationResult } from "../../components/calculators/hvac-cfm/CalculationResult";
import { EducationalContent } from "../../components/calculators/hvac-cfm/EducationalContent";

export default function HvacCfmCalculator() {
  const router = useRouter();
  const [calculationResult, setCalculationResult] = useState<{
    cfm: number;
    cubicMetersPerHour: number;
  } | null>(null);

  // Add SEO meta tags using the hook that's already in the project
  useMetaTags({
    title: "HVAC CFM Calculator | Free Air Flow & Ventilation Calculator",
    description:
      "Calculate the required CFM (Cubic Feet per Minute) needed for proper ventilation and air exchange in any room with our free HVAC CFM calculator.",
    canonicalUrl: "https://contractorplus.app/calculators/hvac-cfm",
  });

  const onCalculate = (values: {
    roomLength: number;
    roomWidth: number;
    ceilingHeight: number;
    airChangesPerHour: number;
  }) => {
    // Calculate room volume in cubic feet
    const volume = values.roomLength * values.roomWidth * values.ceilingHeight;

    // Calculate required CFM (Cubic Feet per Minute)
    const cfm = (volume * values.airChangesPerHour) / 60;

    // Calculate cubic meters per hour (for metric reference)
    const cubicMetersPerHour = cfm * 1.699;

    setCalculationResult({
      cfm,
      cubicMetersPerHour,
    });
  };

  return (
    <div className="container mx-auto max-w-5xl px-4 py-6 md:px-6">
      {/* Breadcrumb Navigation */}
      <div className="mb-4">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink
                href="/resources"
                className="hover:text-primary text-sm text-gray-700"
              >
                Resources
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink
                href="/resources/calculators"
                className="hover:text-primary text-sm text-gray-700"
              >
                Calculators
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage className="text-sm text-gray-500">
                HVAC CFM Calculator
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/* Back button */}
      <Button
        variant="ghost"
        size="sm"
        onClick={() => router.push("/calculators")}
        className="hover:text-primary mb-6 flex items-center gap-1 text-gray-700"
      >
        <ArrowLeft className="mr-1 h-4 w-4" />
        Back to Calculators
      </Button>

      {/* Main header */}
      <div className="mb-8">
        <div className="mb-2 flex items-center gap-3">
          <div className="bg-primary/10 rounded-full p-2">
            <AirVent className="text-primary h-6 w-6" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900">
            HVAC CFM Calculator
          </h1>
        </div>
        <p className="text-muted-foreground max-w-3xl">
          Calculate the required Cubic Feet per Minute (CFM) for proper
          ventilation in any room based on room dimensions and air change
          requirements.
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
              <p className="text-muted-foreground">
                Enter room dimensions and air change requirements to calculate
                needed CFM
              </p>
            </div>
          )}

          {/* Call to Action Card */}
          <div className="from-primary/5 border-primary/20 rounded-lg border bg-gradient-to-br to-gray-50 p-6 shadow-sm">
            <h3 className="mb-2 text-xl font-semibold text-gray-800">
              Precision HVAC Calculations
            </h3>
            <p className="mb-4 text-gray-600">
              Get access to more advanced HVAC calculators, client management
              tools, and job scheduling with Contractor+.
            </p>
            <Button
              variant="outline"
              className="border-primary/20 hover:bg-primary/5 hover:border-primary/30 text-primary w-full bg-white"
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
