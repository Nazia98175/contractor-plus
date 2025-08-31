import { industries, states } from "@/data/mockData";
import { UnitOfMeasurement, LaborRate, ZipCodeLaborRate } from "@/types";

type RawForecastAPIResponse = {
  forcast?: { year: number; value: number }[];
  summary?: string;
};

type TransformedForecastEntry = {
  date: string;
  rate: number;
  predicted: boolean;
  year: number;
};

type TransformedForecast = {
  forcast: TransformedForecastEntry[];
  summary: string;
};

export function transformForecastData(
  apiData: RawForecastAPIResponse,
): TransformedForecast {
  const currentDate = new Date().toISOString();

  const forcast = Array.isArray(apiData.forcast)
    ? apiData.forcast.map((entry) => ({
        date: currentDate,
        predicted: false,
        rate: entry.value,
        year: entry.year,
      }))
    : [];

  return {
    forcast,
    summary: apiData.summary || "",
  };
}

function getIndustryId(name: string): number {
  const industry = industries.find((ind) => ind.name === name);
  return industry?.id ?? 0;
}

// Helper function to get stateId from state name
function getStateId(stateName: string): string {
  const state = states.find((s) => s.name === stateName);
  return state?.abbreviation ?? stateName;
}

export function transformData(
  cpappData: Record<string, number> | undefined,
  blsData: Record<string, number> | undefined,
  industryName: string,
  uom: UnitOfMeasurement,
  allStates: { id: number; name: string }[],
): LaborRate[] {
  try {
    const result: LaborRate[] = [];

    const cpStates = cpappData ? Object.keys(cpappData) : [];
    const blsStates = blsData ? Object.keys(blsData) : [];
    const allStateNames = new Set([...cpStates, ...blsStates]);

    for (const stateName of allStateNames) {
      const matchedState = allStates.find((s) => s.name === stateName);
      const stateId = matchedState?.id || 0;

      const cpappRaw = cpappData?.[stateName];
      const blsRaw = blsData?.[stateName];

      // --- Case 1: Monthly Format ---
      if (Array.isArray(cpappRaw) || Array.isArray(blsRaw)) {
        const cpappArray = Array.isArray(cpappRaw) ? cpappRaw : [];
        const blsArray = Array.isArray(blsRaw) ? blsRaw : [];

        const blsMap: Record<string, number> = {};
        for (const bls of blsArray) {
          if (bls?.month) {
            blsMap[bls.month] = bls.state_avg ?? 0;
          }
        }

        const allMonths = new Set([
          ...cpappArray.map((cp) => cp.month),
          ...blsArray.map((bls) => bls.month),
        ]);

        for (const month of allMonths) {
          const cp = cpappArray.find((x) => x.month === month);
          const contractorPlusRate = cp?.cost_avg ?? 0;
          const blsRate = blsMap[month] ?? 0;

          const [yearStr, monthStr] = month.split("-");
          const year = parseInt(yearStr, 10);
          const monthNum = parseInt(monthStr, 10);
          const quarter = Math.floor((monthNum - 1) / 3) + 1;

          result.push({
            industryId: getIndustryId(industryName),
            stateId,
            uom,
            contractorPlusRate,
            blsRate,
            averageRate: (contractorPlusRate + blsRate) / 2,
            year,
            quarter,
          });
        }
      }

      // --- Case 2: Quarterly Format ---
      else if (
        (typeof cpappRaw === "object" && cpappRaw !== null) ||
        (typeof blsRaw === "object" && blsRaw !== null)
      ) {
        const cpappMap =
          typeof cpappRaw === "object" && cpappRaw !== null ? cpappRaw : {};
        const blsMap =
          typeof blsRaw === "object" && blsRaw !== null ? blsRaw : {};

        const allQuarters = new Set([
          ...Object.keys(cpappMap),
          ...Object.keys(blsMap),
        ]);

        for (const quarterStr of allQuarters) {
          const contractorPlusRate = Number(cpappMap[quarterStr] ?? 0);
          const blsRate = blsMap[quarterStr] ?? 0;

          const [yearStr, qStr] = quarterStr.split("-Q");
          const year = parseInt(yearStr, 10);
          const quarter = parseInt(qStr, 10);

          result.push({
            industryId: getIndustryId(industryName),
            stateId,
            uom,
            contractorPlusRate,
            blsRate,
            averageRate: (contractorPlusRate + blsRate) / 2,
            year,
            quarter,
          });
        }
      }
    }

    return result;
  } catch (error) {
    console.error("Error transforming data:", error);
    return [];
  }
}

export function transformZipCodeData(
  zipResponse: {
    cpapp_data?: Record<string, number>;
    bls_data?: Record<string, number>;
  },
  industryName: string,
  uom: UnitOfMeasurement,
  zipCodeId: number,
): ZipCodeLaborRate[] {
  const result: ZipCodeLaborRate[] = [];

  const cpappData = zipResponse.cpapp_data || {};
  const blsData = zipResponse.bls_data || {};

  // Get all unique keys (months or quarters)
  const allKeys = new Set([...Object.keys(cpappData), ...Object.keys(blsData)]);

  for (const key of allKeys) {
    const contractorPlusRate = cpappData[key] ?? 0;
    const blsRate = blsData[key] ?? 0;

    let year = 0;
    let quarter = 0;

    if (key.includes("-Q")) {
      // Quarterly format
      const [yearStr, qStr] = key.split("-Q");
      year = parseInt(yearStr, 10);
      quarter = parseInt(qStr, 10);
    } else {
      // Monthly format
      const [yearStr, monthStr] = key.split("-");
      year = parseInt(yearStr, 10);
      const month = parseInt(monthStr, 10); // 1-12
      quarter = Math.floor((month - 1) / 3) + 1;
    }

    result.push({
      industryId: getIndustryId(industryName),
      uom,
      contractorPlusRate,
      blsRate,
      averageRate: (contractorPlusRate + blsRate) / 2,
      year,
      quarter,
      zipCode: zipCodeId.toString(),
      distance: 0,
    });
  }

  return result;
}

export function getTimeAgo(dateString: string): string {
  const date = new Date(dateString);
  const now = new Date();
  const diffInSeconds = Math.floor((date.getTime() - now.getTime()) / 1000);
  const rtf = new Intl.RelativeTimeFormat("en", { numeric: "auto" });
  const divisions: { amount: number; name: Intl.RelativeTimeFormatUnit }[] = [
    { amount: 60, name: "second" },
    { amount: 60, name: "minute" },
    { amount: 24, name: "hour" },
    { amount: 7, name: "day" },
    { amount: 4.34524, name: "week" },
    { amount: 12, name: "month" },
    { amount: Number.POSITIVE_INFINITY, name: "year" },
  ];
  let duration = diffInSeconds;
  for (const division of divisions) {
    if (Math.abs(duration) < division.amount) {
      return rtf.format(Math.round(duration), division.name);
    }
    duration /= division.amount;
  }
  return "just now";
}
