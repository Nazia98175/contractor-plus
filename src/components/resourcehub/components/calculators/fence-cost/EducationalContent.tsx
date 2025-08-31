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
import { Fence } from "lucide-react";

export function EducationalContent() {
  return (
    <div className="mt-16 space-y-8">
      <div>
        <h2 className="text-2xl font-semibold tracking-tight">
          Understanding Fence Costs
        </h2>
        <Separator className="my-3" />
        <p className="text-muted-foreground">
          Fence installation costs vary widely based on materials, design,
          terrain, and regional labor rates. This calculator helps you estimate
          the total project cost by factoring in the fence length, gates, and
          additional considerations.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">
              Common Fence Types & Costs
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Fence Type</TableHead>
                  <TableHead>Cost Range (per linear foot)</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>Chain Link</TableCell>
                  <TableCell>$10 - $20</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Wood Privacy</TableCell>
                  <TableCell>$15 - $35</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Vinyl/PVC</TableCell>
                  <TableCell>$20 - $40</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Aluminum</TableCell>
                  <TableCell>$25 - $45</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Wrought Iron</TableCell>
                  <TableCell>$30 - $60</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">
              Factors Affecting Fence Costs
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc space-y-1 pl-5">
              <li>Fence height (taller fences cost more)</li>
              <li>Terrain challenges (sloping, rocky soil)</li>
              <li>Access issues</li>
              <li>Permits and HOA requirements</li>
              <li>Old fence removal</li>
              <li>Gate hardware quality</li>
              <li>Post spacing and size</li>
              <li>Decorative elements and finishes</li>
              <li>Regional cost differences</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <div>
        <h2 className="mt-8 text-2xl font-semibold tracking-tight">
          Measuring Tips for Fence Projects
        </h2>
        <Separator className="my-3" />
        <div className="space-y-4">
          <p>
            Accurate measurements are essential for a proper fence estimate.
            Here are some tips to ensure you get it right:
          </p>
          <ol className="list-decimal space-y-2 pl-5">
            <li>
              <strong>Walk the perimeter:</strong> Walk the entire fence line,
              noting any obstacles or terrain changes.
            </li>
            <li>
              <strong>Measure section by section:</strong> Break the fence line
              into straight sections and measure each one.
            </li>
            <li>
              <strong>Mark gate locations:</strong> Determine exactly where
              gates will be placed and what width they'll be.
            </li>
            <li>
              <strong>Check property lines:</strong> Verify your property
              boundaries before planning the fence.
            </li>
            <li>
              <strong>Calculate post needs:</strong> Posts typically need to be
              placed 6-8 feet apart depending on fence type.
            </li>
          </ol>
          <p className="text-muted-foreground mt-4">
            Remember that precise measurements help ensure you order the correct
            amount of material and get an accurate quote from your contractor.
          </p>
        </div>
      </div>
    </div>
  );
}
