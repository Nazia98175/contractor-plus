import { useState } from "react";
import { Card, CardContent, CardDescription } from "../../ui/card";
import { Input } from "../../ui/input";
import { Button } from "../../ui/button";
import { Label } from "../../ui/label";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../../ui/tooltip";
import { Info, Building } from "lucide-react";

interface CalculatorFormProps {
  onCalculate: (values: {
    facilitySize: number;
    ratePerSqFt: number;
    numberOfRestrooms: number;
    extraCostPerRestroom: number;
    additionalServices: number;
  }) => void;
}

export function CalculatorForm({ onCalculate }: CalculatorFormProps) {
  const [facilitySize, setFacilitySize] = useState<number | undefined>();
  const [ratePerSqFt, setRatePerSqFt] = useState<number | undefined>();
  const [numberOfRestrooms, setNumberOfRestrooms] = useState<
    number | undefined
  >(0);
  const [extraCostPerRestroom, setExtraCostPerRestroom] = useState<
    number | undefined
  >(0);
  const [additionalServices, setAdditionalServices] = useState<
    number | undefined
  >(0);

  const [validationError, setValidationError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate required fields
    if (!facilitySize || !ratePerSqFt) {
      setValidationError("Facility size and rate per sq ft are required.");
      return;
    } else {
      setValidationError(null);
    }

    // Call onCalculate with the form values
    onCalculate({
      facilitySize: facilitySize || 0,
      ratePerSqFt: ratePerSqFt || 0,
      numberOfRestrooms: numberOfRestrooms || 0,
      extraCostPerRestroom: extraCostPerRestroom || 0,
      additionalServices: additionalServices || 0,
    });
  };

  return (
    <Card className="border-stiletto bg-shutter h-full border shadow-sm">
      <CardContent className="h-full py-6">
        <form onSubmit={handleSubmit} className="h-full">
          <div className="flex h-full flex-col gap-5">
            <div className="flex flex-grow flex-col gap-3">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <Label
                    htmlFor="facilitySize"
                    className="text-base font-medium"
                  >
                    Facility Size (sq ft)
                  </Label>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-7 w-7 p-0"
                        >
                          <Info className="h-4 w-4 text-gray-300" />
                          <span className="sr-only">Info</span>
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent className="max-w-xs">
                        <p>
                          The total area of the commercial space that needs
                          cleaning. This might be an office, retail store, or
                          other commercial facility. Use the total square
                          footage that will be cleaned (including hallways,
                          office space, etc.).
                        </p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
                <Input
                  id="facilitySize"
                  type="number"
                  placeholder="e.g. 5000"
                  min={0}
                  step="any"
                  value={facilitySize || ""}
                  onChange={(e) =>
                    setFacilitySize(
                      e.target.value ? parseFloat(e.target.value) : undefined,
                    )
                  }
                  className="w-full"
                />
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <Label
                    htmlFor="ratePerSqFt"
                    className="text-base font-medium"
                  >
                    Rate per sq ft ($)
                  </Label>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-7 w-7 p-0"
                        >
                          <Info className="h-4 w-4 text-gray-300" />
                          <span className="sr-only">Info</span>
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent className="max-w-xs">
                        <p>
                          Your base cleaning charge per square foot for a
                          one-time service. Commercial cleaning often is priced
                          in cents per sq ft. For example, $0.10/ft² means 10
                          cents per sq ft. Use a rate reflective of the service
                          (light cleaning might be $0.05, deep cleaning might be
                          $0.15, etc.).
                        </p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
                <Input
                  id="ratePerSqFt"
                  type="number"
                  placeholder="e.g. 0.10"
                  min={0}
                  step="0.01"
                  value={ratePerSqFt || ""}
                  onChange={(e) =>
                    setRatePerSqFt(
                      e.target.value ? parseFloat(e.target.value) : undefined,
                    )
                  }
                  className="w-full"
                />
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <Label
                    htmlFor="numberOfRestrooms"
                    className="text-base font-medium"
                  >
                    Number of Restrooms
                  </Label>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-7 w-7 p-0"
                        >
                          <Info className="h-4 w-4 text-gray-300" />
                          <span className="sr-only">Info</span>
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent className="max-w-xs">
                        <p>
                          How many restrooms are being cleaned. Bathrooms
                          usually require extra work (toilets, mirrors,
                          replenishing soap/paper).
                        </p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
                <Input
                  id="numberOfRestrooms"
                  type="number"
                  placeholder="e.g. 3"
                  min={0}
                  value={numberOfRestrooms || ""}
                  onChange={(e) =>
                    setNumberOfRestrooms(
                      e.target.value ? parseInt(e.target.value) : undefined,
                    )
                  }
                  className="w-full"
                />
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <Label
                    htmlFor="extraCostPerRestroom"
                    className="text-base font-medium"
                  >
                    Extra Cost per Restroom ($)
                  </Label>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-7 w-7 p-0"
                        >
                          <Info className="h-4 w-4 text-gray-300" />
                          <span className="sr-only">Info</span>
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent className="max-w-xs">
                        <p>
                          An additional charge per restroom to account for the
                          extra time and supplies (cleaning toilets, urinals,
                          sinks, stocking toilet paper, etc.). For instance, you
                          might add $15 for each restroom on top of the base sq
                          ft price. If your sq ft rate already factors
                          bathrooms, you can leave this 0.
                        </p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
                <Input
                  id="extraCostPerRestroom"
                  type="number"
                  placeholder="e.g. 15"
                  min={0}
                  step="0.01"
                  value={extraCostPerRestroom || ""}
                  onChange={(e) =>
                    setExtraCostPerRestroom(
                      e.target.value ? parseFloat(e.target.value) : undefined,
                    )
                  }
                  className="w-full"
                />
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <Label
                    htmlFor="additionalServices"
                    className="text-base font-medium"
                  >
                    Additional Services ($)
                  </Label>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-7 w-7 p-0"
                        >
                          <Info className="h-4 w-4 text-gray-300" />
                          <span className="sr-only">Info</span>
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent className="max-w-xs">
                        <p>
                          Any extra tasks or services not covered by the
                          standard floor-space rate. For example, if you're also
                          cleaning interior windows, doing a one-time deep
                          disinfection, or shampooing carpets, include the
                          charge for those here. If none, enter 0.
                        </p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
                <Input
                  id="additionalServices"
                  type="number"
                  placeholder="e.g. 50"
                  min={0}
                  step="0.01"
                  value={additionalServices || ""}
                  onChange={(e) =>
                    setAdditionalServices(
                      e.target.value ? parseFloat(e.target.value) : undefined,
                    )
                  }
                  className="w-full"
                />
              </div>
              {validationError && (
                <p className="text-sm text-red-500">{validationError}</p>
              )}
            </div>

            <Button
              type="submit"
              size="lg"
              className="flex w-full items-center gap-2 text-base font-medium"
            >
              <Building className="h-5 w-5" />
              Calculate
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
