import React from "react";
import { Industry, State } from "@/types";
import { getSourceColors, getSourceKey } from "./common";
import { DataSource, FilterState } from "@/types/resources";

export const renderTrendTooltip = (
  props: any,
  filters: FilterState,
  industries: Industry[],
  states: State[],
) => {
  const { active, payload, coordinate } = props;

  if (active && payload && payload.length) {
    const data = payload[0].payload;

    // Filter to only include selected data sources
    const selectedSources = filters.dataSources || ([] as DataSource[]);

    // Create maps for industries and states
    const industryNameMap = new Map();
    industries.forEach((industry) => {
      industryNameMap.set(industry.id, industry.name);
    });

    const stateNameMap = new Map();
    states.forEach((state) => {
      stateNameMap.set(state.id.toString(), state.name);
    });

    // Color mapping for the different data sources
    const sourceColors = getSourceColors();

    // Check if we're in zip code mode
    const isZipCodeView =
      filters.locationMode === "zipcode" &&
      filters.zipCode &&
      filters.zipCode.length > 0;

    // Get selected industries (either all industries if none selected or just the selected ones)
    const selectedIndustries =
      filters.industries.length === 0
        ? industries.map((i) => i.id).slice(0, 3) // Limit to 3 industries if none selected to prevent crowding
        : filters.industries;

    // Use coordinate for positioning with correct typing
    const tooltipStyle: React.CSSProperties = {
      left: coordinate ? coordinate.x + 50 : undefined,
      top: coordinate ? coordinate.y - 5 : undefined,
      position: "absolute",
      zIndex: 9999,
    };

    return (
      <div
        className="border-border rounded-lg border bg-white/90 p-3 shadow-lg backdrop-blur-sm dark:bg-black/90"
        style={tooltipStyle}
      >
        <h3 className="mb-2 text-sm font-semibold">{data.period}</h3>

        {/* Chart Data Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-xs">
            <thead>
              <tr className="border-border border-b">
                <th className="text-aliceBlue py-1 text-left font-medium">
                  Source
                </th>
                {isZipCodeView ? (
                  <th className="text-aliceBlue px-2 py-1 text-right font-medium">
                    Zip: {filters.zipCode}
                  </th>
                ) : // Show state headers if in state view
                filters.states.length === 0 ? (
                  states
                    .map((s) => s.id.toString())
                    .slice(0, 5)
                    .map((stateId, i) => {
                      const state = states.find(
                        (s) => s.id.toString() === stateId,
                      );
                      return (
                        <th
                          key={i}
                          className="text-aliceBlue px-2 py-1 text-right font-medium"
                        >
                          {state ? state.abbreviation : `S${stateId}`}
                        </th>
                      );
                    })
                ) : (
                  filters.states.map((stateId, i) => {
                    const state = states.find(
                      (s) => s.id.toString() === stateId,
                    );
                    return (
                      <th
                        key={i}
                        className="text-aliceBlue px-2 py-1 text-right font-medium"
                      >
                        {state ? state.abbreviation : `S${stateId}`}
                      </th>
                    );
                  })
                )}
              </tr>
            </thead>
            <tbody>
              {selectedIndustries.map((industryId, industryIndex) => {
                const industryName =
                  industryNameMap.get(industryId) || `Industry ${industryId}`;

                return (
                  <React.Fragment key={`industry-${industryId}`}>
                    {/* Industry header row */}
                    <tr>
                      <td
                        colSpan={
                          isZipCodeView ? 2 : (filters.states.length || 5) + 1
                        }
                        className="bg-muted/30 py-1.5 font-medium"
                      >
                        {industryName}
                      </td>
                    </tr>

                    {/* Source rows for this industry */}
                    {selectedSources.map((source) => {
                      const sourceKey = getSourceKey(source);

                      return (
                        <tr
                          key={`${industryId}-${source}`}
                          className="border-border/40 border-b"
                        >
                          <td className="py-1">
                            <div className="flex items-center">
                              <div
                                className="mr-1.5 h-2 w-2 rounded-full"
                                style={{
                                  backgroundColor:
                                    sourceColors[source] || "#888",
                                }}
                              ></div>
                              <span>{source}</span>
                            </div>
                          </td>

                          {isZipCodeView ? (
                            // Single cell for zip code view
                            <td className="px-2 py-1 text-right">
                              {(() => {
                                let rate = null;
                                if (source === "Contractor+") {
                                  rate = data.contractorPlusRate;
                                } else if (source === "BLS.gov") {
                                  rate = data.blsRate;
                                } else if (source === "Average") {
                                  rate = data.averageRate;
                                }
                                return rate !== undefined && rate !== null
                                  ? `$${parseFloat(rate).toFixed(2)}`
                                  : "$0.00";
                              })()}
                            </td>
                          ) : (
                            // Multiple cells for state view
                            (filters.states.length === 0
                              ? states.map((s) => s.id.toString()).slice(0, 5)
                              : filters.states
                            ).map((stateId) => {
                              // Get the correct rate based on the data source
                              let rate = null;
                              if (source === "Contractor+") {
                                rate = data.contractorPlusRate;
                              } else if (source === "BLS.gov") {
                                rate = data.blsRate;
                              } else if (source === "Average") {
                                rate = data.averageRate;
                              }

                              return (
                                <td
                                  key={stateId}
                                  className="px-2 py-1 text-right"
                                >
                                  {rate !== undefined && rate !== null
                                    ? `$${parseFloat(rate).toFixed(2)}`
                                    : "$0.00"}
                                </td>
                              );
                            })
                          )}
                        </tr>
                      );
                    })}

                    {/* Add a little space between industry groups */}
                    {industryIndex < selectedIndustries.length - 1 && (
                      <tr>
                        <td
                          colSpan={
                            isZipCodeView ? 2 : (filters.states.length || 5) + 1
                          }
                          className="h-1"
                        ></td>
                      </tr>
                    )}
                  </React.Fragment>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }

  return null;
};
