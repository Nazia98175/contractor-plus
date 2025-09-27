import React, { useState, useCallback } from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  TooltipProps,
} from "recharts";
import { Industry, State } from "@/types";
import { renderTooltip } from "./utils";
import { FilterState } from "@/types/resources";

interface TrendChartDisplayProps {
  chartData: any[];
  filters: FilterState;
  industries: Industry[];
  states: State[];
}

const TrendChartDisplay: React.FC<TrendChartDisplayProps> = ({
  chartData,
  filters,
  industries,
  states,
}) => {
  const [mousePos, setMousePos] = useState<
    { x: number; y: number } | undefined
  >(undefined);

  const handleMouseMove = useCallback((e: any) => {
    if (e && e.activeCoordinate) {
      // activeCoordinate is an object with x and y properties, not an array
      setMousePos({
        x: e.activeCoordinate.x,
        y: e.activeCoordinate.y - 30, // Offset above cursor
      });
    }
  }, []);

  // Reset mouse position when mouse leaves the chart
  const handleMouseLeave = useCallback(() => {
    setMousePos(undefined);
  }, []);

  if (!chartData || chartData.length === 0) {
    return (
      <div className="text-aliceBlue flex h-[400px] w-full items-center justify-center">
        No data available for the selected filters.
      </div>
    );
  }

  const getInterval = () => {
    if (filters.period === "Quarterly") return 0;
    const dataLength = chartData.length;
    return dataLength <= 12 ? 0 : Math.ceil(dataLength / 12);
  };

  return (
    <div className="relative h-[400px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={chartData}
          margin={{ top: 10, right: 30, left: 0, bottom: 10 }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
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
            content={(props: TooltipProps<number, string>) =>
              renderTooltip(props, "trend", filters, industries, states)
            }
            cursor={{ stroke: "#666", strokeWidth: 1 }}
            isAnimationActive={false}
            position={mousePos}
            allowEscapeViewBox={{ x: true, y: true }}
            wrapperStyle={{
              pointerEvents: "none",
              zIndex: 1000,
            }}
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
