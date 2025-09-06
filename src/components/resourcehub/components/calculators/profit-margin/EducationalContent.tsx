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
          <div className="bg-shutter border-stiletto rounded-lg border p-6 shadow-sm">
            <h3 className="mb-3 text-lg font-semibold">
              What is Profit Margin?
            </h3>
            <p className="text-alice">
              Profit margin is the percentage of revenue that represents profit
              after accounting for all costs. It's calculated by dividing your
              profit by the selling price, then multiplying by 100.
            </p>
            <div className="bg-shutter mt-3 rounded p-3">
              <code className="block text-sm">
                Profit Margin (%) = (Profit / Revenue) × 100
              </code>
            </div>
          </div>

          <div className="bg-shutter border-stiletto rounded-lg border p-6 shadow-sm">
            <h3 className="mb-3 text-lg font-semibold">
              Why Profit Margin Matters
            </h3>
            <p className="text-alice">
              Understanding your profit margin helps you:
            </p>
            <ul className="text-alice mt-2 list-disc space-y-1 pl-5">
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
          <div className="border-stiletto bg-shutter rounded-lg border p-5">
            <h3 className="mb-2 text-lg font-semibold">
              Target Margins by Industry
            </h3>
            <p className="text-alice mb-3">
              Different contracting specialties have different typical profit
              margins. While these can vary by location and company size, here
              are some general guidelines:
            </p>
            <div className="overflow-x-auto">
              <table className="divide-stiletto min-w-full divide-y">
                <thead className="bg-indiaInk overflow-hidden rounded-b-xl">
                  <tr>
                    <th
                      scope="col"
                      className="px-4 py-3 text-left text-xs font-medium tracking-wider uppercase"
                    >
                      Industry
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3 text-left text-xs font-medium tracking-wider uppercase"
                    >
                      Typical Margin Range
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-stiletto divide-y">
                  <tr>
                    <td className="px-4 py-2 text-sm">
                      Residential Construction
                    </td>
                    <td className="px-4 py-2 text-sm">15% - 25%</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 text-sm">
                      Commercial Construction
                    </td>
                    <td className="px-4 py-2 text-sm">10% - 20%</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 text-sm">
                      Specialty Trades (Electrical, Plumbing)
                    </td>
                    <td className="px-4 py-2 text-sm">20% - 35%</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 text-sm">Home Remodeling</td>
                    <td className="px-4 py-2 text-sm">20% - 30%</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 text-sm">Landscaping</td>
                    <td className="px-4 py-2 text-sm">15% - 45%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="border-stiletto bg-shutter rounded-lg border p-5">
            <h3 className="mb-2 text-lg font-semibold">
              Tips to Improve Your Profit Margins
            </h3>
            <ol className="text-alice list-decimal space-y-3 pl-5">
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
      <div className="border-stiletto bg-shutter mt-10 rounded-lg border p-6">
        <h3 className="mb-2 text-xl font-bold">
          Make sure every job is profitable
        </h3>
        <p className="text-decemberSky mb-4">
          Contractor+ can help you track costs and profits across all your
          projects – so you know your margins before you even start. Don't work
          for free; use Contractor+ to stay on top of your bottom line!
        </p>
        <Button> Try Contractor+ Today</Button>
      </div>
    </div>
  );
}
