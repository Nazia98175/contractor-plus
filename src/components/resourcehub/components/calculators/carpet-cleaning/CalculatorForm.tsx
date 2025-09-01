import React from "react";
import { Button } from "../../ui/button";
import { Input } from "../../ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../ui/card";
import { Calculator, HelpCircle } from "lucide-react";
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

// Define the form validation schema
const calculatorSchema = z.object({
  carpetedArea: z.coerce
    .number()
    .positive("Area must be greater than 0")
    .int("Please enter a whole number"),
  pricePerSqFt: z.coerce.number().positive("Price must be greater than 0"),
  minimumCharge: z.coerce.number().min(0, "Cannot be negative"),
  additionalServices: z.coerce.number().min(0, "Cannot be negative"),
});

type CalculatorValues = z.infer<typeof calculatorSchema>;

interface CalculatorFormProps {
  onCalculate: (values: CalculatorValues) => void;
}

export function CalculatorForm({ onCalculate }: CalculatorFormProps) {
  // Initialize form with default values
  const form = useForm<CalculatorValues>({
    resolver: zodResolver(calculatorSchema),
    defaultValues: {
      carpetedArea: 800,
      pricePerSqFt: 0.25,
      minimumCharge: 100,
      additionalServices: 0,
    },
  });

  // Handle form submission
  const handleSubmit = (values: CalculatorValues) => {
    onCalculate(values);

    // Show toast notification when calculation is updated
    toast({
      title: "Calculation Updated",
      description: "Your carpet cleaning estimate has been calculated.",
    });
  };

  return (
    <Card className="border border-gray-200 shadow-sm">
      <CardHeader className="border-b border-gray-200 bg-gray-50">
        <CardTitle className="text-xl text-gray-800">
          Calculate Carpet Cleaning Cost
        </CardTitle>
        <CardDescription>
          Enter carpet details and pricing information
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-6">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleSubmit)}
            className="space-y-5"
          >
            {/* Carpeted Area Field */}
            <FormField
              control={form.control}
              name="carpetedArea"
              render={({ field }) => (
                <FormItem>
                  <div className="flex items-center justify-between">
                    <FormLabel>Carpeted Area</FormLabel>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <span className="inline-flex cursor-help">
                            <HelpCircle className="text-aliceBlue h-4 w-4" />
                          </span>
                        </TooltipTrigger>
                        <TooltipContent side="top" className="max-w-xs">
                          <p className="text-sm">
                            The size of all the carpeted areas combined. If you
                            have multiple rooms, add up their areas. (Length ×
                            width for each room and sum it.) If you know it in
                            square meters, convert to sq ft by multiplying by
                            10.764.
                          </p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                  <FormControl>
                    <div className="relative">
                      <Input
                        type="number"
                        placeholder="e.g. 800"
                        {...field}
                        className="pr-12 pl-3"
                      />
                      <div className="absolute inset-y-0 right-3 flex items-center text-sm text-gray-500">
                        sq ft
                      </div>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Price per Square Foot Field */}
            <FormField
              control={form.control}
              name="pricePerSqFt"
              render={({ field }) => (
                <FormItem>
                  <div className="flex items-center justify-between">
                    <FormLabel>Price per sq ft</FormLabel>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <span className="inline-flex cursor-help">
                            <HelpCircle className="text-aliceBlue h-4 w-4" />
                          </span>
                        </TooltipTrigger>
                        <TooltipContent side="top" className="max-w-xs">
                          <p className="text-sm">
                            How much you charge per square foot of carpet
                            cleaning. This may depend on carpet type or soil
                            level. For example, $0.25/ft² is $25 per 100 sq ft.
                            Enter the amount in dollars.
                          </p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                  <FormControl>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-3 flex items-center text-sm text-gray-500">
                        $
                      </div>
                      <Input
                        type="number"
                        step="0.01"
                        placeholder="e.g. 0.25"
                        {...field}
                        className="pl-6"
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Minimum Charge Field */}
            <FormField
              control={form.control}
              name="minimumCharge"
              render={({ field }) => (
                <FormItem>
                  <div className="flex items-center justify-between">
                    <FormLabel>Minimum Charge</FormLabel>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <span className="inline-flex cursor-help">
                            <HelpCircle className="text-aliceBlue h-4 w-4" />
                          </span>
                        </TooltipTrigger>
                        <TooltipContent side="top" className="max-w-xs">
                          <p className="text-sm">
                            Your minimum fee for any carpet cleaning job. Many
                            cleaners have a minimum (e.g., $100) to cover travel
                            and setup. If the calculated cost by area is below
                            this, the minimum will be used as the base price. If
                            you don't enforce a minimum, leave this as 0.
                          </p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                  <FormControl>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-3 flex items-center text-sm text-gray-500">
                        $
                      </div>
                      <Input
                        type="number"
                        step="0.01"
                        placeholder="e.g. 100"
                        {...field}
                        className="pl-6"
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Additional Services Field */}
            <FormField
              control={form.control}
              name="additionalServices"
              render={({ field }) => (
                <FormItem>
                  <div className="flex items-center justify-between">
                    <FormLabel>Additional Services</FormLabel>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <span className="inline-flex cursor-help">
                            <HelpCircle className="text-aliceBlue h-4 w-4" />
                          </span>
                        </TooltipTrigger>
                        <TooltipContent side="top" className="max-w-xs">
                          <p className="text-sm">
                            Any extra charges not included in the
                            per-square-foot rate. For instance, maybe $20 for
                            deep stain treatment, $15 for moving furniture, etc.
                            Sum up all those extras for the job and enter the
                            total here.
                          </p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                  <FormControl>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-3 flex items-center text-sm text-gray-500">
                        $
                      </div>
                      <Input
                        type="number"
                        step="0.01"
                        placeholder="e.g. 50"
                        {...field}
                        className="pl-6"
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              type="submit"
              size="lg"
              className="mt-4 w-full bg-red-600 text-white hover:bg-red-700"
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
