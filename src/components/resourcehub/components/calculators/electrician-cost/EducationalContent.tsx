import React from "react";
import { Lightbulb, HelpCircle, Calculator, Settings } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../../ui/card";
import { Separator } from "../../ui/separator";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../ui/table";

export function EducationalContent() {
  return (
    <div className="mt-12">
      <h2 className="mb-6 text-2xl font-bold">
        Understanding Electrician Billing Rates
      </h2>

      <div className="mb-10 grid grid-cols-1 gap-8 md:grid-cols-2">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-base font-medium">
              <Lightbulb className="h-5 w-5 text-amber-500" /> Why This Matters
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600">
              Understanding your true hourly costs is critical for electrical
              contractors. Setting your rates too low can lead to unprofitable
              work, while setting them too high might price you out of the
              market. This calculator helps find the sweet spot where you cover
              all costs, account for unbillable time, and earn a fair profit.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-base font-medium">
              <HelpCircle className="h-5 w-5 text-blue-500" /> Billing Rate vs.
              Wage
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600">
              Many electrical contractors mistakenly base their rates solely on
              what competitors charge or by simply doubling wages. This
              overlooks crucial costs like insurance, tools, vehicles, and
              unbillable hours. A proper rate calculation accounts for all
              overhead and ensures sustainable profitability.
            </p>
          </CardContent>
        </Card>
      </div>

      <Separator className="my-8" />

      <h3 className="mb-4 text-xl font-semibold">
        The Components of an Electrician's Hourly Rate
      </h3>
      <Table className="mb-8">
        <TableHeader>
          <TableRow>
            <TableHead className="w-1/4">Component</TableHead>
            <TableHead>Description</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">Base Wage</TableCell>
            <TableCell>
              The direct hourly pay to the electrician or what you pay yourself
              as owner-operator.
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Labor Burden</TableCell>
            <TableCell>
              Additional employment costs including payroll taxes, workers'
              compensation, health insurance, retirement contributions, and paid
              time off. Typically 15-30% of the base wage.
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Overhead</TableCell>
            <TableCell>
              Business expenses spread across billable hours: office/shop rent,
              vehicle expenses, tools, licensing, insurance, office staff,
              advertising, software, utilities, and training.
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Profit Markup</TableCell>
            <TableCell>
              The amount added to cover business risk, growth investment, and
              owner compensation beyond "wages." A healthy profit margin is
              essential for business sustainability.
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>

      <div className="mb-10 rounded-lg border border-gray-100 bg-gray-50 p-6">
        <h3 className="mb-3 flex items-center text-lg font-medium">
          <Calculator className="mr-2 h-5 w-5 text-red-600" /> Common
          Electrician Rate Mistakes
        </h3>
        <ul className="space-y-2 text-sm text-gray-700">
          <li className="flex gap-2">
            <span className="font-bold text-red-500">•</span>
            <span>Only counting direct wages when setting rates</span>
          </li>
          <li className="flex gap-2">
            <span className="font-bold text-red-500">•</span>
            <span>
              Forgetting to account for non-billable time (training, travel,
              admin work)
            </span>
          </li>
          <li className="flex gap-2">
            <span className="font-bold text-red-500">•</span>
            <span>Not reviewing and adjusting rates as costs increase</span>
          </li>
          <li className="flex gap-2">
            <span className="font-bold text-red-500">•</span>
            <span>
              Setting rates based solely on competitors without understanding
              your own costs
            </span>
          </li>
          <li className="flex gap-2">
            <span className="font-bold text-red-500">•</span>
            <span>
              Using the same rate for all types of electrical work regardless of
              complexity
            </span>
          </li>
        </ul>
      </div>

      <div className="rounded-lg border border-blue-100 bg-blue-50 p-6">
        <h3 className="mb-3 flex items-center text-lg font-medium">
          <Settings className="mr-2 h-5 w-5 text-blue-600" /> Tips for
          Implementing Your Rate
        </h3>
        <div className="space-y-4 text-sm text-gray-700">
          <p>
            <strong>Market Adjustment:</strong> Once you calculate your minimum
            viable rate, compare it with local market rates. If you're
            significantly higher, look for ways to reduce overhead or improve
            efficiency rather than cutting into profit.
          </p>
          <p>
            <strong>Value-Based Pricing:</strong> Consider charging premium
            rates for emergency service, specialized expertise, or high-risk
            work. Not all electrical work should be billed at the same rate.
          </p>
          <p>
            <strong>Annual Review:</strong> Recalculate your rates at least
            annually as costs change. Many contractors fall behind by not
            adjusting for increasing expenses.
          </p>
          <p>
            <strong>Clear Communication:</strong> When clients question rates,
            be prepared to explain the value and quality you deliver, not just
            the components of your cost structure.
          </p>
        </div>
      </div>
    </div>
  );
}
