import { Button } from "../../ui/button";

export function EducationalContent() {
  return (
    <div className="mt-10 space-y-8">
      <div>
        <h2 className="mb-4 text-2xl font-bold">
          Creating Accurate Plumbing Bids
        </h2>
        <p className="text-aliceBlue mb-6">
          Accurate bidding is essential for plumbing contractors to win jobs
          while maintaining profitability. Understanding how to calculate and
          present your bids can make the difference between a thriving business
          and one that struggles.
        </p>

        <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="border-stiletto bg-shutter rounded-lg border p-6 shadow-sm">
            <h3 className="mb-3 text-lg font-semibold">
              Why Proper Bidding Matters
            </h3>
            <p className="text-alice">
              Creating precise plumbing bids ensures you cover all costs while
              remaining competitive. Underbidding leads to lost profits, while
              overbidding costs you jobs. The right approach finds the balance
              between profitability and winning work.
            </p>
            <ul className="text-alice mt-3 space-y-1">
              <li className="flex items-start">
                <span className="mt-1.5 mr-2 h-2 w-2 flex-shrink-0 rounded-full bg-red-500"></span>
                <span>Builds customer trust with transparent pricing</span>
              </li>
              <li className="flex items-start">
                <span className="mt-1.5 mr-2 h-2 w-2 flex-shrink-0 rounded-full bg-red-500"></span>
                <span>Protects your profit margins on every job</span>
              </li>
              <li className="flex items-start">
                <span className="mt-1.5 mr-2 h-2 w-2 flex-shrink-0 rounded-full bg-red-500"></span>
                <span>Helps accurately forecast revenue and cash flow</span>
              </li>
              <li className="flex items-start">
                <span className="mt-1.5 mr-2 h-2 w-2 flex-shrink-0 rounded-full bg-red-500"></span>
                <span>Prevents scope creep and unexpected costs</span>
              </li>
            </ul>
          </div>

          <div className="border-stiletto bg-shutter rounded-lg border p-6 shadow-sm">
            <h3 className="mb-3 text-lg font-semibold">
              Components of a Plumbing Bid
            </h3>
            <ul className="text-alice space-y-2">
              <li className="flex items-start">
                <span className="mt-1.5 mr-2 h-2 w-2 flex-shrink-0 rounded-full bg-red-500"></span>
                <span>
                  <strong>Materials:</strong> Pipes, fittings, fixtures, valves,
                  and all other physical components
                </span>
              </li>
              <li className="flex items-start">
                <span className="mt-1.5 mr-2 h-2 w-2 flex-shrink-0 rounded-full bg-red-500"></span>
                <span>
                  <strong>Labor:</strong> Hours required for installation,
                  calculated by experience level and job complexity
                </span>
              </li>
              <li className="flex items-start">
                <span className="mt-1.5 mr-2 h-2 w-2 flex-shrink-0 rounded-full bg-red-500"></span>
                <span>
                  <strong>Overhead:</strong> Business expenses like insurance,
                  vehicles, office costs, and tools
                </span>
              </li>
              <li className="flex items-start">
                <span className="mt-1.5 mr-2 h-2 w-2 flex-shrink-0 rounded-full bg-red-500"></span>
                <span>
                  <strong>Permits & Fees:</strong> Local inspection costs and
                  required documentation
                </span>
              </li>
              <li className="flex items-start">
                <span className="mt-1.5 mr-2 h-2 w-2 flex-shrink-0 rounded-full bg-red-500"></span>
                <span>
                  <strong>Profit Margin:</strong> The amount added to ensure
                  business growth and sustainability
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div>
        <h2 className="mb-4 text-2xl font-bold">Plumbing Bid Best Practices</h2>

        <div className="space-y-4">
          <div className="border-stiletto bg-shutter rounded-lg border p-5">
            <h3 className="mb-2 text-lg font-semibold">
              Typical Markup Rates in Plumbing
            </h3>
            <p className="text-alice mb-3">
              Plumbing contractors use various markup percentages depending on
              job type and market conditions. While these vary by region and
              company size, here are some general guidelines:
            </p>
            <div className="overflow-x-auto">
              <table className="divide-stiletto min-w-full divide-y">
                <thead className="bg-indiaInk overflow-hidden rounded-b-xl">
                  <tr>
                    <th
                      scope="col"
                      className="px-4 py-3 text-left text-xs font-medium tracking-wider uppercase"
                    >
                      Job Type
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3 text-left text-xs font-medium tracking-wider uppercase"
                    >
                      Typical Markup Range
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-stiletto divide-y">
                  <tr>
                    <td className="px-4 py-2 text-sm">Service & Repair</td>
                    <td className="px-4 py-2 text-sm">25% - 45%</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 text-sm">
                      Residential New Construction
                    </td>
                    <td className="px-4 py-2 text-sm">15% - 25%</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 text-sm">Commercial Projects</td>
                    <td className="px-4 py-2 text-sm">10% - 20%</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 text-sm">Emergency Services</td>
                    <td className="px-4 py-2 text-sm">35% - 60%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="border-stiletto bg-shutter rounded-lg border p-5">
            <h3 className="mb-2 text-lg font-semibold">
              Tips for Better Plumbing Bids
            </h3>
            <ol className="text-alice space-y-2">
              <li className="flex items-start">
                <span className="mt-1 mr-2 flex h-5 w-5 flex-shrink-0 items-center justify-center">
                  <span className="flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-xs font-medium text-white">
                    1
                  </span>
                </span>
                <span>
                  <strong>Visit the site before bidding</strong> - Always assess
                  the job in person to identify potential complications.
                </span>
              </li>
              <li className="flex items-start">
                <span className="mt-1 mr-2 flex h-5 w-5 flex-shrink-0 items-center justify-center">
                  <span className="flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-xs font-medium text-white">
                    2
                  </span>
                </span>
                <span>
                  <strong>Create detailed material lists</strong> - Break down
                  every component needed, including connectors, hangers, and
                  consumables.
                </span>
              </li>
              <li className="flex items-start">
                <span className="mt-1 mr-2 flex h-5 w-5 flex-shrink-0 items-center justify-center">
                  <span className="flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-xs font-medium text-white">
                    3
                  </span>
                </span>
                <span>
                  <strong>Account for waste factor</strong> - Add 10-15% to
                  material quantities for mistakes and damaged parts.
                </span>
              </li>
              <li className="flex items-start">
                <span className="mt-1 mr-2 flex h-5 w-5 flex-shrink-0 items-center justify-center">
                  <span className="flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-xs font-medium text-white">
                    4
                  </span>
                </span>
                <span>
                  <strong>Consider access difficulty</strong> - Jobs with
                  limited space or difficult access may require more labor
                  hours.
                </span>
              </li>
              <li className="flex items-start">
                <span className="mt-1 mr-2 flex h-5 w-5 flex-shrink-0 items-center justify-center">
                  <span className="flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-xs font-medium text-white">
                    5
                  </span>
                </span>
                <span>
                  <strong>Document everything</strong> - Clearly specify what is
                  included and excluded to prevent misunderstandings.
                </span>
              </li>
              <li className="flex items-start">
                <span className="mt-1 mr-2 flex h-5 w-5 flex-shrink-0 items-center justify-center">
                  <span className="flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-xs font-medium text-white">
                    6
                  </span>
                </span>
                <span>
                  <strong>Review historical data</strong> - Use past jobs as a
                  benchmark for similar new projects.
                </span>
              </li>
            </ol>
          </div>

          <div className="border-stiletto bg-shutter rounded-lg border p-5">
            <h3 className="mb-2 text-lg font-semibold">
              Common Bidding Mistakes to Avoid
            </h3>
            <ul className="text-alice space-y-2">
              <li className="flex items-start">
                <span className="mt-1.5 mr-2 h-2 w-2 flex-shrink-0 rounded-full bg-red-500"></span>
                <span>
                  <strong>Forgetting permit costs</strong> - These can add
                  significant expenses that eat into profits if not included.
                </span>
              </li>
              <li className="flex items-start">
                <span className="mt-1.5 mr-2 h-2 w-2 flex-shrink-0 rounded-full bg-red-500"></span>
                <span>
                  <strong>Underestimating time</strong> - Especially for tasks
                  like testing, cleanup, and client communication.
                </span>
              </li>
              <li className="flex items-start">
                <span className="mt-1.5 mr-2 h-2 w-2 flex-shrink-0 rounded-full bg-red-500"></span>
                <span>
                  <strong>Missing material price increases</strong> - Check
                  current prices before bidding, especially in volatile markets.
                </span>
              </li>
              <li className="flex items-start">
                <span className="mt-1.5 mr-2 h-2 w-2 flex-shrink-0 rounded-full bg-red-500"></span>
                <span>
                  <strong>Neglecting overhead allocation</strong> - Every job
                  should contribute to covering your fixed business costs.
                </span>
              </li>
              <li className="flex items-start">
                <span className="mt-1.5 mr-2 h-2 w-2 flex-shrink-0 rounded-full bg-red-500"></span>
                <span>
                  <strong>Improper scope definition</strong> - Unclear
                  boundaries lead to scope creep and lost profits.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="border-stiletto bg-shutter borderp-6 mt-10 rounded-lg p-6">
        <h3 className="mb-2 text-xl font-bold">
          Spend less time crunching numbers and more time plumbing
        </h3>
        <p className="text-decemberSky mb-4">
          Use Contractor+ to create detailed plumbing estimates in minutes –
          factor in all your costs and profit, then send polished proposals that
          win you more jobs. Try it free and see the difference in your bidding
          process!
        </p>
        <Button className="bg-red-600 text-white hover:bg-red-700">
          Try Contractor+ Today
        </Button>
      </div>
    </div>
  );
}
