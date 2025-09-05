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
    <Card className="border-shutter mb-6 border-2 shadow-md">
      <CardHeader className="bg-gradient-to-r from-red-500 to-red-600">
        <CardTitle className="flex items-center text-lg text-white">
          <Fan className="text-primary mr-2 h-5 w-5" />
          Calculation Results
        </CardTitle>
      </CardHeader>
      <CardContent className="py-6">
        <div className="mb-6 text-center">
          <h3 className="text-alice text-lg font-medium">Required Airflow</h3>
          <p className="text-primary my-2 text-4xl font-bold">
            {result.cfm.toFixed(2)} CFM
          </p>
          <p className="text-aliceBlue mt-2 text-sm">
            (~{result.cubicMetersPerHour.toFixed(2)} m³/hour)
          </p>
        </div>

        <Separator className="my-4" />

        <div className="space-y-3 text-sm">
          <h4 className="text-alice font-medium">What This Means</h4>
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
