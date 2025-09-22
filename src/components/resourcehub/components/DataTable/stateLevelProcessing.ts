import { State as StateType } from "@/types";
import { formatPeriodLabel } from "./dataFormatters";
import { isAfter, isBefore, addMonths, getMonth, getYear } from "date-fns";
import { generateMonthlyStateData } from "./monthlyTableUtils";
import { FilterState, LaborRate } from "@/types/resources";

export function generateStateLevelData(
  industries: any[],
  states: StateType[],
  laborRates: LaborRate[],
  filters: FilterState,
) {
  const fromDate = filters.dateRange?.from;
  const toDate = filters.dateRange?.to;
  const data: any[] = [];

  industries.forEach((industry) => {
    states.forEach((state) => {
      let relevantRates = laborRates.filter(
        (r) =>
          r.industryId === industry.id &&
          r.stateId === state.id &&
          r.uom === filters.uom,
      );

      if (fromDate) {
        relevantRates = relevantRates.filter((r) => {
          const baseDate = new Date(r.year, (r.quarter - 1) * 3, 1);
          return !isBefore(baseDate, fromDate);
        });
      }
      if (toDate) {
        relevantRates = relevantRates.filter((r) => {
          const baseDate = new Date(r.year, (r.quarter - 1) * 3, 1);
          return !isAfter(baseDate, toDate);
        });
      }

      if (filters.period === "Monthly" && fromDate && toDate) {
        // Generate monthly data for the full date range
        data.push(
          ...generateMonthlyStateData({
            fromDate,
            toDate,
            relevantRates,
            industryName: industry.name,
            stateName: state.name,
            stateAbbr: state.abbreviation,
            uom: filters.uom,
          }),
        );
      } else if (filters.period === "Quarterly") {
        // For quarterly view, process each quarter
        if (relevantRates.length === 0 && fromDate && toDate) {
          // No data available for this state/industry, generate empty entries for each quarter
          let currentDate = new Date(fromDate);
          currentDate.setDate(1); // First day of month
          currentDate.setMonth(Math.floor(currentDate.getMonth() / 3) * 3); // First month of quarter

          while (!isAfter(currentDate, toDate)) {
            const currentQuarter = Math.floor(currentDate.getMonth() / 3) + 1;

            data.push({
              industryName: industry.name,
              stateName: state.name,
              stateAbbr: state.abbreviation,
              uom: filters.uom,
              contractorPlusRate: null,
              blsRate: null,
              averageRate: null,
              period: `Q${currentQuarter} ${currentDate.getFullYear()}`,
              timestamp: currentDate.getTime(),
            });

            // Move to next quarter
            currentDate = addMonths(currentDate, 3);
          }
        } else {
          // Process existing quarterly data
          relevantRates.forEach((r) => {
            const quarterDate = new Date(r.year, (r.quarter - 1) * 3, 1);
            data.push({
              industryName: industry.name,
              stateName: state.name,
              stateAbbr: state.abbreviation,
              uom: r.uom,
              contractorPlusRate: r.contractorPlusRate,
              blsRate: r.blsRate,
              averageRate: r.averageRate,
              period: formatPeriodLabel(quarterDate, "quarterly"),
              timestamp: quarterDate.getTime(),
            });
          });
        }
      }
    });
  });

  return data;
}
