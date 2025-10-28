"use client";
import { useMetaTags } from "@/hooks/use-meta-tags";
import { toast } from "@/hooks/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { TooltipProvider } from "@radix-ui/react-tooltip";
import { Brush, Calculator, HelpCircle } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../../components/ui/breadcrumb";
import { Button } from "../../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../components/ui/form";
import { Input } from "../../components/ui/input";
import { Separator } from "../../components/ui/separator";
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "../../components/ui/table";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "../../components/ui/tooltip";

// Define the form validation schema
const calculatorSchema = z.object({
  homeSize: z.coerce
    .number()
    .positive("Home size must be greater than 0")
    .int("Please enter a whole number"),
  bedrooms: z.coerce
    .number()
    .min(0, "Cannot be negative")
    .int("Please enter a whole number"),
  bathrooms: z.coerce
    .number()
    .min(0, "Cannot be negative")
    .int("Please enter a whole number"),
  ratePerSqFt: z.coerce.number().min(0, "Cannot be negative"),
  costPerBedroom: z.coerce.number().min(0, "Cannot be negative"),
  costPerBathroom: z.coerce.number().min(0, "Cannot be negative"),
  flatFee: z.coerce.number().min(0, "Cannot be negative"),
});

type CalculatorValues = z.infer<typeof calculatorSchema>;

export default function HouseCleaningCalculator() {
  const router = useRouter();
  const [calculationResult, setCalculationResult] = useState<number | null>(
    null,
  );
  const [breakdown, setBreakdown] = useState<Record<string, number>>({});

  // Add SEO meta tags
  useMetaTags({
    title: "House Cleaning Cost Calculator | Free Tool for Cleaning Businesses",
    description:
      "Calculate accurate cleaning service costs based on home size, rooms, and your pricing structure. Perfect for cleaning businesses and independent contractors.",
    canonicalUrl: "https://contractorplus.app/calculators/house-cleaning",
  });

  // Initialize form with default values
  const form = useForm<CalculatorValues>({
    resolver: zodResolver(calculatorSchema) as any,
    defaultValues: {
      homeSize: 2000,
      bedrooms: 3,
      bathrooms: 2,
      ratePerSqFt: 0.1,
      costPerBedroom: 10,
      costPerBathroom: 15,
      flatFee: 20,
    },
  });

  // Calculate results whenever form values change
  const calculateResults = (values: CalculatorValues) => {
    // Step 1: Calculate base cleaning cost
    const baseCleaningCost = values.homeSize * values.ratePerSqFt;

    // Step 2: Calculate extra room charges
    const bedroomCost = values.bedrooms * values.costPerBedroom;
    const bathroomCost = values.bathrooms * values.costPerBathroom;

    // Step 3: Add all costs together
    const totalCost =
      baseCleaningCost + bedroomCost + bathroomCost + values.flatFee;

    // Update state with the results
    setCalculationResult(totalCost);
    setBreakdown({
      baseCleaningCost,
      bedroomCost,
      bathroomCost,
      flatFee: values.flatFee,
    });

    // Show toast notification when calculation is updated
    toast({
      title: "Calculation Updated",
      description: `Your estimated house cleaning cost is $${totalCost.toFixed(2)}.`,
    });
  };

  // Handle form submission
  const onSubmit = (values: CalculatorValues) => {
    calculateResults(values);
  };

  // Run calculation on initial load with default values
  useEffect(() => {
    const defaultValues = form.getValues();
    calculateResults(defaultValues);
  }, []);

  return (
    <div className="mx-auto max-w-6xl px-4 py-6 md:px-6">
      {/* Breadcrumb Navigation */}

      <Breadcrumb className="mb-6">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/resources">Resources</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/resources/cost-calculator">
              Calculators
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage className="text-decemberSky text-sm">
              House Cleaning Cost Calculator
            </BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      {/* Back button */}
      {/* <Button
        variant="ghost"
        size="sm"
        onClick={() => router.push("/resources/cost-calculator")}
        className="mb-6 flex items-center gap-1 hover:text-red-500"
      >
        <ArrowLeft className="mr-1 h-4 w-4" />
        Back to Calculators
      </Button> */}

      {/* Main header */}
      <div className="mb-8">
        <div className="mb-2 flex items-start gap-3">
          <div className="rounded-full bg-red-100 p-2">
            <Brush className="h-5 w-5 text-red-500 sm:h-6 sm:w-6" />
          </div>
          <h1 className="text-2xl font-bold md:text-3xl">
            House Cleaning Calculator
          </h1>
        </div>
        <p className="text-aliceBlue max-w-3xl">
          Calculate house cleaning costs quickly and accurately. Perfect for
          cleaning businesses, independent contractors, and homeowners planning
          their budget for cleaning services.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
        {/* Left side - Calculator form */}
        <div className="lg:col-span-7">
          <Card className="border-shutter overflow-hidden border shadow-sm">
            <CardHeader className="bg-shutter border-stiletto border-b">
              <CardTitle className="text-aliceBlue text-xl">
                Calculate Cleaning Cost
              </CardTitle>
              <CardDescription>
                Enter property details and your pricing structure below
              </CardDescription>
            </CardHeader>
            <CardContent className="py-6">
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-5"
                >
                  {/* Home Size Field */}
                  <FormField
                    control={form.control}
                    name="homeSize"
                    render={({ field }) => (
                      <FormItem>
                        <div className="flex items-center justify-between">
                          <FormLabel>Home Size</FormLabel>
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <span className="inline-flex cursor-help">
                                  <HelpCircle className="text-aliceBlue h-4 w-4" />
                                </span>
                              </TooltipTrigger>
                              <TooltipContent side="top" className="max-w-xs">
                                <p className="text-sm">
                                  Enter the total square footage of the home to
                                  be cleaned
                                </p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </div>
                        <FormControl>
                          <div className="relative">
                            <Input
                              type="number"
                              placeholder="e.g. 2000"
                              {...field}
                              className="pr-12 pl-3"
                            />
                            <div className="absolute inset-y-0 right-3 flex items-center text-sm text-gray-300">
                              sq ft
                            </div>
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Number of Bedrooms Field */}
                  <FormField
                    control={form.control}
                    name="bedrooms"
                    render={({ field }) => (
                      <FormItem>
                        <div className="flex items-center justify-between">
                          <FormLabel>Number of Bedrooms</FormLabel>
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <span className="inline-flex cursor-help">
                                  <HelpCircle className="text-aliceBlue h-4 w-4" />
                                </span>
                              </TooltipTrigger>
                              <TooltipContent side="top" className="max-w-xs">
                                <p className="text-sm">
                                  Enter the number of bedrooms in the home
                                </p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </div>
                        <FormControl>
                          <Input
                            type="number"
                            placeholder="e.g. 3"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Number of Bathrooms Field */}
                  <FormField
                    control={form.control}
                    name="bathrooms"
                    render={({ field }) => (
                      <FormItem>
                        <div className="flex items-center justify-between">
                          <FormLabel>Number of Bathrooms</FormLabel>
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <span className="inline-flex cursor-help">
                                  <HelpCircle className="text-aliceBlue h-4 w-4" />
                                </span>
                              </TooltipTrigger>
                              <TooltipContent side="top" className="max-w-xs">
                                <p className="text-sm">
                                  Enter the number of bathrooms in the home
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
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Rate per Square Foot Field */}
                  <FormField
                    control={form.control}
                    name="ratePerSqFt"
                    render={({ field }) => (
                      <FormItem>
                        <div className="flex items-center justify-between">
                          <FormLabel>Rate per Square Foot</FormLabel>
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <span className="inline-flex cursor-help">
                                  <HelpCircle className="text-aliceBlue h-4 w-4" />
                                </span>
                              </TooltipTrigger>
                              <TooltipContent side="top" className="max-w-xs">
                                <p className="text-sm">
                                  How much you charge per square foot of space
                                  cleaned
                                </p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </div>
                        <FormControl>
                          <div className="relative">
                            <div className="absolute inset-y-0 left-3 flex items-center text-sm text-gray-500">
                              $
                            </div>
                            <Input
                              type="number"
                              step="0.01"
                              placeholder="e.g. 0.10"
                              {...field}
                              className="pl-6"
                            />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Additional Cost per Bedroom Field */}
                  <FormField
                    control={form.control}
                    name="costPerBedroom"
                    render={({ field }) => (
                      <FormItem>
                        <div className="flex items-center justify-between">
                          <FormLabel>Cost per Bedroom</FormLabel>
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <span className="inline-flex cursor-help">
                                  <HelpCircle className="text-aliceBlue h-4 w-4" />
                                </span>
                              </TooltipTrigger>
                              <TooltipContent side="top" className="max-w-xs">
                                <p className="text-sm">
                                  Additional charge per bedroom (e.g. for
                                  detailed cleaning)
                                </p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </div>
                        <FormControl>
                          <div className="relative">
                            <div className="absolute inset-y-0 left-3 flex items-center text-sm text-gray-500">
                              $
                            </div>
                            <Input
                              type="number"
                              step="0.01"
                              placeholder="e.g. 10"
                              {...field}
                              className="pl-6"
                            />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Additional Cost per Bathroom Field */}
                  <FormField
                    control={form.control}
                    name="costPerBathroom"
                    render={({ field }) => (
                      <FormItem>
                        <div className="flex items-center justify-between">
                          <FormLabel>Cost per Bathroom</FormLabel>
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <span className="inline-flex cursor-help">
                                  <HelpCircle className="text-aliceBlue h-4 w-4" />
                                </span>
                              </TooltipTrigger>
                              <TooltipContent side="top" className="max-w-xs">
                                <p className="text-sm">
                                  Additional charge per bathroom (typically more
                                  for deep cleaning)
                                </p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </div>
                        <FormControl>
                          <div className="relative">
                            <div className="absolute inset-y-0 left-3 flex items-center text-sm text-gray-500">
                              $
                            </div>
                            <Input
                              type="number"
                              step="0.01"
                              placeholder="e.g. 15"
                              {...field}
                              className="pl-6"
                            />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Additional Flat Fee Field */}
                  <FormField
                    control={form.control}
                    name="flatFee"
                    render={({ field }) => (
                      <FormItem>
                        <div className="flex items-center justify-between">
                          <FormLabel>Flat Fee</FormLabel>
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <span className="inline-flex cursor-help">
                                  <HelpCircle className="text-aliceBlue h-4 w-4" />
                                </span>
                              </TooltipTrigger>
                              <TooltipContent side="top" className="max-w-xs">
                                <p className="text-sm">
                                  Any additional flat fee you charge (e.g. for
                                  travel or setup)
                                </p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </div>
                        <FormControl>
                          <div className="relative">
                            <div className="absolute inset-y-0 left-3 flex items-center text-sm text-gray-500">
                              $
                            </div>
                            <Input
                              type="number"
                              step="0.01"
                              placeholder="e.g. 20"
                              {...field}
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
                    className="mt-4 w-full bg-red-600 text-white hover:bg-red-700"
                  >
                    <Calculator className="mr-2 h-5 w-5" />
                    Calculate
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>

        {/* Right side - Results & Information */}
        <div className="h-full lg:col-span-5">
          {/* Results Card */}
          <Card className="border-stiletto bg-shutter mb-8 overflow-hidden border-2 shadow-md">
            <CardHeader className="bo bg-red-500">
              <CardTitle className="text-xl">Calculation Results</CardTitle>
            </CardHeader>
            <CardContent className="py-6">
              {calculationResult !== null && (
                <>
                  <div className="text-center">
                    <h3 className="text-alice text-lg font-medium">
                      Estimated Cleaning Cost
                    </h3>
                    <p className="my-2 text-4xl font-bold text-red-500">
                      ${calculationResult.toFixed(2)}
                    </p>
                  </div>

                  <Separator className="my-4" />

                  <div className="space-y-3 text-sm">
                    <h4 className="font-medium">Cost Breakdown</h4>
                    <div className="flex items-center justify-between">
                      <span className="text-aliceBlue">Base Cleaning Cost</span>
                      <span className="font-medium">
                        ${breakdown.baseCleaningCost?.toFixed(2)}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-aliceBlue">Bedroom Cost</span>
                      <span className="font-medium">
                        ${breakdown.bedroomCost?.toFixed(2)}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-aliceBlue">Bathroom Cost</span>
                      <span className="font-medium">
                        ${breakdown.bathroomCost?.toFixed(2)}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-aliceBlue">
                        Additional Flat Fee
                      </span>
                      <span className="font-medium">
                        ${breakdown.flatFee?.toFixed(2)}
                      </span>
                    </div>
                  </div>
                </>
              )}
            </CardContent>
            <CardFooter className="border-stiletto flex justify-center border-t pt-2">
              <p className="text-decemberSky text-center text-xs">
                Note: All estimates are approximate and may vary based on
                specific cleaning requirements.
              </p>
            </CardFooter>
          </Card>

          {/* Call to Action Card */}
          <Card className="border-stiletto bg-shutter border">
            <CardHeader>
              <CardTitle className="text-xl text-red-500">
                Ready to Grow Your Business?
              </CardTitle>
            </CardHeader>
            <CardContent className="py-6">
              <p className="text-decemberSky mb-4">
                Streamline your cleaning business with professional scheduling,
                invoicing, and client management. Create detailed proposals that
                win you more jobs.
              </p>
              <Button variant="outline" className="w-full" asChild>
                <Link
                  target="_blank"
                  href="https://my.contractorplus.app/authentication/register"
                >
                  Try Contractor Plus
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* SEO Content Section - Improved formatting */}
      <div className="mt-10 max-w-none lg:mt-16">
        <div className="border-stiletto bg-shutter rounded-lg border p-4 shadow-sm md:p-6 lg:p-8">
          <h2 className="text-aliceBlue mb-6 text-2xl font-bold">
            House Cleaning Pricing Guide
          </h2>

          <div className="prose prose-gray max-w-none">
            <p className="text-alice mb-8 leading-relaxed">
              Setting the right price for your cleaning services is crucial for
              business success. This guide helps you understand pricing
              strategies and how to use the calculator to determine optimal
              rates.
            </p>

            <div className="mb-8 grid gap-8 md:grid-cols-2">
              <div className="bg-shutter rounded-lg p-4 md:p-6">
                <h3 className="mb-4 text-xl font-semibold">
                  What Factors Affect Cleaning Cost?
                </h3>
                <p className="text-discoBall leading-relaxed">
                  House size is the primary factor, but other considerations
                  include number of bedrooms and bathrooms, cleaning frequency,
                  geographical location, and specific services required (deep
                  cleaning vs. maintenance cleaning).
                </p>
              </div>

              <div className="bg-shutter rounded-lg p-4 md:p-6">
                <h3 className="mb-4 text-xl font-semibold">
                  How to Use This Calculator
                </h3>
                <p className="text-discoBall leading-relaxed">
                  Enter your home's details, including square footage, number of
                  bedrooms and bathrooms. Then input your pricing structure,
                  including your rate per square foot and any additional
                  charges. The calculator will provide an estimated total cost.
                </p>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="mb-4 text-xl font-semibold">
                Pricing Strategies for Cleaning Businesses
              </h3>
              <p className="text-discoBall leading-relaxed">
                Many professional cleaners use a hybrid pricing approach,
                combining square footage rates with room-specific charges. This
                allows for more accurate pricing that reflects the actual work
                involved, particularly for bathrooms and kitchens which require
                more intensive cleaning.
              </p>
            </div>

            <div className="mb-8">
              <h3 className="mb-4 text-xl font-semibold">
                Common Ways to Charge for Cleaning Services
              </h3>

              {/* Replacing the previous list with a proper table */}
              <Table className="w-full border-collapse">
                <TableBody>
                  <TableRow className="border-stiletto border-b">
                    <TableCell className="py-3 pr-4 pl-0 align-top">
                      <div className="flex items-start">
                        <div className="mt-1.5 mr-3 rounded-full bg-red-100 p-1">
                          <div className="h-2 w-2 rounded-full bg-red-600"></div>
                        </div>
                        <div>
                          <span className="font-semibold">Flat Rate:</span>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="py-3 pl-2">
                      Charging a standard fee for each home or apartment type,
                      regardless of time spent (e.g., $150 for a standard
                      3-bedroom home).
                    </TableCell>
                  </TableRow>

                  <TableRow className="border-stiletto border-b">
                    <TableCell className="py-3 pr-4 pl-0 align-top">
                      <div className="flex items-start">
                        <div className="mt-1.5 mr-3 rounded-full bg-red-100 p-1">
                          <div className="h-2 w-2 rounded-full bg-red-600"></div>
                        </div>
                        <div>
                          <span className="font-semibold">Hourly Rate:</span>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="py-3 pl-2">
                      Charging by the hour spent cleaning (typically $25-50 per
                      hour per cleaner), which can be more transparent but less
                      predictable for clients.
                    </TableCell>
                  </TableRow>

                  <TableRow className="border-stiletto border-b">
                    <TableCell className="py-3 pr-4 pl-0 align-top">
                      <div className="flex items-start">
                        <div className="mt-1.5 mr-3 rounded-full bg-red-100 p-1">
                          <div className="h-2 w-2 rounded-full bg-red-600"></div>
                        </div>
                        <div>
                          <span className="font-semibold">Square Footage:</span>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="py-3 pl-2">
                      Charging by the size of the home (e.g., $0.10-0.15 per
                      square foot), which is objective but doesn't account for
                      difficulty.
                    </TableCell>
                  </TableRow>

                  <TableRow className="border-stiletto border-b">
                    <TableCell className="py-3 pr-4 pl-0 align-top">
                      <div className="flex items-start">
                        <div className="mt-1.5 mr-3 rounded-full bg-red-100 p-1">
                          <div className="h-2 w-2 rounded-full bg-red-600"></div>
                        </div>
                        <div>
                          <span className="font-semibold">Room-Based:</span>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="py-3 pl-2">
                      Charging a specific amount per room type (e.g., $20 per
                      bedroom, $30 per bathroom), which accounts for different
                      cleaning requirements.
                    </TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell className="py-3 pr-4 pl-0 align-top">
                      <div className="flex items-start">
                        <div className="mt-1.5 mr-3 rounded-full bg-red-100 p-1">
                          <div className="h-2 w-2 rounded-full bg-red-600"></div>
                        </div>
                        <div>
                          <span className="font-semibold">
                            Combined Method:
                          </span>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="py-3 pl-2">
                      Using a base rate plus room-specific charges, as in this
                      calculator, for a more customized and accurate estimate.
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>

            <div className="bg-shutter rounded-lg p-4 md:p-6">
              <h3 className="mb-4 text-xl font-semibold">
                Frequently Asked Questions
              </h3>

              <div className="space-y-6">
                <div className="border-stiletto border-b pb-4">
                  <p className="mb-2 font-semibold">
                    What should my rate per square foot be?
                  </p>
                  <p className="text-discoBall leading-relaxed">
                    Most residential cleaning services charge between $0.05 and
                    $0.15 per square foot. For standard cleaning of
                    average-soiled homes, around $0.10 per square foot is
                    common. Adjust higher for luxury homes, deep cleaning, or
                    areas with a higher cost of living.
                  </p>
                </div>

                <div className="border-stiletto border-b pb-4">
                  <p className="mb-2 font-semibold">
                    Should I charge more for first-time cleanings?
                  </p>
                  <p className="text-discoBall leading-relaxed">
                    Yes, initial cleanings typically take 1.5-2x longer than
                    maintenance cleanings. Many professionals charge 50-100%
                    more for the first visit, or add a one-time setup fee of
                    $50-100 to account for the extra deep cleaning required.
                    However, in competitive markets, some cleaning companies
                    strategically offer first-time cleaning specials or
                    discounts — sometimes even breaking even on the initial
                    service — specifically to acquire new customers. This
                    approach, while reducing short-term profit, can be an
                    effective customer acquisition strategy if you can convert
                    these clients into regular, profitable recurring service.
                  </p>
                </div>

                <div>
                  <p className="mb-2 font-semibold">
                    Should I include cleaning supplies in my pricing?
                  </p>
                  <p className="text-discoBall leading-relaxed">
                    Most professional cleaners include basic supplies in their
                    rates, adding 5-10% to cover costs. For specialty cleaning
                    products or eco-friendly supplies, you might add a specific
                    supplies fee or incorporate it into your flat fee.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
