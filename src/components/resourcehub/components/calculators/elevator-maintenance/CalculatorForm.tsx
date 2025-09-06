import { useState } from "react";
import { Button } from "../../ui/button";
import { Input } from "../../ui/input";
import { Label } from "../../ui/label";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../../ui/tooltip";

interface CalculatorFormProps {
  onCalculate: (data: {
    annualCostPerElevator: number;
    totalAnnualCost: number;
    numberOfElevators: number;
    serviceVisitsPerYear: number;
    costPerVisit: number;
    additionalAnnualCost: number;
  }) => void;
}

export function CalculatorForm({ onCalculate }: CalculatorFormProps) {
  const [numberOfElevators, setNumberOfElevators] = useState<string>("");
  const [serviceVisitsPerYear, setServiceVisitsPerYear] = useState<string>("");
  const [costPerVisit, setCostPerVisit] = useState<string>("");
  const [additionalAnnualCost, setAdditionalAnnualCost] = useState<string>("");
  const [formError, setFormError] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate inputs
    if (!numberOfElevators || !serviceVisitsPerYear || !costPerVisit) {
      setFormError("Please fill out all required fields");
      return;
    }

    // Parse inputs
    const elevators = parseInt(numberOfElevators, 10);
    const visits = parseInt(serviceVisitsPerYear, 10);
    const visitCost = parseFloat(costPerVisit);
    const additionalCost = additionalAnnualCost
      ? parseFloat(additionalAnnualCost)
      : 0;

    // Validate parsed values
    if (
      isNaN(elevators) ||
      elevators <= 0 ||
      isNaN(visits) ||
      visits < 0 ||
      isNaN(visitCost) ||
      visitCost < 0 ||
      isNaN(additionalCost) ||
      additionalCost < 0
    ) {
      setFormError("Please enter valid positive numbers");
      return;
    }

    // Clear any errors
    setFormError("");

    // Calculate results
    const routineMaintenanceCost = visits * visitCost;
    const annualCostPerElevator = routineMaintenanceCost + additionalCost;
    const totalAnnualCost = annualCostPerElevator * elevators;

    // Send results to parent component
    onCalculate({
      annualCostPerElevator,
      totalAnnualCost,
      numberOfElevators: elevators,
      serviceVisitsPerYear: visits,
      costPerVisit: visitCost,
      additionalAnnualCost: additionalCost,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
        {/* Number of Elevators */}
        <div className="grid gap-2">
          <div className="flex items-center justify-between">
            <Label htmlFor="numberOfElevators">Number of Elevators</Label>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <span className="cursor-help text-xs text-gray-300 underline">
                    What's this?
                  </span>
                </TooltipTrigger>
                <TooltipContent side="top" className="max-w-xs">
                  <p>
                    How many elevators are you maintaining under this plan or
                    contract. For example, if a building has 2 elevators, enter
                    2.
                  </p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
          <Input
            id="numberOfElevators"
            type="number"
            placeholder="e.g. 2"
            min="1"
            step="1"
            value={numberOfElevators}
            onChange={(e) => setNumberOfElevators(e.target.value)}
            required
          />
        </div>

        {/* Service Visits per Year */}
        <div className="grid gap-2">
          <div className="flex items-center justify-between">
            <Label htmlFor="serviceVisitsPerYear">
              Service Visits per Year
            </Label>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <span className="cursor-help text-xs text-gray-300 underline">
                    What's this?
                  </span>
                </TooltipTrigger>
                <TooltipContent side="top" className="max-w-xs">
                  <p>
                    How many times per year each elevator will receive routine
                    maintenance service. Commonly monthly (12) or quarterly (4).
                    If you do monthly checks, put 12. If quarterly, 4.
                  </p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
          <Input
            id="serviceVisitsPerYear"
            type="number"
            placeholder="e.g. 12"
            min="0"
            step="1"
            value={serviceVisitsPerYear}
            onChange={(e) => setServiceVisitsPerYear(e.target.value)}
            required
          />
        </div>

        {/* Cost per Visit */}
        <div className="grid gap-2">
          <div className="flex items-center justify-between">
            <Label htmlFor="costPerVisit">
              Cost per Visit per Elevator ($)
            </Label>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <span className="cursor-help text-xs text-gray-300 underline">
                    What's this?
                  </span>
                </TooltipTrigger>
                <TooltipContent side="top" className="max-w-xs">
                  <p>
                    How much you charge for one maintenance visit for one
                    elevator. For instance, if each monthly visit per elevator
                    is billed at $100, enter 100. This typically covers the
                    technician's time and minor adjustments/lubrication.
                  </p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
          <Input
            id="costPerVisit"
            type="number"
            placeholder="e.g. 100"
            min="0"
            step="0.01"
            value={costPerVisit}
            onChange={(e) => setCostPerVisit(e.target.value)}
            required
          />
        </div>

        {/* Additional Annual Cost */}
        <div className="grid gap-2">
          <div className="flex items-center justify-between">
            <Label htmlFor="additionalAnnualCost">
              Additional Annual Cost per Elevator ($)
            </Label>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <span className="cursor-help text-xs text-gray-300 underline">
                    What's this?
                  </span>
                </TooltipTrigger>
                <TooltipContent side="top" className="max-w-xs">
                  <p>
                    Any other annual charges per elevator outside the per-visit
                    fee. This could include annual safety inspections, testing,
                    a standby emergency service fee, or parts allowance. For
                    example, if you charge an extra $300 per elevator per year
                    for unlimited emergency callouts, enter 300. If none, enter
                    0.
                  </p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
          <Input
            id="additionalAnnualCost"
            type="number"
            placeholder="e.g. 300"
            min="0"
            step="0.01"
            value={additionalAnnualCost}
            onChange={(e) => setAdditionalAnnualCost(e.target.value)}
          />
        </div>
      </div>

      {formError && <p className="text-sm text-red-500">{formError}</p>}

      <Button type="submit" className="w-full">
        Calculate Maintenance Cost
      </Button>
    </form>
  );
}
