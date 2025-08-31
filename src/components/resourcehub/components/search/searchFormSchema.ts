import { StoreData, storesByCountry } from "@/services/resource/storeService";
import * as z from "zod";
import { countries } from "./searchFormSchema";
// import { storesByCountry, countries, StoreData } from '@/services/storeService';

// Define the form schema
export const formSchema = z.object({
  query: z.string(),
  storeIds: z.array(z.string()),
  includeOutOfStock: z.boolean().default(true),
  countryCode: z.string().default("US"),
  location: z.string().optional(),
});
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
