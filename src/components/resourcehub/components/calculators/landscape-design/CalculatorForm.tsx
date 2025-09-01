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
import { Flower, HelpCircle } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../../ui/tooltip";

const formSchema = z.object({
  area: z
    .number()
    .positive("Area must be a positive number")
    .min(1, "Area must be at least 1 sq ft"),
  costPerSqFt: z
    .number()
    .nonnegative("Cost per square foot must be zero or a positive number"),
  designFee: z
    .number()
    .nonnegative("Design fee must be zero or a positive number"),
  additionalCosts: z
    .number()
    .nonnegative("Additional costs must be zero or a positive number"),
});

export type LandscapeCalculatorValues = z.infer<typeof formSchema>;

interface CalculatorFormProps {
  onCalculate: (values: LandscapeCalculatorValues) => void;
}

export function CalculatorForm({ onCalculate }: CalculatorFormProps) {
  const form = useForm<LandscapeCalculatorValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      area: 1000,
      costPerSqFt: 8,
      designFee: 500,
      additionalCosts: 300,
    },
  });

  function onSubmit(values: LandscapeCalculatorValues) {
    onCalculate(values);
  }

  return (
    <Card className="border-stiletto bg-shutter border shadow-sm">
      <CardHeader className="border-stiletto border-b pb-4">
        <h2 className="text-lg font-medium">Calculate Landscape Design Cost</h2>
        <p className="text-aliceBlue text-sm">
          Enter project details and pricing information
        </p>
      </CardHeader>
      <CardContent className="pt-6">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <div className="space-y-4">
              {/* Landscape Area Field */}
              <FormField
                control={form.control}
                name="area"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex justify-between">
                      <FormLabel className="text-base">
                        Landscape Area
                      </FormLabel>
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <HelpCircle className="text-aliceBlue h-4 w-4 cursor-help" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="w-80">
                              The size of the area to be landscaped or
                              redesigned. This could be the yard area receiving
                              new plantings, hardscape, etc. If you know the
                              area in acres or another unit, convert it (1 acre
                              = 43,560 sq ft). If it's a front yard of ~1000 sq
                              ft, enter 1000.
                            </p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                    <FormControl>
                      <div className="relative">
                        <Input
                          type="number"
                          placeholder="e.g. 1000"
                          {...field}
                          onChange={(e) =>
                            field.onChange(parseFloat(e.target.value) || 0)
                          }
                          className="pr-16"
                        />
                        <div className="text-aliceBlue pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                          sq ft
                        </div>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Installation Cost per sq ft Field */}
              <FormField
                control={form.control}
                name="costPerSqFt"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex justify-between">
                      <FormLabel className="text-base">
                        Installation Cost per sq ft
                      </FormLabel>
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <HelpCircle className="text-aliceBlue h-4 w-4 cursor-help" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="w-80">
                              The average cost per square foot to install the
                              landscape (this includes soil prep, plants, sod,
                              mulch, labor, etc.). For example, a moderate
                              landscape might be $5-10 per sq ft; high-end with
                              hardscape might be $20+/sq ft.
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
                          placeholder="e.g. 8.00"
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

              {/* Design Fee Field */}
              <FormField
                control={form.control}
                name="designFee"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex justify-between">
                      <FormLabel className="text-base">Design Fee</FormLabel>
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <HelpCircle className="text-aliceBlue h-4 w-4 cursor-help" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="w-80">
                              The fee for creating the landscape design/plan. If
                              you charge a separate design fee (say $500 for a
                              plan), enter that. If design is included in the
                              per sq ft cost or you're not charging separately,
                              enter 0.
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
                          placeholder="e.g. 500"
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

              {/* Additional Costs Field */}
              <FormField
                control={form.control}
                name="additionalCosts"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex justify-between">
                      <FormLabel className="text-base">
                        Additional Costs
                      </FormLabel>
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <HelpCircle className="text-aliceBlue h-4 w-4 cursor-help" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="w-80">
                              Any other costs not covered by the basic install
                              rate. This could include special items like a
                              fountain, a pergola, extensive lighting system, or
                              anything you price separately. Also could cover
                              permit fees or other miscellaneous costs.
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
            </div>

            <Button
              type="submit"
              size="lg"
              className="mt-4 w-full bg-red-600 hover:bg-red-700"
            >
              <Flower className="mr-2 h-4 w-4" />
              Calculate
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
