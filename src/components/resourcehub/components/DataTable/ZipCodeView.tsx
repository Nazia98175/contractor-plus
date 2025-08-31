import React from "react";

import { ZipCodeDataTableProps } from "./types";
import { useZipCodeTableData } from "./useZipCodeTableData";
import { useZipCodeTableSort } from "./useZipCodeTableSort";
import ZipCodeTableHeaders from "./ZipCodeTableHeaders";
import ZipCodeTableRow from "./ZipCodeTableRow";
import { isAfter } from "date-fns";
import { cn } from "@/app/lib/utils";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../ui/table";

const ZipCodeView = ({
  industries,
  laborRates,
  filters,
  searchedZipCode,
  className,
}: ZipCodeDataTableProps) => {
  const tableData = useZipCodeTableData({ industries, laborRates, filters });

  const { sortColumn, sortDirection, handleSort, deduplicateAndSortData } =
    useZipCodeTableSort(tableData);

  const sortedData = deduplicateAndSortData(tableData);

  return (
    <div className={cn("glass-panel overflow-hidden rounded-lg", className)}>
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <ZipCodeTableHeaders
              dataSources={filters.dataSources}
              sortColumn={sortColumn}
              sortDirection={sortDirection}
              onSort={handleSort}
            />
          </TableHeader>
          <TableBody>
            {sortedData.length > 0 ? (
              sortedData.map((row, index) => (
                <ZipCodeTableRow
                  key={index}
                  row={row}
                  dataSources={filters.dataSources}
                />
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={6} className="h-24 text-center">
                  {searchedZipCode
                    ? `No results found for zip code ${searchedZipCode}. Try a different zip code or increase the radius.`
                    : `Enter a zip code and click Apply Filters to see data.`}
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default ZipCodeView;
