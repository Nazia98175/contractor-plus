import { Brush } from "lucide-react";
import { Separator } from "../../ui/separator";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../ui/card";

interface CalculationResultProps {
  result: {
    totalCost: number;
    costByArea: number;
    minimumChargeApplied: boolean;
  };
}

export function CalculationResult({ result }: CalculationResultProps) {
  return (
    <Card className="border-stiletto bg-shutter mb-6 overflow-hidden border-2 shadow-md">
      <CardHeader className="bg-red-500">
        <CardTitle className="flex items-center text-lg text-white">
          <Brush className="mr-2 h-5 w-5" />
          Calculation Results
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="mb-6 text-center">
          <h3 className="text-alice text-lg font-medium">
            Estimated Carpet Cleaning Cost
          </h3>
          <p className="my-2 text-4xl font-bold text-red-500">
            ${result.totalCost.toFixed(2)}
          </p>
          {result.minimumChargeApplied && (
            <p className="text-aliceBlue mt-1 text-xs">
              (Minimum charge applied)
            </p>
          )}
        </div>

        <Separator className="my-4" />

        <div className="space-y-2 text-sm">
          <h4 className="text-alice font-medium">Cost Breakdown</h4>
          <div className="flex items-center justify-between">
            <span className="text-aliceBlue">Cost by area</span>
            <span className="font-medium">${result.costByArea.toFixed(2)}</span>
          </div>
          {result.minimumChargeApplied && (
            <div className="flex items-center justify-between">
              <span className="text-aliceBlue">Minimum charge applied</span>
              <span className="font-medium">Yes</span>
            </div>
          )}
          {result.totalCost -
            (result.minimumChargeApplied
              ? result.totalCost - result.costByArea
              : result.costByArea) >
            0 && (
            <div className="flex items-center justify-between">
              <span className="text-aliceBlue">Additional services</span>
              <span className="font-medium">
                $
                {(
                  result.totalCost -
                  (result.minimumChargeApplied
                    ? result.totalCost - result.costByArea
                    : result.costByArea)
                ).toFixed(2)}
              </span>
            </div>
          )}
        </div>
      </CardContent>
      <CardFooter className="border-stiletto flex justify-center border-t pt-3">
        <p className="text-decemberSky text-center text-xs">
          This is an estimate based on the information provided. Actual costs
          may vary.
        </p>
      </CardFooter>
    </Card>
  );
}
