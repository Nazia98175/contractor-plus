
import { AirVent } from "lucide-react";

export function PageHeader() {
  return (
    <div className="mx-auto max-w-4xl text-center mb-10">
      <div className="bg-primary/10 p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
        <AirVent className="h-8 w-8 text-primary" />
      </div>
      <h1 className="scroll-m-20 text-3xl font-semibold tracking-tight">
        HVAC CFM Calculator
      </h1>
      <p className="text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">
        Determine the required CFM (Cubic Feet per Minute) needed for proper ventilation and air exchange in any room.
      </p>
    </div>
  );
}
