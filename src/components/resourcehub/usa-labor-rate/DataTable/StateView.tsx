// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table";
// import { cn } from "@/lib/utils";
// import { StateDataTableProps } from "./types";
// import { useStateTableSort } from "./useStateTableSort";
// import StateTableHeaders from "./StateTableHeaders";
// import StateTableRow from "./StateTableRow";

// const StateView = ({
//   industries,
//   states,
//   laborRates,
//   filters,
//   className,
// }: StateDataTableProps) => {
//   console.log(laborRates, "laborRates");
//   const { sortColumn, sortDirection, handleSort, sortedData } =
//     useStateTableSort(industries, states, laborRates, filters);

//   // Find out whether to show "State" or "Region"
//   const showRegion = sortedData.some((r) => r.stateName === "Region");

//   // Group data by period to ensure we can see one row per period
//   const groupedByPeriod = sortedData.reduce((acc, row) => {
//     const key = `${row.period}_${row.industryName}_${row.stateName}`;
//     if (!acc[key]) {
//       acc[key] = row;
//     }
//     return acc;
//   }, {} as Record<string, any>);

//   // Convert back to array and apply sorting
//   const dedupedData = Object.values(groupedByPeriod);

//   return (
//     <div className={cn("glass-panel rounded-lg overflow-hidden", className)}>
//       <div className="overflow-x-auto px-4">
//         <Table>
//           <TableHeader>
//             <StateTableHeaders
//               showRegion={showRegion}
//               sortColumn={sortColumn}
//               sortDirection={sortDirection}
//               handleSort={handleSort}
//               dataSources={filters.dataSources}
//             />
//           </TableHeader>
//           <TableBody>
//             {dedupedData.length > 0 ? (
//               dedupedData.map((row, index) => (
//                 <StateTableRow
//                   key={index}
//                   row={row}
//                   dataSources={filters.dataSources}
//                 />
//               ))
//             ) : (
//               <TableRow>
//                 <TableCell colSpan={6} className="h-24 text-center">
//                   No results found for the current filters.
//                 </TableCell>
//               </TableRow>
//             )}
//           </TableBody>
//         </Table>
//       </div>
//     </div>
//   );
// };

// export default StateView;
