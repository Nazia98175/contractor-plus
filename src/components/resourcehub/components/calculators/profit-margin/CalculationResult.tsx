import { TrendingUp } from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../ui/card";
import { Separator } from "../../ui/separator";

interface CalculationResultProps {
  result: {
    profit: number;
    marginPercent: number;
    isLoss: boolean;
  };
}

export function CalculationResult({ result }: CalculationResultProps) {
  return (
    <Card className="border-stiletto bg-shutter mb-6 overflow-hidden border-2 shadow-md">
      <CardHeader className="bg-red-500 text-white">
        <CardTitle className="flex items-center text-lg">
          <TrendingUp className="mr-2 h-5 w-5" />
          Calculation Results
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="mb-6 text-center">
          <h3 className="text-alice text-lg font-medium">Profit Overview</h3>
          <p
            className={`my-2 text-4xl font-bold ${result.isLoss ? "text-red-500" : "text-green-500"}`}
          >
            $
            {result.profit.toLocaleString("en-US", {
              minimumFractionDigits: 0,
              maximumFractionDigits: 0,
            })}
          </p>
          <p
            className={`mt-1 text-xl font-medium ${result.isLoss ? "text-red-500" : "text-green-500"}`}
          >
            {result.marginPercent.toFixed(1)}% Margin
          </p>
          {result.isLoss && (
            <p className="mt-1 text-xs text-red-500">
              Warning: This job will result in a loss
            </p>
          )}
        </div>

        <Separator className="my-4" />

        <div className="space-y-2 text-sm">
          <h4 className="text-alice font-medium">Profit Analysis</h4>
          <div className="flex items-center justify-between">
            <span className="text-aliceBlue">Profit Amount</span>
            <span
              className={`font-medium ${result.isLoss ? "text-red-500" : "text-green-500"}`}
            >
              $
              {result.profit.toLocaleString("en-US", {
                minimumFractionDigits: 0,
                maximumFractionDigits: 0,
              })}
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-aliceBlue">Profit Margin</span>
            <span
              className={`font-medium ${result.isLoss ? "text-red-500" : "text-green-500"}`}
            >
              {result.marginPercent.toFixed(1)}%
            </span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-center border-t border-red-100 bg-red-50">
        <p className="text-decemberSky text-center text-xs">
          {result.isLoss
            ? "This job will result in a loss. Consider adjusting your pricing or reducing costs."
            : "This is an estimate based on your inputs. Track actual costs closely to maintain this margin."}
        </p>
      </CardFooter>
    </Card>
  );
}
