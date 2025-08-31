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
    <Card className="mb-6 border-2 border-red-100 bg-white shadow-md">
      <CardHeader className="border-b border-red-100 bg-red-50">
        <CardTitle className="flex items-center text-lg text-red-800">
          <Brush className="mr-2 h-5 w-5 text-red-600" />
          Calculation Results
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="mb-6 text-center">
          <h3 className="text-lg font-medium text-gray-600">
            Estimated Carpet Cleaning Cost
          </h3>
          <p className="my-2 text-4xl font-bold text-red-600">
            ${result.totalCost.toFixed(2)}
          </p>
          {result.minimumChargeApplied && (
            <p className="text-muted-foreground mt-1 text-xs">
              (Minimum charge applied)
            </p>
          )}
        </div>

        <Separator className="my-4" />

        <div className="space-y-2 text-sm">
          <h4 className="font-medium text-gray-700">Cost Breakdown</h4>
          <div className="flex items-center justify-between">
            <span className="text-muted-foreground">Cost by area</span>
            <span className="font-medium">${result.costByArea.toFixed(2)}</span>
          </div>
          {result.minimumChargeApplied && (
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground">
                Minimum charge applied
              </span>
              <span className="font-medium">Yes</span>
            </div>
          )}
          {result.totalCost -
            (result.minimumChargeApplied
              ? result.totalCost - result.costByArea
              : result.costByArea) >
            0 && (
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground">Additional services</span>
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
      <CardFooter className="flex justify-center border-t border-red-100 bg-red-50">
        <p className="text-center text-xs text-gray-500">
          This is an estimate based on the information provided. Actual costs
          may vary.
        </p>
      </CardFooter>
    </Card>
  );
}
