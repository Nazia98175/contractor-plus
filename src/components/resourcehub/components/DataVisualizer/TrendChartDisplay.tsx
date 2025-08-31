import React from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Industry, State, FilterState } from "@/types";
import { renderTooltip } from "./utils";

interface TrendChartDisplayProps {
  chartData: any[];
  filters: FilterState;
  industries: Industry[];
  states: State[];
}

const TrendChartDisplay = ({
  chartData,
  filters,
  industries,
  states,
}: TrendChartDisplayProps) => {
  if (chartData.length === 0) {
    return (
      <div className="h-[400px] w-full flex items-center justify-center text-muted-foreground">
        No data available for the selected filters.
      </div>
    );
  }

  // Calculate the interval based on data length and period
  const getInterval = () => {
    if (filters.period === "Quarterly") {
      return 0; // Show all ticks for quarterly data
    }

    // For monthly data, calculate based on data length
    const dataLength = chartData.length;
    if (dataLength <= 12) {
      return 0; // Show all ticks if 12 or fewer points
    }
    return Math.ceil(dataLength / 12); // Show approximately 12 ticks
  };

  return (
    <div className="h-[400px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={chartData}
          margin={{ top: 10, right: 30, left: 0, bottom: 10 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
          <XAxis
            dataKey="period"
            tickMargin={10}
            tick={{ fontSize: 12 }}
            interval={getInterval()}
            height={50}
            angle={-45}
            textAnchor="end"
          />
          <YAxis
            tickFormatter={(value) => `$${value}`}
            tick={{ fontSize: 12 }}
          />
          <Tooltip
            content={(props) =>
              renderTooltip(props, "trend", filters, industries, states)
            }
            cursor={{ stroke: "#666", strokeWidth: 1 }}
            isAnimationActive={false}
          />
          {filters.dataSources.includes("Contractor+") && (
            <Line
              type="monotone"
              dataKey="contractorPlusRate"
              name="Contractor+"
              stroke="#3b82f6"
              strokeWidth={2}
              dot={{ r: 4, strokeWidth: 2 }}
              activeDot={{ r: 6, strokeWidth: 2 }}
            />
          )}
          {filters.dataSources.includes("BLS.gov") && (
            <Line
              type="monotone"
              dataKey="blsRate"
              name="BLS.gov"
              stroke="#f59e0b"
              strokeWidth={2}
              dot={{ r: 4, strokeWidth: 2 }}
              activeDot={{ r: 6, strokeWidth: 2 }}
            />
          )}
          {filters.dataSources.includes("Average") && (
            <Line
              type="monotone"
              dataKey="averageRate"
              name="Average"
              stroke="#10b981"
              strokeWidth={2}
              dot={{ r: 4, strokeWidth: 2 }}
              activeDot={{ r: 6, strokeWidth: 2 }}
            />
          )}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TrendChartDisplay;
