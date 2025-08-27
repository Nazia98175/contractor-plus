// import { LaborRate, State as StateType, FilterState, Industry } from "@/types";
// import { isAfter, isBefore } from "date-fns";
// import { aggregateRegionData } from "./regionAggregation";
// import { generateMonthlyStateData } from "./monthlyTableUtils";
// import { StateTableDataRow } from "./types";

// export function processStateTableData(
//   industries: Industry[],
//   states: StateType[],
//   laborRates: LaborRate[],
//   filters: FilterState
// ): StateTableDataRow[] {
//   console.log("processStateTableData called with:", {
//     industriesCount: industries.length,
//     statesCount: states.length,
//     laborRatesCount: laborRates.length,
//     filters,
//     laborRates,
//   });

//   // Convert filter state IDs to numbers for comparison
//   const stateIds = filters.states.map((id) => parseInt(id, 10));
//   console.log(stateIds, "stateIds");
//   const industryIds = filters.industries.map((id) => id);

//   // Check if we should show regional data
//   const uniqueRegions = new Set(
//     states.filter((s) => stateIds.includes(s.id)).map((s) => s.region)
//   );
//   console.log(uniqueRegions, "uniqueRegions");

//   if (uniqueRegions.size === 1 && filters.states.length > 1) {
//     console.log("Showing regional aggregate data");
//     return aggregateRegionData(industries, states, laborRates, filters);
//   }

//   // Individual state processing
//   const data: StateTableDataRow[] = [];

//   const firstAvailableRate = laborRates.reduce<Date | undefined>(
//     (min, rate) => {
//       const d = new Date(rate.year, (rate.quarter - 1) * 3, 1);
//       return !min || d < min ? d : min;
//     },
//     undefined
//   );

//   const fromDate =
//     filters.dateRange?.from && firstAvailableRate
//       ? filters.dateRange.from < firstAvailableRate
//         ? firstAvailableRate
//         : filters.dateRange.from
//       : filters.dateRange?.from;

//   industries.forEach((industry) => {
//     if (!industryIds.includes(industry.id)) return;
//     states.forEach((state) => {
//       // Check if this state is in the filter
//       if (stateIds.includes(state.id)) {
//         let relevantRates = laborRates.filter(
//           (r) =>
//             r.industryId === industry.id &&
//             r.stateId === state.id &&
//             r.uom === filters.uom
//         );
//         console.log(relevantRates, "relevantRates");
//         // Date range filter
//         // if (filters.dateRange?.from) {
//         //   relevantRates = relevantRates.filter((r) => {
//         //     const baseDate = new Date(r.year, (r.quarter - 1) * 3, 1);
//         //     return !isBefore(baseDate, filters.dateRange!.from!);
//         //   });
//         // }
//         // if (filters.dateRange?.to) {
//         //   relevantRates = relevantRates.filter((r) => {
//         //     const baseDate = new Date(r.year, (r.quarter - 1) * 3, 1);
//         //     return !isAfter(baseDate, filters.dateRange!.to!);
//         //   });
//         // }
//         if (fromDate) {
//           relevantRates = relevantRates.filter((r) => {
//             const baseDate = new Date(r.year, (r.quarter - 1) * 3, 1);
//             return !isBefore(baseDate, fromDate);
//           });
//         }

//         if (filters.dateRange?.to) {
//           relevantRates = relevantRates.filter((r) => {
//             const baseDate = new Date(r.year, (r.quarter - 1) * 3, 1);
//             return !isAfter(baseDate, filters.dateRange.to);
//           });
//         }

//         if (filters.period === "Monthly" || filters.dateRange?.preset) {
//           if (fromDate && filters.dateRange?.to) {
//             const monthlyData = generateMonthlyStateData({
//               fromDate: fromDate,
//               toDate: filters.dateRange.to,
//               relevantRates,
//               industryName: industry.name,
//               stateName: state.name,
//               stateAbbr: state.abbreviation,
//               uom: filters.uom,
//             });
//             console.log(monthlyData, "monthlyData");
//             data.push(...monthlyData);
//           }
//         } else {
//           relevantRates.forEach((rate, index) => {
//             data.push({
//               id: index, // Use index instead of rate.id
//               industryName: industry.name,
//               stateName: state.name,
//               stateAbbr: state.abbreviation,
//               contractorPlusRate: rate.contractorPlusRate,
//               blsRate: rate.blsRate,
//               averageRate: rate.averageRate,
//               year: rate.year,
//               quarter: rate.quarter,
//               period: `${rate.year} Q${rate.quarter}`,
//               uom: rate.uom,
//               timestamp: new Date(
//                 rate.year,
//                 (rate.quarter - 1) * 3,
//                 1
//               ).getTime(),
//             });
//           });
//         }
//       }
//     });
//   });

//   console.log("processStateTableData returning data:", data);
//   return data;
// }

// export type { StateTableDataRow };
