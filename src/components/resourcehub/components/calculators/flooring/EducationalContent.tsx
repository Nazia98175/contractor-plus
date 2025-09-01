import React from "react";
import { Separator } from "../../ui/separator";
import { Card, CardContent, CardHeader, CardTitle } from "../../ui/card";
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
    <div className="mt-16 space-y-8">
      <div>
        <h2 className="text-2xl font-semibold tracking-tight">
          Understanding Flooring Estimates
        </h2>
        <Separator className="my-3" />
        <p className="text-aliceBlue">
          Accurate flooring estimates are essential for both contractors and
          homeowners. This calculator helps you factor in all the important
          costs associated with a flooring project, from materials to labor and
          incidentals.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">
              Common Flooring Types & Costs
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Flooring Type</TableHead>
                  <TableHead>Cost Range (per sq ft)</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>Laminate</TableCell>
                  <TableCell>$1.00 - $5.00</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Vinyl</TableCell>
                  <TableCell>$1.50 - $7.00</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Engineered Hardwood</TableCell>
                  <TableCell>$4.00 - $10.00</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Solid Hardwood</TableCell>
                  <TableCell>$5.00 - $15.00</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Ceramic/Porcelain Tile</TableCell>
                  <TableCell>$3.00 - $12.00</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Carpet</TableCell>
                  <TableCell>$2.00 - $8.00</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">
              Factors Affecting Flooring Costs
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc space-y-1 pl-5">
              <li>Subfloor preparation (leveling, repairs)</li>
              <li>Removal and disposal of existing flooring</li>
              <li>Transitions between different floor types</li>
              <li>Room shape and layout complexity</li>
              <li>Installation pattern complexity</li>
              <li>Baseboards and trim work</li>
              <li>Location and regional labor rates</li>
              <li>Project size (larger projects may have volume discounts)</li>
              <li>Special treatments (staining, sealing, grouting)</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <div>
        <h2 className="mt-8 text-2xl font-semibold tracking-tight">
          Tips for Accurate Floor Measurements
        </h2>
        <Separator className="my-3" />
        <div className="space-y-4">
          <p>
            Accurate measurements are crucial for a proper flooring estimate.
            Here's how to ensure you get it right:
          </p>
          <ol className="list-decimal space-y-2 pl-5">
            <li>
              <strong>Draw a floor plan:</strong> Sketch each room and divide
              complex shapes into rectangles.
            </li>
            <li>
              <strong>Measure each section:</strong> For each rectangle, measure
              the length and width in feet.
            </li>
            <li>
              <strong>Calculate area:</strong> Multiply length by width for each
              section, then add them together.
            </li>
            <li>
              <strong>Account for closets and nooks:</strong> Don't forget to
              include all floor spaces, even small ones.
            </li>
            <li>
              <strong>Exclude fixed features:</strong> Subtract the area of
              permanent fixtures like kitchen islands or built-in cabinets if
              flooring won't go underneath.
            </li>
          </ol>
          <p className="text-aliceBlue mt-4">
            Remember that the waste factor is crucial – even with perfect
            measurements, you'll need extra material for cuts, mistakes, and
            future repairs.
          </p>
        </div>
      </div>
    </div>
  );
}
