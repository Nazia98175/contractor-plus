// import {
//   Industry,
//   State,
//   LaborRate,
//   FilterState,
//   DataSource,
//   ZipCodeLaborRate,
// } from "@/types";

// export interface BaseDataTableProps {
//   industries: Industry[];
//   filters: FilterState;
//   className?: string;
// }

// export interface StateDataTableProps extends BaseDataTableProps {
//   viewType: "state";
//   states: State[];
//   laborRates: LaborRate[];
//   searchedZipCode?: never; // This ensures zipcode props can't be used in state view
// }

// export interface ZipCodeDataTableProps extends BaseDataTableProps {
//   viewType: "zipcode";
//   states?: never; // This ensures state props can't be used in zipcode view
//   laborRates: ZipCodeLaborRate[];
//   searchedZipCode: string;
// }

// export type DataTableProps = StateDataTableProps | ZipCodeDataTableProps;

// export interface StateTableDataRow {
//   id: number;
//   industryName: string;
//   stateName: string;
//   stateAbbr: string;
//   regionName?: string; // Add missing property
//   contractorPlusRate: number | null;
//   blsRate: number | null;
//   averageRate: number | null;
//   year: number;
//   quarter: number;
//   period: string; // Add missing property
//   uom: string;
//   timestamp?: number; // Add missing property for sorting
//   // Add any other fields that are used in the table
// }

// export interface ZipCodeTableDataRow {
//   id: number;
//   industryName: string;
//   zipCode: string;
//   contractorPlusRate: number | null;
//   blsRate: number | null;
//   averageRate: number | null;
//   year: number;
//   quarter: number;
//   uom: string;
// }

// export interface ProcessedTableData {
//   industryName: string;
//   stateName?: string;
//   stateAbbr?: string;
//   zipCode?: string;
//   contractorPlusRate: number | null;
//   blsRate: number | null;
//   averageRate: number | null;
//   year: number;
//   quarter: number;
//   uom: string;
//   [key: string]: any;
// }
