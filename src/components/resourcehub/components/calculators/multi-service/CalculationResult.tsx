import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../../ui/card";

interface Service {
  description: string;
  cost: number;
}

interface CalculationResultProps {
  results: {
    services: Service[];
    subtotal: number;
    markup: number;
    markupAmount: number;
    total: number;
  };
}

export function CalculationResult({ results }: CalculationResultProps) {
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(amount);
  };

  return (
    <Card className="border-prediction">
      <CardHeader className="pb-2">
        <CardTitle className="text-xl text-green-400">
          Multi-Service Job Estimate
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 pb-6">
        <div className="space-y-3">
          <h3 className="font-medium text-green-400">Itemized Services:</h3>
          <div className="text-discoBall rounded-md shadow-sm">
            <div className="space-y-3">
              {results.services.map((service, index) =>
                service.description || service.cost > 0 ? (
                  <div key={index} className="flex justify-between">
                    <span className="text-sm">
                      {service.description || `Service ${index + 1}`}:
                    </span>
                    <span className="font-medium">
                      {formatCurrency(service.cost)}
                    </span>
                  </div>
                ) : null,
              )}
            </div>

            <div className="border-prediction mt-4 border-t pt-4">
              <div className="flex justify-between font-medium">
                <span>Subtotal:</span>
                <span>{formatCurrency(results.subtotal)}</span>
              </div>
            </div>

            {results.markup > 0 && (
              <div className="mt-2">
                <div className="flex justify-between">
                  <span className="text-sm">{`+ ${results.markup}% markup:`}</span>
                  <span className="font-medium">
                    {formatCurrency(results.markupAmount)}
                  </span>
                </div>
              </div>
            )}

            <div className="border-prediction mt-4 border-t pt-4">
              <div className="flex justify-between text-lg font-bold">
                <span>Total Multi-Service Job Cost:</span>
                <span className="text-green-400">
                  {formatCurrency(results.total)}
                </span>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
