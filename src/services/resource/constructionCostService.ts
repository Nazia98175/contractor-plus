const LABOR_API_BASE_URL = "https://reshubapi.contractorplus.app/labor-index";

interface estimaticDataParams {
  industry: string;
  zipCode: string;
}

export const estimaticDataApi = async (params: estimaticDataParams) => {
  console.log(params, "parms values");
  const url = new URL(`${LABOR_API_BASE_URL}/data-estimatic`);

  url.searchParams.append("industry", params.industry);
  url.searchParams.append("zip_code", params.zipCode);

  const res = await fetch(url.toString(), {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });

  if (!res.ok) {
    throw new Error(`API error ${res.status}`);
  }

  return res.json();
};
