// src/services/laborService.ts

const LABOR_API_BASE_URL = "https://reshubapi.contractorplus.app/labor-index";

interface LaborSearchParams {
  industry: string;
  state: string[];
  format: "Quarterly" | "Monthly";
  timePeriod?: string;
  includeSources: string[];
  uom: "Hour" | "Square Foot" | "Linear Foot" | "Unit";
  zipCode?: string;
}

interface LaborForecastParams {
  industry?: string;
  state: string[];
  uom: "Hour" | "Square Foot" | "Linear Foot" | "Unit";
  zipCode?: string;
}

const uomMap: Record<string, string> = {
  Hour: "hour",
  "Square Foot": "sq_ft",
  "Linear Foot": "linear_ft",
  Unit: "unit",
};

const sourceMap: Record<string, string> = {
  "Contractor+": "cpapp",
  "BLS.gov": "bls",
  Average: "average",
  Both: "both",
};

const externalToInternalIndustryMap: Record<string, string> = {
  "General Contractor": "General Contractors",
  Roofing: "Roofing Contractors",
  Plumbing: "Plumbing Contractors",
  Electrical: "Electrical Contractors",
  Painting: "Painting Contractors",
  HVAC: "HVAC Contractors",
  "Framing/Carpentry": "Carpentry Contractors",
  Drywall: "Drywall Contractors",
  Flooring: "Flooring Contractors",
  Siding: "Siding Contractors",
  Doors: "Doors & Windows Contractors",
  Windows: "Doors & Windows Contractors",
  "Bathroom Remodeling": "General Contractors",
  "Kitchen Remodeling": "General Contractors",
  "Custom Home Building": "General Contractors",
  "Concrete / Masonry": "Masonry Contractors",
  Decks: "Carpentry Contractors",
  Fences: "Carpentry Contractors",
  Handyman: "General Contractors",
  Appliances: "Mechanical Contractors",
  "Audio / Video": "Electrical Contractors",
  "Smart Home": "Electrical Contractors",
  "Mold Remediation": "Demolition Contractors",
  Restoration: "General Contractors",
  "Landscaping / Lawn Care": "Landscaping & Hardscaping",
};

export const getExternalIndustryName = (internalIndustry: string): string => {
  const cleaned = internalIndustry.trim().toLowerCase();

  const entry = Object.entries(externalToInternalIndustryMap).find(
    ([, value]) => value.toLowerCase() === cleaned,
  );

  return entry ? entry[0] : internalIndustry;
};

export const laborSearchApi = async (params: LaborSearchParams) => {
  console.log(params, "parms values");
  const url = new URL(`${LABOR_API_BASE_URL}/data`);

  const normalizedIndustry = getExternalIndustryName(params.industry);

  console.log(normalizedIndustry, "normalizedIndusty");

  url.searchParams.append("industry", normalizedIndustry);

  // Handle state (if it's an array)
  if (Array.isArray(params.state)) {
    params.state.forEach((state) => {
      url.searchParams.append("state", state);
    });
  } else if (params.state) {
    url.searchParams.append("state", params.state);
  }
  if (params.zipCode) {
    url.searchParams.append("zip_code", params.zipCode);
  }
  // url.searchParams.append("under_miles", "100");
  url.searchParams.append("format", params.format.toLowerCase());
  url.searchParams.append("time_period", params.timePeriod ?? "");

  // Include multiple sources
  params.includeSources?.forEach((source) => {
    const mapped = sourceMap[source];
    if (mapped) url.searchParams.append("include_sources", mapped);
  });

  // UOM mapping
  const uomValue = uomMap[params.uom];
  if (uomValue) {
    url.searchParams.append("uom", uomValue);
  }

  const res = await fetch(url.toString().replace(/\+/g, "%20"), {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });

  if (!res.ok) {
    throw new Error(`API error ${res.status}`);
  }

  return res.json();
};

export const laborForecastApi = async (params: LaborForecastParams) => {
  const url = new URL(`${LABOR_API_BASE_URL}/forcast`);

  const normalizedIndustry = getExternalIndustryName(params?.industry ?? "");
  url.searchParams.append("industry", normalizedIndustry);

  // Handle state (if it's an array)
  if (Array.isArray(params.state)) {
    params.state.forEach((state) => {
      url.searchParams.append("state", state);
    });
  } else if (params.state) {
    url.searchParams.append("state", params.state);
  }

  if (params.zipCode) {
    url.searchParams.append("zip_code", params.zipCode);
  }

  // UOM mapping
  const uomValue = uomMap[params.uom];
  if (uomValue) {
    url.searchParams.append("uom", uomValue);
  }

  const res = await fetch(url.toString().replace(/\+/g, "%20"), {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });

  if (!res.ok) {
    throw new Error(`Forecast API error ${res.status}`);
  }

  return res.json();
};
