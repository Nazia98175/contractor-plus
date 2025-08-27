// import { useState } from 'react';
// import { SortDirection } from './SortableTableHeader';

// export const useZipCodeTableSort = (tableData: any[]) => {
//   const [sortColumn, setSortColumn] = useState<string>('period');
//   const [sortDirection, setSortDirection] = useState<SortDirection>('desc');

//   const deduplicateAndSortData = (data: any[]) => {
//     // Create a map to track unique combinations of industry and period
//     const uniqueEntries = new Map();

//     data.forEach(entry => {
//       const key = `${entry.industryName}_${entry.period}`;
//       uniqueEntries.set(key, entry);
//     });

//     // Convert back to array and sort
//     let uniqueData = Array.from(uniqueEntries.values());

//     // Apply sorting
//     if (sortColumn) {
//       uniqueData.sort((a, b) => {
//         // First, sort by industry name
//         const industryComparison = a.industryName.localeCompare(b.industryName);
//         if (industryComparison !== 0) return industryComparison;

//         // Then by the selected column
//         let comparison = 0;
//         switch (sortColumn) {
//           case 'contractorPlusRate':
//           case 'blsRate':
//           case 'averageRate':
//             if (a[sortColumn] === null && b[sortColumn] === null) return 0;
//             if (a[sortColumn] === null) return sortDirection === 'asc' ? -1 : 1;
//             if (b[sortColumn] === null) return sortDirection === 'asc' ? 1 : -1;
//             comparison = a[sortColumn] - b[sortColumn];
//             break;

//           case 'period':
//             comparison = a.timestamp - b.timestamp;
//             break;

//           default:
//             return 0;
//         }

//         return sortDirection === 'asc' ? comparison : -comparison;
//       });
//     }

//     return uniqueData;
//   };

//   const handleSort = (column: string) => {
//     if (sortColumn === column) {
//       setSortDirection(prev => prev === 'asc' ? 'desc' : 'asc');
//     } else {
//       setSortColumn(column);
//       setSortDirection('asc');
//     }
//   };

//   return {
//     sortColumn,
//     sortDirection,
//     handleSort,
//     deduplicateAndSortData
//   };
// };
