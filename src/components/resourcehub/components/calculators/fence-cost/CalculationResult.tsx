import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../../ui/card";
import { CheckCircle2, DollarSign, AlertCircle } from "lucide-react";
import { Separator } from "../../ui/separator";

interface CalculationResultProps {
  calculationResult: FenceCostResult | null;
}

export interface FenceCostResult {
  baseFenceCost: number;
  totalGateCost: number;
  additionalCosts: number;
  totalCost: number;
  numberOfGates: number;
}

export function CalculationResult({
  calculationResult,
}: CalculationResultProps) {
  if (!calculationResult) {
    return (
      <Card className="border-stiletto bg-shutter mb-6 border shadow-sm">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg font-medium">
            Calculation Results
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col items-center justify-center py-6 text-center">
            <AlertCircle className="text-aliceBlue mb-2 h-10 w-10" />
            <p className="mb-2 text-lg font-medium">No calculation yet</p>
            <p className="text-aliceBlue text-sm">
              Fill out the form and click Calculate to see results
            </p>
          </div>
        </CardContent>
      </Card>
    );
  }

  const {
    baseFenceCost,
    totalGateCost,
    additionalCosts,
    totalCost,
    numberOfGates,
  } = calculationResult;
  const gatesText = numberOfGates === 1 ? "1 gate" : `${numberOfGates} gates`;

  return (
    <Card className="mb-6 border-2 shadow-sm">
      <CardHeader className="border-b border-green-100 bg-green-50/50 pb-2">
        <CardTitle className="flex items-center gap-2 text-lg font-medium text-green-800">
          <CheckCircle2 className="h-5 w-5 text-green-500" /> Fence Cost
          Estimate
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-4">
        <div className="mb-6 text-center">
          <h3 className="text-alice text-lg font-medium">
            Estimated Fence Cost
          </h3>
          <p className="my-2 flex items-center justify-center text-4xl font-bold text-green-700">
            <DollarSign className="mr-1 h-5 w-5" />
            {totalCost.toLocaleString("en-US", { maximumFractionDigits: 0 })}
          </p>
          <p className="text-sm text-gray-500">
            {numberOfGates > 0 ? `Including ${gatesText}` : "No gates included"}
          </p>
        </div>

        <Separator className="my-4" />

        <div className="space-y-3">
          <h4 className="text-alice font-medium">Cost Breakdown</h4>

          {/* Base Fence Cost */}
          <div className="flex items-center justify-between">
            <span className="text-aliceBlue">Base Fence Cost:</span>
            <span className="font-medium">
              $
              {baseFenceCost.toLocaleString("en-US", {
                maximumFractionDigits: 0,
              })}
            </span>
          </div>

          {/* Gate Cost */}
          <div className="flex items-center justify-between">
            <span className="text-aliceBlue">
              Gate Cost ({numberOfGates > 0 ? gatesText : "none"}):
            </span>
            <span className="font-medium">
              $
              {totalGateCost.toLocaleString("en-US", {
                maximumFractionDigits: 0,
              })}
            </span>
          </div>

          {/* Additional Costs */}
          <div className="flex items-center justify-between">
            <span className="text-aliceBlue">Additional Costs:</span>
            <span className="font-medium">
              $
              {additionalCosts.toLocaleString("en-US", {
                maximumFractionDigits: 0,
              })}
            </span>
          </div>

          {/* Total Cost */}
          <div className="border-decemberSky border-t pt-2">
            <div className="flex items-center justify-between">
              <span className="text-base font-semibold text-gray-700">
                Total Project Cost:
              </span>
              <span className="text-lg font-bold text-green-700">
                $
                {totalCost.toLocaleString("en-US", {
                  maximumFractionDigits: 0,
                })}
              </span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
