import Link from "next/link";
import { Button } from "../../ui/button";
import { Card, CardContent } from "../../ui/card";
import {
  PaintBucket,
  Paintbrush,
  CircleChevronRight,
  Info,
} from "lucide-react";

export function EducationalContent() {
  return (
    <div className="prose prose-gray mt-10 max-w-none lg:mt-16">
      <h2 className="mb-6 text-2xl font-semibold">Painting Pricing Guide</h2>

      <p className="text-alice mb-8">
        Setting the right price for painting services is essential for
        maintaining profitability while remaining competitive. Our painting cost
        calculator helps you determine accurate estimates based on industry
        standards and your specific pricing structure.
      </p>

      <div className="my-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card className="bg-shutter shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
          <CardContent className="py-6">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-red-100">
                <PaintBucket className="h-5 w-5 text-red-500" />
              </div>
              <h3 className="text-lg font-medium">Material Calculations</h3>
            </div>
            <p className="text-alice">
              Determine exactly how much paint you'll need for your project
              based on square footage and coats required.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-shutter shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
          <CardContent className="py-6">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-red-100">
                <Paintbrush className="h-5 w-5 text-red-500" />
              </div>
              <h3 className="text-lg font-medium">Labor Estimation</h3>
            </div>
            <p className="text-alice">
              Accurately estimate labor hours based on surface area, complexity,
              and your team's work rate.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-shutter shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
          <CardContent className="py-6">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-red-100">
                <CircleChevronRight className="h-5 w-5 text-red-500" />
              </div>
              <h3 className="text-lg font-medium">Precise Quotes</h3>
            </div>
            <p className="text-alice">
              Create professional, accurate quotes that account for all aspects
              of your painting project.
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="mb-12 grid gap-8 md:grid-cols-2">
        <div>
          <h2 className="mb-4 text-xl font-semibold">
            Factors Affecting Painting Costs
          </h2>
          <ul className="text-alice list-none space-y-3">
            {[
              "Surface type and condition (drywall, wood, masonry, etc.)",
              "Color changes, especially when going from dark to light",
              "Ceiling height and accessibility challenges",
              "Wall preparation needs (patching, sanding, etc.)",
              "Quality of paint and materials used",
              "Special finishes and techniques",
            ].map((tip, i) => (
              <li key={i} className="flex items-start gap-2">
                <div className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-red-100">
                  <Info className="h-3 w-3 text-red-500" />
                </div>
                <span>{tip}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-shutter border-stiletto rounded-lg border p-6">
          <h2 className="mb-4 text-xl font-semibold">
            Using This Calculator Effectively
          </h2>
          <p className="text-alice mb-3">
            For accurate estimates, follow these guidelines:
          </p>
          <ul className="text-decemberSky mb-4 space-y-3">
            <li className="flex items-start gap-2">
              <div className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-red-100">
                <div className="h-1.5 w-1.5 rounded-full bg-red-600"></div>
              </div>
              <span>
                Measure all surfaces accurately, including walls, ceilings, and
                trim
              </span>
            </li>
            <li className="flex items-start gap-2">
              <div className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-red-100">
                <div className="h-1.5 w-1.5 rounded-full bg-red-600"></div>
              </div>
              <span>
                Account for multiple coats when working with dark colors
              </span>
            </li>
            <li className="flex items-start gap-2">
              <div className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-red-100">
                <div className="h-1.5 w-1.5 rounded-full bg-red-600"></div>
              </div>
              <span>
                Calculate surface area by multiplying wall/ceiling dimensions
              </span>
            </li>
            <li className="flex items-start gap-2">
              <div className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-red-100">
                <div className="h-1.5 w-1.5 rounded-full bg-red-600"></div>
              </div>
              <span>
                Subtract door and window areas for more precise calculations
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="mb-6 text-2xl font-semibold">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {[
            {
              q: "How much does it cost to paint a room?",
              a: "The cost to paint a room varies widely depending on size, paint quality, and labor rates. On average, an interior room costs between $300-$800 to paint professionally, including labor and materials.",
            },
            {
              q: "How many gallons of paint do I need?",
              a: "Most paints cover about 350-400 square feet per gallon per coat on smooth surfaces. Divide your total square footage by the paint coverage rate, then multiply by the number of coats to determine gallons needed.",
            },
            {
              q: "How do I estimate labor costs for painting?",
              a: "Professional painters typically charge $40-$60 per hour. A skilled painter can cover about 150-200 square feet of wall space per hour with one coat. Multiply the total hours by your hourly rate to get your labor cost estimate.",
            },
          ].map((faq, i) => (
            <Card
              key={i}
              className="border-stiletto bg-shutter border shadow-sm"
            >
              <CardContent className="py-6">
                <h3 className="mb-2 text-lg font-medium text-red-500">
                  {faq.q}
                </h3>
                <p className="text-decemberSky">{faq.a}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="border-stiletto mb-8 flex flex-col items-center justify-between gap-6 rounded-lg border p-6 md:flex-row">
        <div className="text-left">
          <h3 className="mb-2 text-xl font-semibold text-red-500">
            Create professional painting estimates in minutes
          </h3>
          <p className="text-decemberSky">
            Use Contractor+ to calculate material costs, labor hours, and total
            pricing. Create accurate quotes that win more jobs and maximize your
            profits.
          </p>
        </div>

        <Button asChild>
          <Link
            href="https://my.contractorplus.app/authentication/register"
            target="_blank"
          >
            Try Contractor+ Free
            <CircleChevronRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
      </div>
    </div>
  );
}
