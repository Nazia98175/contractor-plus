import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export function EducationalContent() {
  return (
    <div className="mt-16 max-w-none">
      <div className="rounded-lg border border-gray-100 bg-white p-8 shadow-sm">
        <h2 className="text-aliceBlue mb-6 text-2xl font-bold">
          Drywall Materials Guide
        </h2>

        <div className="prose prose-gray max-w-none">
          <p className="text-alice mb-8 leading-relaxed">
            Understanding drywall material calculations is essential for
            construction projects. This guide helps contractors and DIYers
            estimate materials accurately to save time and money.
          </p>

          <div className="mb-8 grid gap-8 md:grid-cols-2">
            <div className="rounded-lg border border-gray-100 bg-gray-50 p-6">
              <h3 className="mb-4 text-xl font-semibold text-gray-800">
                Choosing the Right Drywall
              </h3>
              <p className="text-alice leading-relaxed">
                Different projects require different types of drywall. Standard
                ½-inch drywall is common for interior walls, while
                moisture-resistant (green board) is better for bathrooms.
                Fire-resistant (Type X) drywall may be required by building
                codes for garages and certain walls.
              </p>
            </div>

            <div className="rounded-lg border border-gray-100 bg-gray-50 p-6">
              <h3 className="mb-4 text-xl font-semibold text-gray-800">
                Understanding Sheet Sizes
              </h3>
              <p className="text-alice leading-relaxed">
                Drywall typically comes in 4-foot widths with varying lengths
                (8, 10, 12 feet). Larger sheets mean fewer seams but are heavier
                and harder to maneuver. For ceilings, consider using lighter
                ceiling-specific panels. Match your sheet selection to your
                space and handling capabilities.
              </p>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="mb-4 text-xl font-semibold text-gray-800">
              Calculating Area Properly
            </h3>
            <p className="text-alice mb-4 leading-relaxed">
              To accurately calculate the total area, measure each wall's height
              and width, then multiply to get the square footage. For a 10' x
              10' room with 8' ceilings, the wall area would be: (10' + 10' +
              10' + 10') × 8' = 320 square feet. Don't forget to account for
              doors and windows - measure their dimensions and subtract their
              area from your total.
            </p>
            <p className="text-alice leading-relaxed">
              When measuring for drywall, it's better to be precise. Take
              detailed measurements of each wall segment, accounting for
              irregularities, and create a comprehensive list before calculating
              your total area. This extra step can save you from ordering too
              much or too little material.
            </p>
          </div>

          <div className="mb-8">
            <h3 className="mb-4 text-xl font-semibold text-gray-800">
              Common Drywall Sheet Sizes and Their Coverage
            </h3>

            <Table className="mb-6 w-full border-collapse">
              <TableHeader className="bg-gray-50">
                <TableRow>
                  <TableHead className="font-semibold">Sheet Size</TableHead>
                  <TableHead className="font-semibold">Coverage Area</TableHead>
                  <TableHead className="font-semibold">Best Uses</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="py-3">4' × 8' (standard)</TableCell>
                  <TableCell className="py-3">32 sq ft</TableCell>
                  <TableCell className="py-3">
                    Most residential walls, small rooms
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="py-3">4' × 10'</TableCell>
                  <TableCell className="py-3">40 sq ft</TableCell>
                  <TableCell className="py-3">
                    Taller walls, fewer horizontal seams
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="py-3">4' × 12'</TableCell>
                  <TableCell className="py-3">48 sq ft</TableCell>
                  <TableCell className="py-3">
                    Large walls, high ceilings, fewer joints
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="py-3">
                    4.5' × 12' (ceiling panels)
                  </TableCell>
                  <TableCell className="py-3">54 sq ft</TableCell>
                  <TableCell className="py-3">
                    Ceilings, slightly wider for stability
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>

          <div className="mb-8 rounded-lg border border-gray-100 bg-gray-50 p-6">
            <h3 className="mb-4 text-xl font-semibold text-gray-800">
              Waste Factor Considerations
            </h3>

            <div className="space-y-6">
              <div>
                <p className="mb-2 font-semibold text-gray-800">
                  Why include a waste factor?
                </p>
                <p className="text-alice leading-relaxed">
                  Drywall installation always involves cutting, trimming, and
                  occasional mistakes. A waste factor accounts for this
                  inevitable material loss. For simple rectangular rooms with
                  standard dimensions, a 5-10% waste factor is usually
                  sufficient. For complex layouts with many corners, arches, or
                  angled walls, consider 15-20%.
                </p>
              </div>

              <div>
                <p className="mb-2 font-semibold text-gray-800">
                  Planning cuts efficiently
                </p>
                <p className="text-alice leading-relaxed">
                  Experienced contractors know that planning your cuts can
                  significantly reduce waste. Try to lay out your sheets so
                  offcuts from one area can be used in another. For example,
                  pieces cut from around doors might be perfect for small areas
                  above windows or in closets.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="mb-4 text-xl font-semibold text-gray-800">
              Additional Materials to Consider
            </h3>
            <p className="text-alice mb-4 leading-relaxed">
              While this calculator focuses on drywall sheets, don't forget
              these other essential materials:
            </p>

            <Table className="mb-4 w-full border-collapse">
              <TableHeader className="bg-gray-50">
                <TableRow>
                  <TableHead className="font-semibold">Material</TableHead>
                  <TableHead className="font-semibold">
                    Estimation Rule of Thumb
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="py-3">Drywall Screws</TableCell>
                  <TableCell className="py-3">
                    Approximately 1 lb per 500 sq ft of drywall
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="py-3">Joint Compound (Mud)</TableCell>
                  <TableCell className="py-3">
                    About 0.053 gallons per square meter (one 5-gallon bucket
                    per 1,000 sq ft)
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="py-3">Drywall Tape</TableCell>
                  <TableCell className="py-3">
                    Measure the linear footage of all seams and corners
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="py-3">Corner Bead</TableCell>
                  <TableCell className="py-3">
                    Measure the linear footage of all outside corners
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>

            <p className="text-alice leading-relaxed">
              For a complete project estimate, consider calculating these
              additional materials separately or adding 15-25% to your drywall
              cost to cover these accessories.
            </p>
          </div>

          <div className="rounded-lg border border-gray-100 bg-gray-50 p-6">
            <h3 className="mb-4 text-xl font-semibold text-gray-800">
              Frequently Asked Questions
            </h3>

            <div className="space-y-6">
              <div className="border-b border-gray-200 pb-4">
                <p className="mb-2 font-semibold text-gray-800">
                  Should I buy extra sheets beyond what the calculator suggests?
                </p>
                <p className="text-alice leading-relaxed">
                  It's generally a good practice to purchase 1-2 extra sheets
                  beyond what the calculator recommends, especially for larger
                  jobs. This provides a buffer for unexpected damage or
                  miscalculations, and unused sheets can usually be returned if
                  unopened.
                </p>
              </div>

              <div className="border-b border-gray-200 pb-4">
                <p className="mb-2 font-semibold text-gray-800">
                  How do I account for different ceiling heights?
                </p>
                <p className="text-alice leading-relaxed">
                  If your room has varying ceiling heights, calculate each wall
                  section separately. For example, if half your room has an 8'
                  ceiling and half has a 10' ceiling, calculate the area for
                  each section individually, then add them together.
                </p>
              </div>

              <div>
                <p className="mb-2 font-semibold text-gray-800">
                  What's the best approach for complex room layouts?
                </p>
                <p className="text-alice leading-relaxed">
                  For rooms with complex layouts, break the space into simpler
                  rectangular sections. Calculate each section separately, then
                  add them together. For particularly complex spaces with many
                  angles, increase your waste factor to 15-20%.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
