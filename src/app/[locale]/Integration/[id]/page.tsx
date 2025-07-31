import { integrations } from "@/components/common/Utils";
import IntegrationDetail from "@/components/integration-details/IntegrationDetail";
import IntegrationDetailHero from "@/components/integration-details/IntegrationDetailHero";
import { notFound } from "next/navigation";

async function getById(id: string) {
  return integrations.find((item) => item.id === id);
}

console.log("Integrations:", integrations);

interface IntegrationDetailsProps {
  params: {
    id: string;
  };
}

const IntegrationDetails = async ({ params }: IntegrationDetailsProps) => {
  const { id } = params;
  const user = await getById(id);
  if (!user) {
    return notFound();
  }
  console.log(user);

  return (
    <div className="text-4xl text-white">
      <div className="relative bg-[url('/images/png/why-contractor-hero-bg.png')] bg-contain bg-no-repeat sm:bg-cover">
        <IntegrationDetailHero user={user} />
        <IntegrationDetail />
      </div>
    </div>
  );
};

export default IntegrationDetails;
