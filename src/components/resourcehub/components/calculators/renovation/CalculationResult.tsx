import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../ui/card";
import { Separator } from "../../ui/separator";
import { Building, DollarSign } from "lucide-react";

interface CalculationResultProps {
  result: {
    baseRenovationCost: number;
    contingencyAmount: number;
    totalRenovationCost: number;
    hasContingency: boolean;
    contingencyPercentage: number;
  };
}

export function CalculationResult({ result }: CalculationResultProps) {
  return (
    <Card className="border-primary/20 mb-6 border-2 bg-white shadow-md">
      <CardHeader className="bg-primary/5 border-primary/20 border-b">
        <CardTitle className="text-primary/90 flex items-center text-lg">
          <Building className="text-primary mr-2 h-5 w-5" />
          Renovation Cost Estimate
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="mb-6 text-center">
          <h3 className="text-lg font-medium text-gray-600">
            Estimated Renovation Cost
          </h3>
          <p className="my-2 text-4xl font-bold text-green-600">
            $
            {result.totalRenovationCost.toLocaleString("en-US", {
              minimumFractionDigits: 0,
              maximumFractionDigits: 0,
            })}
          </p>
          {result.hasContingency && (
            <p className="text-sm text-gray-500">
              (including {result.contingencyPercentage}% contingency)
            </p>
          )}
        </div>

        <Separator className="my-4" />

        <div className="space-y-2 text-sm">
          <h4 className="font-medium text-gray-700">Cost Breakdown</h4>
          <div className="flex items-center justify-between">
            <span className="text-aliceBlue">Base renovation cost</span>
            <span className="font-medium text-gray-700">
              $
              {result.baseRenovationCost.toLocaleString("en-US", {
                minimumFractionDigits: 0,
                maximumFractionDigits: 0,
              })}
            </span>
          </div>
          {result.hasContingency && (
            <div className="flex items-center justify-between">
              <span className="text-aliceBlue">Contingency amount</span>
              <span className="font-medium text-gray-700">
                $
                {result.contingencyAmount.toLocaleString("en-US", {
                  minimumFractionDigits: 0,
                  maximumFractionDigits: 0,
                })}
              </span>
            </div>
          )}
          <div className="flex items-center justify-between border-t border-gray-100 pt-2">
            <span className="font-medium">Total estimated cost</span>
            <span className="font-bold text-green-600">
              $
              {result.totalRenovationCost.toLocaleString("en-US", {
                minimumFractionDigits: 0,
                maximumFractionDigits: 0,
              })}
            </span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="bg-primary/5 border-primary/20 flex justify-center border-t">
        <p className="text-center text-xs text-gray-500">
          This estimate is based on the provided inputs and industry averages.
          Actual costs may vary based on specific materials, labor rates, and
          unforeseen conditions.
        </p>
      </CardFooter>
    </Card>
  );
}
