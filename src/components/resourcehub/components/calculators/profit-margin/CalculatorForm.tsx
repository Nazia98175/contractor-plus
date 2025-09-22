import React from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../ui/card";
import { Calculator, DollarSign, HelpCircle } from "lucide-react";
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
import { Input } from "../../ui/input";
import { Button } from "../../ui/button";

// Define the form validation schema
const calculatorSchema = z.object({
  totalCost: z.coerce.number().min(0, "Cost cannot be negative"),
  priceToClient: z.coerce.number().min(0, "Price cannot be negative"),
});

type CalculatorValues = z.infer<typeof calculatorSchema>;

interface CalculatorFormProps {
  onCalculate: (values: CalculatorValues) => void;
}

export function CalculatorForm({ onCalculate }: CalculatorFormProps) {
  // Initialize form with default values
  // Initialize form with default values
  const form = useForm<CalculatorValues>({
    resolver: zodResolver(calculatorSchema) as any,
    defaultValues: {
      totalCost: 4500,
      priceToClient: 6000,
    },
  });

  // Handle form submission
  const handleSubmit = (values: CalculatorValues) => {
    onCalculate(values);

    // Show toast notification when calculation is updated
    toast({
      title: "Calculation Updated",
      description: "Your profit margin has been calculated.",
    });
  };

  return (
    <Card className="border-shutter h-full overflow-hidden border shadow-sm">
      <CardHeader className="bg-shutter border-stiletto border-b">
        <CardTitle className="text-aliceBlue text-xl">
          Calculate Profit Margin
        </CardTitle>
        <CardDescription>
          Enter your costs and pricing information
        </CardDescription>
      </CardHeader>
      <CardContent className="py-6">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleSubmit)}
            className="flex h-full flex-col gap-6"
          >
            {/* Total Cost Field */}
            <div className="flex flex-grow flex-col gap-3">
              <FormField
                control={form.control}
                name="totalCost"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex items-center justify-between">
                      <FormLabel>Total Cost</FormLabel>
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <span className="inline-flex cursor-help">
                              <HelpCircle className="text-aliceBlue h-4 w-4" />
                            </span>
                          </TooltipTrigger>
                          <TooltipContent side="top" className="max-w-xs">
                            <p className="text-sm">
                              The sum of all costs for the job or product.
                              Include materials, labor, subcontractors, permits,
                              etc. Basically, what it costs you. For example, if
                              you're doing a remodel and spent $4,500 on
                              everything, enter 4500.
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
                          placeholder="e.g. 4500"
                          {...field}
                          className="pl-6"
                        />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* Price to Client Field */}
              <FormField
                control={form.control}
                name="priceToClient"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex items-center justify-between">
                      <FormLabel>Price to Client</FormLabel>
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <span className="inline-flex cursor-help">
                              <HelpCircle className="text-aliceBlue h-4 w-4" />
                            </span>
                          </TooltipTrigger>
                          <TooltipContent side="top" className="max-w-xs">
                            <p className="text-sm">
                              The amount you're charging the customer. This is
                              your revenue for the job. For instance, if you
                              quoted the client $6,000, enter 6000.
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
                          placeholder="e.g. 6000"
                          {...field}
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
              className="w-full bg-red-600 text-white hover:bg-red-700"
            >
              <Calculator className="h-5 w-5" />
              Calculate
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
