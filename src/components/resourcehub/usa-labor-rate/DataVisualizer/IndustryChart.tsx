// import { useEffect, useState } from 'react';
// import { BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
// import { Industry, State, LaborRate, FilterState } from '@/types';
// import { renderTooltip } from './utils';

// interface IndustryChartProps {
//   industries: Industry[];
//   states: State[];
//   laborRates: LaborRate[];
//   filters: FilterState;
// }

// const IndustryChart = ({
//   industries,
//   states,
//   laborRates,
//   filters,
// }: IndustryChartProps) => {
//   const [chartData, setChartData] = useState<any[]>([]);

//   useEffect(() => {
//     const filterRates = () => {
//       // Apply filters
//       return laborRates.filter(rate => {
//         const matchesIndustry = filters.industries.length === 0 || filters.industries.includes(rate.industryId);
//         const matchesState = filters.states.length === 0 || filters.states.includes(rate.stateId.toString());
//         const matchesUOM = rate.uom === filters.uom;
//         return matchesIndustry && matchesState && matchesUOM;
//       });
//     };

//     const filteredRates = filterRates();

//     // Prepare industry comparison data
//     const industryRates = new Map();

//     filteredRates.forEach(rate => {
//       const industryId = rate.industryId;
//       const industry = industries.find(i => i.id === industryId);

//       if (!industry) return;

//       if (!industryRates.has(industryId)) {
//         industryRates.set(industryId, {
//           name: industry.name,
//           contractorPlusRate: 0,
//           blsRate: 0,
//           averageRate: 0,
//           count: 0
//         });
//       }

//       const entry = industryRates.get(industryId);

//       if (rate.contractorPlusRate !== null) {
//         entry.contractorPlusRate += rate.contractorPlusRate;
//       }

//       if (rate.blsRate !== null) {
//         entry.blsRate += rate.blsRate;
//       }

//       if (rate.averageRate !== null) {
//         entry.averageRate += rate.averageRate;
//       }

//       entry.count++;
//     });

//     // Calculate averages
//     const industryData = Array.from(industryRates.values()).map(entry => ({
//       name: entry.name,
//       contractorPlusRate: entry.count > 0 ? entry.contractorPlusRate / entry.count : null,
//       blsRate: entry.count > 0 ? entry.blsRate / entry.count : null,
//       averageRate: entry.count > 0 ? entry.averageRate / entry.count : null,
//     }));

//     // Sort by average rate
//     industryData.sort((a, b) => {
//       const aRate = a.averageRate || a.contractorPlusRate || a.blsRate || 0;
//       const bRate = b.averageRate || b.contractorPlusRate || b.blsRate || 0;
//       return bRate - aRate;
//     });

//     // Limit to top 10 for better visualization
//     setChartData(industryData.slice(0, 10));
//   }, [laborRates, filters, industries]);

//   return (
//     <div className="h-[400px] w-full">
//       <ResponsiveContainer width="100%" height="100%">
//         <BarChart
//           data={chartData}
//           layout="vertical"
//           margin={{ top: 10, right: 30, left: 100, bottom: 10 }}
//         >
//           <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
//           <XAxis
//             type="number"
//             tickFormatter={(value) => `$${value}`}
//             tick={{ fontSize: 12 }}
//           />
//           <YAxis
//             dataKey="name"
//             type="category"
//             width={100}
//             tick={{ fontSize: 12 }}
//           />
//           <Tooltip content={(props) => renderTooltip(props, 'industry', filters, industries, states)} />
//           {filters.dataSources.includes('Contractor+') && (
//             <Bar dataKey="contractorPlusRate" name="Contractor+" fill="#3b82f6" barSize={20} />
//           )}
//           {filters.dataSources.includes('BLS.gov') && (
//             <Bar dataKey="blsRate" name="BLS.gov" fill="#f59e0b" barSize={20} />
//           )}
//           {filters.dataSources.includes('Average') && (
//             <Bar dataKey="averageRate" name="Average" fill="#10b981" barSize={20} />
//           )}
//         </BarChart>
//       </ResponsiveContainer>
//     </div>
//   );
// };

// export default IndustryChart;
