import { Button } from "../../ui/button";

export function EducationalContent() {
  return (
    <div className="mt-10 max-w-none lg:mt-16">
      <div className="border-stiletto rounded-lg border p-4 shadow-sm md:p-6 lg:p-8">
        <h2 className="text-aliceBlue mb-6 text-2xl font-bold">
          Carpet Cleaning Pricing Guide
        </h2>

        <div className="prose prose-gray max-w-none">
          <p className="text-alice mb-8 leading-relaxed">
            Setting the right price for carpet cleaning services is essential
            for maintaining profitability while remaining competitive. This
            calculator helps you determine accurate estimates based on industry
            standards and your specific pricing structure.
          </p>

          <div className="mb-8 grid gap-8 md:grid-cols-2">
            <div className="bg-shutter rounded-lg p-4 md:p-6">
              <h3 className="mb-4 text-xl font-semibold">
                Factors Affecting Carpet Cleaning Costs
              </h3>
              <p className="text-discoBall leading-relaxed">
                Several factors impact the final cost of a carpet cleaning job,
                including carpet type, condition, level of soiling,
                accessibility, and special treatments needed. Our calculator
                helps you account for these factors through your square footage
                rate and additional services charges.
              </p>
            </div>

            <div className="bg-shutter rounded-lg p-4 md:p-6">
              <h3 className="mb-4 text-xl font-semibold">
                Using This Calculator Effectively
              </h3>
              <p className="text-discoBall leading-relaxed">
                For the most accurate estimates, measure the actual carpet area
                rather than the room size, account for furniture that won't be
                moved, and be clear about which services are included in your
                base rate versus what counts as an additional service.
              </p>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="mb-4 text-xl font-semibold">
              Pricing Strategies for Carpet Cleaners
            </h3>
            <p className="text-decemberSky mb-4 leading-relaxed">
              Professional carpet cleaners typically use one or more of these
              pricing strategies. Many companies combine approaches for the most
              accurate and competitive pricing.
            </p>
            <div className="border-stiletto bg-shutter rounded-lg border p-4">
              <ul className="text-alice grid gap-3">
                <li className="flex items-start">
                  <div className="mt-1 mr-3 rounded-full bg-red-100 p-1">
                    <div className="h-2 w-2 rounded-full bg-red-600"></div>
                  </div>
                  <span>
                    <strong>Square Footage Pricing:</strong> Charging based on
                    the total area of carpet being cleaned (e.g., $0.20-$0.40
                    per square foot). This is the most accurate approach for
                    larger spaces.
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="mt-1 mr-3 rounded-full bg-red-100 p-1">
                    <div className="h-2 w-2 rounded-full bg-red-600"></div>
                  </div>
                  <span>
                    <strong>Room-Based Pricing:</strong> Charging a flat rate
                    per room, regardless of exact size (e.g., $25-$50 per room).
                    This is simpler but less accurate for rooms that vary
                    greatly in size.
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="mt-1 mr-3 rounded-full bg-red-100 p-1">
                    <div className="h-2 w-2 rounded-full bg-red-600"></div>
                  </div>
                  <span>
                    <strong>Minimum Service Fee:</strong> Setting a minimum
                    charge to ensure very small jobs remain profitable, covering
                    your travel and setup time.
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="mt-1 mr-3 rounded-full bg-red-100 p-1">
                    <div className="h-2 w-2 rounded-full bg-red-600"></div>
                  </div>
                  <span>
                    <strong>Tiered Cleaning Services:</strong> Offering
                    different levels of service (basic, standard, deep clean) at
                    different price points based on the intensity of cleaning
                    required.
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="mt-1 mr-3 rounded-full bg-red-100 p-1">
                    <div className="h-2 w-2 rounded-full bg-red-600"></div>
                  </div>
                  <span>
                    <strong>Add-On Services:</strong> Charging extra for
                    additional services like stain removal, deodorizing,
                    scotchgard protection, or furniture moving.
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-shutter rounded-lg p-4 md:p-6">
            <h3 className="mb-4 text-xl font-semibold">
              Frequently Asked Questions
            </h3>

            <div className="space-y-6">
              <div className="border-stiletto border-b pb-4">
                <p className="mb-2 font-semibold">
                  How often should carpets be professionally cleaned?
                </p>
                <p className="text-discoBall leading-relaxed">
                  For residential carpets, professional cleaning is typically
                  recommended every 12-18 months, depending on traffic.
                  Commercial spaces, especially high-traffic areas, may require
                  quarterly or bi-annual cleaning. Homes with pets, children, or
                  allergy sufferers often benefit from more frequent cleaning.
                </p>
              </div>

              <div className="border-stiletto border-b pb-4">
                <p className="mb-2 font-semibold">
                  How do I determine my price per square foot?
                </p>
                <p className="text-discoBall leading-relaxed">
                  Start by calculating your costs (labor, equipment, supplies,
                  travel, overhead) and desired profit margin. Most professional
                  carpet cleaners charge between $0.20 and $0.40 per square foot
                  for standard cleaning, potentially more for specialty carpets
                  or advanced cleaning methods. Research your local market rates
                  to ensure competitiveness.
                </p>
              </div>

              <div>
                <p className="mb-2 font-semibold">
                  Should I include furniture moving in my base price?
                </p>
                <p className="text-discoBall leading-relaxed">
                  Most professional cleaners either charge extra for furniture
                  moving or have a policy of only moving lighter pieces. Heavy
                  furniture moving creates liability and requires additional
                  time and labor. Be clear with customers about what's included
                  in your base rate and what will incur additional charges.
                </p>
              </div>
            </div>
          </div>

          <div className="border-stiletto bg-shutter mt-8 rounded-lg border p-4 md:p-6">
            <h3 className="mb-3 text-xl font-semibold">
              Ready to Grow Your Carpet Cleaning Business?
            </h3>
            <p className="text-decemberSky mb-4">
              Take your carpet cleaning business to the next level with
              Contractor+. Our all-in-one platform helps you manage estimates,
              schedule jobs, track inventory, and invoice clients
              professionally.
            </p>
            <Button className="w-full bg-red-600 text-white hover:bg-red-700 sm:w-auto">
              Learn More About Contractor+
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
