import { Card, CardContent, CardDescription } from "../../ui/card";
import { Separator } from "../../ui/separator";

interface CalculationResultProps {
  result: {
    paversNeeded: number;
    totalPaverCost: number;
    paverAreaSqFt: number;
    wastePercentage: number;
    costPerPaver: number;
  };
}

export function CalculationResult({ result }: CalculationResultProps) {
  const formattedCost = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(result.totalPaverCost);

  const formattedPaverArea = new Intl.NumberFormat("en-US", {
    minimumFractionDigits: 3,
    maximumFractionDigits: 3,
  }).format(result.paverAreaSqFt);

  return (
    <Card className="border-stiletto bg-shutter h-full border shadow-sm">
      <CardContent className="py-6">
        <div className="text-center">
          <h3 className="text-alice text-lg font-medium">Paver Estimate</h3>
          <p className="my-2 text-4xl font-bold text-red-500">
            {result.paversNeeded.toLocaleString()} pavers
          </p>
          <p className="text-alice text-lg font-medium">{formattedCost}</p>
          <p className="text-aliceBlue mt-1 text-xs">
            (Always buy a few extra)
          </p>
        </div>

        <Separator className="my-4" />

        <div className="space-y-3 text-sm">
          <h4 className="text-alice font-medium">Calculation Details</h4>

          <div className="flex items-center justify-between">
            <span className="text-aliceBlue">Single Paver Area</span>
            <span className="text-alice font-medium">
              {formattedPaverArea} sq ft
            </span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-aliceBlue">Waste Factor</span>
            <span className="text-alice font-medium">
              {result.wastePercentage}%
            </span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-aliceBlue">Cost per Paver</span>
            <span className="text-alice font-medium">
              ${result.costPerPaver.toFixed(2)}
            </span>
          </div>

          <div className="border-decemberSky flex items-center justify-between border-t pt-2">
            <span className="font-medium">Pavers Required</span>
            <span className="font-bold text-red-500">
              {result.paversNeeded.toLocaleString()} pieces
            </span>
          </div>

          {result.costPerPaver > 0 && (
            <div className="flex items-center justify-between">
              <span className="font-medium">Total Paver Cost</span>
              <span className="font-bold text-red-500">{formattedCost}</span>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
