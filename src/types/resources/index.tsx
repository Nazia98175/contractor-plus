export interface Industry {
  id: number;
  name: string;
  description?: string;
}

export interface State {
  id: number;
  name: string;
  abbreviation: string;
  region: string;
}

export type UnitOfMeasurement = "Hour" | "Square Foot" | "Linear Foot" | "Unit";
export type DataSource = "Contractor+" | "BLS.gov" | "Average";
export type Period = "Monthly" | "Quarterly";
export type DateRangePreset =
  | "Last 3 Months"
  | "Last 6 Months"
  | "Last 12 Months"
  | "This Year"
  | "Last Year"
  | "Custom Range";

export interface DateRange {
  from: Date | undefined;
  to: Date | undefined;
  preset?: DateRangePreset;
}

export interface LaborRate {
  industryId: number;
  stateId: number;
  uom: UnitOfMeasurement;
  contractorPlusRate: number | null;
  blsRate: number | null;
  averageRate: number | null;
  year: number;
  quarter: number;
}

export interface FilterState {
  industries: number[];
  // industry: string;
  states: string[];
  uom: UnitOfMeasurement;
  dataSources: DataSource[];
  period: Period;
  dateRange?: DateRange;
  locationMode?: "region" | "zipcode";
  zipCode?: string;
}

export interface ZipCodeLaborRate extends Omit<LaborRate, "stateId"> {
  zipCode: string;
  distance: number;
}

export interface ForecastDataPoint {
  date: string;
  contractorPlusRate: number;
  blsRate: number;
  averageRate: number;
  year?: number;
}

// Re-export material types for backward compatibility
// export * from './materials';
