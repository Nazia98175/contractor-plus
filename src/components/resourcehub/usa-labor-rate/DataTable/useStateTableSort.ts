// import { useState, useCallback } from "react";
// import {
//   processStateTableData,
//   StateTableDataRow,
// } from "./processStateTableData";
// import { StateDataTableProps } from "./types";
// import { SortDirection } from "./SortableTableHeader";

// export function useStateTableSort(
//   industries: StateDataTableProps["industries"],
//   states: StateDataTableProps["states"],
//   laborRates: StateDataTableProps["laborRates"],
//   filters: StateDataTableProps["filters"]
// ) {
//   const [sortColumn, setSortColumn] = useState<string>("period");
//   const [sortDirection, setSortDirection] = useState<SortDirection>("desc");

//   const getSortedData = useCallback(() => {
//     const data = processStateTableData(industries, states, laborRates, filters);
//     console.log(data, "data proces");

//     let sortedData = [...data].sort((a, b) => {
//       if (a.stateName !== b.stateName)
//         return a.stateName.localeCompare(b.stateName);
//       if (a.industryName !== b.industryName)
//         return a.industryName.localeCompare(b.industryName);
//       return 0;
//     });

//     if (sortColumn) {
//       sortedData.sort((a, b) => {
//         let comparison = 0;
//         switch (sortColumn) {
//           case "contractorPlusRate":
//           case "blsRate":
//           case "averageRate":
//             if (a.contractorPlusRate == null && b.contractorPlusRate == null)
//               return 0;
//             if (a.contractorPlusRate == null)
//               return sortDirection === "asc" ? -1 : 1;
//             if (b.contractorPlusRate == null)
//               return sortDirection === "asc" ? 1 : -1;
//             comparison = a.contractorPlusRate - b.contractorPlusRate;
//             break;
//           case "markup":
//             if (a.averageRate == null && b.averageRate == null) return 0;
//             if (a.averageRate == null) return sortDirection === "asc" ? -1 : 1;
//             if (b.averageRate == null) return sortDirection === "asc" ? 1 : -1;
//             comparison = a.averageRate * 0.15 - b.averageRate * 0.15;
//             break;
//           case "period":
//             comparison = a.timestamp - b.timestamp;
//             break;
//           default:
//             return 0;
//         }
//         return sortDirection === "asc" ? comparison : -comparison;
//       });
//     }
//     return sortedData;
//   }, [industries, states, laborRates, filters, sortColumn, sortDirection]);

//   const handleSort = (column: string) => {
//     if (sortColumn === column) {
//       setSortDirection((prev) => (prev === "asc" ? "desc" : "asc"));
//     } else {
//       setSortColumn(column);
//       setSortDirection("asc");
//     }
//   };

//   return {
//     sortColumn,
//     sortDirection,
//     handleSort,
//     sortedData: getSortedData(),
//   };
// }
