import React, { useState } from "react";
import { Card, CardContent, CardDescription } from "../../ui/card";
import { Input } from "../../ui/input";
import { Label } from "../../ui/label";
import { Button } from "../../ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../../ui/tooltip";
import { HelpCircle } from "lucide-react";

interface CalculatorFormProps {
  onCalculate: (values: {
    length: number;
    width: number;
    depth: number;
    costPerYard: number;
  }) => void;
}

export function CalculatorForm({ onCalculate }: CalculatorFormProps) {
  const [length, setLength] = useState<number | "">("");
  const [width, setWidth] = useState<number | "">("");
  const [depth, setDepth] = useState<number | "">("");
  const [costPerYard, setCostPerYard] = useState<number | "">("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Convert empty strings to 0
    const lengthValue = length === "" ? 0 : Number(length);
    const widthValue = width === "" ? 0 : Number(width);
    const depthValue = depth === "" ? 0 : Number(depth);
    const costPerYardValue = costPerYard === "" ? 0 : Number(costPerYard);

    onCalculate({
      length: lengthValue,
      width: widthValue,
      depth: depthValue,
      costPerYard: costPerYardValue,
    });
  };

  return (
    <Card>
      <CardContent className="pt-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Label htmlFor="length">Excavation Length (ft)</Label>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button variant="ghost" className="h-auto px-0 py-0">
                          <HelpCircle className="text-aliceBlue h-4 w-4" />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent className="max-w-xs">
                        The length of the hole or trench to be excavated, in
                        feet. For example, if you're digging out a foundation
                        that's 30 feet long, enter 30.
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
                <Input
                  id="length"
                  type="number"
                  placeholder="e.g. 30"
                  value={length}
                  onChange={(e) =>
                    setLength(
                      e.target.value === "" ? "" : Number(e.target.value),
                    )
                  }
                  min="0"
                  step="0.1"
                />
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Label htmlFor="width">Excavation Width (ft)</Label>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button variant="ghost" className="h-auto px-0 py-0">
                          <HelpCircle className="text-aliceBlue h-4 w-4" />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent className="max-w-xs">
                        The width of the excavation area in feet. For instance,
                        if the foundation hole is 20 feet wide, enter 20. If
                        digging a trench, width might be the trench width.
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
                <Input
                  id="width"
                  type="number"
                  placeholder="e.g. 20"
                  value={width}
                  onChange={(e) =>
                    setWidth(
                      e.target.value === "" ? "" : Number(e.target.value),
                    )
                  }
                  min="0"
                  step="0.1"
                />
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Label htmlFor="depth">Excavation Depth (ft)</Label>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button variant="ghost" className="h-auto px-0 py-0">
                          <HelpCircle className="text-aliceBlue h-4 w-4" />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent className="max-w-xs">
                        How deep down you need to excavate, in feet. E.g., a
                        5-foot deep hole. If uneven depth, use an average depth.
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
                <Input
                  id="depth"
                  type="number"
                  placeholder="e.g. 5"
                  value={depth}
                  onChange={(e) =>
                    setDepth(
                      e.target.value === "" ? "" : Number(e.target.value),
                    )
                  }
                  min="0"
                  step="0.1"
                />
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Label htmlFor="costPerYard">Cost per Cubic Yard ($)</Label>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button variant="ghost" className="h-auto px-0 py-0">
                          <HelpCircle className="text-aliceBlue h-4 w-4" />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent className="max-w-xs">
                        The rate you charge (or cost you incur) per cubic yard
                        of earth excavated. This should include the equipment,
                        labor to dig, and possibly hauling off the soil. For
                        example, $50 per cubic yard.
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
                <Input
                  id="costPerYard"
                  type="number"
                  placeholder="e.g. 50"
                  value={costPerYard}
                  onChange={(e) =>
                    setCostPerYard(
                      e.target.value === "" ? "" : Number(e.target.value),
                    )
                  }
                  min="0"
                  step="0.01"
                />
              </div>
            </div>
          </div>

          <Button type="submit" className="w-full">
            Calculate Excavation Costs
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
