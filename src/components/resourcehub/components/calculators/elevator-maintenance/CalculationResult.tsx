import { Card, CardContent, CardDescription } from "../../ui/card";
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
    <Card className="border-stiletto bg-shutter border shadow-sm">
      <CardContent className="py-6">
        <div className="mb-6 text-center">
          <h3 className="text-alice text-lg font-medium">
            Estimated Annual Costs
          </h3>
          <p className="my-2 text-4xl font-bold text-red-500">
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
          <h4 className="text-alice font-medium">Cost Breakdown</h4>

          <div className="flex items-center justify-between">
            <span className="text-aliceBlue">Elevators</span>
            <span className="text-alice font-medium">
              {result.numberOfElevators}
            </span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-aliceBlue">Service Visits per Year</span>
            <span className="text-alice font-medium">
              {result.serviceVisitsPerYear}
            </span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-aliceBlue">Cost per Visit</span>
            <span className="text-alice font-medium">
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
              <span className="text-alice font-medium">
                $
                {result.additionalAnnualCost.toLocaleString("en-US", {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </span>
            </div>
          )}

          <div className="border-decemberSky flex items-center justify-between border-t pt-2">
            <span className="font-medium">Annual Cost per Elevator</span>
            <span className="font-bold">
              $
              {result.annualCostPerElevator.toLocaleString("en-US", {
                minimumFractionDigits: 0,
                maximumFractionDigits: 0,
              })}
            </span>
          </div>

          <div className="border-decemberSky flex items-center justify-between border-t pt-2">
            <span className="font-medium">Total Annual Cost</span>
            <span className="font-bold text-red-500">
              $
              {result.totalAnnualCost.toLocaleString("en-US", {
                minimumFractionDigits: 0,
                maximumFractionDigits: 0,
              })}
            </span>
          </div>
        </div>

        <div className="border-decemberSky mt-6 border-t pt-4">
          <Button className="w-full bg-red-500 text-white hover:bg-red-600">
            Try Contractor+
          </Button>

          <p className="text-decemberSky mt-3 text-center text-xs">
            This calculation provides an estimated annual cost based on the
            specified inputs. Actual maintenance contracts may include other
            variables.
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
