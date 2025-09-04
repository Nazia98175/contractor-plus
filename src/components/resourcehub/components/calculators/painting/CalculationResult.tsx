import { Card, CardContent, CardDescription } from "../../ui/card";
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
    <Card className="border-stiletto bg-shutter border shadow-sm">
      <CardContent className="p-6">
        <div className="mb-6 text-center">
          <h3 className="text-alice text-lg font-medium">
            Estimated Painting Cost
          </h3>
          <p className="my-2 text-4xl font-bold text-red-500">
            $
            {result.totalCost.toLocaleString("en-US", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </p>
        </div>

        <Separator className="my-4" />

        <div className="space-y-3 text-sm">
          <h4 className="text-alice font-medium">Cost Breakdown</h4>

          <div className="flex items-center justify-between">
            <span className="text-aliceBlue">Paint Needed</span>
            <span className="text-alice font-medium">
              {result.gallonsNeeded.toLocaleString()}{" "}
              {result.gallonsNeeded === 1 ? "gallon" : "gallons"}
            </span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-aliceBlue">Paint Cost</span>
            <span className="text-alice font-medium">
              $
              {result.paintCost.toLocaleString("en-US", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-aliceBlue">Labor Hours</span>
            <span className="text-alice font-medium">
              {result.laborHours.toLocaleString("en-US", {
                minimumFractionDigits: 1,
                maximumFractionDigits: 1,
              })}{" "}
              hours
            </span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-aliceBlue">Labor Cost</span>
            <span className="text-alice font-medium">
              $
              {result.laborCost.toLocaleString("en-US", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </span>
          </div>

          <div className="border-decemberSky flex items-center justify-between border-t pt-2">
            <span className="font-medium">Total Cost</span>
            <span className="font-bold text-red-500">
              $
              {result.totalCost.toLocaleString("en-US", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </span>
          </div>
        </div>

        <div className="border-decemberSky mt-4 border-t pt-4">
          <p className="text-decemberSky text-center text-xs">
            This estimate is based on the provided inputs. Actual costs may vary
            based on surface condition, preparation work, and specific paint
            products used.
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
