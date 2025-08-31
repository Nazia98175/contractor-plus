import { Card, CardContent, CardHeader, CardTitle } from "../../ui/card";
import { Snowflake } from "lucide-react";

interface SnowRemovalResult {
  baseRate: number;
  extraCost: number;
  totalCharge: number;
  overageInches: number;
  includedDepth: number;
}

interface CalculationResultProps {
  result: SnowRemovalResult;
}

export function CalculationResult({ result }: CalculationResultProps) {
  const { baseRate, extraCost, totalCharge, overageInches, includedDepth } =
    result;

  // Format currency
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 2,
    }).format(amount);
  };

  return (
    <Card className="h-full border border-gray-200 bg-white shadow-sm">
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center gap-2 text-xl">
          <Snowflake className="h-5 w-5 text-blue-500" />
          Snow Removal Price Estimate
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-4">
        <div className="space-y-6">
          <div className="grid gap-4">
            <div className="rounded-lg border border-gray-100 bg-gray-50 p-4">
              <div className="mb-1 flex items-center justify-between text-sm text-gray-600">
                <span>Base Rate:</span>
                <span className="font-medium">{formatCurrency(baseRate)}</span>
              </div>

              {extraCost > 0 && (
                <div className="mb-1 flex items-center justify-between text-sm text-gray-600">
                  <span>
                    Extra Cost ({overageInches.toFixed(1)} inches over{" "}
                    {includedDepth} inches):
                  </span>
                  <span className="font-medium">
                    {formatCurrency(extraCost)}
                  </span>
                </div>
              )}

              <div className="my-2 border-t border-gray-200"></div>

              <div className="text-md mt-2 flex items-center justify-between font-semibold">
                <span>Total Charge:</span>
                <span className="text-xl font-bold text-red-600">
                  {formatCurrency(totalCharge)}
                </span>
              </div>
            </div>
          </div>

          <div className="rounded-lg border border-blue-100 bg-blue-50 p-4">
            <h4 className="mb-2 font-medium text-blue-800">
              Pricing Breakdown
            </h4>
            <ul className="space-y-1 text-sm text-gray-700">
              <li className="flex justify-between">
                <span>Base Snow Removal Up To {includedDepth} inches:</span>
                <span>{formatCurrency(baseRate)}</span>
              </li>
              {extraCost > 0 ? (
                <li className="flex justify-between">
                  <span>
                    Additional Snow ({overageInches.toFixed(1)} inches @{" "}
                    {formatCurrency(result.extraCost / overageInches)}/inch):
                  </span>
                  <span>{formatCurrency(extraCost)}</span>
                </li>
              ) : (
                <li className="flex justify-between text-gray-500 italic">
                  <span>No additional charges (snowfall within base rate)</span>
                </li>
              )}
            </ul>
          </div>

          <div className="rounded-lg border border-red-100 bg-red-50 p-4">
            <div className="flex items-start gap-2">
              <Snowflake className="mt-0.5 h-5 w-5 flex-shrink-0 text-red-600" />
              <p className="text-sm text-gray-700">
                Keep your winter income predictable. Use Contractor+ to manage
                your snow removal contracts – from calculating fair prices for
                monster snowfalls to scheduling recurring plow routes.
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
