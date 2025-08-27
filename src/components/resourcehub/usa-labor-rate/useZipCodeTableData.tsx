import { useState, useEffect } from "react";
import { format, addMonths, isAfter } from "date-fns";
import { ZipCodeDataTableProps } from "@/types";

export const useZipCodeTableData = ({
  industries,
  laborRates,
  filters,
}: Pick<ZipCodeDataTableProps, "industries" | "laborRates" | "filters">) => {
  const [tableData, setTableData] = useState<any[]>([]);

  useEffect(() => {
    if (!laborRates || laborRates.length === 0) {
      setTableData([]);
      return;
    }

    const filteredIndustries = industries.filter(
      (i) =>
        filters.industries.length === 0 || filters.industries.includes(i.id),
    );

    const data: any[] = [];

    filteredIndustries.forEach((industry) => {
      const relevantRates = laborRates.filter(
        (r) => r.industryId === industry.id && r.uom === filters.uom,
      );

      if (relevantRates.length === 0) {
        return; // No relevant rates, skip
      }

      if (filters.period === "Monthly") {
        // Build a Set of allowed months from year + quarter
        const allowedMonths = new Set<string>();
        relevantRates.forEach((r) => {
          for (let m = 0; m < 3; m++) {
            const monthNum = (r.quarter - 1) * 3 + m;
            const monthDate = new Date(r.year, monthNum, 1);
            allowedMonths.add(format(monthDate, "yyyy-MM")); // for comparison
          }
        });

        if (filters.dateRange?.from && filters.dateRange?.to) {
          let currentDate = new Date(filters.dateRange.from);

          while (!isAfter(currentDate, filters.dateRange.to)) {
            const key = format(currentDate, "yyyy-MM");

            if (allowedMonths.has(key)) {
              const currentYear = currentDate.getFullYear();
              const currentMonth = currentDate.getMonth();
              const currentQuarter = Math.floor(currentMonth / 3) + 1;

              const rateForQuarter = relevantRates.find(
                (r) => r.year === currentYear && r.quarter === currentQuarter,
              );

              data.push({
                industryName: industry.name,
                uom: filters.uom,
                contractorPlusRate:
                  rateForQuarter && filters.dataSources.includes("Contractor+")
                    ? rateForQuarter.contractorPlusRate
                    : null,
                blsRate:
                  rateForQuarter && filters.dataSources.includes("BLS.gov")
                    ? rateForQuarter.blsRate
                    : null,
                averageRate:
                  rateForQuarter && filters.dataSources.includes("Average")
                    ? rateForQuarter.averageRate
                    : null,
                period: format(currentDate, "MMM yyyy"),
                timestamp: currentDate.getTime(),
              });
            }

            currentDate = addMonths(currentDate, 1);
          }
        } else {
          // No dateRange filter — use all available months
          relevantRates.forEach((r) => {
            for (let m = 0; m < 3; m++) {
              const monthNum = (r.quarter - 1) * 3 + m;
              const monthDate = new Date(r.year, monthNum, 1);

              data.push({
                industryName: industry.name,
                uom: r.uom,
                contractorPlusRate: filters.dataSources.includes("Contractor+")
                  ? r.contractorPlusRate
                  : null,
                blsRate: filters.dataSources.includes("BLS.gov")
                  ? r.blsRate
                  : null,
                averageRate: filters.dataSources.includes("Average")
                  ? r.averageRate
                  : null,
                period: format(monthDate, "MMM yyyy"),
                timestamp: monthDate.getTime(),
              });
            }
          });
        }
      } else {
        // Quarterly case (unchanged)
        relevantRates.forEach((r) => {
          const firstMonthOfQuarter = (r.quarter - 1) * 3;
          const quarterDate = new Date(r.year, firstMonthOfQuarter, 1);

          data.push({
            industryName: industry.name,
            uom: r.uom,
            contractorPlusRate: filters.dataSources.includes("Contractor+")
              ? r.contractorPlusRate
              : null,
            blsRate: filters.dataSources.includes("BLS.gov") ? r.blsRate : null,
            averageRate: filters.dataSources.includes("Average")
              ? r.averageRate
              : null,
            period: `Q${r.quarter} ${r.year}`,
            timestamp: quarterDate.getTime(),
          });
        });
      }
    });

    setTableData(data);
  }, [laborRates, filters, industries]);

  return tableData;
};
