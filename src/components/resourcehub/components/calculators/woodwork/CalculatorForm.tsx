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
import { Hammer, HelpCircle } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../../ui/tooltip";

const formSchema = z.object({
  materialsTotal: z
    .number()
    .min(0, "Materials cost cannot be negative")
    .default(0),
  laborHours: z.number().min(0, "Labor hours cannot be negative").default(0),
  hourlyRate: z.number().min(0, "Hourly rate cannot be negative").default(0),
  otherCosts: z.number().min(0, "Other costs cannot be negative").default(0),
  profitMarkup: z
    .number()
    .min(0, "Profit markup cannot be negative")
    .default(0),
});

type CalculatorFormValues = z.infer<typeof formSchema>;

interface CalculatorFormProps {
  onCalculate: (values: CalculatorFormValues) => void;
}

export function CalculatorForm({ onCalculate }: CalculatorFormProps) {
  const form = useForm<CalculatorFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      materialsTotal: 300,
      laborHours: 25,
      hourlyRate: 45,
      otherCosts: 100,
      profitMarkup: 20,
    },
  });

  function onSubmit(values: CalculatorFormValues) {
    onCalculate(values);
  }

  return (
    <Card className="border-stiletto bg-shutter border shadow-sm">
      <CardHeader className="border-stiletto border-b pb-4">
        <h2 className="text-lg font-medium">
          Calculate Woodwork Project Price
        </h2>
        <p className="text-aliceBlue text-sm">
          Enter project details and pricing information
        </p>
      </CardHeader>
      <CardContent className="pt-6">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <div className="space-y-4">
              {/* Materials Cost Field */}
              <FormField
                control={form.control}
                name="materialsTotal"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex justify-between">
                      <FormLabel className="text-base">
                        Materials Cost ($)
                      </FormLabel>
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <HelpCircle className="text-aliceBlue h-4 w-4 cursor-help" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="w-80">
                              Total cost of all raw materials needed (wood,
                              plywood, veneers, glue, fasteners,
                              stains/finishes, hardware like handles or hinges).
                              Sum up everything you'll buy for this project.
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
                          placeholder="e.g. 300"
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

              {/* Labor Hours Field */}
              <FormField
                control={form.control}
                name="laborHours"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex justify-between">
                      <FormLabel className="text-base">Labor Hours</FormLabel>
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <HelpCircle className="text-aliceBlue h-4 w-4 cursor-help" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="w-80">
                              How many hours of work you estimate for this
                              project. Include cutting, assembly, sanding,
                              finishing, etc. If multiple people work
                              simultaneously, use total person-hours.
                            </p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                    <FormControl>
                      <div className="relative">
                        <Input
                          type="number"
                          placeholder="e.g. 25"
                          {...field}
                          onChange={(e) =>
                            field.onChange(parseFloat(e.target.value) || 0)
                          }
                        />
                        <div className="text-aliceBlue pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                          hrs
                        </div>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Hourly Rate Field */}
              <FormField
                control={form.control}
                name="hourlyRate"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex justify-between">
                      <FormLabel className="text-base">
                        Hourly Rate ($)
                      </FormLabel>
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <HelpCircle className="text-aliceBlue h-4 w-4 cursor-help" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="w-80">
                              Your charge rate per hour of labor. If you as a
                              woodworker value your time at $45/hour, enter 45.
                              If you have employees, you might use their
                              billable rate. This should cover your labor cost
                              and some overhead.
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
                          placeholder="e.g. 45"
                          {...field}
                          onChange={(e) =>
                            field.onChange(parseFloat(e.target.value) || 0)
                          }
                          className="pl-6"
                        />
                        <div className="text-aliceBlue pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                          /hr
                        </div>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Other Costs Field */}
              <FormField
                control={form.control}
                name="otherCosts"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex justify-between">
                      <FormLabel className="text-base">
                        Other Costs ($)
                      </FormLabel>
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <HelpCircle className="text-aliceBlue h-4 w-4 cursor-help" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="w-80">
                              Any other expenses not in materials – e.g., cost
                              of renting a special tool, outsourcing CNC work,
                              delivery costs, or any overhead specifically
                              allocated to this project. Finishing (like paint
                              or varnish) if not counted in materials could go
                              here too.
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
                          placeholder="e.g. 100"
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

              {/* Profit Markup Field */}
              <FormField
                control={form.control}
                name="profitMarkup"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex justify-between">
                      <FormLabel className="text-base">
                        Profit Markup (%)
                      </FormLabel>
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <HelpCircle className="text-aliceBlue h-4 w-4 cursor-help" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="w-80">
                              The percentage to increase the total cost by for
                              profit. For example, 20 means you'll add 20% on
                              top of your costs (materials+labor+other) as
                              profit.
                            </p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                    <FormControl>
                      <div className="relative">
                        <Input
                          type="number"
                          placeholder="e.g. 20"
                          {...field}
                          onChange={(e) =>
                            field.onChange(parseFloat(e.target.value) || 0)
                          }
                          className="pr-8"
                        />
                        <div className="text-aliceBlue pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                          %
                        </div>
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
              <Hammer className="mr-2 h-4 w-4" />
              Calculate
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
