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
  renovationArea: z.coerce
    .number()
    .positive("Renovation area must be greater than 0"),
  costPerSqFt: z.coerce
    .number()
    .positive("Cost per sq ft must be greater than 0"),
  contingencyPercentage: z.coerce.number(),
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
      renovationArea: 200,
      costPerSqFt: 100,
      contingencyPercentage: 15,
    },
  });

  // Handle form submission
  const handleSubmit = (values: CalculatorValues) => {
    onCalculate(values);

    // Show toast notification when calculation is updated
    toast({
      title: "Calculation Updated",
      description: "Your renovation cost estimate has been calculated.",
    });
  };

  return (
    <Card className="border-shutter overflow-hidden border shadow-sm">
      <CardHeader className="bg-shutter border-stiletto border-b">
        <CardTitle className="text-aliceBlue text-xl">
          Calculate Renovation Cost
        </CardTitle>
        <CardDescription>
          Enter project details to estimate renovation costs
        </CardDescription>
      </CardHeader>
      <CardContent className="py-6">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleSubmit)}
            className="space-y-5"
          >
            {/* Renovation Area Field */}
            <FormField
              control={form.control}
              name="renovationArea"
              render={({ field }) => (
                <FormItem>
                  <div className="flex items-center justify-between">
                    <FormLabel>Renovation Area</FormLabel>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <span className="inline-flex cursor-help">
                            <HelpCircle className="text-aliceBlue h-4 w-4" />
                          </span>
                        </TooltipTrigger>
                        <TooltipContent side="top" className="max-w-xs">
                          <p className="text-sm">
                            The size of the space that will be renovated. For
                            example, if you're remodeling a 10' x 20' kitchen,
                            that's 200 sq ft (enter 200). If multiple rooms, sum
                            their areas. Convert from m² if needed (e.g., 50 m²
                            ≈ 538 ft²).
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

            {/* Cost per Square Foot Field */}
            <FormField
              control={form.control}
              name="costPerSqFt"
              render={({ field }) => (
                <FormItem>
                  <div className="flex items-center justify-between">
                    <FormLabel>Cost per sq ft</FormLabel>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <span className="inline-flex cursor-help">
                            <HelpCircle className="text-aliceBlue h-4 w-4" />
                          </span>
                        </TooltipTrigger>
                        <TooltipContent side="top" className="max-w-xs">
                          <p className="text-sm">
                            How much you estimate the renovation will cost per
                            square foot. This should account for the scope of
                            work – e.g., a cosmetic renovation might be $50/ft²,
                            while a full gut remodel with high-end finishes
                            might be $200/ft² or more. Use a value that matches
                            the complexity and finish level of your project.
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

            {/* Contingency Percentage Field */}
            <FormField
              control={form.control}
              name="contingencyPercentage"
              render={({ field }) => (
                <FormItem>
                  <div className="flex items-center justify-between">
                    <FormLabel>Contingency</FormLabel>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <span className="inline-flex cursor-help">
                            <HelpCircle className="text-aliceBlue h-4 w-4" />
                          </span>
                        </TooltipTrigger>
                        <TooltipContent side="top" className="max-w-xs">
                          <p className="text-sm">
                            An extra percentage to cover unexpected expenses
                            (very common in renovations – think hidden water
                            damage or change orders). For example, 15 means add
                            15% of the calculated cost as a buffer. If you
                            believe your estimate is solid and covers
                            everything, you can leave this at 0.
                          </p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                  <FormControl>
                    <div className="relative">
                      <Input
                        type="number"
                        step="0.1"
                        placeholder="e.g. 15"
                        {...field}
                        className="pr-6 pl-3"
                      />
                      <div className="absolute inset-y-0 right-3 flex items-center text-sm text-gray-500">
                        %
                      </div>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" size="lg" className="mt-4 w-full">
              <Calculator className="mr-2 h-5 w-5" />
              Calculate Cost
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
