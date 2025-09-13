export function EducationalContent() {
  return (
    <div className="prose mt-10 max-w-none lg:mt-16">
      <h2 className="mb-4 text-2xl font-bold">Profit Margin Pricing Guide</h2>
      <p className="text-aliceBlue mb-8">
        Understanding profit margins is crucial for running a successful
        contracting business. This guide will explain how to use margins
        effectively.
      </p>

      <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-2">
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">What is Profit Margin?</h3>
          <p>
            Profit margin is the percentage of revenue that represents profit
            after all costs are accounted for. It measures how much of each
            dollar in sales is retained as profit.
          </p>
          <div className="bg-shutter rounded-lg p-4">
            <p className="mb-1 font-medium">Margin Formula</p>
            <p className="text-aliceBlue text-sm">
              Margin = (Price - Cost) / Price × 100%
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold">
            Difference Between Margin & Markup
          </h3>
          <p>
            While margin is calculated based on the selling price, markup is
            calculated based on costs. This difference can lead to confusion
            when pricing jobs.
          </p>
          <div className="bg-shutter rounded-lg p-4">
            <p className="mb-1 font-medium">Markup Formula</p>
            <p className="text-aliceBlue text-sm">
              Markup = (Price - Cost) / Cost × 100%
            </p>
          </div>
        </div>
      </div>

      <h3 className="mb-4 text-xl font-semibold">Frequently Asked Questions</h3>
      <div className="space-y-6">
        <div>
          <h4 className="mb-2 text-lg font-medium">
            What's an ideal profit margin for contractors?
          </h4>
          <p className="text-aliceBlue">
            Most successful contractors aim for margins between 20-40%,
            depending on their specialty, local competition, and overhead costs.
          </p>
        </div>

        <div>
          <h4 className="mb-2 text-lg font-medium">
            Why is the difference between margin and markup important?
          </h4>
          <p className="text-aliceBlue">
            Confusing margin with markup can lead to underpricing. For example,
            a 20% margin is equivalent to a 25% markup, which means you could be
            pricing jobs lower than intended.
          </p>
        </div>

        <div>
          <h4 className="mb-2 text-lg font-medium">
            How can I increase my profit margin?
          </h4>
          <p className="text-aliceBlue">
            Focus on efficiency, reduce waste, negotiate better supplier rates,
            and regularly review your pricing strategy. Specializing in
            higher-value services can also command better margins.
          </p>
        </div>
      </div>
    </div>
  );
}
