
// Define a more complete type for the store data
export interface StoreData {
  id: string;
  name: string;
  comingSoon?: boolean;
}

export const countries = [
  { code: 'US', name: 'United States' },
  { code: 'CA', name: 'Canada' },
];

// Export stores by country, with comingSoon flags
export const storesByCountry: Record<string, StoreData[]> = {
  US: [
    { id: 'lowes-us', name: "Lowe's" },
    { id: 'build-us', name: 'Build.com' },
    { id: 'acehardware-us', name: 'Ace Hardware' },
    { id: 'menards-us', name: 'Menards', comingSoon: true },
    { id: 'homedepot-us', name: 'The Home Depot' },
    { id: 'amazon-us', name: 'Amazon', comingSoon: true },
  ],
  CA: [
    { id: 'homedepot-ca', name: 'Home Depot Canada', comingSoon: true },
    { id: 'lowes-ca', name: "Lowe's Canada", comingSoon: true },
    { id: 'rona-ca', name: 'RONA', comingSoon: true },
  ],
};

// Helper function that can be used to find information about a store by its ID
export const getStoreById = (storeId: string): StoreData | undefined => {
  for (const country in storesByCountry) {
    const store = storesByCountry[country].find(s => s.id === storeId);
    if (store) return store;
  }
  return undefined;
};
