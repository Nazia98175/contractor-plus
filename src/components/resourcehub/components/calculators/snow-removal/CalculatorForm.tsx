import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
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
import { Card, CardDescription } from "../../ui/card";
import { Snowflake } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../../ui/tooltip";

// Schema to validate the form inputs
const formSchema = z.object({
  baseRate: z.number().positive("Base rate must be positive"),
  includedDepth: z.number().positive("Included depth must be positive"),
  extraRate: z.number().min(0, "Extra rate must be zero or positive"),
  actualSnowfall: z.number().positive("Actual snowfall must be positive"),
});

// Type for the form values
type FormValues = z.infer<typeof formSchema>;

interface CalculatorFormProps {
  onCalculate: (values: FormValues) => void;
}

export function CalculatorForm({ onCalculate }: CalculatorFormProps) {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      baseRate: 50,
      includedDepth: 4,
      extraRate: 10,
      actualSnowfall: 6,
    },
  });

  const handleSubmit = (values: FormValues) => {
    onCalculate(values);
  };

  const renderTooltip = (content: string, children: React.ReactNode) => (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>{children}</TooltipTrigger>
        <TooltipContent className="max-w-xs">
          <p>{content}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );

  return (
    <Card className="border border-gray-200 bg-white shadow-sm">
      <CardContent className="pt-6">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleSubmit)}
            className="space-y-4"
          >
            <FormField
              control={form.control}
              name="baseRate"
              render={({ field }) => (
                <FormItem>
                  {renderTooltip(
                    "The standard fee you charge for a single snow removal service (plowing/shoveling) when snow is up to a certain depth. For example, you might charge $50 for a driveway when snowfall is up to 4 inches.",
                    <FormLabel className="flex cursor-help items-center">
                      Base Rate ($)
                      <Snowflake className="ml-1 h-3.5 w-3.5 text-blue-500" />
                    </FormLabel>,
                  )}
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="e.g. 50"
                      min={1}
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

            <FormField
              control={form.control}
              name="includedDepth"
              render={({ field }) => (
                <FormItem>
                  {renderTooltip(
                    "The snow depth that your base rate covers. If you clear up to 4 inches of snow for $50, enter 4. This is basically the 'no extra charge up to this amount' threshold.",
                    <FormLabel className="flex cursor-help items-center">
                      Included Depth (inches)
                      <Snowflake className="ml-1 h-3.5 w-3.5 text-blue-500" />
                    </FormLabel>,
                  )}
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="e.g. 4"
                      min={0.1}
                      step={0.1}
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

            <FormField
              control={form.control}
              name="extraRate"
              render={({ field }) => (
                <FormItem>
                  {renderTooltip(
                    "How much more you charge for each inch of snow beyond the included depth. For example, if 6 inches fell (which is 2 inches over a 4-inch base) and you charge $10 per extra inch, that adds $20 on top.",
                    <FormLabel className="flex cursor-help items-center">
                      Extra Rate per inch ($)
                      <Snowflake className="ml-1 h-3.5 w-3.5 text-blue-500" />
                    </FormLabel>,
                  )}
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="e.g. 10"
                      min={0}
                      step={0.1}
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

            <FormField
              control={form.control}
              name="actualSnowfall"
              render={({ field }) => (
                <FormItem>
                  {renderTooltip(
                    "The actual depth of snow for this service call. Use the measurement from the client's location or a nearby official source. This will determine if extra charges apply.",
                    <FormLabel className="flex cursor-help items-center">
                      Actual Snowfall (inches)
                      <Snowflake className="ml-1 h-3.5 w-3.5 text-blue-500" />
                    </FormLabel>,
                  )}
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="e.g. 6"
                      min={0}
                      step={0.1}
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

            <Button type="submit" className="mt-6 w-full">
              Calculate Snow Removal Price
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
