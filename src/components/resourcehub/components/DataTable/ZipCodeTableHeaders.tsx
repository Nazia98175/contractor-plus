import React from "react";

import SortableTableHeader, { SortDirection } from "./SortableTableHeader";
import { DataSource } from "@/types";
import { TableHead, TableRow } from "../ui/table";

interface ZipCodeTableHeadersProps {
  dataSources: DataSource[];
  sortColumn: string;
  sortDirection: SortDirection;
  onSort: (column: string) => void;
}

const ZipCodeTableHeaders: React.FC<ZipCodeTableHeadersProps> = ({
  dataSources,
  sortColumn,
  sortDirection,
  onSort,
}) => {
  return (
    <TableRow>
      <TableHead>Industry</TableHead>
      {dataSources.includes("Contractor+") && (
        <SortableTableHeader
          column="contractorPlusRate"
          label="Contractor+ Rate"
          currentSortColumn={sortColumn}
          currentSortDirection={sortDirection}
          onSort={onSort}
          alignRight
        />
      )}
      {dataSources.includes("BLS.gov") && (
        <SortableTableHeader
          column="blsRate"
          label="BLS.gov Rate"
          currentSortColumn={sortColumn}
          currentSortDirection={sortDirection}
          onSort={onSort}
          alignRight
        />
      )}
      {dataSources.includes("Average") && (
        <SortableTableHeader
          column="averageRate"
          label="Average Rate"
          currentSortColumn={sortColumn}
          currentSortDirection={sortDirection}
          onSort={onSort}
          alignRight
        />
      )}
      <SortableTableHeader
        column="period"
        label="Period"
        currentSortColumn={sortColumn}
        currentSortDirection={sortDirection}
        onSort={onSort}
        alignRight
      />
    </TableRow>
  );
};

export default ZipCodeTableHeaders;
