import Resource from "@/components/resourcehub/pages/Resource";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contractor plus - Resources",
  description:
    "Access our collection of free tools, templates, blog posts, and podcasts designed to help contractors build better businesses.",
};

const ResourcePage = () => {
  return (
    <>
      <Resource />
    </>
  );
};

export default ResourcePage;
