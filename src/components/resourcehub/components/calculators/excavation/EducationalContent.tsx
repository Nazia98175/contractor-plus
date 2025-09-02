import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../ui/card";
import { Shovel, Truck, Calculator, AlertTriangle } from "lucide-react";

export function EducationalContent() {
  return (
    <div className="mt-12 space-y-8">
      <h2 className="text-2xl font-semibold">
        Excavation Volume & Cost Calculator Guide
      </h2>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center text-lg">
              <Shovel className="mr-2 h-5 w-5 text-red-600" />
              Understanding Excavation Volume
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-aliceBlue mb-4">
              Excavation volume is calculated by multiplying the length, width,
              and depth of the area to be excavated. The result is initially in
              cubic feet, which is then converted to cubic yards (the industry
              standard for pricing).
            </p>
            <p className="text-aliceBlue">
              <span className="font-semibold">Conversion Formula:</span> 1 cubic
              yard = 27 cubic feet
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center text-lg">
              <Calculator className="mr-2 h-5 w-5 text-red-600" />
              Estimating Excavation Costs
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-aliceBlue mb-4">
              Excavation costs vary based on soil type, accessibility, and
              disposal requirements. The cost per cubic yard typically includes:
            </p>
            <ul className="text-aliceBlue ml-5 list-disc space-y-2">
              <li>Labor for excavation work</li>
              <li>Equipment usage (excavators, backhoes, etc.)</li>
              <li>Material hauling and disposal</li>
              <li>Site preparation and cleanup</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center text-lg">
              <Truck className="mr-2 h-5 w-5 text-red-600" />
              Excavation Material Considerations
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-aliceBlue mb-4">
              When planning excavation work, consider these important factors:
            </p>
            <ul className="text-aliceBlue ml-5 list-disc space-y-2">
              <li>
                <span className="font-semibold">Soil Swell:</span> Excavated
                soil expands in volume by 10-40% depending on soil type
              </li>
              <li>
                <span className="font-semibold">Soil Type:</span> Clay, sand,
                rock, and mixed soils have different excavation challenges and
                costs
              </li>
              <li>
                <span className="font-semibold">Hauling Distance:</span>{" "}
                Transportation costs increase with disposal site distance
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center text-lg">
              <AlertTriangle className="mr-2 h-5 w-5 text-red-600" />
              Important Considerations
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-aliceBlue mb-4">
              For accurate excavation estimates, keep in mind:
            </p>
            <ul className="text-aliceBlue ml-5 list-disc space-y-2">
              <li>Always check for underground utilities before excavating</li>
              <li>Account for proper sloping on deep excavations for safety</li>
              <li>Consider groundwater management needs in your costs</li>
              <li>Include proper compaction for backfill if required</li>
              <li>Check local regulations for disposal requirements</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <div className="border-stiletto bg-shutter mt-8 rounded-lg border p-6">
        <h3 className="mb-3 text-xl font-semibold">
          Estimate digs with confidence
        </h3>
        <p className="text-aliceBlue">
          Contractor+ helps excavation contractors quickly calculate volumes and
          costs, so you can bid jobs accurately. Move the earth without moving
          your budget – use Contractor+ to manage estimates, equipment
          schedules, and job costs from the first shovel to the last truckload.
        </p>
      </div>
    </div>
  );
}
