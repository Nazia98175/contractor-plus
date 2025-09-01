export function EducationalContent() {
  return (
    <div className="prose mt-16 max-w-none">
      <h2 className="mb-4 text-2xl font-bold">
        Labor Cost Guide for Contractors
      </h2>
      <p className="text-aliceBlue mb-8">
        Understanding and accurately calculating labor costs is essential for
        profitable contracting. This guide explains the key components of labor
        costs and how to price your work effectively.
      </p>

      <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-2">
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">
            Understanding Total Labor Cost
          </h3>
          <p>
            Total labor cost consists of direct wages plus labor burden. Many
            contractors make the mistake of only accounting for hourly wages
            when estimating jobs, which can lead to unprofitable projects.
          </p>
          <div className="rounded-lg border border-gray-100 bg-gray-50 p-4">
            <p className="mb-1 font-medium">Labor Cost Formula</p>
            <p className="text-aliceBlue text-sm">
              Total Labor Cost = Direct Wages + Labor Burden
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold">What is Labor Burden?</h3>
          <p>
            Labor burden includes all employment costs beyond the base wage.
            This includes payroll taxes, workers' compensation, health
            insurance, retirement benefits, paid time off, and other
            employee-related expenses.
          </p>
          <div className="rounded-lg border border-gray-100 bg-gray-50 p-4">
            <p className="mb-1 font-medium">Typical Labor Burden Range</p>
            <p className="text-aliceBlue text-sm">
              For most construction businesses, labor burden ranges from 20% to
              40% of direct wages, depending on benefits offered and location.
            </p>
          </div>
        </div>
      </div>

      <h3 className="mb-4 text-xl font-semibold">Frequently Asked Questions</h3>
      <div className="space-y-6">
        <div>
          <h4 className="mb-2 text-lg font-medium">
            Why is accounting for labor burden important?
          </h4>
          <p className="text-aliceBlue">
            Ignoring labor burden can significantly underestimate your actual
            costs. A worker paid $20/hour might actually cost your company
            $26-$28/hour when all employment costs are considered. Not factoring
            this into your estimates can erode your profits.
          </p>
        </div>

        <div>
          <h4 className="mb-2 text-lg font-medium">
            How do I determine the right markup for labor?
          </h4>
          <p className="text-aliceBlue">
            Most successful contractors apply a markup of 30-50% on labor costs.
            Your specific markup should consider market competition, the
            complexity of the work, and your company's overhead costs. Specialty
            contractors or those working in high-demand niches may command
            higher markups.
          </p>
        </div>

        <div>
          <h4 className="mb-2 text-lg font-medium">
            Should I charge differently for different types of workers?
          </h4>
          <p className="text-aliceBlue">
            Yes, it's common to have different billable rates for apprentices,
            journeymen, and master tradespeople. This calculator can be used
            separately for each worker type if your crew has varying skill
            levels and pay rates. For accurate job costing, track hours by
            worker classification.
          </p>
        </div>
      </div>
    </div>
  );
}
