import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Card, CardContent, CardHeader } from "../../ui/card";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../ui/form";
import { Input } from "../../ui/input";
import { Button } from "../../ui/button";
import { Paintbrush, HelpCircle } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../../ui/tooltip";

const formSchema = z.object({
  surfaceArea: z
    .number()
    .positive("Surface area must be a positive number")
    .min(1, "Surface area must be at least 1 sq ft"),
  coats: z
    .number()
    .int("Number of coats must be a whole number")
    .min(1, "At least one coat is required"),
  coverage: z
    .number()
    .positive("Coverage must be a positive number")
    .min(50, "Coverage should be at least 50 sq ft per gallon"),
  paintCost: z.number().positive("Paint cost must be a positive number"),
  laborRate: z.number().positive("Labor rate must be a positive number"),
  coverageRate: z
    .number()
    .positive("Coverage rate must be a positive number")
    .min(10, "Coverage rate should be at least 10 sq ft per hour"),
});

type CalculatorFormValues = z.infer<typeof formSchema>;

interface CalculatorFormProps {
  onCalculate: (values: CalculatorFormValues) => void;
}

export function CalculatorForm({ onCalculate }: CalculatorFormProps) {
  const form = useForm<CalculatorFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      surfaceArea: 1200,
      coats: 2,
      coverage: 350,
      paintCost: 32,
      laborRate: 40,
      coverageRate: 150,
    },
  });

  function onSubmit(values: CalculatorFormValues) {
    onCalculate(values);
  }

  return (
    <Card className="border-stiletto bg-shutter border shadow-sm">
      <CardHeader className="border-stiletto border-b pb-4">
        <h2 className="text-lg font-medium">Calculate Painting Cost</h2>
        <p className="text-aliceBlue text-sm">
          Enter painting details and pricing information
        </p>
      </CardHeader>
      <CardContent className="py-6">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <div className="space-y-4">
              {/* Surface Area Field */}
              <FormField
                control={form.control}
                name="surfaceArea"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex justify-between">
                      <FormLabel className="text-base">Surface Area</FormLabel>
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <HelpCircle className="text-aliceBlue h-4 w-4 cursor-help" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="w-80">
                              The total area that needs painting. For interiors,
                              calculate the wall area plus ceiling if painting
                              it. For exteriors, include all siding area.
                              Exclude windows/doors if they won't be painted.
                            </p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                    <FormControl>
                      <div className="relative">
                        <Input
                          type="number"
                          placeholder="e.g. 1200"
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

              {/* Number of Coats Field */}
              <FormField
                control={form.control}
                name="coats"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex justify-between">
                      <FormLabel className="text-base">
                        Number of Coats
                      </FormLabel>
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <HelpCircle className="text-aliceBlue h-4 w-4 cursor-help" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="w-80">
                              How many coats of paint you'll apply. Two coats
                              are common for a new color or quality finish.
                            </p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="e.g. 2"
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

              {/* Paint Coverage Field */}
              <FormField
                control={form.control}
                name="coverage"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex justify-between">
                      <FormLabel className="text-base">
                        Paint Coverage (sq ft/gal)
                      </FormLabel>
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <HelpCircle className="text-aliceBlue h-4 w-4 cursor-help" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="w-80">
                              How much area one gallon of paint covers for one
                              coat. Most paint cans say around 350-400 sq ft per
                              gallon per coat for smooth surfaces.
                            </p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="e.g. 350"
                        {...field}
                        onChange={(e) =>
                          field.onChange(parseFloat(e.target.value) || 0)
                        }
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Paint Cost per Gallon Field */}
              <FormField
                control={form.control}
                name="paintCost"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex justify-between">
                      <FormLabel className="text-base">
                        Paint Cost per Gallon
                      </FormLabel>
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <HelpCircle className="text-aliceBlue h-4 w-4 cursor-help" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="w-80">
                              Price for one gallon of the paint you'll use.
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
                          placeholder="e.g. 32"
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

              {/* Labor Rate Field */}
              <FormField
                control={form.control}
                name="laborRate"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex justify-between">
                      <FormLabel className="text-base">
                        Labor Rate ($/hr)
                      </FormLabel>
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <HelpCircle className="text-aliceBlue h-4 w-4 cursor-help" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="w-80">
                              The hourly rate you charge for painting labor (per
                              painter).
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
                          placeholder="e.g. 40"
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

              {/* Painter Coverage Rate Field */}
              <FormField
                control={form.control}
                name="coverageRate"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex justify-between">
                      <FormLabel className="text-base">
                        Painter Coverage Rate (sq ft/hr)
                      </FormLabel>
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <HelpCircle className="text-aliceBlue h-4 w-4 cursor-help" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="w-80">
                              How fast one painter can paint. E.g., a skilled
                              painter might cover ~150 square feet of wall per
                              hour (per coat) when rolling.
                            </p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="e.g. 150"
                        {...field}
                        onChange={(e) =>
                          field.onChange(parseFloat(e.target.value) || 0)
                        }
                      />
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
              <Paintbrush className="mr-2 h-4 w-4" />
              Calculate
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
