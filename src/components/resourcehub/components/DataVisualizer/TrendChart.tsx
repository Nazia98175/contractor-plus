import { Industry, State } from "@/types";
import { useTrendChartData } from "./hooks/useTrendChartData";
import TrendChartDisplay from "./TrendChartDisplay";
import { FilterState, LaborRate } from "@/types/resources";

interface TrendChartProps {
  industries: Industry[];
  states: State[];
  laborRates: LaborRate[];
  filters: FilterState;
}

const TrendChart = ({
  industries,
  states,
  laborRates,
  filters,
}: TrendChartProps) => {
  const chartData = useTrendChartData(laborRates, filters, industries, states);

  return (
    <TrendChartDisplay
      chartData={chartData}
      filters={filters}
      industries={industries}
      states={states}
    />
  );
};

export default TrendChart;
