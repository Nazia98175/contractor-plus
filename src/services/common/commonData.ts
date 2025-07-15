import axiosInstance from "@/lib/axios";

export const getCommonData = async () => {
  try {
    const res = await axiosInstance.get(`common?populate=*`);
    const { data } = res.data;
    if (!data) {
      return null;
    }

    return data;
  } catch (error: any) {
    console.error("Error fetching common data:", error);
    throw new Error(error);
  }
};
