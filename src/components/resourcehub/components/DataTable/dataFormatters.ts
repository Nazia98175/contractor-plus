import { State as StateType } from "@/types";
import { format } from "date-fns";

export function getRegionName(states: StateType[], selectedStates: number[]) {
  if (!selectedStates.length) return null;
  const selectedStateObjs = states.filter((s) => selectedStates.includes(s.id));
  if (selectedStateObjs.length === 0) return null;

  const region = selectedStateObjs[0].region;
  if (region && selectedStateObjs.every((s) => s.region === region)) {
    const allStatesInRegion = states.filter((s) => s.region === region);
    console.log(allStatesInRegion, "allStatesReiog");
    console.log(
      selectedStates.length === allStatesInRegion.length,
      "allstates"
    );
    if (selectedStateObjs.every((s) => s.region === region)) {
      return region;
    }

    // if (selectedStates.length === allStatesInRegion.length) {
    //   console.log(region, "region");
    //   return region;
    // }
  }
  return null;
}

export function formatPeriodLabel(date: Date, period: "monthly" | "quarterly") {
  if (period === "monthly") {
    return format(date, "MMM yyyy");
  } else {
    // Infer quarter (0=Jan-Mar, 1=Apr-Jun, 2=Jul-Sep, 3=Oct-Dec)
    const month = date.getMonth();
    const year = date.getFullYear();
    const quarter = Math.floor(month / 3) + 1;
    return `Q${quarter} ${year}`;
  }
}
