import React, { useEffect } from "react";
import { Button } from "../../ui/button";
import { Input } from "../../ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../ui/card";
import {
  Calculator,
  HelpCircle,
  Square,
  Ruler,
  Percent,
  DollarSign,
} from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../../ui/tooltip";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../ui/form";
import { toast } from "@/hooks/use-toast";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { DrywallCalculationValues } from "@/pages/calculators/DrywallCalculator";

// Define the form validation schema
const calculatorSchema = z.object({
  totalArea: z.coerce.number().positive("Area must be greater than 0"),
  sheetLength: z.coerce.number().positive("Length must be greater than 0"),
  sheetWidth: z.coerce.number().positive("Width must be greater than 0"),
  wasteFactor: z.coerce.number().min(0, "Cannot be negative"),
  costPerSheet: z.coerce.number().min(0, "Cannot be negative"),
});

type CalculatorFormProps = {
  onCalculate: (values: DrywallCalculationValues) => void;
};

export function DrywallCalculatorForm({ onCalculate }: CalculatorFormProps) {
  // Initialize form with default values
  const form = useForm<DrywallCalculationValues>({
    resolver: zodResolver(calculatorSchema),
    defaultValues: {
      totalArea: 1000,
      sheetLength: 8,
      sheetWidth: 4,
      wasteFactor: 10,
      costPerSheet: 12,
    },
  });

  // Handle form submission
  const onSubmit = (values: DrywallCalculationValues) => {
    onCalculate(values);

    // Show toast notification when calculation is updated
    toast({
      title: "Calculation Updated",
      description: `Your drywall materials estimate has been calculated.`,
    });
  };

  // Run calculation on initial load with default values
  useEffect(() => {
    const defaultValues = form.getValues();
    onCalculate(defaultValues);
  }, []);

  return (
    <Card className="border-shutter h-full overflow-hidden border shadow-sm">
      <CardHeader className="bg-shutter border-stiletto border-b">
        <CardTitle className="text-aliceBlue text-xl">
          Calculate Drywall Materials
        </CardTitle>
        <CardDescription>
          Enter project details and sheet information below
        </CardDescription>
      </CardHeader>
      <CardContent className="py-6">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex h-full flex-col gap-5"
          >
            <div className="flex flex-grow flex-col gap-3">
              {" "}
              {/* Total Drywall Area Field */}
              <FormField
                control={form.control}
                name="totalArea"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex items-center justify-between">
                      <FormLabel>Total Drywall Area</FormLabel>
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <span className="inline-flex cursor-help">
                              <HelpCircle className="text-aliceBlue h-4 w-4" />
                            </span>
                          </TooltipTrigger>
                          <TooltipContent side="top" className="max-w-xs">
                            <p className="text-sm">
                              The total area you need to cover with drywall.
                              Calculate wall areas (length × height for each
                              wall) plus any ceilings or other surfaces. For
                              multiple rooms, add all areas. If you have area in
                              square meters, convert it (for example, 100 m² ≈
                              1076 ft²).
                            </p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                    <FormControl>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-3 flex items-center">
                          <Square className="text-aliceBlue h-4 w-4" />
                        </div>
                        <Input
                          type="number"
                          placeholder="e.g. 1000"
                          {...field}
                          className="pr-12 pl-10"
                        />
                        <div className="absolute inset-y-0 right-3 flex items-center text-sm text-gray-300">
                          sq ft
                        </div>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* Sheet Length Field */}
              <FormField
                control={form.control}
                name="sheetLength"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex items-center justify-between">
                      <FormLabel>Sheet Length</FormLabel>
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <span className="inline-flex cursor-help">
                              <HelpCircle className="text-aliceBlue h-4 w-4" />
                            </span>
                          </TooltipTrigger>
                          <TooltipContent side="top" className="max-w-xs">
                            <p className="text-sm">
                              The length of the drywall panels you'll use.
                              Standard drywall comes in 8 ft, 10 ft, 12 ft
                              lengths (and others). Using larger sheets can
                              reduce joints. Enter the length in feet.
                            </p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                    <FormControl>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-3 flex items-center">
                          <Ruler className="text-aliceBlue h-4 w-4" />
                        </div>
                        <Input
                          type="number"
                          placeholder="e.g. 8"
                          {...field}
                          className="pr-8 pl-10"
                        />
                        <div className="absolute inset-y-0 right-3 flex items-center text-sm text-gray-300">
                          ft
                        </div>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* Sheet Width Field */}
              <FormField
                control={form.control}
                name="sheetWidth"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex items-center justify-between">
                      <FormLabel>Sheet Width</FormLabel>
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <span className="inline-flex cursor-help">
                              <HelpCircle className="text-aliceBlue h-4 w-4" />
                            </span>
                          </TooltipTrigger>
                          <TooltipContent side="top" className="max-w-xs">
                            <p className="text-sm">
                              The width of the drywall panels. Most drywall
                              sheets are 4 feet wide (which is standard). If
                              you're using a different width panel (rare), enter
                              that. Typically, you'll put 4.
                            </p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                    <FormControl>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-3 flex items-center">
                          <Ruler className="text-aliceBlue h-4 w-4" />
                        </div>
                        <Input
                          type="number"
                          placeholder="e.g. 4"
                          {...field}
                          className="pr-8 pl-10"
                        />
                        <div className="absolute inset-y-0 right-3 flex items-center text-sm text-gray-300">
                          ft
                        </div>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* Waste Factor Field */}
              <FormField
                control={form.control}
                name="wasteFactor"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex items-center justify-between">
                      <FormLabel>Waste Factor</FormLabel>
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <span className="inline-flex cursor-help">
                              <HelpCircle className="text-aliceBlue h-4 w-4" />
                            </span>
                          </TooltipTrigger>
                          <TooltipContent side="top" className="max-w-xs">
                            <p className="text-sm">
                              Extra material percentage to account for waste
                              from cuts, mistakes, or damaged pieces. 10% is a
                              typical allowance. If you want to be precise and
                              you plan well, maybe 5%. If you know you have a
                              lot of odd cuts, maybe more. Enter the percentage
                              as a number (10 for 10%).
                            </p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                    <FormControl>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-3 flex items-center">
                          <Percent className="text-aliceBlue h-4 w-4" />
                        </div>
                        <Input
                          type="number"
                          placeholder="e.g. 10"
                          {...field}
                          className="pr-8 pl-10"
                        />
                        <div className="absolute inset-y-0 right-3 flex items-center text-sm text-gray-300">
                          %
                        </div>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* Cost per Sheet Field */}
              <FormField
                control={form.control}
                name="costPerSheet"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex items-center justify-between">
                      <FormLabel>Cost per Sheet</FormLabel>
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <span className="inline-flex cursor-help">
                              <HelpCircle className="text-aliceBlue h-4 w-4" />
                            </span>
                          </TooltipTrigger>
                          <TooltipContent side="top" className="max-w-xs">
                            <p className="text-sm">
                              The price for one drywall sheet of the size
                              specified. If a 4x8 sheet costs $12, enter 12. If
                              using multiple sizes or thicknesses with different
                              costs, either use an average or do separate
                              calculations per size. If you don't want a cost
                              calculation, you can leave this field at 0 or
                              blank.
                            </p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                    <FormControl>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-3 flex items-center">
                          <DollarSign className="text-aliceBlue h-4 w-4" />
                        </div>
                        <Input
                          type="number"
                          step="0.01"
                          placeholder="e.g. 12"
                          {...field}
                          className="pl-10"
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
              className="w-full bg-red-600 text-white hover:bg-red-700"
            >
              <Calculator className="mr-2 h-5 w-5" />
              Calculate
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
