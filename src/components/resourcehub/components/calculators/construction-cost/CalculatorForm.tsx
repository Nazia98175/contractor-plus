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
  projectSize: z.coerce
    .number()
    .positive("Project size must be greater than 0"),
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
      projectSize: 2500,
      costPerSqFt: 150,
      contingencyPercentage: 10,
    },
  });

  // Handle form submission
  const handleSubmit = (values: CalculatorValues) => {
    onCalculate(values);

    // Show toast notification when calculation is updated
    toast({
      title: "Calculation Updated",
      description: "Your construction cost estimate has been calculated.",
    });
  };

  return (
    <Card className="border-shutter overflow-hidden border shadow-sm">
      <CardHeader className="bg-shutter border-stiletto border-b">
        <CardTitle className="text-aliceBlue text-xl">
          Calculate Construction Cost
        </CardTitle>
        <CardDescription>
          Enter project details to estimate construction costs
        </CardDescription>
      </CardHeader>
      <CardContent className="py-6">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleSubmit)}
            className="space-y-5"
          >
            {/* Project Size Field */}
            <FormField
              control={form.control}
              name="projectSize"
              render={({ field }) => (
                <FormItem>
                  <div className="flex items-center justify-between">
                    <FormLabel>Project Size</FormLabel>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <span className="inline-flex cursor-help">
                            <HelpCircle className="text-aliceBlue h-4 w-4" />
                          </span>
                        </TooltipTrigger>
                        <TooltipContent side="top" className="max-w-xs">
                          <p className="text-sm">
                            The size of the project in square feet. If you're
                            building a 2,500 sq ft house, enter 2500. If you
                            have dimensions in meters, convert to sq ft. (For
                            example, 200 m² ≈ 2,153 ft².) This can be total
                            floor area for a building or the relevant area for
                            the construction task.
                          </p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                  <FormControl>
                    <div className="relative">
                      <Input
                        type="number"
                        placeholder="e.g. 2500"
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
                            The estimated all-in cost per square foot for the
                            type of construction. This should include typical
                            materials, labor, and profit for a project of this
                            type. For instance, a mid-range home might be
                            $150/ft², a high-end custom home could be $300/ft²,
                            etc.
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
                        placeholder="e.g. 150"
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
                    <FormLabel>Contingency/Overhead</FormLabel>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <span className="inline-flex cursor-help">
                            <HelpCircle className="text-aliceBlue h-4 w-4" />
                          </span>
                        </TooltipTrigger>
                        <TooltipContent side="top" className="max-w-xs">
                          <p className="text-sm">
                            A percentage to cover any extra costs or overhead.
                            If you want to add, say, 10% for safety (contingency
                            for unexpected issues or just general overhead and
                            management costs), enter 10. If you think your per
                            sq ft cost already covers everything and you don't
                            need an extra buffer, enter 0.
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
                        placeholder="e.g. 10"
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

            <Button
              type="submit"
              size="lg"
              className="bg-primary hover:bg-primary/90 mt-4 w-full text-white"
            >
              <Calculator className="mr-2 h-5 w-5" />
              Calculate Cost
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
