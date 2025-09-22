"use client";
import { useState } from "react";
import { useMetaTags } from "@/hooks/use-meta-tags";
import { PageHeader } from "../../components/calculators/paver/PageHeader";
import { CalculatorForm } from "../../components/calculators/paver/CalculatorForm";
import { CalculationResult } from "../../components/calculators/paver/CalculationResult";
import { EducationalContent } from "../../components/calculators/paver/EducationalContent";

export interface PaverCalculationResult {
  paversNeeded: number;
  totalPaverCost: number;
  paverAreaSqFt: number;
  wastePercentage: number;
  costPerPaver: number;
}

export default function PaverCalculator() {
  useMetaTags({
    title: "Paver Calculator & Price Estimator | Contractor+",
    description:
      "Calculate how many pavers you need for your patio, walkway, or driveway projects. Estimate costs with our free paver calculator.",
    keywords:
      "paver calculator, paver estimator, paver cost calculator, hardscape calculator, patio paver calculator, contractor calculator",
  });

  const [result, setResult] = useState<PaverCalculationResult | null>(null);

  const calculateResults = (values: {
    areaSqFt: number;
    paverLength: number;
    paverWidth: number;
    wasteFactor: number;
    costPerPaver: number;
  }) => {
    // Step 1: Calculate area of one paver in square feet
    const paverLengthFt = values.paverLength / 12;
    const paverWidthFt = values.paverWidth / 12;
    const paverAreaSqFt = paverLengthFt * paverWidthFt;

    // Step 2: Calculate pavers needed without waste
    const paversNeededRaw = values.areaSqFt / paverAreaSqFt;

    // Step 3: Apply waste factor
    const paversNeededWithWaste =
      paversNeededRaw * (1 + values.wasteFactor / 100);

    // Step 4: Round up to whole number
    const paversNeeded = Math.ceil(paversNeededWithWaste);

    // Step 5: Calculate total cost
    const totalPaverCost = paversNeeded * values.costPerPaver;

    setResult({
      paversNeeded,
      totalPaverCost,
      paverAreaSqFt,
      wastePercentage: values.wasteFactor,
      costPerPaver: values.costPerPaver,
    });

    // Scroll to results section
    const resultsSection = document.getElementById("results-section");
    if (resultsSection) {
      setTimeout(() => {
        resultsSection.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  };

  return (
    <div className="main-container py-8 md:px-6">
      <PageHeader />

      <div className="mb-12 grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <CalculatorForm onCalculate={calculateResults} />
        </div>

        <div id="results-section" className="lg:col-span-1">
          {result && <CalculationResult result={result} />}
        </div>
      </div>

      <EducationalContent />
    </div>
  );
}
