// import { useState, useEffect } from "react";
// import { CalendarDays, TrendingUp, LineChart } from "lucide-react";
// import { Industry, FilterState, State } from "@/types";

// import {
//   Area,
//   AreaChart,
//   CartesianGrid,
//   Legend,
//   ResponsiveContainer,
//   Tooltip,
//   XAxis,
//   YAxis,
// } from "recharts";

// import { laborForecastApi } from "@/services/laborService";
// import { transformForecastData } from "@/utils/dataTransformers";
// import { cn } from "@/app/lib/utils";
// import {
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/Card";
// import Button from "@/components/common/Button";
// import { generateForecastData } from "@/utils/forecastUtils";

// interface ForecastChartProps {
//   forecastData: any[];
//   className?: string;
//   filters?: FilterState;
//   industries?: Industry[];
//   states?: State[];
// }

// const ForecastChart = ({
//   className,
//   filters,
//   industries,
//   states,
// }: ForecastChartProps) => {
//   const [isLoading, setIsLoading] = useState(false);
//   const [showChart, setShowChart] = useState(false);
//   const [chartData, setChartData] = useState<any[]>([]);
//   const [filterHash, setFilterHash] = useState<string>("");
//   const [summary, setSummary] = useState("");

//   // Reset chart state when filters change
//   useEffect(() => {
//     if (filters) {
//       const newFilterHash = JSON.stringify({
//         industries: filters.industries,
//         states: filters.states,
//         zipCode: filters.zipCode,
//         locationMode: filters.locationMode,
//       });

//       if (newFilterHash !== filterHash) {
//         setFilterHash(newFilterHash);
//         setShowChart(false); // Reset to show the "Run Forecast" button
//         setChartData([]); // Clear any existing chart data
//       }
//     }
//   }, [filters]);

//   const getIndustryName = () => {
//     if (!filters || !industries || filters.industries.length === 0) {
//       return "your selected industry";
//     }

//     if (filters.industries.length === 1) {
//       const industry = industries.find((i) => i.id === filters.industries[0]);
//       return industry ? industry.name : "your selected industry";
//     }

//     return "your selected industries";
//   };

//   const getLocationName = () => {
//     if (!filters) {
//       return "";
//     }

//     if (filters.locationMode === "zipcode" && filters.zipCode) {
//       return `in ZIP ${filters.zipCode}`;
//     }

//     if (!states || filters.states.length === 0) {
//       return "";
//     }

//     if (filters.states.length === 1) {
//       const state = states.find((s) => s.id.toString() === filters.states[0]);
//       return state ? `in ${state.name}` : "";
//     }

//     if (filters.states.length > 1) {
//       return `in Selected States`;
//     }

//     return "";
//   };

//   const getTitle = () => {
//     return `US Labor Rate Forecast for ${getIndustryName()} ${getLocationName()}`;
//   };

//   const handleRunForecast = async () => {
//     setIsLoading(true);
//     setShowChart(false);

//     // Simulate AI processing time (5-7 seconds)
//     setTimeout(async () => {
//       const industry =
//         filters?.industries?.length === 1
//           ? industries?.find((i) => i.id === filters.industries[0])?.name
//           : undefined;
//       const selectedStateObjs =
//         states?.filter((s) => filters?.states.map(Number).includes(s.id)) || [];
//       const stateNames = selectedStateObjs.map((s) => s.name);
//       const forCastResponse = await laborForecastApi({
//         industry: industry,
//         state: stateNames,
//         uom: filters?.uom || "Hour",
//         zipCode: filters?.zipCode,
//       });
//       const { forcast, summary } = transformForecastData(forCastResponse);
//       setSummary(summary);
//       setChartData(forcast);
//       setIsLoading(false);
//       setShowChart(true);
//     }, 6000); // 6 seconds delay
//   };
//   const industry =
//     filters?.industries?.length === 1
//       ? industries?.find((i) => i.id === filters.industries[0])?.name
//       : undefined;
//   const forecastDataValue = generateForecastData(industry);

//   const renderTooltipContent = (props: any) => {
//     const { active, payload } = props;

//     if (active && payload && payload.length) {
//       const data = payload[0].payload;
//       return (
//         <div className="bg-background/95 rounded-lg border p-3 shadow-lg backdrop-blur-sm">
//           <p className="text-sm font-medium">{data.year}</p>
//           <p className="text-foreground text-sm">
//             <span className="font-medium">Rate: </span>
//             <span className="font-mono">${data.rate.toFixed(2)}</span>
//           </p>
//           {data.predicted && (
//             <p className="text-muted-foreground mt-1 text-xs italic">
//               Predicted value
//             </p>
//           )}
//         </div>
//       );
//     }
//     return null;
//   };

//   return (
//     <div className={cn("glass-panel", className)}>
//       <CardHeader className="pb-4">
//         <div className="mb-2 flex items-center justify-between">
//           <CardTitle className="text-xl">{getTitle()}</CardTitle>
//         </div>
//         <CardDescription>
//           Project future labor rates based on economic indicators and historical
//           Bureau of Labor Statistics data
//         </CardDescription>
//       </CardHeader>
//       <CardContent className="pt-0">
//         {!showChart ? (
//           <div className="bg-muted/30 border-border/50 flex flex-col items-center justify-center rounded-lg border px-4 py-10">
//             <div className="max-w-lg space-y-4 text-center">
//               <TrendingUp className="text-primary/70 mx-auto h-10 w-10" />
//               <h3 className="text-xl font-medium">Predict Labor Rates</h3>
//               <p className="text-muted-foreground">
//                 Forecast labor rates for {getIndustryName()} over the next 5
//                 years based on historical data and economic indicators.
//               </p>
//               <Button
//                 onClick={handleRunForecast}
//                 className="mt-4"
//                 disabled={isLoading}
//               >
//                 {isLoading ? (
//                   <>
//                     <LineChart className="mr-2 h-4 w-4 animate-pulse" />
//                     Analyzing with AI...
//                   </>
//                 ) : (
//                   <>
//                     <CalendarDays className="mr-2 h-4 w-4" />
//                     Run Forecast
//                   </>
//                 )}
//               </Button>
//             </div>
//           </div>
//         ) : (
//           <div className="space-y-4">
//             <div className="flex items-center justify-between">
//               <h3 className="text-lg font-medium">
//                 5-Year Labor Rate Projection
//               </h3>
//             </div>
//             <div className="h-[350px] w-full rounded-lg bg-white/50 p-4">
//               <ResponsiveContainer width="100%" height="100%">
//                 <AreaChart
//                   data={chartData}
//                   margin={{ top: 10, right: 30, left: 10, bottom: 10 }}
//                 >
//                   <defs>
//                     <linearGradient
//                       id="rateGradient"
//                       x1="0"
//                       y1="0"
//                       x2="0"
//                       y2="1"
//                     >
//                       <stop offset="5%" stopColor="#9b87f5" stopOpacity={0.8} />
//                       <stop
//                         offset="95%"
//                         stopColor="#9b87f5"
//                         stopOpacity={0.1}
//                       />
//                     </linearGradient>
//                     <linearGradient
//                       id="predictedGradient"
//                       x1="0"
//                       y1="0"
//                       x2="0"
//                       y2="1"
//                     >
//                       <stop offset="5%" stopColor="#7E69AB" stopOpacity={0.8} />
//                       <stop
//                         offset="95%"
//                         stopColor="#6E59A5"
//                         stopOpacity={0.1}
//                       />
//                     </linearGradient>
//                   </defs>
//                   <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
//                   <XAxis
//                     dataKey="year"
//                     tick={{ fill: "#64748b", fontSize: 12 }}
//                     stroke="#e2e8f0"
//                   />
//                   <YAxis
//                     tickFormatter={(value) => `$${value.toFixed(2)}`}
//                     tick={{ fill: "#64748b", fontSize: 12 }}
//                     stroke="#e2e8f0"
//                     domain={["dataMin - 1", "dataMax + 2"]}
//                   />
//                   <Tooltip content={renderTooltipContent} />
//                   <Legend
//                     verticalAlign="top"
//                     height={36}
//                     iconType="circle"
//                     formatter={(value) => (
//                       <span className="text-sm font-medium">{value}</span>
//                     )}
//                   />
//                   <Area
//                     type="monotone"
//                     dataKey="rate"
//                     stroke="#9b87f5"
//                     fillOpacity={1}
//                     fill="url(#rateGradient)"
//                     strokeWidth={2}
//                     name="Labor Rate"
//                     activeDot={({ cx, cy, stroke }) => (
//                       <circle
//                         cx={cx}
//                         cy={cy}
//                         r={5}
//                         stroke={stroke}
//                         fill="#fff"
//                         strokeWidth={2}
//                       />
//                     )}
//                     dot={(props) => {
//                       const { cx, cy, stroke, payload } = props;
//                       if (payload.predicted) {
//                         return (
//                           <svg x={cx - 5} y={cy - 5} width={10} height={10}>
//                             <circle
//                               cx={5}
//                               cy={5}
//                               r={4}
//                               stroke="#7E69AB"
//                               fill="#fff"
//                               strokeWidth={2}
//                             />
//                           </svg>
//                         );
//                       }
//                       return null;
//                     }}
//                   />
//                 </AreaChart>
//               </ResponsiveContainer>
//             </div>
//             <p className="text-muted-foreground text-center text-xs italic">
//               {summary}
//               {/* Forecasted rates are based on historical trends, economic
//               indicators, and statistical modeling. Actual results may vary
//               based on market changes. */}
//             </p>
//           </div>
//         )}
//       </CardContent>
//     </div>
//   );
// };

// export default ForecastChart;
