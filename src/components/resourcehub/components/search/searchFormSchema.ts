import {
  countries,
  StoreData,
  storesByCountry,
} from "@/services/resource/storeService";
import * as z from "zod";
// import { storesByCountry, countries, StoreData } from "@/services/storeService";

// Define the form schema
export const formSchema = z.object({
  query: z.string().min(2, "Search term must be at least 2 characters"),
  storeIds: z.array(z.string()).min(1, "Select at least one store"),
  includeOutOfStock: z.boolean().catch(true),
  location: z.string().optional(),
  countryCode: z.string().catch("US"),
});

// Export the types
export type FormValues = z.infer<typeof formSchema>;

// Helper functions
const getStoresForCountry = (countryCode: string): StoreData[] => {
  return storesByCountry[countryCode] || [];
};

// Export as a namespace with schema and helper functions
export const SearchSchema = {
  formSchema,
  countries,
  getStoresForCountry,
};

export { countries } from "@/services/resource/storeService";
export type { StoreData } from "@/services/resource/storeService";
