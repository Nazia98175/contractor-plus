import CommonFormField from "@/components/common/CommonFormField";
import { integrationFaq, platforms } from "@/components/common/Helper";
import TrustBar from "@/components/common/TrustBar";
import Faq from "@/components/crmbussiness/Faq";
import IntegrationDetail from "@/components/integration-details/IntegrationDetail";
import IntegrationDetailHero from "@/components/integration-details/IntegrationDetailHero";
import IntegrationParent from "@/components/integration-details/IntegrationParent";
import {
  getAllIntegration,
  getIntegrationDataBySlug,
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
  return integrations.map((data: { slug: string }) => ({
    locale: "en",
    slug: data?.slug?.toString(),
  }));
};
const IntegrationDetails = async ({
  params,
}: {
  params: Promise<{ slug: string; locale: string }>;
}) => {
  const { slug, locale } = await params;
  const [integrationData, integrationList, integrationDetails] =
    await Promise.all([
      getIntegrationDataBySlug(locale, slug),
      getIntegrationList(locale),
      getIntegrationDetails(locale),
    ]);
  if (!integrationData) return notFound();

  return (
    <main id="home-page-wrapper-2">
      <IntegrationParent
        integrationData={integrationData}
        integrationDetails={integrationDetails}
      />
      <div className="relative overflow-hidden">
        <Faq
          mainContainerclassName="pb-16 lg:pb-24 xl:pb-[118px] z-20 px-2"
          faq={{
            title: `${integrationData?.Faqs?.title ?? " What you may want to know"}`,
            subTitle: `${integrationData?.Faqs?.subTitle ?? "Frequently asked questions"}`,
            faq: integrationData?.Faqs?.faq?.length
              ? integrationData.Faqs.faq
              : integrationFaq.faq,
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
