import axiosInstance from "@/lib/axios";

export const getBlogsDetails = async (locale: string) => {
  try {
    const response = await axiosInstance.get(
      `blog-detail?locale=${locale}&populate=*`,
    );
    const { data } = response.data;
    if (!data) {
      return null;
    }
    return data;
  } catch (error) {
    console.error("Error fetching blogs fields:", error);
    throw new Error("Failed to fetch blogs fields");
  }
};
export const getBlogsList = async (locale: string) => {
  try {
    const response = await axiosInstance.get(
      `blog-list?locale=${locale}&populate=*`,
    );
    const { data } = response.data;
    if (!data) {
      return null;
    }
    return data;
  } catch (error) {
    console.error("Error fetching blogs fields:", error);
    throw new Error("Failed to fetch blogs fields");
  }
};

export const getAllBlogs = async (locale: string) => {
  try {
    const response = await axiosInstance.get(
      `blogs?locale=${locale}&sort=postedOn:desc&populate[blogImg][populate]=*&populate[tags][populate]=*`,
    );
    const { data } = response.data;
    if (!data) {
      return null;
    }

    return data;
  } catch (error: any) {
    console.error("Error fetching common data:", error);
    throw new Error(error);
  }
};

export const getBlogDataBySlug = async (locale: string, blogUrl: string) => {
  try {
    const response = await axiosInstance.get(
      `blogs?locale=${locale}&populate=*&filters[blogUrl][$eq]=${blogUrl}`,
    );
    const { data } = response.data;
    if (!data) {
      return null;
    }
    return data[0];
  } catch (error) {
    console.error("Error fetching blogs fields:", error);
    throw new Error("Failed to fetch blogs fields");
  }
};
