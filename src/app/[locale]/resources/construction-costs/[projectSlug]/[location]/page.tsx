import ProjectCostCalculator from "@/components/resourcehub/pages/construction-costs/ProjectCostCalculator";

export default async function ProjectCostCalculatorPage({
  params,
}: {
  params: { projectSlug: string; location: string };
}) {
  const result = await params;
  return <ProjectCostCalculator params={result} />;
}
