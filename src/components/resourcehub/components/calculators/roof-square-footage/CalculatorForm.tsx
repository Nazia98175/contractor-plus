import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "../../ui/button";
import { Card, CardContent, CardDescription } from "../../ui/card";
import { Input } from "../../ui/input";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../ui/form";
import { Info } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../../ui/tooltip";

const formSchema = z.object({
  length: z.coerce
    .number()
    .positive("Length must be greater than 0")
    .min(1, "Length must be at least 1 ft"),
  width: z.coerce
    .number()
    .positive("Width must be greater than 0")
    .min(1, "Width must be at least 1 ft"),
  pitch: z.coerce
    .number()
    .min(0, "Pitch must be 0 or greater")
    .max(18, "Pitch is typically below 18/12"),
});

type FormValues = z.infer<typeof formSchema>;

interface CalculatorFormProps {
  onCalculate: (values: FormValues) => void;
}

export function CalculatorForm({ onCalculate }: CalculatorFormProps) {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      length: 0,
      width: 0,
      pitch: 0,
    },
  });

  const handleSubmit = (values: FormValues) => {
    onCalculate(values);
  };

  return (
    <Card className="border-stiletto bg-shutter border shadow-sm">
      <CardContent className="py-6">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleSubmit)}
            className="space-y-6"
          >
            <FormField
              control={form.control}
              name="length"
              render={({ field }) => (
                <FormItem>
                  <div className="flex items-center gap-2">
                    <FormLabel>Building Length (ft)</FormLabel>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <div className="cursor-help">
                            <Info className="h-4 w-4 text-gray-300" />
                          </div>
                        </TooltipTrigger>
                        <TooltipContent className="max-w-xs">
                          <p>
                            The length of the house/building along the ridge. In
                            other words, how long the building is under the roof
                            from one end to the other, in feet. If unsure,
                            measure or use the house plans.
                          </p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                  <FormControl>
                    <Input type="number" placeholder="e.g. 50" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="width"
              render={({ field }) => (
                <FormItem>
                  <div className="flex items-center gap-2">
                    <FormLabel>Building Width (ft)</FormLabel>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <div className="cursor-help">
                            <Info className="h-4 w-4 text-gray-300" />
                          </div>
                        </TooltipTrigger>
                        <TooltipContent className="max-w-xs">
                          <p>
                            The width of the building from one eave to the other
                            (not the sloping roof side, the horizontal
                            distance). This is basically the short side of the
                            building footprint.
                          </p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                  <FormControl>
                    <Input type="number" placeholder="e.g. 30" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="pitch"
              render={({ field }) => (
                <FormItem>
                  <div className="flex items-center gap-2">
                    <FormLabel>Roof Pitch (rise/12)</FormLabel>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <div className="cursor-help">
                            <Info className="h-4 w-4 text-gray-300" />
                          </div>
                        </TooltipTrigger>
                        <TooltipContent className="max-w-xs">
                          <p>
                            The steepness of the roof, given as the vertical
                            rise over 12 inches horizontal run. Common pitches:
                            4 (for 4/12, a gentle roof), 6 (6/12, moderately
                            steep), 9 (9/12, quite steep), etc. Enter just the
                            rise number. If the roof is flat or nearly flat, you
                            can put 0.
                          </p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                  <FormControl>
                    <Input type="number" placeholder="e.g. 6" {...field} />
                  </FormControl>
                  <FormDescription>
                    Enter the rise in inches over 12 inches of run. For a 6/12
                    pitch, enter 6.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              type="submit"
              variant="default"
              className="w-full bg-red-600 hover:bg-red-700"
            >
              Calculate Roof Area
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
