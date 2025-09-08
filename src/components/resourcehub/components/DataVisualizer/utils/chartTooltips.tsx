import { Industry, State } from "@/types";
import { FilterState } from "@/types/resources";

// Industry chart tooltip
export const renderIndustryTooltip = (
  props: any,
  filters: FilterState,
  industries: Industry[],
  states: State[],
) => {
  const { active, payload } = props;

  if (active && payload && payload.length) {
    const data = payload[0].payload;
    const industryName =
      industries.find((i) => i.id === data.industryId)?.name ||
      `Industry ${data.industryId}`;

    return (
      <div
        className="border-border rounded-lg border bg-white/90 p-3 shadow-lg backdrop-blur-sm dark:bg-black/90"
        style={{ zIndex: 999999, position: "fixed" }}
      >
        <div className="mb-1 font-semibold">{industryName}</div>
        <div className="space-y-1">
          {payload.map(
            (entry: any, index: number) =>
              entry.value !== null &&
              entry.value !== undefined && (
                <div key={index} className="flex items-center space-x-2">
                  <div
                    className="h-3 w-3 rounded-full"
                    style={{ backgroundColor: entry.color }}
                  ></div>
                  <div>
                    {entry.name}:{" "}
                    <span className="font-medium">
                      ${entry.value.toFixed(2)}
                    </span>
                  </div>
                </div>
              ),
          )}
        </div>
      </div>
    );
  }

  return null;
};

// State chart tooltip
export const renderStateTooltip = (
  props: any,
  filters: FilterState,
  industries: Industry[],
  states: State[],
) => {
  const { active, payload } = props;

  if (active && payload && payload.length) {
    const data = payload[0].payload;
    const stateName =
      states.find((s) => s.id === data.stateId)?.name ||
      `State ${data.stateId}`;

    return (
      <div
        className="border-border rounded-lg border bg-white/90 p-3 shadow-lg backdrop-blur-sm dark:bg-black/90"
        style={{ zIndex: 999999, position: "fixed" }}
      >
        <div className="mb-1 font-semibold">{stateName}</div>
        <div className="space-y-1">
          {payload.map(
            (entry: any, index: number) =>
              entry.value !== null &&
              entry.value !== undefined && (
                <div key={index} className="flex items-center space-x-2">
                  <div
                    className="h-3 w-3 rounded-full"
                    style={{ backgroundColor: entry.color }}
                  ></div>
                  <div>
                    {entry.name}:{" "}
                    <span className="font-medium">
                      ${entry.value.toFixed(2)}
                    </span>
                  </div>
                </div>
              ),
          )}
        </div>
      </div>
    );
  }

  return null;
};
