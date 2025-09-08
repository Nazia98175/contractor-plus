import ProjectCostCalculator from "@/components/resourcehub/pages/construction-costs/ProjectCostCalculator";

export default async function Page({
  params,
}: {
  params: Promise<{ projectSlug: string; location: string }>;
}) {
  const result = await params; // Wait for the promise to resolve
  return <ProjectCostCalculator params={result} />;
}
