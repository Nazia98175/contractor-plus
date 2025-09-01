import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../ui/card";
import { Separator } from "../../ui/separator";
import { Receipt, DollarSign } from "lucide-react";

interface CalculationResultProps {
  result: {
    laborCost: number;
    subtotalCost: number;
    profitAmount: number;
    bidPrice: number;
    profitMargin: number;
  };
}

export function CalculationResult({ result }: CalculationResultProps) {
  return (
    <Card className="border-stiletto bg-shutter mb-6 border-2 shadow-md">
      <CardHeader className="border-b border-red-100 bg-red-50">
        <CardTitle className="flex items-center text-lg text-red-800">
          <Receipt className="mr-2 h-5 w-5 text-red-600" />
          Bid Results
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="mb-6 text-center">
          <h3 className="text-alice text-lg font-medium">
            Suggested Bid Price
          </h3>
          <p className="my-2 text-4xl font-bold text-green-600">
            $
            {result.bidPrice.toLocaleString("en-US", {
              minimumFractionDigits: 0,
              maximumFractionDigits: 0,
            })}
          </p>
          <p className="text-sm text-gray-500">
            With {result.profitMargin.toFixed(1)}% profit margin
          </p>
        </div>

        <Separator className="my-4" />

        <div className="space-y-2 text-sm">
          <h4 className="font-medium text-gray-700">Cost Breakdown</h4>
          <div className="flex items-center justify-between">
            <span className="text-aliceBlue">Labor Cost</span>
            <span className="font-medium text-gray-700">
              $
              {result.laborCost.toLocaleString("en-US", {
                minimumFractionDigits: 0,
                maximumFractionDigits: 0,
              })}
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-aliceBlue">Total Cost (Subtotal)</span>
            <span className="font-medium text-gray-700">
              $
              {result.subtotalCost.toLocaleString("en-US", {
                minimumFractionDigits: 0,
                maximumFractionDigits: 0,
              })}
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-aliceBlue">Profit Added</span>
            <span className="font-medium text-green-600">
              $
              {result.profitAmount.toLocaleString("en-US", {
                minimumFractionDigits: 0,
                maximumFractionDigits: 0,
              })}
            </span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-center border-t border-red-100 bg-red-50">
        <p className="text-center text-xs text-gray-500">
          This is an estimate based on your inputs. Verify all costs before
          submitting your final bid.
        </p>
      </CardFooter>
    </Card>
  );
}
