import { FilterState } from "@/types/resources";
import { addMonths, subMonths, format, isAfter } from "date-fns";

export const getDateRange = (
  filters: FilterState,
): { startDate?: Date; endDate: Date } => {
  let startDate: Date | undefined;
  let endDate = new Date();

  if (filters.dateRange?.from && filters.dateRange?.to) {
    startDate = new Date(filters.dateRange.from);
    endDate = new Date(filters.dateRange.to);
  } else if (filters.dateRange?.preset) {
    switch (filters.dateRange.preset) {
      case "Last 3 Months":
        startDate = subMonths(new Date(), 3);
        break;
      case "Last 6 Months":
        startDate = subMonths(new Date(), 6);
        break;
      case "Last 12 Months":
        startDate = subMonths(new Date(), 12);
        break;
      case "This Year":
        startDate = new Date(new Date().getFullYear(), 0, 1);
        break;
      case "Last Year":
        startDate = new Date(new Date().getFullYear() - 1, 0, 1);
        endDate = new Date(new Date().getFullYear() - 1, 11, 31);
        break;
    }
  }

  return { startDate, endDate };
};

export const generatePeriodPlaceholders = (
  startDate: Date,
  endDate: Date,
  isPeriodMonthly: boolean,
): Map<string, any> => {
  const ratesMap = new Map();
  const currentDate = new Date(startDate);

  while (currentDate <= endDate) {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1; // 1-based month

    if (isPeriodMonthly) {
      const monthPeriod = `${year}-${month.toString().padStart(2, "0")}`;
      if (!ratesMap.has(monthPeriod)) {
        const displayPeriod = format(currentDate, "MMM yyyy");
        ratesMap.set(
          monthPeriod,
          createEmptyPeriodData(displayPeriod, monthPeriod, year, month),
        );
      }
      currentDate.setMonth(currentDate.getMonth() + 1);
    } else {
      const quarter = Math.floor((month - 1) / 3) + 1;
      const period = `${year}-Q${quarter}`;
      if (!ratesMap.has(period)) {
        ratesMap.set(
          period,
          createEmptyPeriodData(
            `Q${quarter} ${year}`,
            period,
            year,
            undefined,
            quarter,
          ),
        );
      }
      currentDate.setMonth(currentDate.getMonth() + 3);
    }
  }

  return ratesMap;
};

const createEmptyPeriodData = (
  displayPeriod: string,
  rawPeriod: string,
  year: number,
  month?: number,
  quarter?: number,
) => ({
  period: displayPeriod,
  rawPeriod,
  year,
  ...(month ? { month } : {}),
  ...(quarter ? { quarter } : {}),
  contractorPlusRate: 0,
  blsRate: 0,
  averageRate: 0,
  count: 0,
  industryData: {},
  stateData: {},
});
