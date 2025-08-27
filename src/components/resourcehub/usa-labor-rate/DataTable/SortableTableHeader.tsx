// import { ArrowUpDown, ArrowUp, ArrowDown } from "lucide-react";
// import { cn } from "@/lib/utils";
// import { TableHead } from "@/components/ui/table";

// export type SortDirection = "asc" | "desc" | null;

// interface SortableTableHeaderProps {
//   column: string;
//   label: string;
//   currentSortColumn: string | null;
//   currentSortDirection: SortDirection;
//   onSort: (column: string) => void;
//   className?: string;
//   alignRight?: boolean;
// }

// const SortableTableHeader = ({
//   column,
//   label,
//   currentSortColumn,
//   currentSortDirection,
//   onSort,
//   className,
//   alignRight = false,
// }: SortableTableHeaderProps) => {
//   const isActive = currentSortColumn === column;

//   return (
//     <TableHead
//       className={cn(
//         "cursor-pointer select-none",
//         alignRight && "text-right",
//         className
//       )}
//       onClick={() => onSort(column)}
//     >
//       <div className="flex items-center  gap-1">
//         <span>{label}</span>
//         <span className="flex items-center">
//           {isActive ? (
//             currentSortDirection === "asc" ? (
//               <ArrowUp className="h-4 w-4" />
//             ) : (
//               <ArrowDown className="h-4 w-4" />
//             )
//           ) : (
//             <ArrowUpDown className="h-4 w-4 opacity-50" />
//           )}
//         </span>
//       </div>
//     </TableHead>
//   );
// };

// export default SortableTableHeader;
