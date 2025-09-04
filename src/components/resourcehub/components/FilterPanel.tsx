import { useToast } from "@/hooks/use-toast";
import { Industry, Period, State, UnitOfMeasurement } from "@/types";
import { RefreshCw } from "lucide-react";
import { useCallback, useState } from "react";
import { ALL_DATA_SOURCES } from "./DataSourceConfig";
import DataSourceToggle from "./DataSourceToggle";
import DateRangePicker from "./DateRangePicker";
import IndustrySelector from "./IndustrySelector";
import LocationFilter from "./LocationFilter";
import PeriodSelector from "./PeriodSelector";
import UOMSelector from "./UOMSelector";
import { cn } from "@/app/lib/utils";
import { Button } from "./ui/button";
import { DateRange, FilterState } from "@/types/resources";

interface FilterPanelProps {
  industries: Industry[];
  states: State[];
  filters: FilterState;
  onChange: (filters: FilterState) => void;
  className?: string;
}

const FilterPanel = ({
  industries = [],
  states = [],
  filters = {
    industries: [],
    states: [],
    uom: "Hour" as UnitOfMeasurement,
    dataSources: ALL_DATA_SOURCES,
    period: "Monthly" as Period,
    locationMode: "region",
  },
  onChange,
  className,
}: FilterPanelProps) => {
  const [tempFilters, setTempFilters] = useState<FilterState>(filters);
  const { toast } = useToast();
  const [hasChanges, setHasChanges] = useState(false);
  const [locationMode, setLocationMode] = useState<"region" | "zipcode">(
    filters.locationMode || "region",
  );
  const [zipCode, setZipCode] = useState(filters.zipCode || "");

  const handleChange = (key: keyof FilterState, value: any) => {
    setTempFilters((prev) => {
      const newFilters = {
        ...prev,
        [key]: value,
      };
      const isDifferent =
        JSON.stringify(newFilters) !== JSON.stringify(filters);
      setHasChanges(isDifferent);
      return newFilters;
    });
  };

  const handlePeriodChange = (period: Period) => {
    setTempFilters((prev) => {
      const newFilters = {
        ...prev,
        period,
      };
      const isDifferent =
        JSON.stringify(newFilters) !== JSON.stringify(filters);
      setHasChanges(isDifferent);
      return newFilters;
    });
  };

  const handleDateRangeChange = (dateRange: DateRange) => {
    setTempFilters((prev) => {
      const newFilters = {
        ...prev,
        dateRange,
      };
      const isDifferent =
        JSON.stringify(newFilters) !== JSON.stringify(filters);
      setHasChanges(isDifferent);
      return newFilters;
    });
  };

  const handleLocationModeChange = (mode: "region" | "zipcode") => {
    setLocationMode(mode);
    setHasChanges(true);
  };

  const handleZipCodeChange = (zipCode: string) => {
    setZipCode(zipCode);
    setHasChanges(true);
  };

  const handleApplyFilters = useCallback(() => {
    // if (tempFilters.industry === "") {
    //   toast({
    //     title: "Industry Required",
    //     description: "Please select an industry before applying filters.",
    //     variant: "destructive",
    //   });
    //   return;
    // }
    if (tempFilters.industries.length === 0) {
      toast({
        title: "Industry Required",
        description: "Please select an industry before applying filters.",
        variant: "destructive",
      });
      return;
    }
    const finalFilters = {
      ...tempFilters,
      locationMode,
      zipCode,
    };

    onChange(finalFilters);
    setHasChanges(false);
    toast({
      title: "Filters Applied",
      description: "The data has been updated with your filter selections.",
    });
  }, [tempFilters, locationMode, zipCode, onChange, toast]);

  const safeFilters = {
    // industry: tempFilters?.industry || "",
    industries: tempFilters?.industries || [],
    states: tempFilters?.states || [],
    uom: tempFilters?.uom || "Hour",
    dataSources: tempFilters?.dataSources || ALL_DATA_SOURCES,
    period: tempFilters?.period || "Monthly",
    dateRange: tempFilters?.dateRange,
  };

  // const isApplyDisabled = !hasChanges || tempFilters.industry === "";
  const isApplyDisabled = !hasChanges || tempFilters.industries.length === 0;

  return (
    <div
      className={cn(
        "border-stiletto border p-4 shadow-sm transition-all duration-300",
        className,
      )}
    >
      <div className="flex flex-col space-y-5">
        <div className="space-y-4">
          <div className="space-y-2">
            <label className="text-destructive text-sm font-medium">
              Industry (Required)
            </label>
            <IndustrySelector
              industries={industries || []}
              // selectedIndustries={safeFilters.industries}
              // onChange={(value) => handleChange("industry", value)}
              selectedIndustries={safeFilters.industries}
              onChange={(value) => handleChange("industries", value)}
            />
          </div>

          <LocationFilter
            states={states}
            selectedStates={safeFilters.states.map(Number)}
            onStateChange={(value) => handleChange("states", value)}
            onModeChange={handleLocationModeChange}
            onZipCodeChange={handleZipCodeChange}
            currentLocationMode={locationMode}
            currentZipCode={zipCode}
          />

          <div className="space-y-2">
            <label className="text-sm font-medium">Unit of Measurement</label>
            <UOMSelector
              value={safeFilters.uom}
              onChange={(value) => handleChange("uom", value)}
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Format</label>
            <PeriodSelector
              value={safeFilters.period}
              onChange={handlePeriodChange}
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Time Period</label>
            <DateRangePicker
              value={safeFilters.dateRange}
              onChange={handleDateRangeChange}
            />
          </div>
        </div>

        <div className="pt-2">
          <DataSourceToggle
            value={safeFilters.dataSources}
            onChange={(value) => handleChange("dataSources", value)}
          />
        </div>

        <Button
          onClick={handleApplyFilters}
          className="w-full"
          disabled={isApplyDisabled}
        >
          <RefreshCw className="mr-2 h-4 w-4" />
          Apply Filters
        </Button>
      </div>
    </div>
  );
};

export default FilterPanel;
