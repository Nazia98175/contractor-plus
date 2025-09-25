import ProjectCostCalculator from "@/components/resourcehub/pages/construction-costs/ProjectCostCalculator";
import { fetchProjectDetail } from "@/services/resource/costCalculatorService";
import { generateProjectData } from "@/utils/generateProjectData";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ projectSlug: string; location: string }>;
}): Promise<Metadata | undefined> {
  const { projectSlug, location } = await params;
  try {
    const projectValues = await fetchProjectDetail(projectSlug);
    const data = generateProjectData(projectSlug, projectValues, location);
    if (data) {
      const { metaTitle, metaDescription, name } = data;
      return {
        title: metaTitle ?? "Construction Cost Calculator",
        description:
          metaDescription ?? "Calculate construction costs for your projects",
        keywords: data
          ? `${name.toLowerCase()},construction costs, contractor pricing`
          : "Construction,Contractor pricing ,Estimate",
      };
    }
  } catch (error) {
    console.log(error);
  }
}
export default async function Page({
  params,
}: {
  params: Promise<{ projectSlug: string; location: string }>;
}) {
  const result = await params; // Wait for the promise to resolve
  return <ProjectCostCalculator params={result} />;
}
