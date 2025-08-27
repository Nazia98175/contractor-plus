/**
 * Generates forecast data for labor rates over the next 5 years
 */
export const generateForecastData = (industryName?: string) => {
  const currentYear = new Date().getFullYear();
  const baseRate = getBaseRateForIndustry(industryName);
  const data = [];

  // Generate historical data (past 2 years)
  for (let i = 2; i > 0; i--) {
    const year = currentYear - i;
    data.push({
      year: year.toString(),
      rate: baseRate - 2.5 * i - Math.random() * 1.2,
      predicted: false,
    });
  }

  // Current year
  data.push({
    year: currentYear.toString(),
    rate: baseRate,
    predicted: false,
  });

  // Generate future predictions (next 5 years)
  for (let i = 1; i <= 5; i++) {
    const year = currentYear + i;
    const growthTrend = getGrowthTrend(i, industryName);
    data.push({
      year: year.toString(),
      rate: baseRate + growthTrend * i + Math.random() * 0.7,
      predicted: true,
    });
  }

  return data;
};

/**
 * Returns a base rate depending on the industry
 */
const getBaseRateForIndustry = (industryName?: string): number => {
  // Default base rate
  let baseRate = 36.5;

  if (industryName) {
    const normalizedName = industryName.toLowerCase();

    // Adjust base rate based on industry
    if (normalizedName.includes("electrical")) {
      baseRate = 42.75;
    } else if (normalizedName.includes("plumbing")) {
      baseRate = 38.25;
    } else if (normalizedName.includes("hvac")) {
      baseRate = 40.5;
    } else if (normalizedName.includes("carpentry")) {
      baseRate = 34.25;
    } else if (
      normalizedName.includes("steel") ||
      normalizedName.includes("metal")
    ) {
      baseRate = 41.5;
    } else if (normalizedName.includes("concrete")) {
      baseRate = 32.75;
    } else if (normalizedName.includes("roof")) {
      baseRate = 30.5;
    }
  }

  // Add slight randomization
  return baseRate + (Math.random() * 2 - 1);
};

/**
 * Calculates a growth trend value based on year and industry
 */
const getGrowthTrend = (yearOffset: number, industryName?: string): number => {
  // Default growth per year
  let annualGrowth = 1.8;

  if (industryName) {
    const normalizedName = industryName.toLowerCase();

    // Adjust growth rate based on industry
    if (
      normalizedName.includes("electrical") ||
      normalizedName.includes("technology")
    ) {
      annualGrowth = 2.3;
    } else if (
      normalizedName.includes("hvac") ||
      normalizedName.includes("mechanical")
    ) {
      annualGrowth = 2.1;
    } else if (normalizedName.includes("plumbing")) {
      annualGrowth = 1.9;
    } else if (
      normalizedName.includes("concrete") ||
      normalizedName.includes("masonry")
    ) {
      annualGrowth = 1.6;
    }
  }

  // Add some variability based on year
  // More uncertainty in later years
  const variabilityFactor = 1 + yearOffset * 0.1;
  const variability = (Math.random() * 0.8 - 0.4) * variabilityFactor;

  return annualGrowth + variability;
};
