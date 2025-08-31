import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "../../ui/button";
import { Input } from "../../ui/input";
import { Info } from "lucide-react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../ui/form";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../../ui/tooltip";

// Define our schema
const formSchema = z.object({
  floorArea: z.coerce
    .number()
    .positive({ message: "Floor area must be positive" })
    .min(1),
  materialCostPerSqFt: z.coerce
    .number()
    .nonnegative({ message: "Material cost must be non-negative" }),
  laborCostPerSqFt: z.coerce
    .number()
    .nonnegative({ message: "Labor cost must be non-negative" }),
  wasteFactor: z.coerce
    .number()
    .nonnegative({ message: "Waste factor must be non-negative" }),
  additionalCosts: z.coerce
    .number()
    .nonnegative({ message: "Additional costs must be non-negative" })
    .default(0),
});

export type FlooringCalculationValues = z.infer<typeof formSchema>;

interface CalculatorFormProps {
  onCalculate: (values: FlooringCalculationValues) => void;
}

export const CalculatorForm: React.FC<CalculatorFormProps> = ({
  onCalculate,
}) => {
  const form = useForm<FlooringCalculationValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      floorArea: undefined,
      materialCostPerSqFt: undefined,
      laborCostPerSqFt: undefined,
      wasteFactor: 10, // Default 10% waste factor
      additionalCosts: 0,
    },
  });

  const handleSubmit = (values: FlooringCalculationValues) => {
    onCalculate(values);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Floor Area Field */}
          <FormField
            control={form.control}
            name="floorArea"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="flex items-center">
                  Floor Area (sq ft)
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Info className="text-muted-foreground ml-2 h-4 w-4" />
                      </TooltipTrigger>
                      <TooltipContent className="max-w-sm">
                        The total area of the floor(s) to be covered. Measure
                        each room's length × width and sum them up. If you have
                        area in a different unit (like sq yards for carpet),
                        convert it (1 sq yd = 9 sq ft).
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </FormLabel>
                <FormControl>
                  <Input type="number" placeholder="e.g. 500" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Material Cost Per Sq Ft Field */}
          <FormField
            control={form.control}
            name="materialCostPerSqFt"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="flex items-center">
                  Material Cost per sq ft ($)
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Info className="text-muted-foreground ml-2 h-4 w-4" />
                      </TooltipTrigger>
                      <TooltipContent className="max-w-sm">
                        The cost of the flooring material per square foot. For
                        instance, if hardwood planks cost $4 per sq ft, enter
                        4.00. If you're using tile, maybe enter the cost of tile
                        + grout per sq ft. If material is sold per box, you can
                        derive a per sq ft price by dividing box price by
                        coverage.
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    step="0.01"
                    placeholder="e.g. 4.00"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Labor Cost Per Sq Ft Field */}
          <FormField
            control={form.control}
            name="laborCostPerSqFt"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="flex items-center">
                  Labor Cost per sq ft ($)
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Info className="text-muted-foreground ml-2 h-4 w-4" />
                      </TooltipTrigger>
                      <TooltipContent className="max-w-sm">
                        The cost of installation labor per square foot. This
                        might be what you pay installers or what you charge for
                        labor. E.g., if installers cost $2.50 per sq ft for
                        installation, enter 2.50. If you intend this calc for
                        client price, use what you charge the client for labor.
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    step="0.01"
                    placeholder="e.g. 2.50"
                    {...field}
                  />
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
                <FormLabel className="flex items-center">
                  Waste Factor (%)
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Info className="text-muted-foreground ml-2 h-4 w-4" />
                      </TooltipTrigger>
                      <TooltipContent className="max-w-sm">
                        Extra percentage of material to account for waste (cuts,
                        breakage, patterns). Commonly 5-10%. For example, 10%
                        waste on 500 sq ft means plan for 550 sq ft of material.
                        Enter 0 if you plan to use exact (not recommended).
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    step="1"
                    placeholder="e.g. 10"
                    {...field}
                  />
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
                <FormLabel className="flex items-center">
                  Additional Costs ($)
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Info className="text-muted-foreground ml-2 h-4 w-4" />
                      </TooltipTrigger>
                      <TooltipContent className="max-w-sm">
                        Any other project costs not included in the per sq ft
                        rates. This could include subfloor repair, floor
                        leveling compound, removing old flooring, baseboards or
                        trim, thresholds, delivery fees, etc. Enter the total of
                        those costs. If none, enter 0.
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    step="1"
                    placeholder="e.g. 150"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <Button type="submit" className="w-full">
          Calculate Flooring Cost
        </Button>
      </form>
    </Form>
  );
};
