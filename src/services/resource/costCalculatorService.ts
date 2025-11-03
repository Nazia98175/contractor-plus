import axios from "axios";

// Define the response type
export interface Project {
  slug: string;
  projectName: string;
  estimateCategory: string;
}

export interface Material {
  name: string;
  lowPrice: number;
  highPrice: number;
  unit: string;
  quantity: number;
  enabled: boolean;
  lowesUrl?: string;
  lowesPrice?: number;
}

export interface EstimateItem {
  materials: Material[];
  laborHours: number;
  laborUnit: string;
  inputField: {
    name: string;
    unit: string;
    defaultValue: number;
  };
  category: string;
}

export interface TimelineStep {
  title: string;
  duration: string;
  description: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ProjectDetail {
  slug: string;
  projectName: string;
  laborRateIndexCategory: string;
  category_pk: string;
  ogImage: string;
  videoUrl: string;
  estimate: {
    [key: string]: EstimateItem;
  };
  timeline: {
    slug: string;
    steps: TimelineStep[];
  };
  faq: {
    slug: string;
    faqs: FAQItem[];
  };
  estimateCategory: string;
}

// Axios function to fetch projects
export const fetchProjects = async (): Promise<Project[]> => {
  const response = await axios.get<Project[]>(
    "https://reshubapi.contractorplus.app/labor-index/projects",
    {
      headers: {
        "Content-Type": "application/json",
      },
    },
  );
  return response.data;
};

export const fetchFilteredProjects = async (
  estimateCategory: string,
  projectName?: string,
): Promise<Project[]> => {
  const response = await axios.get<Project[]>(
    `https://reshubapi.contractorplus.app/labor-index/projects/filter`,
    {
      params: {
        estimateCategory,
        projectName: projectName || "", // Only send if provided
      },
    },
  );
  return response.data;
};

const BASE_URL = "https://reshubapi.contractorplus.app/labor-index/project";

export const fetchProjectDetail = async (
  slug: string,
): Promise<ProjectDetail> => {
  const response = await axios.get<ProjectDetail>(`${BASE_URL}/${slug}`);
  return response.data;
};
