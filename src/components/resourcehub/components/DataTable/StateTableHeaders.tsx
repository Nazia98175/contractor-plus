import { DataSource } from "@/types/resources";
import SortableTableHeader, { SortDirection } from "./SortableTableHeader";

interface StateTableHeadersProps {
  showRegion: boolean;
  sortColumn: string;
  sortDirection: SortDirection;
  handleSort: (column: string) => void;
  dataSources: DataSource[];
}

const StateTableHeaders = ({
  showRegion,
  sortColumn,
  sortDirection,
  handleSort,
  dataSources,
}: StateTableHeadersProps) => (
  <>
    <tr>
      <th className="text-aliceBlue h-12 px-4 text-left align-middle font-medium">
        Industry
      </th>
      <th className="text-aliceBlue h-12 px-4 text-left align-middle font-medium">
        {showRegion ? "Region" : "State"}
      </th>
      {dataSources.includes("Contractor+") && (
        <SortableTableHeader
          column="contractorPlusRate"
          label="Contractor+ Rate"
          currentSortColumn={sortColumn}
          currentSortDirection={sortDirection}
          onSort={handleSort}
          alignRight
        />
      )}
      {dataSources.includes("BLS.gov") && (
        <SortableTableHeader
          column="blsRate"
          label="BLS.gov Rate"
          currentSortColumn={sortColumn}
          currentSortDirection={sortDirection}
          onSort={handleSort}
          alignRight
        />
      )}
      {dataSources.includes("Average") && (
        <SortableTableHeader
          column="averageRate"
          label="Average Rate"
          currentSortColumn={sortColumn}
          currentSortDirection={sortDirection}
          onSort={handleSort}
          alignRight
        />
      )}
      <SortableTableHeader
        column="markup"
        label="Avg. Markup"
        currentSortColumn={sortColumn}
        currentSortDirection={sortDirection}
        onSort={handleSort}
        alignRight
      />
      <SortableTableHeader
        column="period"
        label="Period"
        currentSortColumn={sortColumn}
        currentSortDirection={sortDirection}
        onSort={handleSort}
        alignRight
      />
    </tr>
  </>
);

export default StateTableHeaders;
