import SectionEvents from "@/components/eventsdirectory/SectionEvents";
import { redirect } from "next/navigation";

const page = async ({ params }: { params: Promise<{ sectionId: string }> }) => {
  const { sectionId } = await params;

  const arr = ["conference-events", "upcoming-events", "all-events"];
  if (!arr.includes(sectionId)) {
    redirect("/events-directory");
  }
  return (
    <>
      <SectionEvents params={sectionId} />
    </>
  );
};

export default page;
