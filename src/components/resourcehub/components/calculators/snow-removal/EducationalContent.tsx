import { Card, CardContent, CardDescription } from "../../ui/card";
import { Snowflake } from "lucide-react";

export function EducationalContent() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="mb-4 text-2xl font-semibold">
          How to Price Snow Removal Services
        </h2>
        <p className="mb-6 text-gray-700">
          Pricing snow removal services effectively ensures your business
          remains profitable while providing fair rates to clients. This
          calculator helps you determine appropriate pricing based on snowfall
          depth and your pricing structure.
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          <Card className="border border-gray-200">
            <CardContent className="pt-6">
              <h3 className="mb-3 flex items-center gap-2 text-lg font-medium">
                <Snowflake className="h-5 w-5 text-blue-500" />
                Setting Your Base Rate
              </h3>
              <p className="text-alice mb-3">Your base rate should cover:</p>
              <ul className="text-alice list-disc space-y-1 pl-5">
                <li>Equipment costs and depreciation</li>
                <li>Fuel expenses</li>
                <li>Labor for standard service times</li>
                <li>Insurance and overhead</li>
                <li>Reasonable profit margin</li>
              </ul>
              <p className="text-alice mt-3">
                Consider the property size, accessibility, and typical
                conditions when setting your base rate. Most contractors
                establish tiers based on driveway/lot size.
              </p>
            </CardContent>
          </Card>

          <Card className="border border-gray-200">
            <CardContent className="pt-6">
              <h3 className="mb-3 flex items-center gap-2 text-lg font-medium">
                <Snowflake className="h-5 w-5 text-blue-500" />
                Understanding Extra Charges
              </h3>
              <p className="text-alice mb-3">Heavy snowfalls require:</p>
              <ul className="text-alice list-disc space-y-1 pl-5">
                <li>Additional time and effort</li>
                <li>More equipment strain and fuel</li>
                <li>Multiple passes to clear effectively</li>
                <li>Snow relocation for larger accumulations</li>
              </ul>
              <p className="text-alice mt-3">
                Extra charges should reflect the increased resources needed to
                handle deeper snow. Most pros charge 25-50% more for each
                additional 2-4 inches of snow depth.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      <div>
        <h2 className="mb-4 text-2xl font-semibold">
          Snow Removal Pricing Models
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          <Card className="border border-gray-200">
            <CardContent className="pt-6">
              <h3 className="mb-2 text-lg font-medium">Per-Visit Pricing</h3>
              <p className="text-alice">
                Charge each time you clear snow, with additional fees for deeper
                accumulations. Best for occasional service or when snowfall
                varies significantly throughout the season.
              </p>
            </CardContent>
          </Card>

          <Card className="border border-gray-200">
            <CardContent className="pt-6">
              <h3 className="mb-2 text-lg font-medium">Seasonal Contract</h3>
              <p className="text-alice">
                Fixed price for the entire winter season regardless of snowfall
                amount. Provides clients budget certainty and guarantees your
                revenue regardless of weather.
              </p>
            </CardContent>
          </Card>

          <Card className="border border-gray-200">
            <CardContent className="pt-6">
              <h3 className="mb-2 text-lg font-medium">Monthly Retainer</h3>
              <p className="text-alice">
                Client pays a set monthly fee during winter months for priority
                service. Often combined with per-visit charges at reduced rates
                when service is needed.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="border-stiletto bg-shutter rounded-lg border p-6">
        <div className="flex gap-3">
          <Snowflake className="h-8 w-8 flex-shrink-0 text-blue-600" />
          <div>
            <h3 className="mb-2 text-lg font-semibold text-blue-800">
              Professional Tip
            </h3>
            <p className="text-gray-700">
              Consider offering discounts for early-season sign-ups or
              multi-year contracts to secure clients before winter begins. Many
              successful snow removal contractors also offer tiered service
              packages that include different response times and service
              frequencies to meet various client needs and budgets.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
