import { Card, CardDescription } from "../../ui/card";
import { Separator } from "../../ui/separator";
import { Button } from "../../ui/button";

interface CalculationResultProps {
  result: {
    annualCostPerElevator: number;
    totalAnnualCost: number;
    numberOfElevators: number;
    serviceVisitsPerYear: number;
    costPerVisit: number;
    additionalAnnualCost: number;
  };
}

export function CalculationResult({ result }: CalculationResultProps) {
  return (
    <Card className="border border-gray-200 bg-white shadow-sm">
      <CardContent className="p-6">
        <div className="mb-6 text-center">
          <h3 className="text-lg font-medium text-gray-700">
            Estimated Annual Costs
          </h3>
          <p className="my-2 text-4xl font-bold text-red-600">
            $
            {result.totalAnnualCost.toLocaleString("en-US", {
              minimumFractionDigits: 0,
              maximumFractionDigits: 0,
            })}
          </p>
          <p className="text-aliceBlue text-sm">
            Total Annual Maintenance Contract
          </p>
        </div>

        <Separator className="my-4" />

        <div className="space-y-3 text-sm">
          <h4 className="font-medium text-gray-700">Cost Breakdown</h4>

          <div className="flex items-center justify-between">
            <span className="text-aliceBlue">Elevators</span>
            <span className="font-medium text-gray-700">
              {result.numberOfElevators}
            </span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-aliceBlue">Service Visits per Year</span>
            <span className="font-medium text-gray-700">
              {result.serviceVisitsPerYear}
            </span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-aliceBlue">Cost per Visit</span>
            <span className="font-medium text-gray-700">
              $
              {result.costPerVisit.toLocaleString("en-US", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </span>
          </div>

          {result.additionalAnnualCost > 0 && (
            <div className="flex items-center justify-between">
              <span className="text-aliceBlue">Additional Annual Cost</span>
              <span className="font-medium text-gray-700">
                $
                {result.additionalAnnualCost.toLocaleString("en-US", {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </span>
            </div>
          )}

          <div className="flex items-center justify-between border-t border-gray-100 pt-2">
            <span className="font-medium">Annual Cost per Elevator</span>
            <span className="font-bold text-gray-700">
              $
              {result.annualCostPerElevator.toLocaleString("en-US", {
                minimumFractionDigits: 0,
                maximumFractionDigits: 0,
              })}
            </span>
          </div>

          <div className="flex items-center justify-between border-t border-gray-100 pt-2">
            <span className="font-medium">Total Annual Cost</span>
            <span className="font-bold text-red-600">
              $
              {result.totalAnnualCost.toLocaleString("en-US", {
                minimumFractionDigits: 0,
                maximumFractionDigits: 0,
              })}
            </span>
          </div>
        </div>

        <div className="mt-6 border-t border-gray-200 pt-4">
          <Button className="w-full bg-red-500 text-white hover:bg-red-600">
            Try Contractor+
          </Button>

          <p className="mt-3 text-center text-xs text-gray-500">
            This calculation provides an estimated annual cost based on the
            specified inputs. Actual maintenance contracts may include other
            variables.
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
