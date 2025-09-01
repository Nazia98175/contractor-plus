import { Button } from "../../ui/button";

export function EducationalContent() {
  return (
    <div className="mt-10 space-y-8">
      <div>
        <h2 className="mb-4 text-2xl font-bold">
          Understanding Profit Margins
        </h2>
        <p className="text-aliceBlue mb-6">
          Profit margin is a crucial metric for contractors and construction
          businesses to track the profitability of their projects and services.
        </p>

        <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="mb-3 text-lg font-semibold">
              What is Profit Margin?
            </h3>
            <p className="text-gray-600">
              Profit margin is the percentage of revenue that represents profit
              after accounting for all costs. It's calculated by dividing your
              profit by the selling price, then multiplying by 100.
            </p>
            <div className="mt-3 rounded border border-gray-100 bg-gray-50 p-3">
              <code className="block text-sm">
                Profit Margin (%) = (Profit / Revenue) × 100
              </code>
            </div>
          </div>

          <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="mb-3 text-lg font-semibold">
              Why Profit Margin Matters
            </h3>
            <p className="text-gray-600">
              Understanding your profit margin helps you:
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-gray-600">
              <li>Identify unprofitable services or projects</li>
              <li>Set competitive yet profitable pricing</li>
              <li>Track business health and growth over time</li>
              <li>Make informed decisions about accepting new work</li>
            </ul>
          </div>
        </div>
      </div>

      <div>
        <h2 className="mb-4 text-2xl font-bold">
          Profit Margin Best Practices for Contractors
        </h2>

        <div className="space-y-4">
          <div className="rounded-lg border border-gray-200 bg-white p-5">
            <h3 className="mb-2 text-lg font-semibold">
              Target Margins by Industry
            </h3>
            <p className="mb-3 text-gray-600">
              Different contracting specialties have different typical profit
              margins. While these can vary by location and company size, here
              are some general guidelines:
            </p>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-4 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase"
                    >
                      Industry
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase"
                    >
                      Typical Margin Range
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  <tr>
                    <td className="px-4 py-2 text-sm text-gray-900">
                      Residential Construction
                    </td>
                    <td className="px-4 py-2 text-sm text-gray-900">
                      15% - 25%
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 text-sm text-gray-900">
                      Commercial Construction
                    </td>
                    <td className="px-4 py-2 text-sm text-gray-900">
                      10% - 20%
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 text-sm text-gray-900">
                      Specialty Trades (Electrical, Plumbing)
                    </td>
                    <td className="px-4 py-2 text-sm text-gray-900">
                      20% - 35%
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 text-sm text-gray-900">
                      Home Remodeling
                    </td>
                    <td className="px-4 py-2 text-sm text-gray-900">
                      20% - 30%
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 text-sm text-gray-900">
                      Landscaping
                    </td>
                    <td className="px-4 py-2 text-sm text-gray-900">
                      15% - 45%
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="rounded-lg border border-gray-200 bg-white p-5">
            <h3 className="mb-2 text-lg font-semibold">
              Tips to Improve Your Profit Margins
            </h3>
            <ol className="list-decimal space-y-2 pl-5 text-gray-600">
              <li>
                <strong>Track all costs accurately</strong> - Include materials,
                labor, equipment, permits, and overhead.
              </li>
              <li>
                <strong>Review each project afterward</strong> - Compare
                estimated vs. actual costs to improve future estimates.
              </li>
              <li>
                <strong>Prioritize efficiency</strong> - Train crews, use better
                equipment, and improve processes to reduce labor costs.
              </li>
              <li>
                <strong>Negotiate with suppliers</strong> - Build relationships
                to get better pricing on materials.
              </li>
              <li>
                <strong>Know when to say no</strong> - Not every project is
                worth taking if the margin is too thin.
              </li>
            </ol>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="mt-10 rounded-lg border border-red-100 bg-red-50 p-6">
        <h3 className="mb-2 text-xl font-bold">
          Make sure every job is profitable
        </h3>
        <p className="mb-4 text-gray-700">
          Contractor+ can help you track costs and profits across all your
          projects – so you know your margins before you even start. Don't work
          for free; use Contractor+ to stay on top of your bottom line!
        </p>
        <Button className="bg-red-600 text-white hover:bg-red-700">
          Try Contractor+ Today
        </Button>
      </div>
    </div>
  );
}
