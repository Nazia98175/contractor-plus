import { Card, CardContent } from "../../ui/card";
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
      <CardContent className="py-6">
        <div className="text-center">
          <h3 className="text-alice text-lg font-medium">
            Roof Area Estimation
          </h3>
          <p className="my-2 text-4xl font-bold text-red-500">
            {result.roofArea.toLocaleString()} sq ft
          </p>
          <p className="text-alice text-lg font-medium">
            {result.roundedSquares} squares
          </p>
        </div>

        <Separator className="my-4" />

        <div className="space-y-3 text-sm">
          <h4 className="text-alice font-medium">Calculation Details</h4>

          <div className="flex items-center justify-between">
            <span className="text-aliceBlue">Building Footprint</span>
            <span className="text-alice font-medium">
              {result.footprintArea.toLocaleString()} sq ft
            </span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-aliceBlue">Pitch Factor</span>
            <span className="text-alice font-medium">
              {result.pitchFactor.toFixed(3)}
            </span>
          </div>

          <div className="border-decemberSky flex items-center justify-between border-t pt-2">
            <span className="font-medium">Roof Area</span>
            <span className="font-bold text-red-500">
              {result.roofArea.toLocaleString()} sq ft
            </span>
          </div>

          <div className="flex items-center justify-between">
            <span className="font-medium">Roofing Squares</span>
            <span className="text-alice font-medium">
              {result.roofSquares.toFixed(1)} squares
            </span>
          </div>
        </div>

        <div className="border-decemberSky mt-4 border-t pt-4">
          <p className="text-decemberSky text-center text-xs">
            For ordering materials, round up to {result.roundedSquares} squares
            to ensure you have enough materials to complete the job.
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
