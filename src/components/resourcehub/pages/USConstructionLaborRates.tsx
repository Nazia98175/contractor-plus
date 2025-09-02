"use client";
import { ArrowLeft } from "lucide-react";
import { useEffect, useState } from "react";
import {
  getLaborRates,
  getZipCodeLaborRates,
  industries,
  states,
} from "@/data/mockData";

import { LaborRate, ZipCodeLaborRate } from "@/types";
import { transformData, transformZipCodeData } from "@/utils/dataTransformers";
import { format } from "date-fns";
import { ALL_DATA_SOURCES } from "../components/DataSourceConfig";
import { laborSearchApi } from "@/services/resource/laborService";
import Link from "next/link";
import FilterPanel from "../components/FilterPanel";
import { cn } from "@/app/lib/utils";
import DataVisualizer from "../components/DataVisualizer";
import { Badge } from "../components/ui/badge";
import DataTable from "../components/DataTable";
import ForecastChart from "../components/ForecastChart";

// Sample data for demonstration - you'll want to replace this with actual data from your other project
const SAMPLE_DATA = {
  residential: [
    { year: "2020", Q1: 28.5, Q2: 27.9, Q3: 28.2, Q4: 28.7 },
    { year: "2021", Q1: 29.2, Q2: 29.8, Q3: 30.5, Q4: 31.2 },
    { year: "2022", Q1: 32.0, Q2: 33.5, Q3: 34.1, Q4: 34.5 },
    { year: "2023", Q1: 35.2, Q2: 35.8, Q3: 36.3, Q4: 36.7 },
    { year: "2024", Q1: 37.5, Q2: null, Q3: null, Q4: null },
  ],
  commercial: [
    { year: "2020", Q1: 32.1, Q2: 31.8, Q3: 32.0, Q4: 32.4 },
    { year: "2021", Q1: 33.1, Q2: 33.8, Q3: 34.6, Q4: 35.5 },
    { year: "2022", Q1: 36.2, Q2: 37.9, Q3: 38.7, Q4: 39.2 },
    { year: "2023", Q1: 40.1, Q2: 40.8, Q3: 41.4, Q4: 42.0 },
    { year: "2024", Q1: 42.8, Q2: null, Q3: null, Q4: null },
  ],
  industrial: [
    { year: "2020", Q1: 34.6, Q2: 34.2, Q3: 34.5, Q4: 34.9 },
    { year: "2021", Q1: 35.8, Q2: 36.5, Q3: 37.4, Q4: 38.3 },
    { year: "2022", Q1: 39.1, Q2: 40.9, Q3: 41.8, Q4: 42.5 },
    { year: "2023", Q1: 43.4, Q2: 44.2, Q3: 44.9, Q4: 45.6 },
    { year: "2024", Q1: 46.5, Q2: null, Q3: null, Q4: null },
  ],
};

const REGIONS = [
  { value: "national", label: "National Average" },
  { value: "northeast", label: "Northeast" },
  { value: "midwest", label: "Midwest" },
  { value: "south", label: "South" },
  { value: "west", label: "West" },
];

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

export interface FilterState {
  industries: number[];
  states: string[];
  uom: UnitOfMeasurement;
  dataSources: DataSource[];
  period: Period;
  dateRange?: DateRange;
  locationMode?: "region" | "zipcode";
  zipCode?: string;
}

interface CostData {
  month: string;
  cost_avg: number;
}

interface StateLaborRow {
  stateName: string;
  period: string;
  industryName: string;
  cost_avg: number;
  // add other needed props here
}

// interface LaborRate {
//   industryId: number;
//   stateId: string;
//   uom: UnitOfMeasurement;
//   contractorPlusRate: number;
//   blsGovRate?: number;
//   averageRate?: number;
//   period: string;
// }

type TransformedForecastEntry = {
  date: string;
  contractorPlusRate: number;
  blsRate: number;
  averageRate: number;
  year: number;
};

const USConstructionLaborRates = () => {
  const [sector, setSector] = useState("residential");
  const [region, setRegion] = useState("national");
  const [chartData, setChartData] = useState(SAMPLE_DATA.residential);
  const [hasAppliedFilters, setHasAppliedFilters] = useState(false);
  const [searching, isSearching] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [zipLaborRates, setZipLaborRates] = useState<ZipCodeLaborRate[]>([]);
  const [stateLaborRates, setStateLaborRates] = useState<LaborRate[]>([]);
  const [forecastData, setForecastData] = useState<
    TransformedForecastEntry[] | undefined
  >(undefined);
  const [filters, setFilters] = useState<FilterState>({
    industries: [],
    states: [],
    uom: "Hour" as UnitOfMeasurement,
    dataSources: ALL_DATA_SOURCES as DataSource[],
    period: "Monthly" as Period,
    locationMode: "region",
    dateRange: undefined,
  });

  useEffect(() => {
    // In a real implementation, this would fetch data based on the selected sector and region
    // For now, we're just switching between our sample datasets
    setChartData(SAMPLE_DATA[sector as keyof typeof SAMPLE_DATA]);
  }, [sector, region]);

  useEffect(() => {
    if (!hasAppliedFilters) {
      return;
    }
    setIsLoading(true);

    // Get the appropriate data based on the location mode
    if (filters.locationMode === "zipcode" && filters.zipCode) {
      // Use default radius or any value needed by your API
      const zipData = getZipCodeLaborRates(filters.zipCode, 100); // Using fixed radius value
      // setZipLaborRates(zipData);
    } else {
      const stateData = getLaborRates();
      // setStateLaborRates(stateData);
    }

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 600);

    return () => clearTimeout(timer);
  }, [filters, hasAppliedFilters]);

  const viewType = filters.locationMode === "zipcode" ? "zipcode" : "state";

  const getDateRangeDisplay = () => {
    if (
      !filters.dateRange ||
      (!filters.dateRange.from && !filters.dateRange.to)
    ) {
      return "All Dates";
    }
    if (
      filters.dateRange.preset &&
      filters.dateRange.preset !== "Custom Range"
    ) {
      return filters.dateRange.preset;
    }
    if (filters.dateRange.from && filters.dateRange.to) {
      return `${format(filters.dateRange.from, "MMM yyyy")} - ${format(
        filters.dateRange.to,
        "MMM yyyy",
      )}`;
    }
    if (filters.dateRange.from) {
      return format(filters.dateRange.from, "MMM yyyy");
    }
    return "All Dates";
  };

  const handleFiltersChange = async (newFilters: FilterState) => {
    try {
      const actualSources = newFilters.dataSources.filter(
        (src) => src !== "Average",
      );
      let includeSources: string[] = [];

      if (
        actualSources.includes("Contractor+") &&
        actualSources.includes("BLS.gov")
      ) {
        includeSources = ["both"];
      } else {
        includeSources = actualSources;
      }
      console.log(includeSources, "includesources");
      const selectedIndustryId = newFilters.industries[0];
      const selectedIndustryObj = industries.find(
        (ind) => ind.id === selectedIndustryId,
      );

      if (!selectedIndustryObj) {
        console.error("Selected industry not found!");
        return;
      }

      const selectedStateObjs = states?.filter((s) =>
        newFilters.states.map(Number).includes(s.id),
      );
      const stateNames = selectedStateObjs.map((s) => s.name);

      const response = await laborSearchApi({
        industry: selectedIndustryObj.name,
        state: stateNames,
        uom: newFilters.uom,
        timePeriod: newFilters.dateRange?.preset,
        includeSources,
        format: newFilters.period,
        zipCode: newFilters.zipCode,
      });
      console.log(response, "values");
      if (newFilters.zipCode) {
        const transformedZipData = transformZipCodeData(
          response,
          selectedIndustryObj.name,
          newFilters.uom,
          parseInt(newFilters.zipCode),
        );
        setZipLaborRates(transformedZipData);
      } else {
        const transformedData = transformData(
          response?.cpapp_data,
          response?.bls_data,
          selectedIndustryObj.name,
          newFilters.uom,
          states,
        );

        setStateLaborRates(transformedData);
      }
    } catch (error) {
      console.error(error);
    }
    setFilters(newFilters);
    setHasAppliedFilters(true);
  };

  console.log(stateLaborRates, "stateLaborRates");

  return (
    <div className="container mx-auto max-w-6xl px-4 py-8 md:px-6">
      <div className="mb-6">
        <Link
          href="/resources"
          className="text-primary mb-4 flex items-center gap-1 hover:underline"
        >
          <ArrowLeft className="h-4 w-4" /> Back to Resource Hub
        </Link>

        <h1 className="mb-2 text-3xl font-bold md:text-4xl">
          US Construction Labor Rates
        </h1>
        <p className="text-aliceBlue text-lg">
          Track trends in construction labor costs across different sectors and
          regions in the United States.
        </p>
      </div>

      <div className="mb-6 grid grid-cols-1 gap-6 lg:grid-cols-4">
        <div className="lg:col-span-1">
          <FilterPanel
            industries={industries}
            states={states}
            filters={filters}
            onChange={handleFiltersChange}
            className="animate-slide-up max-h-[calc(100vh-120px)] overflow-y-auto rounded-lg lg:sticky lg:top-24"
          />

          {/* <FilterCTAs /> */}
        </div>

        <div className="space-y-6 lg:col-span-3">
          {!hasAppliedFilters ? (
            <div
              className={cn(
                "text-aliceBlue animate-slide-up bg-shutter border-stiletto flex min-h-[300px] w-full flex-col items-center justify-center rounded-lg border text-xl shadow",
              )}
            >
              <span className="mb-2 font-medium">Define your criteria</span>
              <span className="text-aliceBlue text-base">
                Select industry, location, and time period above and click{" "}
                <span className="bg-darkBlack inline-block rounded px-2 py-1 font-semibold">
                  Apply Filters
                </span>{" "}
                to see results.
              </span>
            </div>
          ) : (
            <>
              <div
                className={cn(
                  "ease-apple-ease transition-all duration-500",
                  isLoading ? "opacity-50" : "opacity-100",
                )}
              >
                <DataVisualizer
                  industries={industries}
                  states={states}
                  laborRates={
                    viewType === "zipcode"
                      ? (zipLaborRates as any)
                      : stateLaborRates
                  }
                  filters={filters}
                  className="animate-slide-up"
                />
              </div>

              <div
                className={cn(
                  "ease-apple-ease transition-all duration-500",
                  isLoading ? "opacity-50" : "opacity-100",
                )}
              >
                <div className="mb-3 flex items-center justify-between">
                  <h2 className="text-xl font-semibold tracking-tight">
                    Data Table
                  </h2>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="bg-white/50">
                      Format: {filters.period}
                    </Badge>
                    <Badge variant="outline" className="bg-white/50">
                      {getDateRangeDisplay()}
                    </Badge>
                    <Badge variant="outline" className="bg-white/50">
                      {filters.industries.length === 0
                        ? "All Industries"
                        : filters.industries.length === 1
                          ? "1 Industry"
                          : `${filters.industries.length} Industries`}
                    </Badge>
                    <Badge variant="outline" className="bg-white/50">
                      {filters.locationMode === "zipcode"
                        ? `Zip: ${filters.zipCode || "None"}`
                        : filters.states.length === 0
                          ? "All States"
                          : filters.states.length === 1
                            ? "1 State"
                            : `${filters.states.length} States`}
                    </Badge>
                  </div>
                </div>

                {viewType === "zipcode" ? (
                  <DataTable
                    industries={industries}
                    filters={filters}
                    viewType="zipcode"
                    laborRates={zipLaborRates}
                    searchedZipCode={filters.zipCode || ""}
                    className="animate-slide-up [animation-delay:300ms]"
                  />
                ) : (
                  <DataTable
                    industries={industries}
                    filters={filters}
                    viewType="state"
                    states={states}
                    laborRates={stateLaborRates}
                    className="animate-slide-up [animation-delay:300ms]"
                  />
                )}
              </div>

              <div
                className={cn(
                  "ease-apple-ease mt-8 transition-all duration-500",
                  isLoading ? "opacity-50" : "opacity-100",
                )}
              >
                <ForecastChart
                  forecastData={forecastData}
                  filters={filters}
                  industries={industries}
                  states={states}
                  className="animate-slide-up [animation-delay:400ms]"
                />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default USConstructionLaborRates;
