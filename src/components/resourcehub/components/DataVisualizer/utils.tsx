import { Industry, State } from "@/types";
import { renderTrendTooltip } from "./utils/trendTooltip";
import {
  renderIndustryTooltip,
  renderStateTooltip,
} from "./utils/chartTooltips";
import { getSourceColors, getSourceKey } from "./utils/common";
import { FilterState } from "@/types/resources";

// Function to render the tooltip for different chart types
export const renderTooltip = (
  props: any,
  chartType: string,
  filters: FilterState,
  industries: Industry[],
  states: State[],
) => {
  if (chartType === "trend") {
    return renderTrendTooltip(props, filters, industries, states);
  } else if (chartType === "industry") {
    return renderIndustryTooltip(props, filters, industries, states);
  } else if (chartType === "state") {
    return renderStateTooltip(props, filters, industries, states);
  }

  return null;
};

// Re-export utility functions for backward compatibility
export { getSourceColors, getSourceKey };
