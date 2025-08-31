import { ProjectDetail } from "@/types/projectDetail";

interface Material {
  name: string;
  lowPrice: number;
  highPrice: number;
  unit: string;
  quantity: number;
  enabled: boolean;
  lowesUrl?: string;
  lowesPrice?: number;
}

interface ProjectData {
  name: string;
  slug: string;
  metaTitle: string;
  metaDescription: string;
  materials: Material[];
  laborRate: number;
  laborHours: number;
  laborUnit: string;
  inputField: {
    name: string;
    unit: string;
    defaultValue: number;
  };
  category: string;
}

export const generateProjectData = (
  slug: string,
  projectValues?: ProjectDetail,
  location: string = "your location"
): ProjectData | null => {
  if (!projectValues || !projectValues.estimate) return null;

  const name = slug.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase());

  const estimateKey = Object.keys(projectValues.estimate)[0];
  const estimate = projectValues.estimate[estimateKey];

  if (!estimate) return null;

  return {
    name,
    slug,
    metaTitle: `Cost to ${name} in ${location} in 2025 | Contractor+`,
    metaDescription: `See real costs to ${name.toLowerCase()} in ${location}. Compare labor and material pricing. Built for contractors. One click cost estimates with local pricing. Get a free quote.`,
    materials: estimate.materials,
    laborRate: 0,
    laborHours: estimate.laborHours,
    laborUnit: estimate.laborUnit,
    inputField: estimate.inputField,
    category: estimate.category,
  };
};
