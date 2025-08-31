import { Card, CardContent, CardHeader, CardTitle } from "../../ui/card";

interface CalculationResultProps {
  result: {
    volumeCubicFeet: number;
    volumeCubicYards: number;
    cost: number;
  } | null;
}

export function CalculationResult({ result }: CalculationResultProps) {
  if (!result) return null;

  const { volumeCubicFeet, volumeCubicYards, cost } = result;

  // Format the results with appropriate decimal places
  const formattedVolumeCubicYards = volumeCubicYards.toFixed(1);
  const formattedCost = cost.toFixed(0);

  return (
    <Card className="border-red-100 bg-red-50">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">Excavation Result</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <h3 className="text-muted-foreground mb-1 text-sm font-medium">
                Excavation Volume:
              </h3>
              <p className="text-2xl font-semibold">
                {formattedVolumeCubicYards} cubic yards
              </p>
              <p className="text-muted-foreground mt-1 text-sm">
                ({volumeCubicFeet.toFixed(1)} cubic feet)
              </p>
            </div>
            <div>
              <h3 className="text-muted-foreground mb-1 text-sm font-medium">
                Estimated Excavation Cost:
              </h3>
              <p className="text-2xl font-semibold">
                ${new Intl.NumberFormat().format(parseInt(formattedCost))}
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
