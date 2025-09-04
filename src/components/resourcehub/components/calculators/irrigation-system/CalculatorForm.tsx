import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Card, CardContent, CardHeader } from "../../ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../ui/form";
import { Input } from "../../ui/input";
import { Button } from "../../ui/button";
import { Droplet, HelpCircle } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../../ui/tooltip";

const formSchema = z.object({
  numberOfZones: z
    .number()
    .int("Number of zones must be a whole number")
    .positive("Number of zones must be a positive number")
    .min(1, "At least one zone is required"),
  sprinklerHeads: z
    .number()
    .int("Number of sprinkler heads must be a whole number")
    .positive("Number of sprinkler heads must be a positive number")
    .min(1, "At least one sprinkler head is required"),
  pipeLength: z
    .number()
    .positive("Pipe length must be a positive number")
    .min(1, "Pipe length must be at least 1 ft"),
  costPerSprinklerHead: z
    .number()
    .positive("Cost per sprinkler head must be a positive number"),
  costPerFtPipe: z
    .number()
    .positive("Cost per ft of pipe must be a positive number"),
  costPerValve: z.number().positive("Cost per valve must be a positive number"),
  additionalMaterials: z
    .number()
    .min(0, "Additional materials cost cannot be negative"),
});

type CalculatorFormValues = z.infer<typeof formSchema>;

interface CalculatorFormProps {
  onCalculate: (values: CalculatorFormValues) => void;
}

export function CalculatorForm({ onCalculate }: CalculatorFormProps) {
  const form = useForm<CalculatorFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      numberOfZones: 4,
      sprinklerHeads: 20,
      pipeLength: 200,
      costPerSprinklerHead: 12,
      costPerFtPipe: 0.5,
      costPerValve: 30,
      additionalMaterials: 200,
    },
  });

  function onSubmit(values: CalculatorFormValues) {
    onCalculate(values);
  }

  return (
    <Card className="border-stiletto bg-shutter border shadow-sm">
      <CardHeader className="border-stiletto border-b pb-4">
        <h2 className="text-lg font-medium">
          Calculate Irrigation System Costs
        </h2>
        <p className="text-aliceBlue text-sm">
          Enter system details and pricing information
        </p>
      </CardHeader>
      <CardContent className="pt-6">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <div className="space-y-4">
              {/* Number of Zones Field */}
              <FormField
                control={form.control}
                name="numberOfZones"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex justify-between">
                      <FormLabel className="text-base">
                        Number of Zones
                      </FormLabel>
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <HelpCircle className="text-aliceBlue h-4 w-4 cursor-help" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="w-80">
                              How many zones (controlled by valves) the system
                              has. Typically each zone is a grouping of
                              sprinkler heads controlled together. Enter the
                              count of zones.
                            </p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="e.g. 4"
                        {...field}
                        onChange={(e) =>
                          field.onChange(parseInt(e.target.value) || 0)
                        }
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Sprinkler Heads Field */}
              <FormField
                control={form.control}
                name="sprinklerHeads"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex justify-between">
                      <FormLabel className="text-base">
                        Sprinkler Heads (total)
                      </FormLabel>
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <HelpCircle className="text-aliceBlue h-4 w-4 cursor-help" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="w-80">
                              Total number of sprinkler heads/nozzles in the
                              system. Count all the heads in all zones combined.
                              This will be used to calculate total head cost.
                            </p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="e.g. 20"
                        {...field}
                        onChange={(e) =>
                          field.onChange(parseInt(e.target.value) || 0)
                        }
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Total Pipe Length Field */}
              <FormField
                control={form.control}
                name="pipeLength"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex justify-between">
                      <FormLabel className="text-base">
                        Total Pipe Length (ft)
                      </FormLabel>
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <HelpCircle className="text-aliceBlue h-4 w-4 cursor-help" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="w-80">
                              An estimate of the total length of pipe required
                              for the system, in feet. Include both the main
                              supply line and all zone lateral lines. It's an
                              estimate – better to overestimate slightly than
                              underestimate.
                            </p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                    <FormControl>
                      <div className="relative">
                        <Input
                          type="number"
                          placeholder="e.g. 200"
                          {...field}
                          onChange={(e) =>
                            field.onChange(parseFloat(e.target.value) || 0)
                          }
                          className="pr-16"
                        />
                        <div className="text-aliceBlue pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                          ft
                        </div>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Cost per Sprinkler Head Field */}
              <FormField
                control={form.control}
                name="costPerSprinklerHead"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex justify-between">
                      <FormLabel className="text-base">
                        Cost per Sprinkler Head ($)
                      </FormLabel>
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <HelpCircle className="text-aliceBlue h-4 w-4 cursor-help" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="w-80">
                              The price for one sprinkler head. If different
                              types of heads are used (rotors vs pop-up sprays),
                              you could average the cost or weigh them, but for
                              a ballpark, use a typical head cost like $10-$15.
                            </p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                    <FormControl>
                      <div className="relative">
                        <div className="text-aliceBlue pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                          $
                        </div>
                        <Input
                          type="number"
                          placeholder="e.g. 12"
                          {...field}
                          onChange={(e) =>
                            field.onChange(parseFloat(e.target.value) || 0)
                          }
                          className="pl-6"
                        />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Cost per ft of Pipe Field */}
              <FormField
                control={form.control}
                name="costPerFtPipe"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex justify-between">
                      <FormLabel className="text-base">
                        Cost per ft of Pipe ($)
                      </FormLabel>
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <HelpCircle className="text-aliceBlue h-4 w-4 cursor-help" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="w-80">
                              The cost per foot of irrigation pipe/tubing. For
                              example, if pipe costs ~$0.50/ft, enter 0.50. If
                              using different pipe sizes with different costs,
                              you might average it or break it into more
                              specific calculations, but this gives a general
                              estimate.
                            </p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                    <FormControl>
                      <div className="relative">
                        <div className="text-aliceBlue pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                          $
                        </div>
                        <Input
                          type="number"
                          placeholder="e.g. 0.50"
                          {...field}
                          onChange={(e) =>
                            field.onChange(parseFloat(e.target.value) || 0)
                          }
                          className="pl-6"
                        />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Cost per Valve Field */}
              <FormField
                control={form.control}
                name="costPerValve"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex justify-between">
                      <FormLabel className="text-base">
                        Cost per Valve ($)
                      </FormLabel>
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <HelpCircle className="text-aliceBlue h-4 w-4 cursor-help" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="w-80">
                              Cost for one zone control valve. Each zone
                              typically has an electric control valve. If valves
                              are $30 each, enter 30. Don't forget a master
                              valve if you use one (you could count that as an
                              extra zone in number of zones if needed).
                            </p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                    <FormControl>
                      <div className="relative">
                        <div className="text-aliceBlue pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                          $
                        </div>
                        <Input
                          type="number"
                          placeholder="e.g. 30"
                          {...field}
                          onChange={(e) =>
                            field.onChange(parseFloat(e.target.value) || 0)
                          }
                          className="pl-6"
                        />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Additional Materials Field */}
              <FormField
                control={form.control}
                name="additionalMaterials"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex justify-between">
                      <FormLabel className="text-base">
                        Additional Materials ($)
                      </FormLabel>
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <HelpCircle className="text-aliceBlue h-4 w-4 cursor-help" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="w-80">
                              Any other material costs not captured above. For
                              instance, the irrigation controller (timer) which
                              might be $100-$200, a backflow prevention device,
                              valve boxes, wiring, fittings (elbows, tees,
                              couplers), glue, etc. Sum those miscellaneous
                              materials for a more complete estimate.
                            </p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                    <FormControl>
                      <div className="relative">
                        <div className="text-aliceBlue pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                          $
                        </div>
                        <Input
                          type="number"
                          placeholder="e.g. 200"
                          {...field}
                          onChange={(e) =>
                            field.onChange(parseFloat(e.target.value) || 0)
                          }
                          className="pl-6"
                        />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <Button
              type="submit"
              size="lg"
              className="mt-4 w-full bg-red-600 hover:bg-red-700"
            >
              <Droplet className="h-4 w-4" />
              Calculate
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
