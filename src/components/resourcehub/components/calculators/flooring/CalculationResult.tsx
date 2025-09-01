import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../ui/card";

// Define the calculation result type
export interface FlooringCalculationResult {
  effectiveArea: number;
  materialCost: number;
  laborCost: number;
  additionalCosts: number;
  totalCost: number;
}

interface CalculationResultProps {
  calculationResult: FlooringCalculationResult | null;
}

export function CalculationResult({
  calculationResult,
}: CalculationResultProps) {
  if (!calculationResult) {
    return (
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Flooring Estimate Results</CardTitle>
          <CardDescription>
            Fill out the form and click calculate to see your flooring project
            estimate.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-aliceBlue text-sm italic">
            Enter your flooring details to get an accurate cost breakdown.
          </p>
        </CardContent>
      </Card>
    );
  }

  // Format currency values
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(value);
  };

  return (
    <Card className="mb-6">
      <CardHeader className="rounded-t-lg border-b border-red-100 bg-red-50">
        <CardTitle>Flooring Estimate Results</CardTitle>
        <CardDescription>
          Detailed breakdown of your flooring project costs
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="space-y-2">
          <div className="flex justify-between border-b py-2">
            <span className="font-medium">Materials Needed (with waste):</span>
            <span className="font-bold">
              {Math.ceil(calculationResult.effectiveArea)} sq ft
            </span>
          </div>

          <div className="flex justify-between border-b py-2">
            <span className="font-medium">Material Cost:</span>
            <span>{formatCurrency(calculationResult.materialCost)}</span>
          </div>

          <div className="flex justify-between border-b py-2">
            <span className="font-medium">Labor Cost:</span>
            <span>{formatCurrency(calculationResult.laborCost)}</span>
          </div>

          <div className="flex justify-between border-b py-2">
            <span className="font-medium">Additional Costs:</span>
            <span>{formatCurrency(calculationResult.additionalCosts)}</span>
          </div>

          <div className="mt-4 flex justify-between rounded bg-red-50 p-2 py-2">
            <span className="font-semibold">Total Flooring Project Cost:</span>
            <span className="text-xl font-bold">
              {formatCurrency(calculationResult.totalCost)}
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
