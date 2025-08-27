// import React from "react";
// import { TableCell, TableRow } from "@/components/ui/table";
// import AnimatedNumber from "@/components/AnimatedNumber";
// import { DataSource } from "@/types";

// interface ZipCodeTableRowProps {
//   row: any;
//   dataSources: DataSource[];
// }

// const ZipCodeTableRow: React.FC<ZipCodeTableRowProps> = ({
//   row,
//   dataSources,
// }) => {
//   return (
//     <TableRow className="h-16 hover:bg-muted/20 transition-colors">
//       <TableCell className="font-medium">{row.industryName}</TableCell>
//       {dataSources.includes("Contractor+") && (
//         <TableCell className="">
//           {row.contractorPlusRate !== null ? (
//             <AnimatedNumber
//               value={row.contractorPlusRate}
//               prefix="$"
//               suffix={`/${row.uom}`}
//               decimals={2}
//             />
//           ) : (
//             "N/A"
//           )}
//         </TableCell>
//       )}
//       {dataSources.includes("BLS.gov") && (
//         <TableCell className="">
//           {row.blsRate !== null ? (
//             <AnimatedNumber
//               value={row.blsRate}
//               prefix="$"
//               suffix={`/${row.uom}`}
//               decimals={2}
//             />
//           ) : (
//             "N/A"
//           )}
//         </TableCell>
//       )}
//       {dataSources.includes("Average") && (
//         <TableCell className="text-center">
//           {row.averageRate !== null ? (
//             <AnimatedNumber
//               value={row.averageRate}
//               prefix="$"
//               suffix={`/${row.uom}`}
//               decimals={2}
//             />
//           ) : (
//             "N/A"
//           )}
//         </TableCell>
//       )}
//       <TableCell className="text-muted-foreground">{row.period}</TableCell>
//     </TableRow>
//   );
// };

// export default ZipCodeTableRow;
