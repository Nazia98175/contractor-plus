import { State as StateType, Industry } from "@/types";
import { isAfter, isBefore } from "date-fns";
import { StateTableDataRow } from "./types";
import { FilterState, LaborRate } from "@/types/resources";

export function aggregateRegionData(
  industries: Industry[],
  states: StateType[],
  laborRates: LaborRate[],
  filters: FilterState,
): StateTableDataRow[] {
  console.log("aggregateRegionData called with:", {
    industriesCount: industries.length,
    statesCount: states.length,
    laborRatesCount: laborRates.length,
    filters,
    laborRates,
  });

  // Convert filter state IDs to numbers for comparison
  const stateIds = filters.states.map((id) => parseInt(id, 10));

  const data: StateTableDataRow[] = [];

  industries.forEach((industry) => {
    // Get all relevant rates for this industry across selected states
    let relevantRates = laborRates.filter(
      (r) =>
        r.industryId === industry.id &&
        stateIds.includes(r.stateId) &&
        r.uom === filters.uom,
    );

    // Date range filter
    if (filters.dateRange?.from) {
      relevantRates = relevantRates.filter((r) => {
        const baseDate = new Date(r.year, (r.quarter - 1) * 3, 1);
        return !isBefore(baseDate, filters.dateRange!.from!);
      });
    }
    if (filters.dateRange?.to) {
      relevantRates = relevantRates.filter((r) => {
        const baseDate = new Date(r.year, (r.quarter - 1) * 3, 1);
        return !isAfter(baseDate, filters.dateRange!.to!);
      });
    }

    // Group by time period and aggregate
    const periodGroups = new Map<string, LaborRate[]>();

    relevantRates.forEach((rate) => {
      const periodKey = `${rate.year}-Q${rate.quarter}`;
      if (!periodGroups.has(periodKey)) {
        periodGroups.set(periodKey, []);
      }
      periodGroups.get(periodKey)!.push(rate);
    });

    // Create aggregated entries
    periodGroups.forEach((rates, periodKey) => {
      const [year, quarter] = periodKey.split("-Q");

      // Calculate averages
      const contractorPlusRates = rates
        .filter((r) => r.contractorPlusRate !== null)
        .map((r) => r.contractorPlusRate!);
      const blsRates = rates
        .filter((r) => r.blsRate !== null)
        .map((r) => r.blsRate!);
      const averageRates = rates
        .filter((r) => r.averageRate !== null)
        .map((r) => r.averageRate!);

      const avgContractorPlus =
        contractorPlusRates.length > 0
          ? contractorPlusRates.reduce((sum, rate) => sum + rate, 0) /
            contractorPlusRates.length
          : null;

      const avgBls =
        blsRates.length > 0
          ? blsRates.reduce((sum, rate) => sum + rate, 0) / blsRates.length
          : null;

      const avgAverage =
        averageRates.length > 0
          ? averageRates.reduce((sum, rate) => sum + rate, 0) /
            averageRates.length
          : null;

      // Get region name from the first state
      const firstStateId = stateIds[0];
      const firstState = states.find((s) => s.id === firstStateId);
      const regionName = firstState?.region || "Unknown Region";

      data.push({
        id: data.length,
        industryName: industry.name,
        stateName: regionName,
        stateAbbr: "REG",
        regionName: regionName,
        contractorPlusRate: avgContractorPlus,
        blsRate: avgBls,
        averageRate: avgAverage,
        year: parseInt(year),
        quarter: parseInt(quarter),
        period: `${year} Q${quarter}`,
        uom: filters.uom,
        timestamp: new Date(
          parseInt(year),
          (parseInt(quarter) - 1) * 3,
          1,
        ).getTime(),
      });
    });
  });

  console.log("aggregateRegionData returning data:", data);
  return data;
}
