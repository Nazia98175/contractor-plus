import { Card, CardDescription } from "../../ui/card";
import { Separator } from "../../ui/separator";

interface CalculationResultProps {
  result: {
    volumeGallons: number;
    volumeLiters: number;
    volumeCubicInches: number;
    volumeCubicFeet: number;
    diameter: number;
    diameterUnit: string;
    length: number;
    lengthUnit: string;
  };
}

export function CalculationResult({ result }: CalculationResultProps) {
  return (
    <Card className="border border-gray-200 bg-white shadow-sm">
      <CardContent className="p-6">
        <div className="mb-6 text-center">
          <h3 className="text-lg font-medium text-gray-700">
            Pipe Water Volume
          </h3>
          <p className="my-2 text-4xl font-bold text-red-600">
            {result.volumeGallons.toLocaleString("en-US", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}{" "}
            gallons
          </p>
          <p className="text-lg font-medium text-gray-600">
            {result.volumeLiters.toLocaleString("en-US", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}{" "}
            liters
          </p>
        </div>

        <Separator className="my-4" />

        <div className="space-y-3 text-sm">
          <h4 className="font-medium text-gray-700">Calculation Details</h4>

          <div className="flex items-center justify-between">
            <span className="text-aliceBlue">Pipe Inner Diameter</span>
            <span className="font-medium text-gray-700">
              {result.diameter} {result.diameterUnit}
            </span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-aliceBlue">Pipe Length</span>
            <span className="font-medium text-gray-700">
              {result.length} {result.lengthUnit}
            </span>
          </div>

          <div className="flex items-center justify-between border-t border-gray-100 pt-2">
            <span className="font-medium">Volume (US Gallons)</span>
            <span className="font-bold text-red-600">
              {result.volumeGallons.toLocaleString("en-US", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </span>
          </div>

          <div className="flex items-center justify-between">
            <span className="font-medium">Volume (Liters)</span>
            <span className="font-medium text-gray-700">
              {result.volumeLiters.toLocaleString("en-US", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-aliceBlue">Volume (Cubic Inches)</span>
            <span className="font-medium text-gray-700">
              {result.volumeCubicInches.toLocaleString("en-US", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-aliceBlue">Volume (Cubic Feet)</span>
            <span className="font-medium text-gray-700">
              {result.volumeCubicFeet.toLocaleString("en-US", {
                minimumFractionDigits: 4,
                maximumFractionDigits: 4,
              })}
            </span>
          </div>
        </div>

        <div className="mt-4 border-t border-gray-200 pt-4">
          <p className="text-center text-xs text-gray-500">
            This calculation represents the volume of water the pipe can hold
            when completely full. Actual capacity may vary based on fittings,
            valves, and other factors.
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
