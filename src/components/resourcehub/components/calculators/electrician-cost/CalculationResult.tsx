import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../../ui/card";
import { CheckCircle2, DollarSign, AlertCircle } from "lucide-react";

interface CalculationResultProps {
  calculationResult: ElectricianCostResult | null;
}

export interface ElectricianCostResult {
  burdenedWage: number;
  costPerHour: number;
  profitPerHour: number;
  billableRate: number;
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
        <CardContent className="flex-none">
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

  const { burdenedWage, costPerHour, profitPerHour, billableRate } =
    calculationResult;

  return (
    <Card className="bg-shutter border-stiletto mb-6 overflow-hidden border-2 shadow-sm">
      <CardHeader className="border-b border-green-500 pb-2">
        <CardTitle className="flex items-center gap-2 text-lg font-medium text-green-400">
          <CheckCircle2 className="h-5 w-5 text-green-500" /> Calculation
          Results
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-none py-4">
        <div className="space-y-4">
          {/* Burdened Wage */}
          <div>
            <div className="flex items-center justify-between">
              <span className="text-alice text-sm font-medium">
                Burdened Wage:
              </span>
              <span className="font-medium">
                ${burdenedWage.toFixed(2)}/hour
              </span>
            </div>
            <p className="text-decemberSky text-xs">
              Hourly wage including labor burden
            </p>
          </div>

          {/* Break-even Cost */}
          <div className="border-t border-dashed border-gray-200 pt-2">
            <div className="flex items-center justify-between">
              <span className="text-base font-semibold">
                Break-even Cost per Hour:
              </span>
              <span className="text-lg font-semibold">
                ${costPerHour.toFixed(2)}
              </span>
            </div>
            <p className="text-decemberSky text-xs">
              Total cost including burdened wage and overhead
            </p>
          </div>

          {/* Profit Per Hour */}
          <div>
            <div className="flex items-center justify-between">
              <span className="text-alice text-sm font-medium">
                Profit per Hour:
              </span>
              <span className="font-medium">${profitPerHour.toFixed(2)}</span>
            </div>
            <p className="text-decemberSky text-xs">
              Added profit based on your markup percentage
            </p>
          </div>

          {/* Billable Rate */}
          <div className="mt-2 border-t-2 border-green-100 pt-3">
            <div className="flex items-start justify-between">
              <span className="text-lg font-bold text-green-500">
                Suggested Billable Rate:
              </span>
              <span className="flex items-center text-xl font-bold text-green-500">
                <DollarSign className="mr-1 h-5 w-5" />
                {billableRate.toFixed(2)}/hour
              </span>
            </div>
            <p className="text-alice text-sm">
              The recommended hourly rate to charge clients
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
