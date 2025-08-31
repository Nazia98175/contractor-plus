import { Card, CardDescription } from "../../ui/card";
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
    <Card className="border border-gray-200 bg-white shadow-sm">
      <CardContent className="p-6">
        <div className="mb-6 text-center">
          <h3 className="text-lg font-medium text-gray-700">
            Woodwork Project Pricing
          </h3>
          <p className="my-2 text-4xl font-bold text-red-600">
            $
            {result.totalPrice.toLocaleString("en-US", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </p>
        </div>

        <Separator className="my-4" />

        <div className="space-y-3 text-sm">
          <h4 className="font-medium text-gray-700">Cost Breakdown</h4>

          <div className="flex items-center justify-between">
            <span className="text-muted-foreground">Materials</span>
            <span className="font-medium text-gray-700">
              $
              {result.materialsTotal.toLocaleString("en-US", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-muted-foreground">Labor</span>
            <span className="font-medium text-gray-700">
              $
              {result.laborCost.toLocaleString("en-US", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-muted-foreground">Other Costs</span>
            <span className="font-medium text-gray-700">
              $
              {result.otherCosts.toLocaleString("en-US", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </span>
          </div>

          <div className="flex items-center justify-between border-t border-gray-100 pt-1">
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
            <span className="text-muted-foreground">
              Profit ({result.markupPercentage}%)
            </span>
            <span className="font-medium text-gray-700">
              $
              {result.profit.toLocaleString("en-US", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </span>
          </div>

          <div className="flex items-center justify-between border-t border-gray-100 pt-2">
            <span className="font-medium">Total Price</span>
            <span className="font-bold text-red-600">
              $
              {result.totalPrice.toLocaleString("en-US", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </span>
          </div>
        </div>

        <div className="mt-4 border-t border-gray-200 pt-4">
          <p className="text-center text-xs text-gray-500">
            This estimate is based on the provided inputs. Make sure to account
            for any unique project requirements that might affect final pricing.
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
