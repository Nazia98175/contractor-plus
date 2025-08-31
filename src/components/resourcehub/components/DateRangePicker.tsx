import { useState, useEffect, useMemo } from "react";
import { Calendar as CalendarIcon } from "lucide-react";

import {
  format,
  subMonths,
  startOfMonth,
  endOfMonth,
  subYears,
  startOfYear,
  endOfYear,
  addMonths,
  addYears,
  getYear,
  getMonth,
} from "date-fns";
import { DateRange, DateRangePreset } from "@/types";
import DateRangePresets from "./DateRangePresets";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Button } from "./ui/button";
// Removed: import DateRangeCustom from './DateRangeCustom';

interface DateRangePickerProps {
  value?: DateRange;
  onChange: (value: DateRange) => void;
  className?: string;
}

const EARLIEST_TIME = new Date(2000, 0, 1);

const DateRangePicker = ({
  value,
  onChange,
  className,
}: DateRangePickerProps) => {
  const [popoverOpen, setPopoverOpen] = useState(false);
  const [selectedPreset, setSelectedPreset] = useState<string>("allTime");
  const [dateRange, setDateRange] = useState<DateRange | undefined>(value);

  useEffect(() => {
    if (!value?.from && !value?.to) {
      const today = new Date();
      onChange({
        from: EARLIEST_TIME,
        to: endOfMonth(today),
        preset: "All Time" as DateRangePreset,
      });
      setSelectedPreset("allTime");
    } else {
      setDateRange(value);
    }
  }, []);

  useEffect(() => {
    if (value) {
      setDateRange(value);
    }
  }, [value]);

  const presets = [
    {
      id: "allTime",
      name: "All Time" as DateRangePreset,
      makeRange: () => {
        const today = new Date();
        return {
          from: EARLIEST_TIME,
          to: endOfMonth(today),
          preset: "All Time" as DateRangePreset,
        };
      },
    },
    {
      id: "last3Months",
      name: "Last 3 Months" as DateRangePreset,
      makeRange: () => {
        const today = new Date();
        const end = endOfMonth(subMonths(today, 1));
        const start = startOfMonth(subMonths(end, 2));
        const threeMonthsAgo = subMonths(today, 3);
        return {
          from: startOfMonth(threeMonthsAgo),
          to: endOfMonth(today),
          preset: "Last 3 Months" as DateRangePreset,
        };
      },
    },
    {
      id: "last6Months",
      name: "Last 6 Months" as DateRangePreset,
      makeRange: () => {
        const today = new Date();
        const sixMonthsAgo = subMonths(today, 6);
        return {
          from: startOfMonth(sixMonthsAgo),
          to: endOfMonth(today),
          preset: "Last 6 Months" as DateRangePreset,
        };
      },
    },
    {
      id: "last12Months",
      name: "Last 12 Months" as DateRangePreset,
      makeRange: () => {
        const today = new Date();
        const twelveMonthsAgo = subMonths(today, 12);
        return {
          from: startOfMonth(twelveMonthsAgo),
          to: endOfMonth(today),
          preset: "Last 12 Months" as DateRangePreset,
        };
      },
    },
    {
      id: "thisYear",
      name: "This Year" as DateRangePreset,
      makeRange: () => {
        const today = new Date();
        return {
          from: startOfYear(today),
          to: endOfMonth(today),
          preset: "This Year" as DateRangePreset,
        };
      },
    },
    {
      id: "lastYear",
      name: "Last Year" as DateRangePreset,
      makeRange: () => {
        const today = new Date();
        const lastYear = subYears(today, 1);
        const startDate = startOfYear(lastYear);
        const endDate = endOfYear(lastYear);
        return {
          from: startDate,
          to: endDate,
          preset: "Last Year" as DateRangePreset,
        };
      },
    },
  ];

  const handleSelectPreset = (presetId: string) => {
    const preset = presets.find((p) => p.id === presetId);
    if (preset) {
      setSelectedPreset(presetId);
      const newRange = preset.makeRange();
      onChange(newRange);
      setDateRange(newRange);
      setPopoverOpen(false); // close after selection
    }
  };

  const handleOpenChange = (open: boolean) => {
    setPopoverOpen(open);
  };

  const getDisplayValue = () => {
    if (value?.preset && value.preset !== "Custom Range") {
      return value.preset;
    } else if (value?.from && value.to) {
      return `${format(value.from, "MMM yyyy")} - ${format(
        value.to,
        "MMM yyyy",
      )}`;
    } else if (value?.from) {
      return format(value.from, "MMM yyyy");
    }
    return "Select time period";
  };

  return (
    <Popover open={popoverOpen} onOpenChange={handleOpenChange}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className="w-full justify-start text-left text-sm font-normal"
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          <span>{getDisplayValue()}</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <div className="grid gap-4 p-4">
          <DateRangePresets
            presets={presets}
            selectedPreset={selectedPreset}
            onSelectPreset={handleSelectPreset}
          />
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default DateRangePicker;
