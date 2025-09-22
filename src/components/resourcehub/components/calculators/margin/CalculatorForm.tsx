import { zodResolver } from "@hookform/resolvers/zod";
import { Calculator, DollarSign, Percent } from "lucide-react";
import { useForm, Resolver } from "react-hook-form";
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

// Define the form validation schema
const calculatorSchema = z.object({
  cost: z.coerce.number().positive("Cost must be a positive number"),
  margin: z.coerce
    .number()
    .min(0, "Margin must be at least 0%")
    .max(99.99, "Margin must be less than 100%"),
});

export type CalculatorValues = z.infer<typeof calculatorSchema>;

interface CalculatorFormProps {
  onCalculate: (values: CalculatorValues) => void;
}

export function CalculatorForm({ onCalculate }: CalculatorFormProps) {
  // Initialize form with default values
  const form = useForm<CalculatorValues>({
    resolver: zodResolver(calculatorSchema) as Resolver<CalculatorValues>,
    defaultValues: {
      cost: 500,
      margin: 30,
    },
  });

  return (
    <Card className="border-shutter h-full overflow-hidden shadow-md">
      <CardHeader className="bg-gradient-to-r from-red-500 to-red-600 text-white">
        <CardTitle className="flex items-center gap-2">
          <Calculator className="h-5 w-5" />
          Calculate Markup & Margin
        </CardTitle>
        <CardDescription className="text-white/90">
          Enter your cost and desired margin to calculate the selling price
        </CardDescription>
      </CardHeader>
      <CardContent className="py-6">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onCalculate)}
            className="flex h-full flex-col"
          >
            <div className="flex flex-grow flex-col space-y-5">
              {/* Cost Input */}
              <FormField
                control={form.control}
                name="cost"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex items-center gap-1.5">
                      <DollarSign className="h-4 w-4" />
                      Cost
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="e.g. 500"
                        step="0.01"
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
                      Enter your total cost including materials, labor, and
                      overhead
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Margin Input */}
              <FormField
                control={form.control}
                name="margin"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex items-center gap-1.5">
                      <Percent className="h-4 w-4" />
                      Desired Profit Margin
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="e.g. 30"
                        step="0.01"
                        min="0"
                        max="99.99"
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
                      Enter the percentage margin you want to achieve
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <Button
              type="submit"
              className="mt-3 w-full bg-red-500 text-white hover:bg-red-600"
            >
              Calculate
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
