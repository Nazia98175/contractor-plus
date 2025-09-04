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
    <Card className="border-stiletto bg-shutter mb-6 border-2 shadow-md">
      <CardHeader className="border-stiletto border-b">
        <CardTitle className="text-primary/90 flex items-center text-lg">
          <Building className="text-primary mr-2 h-5 w-5" />
          Renovation Cost Estimate
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="mb-6 text-center">
          <h3 className="text-alice text-lg font-medium">
            Estimated Renovation Cost
          </h3>
          <p className="my-2 text-4xl font-bold text-green-500">
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
          <h4 className="font-medium">Cost Breakdown</h4>
          <div className="flex items-center justify-between">
            <span className="text-aliceBlue">Base renovation cost</span>
            <span className="font-medium">
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
              <span className="font-medium">
                $
                {result.contingencyAmount.toLocaleString("en-US", {
                  minimumFractionDigits: 0,
                  maximumFractionDigits: 0,
                })}
              </span>
            </div>
          )}
          <div className="border-stiletto flex items-center justify-between border-t pt-2">
            <span className="font-medium">Total estimated cost</span>
            <span className="font-bold text-green-500">
              $
              {result.totalRenovationCost.toLocaleString("en-US", {
                minimumFractionDigits: 0,
                maximumFractionDigits: 0,
              })}
            </span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="bg-primary/5 border-shutter flex justify-center border-t">
        <p className="text-decemberSky text-center text-xs">
          This estimate is based on the provided inputs and industry averages.
          Actual costs may vary based on specific materials, labor rates, and
          unforeseen conditions.
        </p>
      </CardFooter>
    </Card>
  );
}
