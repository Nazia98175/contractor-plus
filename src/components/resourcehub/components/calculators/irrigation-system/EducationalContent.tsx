import React from "react";
import { Separator } from "../../ui/separator";
import { Check, Droplet, HelpCircle } from "lucide-react";

export function EducationalContent() {
  return (
    <div className="mt-10 space-y-10">
      <section>
        <h2 className="mb-4 text-2xl font-semibold">
          Guide to Planning an Irrigation System
        </h2>
        <p className="text-muted-foreground mb-6">
          Understanding the basics of irrigation systems can help you plan more
          effectively and budget accurately.
        </p>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-4">
            <h3 className="text-xl font-medium">
              Components of an Irrigation System
            </h3>
            <ul className="space-y-2">
              <li className="flex gap-2">
                <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-600" />
                <span>
                  <strong>Controller:</strong> The "brain" of your system that
                  runs programs and tells valves when to open and close.
                </span>
              </li>
              <li className="flex gap-2">
                <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-600" />
                <span>
                  <strong>Valves:</strong> These control water flow to specific
                  zones in your irrigation system.
                </span>
              </li>
              <li className="flex gap-2">
                <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-600" />
                <span>
                  <strong>Sprinkler Heads:</strong> Devices that distribute
                  water to the landscape, available in various types (rotors,
                  spray heads, drip emitters).
                </span>
              </li>
              <li className="flex gap-2">
                <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-600" />
                <span>
                  <strong>Mainline Pipe:</strong> The primary water supply line
                  running from your water source to the valves.
                </span>
              </li>
              <li className="flex gap-2">
                <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-600" />
                <span>
                  <strong>Lateral Lines:</strong> Pipes running from valves to
                  the sprinkler heads in each zone.
                </span>
              </li>
              <li className="flex gap-2">
                <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-600" />
                <span>
                  <strong>Backflow Preventer:</strong> A safety device that
                  prevents irrigation water from flowing back into your drinking
                  water supply.
                </span>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-medium">Planning Tips</h3>
            <ul className="space-y-2">
              <li className="flex gap-2">
                <Droplet className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-600" />
                <span>
                  Group plants with similar water needs in the same zone.
                </span>
              </li>
              <li className="flex gap-2">
                <Droplet className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-600" />
                <span>
                  Consider sun exposure, soil type, and slopes when designing
                  zones.
                </span>
              </li>
              <li className="flex gap-2">
                <Droplet className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-600" />
                <span>
                  Account for water pressure and flow rate when selecting
                  components.
                </span>
              </li>
              <li className="flex gap-2">
                <Droplet className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-600" />
                <span>
                  Add 10-15% extra pipe and fittings to your estimate for
                  unexpected needs.
                </span>
              </li>
              <li className="flex gap-2">
                <Droplet className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-600" />
                <span>
                  Consider smart controllers that adjust watering based on
                  weather conditions.
                </span>
              </li>
              <li className="flex gap-2">
                <Droplet className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-600" />
                <span>
                  Check local codes and permit requirements before installation.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <Separator />

      <section>
        <h2 className="mb-4 text-2xl font-semibold">
          Common Sprinkler Head Types
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-lg border border-gray-200 bg-gray-50 p-5 shadow-sm">
            <h3 className="mb-2 text-lg font-medium">Spray Heads</h3>
            <p className="mb-3 text-sm text-gray-600">
              Fixed spray pattern, typically covering 5-15 feet radius. Good for
              smaller, regularly shaped areas.
            </p>
            <ul className="space-y-1 text-sm">
              <li className="flex items-center gap-1">
                <HelpCircle className="h-3 w-3 text-gray-500" />
                <span>Cost: $2-$10 each</span>
              </li>
              <li className="flex items-center gap-1">
                <HelpCircle className="h-3 w-3 text-gray-500" />
                <span>Water usage: Higher rate</span>
              </li>
              <li className="flex items-center gap-1">
                <HelpCircle className="h-3 w-3 text-gray-500" />
                <span>Best for: Lawns, flower beds</span>
              </li>
            </ul>
          </div>

          <div className="rounded-lg border border-gray-200 bg-gray-50 p-5 shadow-sm">
            <h3 className="mb-2 text-lg font-medium">Rotor Heads</h3>
            <p className="mb-3 text-sm text-gray-600">
              Rotating stream that covers 15-50 feet radius. More efficient for
              larger areas.
            </p>
            <ul className="space-y-1 text-sm">
              <li className="flex items-center gap-1">
                <HelpCircle className="h-3 w-3 text-gray-500" />
                <span>Cost: $10-$20 each</span>
              </li>
              <li className="flex items-center gap-1">
                <HelpCircle className="h-3 w-3 text-gray-500" />
                <span>Water usage: Lower rate</span>
              </li>
              <li className="flex items-center gap-1">
                <HelpCircle className="h-3 w-3 text-gray-500" />
                <span>Best for: Larger lawns, fields</span>
              </li>
            </ul>
          </div>

          <div className="rounded-lg border border-gray-200 bg-gray-50 p-5 shadow-sm">
            <h3 className="mb-2 text-lg font-medium">Drip Irrigation</h3>
            <p className="mb-3 text-sm text-gray-600">
              Slow delivery directly to plant roots. Most water-efficient
              option.
            </p>
            <ul className="space-y-1 text-sm">
              <li className="flex items-center gap-1">
                <HelpCircle className="h-3 w-3 text-gray-500" />
                <span>Cost: $0.10-$0.50 per foot</span>
              </li>
              <li className="flex items-center gap-1">
                <HelpCircle className="h-3 w-3 text-gray-500" />
                <span>Water usage: Very low</span>
              </li>
              <li className="flex items-center gap-1">
                <HelpCircle className="h-3 w-3 text-gray-500" />
                <span>Best for: Gardens, shrubs, trees</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <Separator />

      <section className="rounded-lg border border-red-100 bg-red-50 p-6">
        <h2 className="mb-3 flex items-center gap-2 text-xl font-semibold">
          <Droplet className="h-5 w-5 text-red-600" />
          <span>Plan out every sprinkler and save money on parts</span>
        </h2>
        <p className="mb-4 text-gray-700">
          Contractor+ helps irrigation specialists estimate all necessary
          materials and costs easily. From heads and valves to controllers, get
          it right on paper and then use Contractor+ to schedule installs and
          manage client approvals. Keep lawns green and customers happy with
          smart planning through Contractor+.
        </p>
      </section>
    </div>
  );
}
