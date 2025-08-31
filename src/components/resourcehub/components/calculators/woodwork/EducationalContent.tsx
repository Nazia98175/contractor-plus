import { Card, CardDescription } from "../../ui/card";
import { Hammer, CreditCard, Calculator, Ruler } from "lucide-react";

export function EducationalContent() {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card className="border border-gray-200 bg-white shadow-sm">
          <CardContent className="p-6">
            <Hammer className="mb-4 h-6 w-6 text-red-600" />
            <h3 className="mb-2 text-lg font-medium">Material Selection</h3>
            <p className="text-muted-foreground text-sm">
              Carefully consider wood type, grade, and dimensions when
              calculating material costs. Premium hardwoods like walnut or
              cherry will significantly increase your material budget compared
              to pine or oak.
            </p>
          </CardContent>
        </Card>

        <Card className="border border-gray-200 bg-white shadow-sm">
          <CardContent className="p-6">
            <Calculator className="mb-4 h-6 w-6 text-red-600" />
            <h3 className="mb-2 text-lg font-medium">Labor Estimation</h3>
            <p className="text-muted-foreground text-sm">
              Track your time on similar projects to improve future estimates.
              Include time for design work, material preparation, assembly,
              finishing, and installation if applicable.
            </p>
          </CardContent>
        </Card>

        <Card className="border border-gray-200 bg-white shadow-sm">
          <CardContent className="p-6">
            <CreditCard className="mb-4 h-6 w-6 text-red-600" />
            <h3 className="mb-2 text-lg font-medium">Pricing Strategy</h3>
            <p className="text-muted-foreground text-sm">
              Consider your market position when setting profit margins. Custom,
              high-end woodwork typically commands 25-35% margins, while
              production or semi-custom work might be 15-20%.
            </p>
          </CardContent>
        </Card>

        <Card className="border border-gray-200 bg-white shadow-sm">
          <CardContent className="p-6">
            <Ruler className="mb-4 h-6 w-6 text-red-600" />
            <h3 className="mb-2 text-lg font-medium">Project Complexity</h3>
            <p className="text-muted-foreground text-sm">
              Account for complexity in your pricing. Intricate joinery, curved
              elements, or detailed inlays require more time and skill, and
              should be factored into both labor hours and hourly rates.
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
        <h2 className="mb-4 text-xl font-semibold">
          Custom Woodworking Pricing Guide
        </h2>

        <div className="space-y-4">
          <p>
            Pricing custom woodwork requires careful consideration of materials,
            time, and the market value of your craftsmanship. While materials
            are straightforward to calculate, accurately estimating labor is
            often the most challenging aspect of pricing.
          </p>

          <h3 className="mt-6 mb-2 text-lg font-medium">
            Tips for Accurate Project Pricing
          </h3>

          <ul className="list-disc space-y-2 pl-5">
            <li>
              <span className="font-medium">Include waste factor:</span> Add
              15-20% to your material estimates to account for waste, especially
              when working with expensive hardwoods.
            </li>
            <li>
              <span className="font-medium">Track time meticulously:</span> Keep
              detailed records of how long each phase takes to improve future
              estimates.
            </li>
            <li>
              <span className="font-medium">Factor in shop overhead:</span> Your
              hourly rate should include costs for tool maintenance, shop space,
              utilities, and consumables.
            </li>
            <li>
              <span className="font-medium">Consider project complexity:</span>{" "}
              More complex designs require higher hourly rates or additional
              time allowances.
            </li>
            <li>
              <span className="font-medium">Value your expertise:</span> As your
              skill level increases, your hourly rate should reflect your
              expertise and efficiency.
            </li>
          </ul>

          <div className="mt-6 rounded-md bg-red-50 p-4">
            <h3 className="mb-2 text-lg font-medium text-red-800">
              Why Custom Woodwork Commands Premium Pricing
            </h3>
            <p className="text-gray-700">
              Custom woodwork is valuable because it's tailored precisely to
              client specifications, uses high-quality materials, and showcases
              craftsmanship that mass-produced furniture cannot match. Don't
              undervalue your work—clients seeking custom pieces understand
              they're investing in quality and uniqueness.
            </p>
          </div>

          <div className="mt-6">
            <h3 className="mb-2 text-lg font-medium">
              Professional Quote Presentation
            </h3>
            <p>
              When presenting quotes to clients, provide a clear breakdown of
              materials, labor, and other costs. This transparency helps clients
              understand the value they're receiving and reduces sticker shock.
              Consider offering tiered options with different materials or
              simplifications that could reduce the price point.
            </p>
          </div>

          <div className="mt-4 rounded-md bg-gray-50 p-4">
            <h3 className="mb-2 text-base font-medium">
              Every custom piece should be priced for profit
            </h3>
            <p className="text-muted-foreground text-sm">
              Contractor+ helps woodworkers and custom furniture makers tally up
              materials, labor, and desired profit easily. Spend more time in
              the shop and less time calculating quotes – let Contractor+
              streamline your pricing, proposals, and even client payments for
              your custom creations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
