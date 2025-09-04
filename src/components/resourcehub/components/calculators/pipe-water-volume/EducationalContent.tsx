import { Droplet, Info, Ruler, Calculator } from "lucide-react";

export function EducationalContent() {
  return (
    <div className="space-y-8 py-8">
      <div>
        <h2 className="mb-4 text-2xl font-semibold">
          About Pipe Water Volume Calculator
        </h2>
        <p className="text-aliceBlue mb-6">
          Our pipe water volume calculator helps plumbers, irrigation
          specialists, and other contractors determine how much water a pipe can
          hold. This is useful for system design, flushing calculations, and
          estimating water usage.
        </p>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="border-stiletto bg-shutter rounded-lg border p-6 shadow-sm">
            <div className="mb-3 flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-red-100">
                <Droplet className="h-4 w-4 text-red-500" />
              </div>
              <h3 className="text-lg font-semibold">
                Why Calculate Pipe Volume?
              </h3>
            </div>
            <p className="text-aliceBlue text-sm">
              Knowing a pipe's volume is essential for calculating flushing
              requirements, chemical treatments, sizing systems properly, and
              determining water weight in structural calculations.
            </p>
          </div>

          <div className="border-stiletto bg-shutter rounded-lg border p-6 shadow-sm">
            <div className="mb-3 flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-red-100">
                <Ruler className="h-4 w-4 text-red-500" />
              </div>
              <h3 className="text-lg font-semibold">Measurement Tips</h3>
            </div>
            <p className="text-aliceBlue text-sm">
              For accurate results, always measure the inside diameter of the
              pipe, not the outside. Standard pipe sizes often refer to nominal
              dimensions, which may differ from actual internal measurements.
            </p>
          </div>

          <div className="border-stiletto bg-shutter rounded-lg border p-6 shadow-sm">
            <div className="mb-3 flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-red-100">
                <Calculator className="h-4 w-4 text-red-500" />
              </div>
              <h3 className="text-lg font-semibold">Common Pipe Volumes</h3>
            </div>
            <p className="text-aliceBlue text-sm">
              A 100 ft length of 3/4" pipe holds about 2.3 gallons of water,
              while 100 ft of 2" pipe holds approximately 16.3 gallons. Knowing
              these values helps with material planning and project estimation.
            </p>
          </div>
        </div>
      </div>

      <div className="border-stiletto bg-shutter rounded-lg border p-6">
        <div className="flex gap-3">
          <div className="flex-shrink-0">
            <Info className="h-6 w-6 text-red-500" />
          </div>
          <div>
            <h3 className="mb-2 text-lg font-semibold">
              Calculate materials and plan jobs like a pro
            </h3>
            <p className="text-aliceBlue mb-4">
              Contractor+ can help plumbing and irrigation pros track every
              pipe, fitting, and volume – so you always know what you need and
              can provide accurate quotes and maintenance plans.
            </p>
            <p className="text-alice text-sm">
              This calculator uses the standard formula for cylindrical volume
              (πr²h) and converts between common units for practical
              applications.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
