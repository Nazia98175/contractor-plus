import {
  format,
  isAfter,
  isBefore,
  addMonths,
  getMonth,
  getYear,
  startOfMonth,
  endOfMonth,
} from "date-fns";
import { UnitOfMeasurement } from "@/types";
import { formatPeriodLabel } from "./dataFormatters";
import { LaborRate } from "@/types/resources";

export function generateMonthlyRegionData({
  fromDate,
  toDate,
  relevantRates,
  industryName,
  regionName,
  uom,
}: {
  fromDate: Date;
  toDate: Date;
  relevantRates: LaborRate[];
  industryName: string;
  regionName: string;
  uom: UnitOfMeasurement;
}) {
  const data: any[] = [];

  // Create a map of unique year-quarter combinations from the API response
  const uniquePeriods = new Set<string>();
  const ratesByPeriod: Record<string, LaborRate[]> = {};

  relevantRates.forEach((rate) => {
    const periodKey = `${rate.year}-Q${rate.quarter}`;
    uniquePeriods.add(periodKey);

    if (!ratesByPeriod[periodKey]) {
      ratesByPeriod[periodKey] = [];
    }
    ratesByPeriod[periodKey].push(rate);
  });

  // Convert the date range to quarters to check if they exist in API response
  const fromYear = getYear(fromDate);
  const fromQuarter = Math.ceil((getMonth(fromDate) + 1) / 3);
  const toYear = getYear(toDate);
  const toQuarter = Math.ceil((getMonth(toDate) + 1) / 3);

  // Process each unique period from the API response that falls within our date range
  Array.from(uniquePeriods).forEach((periodKey) => {
    const [yearStr, quarterStr] = periodKey.split("-Q");
    const year = parseInt(yearStr);
    const quarter = parseInt(quarterStr);

    // Check if this period falls within our selected date range
    if (
      (year > fromYear || (year === fromYear && quarter >= fromQuarter)) &&
      (year < toYear || (year === toYear && quarter <= toQuarter))
    ) {
      const rates = ratesByPeriod[periodKey];

      // Calculate averages
      let totalContractorPlus = 0;
      let totalBls = 0;
      let totalAverage = 0;
      let validContractorCount = 0;
      let validBlsCount = 0;
      let validAverageCount = 0;

      rates.forEach((r) => {
        if (r.contractorPlusRate !== null) {
          totalContractorPlus += r.contractorPlusRate;
          validContractorCount++;
        }
        if (r.blsRate !== null) {
          totalBls += r.blsRate;
          validBlsCount++;
        }
        if (r.averageRate !== null) {
          totalAverage += r.averageRate;
          validAverageCount++;
        }
      });

      // Create one entry per month in the quarter
      const quarterStartMonth = (quarter - 1) * 3;
      for (
        let month = quarterStartMonth;
        month < quarterStartMonth + 3;
        month++
      ) {
        const monthDate = new Date(year, month, 1);

        // Only include months that fall within our selected date range
        if (!isBefore(monthDate, fromDate) && !isAfter(monthDate, toDate)) {
          data.push({
            industryName,
            stateName: "Region",
            regionName,
            stateAbbr: "",
            uom: rates[0]?.uom || uom,
            contractorPlusRate:
              validContractorCount > 0
                ? totalContractorPlus / validContractorCount
                : null,
            blsRate: validBlsCount > 0 ? totalBls / validBlsCount : null,
            averageRate:
              validAverageCount > 0 ? totalAverage / validAverageCount : null,
            period: formatPeriodLabel(monthDate, "monthly"),
            timestamp: monthDate.getTime(),
          });
        }
      }
    }
  });

  // Sort by timestamp to ensure chronological order
  data.sort((a, b) => a.timestamp - b.timestamp);

  return data;
}

export function generateMonthlyStateData({
  fromDate,
  toDate,
  relevantRates,
  industryName,
  stateName,
  stateAbbr,
  uom,
}: {
  fromDate: Date;
  toDate: Date;
  relevantRates: LaborRate[];
  industryName: string;
  stateName: string;
  stateAbbr: string;
  uom: UnitOfMeasurement;
}) {
  console.log(industryName, "idustryName");
  const data: any[] = [];

  // Generate data for each month in the range
  let currentDate = new Date(fromDate);

  while (!isAfter(currentDate, toDate)) {
    // Find all rates applicable to this month's quarter
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth();
    const currentQuarter = Math.floor(currentMonth / 3) + 1;
    console.log(relevantRates, "relevantRates for month");
    const applicableRates = relevantRates.filter(
      (r) => r.year === currentYear && r.quarter === currentQuarter,
    );
    console.log(applicableRates, "applicableRates");
    // Create data entry for this month
    if (applicableRates.length > 0) {
      // const r = applicableRates[0]; // Use the first applicable rate for this month
      const r = applicableRates.sort((a, b) => {
        const dA = new Date(a.year, (a.quarter - 1) * 3, 1).getTime();
        const dB = new Date(b.year, (b.quarter - 1) * 3, 1).getTime();
        return dB - dA;
      })[0];
      data.push({
        industryName,
        stateName,
        stateAbbr,
        uom: r.uom,
        contractorPlusRate: r.contractorPlusRate,
        blsRate: r.blsRate,
        averageRate: r.averageRate,
        period: formatPeriodLabel(currentDate, "monthly"),
        timestamp: currentDate.getTime(),
      });
    } else {
      // No applicable rate found, create entry with null values
      data.push({
        industryName,
        stateName,
        stateAbbr,
        uom,
        contractorPlusRate: null,
        blsRate: null,
        averageRate: null,
        period: formatPeriodLabel(currentDate, "monthly"),
        timestamp: currentDate.getTime(),
      });
    }

    // Move to the next month
    currentDate = addMonths(currentDate, 1);
  }

  return data;
}
