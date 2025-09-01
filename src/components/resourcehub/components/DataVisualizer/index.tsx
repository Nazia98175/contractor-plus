import { useState } from "react";
import { Industry, State, LaborRate, FilterState } from "@/types";
import TrendChart from "./TrendChart";

import { ChevronUp, ChevronDown } from "lucide-react";
import { cn } from "@/app/lib/utils";
import { Button } from "../ui/button";

interface DataVisualizerProps {
  industries: Industry[];
  states: State[];
  laborRates: LaborRate[];
  filters: FilterState;
  className?: string;
}

const DataVisualizer = ({
  industries,
  states,
  laborRates,
  filters,
  className,
}: DataVisualizerProps) => {
  const [isChartVisible, setIsChartVisible] = useState(true);

  const toggleChartVisibility = () => {
    setIsChartVisible(!isChartVisible);
  };

  // Sort labor rates to ensure most recent data appears first in charts
  const sortedLaborRates = [...laborRates].sort((a, b) => {
    if (a.year !== b.year) {
      return b.year - a.year; // Most recent year first
    }
    return b.quarter - a.quarter; // Most recent quarter first
  });

  return (
    <div className={cn("glass-panel p-5", className)}>
      <div className="mb-4 flex items-center justify-between">
        <Button
          variant="ghost"
          size="sm"
          onClick={toggleChartVisibility}
          className="text-aliceBlue hover:text-foreground flex items-center gap-1"
        >
          {isChartVisible ? (
            <>
              <ChevronUp className="h-4 w-4" />
              <span>Hide Chart</span>
            </>
          ) : (
            <>
              <ChevronDown className="h-4 w-4" />
              <span>Show Chart</span>
            </>
          )}
        </Button>
      </div>

      {isChartVisible && (
        <TrendChart
          laborRates={sortedLaborRates}
          filters={filters}
          industries={industries}
          states={states}
        />
      )}
    </div>
  );
};

export default DataVisualizer;
