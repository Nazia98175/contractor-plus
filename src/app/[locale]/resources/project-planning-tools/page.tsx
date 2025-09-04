import ProjectPlanningPage from "@/components/resourcehub/pages/ProjectPlanningPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contractor plus - Project Planning",
  description:
    "Access our collection of free tools, templates, blog posts, and podcasts designed to help contractors build better businesses.",
};
const ProjectPlanning = () => {
  return (
    <>
      <ProjectPlanningPage />
    </>
  );
};

export default ProjectPlanning;
