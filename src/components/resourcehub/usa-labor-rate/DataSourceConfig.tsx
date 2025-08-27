import React from "react";
import { LineChart, BarChart4, BarChartHorizontalIcon } from "lucide-react";

// Stronger type for available data source keys
export type DataSourceKey = "Contractor+" | "BLS.gov" | "Average";

export interface DataSourceConfig {
  key: DataSourceKey;
  label: string;
  icon: React.ReactNode;
  color: "blue" | "amber" | "green";
}

export const DATA_SOURCE_CONFIGS: DataSourceConfig[] = [
  {
    key: "Contractor+",
    label: "Contractor+",
    icon: <LineChart className="h-4 w-4 mr-2" />,
    color: "blue",
  },
  {
    key: "BLS.gov",
    label: "BLS.gov",
    icon: <BarChart4 className="h-4 w-4 mr-2" />,
    color: "amber",
  },
  {
    key: "Average",
    label: "Average",
    icon: <BarChartHorizontalIcon className="h-4 w-4 mr-2" />,
    color: "green",
  },
];

// All data sources as an array, exported for reuse
export const ALL_DATA_SOURCES: DataSourceKey[] = DATA_SOURCE_CONFIGS.map(
  (cfg) => cfg.key
);
