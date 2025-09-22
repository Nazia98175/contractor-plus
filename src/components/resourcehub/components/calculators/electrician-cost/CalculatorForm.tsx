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
import { Zap, HelpCircle } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../../ui/tooltip";

// Define schema for form validation
const formSchema = z.object({
  baseWage: z
    .number()
    .positive("Base wage must be a positive number")
    .min(1, "Base wage must be at least $1"),
  laborBurden: z
    .number()
    .min(0, "Labor burden cannot be negative")
    .max(100, "Labor burden cannot exceed 100%"),
  overhead: z.number().min(0, "Overhead cannot be negative"),
  profitMarkup: z
    .number()
    .min(0, "Profit markup cannot be negative")
    .max(200, "Profit markup should be 200% or less"),
});

type CalculatorFormValues = z.infer<typeof formSchema>;

interface CalculatorFormProps {
  onCalculate: (values: CalculatorFormValues) => void;
}

export function CalculatorForm({ onCalculate }: CalculatorFormProps) {
  // Initialize form with default values
  const form = useForm<CalculatorFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      baseWage: 20,
      laborBurden: 20,
      overhead: 10,
      profitMarkup: 25,
    },
  });

  function onSubmit(values: CalculatorFormValues) {
    onCalculate(values);
  }

  return (
    <Card className="border-stiletto bg-shutter h-full border shadow-sm">
      <CardHeader className="border-stiletto border-b pb-4">
        <h2 className="text-lg font-medium">
          Calculate Electrician Hourly Rate
        </h2>
        <p className="text-aliceBlue text-sm">
          Enter labor costs and pricing information
        </p>
      </CardHeader>
      <CardContent className="py-6">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex h-full flex-col"
          >
            <div className="flex flex-grow flex-col gap-4">
              {/* Base Hourly Wage Field */}
              <FormField
                control={form.control}
                name="baseWage"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex justify-between">
                      <FormLabel className="text-base">
                        Base Hourly Wage ($)
                      </FormLabel>
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <HelpCircle className="text-aliceBlue h-4 w-4 cursor-help" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="w-80">
                              The actual wage paid to the electrician per hour.
                              For example, if you (or your employee) electrician
                              makes $20/hour, enter 20. If you're calculating
                              for yourself, it might be what income per hour you
                              target as "wage" before overhead and profit.
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
                          placeholder="e.g. 20"
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
              {/* Labor Burden Field */}
              <FormField
                control={form.control}
                name="laborBurden"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex justify-between">
                      <FormLabel className="text-base">
                        Labor Burden (%)
                      </FormLabel>
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <HelpCircle className="text-aliceBlue h-4 w-4 cursor-help" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="w-80">
                              The additional costs as a percentage of wage for
                              things like payroll taxes, workers comp, benefits,
                              etc. For example, if these add roughly 20% to the
                              wage, enter 20. If you're not sure, 15-30% is
                              common in trades.
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
                          className="pr-6"
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
              {/* Overhead per Hour Field */}
              <FormField
                control={form.control}
                name="overhead"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex justify-between">
                      <FormLabel className="text-base">
                        Overhead per Hour ($)
                      </FormLabel>
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <HelpCircle className="text-aliceBlue h-4 w-4 cursor-help" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="w-80">
                              An estimate of your business overhead allocated to
                              each billable hour. To find this, sum up monthly
                              overhead (office rent, truck, gas, insurance,
                              phone, etc.) and divide by billable hours in a
                              month.
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
                          placeholder="e.g. 10"
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
                              The percentage you want to earn as profit on top
                              of all costs. This will effectively determine your
                              billing (charge) rate above break-even. For
                              instance, 25 means you add 25% on top.
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
                          className="pr-6"
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
              className="mt-6 w-full bg-red-600 hover:bg-red-700"
            >
              <Zap className="mr-2 h-4 w-4" />
              Calculate
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
