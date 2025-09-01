import { AirVent } from "lucide-react";

export function PageHeader() {
  return (
    <div className="mx-auto mb-10 max-w-4xl text-center">
      <div className="bg-primary/10 mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full p-3">
        <AirVent className="text-primary h-8 w-8" />
      </div>
      <h1 className="scroll-m-20 text-3xl font-semibold tracking-tight">
        HVAC CFM Calculator
      </h1>
      <p className="text-aliceBlue mx-auto mt-2 max-w-2xl text-lg">
        Determine the required CFM (Cubic Feet per Minute) needed for proper
        ventilation and air exchange in any room.
      </p>
    </div>
  );
}
