import axios from "axios";

export interface ThumbtackSearchResponse {
  businesses: ThumbtackBusiness[];
  total: number;
}

export interface ThumbtackBusiness {
  id: string;
  name: string;
  rating: number;
  // Extend with more fields if needed
}

export interface ThumbtackSearchPayload {
  categoryID: string;
  userQuery: string;
  zipCode?: string;
  ip?: string;
}

export interface IpifyResponse {
  ip: string;
}

const IPIFY_URL = "https://api.ipify.org/?format=json";

const BASE_URL =
  "https://reshubapi.contractorplus.app/labor-index/thumbtack-data";

export const searchThumbtackBusinesses = async (
  payload: ThumbtackSearchPayload
) => {
  try {
    const { categoryID, userQuery, zipCode, ip } = payload;
    const params: Record<string, string> = {
      user_query: userQuery,
      category_id: categoryID,
    };

    if (ip) {
      params.ip = ip;
    } else if (zipCode) {
      params.zip_code = zipCode;
    }
    const response = await axios.get(BASE_URL, {
      params,
      headers: {
        accept: "application/json",
      },
    });

    return response.data;
  } catch (error: any) {
    const message =
      error?.response?.data ??
      error?.message ??
      "An unknown error occurred while fetching Thumbtack businesses.";
    console.error("Error searching Thumbtack businesses:", message);
    throw new Error(
      `Request failed with status ${error?.response?.status}: ${JSON.stringify(
        message
      )}`
    );
  }
};

export const getUserIp = async (): Promise<string> => {
  try {
    const response = await axios.get<IpifyResponse>(IPIFY_URL, {
      headers: {
        accept: "application/json",
      },
    });
    return response.data.ip;
  } catch (error: any) {
    console.error("Error fetching user IP:", error?.message || error);
    throw new Error("Unable to fetch user IP address.");
  }
};
