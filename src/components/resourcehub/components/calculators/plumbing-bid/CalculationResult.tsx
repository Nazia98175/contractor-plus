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
    <Card className="border-stiletto mb-6 border shadow-md">
      <CardHeader className="bg-gradient-to-r from-red-500 to-red-600">
        <CardTitle className="flex items-center text-lg text-white">
          <Receipt className="mr-2 h-5 w-5" />
          Bid Results
        </CardTitle>
      </CardHeader>
      <CardContent className="py-6">
        <div className="mb-6 text-center">
          <h3 className="text-alice text-lg font-medium">
            Suggested Bid Price
          </h3>
          <p className="my-2 text-4xl font-bold text-green-500">
            $
            {result.bidPrice.toLocaleString("en-US", {
              minimumFractionDigits: 0,
              maximumFractionDigits: 0,
            })}
          </p>
          <p className="text-sm text-gray-300">
            With {result.profitMargin.toFixed(1)}% profit margin
          </p>
        </div>

        <Separator className="my-4" />

        <div className="space-y-3 text-sm">
          <h4 className="text-alice font-medium">Cost Breakdown</h4>
          <div className="flex items-center justify-between">
            <span className="text-aliceBlue">Labor Cost</span>
            <span className="text-alice font-medium">
              $
              {result.laborCost.toLocaleString("en-US", {
                minimumFractionDigits: 0,
                maximumFractionDigits: 0,
              })}
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-aliceBlue">Total Cost (Subtotal)</span>
            <span className="text-alice font-medium">
              $
              {result.subtotalCost.toLocaleString("en-US", {
                minimumFractionDigits: 0,
                maximumFractionDigits: 0,
              })}
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-aliceBlue">Profit Added</span>
            <span className="font-medium text-green-400">
              $
              {result.profitAmount.toLocaleString("en-US", {
                minimumFractionDigits: 0,
                maximumFractionDigits: 0,
              })}
            </span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="border-stiletto flex justify-center border-t">
        <p className="text-decemberSky text-center text-xs">
          This is an estimate based on your inputs. Verify all costs before
          submitting your final bid.
        </p>
      </CardFooter>
    </Card>
  );
}
