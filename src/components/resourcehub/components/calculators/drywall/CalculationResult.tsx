import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../ui/card";
import { Separator } from "../../ui/separator";
import { DrywallCalculationResult } from "@/components/resourcehub/pages/calculators/DrywallCalculator";

interface CalculationResultProps {
  calculationResult: DrywallCalculationResult | null;
}

export function CalculationResult({
  calculationResult,
}: CalculationResultProps) {
  if (!calculationResult) {
    return (
      <Card className="border-stiletto bg-shutter mb-8 border-2 shadow-md">
        <CardHeader className="border-stiletto border-b">
          <CardTitle className="text-xl text-red-400">
            Calculation Results
          </CardTitle>
        </CardHeader>
        <CardContent className="py-8 text-center text-gray-500">
          Enter your project details to see the calculation results.
        </CardContent>
      </Card>
    );
  }

  const { sheetsNeeded, sheetArea, effectiveArea, totalCost } =
    calculationResult;
  const sheetWidthLength = `${(calculationResult.sheetArea / calculationResult.sheetArea) * 4}x${calculationResult.sheetArea / 4}`;

  return (
    <Card className="border-stiletto bg-shutter mb-8 border-2 shadow-md">
      <CardHeader className="border-stiletto border-b">
        <CardTitle className="text-xl text-red-500">
          Calculation Results
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="mb-6 text-center">
          <h3 className="text-alice text-lg font-medium">
            Drywall Sheets Needed
          </h3>
          <p className="my-2 text-4xl font-bold text-red-500">
            {sheetsNeeded} sheets
          </p>
          <p className="text-sm">{`${sheetWidthLength} ft sheets`}</p>
        </div>

        {totalCost > 0 && (
          <>
            <Separator className="my-4" />
            <div className="mb-6 text-center">
              <h3 className="text-alice text-lg font-medium">
                Total Material Cost
              </h3>
              <p className="my-2 text-4xl font-bold text-red-500">
                ${totalCost.toFixed(2)}
              </p>
            </div>
          </>
        )}

        <Separator className="my-4" />

        <div className="space-y-2 text-sm">
          <h4 className="font-medium">Calculation Breakdown</h4>
          <div className="flex items-center justify-between">
            <span className="text-aliceBlue">Sheet Area</span>
            <span className="font-medium">
              {sheetArea.toFixed(2)} sq ft/sheet
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-aliceBlue">Effective Area (with waste)</span>
            <span className="font-medium">
              {effectiveArea.toFixed(2)} sq ft
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-aliceBlue">Raw Sheet Count</span>
            <span className="font-medium">
              {(effectiveArea / sheetArea).toFixed(2)} sheets
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-aliceBlue">
              Final Sheet Count (rounded up)
            </span>
            <span className="font-medium">{sheetsNeeded} sheets</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="border-stiletto flex justify-center border-t">
        <p className="pt-2 text-center text-xs">
          Note: Always verify measurements before purchasing materials. Actual
          needs may vary based on specific project requirements.
        </p>
      </CardFooter>
    </Card>
  );
}
