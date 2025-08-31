import { Card, CardDescription } from "../../ui/card";
import { Separator } from "../../ui/separator";

interface CalculationResultProps {
  result: {
    gallonsNeeded: number;
    paintCost: number;
    laborHours: number;
    laborCost: number;
    totalCost: number;
  };
}

export function CalculationResult({ result }: CalculationResultProps) {
  return (
    <Card className="border border-gray-200 bg-white shadow-sm">
      <CardContent className="p-6">
        <div className="mb-6 text-center">
          <h3 className="text-lg font-medium text-gray-700">
            Estimated Painting Cost
          </h3>
          <p className="my-2 text-4xl font-bold text-red-600">
            $
            {result.totalCost.toLocaleString("en-US", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </p>
        </div>

        <Separator className="my-4" />

        <div className="space-y-3 text-sm">
          <h4 className="font-medium text-gray-700">Cost Breakdown</h4>

          <div className="flex items-center justify-between">
            <span className="text-muted-foreground">Paint Needed</span>
            <span className="font-medium text-gray-700">
              {result.gallonsNeeded.toLocaleString()}{" "}
              {result.gallonsNeeded === 1 ? "gallon" : "gallons"}
            </span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-muted-foreground">Paint Cost</span>
            <span className="font-medium text-gray-700">
              $
              {result.paintCost.toLocaleString("en-US", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-muted-foreground">Labor Hours</span>
            <span className="font-medium text-gray-700">
              {result.laborHours.toLocaleString("en-US", {
                minimumFractionDigits: 1,
                maximumFractionDigits: 1,
              })}{" "}
              hours
            </span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-muted-foreground">Labor Cost</span>
            <span className="font-medium text-gray-700">
              $
              {result.laborCost.toLocaleString("en-US", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </span>
          </div>

          <div className="flex items-center justify-between border-t border-gray-100 pt-2">
            <span className="font-medium">Total Cost</span>
            <span className="font-bold text-red-600">
              $
              {result.totalCost.toLocaleString("en-US", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </span>
          </div>
        </div>

        <div className="mt-4 border-t border-gray-200 pt-4">
          <p className="text-center text-xs text-gray-500">
            This estimate is based on the provided inputs. Actual costs may vary
            based on surface condition, preparation work, and specific paint
            products used.
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
