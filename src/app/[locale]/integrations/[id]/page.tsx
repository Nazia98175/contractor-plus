import CommonFormField from "@/components/common/CommonFormField";
import { platforms } from "@/components/common/Helper";
import TrustBar from "@/components/common/TrustBar";
import Faq from "@/components/crmbussiness/Faq";
import IntegrationDetail from "@/components/integration-details/IntegrationDetail";
import IntegrationDetailHero from "@/components/integration-details/IntegrationDetailHero";
import {
  getAllIntegration,
  getIntegrationDataById,
  getIntegrationDetails,
  getIntegrationList,
} from "@/services/integation/getIntegrationData";
import { notFound } from "next/navigation";

export const metadata = {
  title: "Material Trends: Track Prices & Shortages of Different Industries",
  description:
    "Get updates on material trends, pricing shifts, and supply chain alerts affecting contractors this year.",
};
export const generateStaticParams = async () => {
  const integrations = await getAllIntegration("en");
  return integrations.map((data: { id: number }) => ({
    locale: "en",
    slug: data.id.toString(),
  }));
};
const IntegrationDetails = async ({
  params,
}: {
  params: Promise<{ id: string; locale: string }>;
}) => {
  const { id, locale } = await params;
  const [integrationData, integrationList, integrationDetails] =
    await Promise.all([
      getIntegrationDataById(locale, id),
      getIntegrationList(locale),
      getIntegrationDetails(locale),
    ]);
  if (!integrationData) return notFound();

  return (
    <main id="home-page-wrapper-2">
      <div
        id="home-page-view-port-screen-fetures"
        className="relative bg-[url('/images/webp/integration-detail-bg.webp')] bg-contain bg-no-repeat sm:bg-cover"
      >
        <IntegrationDetailHero integration={integrationData} />
      </div>
      <IntegrationDetail
        integration={integrationData}
        integrationDetail={integrationDetails}
      />
      <div className="relative overflow-hidden">
        <Faq
          mainContainerclassName="pb-16 lg:pb-24 xl:pb-[118px] z-20 px-2"
          faq={{
            title: `${integrationData?.Faqs?.title ?? ""}`,
            subTitle: `${integrationData?.Faqs?.subTitle ?? ""}`,
            faq: integrationData?.Faqs?.faq ?? [],
          }}
          classNameAnswer="pt-1"
          TittleClassName="w-fit mx-auto opacity-90 sm:opacity-100 !leading-[130%]"
          variant="default"
          headingVariant="default"
        />
      </div>
      <div className="relative overflow-x-hidden">
        <div className="px-2 pb-12 lg:pb-9 xl:pb-20">
          <CommonFormField
            variantBtn="primary"
            variant="default"
            title={integrationList?.emailSignupSection?.title ?? ""}
            subTitle={integrationList?.emailSignupSection?.subTitle ?? ""}
            placeholder={integrationList?.emailSignupSection?.placeholder ?? ""}
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
