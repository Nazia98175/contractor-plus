import { LaborRate, FilterState } from "@/types";
import { PeriodData } from "./types";

export const filterRates = (
  laborRates: LaborRate[],
  filters: FilterState
): LaborRate[] => {
  return laborRates.filter((rate) => {
    const matchesIndustry =
      filters.industries.length === 0 ||
      filters.industries.includes(rate.industryId);
    const matchesState =
      filters.states.length === 0 ||
      filters.states.map(Number).includes(rate.stateId);
    const matchesUOM = rate.uom === filters.uom;
    return matchesIndustry && matchesState && matchesUOM;
  });
};

export const updatePeriodData = (
  entry: PeriodData,
  rate: LaborRate,
  industryBreakdown: Record<string, Record<string, Record<string, number>>>,
  stateBreakdown: Record<string, Record<string, Record<string, number>>>,
  periodKey: string
) => {
  console.log(rate, "rate in updatePeriodData");
  if (rate.contractorPlusRate !== null) {
    entry.contractorPlusRate += rate.contractorPlusRate;
    updateBreakdownData(
      industryBreakdown,
      stateBreakdown,
      periodKey,
      "contractorPlusRate",
      rate
    );
  }

  if (rate.blsRate !== null) {
    entry.blsRate += rate.blsRate;
    updateBreakdownData(
      industryBreakdown,
      stateBreakdown,
      periodKey,
      "blsRate",
      rate
    );
  }

  if (rate.averageRate !== null) {
    entry.averageRate += rate.averageRate;
    updateBreakdownData(
      industryBreakdown,
      stateBreakdown,
      periodKey,
      "averageRate",
      rate
    );
  }

  entry.count++;
};

const updateBreakdownData = (
  industryBreakdown: Record<string, Record<string, Record<string, number>>>,
  stateBreakdown: Record<string, Record<string, Record<string, number>>>,
  periodKey: string,
  rateType: string,
  rate: LaborRate
) => {
  // Initialize periodKey object if it doesn't exist
  if (!industryBreakdown[periodKey]) {
    industryBreakdown[periodKey] = {};
  }

  // Initialize rateType object if it doesn't exist
  if (!industryBreakdown[periodKey][rateType]) {
    industryBreakdown[periodKey][rateType] = {};
  }

  // Update industry breakdown
  const industryKey = rate.industryId.toString();
  if (!industryBreakdown[periodKey][rateType][industryKey]) {
    industryBreakdown[periodKey][rateType][industryKey] = 0;
  }
  industryBreakdown[periodKey][rateType][industryKey] +=
    rate[
      rateType as keyof Pick<
        LaborRate,
        "contractorPlusRate" | "blsRate" | "averageRate"
      >
    ] || 0;

  // Initialize periodKey object if it doesn't exist
  if (!stateBreakdown[periodKey]) {
    stateBreakdown[periodKey] = {};
  }

  // Initialize rateType object if it doesn't exist
  if (!stateBreakdown[periodKey][rateType]) {
    stateBreakdown[periodKey][rateType] = {};
  }

  // Update state breakdown
  const stateKey = rate?.stateId?.toString();
  if (!stateBreakdown[periodKey][rateType][stateKey]) {
    stateBreakdown[periodKey][rateType][stateKey] = 0;
  }
  stateBreakdown[periodKey][rateType][stateKey] +=
    rate[
      rateType as keyof Pick<
        LaborRate,
        "contractorPlusRate" | "blsRate" | "averageRate"
      >
    ] || 0;
};
