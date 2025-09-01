export function EducationalContent() {
  return (
    <div className="prose mt-16 max-w-none">
      <h2 className="mb-4 text-2xl font-bold">HVAC Parts Pricing Guide</h2>
      <p className="text-aliceBlue mb-8">
        Understanding how to price HVAC parts correctly is essential for
        maintaining a profitable business while remaining competitive.
      </p>

      <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-2">
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Markup vs. Margin</h3>
          <p>
            It's important to understand the difference between markup and
            margin. Markup is calculated based on your cost, while margin is
            calculated on the selling price.
          </p>
          <div className="bg-shutter rounded-lg p-4">
            <p className="mb-1 font-medium">Markup Formula</p>
            <p className="text-aliceBlue text-sm">
              Markup = (Selling Price - Cost) / Cost × 100%
            </p>
            <p className="mt-3 mb-1 font-medium">Margin Formula</p>
            <p className="text-aliceBlue text-sm">
              Margin = (Selling Price - Cost) / Selling Price × 100%
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Typical Industry Markups</h3>
          <p>
            HVAC contractors typically use markups between 25% and 45% on parts
            and equipment, depending on several factors:
          </p>
          <ul className="text-aliceBlue list-disc space-y-1 pl-5 text-sm">
            <li>Part availability and exclusivity</li>
            <li>Local competition and market conditions</li>
            <li>Warranty offered on parts</li>
            <li>Storage and inventory costs</li>
            <li>Emergency vs. planned service</li>
          </ul>
        </div>
      </div>

      <h3 className="mb-4 text-xl font-semibold">Pricing Strategy Tips</h3>
      <div className="space-y-6">
        <div>
          <h4 className="mb-2 text-lg font-medium">
            Use tiered markup structures
          </h4>
          <p className="text-aliceBlue">
            Consider using different markup percentages based on the cost of
            parts. Higher markups (35-45%) for lower-cost items, and lower
            markups (20-30%) for expensive equipment.
          </p>
        </div>

        <div>
          <h4 className="mb-2 text-lg font-medium">
            Include acquisition costs
          </h4>
          <p className="text-aliceBlue">
            When calculating your part cost, remember to include acquisition
            costs like shipping, handling, and storage. These are real costs
            that should be factored into your pricing.
          </p>
        </div>

        <div>
          <h4 className="mb-2 text-lg font-medium">
            Be transparent with customers
          </h4>
          <p className="text-aliceBlue">
            While you shouldn't reveal your exact markup, being able to explain
            your pricing with confidence is important. Customers value
            transparency and understanding what they're paying for.
          </p>
        </div>
      </div>

      <h3 className="mt-8 mb-4 text-xl font-semibold">
        Frequently Asked Questions
      </h3>
      <div className="space-y-6">
        <div>
          <h4 className="mb-2 text-lg font-medium">
            Should I use the same markup for all parts?
          </h4>
          <p className="text-aliceBlue">
            Using a tiered approach is generally more effective than applying
            the same markup across all parts. Consider using higher markups for
            common, inexpensive parts and lower markups for expensive equipment.
          </p>
        </div>

        <div>
          <h4 className="mb-2 text-lg font-medium">
            What if my competitors have lower prices?
          </h4>
          <p className="text-aliceBlue">
            Don't compete solely on price. Emphasize value, warranty, expertise,
            and service quality. If you have to match prices, look for ways to
            reduce your costs or consider package pricing that bundles parts
            with labor.
          </p>
        </div>

        <div>
          <h4 className="mb-2 text-lg font-medium">
            How should I handle warranty parts?
          </h4>
          <p className="text-aliceBlue">
            For manufacturer-covered warranty parts, you typically can't charge
            for the part itself, but you can charge for labor. Make sure your
            labor rates are properly calculated to maintain profitability.
          </p>
        </div>
      </div>
    </div>
  );
}
