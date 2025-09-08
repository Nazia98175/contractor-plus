import { zodResolver } from "@hookform/resolvers/zod";
import { Calculator, DollarSign, Info, Percent } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "../../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../ui/card";
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
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../../ui/tooltip";

// Define the form validation schema
const calculatorSchema = z.object({
  partCost: z.coerce.number().positive("Part cost must be a positive number"),
  markup: z.coerce.number().min(0, "Markup must be at least 0%"),
  salesTax: z.coerce.number().min(0, "Sales tax must be at least 0%"),
});

export type CalculatorValues = z.infer<typeof calculatorSchema>;

interface CalculatorFormProps {
  onCalculate: (values: CalculatorValues) => void;
}

export function CalculatorForm({ onCalculate }: CalculatorFormProps) {
  // Initialize form with default values
  const form = useForm<CalculatorValues>({
    resolver: zodResolver(calculatorSchema),
    defaultValues: {
      partCost: 85,
      markup: 30,
      salesTax: 8,
    },
  });

  return (
    <Card className="border-shutter h-full overflow-hidden shadow-md">
      <CardHeader className="bg-gradient-to-r from-red-500 to-red-600 text-white">
        <CardTitle className="flex items-center gap-2">
          <Calculator className="h-5 w-5" />
          Calculate HVAC Part Price
        </CardTitle>
        <CardDescription className="text-white/90">
          Enter part cost, markup percentage, and sales tax to calculate the
          selling price
        </CardDescription>
      </CardHeader>
      <CardContent className="py-6">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onCalculate)}
            className="flex h-full flex-col space-y-6"
          >
            <div className="flex flex-grow flex-col space-y-5">
              {/* Part Cost Input */}
              <FormField
                control={form.control}
                name="partCost"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex items-center gap-1.5">
                      <DollarSign className="h-4 w-4" />
                      Part Cost ($)
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger type="button">
                            <Info className="text-aliceBlue ml-1 h-4 w-4" />
                          </TooltipTrigger>
                          <TooltipContent className="max-w-xs">
                            The amount you paid for the HVAC part or equipment.
                            For example, if the part costs you $85.00 from your
                            supplier, enter 85.00.
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="e.g. 85.00"
                        step="0.01"
                        min="0"
                        {...field}
                        onChange={(e) => {
                          const value =
                            e.target.value === ""
                              ? ""
                              : parseFloat(e.target.value);
                          field.onChange(value);
                        }}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Markup Input */}
              <FormField
                control={form.control}
                name="markup"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex items-center gap-1.5">
                      <Percent className="h-4 w-4" />
                      Markup (%)
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger type="button">
                            <Info className="text-aliceBlue ml-1 h-4 w-4" />
                          </TooltipTrigger>
                          <TooltipContent className="max-w-xs">
                            How much above your cost you plan to charge the
                            customer, as a percentage of your cost. For
                            instance, 30 means a 30% markup, so a part costing
                            $85 would be marked up to 1.30 × $85.
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="e.g. 30"
                        step="0.1"
                        min="0"
                        {...field}
                        onChange={(e) => {
                          const value =
                            e.target.value === ""
                              ? ""
                              : parseFloat(e.target.value);
                          field.onChange(value);
                        }}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Sales Tax Input */}
              <FormField
                control={form.control}
                name="salesTax"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex items-center gap-1.5">
                      <Percent className="h-4 w-4" />
                      Sales Tax (%)
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger type="button">
                            <Info className="text-aliceBlue ml-1 h-4 w-4" />
                          </TooltipTrigger>
                          <TooltipContent className="max-w-xs">
                            If you need to charge sales tax on parts, enter the
                            tax rate here. For example, if sales tax is 8%,
                            enter 8.0. If you don't want to include tax in this
                            calculation, use 0.
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="e.g. 8.0"
                        step="0.1"
                        min="0"
                        {...field}
                        onChange={(e) => {
                          const value =
                            e.target.value === ""
                              ? ""
                              : parseFloat(e.target.value);
                          field.onChange(value);
                        }}
                      />
                    </FormControl>
                    <FormDescription>
                      Enter 0 if you don't want to include tax in the
                      calculation
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-red-500 text-white hover:bg-red-600"
            >
              Calculate Price
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
