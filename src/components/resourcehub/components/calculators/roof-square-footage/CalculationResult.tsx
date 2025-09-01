import { Card, CardDescription } from "../../ui/card";
import { Separator } from "../../ui/separator";

interface CalculationResultProps {
  result: {
    roofArea: number;
    roofSquares: number;
    roundedSquares: number;
    footprintArea: number;
    pitchFactor: number;
  };
}

export function CalculationResult({ result }: CalculationResultProps) {
  return (
    <Card className="border-stiletto bg-shutter border shadow-sm">
      <CardContent className="p-6">
        <div className="mb-6 text-center">
          <h3 className="text-lg font-medium text-gray-700">
            Roof Area Estimation
          </h3>
          <p className="my-2 text-4xl font-bold text-red-600">
            {result.roofArea.toLocaleString()} sq ft
          </p>
          <p className="text-alice text-lg font-medium">
            {result.roundedSquares} squares
          </p>
        </div>

        <Separator className="my-4" />

        <div className="space-y-3 text-sm">
          <h4 className="font-medium text-gray-700">Calculation Details</h4>

          <div className="flex items-center justify-between">
            <span className="text-aliceBlue">Building Footprint</span>
            <span className="font-medium text-gray-700">
              {result.footprintArea.toLocaleString()} sq ft
            </span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-aliceBlue">Pitch Factor</span>
            <span className="font-medium text-gray-700">
              {result.pitchFactor.toFixed(3)}
            </span>
          </div>

          <div className="flex items-center justify-between border-t border-gray-100 pt-2">
            <span className="font-medium">Roof Area</span>
            <span className="font-bold text-red-600">
              {result.roofArea.toLocaleString()} sq ft
            </span>
          </div>

          <div className="flex items-center justify-between">
            <span className="font-medium">Roofing Squares</span>
            <span className="font-medium text-gray-700">
              {result.roofSquares.toFixed(1)} squares
            </span>
          </div>
        </div>

        <div className="mt-4 border-t border-gray-200 pt-4">
          <p className="text-center text-xs text-gray-500">
            For ordering materials, round up to {result.roundedSquares} squares
            to ensure you have enough materials to complete the job.
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
