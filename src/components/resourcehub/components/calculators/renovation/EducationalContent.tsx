import { Card } from "../../ui/card";
import { Separator } from "../../ui/separator";
import { Button } from "../../ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function EducationalContent() {
  return (
    <div className="mt-12 space-y-8">
      <section>
        <h2 className="mb-4 text-2xl font-bold">
          Understanding Renovation Costs
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <h3 className="mb-2 text-xl font-medium">
              Cost Factors by Room Type
            </h3>
            <div className="overflow-x-auto">
              <table className="min-w-full border-collapse">
                <thead>
                  <tr className="bg-shutter">
                    <th className="border-stiletto border px-4 py-2 text-left">
                      Room Type
                    </th>
                    <th className="border-stiletto border px-4 py-2 text-left">
                      Typical Cost Range ($/sq ft)
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border-stiletto border px-4 py-2">
                      Kitchen
                    </td>
                    <td className="border-stiletto border px-4 py-2">
                      $150 - $350
                    </td>
                  </tr>
                  <tr>
                    <td className="border-stiletto border px-4 py-2">
                      Bathroom
                    </td>
                    <td className="border-stiletto border px-4 py-2">
                      $125 - $275
                    </td>
                  </tr>
                  <tr>
                    <td className="border-stiletto border px-4 py-2">
                      Bedroom
                    </td>
                    <td className="border-stiletto border px-4 py-2">
                      $50 - $150
                    </td>
                  </tr>
                  <tr>
                    <td className="border-stiletto border px-4 py-2">
                      Living Room
                    </td>
                    <td className="border-stiletto border px-4 py-2">
                      $60 - $180
                    </td>
                  </tr>
                  <tr>
                    <td className="border-stiletto border px-4 py-2">
                      Basement
                    </td>
                    <td className="border-stiletto border px-4 py-2">
                      $75 - $200
                    </td>
                  </tr>
                  <tr>
                    <td className="border-stiletto border px-4 py-2">Attic</td>
                    <td className="border-stiletto border px-4 py-2">
                      $100 - $250
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h3 className="mb-2 text-xl font-medium">
              Renovation Scope Cost Impact
            </h3>
            <p className="text-aliceBlue mb-4">
              Different levels of renovation have significantly different costs
              per square foot:
            </p>
            <div className="overflow-x-auto">
              <table className="min-w-full border-collapse">
                <thead>
                  <tr className="bg-shutter">
                    <th className="border-stiletto border px-4 py-2 text-left">
                      Renovation Level
                    </th>
                    <th className="border-stiletto border px-4 py-2 text-left">
                      Cost Multiplier
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border-stiletto border px-4 py-2">
                      Cosmetic Updates
                    </td>
                    <td className="border-stiletto border px-4 py-2">
                      0.5x - 0.8x
                    </td>
                  </tr>
                  <tr>
                    <td className="border-stiletto border px-4 py-2">
                      Mid-Range Remodel
                    </td>
                    <td className="border-stiletto border px-4 py-2">
                      1.0x (baseline)
                    </td>
                  </tr>
                  <tr>
                    <td className="border-stiletto border px-4 py-2">
                      Full Gut Renovation
                    </td>
                    <td className="border-stiletto border px-4 py-2">
                      1.5x - 2.0x
                    </td>
                  </tr>
                  <tr>
                    <td className="border-stiletto border px-4 py-2">
                      High-End/Luxury Finishes
                    </td>
                    <td className="border-stiletto border px-4 py-2">
                      2.0x - 3.5x+
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <Separator />

      <section>
        <h2 className="mb-4 text-2xl font-bold">
          Contingency Planning for Renovations
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <h3 className="mb-2 text-xl font-medium">
              Why Renovation Contingency Matters
            </h3>
            <p className="text-aliceBlue mb-4">
              Renovations are notorious for uncovering unexpected issues once
              work begins. A proper contingency fund helps manage these
              surprises without derailing your project.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="mt-1.5 mr-2 h-2 w-2 flex-shrink-0 rounded-full bg-red-500"></span>
                <span className="text-aliceBlue">
                  Hidden damage (water damage, rot, mold)
                </span>
              </li>
              <li className="flex items-start">
                <span className="mt-1.5 mr-2 h-2 w-2 flex-shrink-0 rounded-full bg-red-500"></span>
                <span className="text-aliceBlue">
                  Electrical or plumbing issues behind walls
                </span>
              </li>
              <li className="flex items-start">
                <span className="mt-1.5 mr-2 h-2 w-2 flex-shrink-0 rounded-full bg-red-500"></span>
                <span className="text-aliceBlue">
                  Structural problems discovered during demolition
                </span>
              </li>
              <li className="flex items-start">
                <span className="mt-1.5 mr-2 h-2 w-2 flex-shrink-0 rounded-full bg-red-500"></span>
                <span className="text-aliceBlue">
                  Design changes and upgrades during the project
                </span>
              </li>
              <li className="flex items-start">
                <span className="mt-1.5 mr-2 h-2 w-2 flex-shrink-0 rounded-full bg-red-500"></span>
                <span className="text-aliceBlue">
                  Permit complications or code compliance issues
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-2 text-xl font-medium">
              Recommended Contingency Percentages
            </h3>
            <div className="overflow-x-auto">
              <table className="min-w-full border-collapse">
                <thead>
                  <tr className="bg-shutter">
                    <th className="border-stiletto border px-4 py-2 text-left">
                      Project Type
                    </th>
                    <th className="border-stiletto border px-4 py-2 text-left">
                      Typical Contingency
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border-stiletto border px-4 py-2">
                      New Build (Less Risk)
                    </td>
                    <td className="border-stiletto border px-4 py-2">5-10%</td>
                  </tr>
                  <tr>
                    <td className="border-stiletto border px-4 py-2">
                      Cosmetic Renovation
                    </td>
                    <td className="border-stiletto border px-4 py-2">10-15%</td>
                  </tr>
                  <tr>
                    <td className="border-stiletto border px-4 py-2">
                      Standard Renovation
                    </td>
                    <td className="border-stiletto border px-4 py-2">15-20%</td>
                  </tr>
                  <tr>
                    <td className="border-stiletto border px-4 py-2">
                      Major Gut Renovation
                    </td>
                    <td className="border-stiletto border px-4 py-2">20-30%</td>
                  </tr>
                  <tr>
                    <td className="border-stiletto border px-4 py-2">
                      Historic Building Renovation
                    </td>
                    <td className="border-stiletto border px-4 py-2">
                      25-35%+
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <Separator />

      <section className="space-y-6">
        <h2 className="text-2xl font-bold">Renovation Cost FAQs</h2>

        <div className="space-y-4">
          <div>
            <p className="text-lg font-medium">
              Should I include my appliances in the renovation cost?
            </p>
            <p className="text-discoBall leading-relaxed">
              It depends on your budgeting approach. For kitchen renovations,
              major appliances often represent 15-20% of the total budget. You
              can either include them in your per-square-foot cost calculation
              or budget for them separately. For accurate comparison when
              getting quotes, make sure you're clear about whether appliances
              are included or not.
            </p>
          </div>

          <div>
            <p className="text-lg font-medium">
              How accurate is a square foot estimate for renovations?
            </p>
            <p className="text-discoBall leading-relaxed">
              Square foot estimates provide a useful starting point but are less
              precise for renovations than for new construction. Renovation
              complexity varies widely based on existing conditions. Use this
              calculator as a ballpark figure, but for detailed budgeting,
              itemize specific costs for materials, fixtures, and labor based on
              your exact plans.
            </p>
          </div>

          <div>
            <p className="text-lg font-medium">
              Should I budget differently for DIY vs. contractor renovations?
            </p>
            <p className="text-discoBall leading-relaxed">
              Yes. DIY renovations can save on labor costs (typically 30-50% of
              a renovation budget), but only if you have the necessary skills.
              For DIY projects, budget more for materials waste and potential
              mistakes. Also consider the value of your time and the quality of
              finished work. For complex renovations involving electrical,
              plumbing, or structural changes, professional contractors are
              usually worth the investment.
            </p>
          </div>

          <div>
            <p className="text-lg font-medium">
              What costs are often forgotten in renovation budgets?
            </p>
            <p className="text-discoBall leading-relaxed">
              Common oversights include: permits and inspection fees, temporary
              housing if you can't live in the space during work, design and
              architectural fees, furniture and decor for the renovated space,
              clean-up and debris removal, and site preparation costs. The
              contingency percentage in this calculator helps account for these
              often-forgotten items.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <Card className="bg-primary/5 border-shutter border p-6">
        <div className="space-y-4 text-center">
          <h3 className="text-xl font-bold">
            Renovations can be unpredictable – but your estimates don't have to
            be
          </h3>
          <p className="text-decemberSky mx-auto max-w-2xl">
            Contractor+ gives remodeling contractors the tools to quickly
            estimate costs (with contingency!), manage change orders, and keep
            projects on track. Start using it to make your renovation projects
            smoother and more profitable.
          </p>

          <Button asChild>
            <Link
              href="https://my.contractorplus.app/auth/register"
              target="_blank"
            >
              Try Contractor+ Today <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </Card>
    </div>
  );
}
