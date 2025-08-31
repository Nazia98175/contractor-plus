import { Card, CardContent, CardHeader, CardTitle } from "../../ui/card";
import { Separator } from "../../ui/separator";
import { Button } from "../../ui/button";

interface CalculationResultProps {
  calculationResult: {
    markedUpPrice: number;
    taxAmount: number;
    finalPrice: number;
    profit: number;
    hasTax: boolean;
    taxRate: number;
  } | null;
}

export function CalculationResult({
  calculationResult,
}: CalculationResultProps) {
  if (!calculationResult) {
    return (
      <div className="py-6 text-center">
        <p className="text-muted-foreground">
          Enter values and calculate to see results
        </p>
      </div>
    );
  }

  const { markedUpPrice, taxAmount, finalPrice, profit, hasTax, taxRate } =
    calculationResult;

  return (
    <div className="space-y-4">
      {/* Marked-up Price */}
      <div className="space-y-1">
        <p className="text-muted-foreground text-sm">
          Selling Price (before tax)
        </p>
        <p className="text-3xl font-bold text-red-500">
          ${markedUpPrice.toFixed(2)}
        </p>
      </div>

      <Separator />

      {/* Price with Tax (if applicable) */}
      {hasTax && (
        <div className="space-y-1">
          <p className="text-muted-foreground text-sm">Price including tax</p>
          <p className="text-2xl font-semibold">
            ${finalPrice.toFixed(2)}{" "}
            <span className="text-muted-foreground text-sm">
              (at {taxRate}% tax)
            </span>
          </p>
        </div>
      )}

      <Separator />

      {/* Profit */}
      <div className="space-y-1">
        <p className="text-muted-foreground text-sm">Your Profit</p>
        <p className="text-2xl font-semibold text-green-600">
          ${profit.toFixed(2)}
        </p>
      </div>
    </div>
  );
}

export function ResultsPanel({ calculationResult }: CalculationResultProps) {
  return (
    <div>
      <Card className="border-primary/20 shadow-md">
        <CardHeader className="bg-gradient-to-r from-red-500 to-red-600 text-white">
          <CardTitle className="text-lg">Calculation Results</CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <CalculationResult calculationResult={calculationResult} />
        </CardContent>
      </Card>

      {/* CTA */}
      <Card className="border-primary/10 mt-4 border bg-gray-50">
        <CardContent className="p-4">
          <h3 className="mb-2 text-lg font-semibold">
            Ready to grow your HVAC business?
          </h3>
          <p className="text-muted-foreground mb-4 text-sm">
            Don't leave money on the table with parts pricing. Use Contractor+
            to manage your HVAC parts inventory, apply consistent markups, and
            generate professional quotes and invoices that keep your margins
            healthy.
          </p>
          <Button className="w-full bg-red-500 text-white hover:bg-red-600">
            Try Contractor Plus
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
