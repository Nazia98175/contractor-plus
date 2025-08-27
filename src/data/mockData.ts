// import { Industry, State, LaborRate, ForecastDataPoint, ZipCodeLaborRate, UnitOfMeasurement } from '@/types';

// export const industries: Industry[] = [
//   { id: 1, name: 'General Contractors', description: 'Oversee entire construction projects, including residential, commercial, and industrial.' },
//   { id: 2, name: 'Roofing Contractors', description: 'Install, repair, and maintain roofs for homes, businesses, and industrial buildings.' },
//   { id: 3, name: 'Electrical Contractors', description: 'Handle electrical system installations, wiring, and maintenance for residential, commercial, and industrial clients.' },
//   { id: 4, name: 'HVAC Contractors', description: 'Specialize in heating, ventilation, and air conditioning system installation, repair, and maintenance.' },
//   { id: 5, name: 'Plumbing Contractors', description: 'Install and repair water, sewer, and gas lines, along with plumbing fixtures.' },
//   { id: 6, name: 'Mechanical Contractors', description: 'Work on large-scale mechanical systems, including HVAC, refrigeration, and piping.' },
//   { id: 7, name: 'Concrete Contractors', description: 'Specialize in concrete foundations, driveways, sidewalks, parking lots, and structural concrete work.' },
//   { id: 8, name: 'Painting Contractors', description: 'Provide interior and exterior painting services for residential, commercial, and industrial projects.' },
//   { id: 9, name: 'Drywall Contractors', description: 'Install drywall in residential and commercial buildings, including finishing and texturing.' },
//   { id: 10, name: 'Flooring Contractors', description: 'Handle the installation of hardwood, tile, laminate, carpet, and other flooring materials.' },
//   { id: 11, name: 'Siding Contractors', description: 'Install and repair siding for homes and commercial buildings, including vinyl, fiber cement, and wood.' },
//   { id: 12, name: 'Doors & Windows Contractors', description: 'Install and replace doors and windows for energy efficiency, aesthetics, and security.' },
//   { id: 13, name: 'Masonry Contractors', description: 'Work with brick, stone, and concrete blocks for walls, chimneys, facades, and hardscapes.' },
//   { id: 14, name: 'Excavation & Site Preparation', description: 'Handle land clearing, grading, trenching, and site prep for construction projects.' },
//   { id: 15, name: 'Steel & Structural Contractors', description: 'Specialize in steel fabrication, erection, and structural framework for buildings and infrastructure.' },
//   { id: 16, name: 'Carpentry Contractors', description: 'Focus on wood framing, trim work, cabinetry, and finish carpentry in construction.' },
//   { id: 17, name: 'Insulation Contractors', description: 'Install insulation materials for thermal and soundproofing applications.' },
//   { id: 18, name: 'Landscaping & Hardscaping', description: 'Work on outdoor spaces, including planting, patios, retaining walls, and drainage solutions.' },
//   { id: 19, name: 'Glass & Glazing Contractors', description: 'Install glass windows, storefronts, curtain walls, and decorative glass features.' },
//   { id: 20, name: 'Demolition Contractors', description: 'Specialize in tearing down buildings, structures, and interior spaces safely and efficiently.' },
// ];

// export const states: State[] = [
//   { id: 1, name: 'Alabama', abbreviation: 'AL', region: 'South' },
//   { id: 2, name: 'Alaska', abbreviation: 'AK', region: 'West' },
//   { id: 3, name: 'Arizona', abbreviation: 'AZ', region: 'West' },
//   { id: 4, name: 'Arkansas', abbreviation: 'AR', region: 'South' },
//   { id: 5, name: 'California', abbreviation: 'CA', region: 'West' },
//   { id: 6, name: 'Colorado', abbreviation: 'CO', region: 'West' },
//   { id: 7, name: 'Connecticut', abbreviation: 'CT', region: 'Northeast' },
//   { id: 8, name: 'Delaware', abbreviation: 'DE', region: 'South' },
//   { id: 9, name: 'Florida', abbreviation: 'FL', region: 'South' },
//   { id: 10, name: 'Georgia', abbreviation: 'GA', region: 'South' },
//   { id: 11, name: 'Hawaii', abbreviation: 'HI', region: 'West' },
//   { id: 12, name: 'Idaho', abbreviation: 'ID', region: 'West' },
//   { id: 13, name: 'Illinois', abbreviation: 'IL', region: 'Midwest' },
//   { id: 14, name: 'Indiana', abbreviation: 'IN', region: 'Midwest' },
//   { id: 15, name: 'Iowa', abbreviation: 'IA', region: 'Midwest' },
//   { id: 16, name: 'Kansas', abbreviation: 'KS', region: 'Midwest' },
//   { id: 17, name: 'Kentucky', abbreviation: 'KY', region: 'South' },
//   { id: 18, name: 'Louisiana', abbreviation: 'LA', region: 'South' },
//   { id: 19, name: 'Maine', abbreviation: 'ME', region: 'Northeast' },
//   { id: 20, name: 'Maryland', abbreviation: 'MD', region: 'South' },
//   { id: 21, name: 'Massachusetts', abbreviation: 'MA', region: 'Northeast' },
//   { id: 22, name: 'Michigan', abbreviation: 'MI', region: 'Midwest' },
//   { id: 23, name: 'Minnesota', abbreviation: 'MN', region: 'Midwest' },
//   { id: 24, name: 'Mississippi', abbreviation: 'MS', region: 'South' },
//   { id: 25, name: 'Missouri', abbreviation: 'MO', region: 'Midwest' },
//   { id: 26, name: 'Montana', abbreviation: 'MT', region: 'West' },
//   { id: 27, name: 'Nebraska', abbreviation: 'NE', region: 'Midwest' },
//   { id: 28, name: 'Nevada', abbreviation: 'NV', region: 'West' },
//   { id: 29, name: 'New Hampshire', abbreviation: 'NH', region: 'Northeast' },
//   { id: 30, name: 'New Jersey', abbreviation: 'NJ', region: 'Northeast' },
//   { id: 31, name: 'New Mexico', abbreviation: 'NM', region: 'West' },
//   { id: 32, name: 'New York', abbreviation: 'NY', region: 'Northeast' },
//   { id: 33, name: 'North Carolina', abbreviation: 'NC', region: 'South' },
//   { id: 34, name: 'North Dakota', abbreviation: 'ND', region: 'Midwest' },
//   { id: 35, name: 'Ohio', abbreviation: 'OH', region: 'Midwest' },
//   { id: 36, name: 'Oklahoma', abbreviation: 'OK', region: 'South' },
//   { id: 37, name: 'Oregon', abbreviation: 'OR', region: 'West' },
//   { id: 38, name: 'Pennsylvania', abbreviation: 'PA', region: 'Northeast' },
//   { id: 39, name: 'Rhode Island', abbreviation: 'RI', region: 'Northeast' },
//   { id: 40, name: 'South Carolina', abbreviation: 'SC', region: 'South' },
//   { id: 41, name: 'South Dakota', abbreviation: 'SD', region: 'Midwest' },
//   { id: 42, name: 'Tennessee', abbreviation: 'TN', region: 'South' },
//   { id: 43, name: 'Texas', abbreviation: 'TX', region: 'South' },
//   { id: 44, name: 'Utah', abbreviation: 'UT', region: 'West' },
//   { id: 45, name: 'Vermont', abbreviation: 'VT', region: 'Northeast' },
//   { id: 46, name: 'Virginia', abbreviation: 'VA', region: 'South' },
//   { id: 47, name: 'Washington', abbreviation: 'WA', region: 'West' },
//   { id: 48, name: 'West Virginia', abbreviation: 'WV', region: 'South' },
//   { id: 49, name: 'Wisconsin', abbreviation: 'WI', region: 'Midwest' },
//   { id: 50, name: 'Wyoming', abbreviation: 'WY', region: 'West' },
// ];

// // Generate random labor rates for testing
// export const generateLaborRates = (): LaborRate[] => {
//   const rates: LaborRate[] = [];
//   const currentYear = new Date().getFullYear();
//   const uoms: Array<'Hour' | 'Square Foot' | 'Linear Foot' | 'Unit'> = ['Hour', 'Square Foot', 'Linear Foot', 'Unit'];

//   // Generate data for the past 3 years, quarterly
//   for (let year = currentYear - 2; year <= currentYear; year++) {
//     for (let quarter = 1; quarter <= 4; quarter++) {
//       // Skip future quarters
//       if (year === currentYear && quarter > Math.ceil((new Date().getMonth() + 1) / 3)) {
//         continue;
//       }

//       // For each industry
//       for (let industryId = 1; industryId <= 20; industryId++) {
//         // For each state
//         for (let stateId = 1; stateId <= 50; stateId++) {
//           // For applicable UOMs
//           const applicableUoms = industryId <= 10 ? uoms : [uoms[0], uoms[3]]; // Simplified logic for demo

//           for (const uom of applicableUoms) {
//             // Base rate varies by industry and UOM
//             let baseRate = 0;
//             switch (uom) {
//               case 'Hour':
//                 baseRate = 25 + (industryId * 1.5); // $25-55 per hour
//                 break;
//               case 'Square Foot':
//                 baseRate = 1.5 + (industryId * 0.2); // $1.5-5.5 per sq ft
//                 break;
//               case 'Linear Foot':
//                 baseRate = 3 + (industryId * 0.5); // $3-13 per linear ft
//                 break;
//               case 'Unit':
//                 baseRate = 150 + (industryId * 20); // $150-550 per unit
//                 break;
//             }

//             // Adjust for state cost of living (simplified)
//             const stateFactor = 0.8 + (stateId % 10) * 0.05; // 0.8-1.25x multiplier

//             // Adjust for time (rates generally increase)
//             const yearFactor = 1 + (year - (currentYear - 2)) * 0.03; // 3% annual increase
//             const quarterFactor = 1 + (quarter - 1) * 0.005; // 0.5% quarterly increase

//             // Calculate rates with small random variations
//             const contractorPlusRate = baseRate * stateFactor * yearFactor * quarterFactor * (0.95 + Math.random() * 0.1);
//             const blsRate = baseRate * stateFactor * yearFactor * quarterFactor * (0.9 + Math.random() * 0.1);
//             const averageRate = (contractorPlusRate + blsRate) / 2;

//             rates.push({
//               industryId,
//               stateId,
//               uom,
//               contractorPlusRate,
//               blsRate,
//               averageRate,
//               year,
//               quarter,
//             });
//           }
//         }
//       }
//     }
//   }

//   return rates;
// };

// // Cache the generated rates to avoid regenerating on each import
// let laborRates: LaborRate[] | null = null;

// export const getLaborRates = (): LaborRate[] => {
//   if (!laborRates) {
//     laborRates = generateLaborRates();
//   }
//   return laborRates;
// };

// // Generate forecast data
// export const generateForecastData = (): ForecastDataPoint[] => {
//   const forecast: ForecastDataPoint[] = [];
//   const currentYear = new Date().getFullYear();
//   const startMonth = new Date().getMonth() - 5; // 6 months ago

//   for (let i = 0; i < 12; i++) {  // 12 months of data
//     const month = startMonth + i;
//     const year = currentYear + Math.floor(month / 12);
//     const adjustedMonth = ((month % 12) + 12) % 12; // Ensure month is 0-11

//     const date = new Date(year, adjustedMonth, 15).toISOString();

//     const baseRate = 40 + Math.random() * 5; // Base rate between $40-$45
//     const contractorPlusRate = baseRate + 3 + Math.random() * 2; // Slightly higher
//     const blsRate = baseRate - 3 + Math.random() * 2; // Slightly lower

//     forecast.push({
//       date,
//       contractorPlusRate,
//       blsRate,
//       averageRate: (contractorPlusRate + blsRate) / 2,
//       year
//     });
//   }

//   return forecast;
// };

// // Add a function to generate zip code labor rates
// export const getZipCodeLaborRates = (zipCode: string, radius: number = 100): ZipCodeLaborRate[] => {
//   // This is mock data - in a real app, this would fetch data from an API
//   const zipRates: ZipCodeLaborRate[] = [];

//   // Generate some random zip code rates
//   industries.forEach(industry => {
//     // Generate a distance within the radius
//     const distance = Math.floor(Math.random() * radius);

//     zipRates.push({
//       industryId: industry.id,
//       zipCode: zipCode,
//       distance: distance,
//       uom: 'Hour' as UnitOfMeasurement,
//       contractorPlusRate: 45 + Math.random() * 30,
//       blsRate: 40 + Math.random() * 25,
//       averageRate: 42 + Math.random() * 28,
//       year: 2024,
//       quarter: 1
//     });
//   });

//   return zipRates;
// };
