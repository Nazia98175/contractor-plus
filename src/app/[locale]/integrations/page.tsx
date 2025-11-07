import CommonFormField from "@/components/common/CommonFormField";
import { platforms } from "@/components/common/Helper";
import TrustBar from "@/components/common/TrustBar";
import IntegrationCards from "@/components/integration/IntegrationCards";
import IntegrationHero from "@/components/integration/IntegrationHero";
import { getSeoDataCommon } from "@/services/common/seoMeta";
import {
  getAllIntegration,
  getIntegrationList,
} from "@/services/integation/getIntegrationData";
import { generateSeoMetaData } from "@/utils/getSeoMeta";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata | undefined> {
  const { locale } = await params;
  const page = await getSeoDataCommon(
    `integration-list?locale=${locale}&populate[SeoMetaData][populate]=*`,
  );

  if (!page) notFound();

  return generateSeoMetaData({ page, slug: "/integrations" });
}
const IntegrationPage = async ({
  params,
}: {
  params: Promise<{ locale: string }>;
}) => {
  const { locale } = await params;

  const [integrations, integrationList] = await Promise.all([
    getAllIntegration(locale),
    getIntegrationList(locale),
  ]);

  return (
    <main id="home-page-wrapper-2">
      <div
        id="home-page-view-port-screen-fetures"
        className="relative opacity-0"
      >
        <div className="relative mx-auto w-full overflow-hidden px-2">
          <IntegrationHero integrationList={integrationList} />
          <IntegrationCards
            integrationList={integrationList}
            integrations={integrations}
          />
        </div>
      </div>
      <div className="no-scrollbar relative overflow-x-hidden">
        <div className="mt-[71px] px-2 pb-12 lg:pb-9 xl:pb-12">
          <CommonFormField
            variantBtn="primary"
            variant="default"
            title={integrationList?.emailSignupSection?.title ?? ""}
            subTitle={integrationList?.emailSignupSection?.subTitle ?? ""}
            placeholder={integrationList?.emailSignupSection?.placeholder ?? ""}
            createBtn="Get Started Free"
            mobileBtn="Download FREE App"
            ncc="No credit card required"
          />
        </div>
        <TrustBar platforms={platforms} className="pb-[91px] sm:pb-10" />
      </div>
    </main>
  );
};

export default IntegrationPage;
