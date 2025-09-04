import ProjectCostCalculator from "@/components/resourcehub/pages/construction-costs/ProjectCostCalculator";

export default async function Page({
  params,
}: {
  params: { projectSlug: string; location: string };
}) {
  const result = await params;
  return <ProjectCostCalculator params={result} />;
}
