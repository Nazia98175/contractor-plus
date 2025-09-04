import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../../ui/card";
import {
  Clipboard,
  DollarSign,
  Calculator,
  CheckSquare,
  List,
} from "lucide-react";

export function EducationalContent() {
  return (
    <div className="mt-12 space-y-8">
      <div>
        <h2 className="mb-4 text-2xl font-bold tracking-tight">
          About Multi-Service Job Estimating
        </h2>
        <p className="text-aliceBlue">
          Combining multiple services or trades into one accurate estimate is
          essential for general contractors and project managers. This
          calculator helps you create professional multi-service quotes with
          proper profit margins.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center text-lg">
              <List className="mr-2 h-5 w-5 text-red-500" />
              Itemization
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-aliceBlue text-sm">
              Breaking down each service separately allows for transparency with
              clients and helps identify where costs are concentrated in complex
              projects.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center text-lg">
              <DollarSign className="mr-2 h-5 w-5 text-red-500" />
              Markup Strategy
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-aliceBlue text-sm">
              Apply a consistent profit markup across all services to ensure
              your management fee is properly accounted for. Most contractors
              use a 10-20% markup on multi-service jobs.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center text-lg">
              <Calculator className="mr-2 h-5 w-5 text-red-500" />
              Accurate Costing
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-aliceBlue text-sm">
              Ensure each service cost is accurately estimated, including
              materials, labor, and subcontractor fees. More precise inputs lead
              to more reliable final estimates.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center text-lg">
              <CheckSquare className="mr-2 h-5 w-5 text-red-500" />
              Professional Presentation
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-aliceBlue text-sm">
              A well-organized estimate with clear itemization and transparent
              markup helps build client trust and positions you as a
              professional service provider.
            </p>
          </CardContent>
        </Card>
      </div>

      <Card className="text-darkKnight border-red-100 bg-red-50">
        <CardContent className="pt-6">
          <div className="flex flex-col items-center gap-4 md:flex-row">
            <div className="rounded-full bg-red-100 p-3">
              <Clipboard className="h-6 w-6 text-red-500" />
            </div>
            <div>
              <h3 className="mb-2 text-xl font-semibold">
                Take the headache out of managing multiple trades
              </h3>
              <p>
                Contractor+ allows you to estimate multi-service projects in one
                place – add up different trades, include your markup, and
                generate one clean proposal. Simplify complex jobs and present
                one professional quote to your client with Contractor+ handling
                the heavy math.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">
          Tips for Multi-Service Job Estimating
        </h3>
        <ul className="text-aliceBlue list-disc space-y-2 pl-5">
          <li>
            Include a contingency fund for unexpected issues that might arise
            between different trades
          </li>
          <li>
            Clearly define the scope of each service to avoid scope creep or
            misunderstandings
          </li>
          <li>
            Consider timeline dependencies between services when scheduling and
            pricing
          </li>
          <li>
            Verify all subcontractor quotes before incorporating them into your
            estimate
          </li>
          <li>
            Review your historical data on similar multi-service jobs to
            validate your estimates
          </li>
        </ul>
      </div>
    </div>
  );
}
