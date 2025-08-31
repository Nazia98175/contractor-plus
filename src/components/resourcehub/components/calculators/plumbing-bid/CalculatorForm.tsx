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
import { PiggyBank, HelpCircle, Timer, DollarSign, Wrench } from "lucide-react";
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
  materialsCost: z.coerce.number().min(0, "Materials cost cannot be negative"),
  laborHours: z.coerce.number().min(0, "Labor hours cannot be negative"),
  laborRate: z.coerce.number().min(0, "Labor rate cannot be negative"),
  otherCosts: z.coerce.number().min(0, "Other costs cannot be negative"),
  profitMarkup: z.coerce.number().min(0, "Profit markup cannot be negative"),
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
      materialsCost: 300,
      laborHours: 16,
      laborRate: 50,
      otherCosts: 100,
      profitMarkup: 20,
    },
  });

  // Handle form submission
  const handleSubmit = (values: CalculatorValues) => {
    onCalculate(values);

    // Show toast notification when calculation is updated
    toast({
      title: "Calculation Updated",
      description: "Your plumbing bid has been calculated.",
    });
  };

  return (
    <Card className="border border-gray-200 shadow-sm">
      <CardHeader className="border-b border-gray-200 bg-gray-50">
        <CardTitle className="text-xl text-gray-800">
          Calculate Plumbing Bid
        </CardTitle>
        <CardDescription>
          Enter your costs and pricing information
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-6">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleSubmit)}
            className="space-y-5"
          >
            {/* Materials Cost Field */}
            <FormField
              control={form.control}
              name="materialsCost"
              render={({ field }) => (
                <FormItem>
                  <div className="flex items-center justify-between">
                    <FormLabel>Materials Cost</FormLabel>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <span className="inline-flex cursor-help">
                            <HelpCircle className="text-muted-foreground h-4 w-4" />
                          </span>
                        </TooltipTrigger>
                        <TooltipContent side="top" className="max-w-xs">
                          <p className="text-sm">
                            Sum of all plumbing materials and parts needed
                            (pipes, fittings, valves, etc.). If you've estimated
                            $300 worth of materials, enter 300.
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
                        placeholder="e.g. 300"
                        {...field}
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
                  <div className="flex items-center justify-between">
                    <FormLabel>Labor Hours</FormLabel>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <span className="inline-flex cursor-help">
                            <HelpCircle className="text-muted-foreground h-4 w-4" />
                          </span>
                        </TooltipTrigger>
                        <TooltipContent side="top" className="max-w-xs">
                          <p className="text-sm">
                            Total man-hours required. If 2 plumbers will work 8
                            hours each, that's 16 labor hours. Include all
                            on-site labor time.
                          </p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                  <FormControl>
                    <div className="relative">
                      <Input
                        type="number"
                        step="0.5"
                        placeholder="e.g. 16"
                        {...field}
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
                  <div className="flex items-center justify-between">
                    <FormLabel>Labor Rate ($/hr)</FormLabel>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <span className="inline-flex cursor-help">
                            <HelpCircle className="text-muted-foreground h-4 w-4" />
                          </span>
                        </TooltipTrigger>
                        <TooltipContent side="top" className="max-w-xs">
                          <p className="text-sm">
                            Hourly wage or billable rate per plumber. If each
                            plumber costs or is billed at $50/hour, enter 50.
                            (If you have varying rates, use an average or
                            calculate total labor cost separately and divide by
                            hours.)
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

            {/* Other Costs Field */}
            <FormField
              control={form.control}
              name="otherCosts"
              render={({ field }) => (
                <FormItem>
                  <div className="flex items-center justify-between">
                    <FormLabel>Other Costs</FormLabel>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <span className="inline-flex cursor-help">
                            <HelpCircle className="text-muted-foreground h-4 w-4" />
                          </span>
                        </TooltipTrigger>
                        <TooltipContent side="top" className="max-w-xs">
                          <p className="text-sm">
                            Any additional expenses for the job. This could be
                            permit fees, subcontractor charges, equipment rental
                            (like a jackhammer for a sewer line), or disposal
                            fees. Enter the sum of those costs. If none, leave
                            0.
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

            {/* Profit Markup Field */}
            <FormField
              control={form.control}
              name="profitMarkup"
              render={({ field }) => (
                <FormItem>
                  <div className="flex items-center justify-between">
                    <FormLabel>Profit Markup (%)</FormLabel>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <span className="inline-flex cursor-help">
                            <HelpCircle className="text-muted-foreground h-4 w-4" />
                          </span>
                        </TooltipTrigger>
                        <TooltipContent side="top" className="max-w-xs">
                          <p className="text-sm">
                            The percentage you want to add on top of all costs
                            as profit. For example, 20 means you'll add 20% to
                            your total cost. This will be your profit margin
                            roughly ~16.7% of the final price. If you already
                            have profit built into your material/labor rates,
                            you might put 0.
                          </p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                  <FormControl>
                    <div className="relative">
                      <Input
                        type="number"
                        step="1"
                        placeholder="e.g. 20"
                        {...field}
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
              <Wrench className="mr-2 h-5 w-5" />
              Calculate Bid
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
