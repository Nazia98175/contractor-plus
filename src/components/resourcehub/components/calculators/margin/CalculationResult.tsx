import { Card, CardContent, CardHeader, CardTitle } from "../../ui/card";
import { Separator } from "../../ui/separator";
interface CalculationResultProps {
  calculationResult: { price: number; profit: number } | null;
  margin: number;
  isHighMargin: boolean;
}

export function CalculationResult({
  calculationResult,
  margin,
  isHighMargin,
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

  return (
    <div className="space-y-4">
      {/* High Margin Warning */}
      {isHighMargin && (
        <div className="mb-4 rounded-md border border-yellow-200 bg-yellow-50 p-3 text-sm text-yellow-800">
          <strong>Warning</strong>: High profit margins may be difficult to
          achieve in competitive markets
        </div>
      )}

      {/* Price */}
      <div className="space-y-1">
        <p className="text-aliceBlue text-sm">Required Selling Price</p>
        <p className="text-3xl font-bold text-red-500">
          $
          {calculationResult.price >= Number.MAX_SAFE_INTEGER
            ? "∞"
            : calculationResult.price.toFixed(2)}
        </p>
        <p className="text-aliceBlue text-sm">
          To achieve {margin}% profit margin
        </p>
      </div>

      <Separator />

      {/* Profit */}
      <div className="space-y-1">
        <p className="text-aliceBlue text-sm">Profit at this Price</p>
        <p className="text-2xl font-semibold text-green-600">
          $
          {calculationResult.profit >= Number.MAX_SAFE_INTEGER
            ? "∞"
            : calculationResult.profit.toFixed(2)}
        </p>
      </div>
    </div>
  );
}

export function ResultsPanel({
  calculationResult,
  margin,
  isHighMargin,
}: CalculationResultProps) {
  return (
    <div>
      <Card className="border-shutter overflow-hidden shadow-md">
        <CardHeader className="bg-gradient-to-r from-red-500 to-red-600 text-white">
          <CardTitle className="text-lg">Calculation Results</CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <CalculationResult
            calculationResult={calculationResult}
            margin={margin}
            isHighMargin={isHighMargin}
          />
        </CardContent>
      </Card>

      {/* CTA */}
      <Card className="border-shutter mt-4 border">
        <CardContent className="p-4">
          <h3 className="mb-2 text-lg font-semibold">
            Ready to grow your business?
          </h3>
          <p className="text-aliceBlue mb-4 text-sm">
            Get more features with Contractor Plus - your all-in-one solution
            for construction business management
          </p>
          <Button className="w-full bg-red-500 text-white hover:bg-red-600">
            Try Contractor Plus
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}

// Import Button from UI components to avoid circular dependency
import { Button } from "../../ui/button";
