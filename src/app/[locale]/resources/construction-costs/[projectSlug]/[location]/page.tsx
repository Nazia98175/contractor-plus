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
      const { metaTitle, metaDescription, name, ogImage } = data;

      const title = metaTitle ?? "Construction Cost Calculator";
      const description =
        metaDescription ?? "Calculate construction costs for your projects";

      const url = `https://v2site.contractorplus.app/resources/${projectSlug}/${location}`;

      return {
        title,
        description,
        keywords: data
          ? `${name.toLowerCase()},construction costs, contractor pricing`
          : "Construction,Contractor pricing ,Estimate",
        openGraph: {
          title,
          description,
          url,
          type: "website",
          images: [
            {
              url: `${ogImage ?? ""}`,
              width: 1200,
              height: 630,
              alt: title,
            },
          ],
        },
        twitter: {
          card: "summary_large_image",
          title,
          description,
          images: [`${ogImage ?? ""}`],
        },
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
  const result = await params;
  return <ProjectCostCalculator params={result} />;
}
