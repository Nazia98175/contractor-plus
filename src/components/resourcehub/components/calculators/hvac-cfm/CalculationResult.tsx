import { Card, CardContent, CardHeader, CardTitle } from "../../ui/card";
import { Separator } from "../../ui/separator";
import { Fan } from "lucide-react";

interface CalculationResultProps {
  result: {
    cfm: number;
    cubicMetersPerHour: number;
  };
}

export function CalculationResult({ result }: CalculationResultProps) {
  return (
    <Card className="border-primary/20 mb-6 border-2 bg-white shadow-md">
      <CardHeader className="bg-primary/5 border-primary/20 border-b">
        <CardTitle className="text-primary/90 flex items-center text-lg">
          <Fan className="text-primary mr-2 h-5 w-5" />
          Calculation Results
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="mb-6 text-center">
          <h3 className="text-lg font-medium text-gray-600">
            Required Airflow
          </h3>
          <p className="text-primary my-2 text-4xl font-bold">
            {result.cfm.toFixed(2)} CFM
          </p>
          <p className="text-aliceBlue mt-2 text-sm">
            (~{result.cubicMetersPerHour.toFixed(2)} m³/hour)
          </p>
        </div>

        <Separator className="my-4" />

        <div className="space-y-2 text-sm">
          <h4 className="font-medium text-gray-700">What This Means</h4>
          <p className="text-aliceBlue">
            You need an HVAC system or ventilation fan that can supply
            approximately {result.cfm.toFixed(0)} CFM to properly ventilate this
            room.
          </p>
          <p className="text-aliceBlue mt-2">
            This calculation is based on standard air changes per hour for your
            room size.
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
