import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "../../ui/button";
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
import { Card, CardContent, CardHeader, CardTitle } from "../../ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../../ui/tooltip";
import { Info } from "lucide-react";

const formSchema = z.object({
  areaSqFt: z.coerce.number().min(1, "Area must be at least 1 sq ft"),
  paverLength: z.coerce.number().min(0.1, "Length must be greater than 0"),
  paverWidth: z.coerce.number().min(0.1, "Width must be greater than 0"),
  wasteFactor: z.coerce.number().min(0, "Waste factor cannot be negative"),
  costPerPaver: z.coerce.number().min(0, "Cost cannot be negative"),
});

interface CalculatorFormProps {
  onCalculate: (values: z.infer<typeof formSchema>) => void;
}

export function CalculatorForm({ onCalculate }: CalculatorFormProps) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      areaSqFt: 200,
      paverLength: 8,
      paverWidth: 4,
      wasteFactor: 5,
      costPerPaver: 0.5,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    onCalculate(values);
  }

  return (
    <Card className="border border-gray-200 bg-white shadow-sm">
      <CardHeader>
        <CardTitle className="text-xl">Enter Paver Information</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="areaSqFt"
              render={({ field }) => (
                <FormItem>
                  <div className="flex items-center justify-between">
                    <FormLabel>Area to Pave (sq ft)</FormLabel>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger type="button">
                          <Info className="text-muted-foreground h-4 w-4" />
                        </TooltipTrigger>
                        <TooltipContent className="max-w-xs">
                          The surface area that will be paved. Measure the
                          length × width of the patio, walkway, or driveway in
                          feet, and enter that area.
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="e.g. 200"
                      step="any"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <FormField
                control={form.control}
                name="paverLength"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex items-center justify-between">
                      <FormLabel>Paver Length (inches)</FormLabel>
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger type="button">
                            <Info className="text-muted-foreground h-4 w-4" />
                          </TooltipTrigger>
                          <TooltipContent className="max-w-xs">
                            The length of one paver unit. For rectangular
                            pavers, enter the longer side here.
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="e.g. 8"
                        step="any"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="paverWidth"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex items-center justify-between">
                      <FormLabel>Paver Width (inches)</FormLabel>
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger type="button">
                            <Info className="text-muted-foreground h-4 w-4" />
                          </TooltipTrigger>
                          <TooltipContent className="max-w-xs">
                            The width of one paver unit. For rectangular pavers,
                            enter the shorter side here.
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="e.g. 4"
                        step="any"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="wasteFactor"
              render={({ field }) => (
                <FormItem>
                  <div className="flex items-center justify-between">
                    <FormLabel>Waste Factor (%)</FormLabel>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger type="button">
                          <Info className="text-muted-foreground h-4 w-4" />
                        </TooltipTrigger>
                        <TooltipContent className="max-w-xs">
                          Extra percentage of pavers to account for cutting
                          pieces and any damages. Typically at least 5%. For
                          complex patterns or lots of cuts, maybe 10% or more.
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="e.g. 5"
                      step="any"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="costPerPaver"
              render={({ field }) => (
                <FormItem>
                  <div className="flex items-center justify-between">
                    <FormLabel>Cost per Paver ($)</FormLabel>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger type="button">
                          <Info className="text-muted-foreground h-4 w-4" />
                        </TooltipTrigger>
                        <TooltipContent className="max-w-xs">
                          The price for one paver unit. If a single paver costs
                          $0.50, enter 0.50.
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="e.g. 0.50"
                      step="0.01"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full">
              Calculate
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
