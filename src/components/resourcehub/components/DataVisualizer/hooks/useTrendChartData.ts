import { Industry, State } from "@/types";
import { format } from "date-fns";
import { useEffect, useState } from "react";
import { filterRates, updatePeriodData } from "./dataProcessingUtils";
import { getDateRange } from "./dateUtils";
import { ProcessedDataPoint } from "./types";
import { FilterState, LaborRate } from "@/types/resources";

function getMonthsForQuarter(quarter: number): number[] {
  switch (quarter) {
    case 1:
      return [1, 2, 3];
    case 2:
      return [4, 5, 6];
    case 3:
      return [7, 8, 9];
    case 4:
      return [10, 11, 12];
    default:
      return [];
  }
}

// export const useTrendChartData = (
//   laborRates: LaborRate[],
//   filters: FilterState,
//   industries: Industry[],
//   states: State[]
// ): ProcessedDataPoint[] => {
//   const [chartData, setChartData] = useState<ProcessedDataPoint[]>([]);

//   useEffect(() => {
//     const filteredRates = filterRates(laborRates, filters);
//     const { startDate, endDate } = getDateRange(filters);

//     if (!startDate || !endDate) {
//       setChartData([]);
//       return;
//     }

//     // Calculate exact number of months needed
//     const monthsDiff = differenceInMonths(endDate, startDate) + 1;
//     const ratesMap = new Map<string, any>();

//     // Generate only the exact months needed
//     for (let i = 0; i < monthsDiff; i++) {
//       const currentDate = addMonths(startDate, i);
//       const year = getYear(currentDate);
//       const month = getMonth(currentDate) + 1; // JavaScript months are 0-based
//       const quarter = Math.ceil(month / 3);

//       const periodKey =
//         filters.period === "Monthly"
//           ? `${year}-${String(month).padStart(2, "0")}`
//           : `${year}-Q${quarter}`;

//       // For quarterly view, only add the first month of each quarter
//       if (filters.period !== "Quarterly" || month % 3 === 1) {
//         ratesMap.set(periodKey, {
//           year,
//           month: filters.period === "Monthly" ? month : undefined,
//           quarter: filters.period === "Quarterly" ? quarter : undefined,
//           period: formatPeriodLabel(currentDate, filters.period),
//           rawPeriod: periodKey,
//           contractorPlusRate: 0,
//           blsRate: 0,
//           averageRate: 0,
//           count: 0,
//           industryData: {},
//           stateData: {},
//         });
//       }
//     }

//     // Initialize breakdown tracking
//     const industryBreakdown: Record<
//       string,
//       Record<string, Record<string, number>>
//     > = {};
//     const stateBreakdown: Record<
//       string,
//       Record<string, Record<string, number>>
//     > = {};

//     // Process each rate
//     filteredRates.forEach((rate) => {
//       if (filters.period === "Monthly") {
//         const months = getMonthsForQuarter(rate.quarter);
//         months.forEach((month) => {
//           const periodKey = `${rate.year}-${String(month).padStart(2, "0")}`;
//           const entry = ratesMap.get(periodKey);
//           if (!entry) return;

//           updatePeriodData(
//             entry,
//             rate,
//             industryBreakdown,
//             stateBreakdown,
//             periodKey
//           );
//         });
//       } else {
//         const periodKey = `${rate.year}-Q${rate.quarter}`;
//         const entry = ratesMap.get(periodKey);
//         if (!entry) return;

//         updatePeriodData(
//           entry,
//           rate,
//           industryBreakdown,
//           stateBreakdown,
//           periodKey
//         );
//       }
//     });

//     // Format and sort data
//     const trendData = Array.from(ratesMap.values())
//       .map((entry) => {
//         const timestamp =
//           filters.period === "Monthly"
//             ? new Date(
//                 entry.year,
//                 entry.month ? entry.month - 1 : 0,
//                 1
//               ).getTime()
//             : new Date(
//                 entry.year,
//                 entry.quarter ? (entry.quarter - 1) * 3 : 0,
//                 1
//               ).getTime();

//         return {
//           period: entry.period,
//           rawPeriod: entry.rawPeriod,
//           timestamp,
//           contractorPlusRate:
//             entry.count > 0 ? entry.contractorPlusRate / entry.count : null,
//           blsRate: entry.count > 0 ? entry.blsRate / entry.count : null,
//           averageRate: entry.count > 0 ? entry.averageRate / entry.count : null,
//           industryData: entry.industryData,
//           stateData: entry.stateData,
//         };
//       })
//       .sort((a, b) => a.timestamp - b.timestamp);

//     setChartData(trendData);
//   }, [laborRates, filters, industries, states]);

//   return chartData;
// };

export const useTrendChartData = (
  laborRates: LaborRate[],
  filters: FilterState,
  industries: Industry[],
  states: State[],
): ProcessedDataPoint[] => {
  const [chartData, setChartData] = useState<ProcessedDataPoint[]>([]);
  useEffect(() => {
    const filteredRates = filterRates(laborRates, filters);
    const { startDate, endDate } = getDateRange(filters);

    // const ratesMap =
    //   startDate && endDate
    //     ? generatePeriodPlaceholders(
    //         startDate,
    //         endDate,
    //         filters.period === "Monthly"
    //       )
    //     : new Map();
    // (ratesMap, "ratesMap");
    const ratesMap = new Map<string, any>();

    filteredRates.forEach((rate) => {
      const months = getMonthsForQuarter(rate.quarter);

      months.forEach((month) => {
        const isMonthly = filters.period === "Monthly";
        const periodKey = isMonthly
          ? `${rate.year}-${String(month).padStart(2, "0")}`
          : `${rate.year}-Q${rate.quarter}`;

        if (!ratesMap.has(periodKey)) {
          const date = new Date(rate.year, month - 1); // JS month is 0-based
          const displayPeriod = isMonthly
            ? format(date, "MMM yyyy") // e.g., Apr 2025
            : `Q${rate.quarter} ${rate.year}`;

          ratesMap.set(periodKey, {
            year: rate.year,
            month: isMonthly ? month : undefined,
            quarter: isMonthly ? undefined : rate.quarter,
            period: displayPeriod,
            rawPeriod: periodKey,
            contractorPlusRate: 0,
            blsRate: 0,
            averageRate: 0,
            count: 0,
            industryData: {},
            stateData: {},
          });
        }
      });
    });

    // Initialize breakdown tracking
    const industryBreakdown: Record<
      string,
      Record<string, Record<string, number>>
    > = {};
    const stateBreakdown: Record<
      string,
      Record<string, Record<string, number>>
    > = {};

    // Initialize the period keys in the breakdown objects
    ratesMap.forEach((_, key) => {
      industryBreakdown[key] = {
        contractorPlusRate: {},
        blsRate: {},
        averageRate: {},
      };

      stateBreakdown[key] = {
        contractorPlusRate: {},
        blsRate: {},
        averageRate: {},
      };
    });

    // Process each rate
    filteredRates.forEach((rate) => {
      // const periodKey =
      //   filters.period === "Monthly"
      //     ? `${rate.year}-${String(rate.quarter).padStart(2, "0")}` // Handle quarterly data in monthly view
      //     : `${rate.year}-Q${rate.quarter}`;
      // (periodKey, "per");
      // if (!ratesMap.has(periodKey)) {
      //   return;
      // }

      // const entry = ratesMap.get(periodKey);
      // (entry, "entry");
      // updatePeriodData(
      //   entry,
      //   rate,
      //   industryBreakdown,
      //   stateBreakdown,
      //   periodKey
      // );
      if (filters.period === "Monthly") {
        const months = getMonthsForQuarter(rate.quarter);
        months.forEach((month) => {
          const periodKey = `${rate.year}-${String(month).padStart(2, "0")}`;
          const entry = ratesMap.get(periodKey);
          if (!entry) return;

          updatePeriodData(
            entry,
            rate,
            industryBreakdown,
            stateBreakdown,
            periodKey,
          );
        });
      } else {
        const periodKey = `${rate.year}-Q${rate.quarter}`;
        const entry = ratesMap.get(periodKey);
        if (!entry) return;

        updatePeriodData(
          entry,
          rate,
          industryBreakdown,
          stateBreakdown,
          periodKey,
        );
      }
    });

    // Format and sort data
    const trendData = Array.from(ratesMap.values())
      .map((entry) => {
        const timestamp =
          filters.period === "Monthly"
            ? new Date(
                entry.year,
                entry.month ? entry.month - 1 : 0,
                1,
              ).getTime()
            : new Date(
                entry.year,
                entry.quarter ? (entry.quarter - 1) * 3 : 0,
                1,
              ).getTime();

        return {
          period: entry.period,
          rawPeriod: entry.rawPeriod,
          timestamp,
          contractorPlusRate:
            entry.count > 0 ? entry.contractorPlusRate / entry.count : null,
          blsRate: entry.count > 0 ? entry.blsRate / entry.count : null,
          averageRate: entry.count > 0 ? entry.averageRate / entry.count : null,
          industryData: entry.industryData,
          stateData: entry.stateData,
        };
      })
      .sort((a, b) => a.timestamp - b.timestamp);
    setChartData(trendData);
  }, [laborRates, filters, industries, states]);

  return chartData;
};
