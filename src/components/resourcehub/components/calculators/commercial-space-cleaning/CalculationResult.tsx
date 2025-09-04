import { Card, CardContent, CardDescription } from "../../ui/card";
import { Circle, Building } from "lucide-react";

interface CalculationResultProps {
  result: {
    baseCleaningCost: number;
    restroomCost: number;
    additionalServicesCost: number;
    totalCost: number;
    numberOfRestrooms: number;
  };
}

export function CalculationResult({ result }: CalculationResultProps) {
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(value);
  };

  return (
    <Card className="border-stiletto bg-shutter h-full border shadow-sm">
      <CardContent className="p-6">
        <div className="mb-4 flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-100">
            <Building className="h-5 w-5 text-red-500" />
          </div>
          <h3 className="text-xl font-semibold">Cleaning Cost Estimate</h3>
        </div>

        <div className="space-y-4">
          <div className="border-stiletto flex flex-col rounded-md border p-4">
            <div className="border-stiletto mb-3 flex justify-between border-b pb-2">
              <span className="text-alice font-medium">
                Base Cleaning Cost:
              </span>
              <span className="font-semibold">
                {formatCurrency(result.baseCleaningCost)}
              </span>
            </div>

            {result.restroomCost > 0 && (
              <div className="border-stiletto mb-3 flex justify-between border-b pb-2">
                <span className="text-alice font-medium">
                  Restroom Services:
                </span>
                <span className="font-semibold">
                  {formatCurrency(result.restroomCost)}
                </span>
              </div>
            )}

            {result.additionalServicesCost > 0 && (
              <div className="border-stiletto mb-3 flex justify-between border-b pb-2">
                <span className="text-alice font-medium">
                  Additional Services:
                </span>
                <span className="font-semibold">
                  {formatCurrency(result.additionalServicesCost)}
                </span>
              </div>
            )}

            <div className="flex justify-between pt-1">
              <span className="font-bold">Total Cost:</span>
              <span className="text-xl font-bold text-red-500">
                {formatCurrency(result.totalCost)}
              </span>
            </div>
          </div>

          <div className="border-stiletto rounded-md border p-4">
            <h4 className="text-alice mb-2 font-medium">Details</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <Circle
                  className="mt-1 h-4 w-4 flex-shrink-0 text-red-500"
                  fill="currentColor"
                />
                <span>
                  This estimate includes cleaning of the entire facility based
                  on a rate of{" "}
                  {formatCurrency(
                    result.baseCleaningCost /
                      (result.totalCost -
                        result.additionalServicesCost -
                        result.restroomCost >
                      0
                        ? result.totalCost -
                          result.additionalServicesCost -
                          result.restroomCost
                        : 1),
                  )}{" "}
                  per square foot.
                </span>
              </li>

              {result.restroomCost > 0 && (
                <li className="flex items-start gap-2">
                  <Circle
                    className="mt-1 h-4 w-4 flex-shrink-0 text-red-500"
                    fill="currentColor"
                  />
                  <span>
                    Includes {formatCurrency(result.restroomCost)} for{" "}
                    {result.numberOfRestrooms} restroom
                    {result.numberOfRestrooms !== 1 ? "s" : ""}.
                  </span>
                </li>
              )}

              {result.additionalServicesCost > 0 && (
                <li className="flex items-start gap-2">
                  <Circle
                    className="mt-1 h-4 w-4 flex-shrink-0 text-red-500"
                    fill="currentColor"
                  />
                  <span>
                    Additional services add{" "}
                    {formatCurrency(result.additionalServicesCost)} to the total
                    cost.
                  </span>
                </li>
              )}
            </ul>
          </div>

          <div className="border-stiletto rounded-md border p-4">
            <p className="text-sm">
              This estimate can be adjusted based on cleaning frequency, special
              requirements, or seasonal factors. For recurring service
              contracts, consider offering a discount.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
