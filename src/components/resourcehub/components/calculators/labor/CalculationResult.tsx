import { Button } from "../../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../../ui/card";
import { Separator } from "../../ui/separator";

interface CalculationResultProps {
  calculationResult: {
    totalLaborHours: number;
    laborCost: number;
    burdenCost: number;
    totalLaborCost: number;
    profitAmount: number;
    priceToClient: number;
    hasMarkup: boolean;
  } | null;
}

export function CalculationResult({
  calculationResult,
}: CalculationResultProps) {
  if (!calculationResult) {
    return (
      <div className="py-6 text-center">
        <p className="text-aliceBlue">
          Enter values and calculate to see results
        </p>
      </div>
    );
  }

  const {
    totalLaborHours,
    laborCost,
    burdenCost,
    totalLaborCost,
    profitAmount,
    priceToClient,
    hasMarkup,
  } = calculationResult;

  return (
    <div className="space-y-4">
      {/* Hours */}
      <div className="space-y-1">
        <p className="text-aliceBlue text-sm">Total Labor Hours</p>
        <p className="text-2xl font-semibold">
          {totalLaborHours.toFixed(1)} hours
        </p>
      </div>

      <Separator />

      {/* Labor Cost */}
      <div className="space-y-1">
        <p className="text-aliceBlue text-sm">Direct Labor Cost (Wages)</p>
        <p className="text-xl font-medium">${laborCost.toFixed(2)}</p>
      </div>

      {/* Burden Cost */}
      <div className="space-y-1">
        <p className="text-aliceBlue text-sm">Labor Burden Cost</p>
        <p className="text-xl font-medium">${burdenCost.toFixed(2)}</p>
      </div>

      {/* Total Labor Cost */}
      <div className="space-y-1">
        <p className="text-aliceBlue text-sm">Total Labor Cost</p>
        <p className="text-2xl font-bold text-blue-600">
          ${totalLaborCost.toFixed(2)}
        </p>
      </div>

      <Separator />

      {/* Profit Amount (if applicable) */}
      {hasMarkup && (
        <div className="space-y-1">
          <p className="text-aliceBlue text-sm">Profit Amount</p>
          <p className="text-xl font-medium text-green-500">
            ${profitAmount.toFixed(2)}
          </p>
        </div>
      )}

      {/* Price to Client */}
      <div className="space-y-1">
        <p className="text-aliceBlue text-sm">
          {hasMarkup ? "Recommended Labor Charge" : "Labor Cost (No Markup)"}
        </p>
        <p className="text-3xl font-bold text-red-500">
          ${priceToClient.toFixed(2)}
        </p>
        {!hasMarkup && (
          <p className="text-aliceBlue mt-1 text-xs italic">
            (Charge this amount to break even)
          </p>
        )}
      </div>
    </div>
  );
}

export function ResultsPanel({ calculationResult }: CalculationResultProps) {
  return (
    <div>
      <Card className="border-shutter overflow-hidden shadow-md">
        <CardHeader className="bg-gradient-to-r from-red-500 to-red-600 text-white">
          <CardTitle className="text-lg">Labor Cost Results</CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <CalculationResult calculationResult={calculationResult} />
        </CardContent>
      </Card>

      {/* CTA */}
      <Card className="border-shutter mt-4 border">
        <CardContent className="p-4">
          <h3 className="mb-2 text-lg font-semibold">
            Ready to track labor costs?
          </h3>
          <p className="text-aliceBlue mb-4 text-sm">
            Track your crew's time and costs effortlessly with Contractor Plus.
            Make sure every hour you pay for is accounted for in your estimates.
          </p>
          <Button className="w-full bg-red-500 text-white hover:bg-red-600">
            Try Contractor Plus
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
