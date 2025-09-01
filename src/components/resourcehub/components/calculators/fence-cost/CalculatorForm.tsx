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
import { Fence, HelpCircle } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../../ui/tooltip";
import { FenceCostValues } from "@/pages/calculators/FenceCostCalculator";

// Define schema for form validation
const formSchema = z.object({
  fenceLength: z
    .number()
    .nonnegative("Fence length cannot be negative")
    .min(1, "Fence length must be at least 1 foot"),
  costPerFoot: z
    .number()
    .nonnegative("Cost per foot cannot be negative")
    .min(0.01, "Cost per foot must be greater than 0"),
  numberOfGates: z
    .number()
    .int("Number of gates must be a whole number")
    .nonnegative("Number of gates cannot be negative"),
  costPerGate: z.number().nonnegative("Cost per gate cannot be negative"),
  additionalCosts: z
    .number()
    .nonnegative("Additional costs cannot be negative")
    .default(0),
});

interface CalculatorFormProps {
  onCalculate: (values: FenceCostValues) => void;
}

export function CalculatorForm({ onCalculate }: CalculatorFormProps) {
  // Initialize form with default values
  const form = useForm<FenceCostValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fenceLength: 150,
      costPerFoot: 25,
      numberOfGates: 2,
      costPerGate: 150,
      additionalCosts: 200,
    },
  });

  function onSubmit(values: FenceCostValues) {
    onCalculate(values);
  }

  return (
    <Card className="border-stiletto bg-shutter border shadow-sm">
      <CardHeader className="border-stiletto border-b pb-4">
        <h2 className="text-lg font-medium">Calculate Fence Cost</h2>
        <p className="text-aliceBlue text-sm">Enter fence details and costs</p>
      </CardHeader>
      <CardContent className="pt-6">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            {/* Fence Length Field */}
            <FormField
              control={form.control}
              name="fenceLength"
              render={({ field }) => (
                <FormItem>
                  <div className="flex justify-between">
                    <FormLabel className="text-base">
                      Fence Length (ft)
                    </FormLabel>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <HelpCircle className="text-aliceBlue h-4 w-4 cursor-help" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p className="w-80">
                            The total running length of the fence line in feet.
                            Measure all sides of the area where the fence will
                            go and sum up. For example, a 50'x50' backyard might
                            need ~200 ft of fencing (minus any sides not
                            fenced).
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

            {/* Cost Per Linear Foot Field */}
            <FormField
              control={form.control}
              name="costPerFoot"
              render={({ field }) => (
                <FormItem>
                  <div className="flex justify-between">
                    <FormLabel className="text-base">
                      Cost per Linear Foot ($)
                    </FormLabel>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <HelpCircle className="text-aliceBlue h-4 w-4 cursor-help" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p className="w-80">
                            The average cost per foot for the type of fence.
                            This should include materials and installation labor
                            for one foot of fence. It varies by material: e.g.,
                            a wood privacy fence might be $20-30/ft, vinyl might
                            be $30-50/ft, chain link maybe $15-20/ft. Use your
                            expected rate.
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
                        placeholder="e.g. 25"
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

            {/* Number of Gates Field */}
            <FormField
              control={form.control}
              name="numberOfGates"
              render={({ field }) => (
                <FormItem>
                  <div className="flex justify-between">
                    <FormLabel className="text-base">Number of Gates</FormLabel>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <HelpCircle className="text-aliceBlue h-4 w-4 cursor-help" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p className="w-80">
                            How many gates (entrances) will be in the fence.
                            Count both walk-through and drive-through gates. If
                            none, enter 0.
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
                        field.onChange(parseInt(e.target.value, 10) || 0)
                      }
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Cost per Gate Field */}
            <FormField
              control={form.control}
              name="costPerGate"
              render={({ field }) => (
                <FormItem>
                  <div className="flex justify-between">
                    <FormLabel className="text-base">
                      Cost per Gate ($)
                    </FormLabel>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <HelpCircle className="text-aliceBlue h-4 w-4 cursor-help" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p className="w-80">
                            Extra cost for each gate. Gates involve extra posts,
                            hardware, and labor, so there's typically a flat
                            add-on per gate. For example, a basic gate might add
                            $100-$200 each. Enter your expected cost for each
                            gate of the type you'll install.
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
                        placeholder="e.g. 150"
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
                      Additional Costs ($)
                    </FormLabel>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <HelpCircle className="text-aliceBlue h-4 w-4 cursor-help" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p className="w-80">
                            Any other costs not covered above. For instance,
                            tearing out and disposing of an old fence, difficult
                            terrain adjustments, custom ornamentation, permit
                            fees, or painting/staining the fence after
                            installation. Sum those and enter here. If none, you
                            can leave 0.
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
                        placeholder="e.g. 200"
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

            <Button
              type="submit"
              size="lg"
              className="mt-6 w-full bg-red-600 hover:bg-red-700"
            >
              <Fence className="mr-2 h-4 w-4" />
              Calculate
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
