export interface ProcessedDataPoint {
  period: string;
  rawPeriod: string;
  timestamp: number;
  contractorPlusRate: number | null;
  blsRate: number | null;
  averageRate: number | null;
  industryData: Record<string, any>;
  stateData: Record<string, any>;
}

export interface PeriodData {
  period: string;
  rawPeriod: string;
  year: number;
  month?: number;
  quarter?: number;
  contractorPlusRate: number;
  blsRate: number;
  averageRate: number;
  count: number;
  industryData: Record<string, any>;
  stateData: Record<string, any>;
}
