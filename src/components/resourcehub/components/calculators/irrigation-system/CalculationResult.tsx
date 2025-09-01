import React from "react";
import { Card, CardContent, CardHeader } from "../../ui/card";
import { Separator } from "../../ui/separator";
import { Droplet, Info } from "lucide-react";

interface CalculationResultProps {
  result: {
    sprinklerHeadCost: number;
    pipeCost: number;
    valveCost: number;
    additionalMaterialsCost: number;
    totalCost: number;
    sprinklerHeadCount: number;
    pipeLength: number;
    zoneCount: number;
  };
}

export function CalculationResult({ result }: CalculationResultProps) {
  const {
    sprinklerHeadCost,
    pipeCost,
    valveCost,
    additionalMaterialsCost,
    totalCost,
    sprinklerHeadCount,
    pipeLength,
    zoneCount,
  } = result;

  return (
    <Card className="h-full border border-gray-200 bg-white shadow-sm">
      <CardHeader className="border-b border-gray-200 bg-white pt-6 pb-2">
        <h2 className="flex items-center gap-2 text-lg font-medium">
          <Droplet className="h-5 w-5 text-red-600" />
          <span>Irrigation Material Cost Estimate</span>
        </h2>
      </CardHeader>
      <CardContent className="pt-6 pb-6">
        <div className="space-y-6">
          <div>
            <h3 className="text-aliceBlue mb-4 text-sm font-medium">
              MATERIAL COST BREAKDOWN
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center justify-between">
                <span className="text-sm font-medium">Sprinkler Heads:</span>
                <span className="text-sm font-semibold">
                  ${sprinklerHeadCost.toFixed(0)} ({sprinklerHeadCount} heads)
                </span>
              </li>
              <li className="flex items-center justify-between">
                <span className="text-sm font-medium">Pipe:</span>
                <span className="text-sm font-semibold">
                  ${pipeCost.toFixed(0)} ({pipeLength} ft)
                </span>
              </li>
              <li className="flex items-center justify-between">
                <span className="text-sm font-medium">Valves:</span>
                <span className="text-sm font-semibold">
                  ${valveCost.toFixed(0)} ({zoneCount} zones)
                </span>
              </li>
              <li className="flex items-center justify-between">
                <span className="text-sm font-medium">Other Materials:</span>
                <span className="text-sm font-semibold">
                  ${additionalMaterialsCost.toFixed(0)}
                </span>
              </li>
            </ul>
          </div>

          <Separator className="my-4" />

          <div className="rounded-md border border-red-100 bg-red-50 p-4">
            <div className="flex items-center justify-between">
              <h3 className="text-base font-semibold">
                Total Irrigation Materials Cost:
              </h3>
              <span className="text-xl font-bold text-red-600">
                ${totalCost.toFixed(0)}
              </span>
            </div>
          </div>

          <div className="rounded-md border border-blue-100 bg-blue-50 p-4">
            <div className="flex gap-2">
              <Info className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-600" />
              <div>
                <h4 className="mb-1 text-sm font-semibold text-blue-700">
                  Note:
                </h4>
                <p className="text-sm text-gray-700">
                  This estimate covers material costs only and does not include
                  labor for installation or trenching. Actual costs may vary
                  based on specific conditions and brand selection.
                </p>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
