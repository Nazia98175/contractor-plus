const LABOR_API_BASE_URL = `${(process.env.RES_HUB_API_BASE_URL as string) ?? process.env.NEXT_PUBLIC_RES_HUB_API_BASE_URL}/labor-index`;

interface estimaticDataParams {
  industry?: string;
  zipCode?: string;
}

export const estimaticDataApi = async (params: estimaticDataParams) => {
  const url = new URL(`${LABOR_API_BASE_URL}/data-estimatic`);

  url.searchParams.append("industry", params.industry ?? "");
  url.searchParams.append("zip_code", params?.zipCode ?? "");

  const res = await fetch(url.toString(), {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });

  if (!res.ok) {
    throw new Error(`API error ${res.status}`);
  }

  return res.json();
};
