import React, { useState } from "react";
import { Button } from "../../ui/button";
import { Input } from "../../ui/input";

import { Card, CardContent, CardDescription } from "../../ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../../ui/tooltip";
import { HelpCircle, Plus, Minus, Calculator } from "lucide-react";
import { CalculationResult } from "./CalculationResult";
import { Label } from "../../ui/label";

interface Service {
  description: string;
  cost: number;
}

interface CalculatorFormProps {}

export function CalculatorForm({}: CalculatorFormProps) {
  const [services, setServices] = useState<Service[]>([
    { description: "", cost: 0 },
    { description: "", cost: 0 },
    { description: "", cost: 0 },
  ]);
  const [markup, setMarkup] = useState<number>(0);
  const [results, setResults] = useState<any>(null);

  const calculateEstimate = () => {
    // Filter out services with no description or cost
    const validServices = services.filter(
      (service) => service.description.trim() !== "" || service.cost > 0,
    );

    const subtotal = validServices.reduce(
      (sum, service) => sum + (service.cost || 0),
      0,
    );
    const markupAmount = subtotal * (markup / 100);
    const total = subtotal + markupAmount;

    setResults({
      services: validServices,
      subtotal,
      markup: markup,
      markupAmount,
      total,
    });
  };

  const handleServiceChange = (
    index: number,
    field: keyof Service,
    value: string,
  ) => {
    const newServices = [...services];
    if (field === "description") {
      newServices[index].description = value;
    } else {
      newServices[index].cost = value === "" ? 0 : Number(value);
    }
    setServices(newServices);
  };

  const addService = () => {
    setServices([...services, { description: "", cost: 0 }]);
  };

  const removeService = (index: number) => {
    if (services.length <= 1) return;
    const newServices = services.filter((_, i) => i !== index);
    setServices(newServices);
  };

  return (
    <div className="space-y-8">
      <Card>
        <CardContent className="pt-6">
          <div className="space-y-4">
            {services.map((service, index) => (
              <div
                key={index}
                className="grid grid-cols-1 items-end gap-4 md:grid-cols-[1fr,auto,auto]"
              >
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Label htmlFor={`service-description-${index}`}>
                      {`Service ${index + 1} Description`}
                    </Label>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <HelpCircle className="text-muted-foreground h-4 w-4" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p className="w-80">
                            The name or label of each service/trade or job
                            component. For example: "Plumbing rough-in,"
                            "Electrical wiring," "Drywall install."
                          </p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                  <Input
                    id={`service-description-${index}`}
                    placeholder={
                      index === 0
                        ? "e.g. Plumbing rough-in"
                        : index === 1
                          ? "e.g. Electrical wiring"
                          : "Optional"
                    }
                    value={service.description}
                    onChange={(e) =>
                      handleServiceChange(index, "description", e.target.value)
                    }
                  />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Label htmlFor={`service-cost-${index}`}>
                      {`Service ${index + 1} Cost ($)`}
                    </Label>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <HelpCircle className="text-muted-foreground h-4 w-4" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p className="w-80">
                            The estimated cost for that particular service or
                            component. This could be a subcontractor bid or your
                            own estimate for that portion.
                          </p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                  <Input
                    id={`service-cost-${index}`}
                    type="number"
                    placeholder={
                      index === 0
                        ? "e.g. 1500"
                        : index === 1
                          ? "e.g. 1800"
                          : "Optional"
                    }
                    value={service.cost === 0 ? "" : service.cost}
                    onChange={(e) =>
                      handleServiceChange(index, "cost", e.target.value)
                    }
                  />
                </div>
                <Button
                  variant="outline"
                  size="icon"
                  type="button"
                  onClick={() => removeService(index)}
                  disabled={services.length <= 1}
                  className="h-10 w-10"
                >
                  <Minus className="h-4 w-4" />
                </Button>
              </div>
            ))}

            <div className="flex justify-start pt-2">
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={addService}
                className="flex items-center gap-1"
              >
                <Plus className="h-4 w-4" />
                Add Service
              </Button>
            </div>

            <div className="grid grid-cols-1 gap-4 pt-4 md:grid-cols-2">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Label htmlFor="markup">Profit Markup (%)</Label>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <HelpCircle className="text-muted-foreground h-4 w-4" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="w-80">
                          The percentage you want to add on top of the sum of
                          all service costs as your profit or management fee. If
                          you've already included your profit in those costs,
                          leave this at 0.
                        </p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
                <Input
                  id="markup"
                  type="number"
                  placeholder="e.g. 15"
                  value={markup === 0 ? "" : markup}
                  onChange={(e) =>
                    setMarkup(
                      e.target.value === "" ? 0 : Number(e.target.value),
                    )
                  }
                />
              </div>
            </div>

            <div className="flex justify-center pt-4">
              <Button onClick={calculateEstimate} className="w-full md:w-auto">
                <Calculator className="mr-2 h-4 w-4" />
                Calculate Estimate
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {results && <CalculationResult results={results} />}
    </div>
  );
}
