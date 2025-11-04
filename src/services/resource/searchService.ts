const API_BASE_URL = `${(process.env.RES_HUB_API_BASE_URL as string) ?? process.env.NEXT_PUBLIC_RES_HUB_API_BASE_URL}/materials`;

interface SearchParams {
  query: string;
  storeIds: string[];
  includeOutOfStock: boolean;
  countryCode: string;
  location?: string;
}

const storeIdToEnumMap: Record<string, string> = {
  "lowes-us": "lowes",
  "acehardware-us": "ace_hardware",
  "homedepot-us": "home_depot",
  "build-us": "build",
};

export const performApiSearch = async (params: SearchParams) => {
  const url = new URL(`${API_BASE_URL}/search`);

  url.searchParams.append("query", params.query);
  url.searchParams.append("zip", params.location || "");

  if (params.storeIds.length > 0) {
    params.storeIds.forEach((storeId) => {
      const mapped = storeIdToEnumMap[storeId];
      if (mapped) {
        url.searchParams.append("stores", mapped);
      }
    });
  } else {
    url.searchParams.append("stores", "all");
  }

  url.searchParams.append(
    "include_out_of_stock",
    String(params.includeOutOfStock),
  );

  const res = await fetch(url.toString(), {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });

  if (!res.ok) {
    throw new Error(`API error ${res.status}`);
  }

  return res.json();
};
