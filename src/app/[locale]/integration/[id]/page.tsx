import NotFound from "@/app/not-found";
import CommonFormField from "@/components/common/CommonFormField";
import { integrationfaqitems, platforms } from "@/components/common/Helper";
import TrustBar from "@/components/common/TrustBar";
import { integrations } from "@/components/common/Utils";
import Faq from "@/components/crmbussiness/Faq";
import IntegrationDetail from "@/components/integration-details/IntegrationDetail";
import IntegrationDetailHero from "@/components/integration-details/IntegrationDetailHero";
async function getById(id: string) {
  return integrations.find((item) => item.id === id);
}
export async function generateStaticParams() {
  return integrations.map((item) => ({
    id: item.id,
  }));
}
const IntegrationDetails = async ({
  params,
}: {
  params: Promise<{ id: string; locale: string }>;
}) => {
  const { id } = await params;
  const user = await getById(id);
  if (!user) return NotFound();
  return (
    <main>
      <div className="relative bg-[url('/images/webp/integration-detail-bg.webp')] bg-contain bg-no-repeat sm:bg-cover">
        <IntegrationDetailHero user={user} />
      </div>
      <IntegrationDetail />
      <Faq
        mainContainerclassName="pb-16 lg:pb-24 xl:pb-[118px] z-20 px-2"
        faq={{
          title: "What you may want to know ",
          subTitle: "Frequently asked questions",
          faq: integrationfaqitems,
        }}
        classNameAnswer="pt-1"
        TittleClassName="w-fit mx-auto opacity-90 sm:opacity-100 !leading-[130%]"
        variant="default"
        headingVariant="default"
      />
      <div className="relative overflow-x-hidden">
        <div className="px-2 pb-12 lg:pb-9 xl:pb-20">
          <CommonFormField
            variantBtn="primary"
            variant="default"
            title={"Are you ready to level up your business?"}
            subTitle={
              "Start for free. Stay for free. Upgrade to get the full operating system."
            }
            placeholder={"Your Email"}
            createBtn={"Get Started Free"}
            mobileBtn={"Download FREE App"}
            ncc={"No credit card required"}
          />
        </div>
        <TrustBar platforms={platforms} className="pb-16 sm:pb-10" />
      </div>
    </main>
  );
};
export default IntegrationDetails;
