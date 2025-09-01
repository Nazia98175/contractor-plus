import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "../../ui/button";
import { Card, CardDescription } from "../../ui/card";
import { Ruler, Calculator, Home, HardHat, Check } from "lucide-react";

export function EducationalContent() {
  return (
    <div className="space-y-8">
      <Card className="overflow-hidden border border-red-100 bg-red-50">
        <div className="flex flex-col md:flex-row">
          <div className="flex-1 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Measure twice, cut once – and estimate accurately
            </h2>
            <p className="text-aliceBlue mb-4">
              Contractor+ helps roofing contractors calculate roof areas,
              estimate materials, and generate quick quotes. Spend less time on
              paperwork and more time roofing by leveraging our app for your
              next job.
            </p>
            <Button className="bg-red-600 hover:bg-red-700">
              Create Free Account
            </Button>
          </div>
          <div className="flex items-center justify-center bg-red-100 p-6 md:w-1/3">
            <div className="flex flex-col items-center text-red-800">
              <Calculator className="mb-2 h-12 w-12" />
              <span className="text-sm font-medium">
                Simplify Your Estimating
              </span>
            </div>
          </div>
        </div>
      </Card>

      <div className="prose max-w-none">
        <h2 className="mb-4 flex items-center gap-2 text-2xl font-semibold">
          <Ruler className="h-6 w-6 text-red-600" />
          About Roof Square Footage Calculations
        </h2>
        <p className="text-gray-700">
          Calculating the correct roof area is essential for accurate material
          ordering and project estimating. Our roof square footage calculator
          helps roofing professionals and DIY enthusiasts determine the exact
          amount of materials needed for a project.
        </p>

        <div className="my-8 grid gap-6 md:grid-cols-2">
          <Card className="border border-gray-200 shadow-sm transition-shadow hover:shadow-md">
            <CardContent className="p-6">
              <div className="mb-3 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-100">
                  <Home className="h-5 w-5 text-red-600" />
                </div>
                <h3 className="text-lg font-medium">
                  How Roof Square Footage is Calculated
                </h3>
              </div>
              <p className="text-alice">
                The calculation takes into account both the building's footprint
                (length × width) and the pitch of the roof. The steeper the
                pitch, the more surface area the roof has compared to the
                building footprint.
              </p>
            </CardContent>
          </Card>

          <Card className="border border-gray-200 shadow-sm transition-shadow hover:shadow-md">
            <CardContent className="p-6">
              <div className="mb-3 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-100">
                  <HardHat className="h-5 w-5 text-red-600" />
                </div>
                <h3 className="text-lg font-medium">
                  Why Accurate Measurements Matter
                </h3>
              </div>
              <ul className="text-alice space-y-2">
                <li className="flex items-start gap-2">
                  <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-red-600" />
                  <span>
                    Order the right amount of materials, reducing waste
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-red-600" />
                  <span>Provide precise estimates to clients</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-red-600" />
                  <span>Plan labor requirements more effectively</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="my-8 rounded-lg border border-gray-200 bg-gray-50 p-6">
          <h3 className="mb-4 text-xl font-medium">Commonly Asked Questions</h3>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1" className="border-b border-gray-200">
              <AccordionTrigger className="text-lg font-medium hover:text-red-600">
                Understanding Roof Pitch
              </AccordionTrigger>
              <AccordionContent className="text-gray-700">
                <p className="mt-2">
                  Roof pitch is expressed as the ratio of vertical rise to
                  horizontal run, typically measured as X/12, where X is the
                  number of inches the roof rises for every 12 inches of
                  horizontal distance.
                </p>
                <ul className="mt-2 list-disc space-y-1 pl-5">
                  <li>A flat roof has a pitch of 0/12</li>
                  <li>A 4/12 pitch is considered a gentle slope</li>
                  <li>A 6/12 pitch is a medium slope</li>
                  <li>A 9/12 pitch is quite steep</li>
                  <li>A 12/12 pitch creates a 45-degree angle</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border-b border-gray-200">
              <AccordionTrigger className="text-lg font-medium hover:text-red-600">
                What is a Roofing Square?
              </AccordionTrigger>
              <AccordionContent className="text-gray-700">
                <p className="mt-2">
                  A "square" is the standard unit of measurement in the roofing
                  industry. One square equals 100 square feet of roof area.
                  Roofing materials like shingles are typically sold by the
                  square, not by individual pieces.
                </p>
                <p className="mt-2">
                  When ordering materials, it's common practice to round up to
                  the nearest square and add an additional 10-15% for waste,
                  overlaps, and mistakes.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border-b border-gray-200">
              <AccordionTrigger className="text-lg font-medium hover:text-red-600">
                Tips for More Accurate Measurements
              </AccordionTrigger>
              <AccordionContent className="text-gray-700">
                <p className="mt-2">For more complex roof designs:</p>
                <ul className="mt-2 list-disc space-y-1 pl-5">
                  <li>Divide the roof into sections (rectangles)</li>
                  <li>Calculate each section separately</li>
                  <li>Add the areas together for the total roof area</li>
                  <li>
                    Consider dormers, valleys, and hips that might add
                    complexity
                  </li>
                  <li>
                    For very complex roofs, consider professional measurement
                    services
                  </li>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        <div className="mt-8">
          <h3 className="mb-4 text-xl font-medium">
            Pro Tips for Roofing Contractors
          </h3>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="border-stiletto bg-shutter rounded-lg border p-4 shadow-sm">
              <h4 className="mb-2 font-medium text-red-600">
                Add Waste Factor
              </h4>
              <p className="text-alice text-sm">
                Always add 10-15% to your square footage calculation to account
                for waste during installation.
              </p>
            </div>
            <div className="border-stiletto bg-shutter rounded-lg border p-4 shadow-sm">
              <h4 className="mb-2 font-medium text-red-600">Complex Roofs</h4>
              <p className="text-alice text-sm">
                For roofs with multiple sections, calculate each part separately
                and add them together.
              </p>
            </div>
            <div className="border-stiletto bg-shutter rounded-lg border p-4 shadow-sm">
              <h4 className="mb-2 font-medium text-red-600">
                Consider Accessories
              </h4>
              <p className="text-alice text-sm">
                Don't forget to account for ridge caps, starter strips, and
                other accessories in your estimate.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
