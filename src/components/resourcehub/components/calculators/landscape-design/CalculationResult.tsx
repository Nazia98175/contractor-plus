import { Card, CardContent, CardHeader, CardTitle } from "../../ui/card";
import { Separator } from "../../ui/separator";
import { Flower } from "lucide-react";

interface CalculationResultProps {
  result: {
    installationCost: number;
    designFee: number;
    additionalCosts: number;
    totalCost: number;
  };
}

export function CalculationResult({ result }: CalculationResultProps) {
  // Format numbers as currency
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <Card className="border-primary/20 border-2 bg-white shadow-md">
      <CardHeader className="bg-primary/5 border-primary/20 border-b">
        <CardTitle className="text-primary/90 flex items-center text-lg">
          <Flower className="text-primary mr-2 h-5 w-5" />
          Landscape Cost Estimate
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1">
              <p className="text-aliceBlue text-sm">Installation Cost</p>
              <p className="text-lg font-medium">
                {formatCurrency(result.installationCost)}
              </p>
            </div>
            {result.designFee > 0 && (
              <div className="space-y-1">
                <p className="text-aliceBlue text-sm">Design Fee</p>
                <p className="text-lg font-medium">
                  {formatCurrency(result.designFee)}
                </p>
              </div>
            )}
            {result.additionalCosts > 0 && (
              <div className="space-y-1">
                <p className="text-aliceBlue text-sm">Additional Features</p>
                <p className="text-lg font-medium">
                  {formatCurrency(result.additionalCosts)}
                </p>
              </div>
            )}
          </div>

          <Separator className="my-4" />

          <div className="space-y-1 text-center">
            <p className="text-aliceBlue text-sm font-medium">
              Total Landscape Project Cost
            </p>
            <p className="text-primary text-3xl font-bold">
              {formatCurrency(result.totalCost)}
            </p>
          </div>

          <div className="text-aliceBlue mt-4 text-sm">
            <p>
              This estimate includes the installation costs based on square
              footage, design fees, and any additional costs for features like
              fountains, pergolas, or lighting systems.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
