import { Card, CardContent, CardDescription } from "../../ui/card";
import { Separator } from "../../ui/separator";

interface CalculationResultProps {
  result: {
    materialsTotal: number;
    laborCost: number;
    otherCosts: number;
    subtotal: number;
    profit: number;
    totalPrice: number;
    markupPercentage: number;
  };
}

export function CalculationResult({ result }: CalculationResultProps) {
  return (
    <Card className="border-stiletto bg-shutter border shadow-sm">
      <CardContent className="p-6">
        <div className="mb-6 text-center">
          <h3 className="text-alice text-lg font-medium">
            Woodwork Project Pricing
          </h3>
          <p className="my-2 text-4xl font-bold text-red-500">
            $
            {result.totalPrice.toLocaleString("en-US", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </p>
        </div>

        <Separator className="my-4" />

        <div className="space-y-3 text-sm">
          <h4 className="text-alice font-medium">Cost Breakdown</h4>

          <div className="flex items-center justify-between">
            <span className="text-aliceBlue">Materials</span>
            <span className="text-alice font-medium">
              $
              {result.materialsTotal.toLocaleString("en-US", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-aliceBlue">Labor</span>
            <span className="text-alice font-medium">
              $
              {result.laborCost.toLocaleString("en-US", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-aliceBlue">Other Costs</span>
            <span className="text-alice font-medium">
              $
              {result.otherCosts.toLocaleString("en-US", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </span>
          </div>

          <div className="border-decemberSky flex items-center justify-between border-t pt-1">
            <span className="font-medium">Subtotal</span>
            <span className="font-medium">
              $
              {result.subtotal.toLocaleString("en-US", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-aliceBlue">
              Profit ({result.markupPercentage}%)
            </span>
            <span className="text-alice font-medium">
              $
              {result.profit.toLocaleString("en-US", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </span>
          </div>

          <div className="border-decemberSky flex items-center justify-between border-t pt-2">
            <span className="font-medium">Total Price</span>
            <span className="font-bold text-red-500">
              $
              {result.totalPrice.toLocaleString("en-US", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </span>
          </div>
        </div>

        <div className="border-decemberSky mt-4 border-t pt-4">
          <p className="text-decemberSky text-center text-xs">
            This estimate is based on the provided inputs. Make sure to account
            for any unique project requirements that might affect final pricing.
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
