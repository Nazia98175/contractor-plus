import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../ui/card";
import {
  ArrowUp,
  Check,
  AlertCircle,
  DollarSign,
  Building,
  Clock,
} from "lucide-react";

export function EducationalContent() {
  return (
    <div className="mt-10">
      <h2 className="mb-6 text-3xl font-bold">
        About Elevator Maintenance Costs
      </h2>

      <p className="mb-8 text-lg leading-relaxed text-gray-300">
        Elevator maintenance is a critical aspect of building operations,
        ensuring the safety and reliability of vertical transportation systems.
        A proper maintenance program includes regular inspections, preventative
        maintenance, and responsive service when issues arise.
      </p>

      <div className="mb-10 grid grid-cols-1 gap-6 md:grid-cols-2">
        <Card className="border-stiletto border">
          <CardHeader className="bg-shutter border-stiletto border-b">
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-red-900/20">
                <Check className="h-5 w-5 text-red-500 dark:text-red-500" />
              </div>
              <CardTitle className="text-xl">
                What's Included in Elevator Maintenance?
              </CardTitle>
            </div>
          </CardHeader>
          <CardContent className="pt-6">
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="bg-shutter mt-1 rounded-full p-1">
                  <Clock className="text-alice h-4 w-4" />
                </div>
                <div>
                  <strong className="font-medium">
                    Routine maintenance visits:
                  </strong>
                  <p className="text-alice mt-1 text-sm">
                    Regular scheduled service calls where technicians inspect,
                    test, clean, lubricate, and adjust elevator components.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="bg-shutter mt-1 rounded-full p-1">
                  <AlertCircle className="text-alice h-4 w-4" />
                </div>
                <div>
                  <strong className="font-medium">Safety testing:</strong>
                  <p className="text-alice mt-1 text-sm">
                    Annual or semi-annual tests required by code to verify
                    proper operation of safety systems, including emergency
                    communication, door sensors, and mechanical safeties.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="bg-shutter mt-1 rounded-full p-1">
                  <ArrowUp className="text-alice h-4 w-4" />
                </div>
                <div>
                  <strong className="font-medium">Minor repairs:</strong>
                  <p className="text-alice mt-1 text-sm">
                    Some contracts include basic parts replacement and minor
                    repairs as part of the maintenance fee.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="bg-shutter mt-1 rounded-full p-1">
                  <Building className="text-alice h-4 w-4" />
                </div>
                <div>
                  <strong className="font-medium">On-call service:</strong>
                  <p className="text-alice mt-1 text-sm">
                    Availability for emergency repairs outside of scheduled
                    maintenance (may be included or charged separately).
                  </p>
                </div>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card className="border-stiletto border">
          <CardHeader className="bg-shutter border-stiletto border-b">
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-red-100 p-2 dark:bg-red-900/20">
                <DollarSign className="h-5 w-5 text-red-500 dark:text-red-500" />
              </div>
              <CardTitle className="text-xl">
                Factors Affecting Maintenance Costs
              </CardTitle>
            </div>
          </CardHeader>
          <CardContent className="pt-6">
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="bg-shutter mt-1 rounded-full p-1">
                  <ArrowUp className="text-alice h-4 w-4" />
                </div>
                <div>
                  <strong className="font-medium">
                    Elevator type and complexity:
                  </strong>
                  <p className="text-alice mt-1 text-sm">
                    Hydraulic elevators are typically less expensive to maintain
                    than traction elevators. High-speed or high-rise elevators
                    cost more to service.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="bg-shutter mt-1 rounded-full p-1">
                  <Clock className="text-alice h-4 w-4" />
                </div>
                <div>
                  <strong className="font-medium">Age and condition:</strong>
                  <p className="text-alice mt-1 text-sm">
                    Older elevators generally require more maintenance and may
                    have obsolete parts that are expensive to source.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="bg-shutter mt-1 rounded-full p-1">
                  <Building className="text-alice h-4 w-4" />
                </div>
                <div>
                  <strong className="font-medium">Usage level:</strong>
                  <p className="text-alice mt-1 text-sm">
                    Elevators in high-traffic buildings require more frequent
                    maintenance and experience more wear and tear.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="bg-shutter mt-1 rounded-full p-1">
                  <DollarSign className="text-alice h-4 w-4" />
                </div>
                <div>
                  <strong className="font-medium">Contract type:</strong>
                  <p className="text-alice mt-1 text-sm">
                    Full-service contracts (including parts and repairs) cost
                    more initially but provide budget certainty. Oil and grease
                    contracts (basic maintenance only) cost less but don't cover
                    repairs.
                  </p>
                </div>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <Card className="border-stiletto mb-10 border">
        <CardHeader className="bg-shutter border-stiletto border-b">
          <div className="flex items-center gap-3">
            <div className="rounded-full bg-red-100 p-2 dark:bg-red-900/20">
              <Check className="h-5 w-5 text-red-500 dark:text-red-500" />
            </div>
            <CardTitle className="text-xl">Cost-Saving Tips</CardTitle>
          </div>
          <CardDescription>
            Strategic approaches to manage elevator maintenance expenses
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="bg-shutter mt-1 rounded-full p-1">
                  <Building className="text-alice h-4 w-4" />
                </div>
                <div>
                  <strong className="font-medium">Group contracts:</strong>
                  <p className="text-alice mt-1 text-sm">
                    If managing multiple buildings, negotiate a group rate for
                    all elevators across your properties.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="bg-shutter mt-1 rounded-full p-1">
                  <Clock className="text-alice h-4 w-4" />
                </div>
                <div>
                  <strong className="font-medium">Extended terms:</strong>
                  <p className="text-alice mt-1 text-sm">
                    Some service providers offer discounts for longer contract
                    terms (3-5 years versus annual).
                  </p>
                </div>
              </li>
            </ul>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="bg-shutter mt-1 rounded-full p-1">
                  <Check className="text-alice h-4 w-4" />
                </div>
                <div>
                  <strong className="font-medium">Preventative focus:</strong>
                  <p className="text-alice mt-1 text-sm">
                    Regular maintenance prevents costly emergency repairs. Don't
                    skimp on routine service.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="bg-shutter mt-1 rounded-full p-1">
                  <ArrowUp className="text-alice h-4 w-4" />
                </div>
                <div>
                  <strong className="font-medium">Modernization:</strong>
                  <p className="text-alice mt-1 text-sm">
                    For older systems, an upfront investment in modernizing
                    components can reduce long-term maintenance costs.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <div className="border-stiletto mb-6 rounded-xl border p-6">
        <div className="mb-4 flex items-center gap-3">
          <div className="rounded-full bg-red-800/30 p-2">
            <ArrowUp className="h-5 w-5 text-red-500" />
          </div>
          <h3 className="text-xl font-semibold text-red-400">
            Planning Your Maintenance Budget
          </h3>
        </div>
        <p className="leading-relaxedtext-gray-300">
          This calculator helps estimate basic annual maintenance costs for
          planning purposes. For a comprehensive maintenance proposal, consult
          with qualified elevator service providers who can assess your specific
          equipment and requirements. Remember that preventative maintenance is
          not just a cost—it's an investment in safety, reliability, and
          long-term operational savings.
        </p>
      </div>
    </div>
  );
}
