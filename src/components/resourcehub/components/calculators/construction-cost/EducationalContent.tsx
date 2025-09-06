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
          Understanding Construction Costs
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <h3 className="mb-2 text-xl font-medium">
              Cost Factors by Construction Type
            </h3>
            <div className="text-decemberSky overflow-x-auto">
              <table className="min-w-full border-collapse">
                <thead>
                  <tr>
                    <th className="border-stiletto border px-4 py-2 text-left">
                      Construction Type
                    </th>
                    <th className="border-stiletto border px-4 py-2 text-left">
                      Typical Cost Range ($/sq ft)
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border-stiletto border px-4 py-2">
                      Basic/Economy Home
                    </td>
                    <td className="border-stiletto border px-4 py-2">
                      $100 - $150
                    </td>
                  </tr>
                  <tr>
                    <td className="border-stiletto border px-4 py-2">
                      Mid-Range Home
                    </td>
                    <td className="border-stiletto border px-4 py-2">
                      $150 - $250
                    </td>
                  </tr>
                  <tr>
                    <td className="border-stiletto border px-4 py-2">
                      Luxury/Custom Home
                    </td>
                    <td className="border-stiletto border px-4 py-2">
                      $250 - $500+
                    </td>
                  </tr>
                  <tr>
                    <td className="border-stiletto border px-4 py-2">
                      Basic Commercial
                    </td>
                    <td className="border-stiletto border px-4 py-2">
                      $150 - $300
                    </td>
                  </tr>
                  <tr>
                    <td className="border-stiletto border px-4 py-2">
                      Mid-Range Commercial
                    </td>
                    <td className="border-stiletto border px-4 py-2">
                      $300 - $500
                    </td>
                  </tr>
                  <tr>
                    <td className="border-stiletto border px-4 py-2">
                      High-End Commercial
                    </td>
                    <td className="border-stiletto border px-4 py-2">
                      $500 - $1,000+
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h3 className="mb-2 text-xl font-medium">
              Regional Cost Variations
            </h3>
            <p className="text-aliceBlue mb-4">
              Construction costs can vary significantly by region due to
              differences in labor rates, material availability, and local
              regulations.
            </p>
            <div className="text-decemberSky overflow-x-auto">
              <table className="min-w-full border-collapse">
                <thead>
                  <tr>
                    <th className="border-stiletto border px-4 py-2 text-left">
                      Location Type
                    </th>
                    <th className="border-stiletto border px-4 py-2 text-left">
                      Cost Multiplier
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border-stiletto border px-4 py-2">
                      Rural Areas
                    </td>
                    <td className="border-stiletto border px-4 py-2">
                      0.7x - 0.9x
                    </td>
                  </tr>
                  <tr>
                    <td className="border-stiletto border px-4 py-2">
                      Suburban Areas
                    </td>
                    <td className="border-stiletto border px-4 py-2">
                      0.9x - 1.1x
                    </td>
                  </tr>
                  <tr>
                    <td className="border-stiletto border px-4 py-2">
                      Urban Centers
                    </td>
                    <td className="border-stiletto border px-4 py-2">
                      1.1x - 1.4x
                    </td>
                  </tr>
                  <tr>
                    <td className="border-stiletto border px-4 py-2">
                      High-Cost Cities
                    </td>
                    <td className="border-stiletto border px-4 py-2">
                      1.4x - 2.0x+
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
        <h2 className="mb-4 text-2xl font-bold">Contingency Planning</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <h3 className="mb-2 text-xl font-medium">
              Why Include Contingency?
            </h3>
            <p className="text-aliceBlue mb-4">
              Construction projects often encounter unexpected challenges that
              can impact the budget. A contingency fund helps manage these risks
              without derailing the project.
            </p>
            <ul className="text-aliceBlue list-disc space-y-3 pl-5">
              <li>Accounts for unforeseen site conditions</li>
              <li>Covers unexpected material price increases</li>
              <li>Allows for minor design changes during construction</li>
              <li>Provides buffer for regulatory compliance issues</li>
              <li>Accommodates weather delays and schedule impacts</li>
            </ul>
          </div>

          <div>
            <h3 className="mb-2 text-xl font-medium">
              Recommended Contingency Percentages
            </h3>
            <div className="text-decemberSky overflow-x-auto">
              <table className="min-w-full border-collapse">
                <thead>
                  <tr>
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
                      New Construction (Standard)
                    </td>
                    <td className="border-stiletto border px-4 py-2">5-10%</td>
                  </tr>
                  <tr>
                    <td className="border-stiletto border px-4 py-2">
                      New Construction (Complex)
                    </td>
                    <td className="border-stiletto border px-4 py-2">10-15%</td>
                  </tr>
                  <tr>
                    <td className="border-stiletto border px-4 py-2">
                      Renovation/Remodel
                    </td>
                    <td className="border-stiletto border px-4 py-2">15-20%</td>
                  </tr>
                  <tr>
                    <td className="border-stiletto border px-4 py-2">
                      Historic Renovation
                    </td>
                    <td className="border-stiletto border px-4 py-2">20-30%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <Separator />

      <section className="space-y-6">
        <h2 className="text-2xl font-bold">Construction Cost FAQs</h2>

        <div className="space-y-4">
          <div>
            <p className="text-lg font-medium">
              What's included in the cost per square foot?
            </p>
            <p className="text-discoBall leading-relaxed">
              Typically, cost per square foot includes direct construction costs
              (materials, labor, equipment), contractor overhead and profit, and
              sometimes basic finishes. It usually doesn't include land costs,
              site development, landscaping, permits, architectural fees, or
              furnishings.
            </p>
          </div>

          <div>
            <p className="text-lg font-medium">
              How accurate is a square foot estimate?
            </p>
            <p className="text-discoBall leading-relaxed">
              Square foot estimates are considered rough order of magnitude
              (ROM) estimates with typical accuracy of ±15-25%. They're useful
              for initial budgeting but should be refined with more detailed
              estimates as the project design develops.
            </p>
          </div>

          <div>
            <p className="text-lg font-medium">
              Does building height affect the cost per square foot?
            </p>
            <p className="text-discoBall leading-relaxed">
              Yes, taller buildings generally cost more per square foot than
              single-story structures. Multi-story buildings require stronger
              foundations, additional structural elements, stairs/elevators, and
              more complex mechanical systems, all of which increase the cost
              per square foot.
            </p>
          </div>

          <div>
            <p className="text-lg font-medium">
              Should I include basement area in my square footage calculation?
            </p>
            <p className="text-discoBall leading-relaxed">
              It depends on how you're applying the cost per square foot.
              Basements typically cost less per square foot than above-grade
              space. For a more accurate estimate, either use a lower cost per
              square foot for basement areas or exclude the basement from the
              calculation and add its cost separately.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <Card className="bg-primary/5 border-shutter border p-6">
        <div className="space-y-4 text-center">
          <h3 className="text-xl font-bold">
            Turn rough estimates into winning bids
          </h3>
          <p className="text-decemberSky mx-auto max-w-2xl">
            Contractor+ helps general contractors quickly estimate costs per
            square foot, adjust for overhead, and generate professional
            proposals. Get started today and manage your projects from estimate
            to completion in one place!
          </p>
          <Button asChild>
            <Link
              href="https://my.contractorplus.app/authentication/register?af_xp=custom&lang=en&source_caller=ui&pid=web_homepage_buttons&shortlink=homebuttons&deep_link_value=resources%2Fcost-calculator%2Fconstruction-cost&c=web_homepagehttps://my.contractorplus.app/authentication/register?af_xp=custom&lang=en&source_caller=ui&pid=web_homepage_buttons&shortlink=homebuttons&deep_link_value=resources%2Fcost-calculator%2Fconstruction-cost&c=web_homepage"
              target="_blank"
            >
              {" "}
              Get Started <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </Card>
    </div>
  );
}
