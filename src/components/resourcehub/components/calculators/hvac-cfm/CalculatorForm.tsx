import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { AirVent, Calculator, HelpCircle } from "lucide-react";
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
import { toast } from "@/hooks/use-toast";

// Define form schema with validation
const formSchema = z.object({
  roomLength: z.coerce.number().positive("Length must be greater than 0"),
  roomWidth: z.coerce.number().positive("Width must be greater than 0"),
  ceilingHeight: z.coerce.number().positive("Height must be greater than 0"),
  airChangesPerHour: z.coerce.number().positive("ACH must be greater than 0"),
});

type FormValues = z.infer<typeof formSchema>;

interface CalculatorFormProps {
  onCalculate: (values: FormValues) => void;
}

export function CalculatorForm({ onCalculate }: CalculatorFormProps) {
  const [isMetric, setIsMetric] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      roomLength: undefined,
      roomWidth: undefined,
      ceilingHeight: undefined,
      airChangesPerHour: 5, // Default to 5 ACH as a reasonable starting point
    },
  });

  const onSubmit = (values: FormValues) => {
    onCalculate(values);

    // Show toast notification when calculation is updated
    toast({
      title: "Calculation Updated",
      description: `Your estimated required airflow is ${((values.roomLength * values.roomWidth * values.ceilingHeight * values.airChangesPerHour) / 60).toFixed(2)} CFM.`,
    });
  };

  return (
    <Card className="border-shutter overflow-hidden border shadow-sm">
      <CardHeader className="bg-shutter border-stiletto border-b">
        <CardTitle className="text-aliceBlue flex items-center text-xl">
          <AirVent className="text-primary mr-2 h-5 w-5" />
          Calculate Required CFM
        </CardTitle>
        <CardDescription>
          Enter room dimensions and required air changes per hour
        </CardDescription>
      </CardHeader>
      <CardContent className="py-6">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
            {/* Room Length Field */}
            <FormField
              control={form.control}
              name="roomLength"
              render={({ field }) => (
                <FormItem>
                  <div className="flex items-center justify-between">
                    <FormLabel>Room Length</FormLabel>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <span className="inline-flex cursor-help">
                            <HelpCircle className="text-aliceBlue h-4 w-4" />
                          </span>
                        </TooltipTrigger>
                        <TooltipContent side="top" className="max-w-xs">
                          <p className="text-sm">
                            The longer dimension of the room. Use feet (or
                            meters if metric).
                          </p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                  <FormControl>
                    <div className="relative">
                      <Input
                        type="number"
                        placeholder={isMetric ? "e.g. 6.1" : "e.g. 20"}
                        {...field}
                        value={field.value || ""}
                        className="pr-12 pl-3"
                      />
                      <div className="absolute inset-y-0 right-3 flex items-center text-sm text-gray-300">
                        {isMetric ? "m" : "ft"}
                      </div>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Room Width Field */}
            <FormField
              control={form.control}
              name="roomWidth"
              render={({ field }) => (
                <FormItem>
                  <div className="flex items-center justify-between">
                    <FormLabel>Room Width</FormLabel>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <span className="inline-flex cursor-help">
                            <HelpCircle className="text-aliceBlue h-4 w-4" />
                          </span>
                        </TooltipTrigger>
                        <TooltipContent side="top" className="max-w-xs">
                          <p className="text-sm">
                            The shorter side of the room. Use the same units as
                            length.
                          </p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                  <FormControl>
                    <div className="relative">
                      <Input
                        type="number"
                        placeholder={isMetric ? "e.g. 4.5" : "e.g. 15"}
                        {...field}
                        value={field.value || ""}
                        className="pr-12 pl-3"
                      />
                      <div className="absolute inset-y-0 right-3 flex items-center text-sm text-gray-300">
                        {isMetric ? "m" : "ft"}
                      </div>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Ceiling Height Field */}
            <FormField
              control={form.control}
              name="ceilingHeight"
              render={({ field }) => (
                <FormItem>
                  <div className="flex items-center justify-between">
                    <FormLabel>Ceiling Height</FormLabel>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <span className="inline-flex cursor-help">
                            <HelpCircle className="text-aliceBlue h-4 w-4" />
                          </span>
                        </TooltipTrigger>
                        <TooltipContent side="top" className="max-w-xs">
                          <p className="text-sm">
                            Height from floor to ceiling. Typical rooms are
                            around 8 feet (2.4 m).
                          </p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                  <FormControl>
                    <div className="relative">
                      <Input
                        type="number"
                        placeholder={isMetric ? "e.g. 2.4" : "e.g. 8"}
                        {...field}
                        value={field.value || ""}
                        className="pr-12 pl-3"
                      />
                      <div className="absolute inset-y-0 right-3 flex items-center text-sm text-gray-300">
                        {isMetric ? "m" : "ft"}
                      </div>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Air Changes per Hour Field */}
            <FormField
              control={form.control}
              name="airChangesPerHour"
              render={({ field }) => (
                <FormItem>
                  <div className="flex items-center justify-between">
                    <FormLabel>Air Changes per Hour (ACH)</FormLabel>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <span className="inline-flex cursor-help">
                            <HelpCircle className="text-aliceBlue h-4 w-4" />
                          </span>
                        </TooltipTrigger>
                        <TooltipContent side="top" className="max-w-xs">
                          <p className="text-sm">
                            Typical values: 4-6 for living rooms, 6-8 for
                            kitchens, 8-10+ for bathrooms.
                          </p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                  <FormControl>
                    <Input
                      type="number"
                      step="0.5"
                      placeholder="e.g. 5"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Unit Toggle */}
            <div className="border-prediction mt-6 flex items-center justify-between border-t pt-4">
              <div className="text-aliceBlue text-sm">
                {isMetric
                  ? "Using metric units (meters)"
                  : "Using imperial units (feet)"}
              </div>
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={() => setIsMetric(!isMetric)}
              >
                Switch to {isMetric ? "Feet" : "Meters"}
              </Button>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              size="lg"
              className="mt-4 w-full bg-gradient-to-r from-red-500 to-red-600 text-white hover:opacity-90"
            >
              <Calculator className="h-5 w-5" />
              Calculate CFM Required
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
