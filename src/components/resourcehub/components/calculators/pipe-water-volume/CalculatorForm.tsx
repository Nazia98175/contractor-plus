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
import { Droplet, HelpCircle } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../../ui/tooltip";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../ui/select";

const formSchema = z.object({
  diameter: z
    .number()
    .positive("Diameter must be a positive number")
    .min(0.1, "Diameter must be at least 0.1"),
  diameterUnit: z.enum(["inches", "mm"]).default("inches"),
  length: z
    .number()
    .positive("Length must be a positive number")
    .min(0.1, "Length must be at least 0.1"),
  lengthUnit: z.enum(["feet", "meters"]).default("feet"),
});

export type PipeCalculatorValues = z.infer<typeof formSchema>;

interface CalculatorFormProps {
  onCalculate: (values: PipeCalculatorValues) => void;
}

export function CalculatorForm({ onCalculate }: CalculatorFormProps) {
  const form = useForm<PipeCalculatorValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      diameter: 2,
      diameterUnit: "inches",
      length: 10,
      lengthUnit: "feet",
    },
  });

  function onSubmit(values: PipeCalculatorValues) {
    onCalculate(values);
  }

  return (
    <Card className="border border-gray-200 bg-white shadow-sm">
      <CardHeader className="border-b border-gray-200 bg-white pb-4">
        <h2 className="text-lg font-medium">Calculate Pipe Water Volume</h2>
        <p className="text-muted-foreground text-sm">
          Enter pipe dimensions to calculate water volume
        </p>
      </CardHeader>
      <CardContent className="pt-6">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="space-y-4">
              {/* Pipe Diameter Field */}
              <FormField
                control={form.control}
                name="diameter"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex justify-between">
                      <FormLabel className="text-base">
                        Pipe Inner Diameter
                      </FormLabel>
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <HelpCircle className="text-muted-foreground h-4 w-4 cursor-help" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="w-80">
                              The inside width of the pipe (not including the
                              pipe walls). Use the same unit as you plan to use
                              for length. For example, a 2-inch PVC pipe has
                              ~2.067 inches inner diameter; you can just enter
                              "2" for a rough calc.
                            </p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                    <div className="flex space-x-2">
                      <div className="relative flex-grow">
                        <FormControl>
                          <Input
                            type="number"
                            placeholder="e.g. 2"
                            {...field}
                            onChange={(e) =>
                              field.onChange(parseFloat(e.target.value) || 0)
                            }
                          />
                        </FormControl>
                      </div>
                      <FormField
                        control={form.control}
                        name="diameterUnit"
                        render={({ field }) => (
                          <FormItem className="w-28">
                            <Select
                              value={field.value}
                              onValueChange={field.onChange}
                            >
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="inches" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="inches">inches</SelectItem>
                                <SelectItem value="mm">mm</SelectItem>
                              </SelectContent>
                            </Select>
                          </FormItem>
                        )}
                      />
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Pipe Length Field */}
              <FormField
                control={form.control}
                name="length"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex justify-between">
                      <FormLabel className="text-base">Pipe Length</FormLabel>
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <HelpCircle className="text-muted-foreground h-4 w-4 cursor-help" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="w-80">
                              The length of the pipe section. If you gave
                              diameter in inches, give length in feet. If you
                              gave diameter in mm, give length in meters. For
                              example, a 10 ft long pipe, or if metric, 3
                              meters.
                            </p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                    <div className="flex space-x-2">
                      <div className="relative flex-grow">
                        <FormControl>
                          <Input
                            type="number"
                            placeholder="e.g. 10"
                            {...field}
                            onChange={(e) =>
                              field.onChange(parseFloat(e.target.value) || 0)
                            }
                          />
                        </FormControl>
                      </div>
                      <FormField
                        control={form.control}
                        name="lengthUnit"
                        render={({ field }) => (
                          <FormItem className="w-28">
                            <Select
                              value={field.value}
                              onValueChange={field.onChange}
                            >
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="feet" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="feet">feet</SelectItem>
                                <SelectItem value="meters">meters</SelectItem>
                              </SelectContent>
                            </Select>
                          </FormItem>
                        )}
                      />
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <Button
              type="submit"
              size="lg"
              className="mt-4 w-full bg-red-600 hover:bg-red-700"
            >
              <Droplet className="mr-2 h-4 w-4" />
              Calculate Volume
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
