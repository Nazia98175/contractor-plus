import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
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
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../ui/card";
import {
  Calculator,
  Info,
  Users,
  Clock,
  DollarSign,
  Percent,
} from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../../ui/tooltip";

// Define the form validation schema
const calculatorSchema = z.object({
  workers: z.coerce.number().positive("Number of workers must be positive"),
  hoursPerWorker: z.coerce
    .number()
    .nonnegative("Hours must be zero or positive"),
  hourlyWage: z.coerce
    .number()
    .nonnegative("Hourly wage must be zero or positive"),
  laborBurden: z.coerce
    .number()
    .nonnegative("Labor burden must be zero or positive"),
  markup: z.coerce.number().nonnegative("Markup must be zero or positive"),
});

export type CalculatorValues = z.infer<typeof calculatorSchema>;

interface CalculatorFormProps {
  onCalculate: (values: CalculatorValues) => void;
}

export function CalculatorForm({ onCalculate }: CalculatorFormProps) {
  // Initialize form with default values
  const form = useForm<z.infer<typeof calculatorSchema>>({
    resolver: zodResolver(calculatorSchema),
    defaultValues: {
      workers: 3,
      hoursPerWorker: 8,
      hourlyWage: 20,
      laborBurden: 20,
      markup: 50,
    },
  });

  return (
    <Card className="border-shutter overflow-hidden shadow-md">
      <CardHeader className="bg-gradient-to-r from-red-500 to-red-600 text-white">
        <CardTitle className="flex items-center gap-2">
          <Calculator className="h-5 w-5" />
          Calculate Labor Costs
        </CardTitle>
        <CardDescription className="text-white/90">
          Enter your labor details to calculate costs and recommended charges
        </CardDescription>
      </CardHeader>
      <CardContent className="py-6">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onCalculate)} className="space-y-6">
            <div className="space-y-5">
              {/* Number of Workers */}
              <FormField<CalculatorValues>
                control={form.control}
                name="workers"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex items-center gap-1.5">
                      <Users className="h-4 w-4" />
                      Number of Workers
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Info className="text-aliceBlue ml-1 h-4 w-4 cursor-help" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="w-80 text-sm">
                              How many people are working on this job. For
                              example, if you have a crew of 3 technicians,
                              enter 3.
                            </p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="e.g. 3"
                        min="1"
                        step="1"
                        {...field}
                        onChange={(e) => {
                          const value =
                            e.target.value === ""
                              ? ""
                              : parseInt(e.target.value, 10);
                          field.onChange(value);
                        }}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Hours per Worker */}
              <FormField<CalculatorValues>
                control={form.control}
                name="hoursPerWorker"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex items-center gap-1.5">
                      <Clock className="h-4 w-4" />
                      Hours per Worker
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Info className="text-aliceBlue ml-1 h-4 w-4 cursor-help" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="w-80 text-sm">
                              The number of hours each worker will spend on the
                              job. If all workers put in an 8-hour day, enter 8.
                              Total labor hours will be calculated by
                              multiplying this by the number of workers.
                            </p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="e.g. 8"
                        min="0"
                        step="0.5"
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

              {/* Hourly Wage */}
              <FormField<CalculatorValues>
                control={form.control}
                name="hourlyWage"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex items-center gap-1.5">
                      <DollarSign className="h-4 w-4" />
                      Hourly Wage ($)
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Info className="text-aliceBlue ml-1 h-4 w-4 cursor-help" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="w-80 text-sm">
                              The pay rate for each worker per hour. Use the
                              actual wage if calculating your cost. If you want
                              to calculate what you charge the client, use your
                              billable rate per hour per worker.
                            </p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="e.g. 20"
                        min="0"
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
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Labor Burden */}
              <FormField<CalculatorValues>
                control={form.control}
                name="laborBurden"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex items-center gap-1.5">
                      <Percent className="h-4 w-4" />
                      Labor Burden (%)
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Info className="text-aliceBlue ml-1 h-4 w-4 cursor-help" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="w-80 text-sm">
                              Additional percentage on top of wages for things
                              like payroll taxes, workers' comp, benefits, etc.
                              For example, if salaries have a 20% overhead in
                              benefits and taxes, enter 20. If you're not
                              factoring this, leave it at 0.
                            </p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="e.g. 20"
                        min="0"
                        step="0.1"
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

              {/* Markup on Labor */}
              <FormField<CalculatorValues>
                control={form.control}
                name="markup"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex items-center gap-1.5">
                      <Percent className="h-4 w-4" />
                      Markup on Labor (%)
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Info className="text-aliceBlue ml-1 h-4 w-4 cursor-help" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="w-80 text-sm">
                              The percentage you want to add as profit on the
                              labor. For instance, 50 means you plan to charge
                              the client 50% more than the labor cost. If you
                              just need the raw labor cost (no profit added),
                              put 0.
                            </p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="e.g. 50"
                        min="0"
                        step="0.1"
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
            </div>

            <Button
              type="submit"
              className="w-full bg-red-500 text-white hover:bg-red-600"
            >
              Calculate
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
