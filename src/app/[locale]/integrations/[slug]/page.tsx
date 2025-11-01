import CommonFormField from "@/components/common/CommonFormField";
import { integrationFaq, platforms } from "@/components/common/Helper";
import TrustBar from "@/components/common/TrustBar";
import Faq from "@/components/crmbussiness/Faq";
import IntegrationParent from "@/components/integration-details/IntegrationParent";
import { getSeoDataCommon } from "@/services/common/seoMeta";
import {
  getAllIntegration,
  getIntegrationDataBySlug,
  getIntegrationDetails,
  getIntegrationList,
} from "@/services/integation/getIntegrationData";
import { PagePromise } from "@/types";
import { generateSeoMetaData } from "@/utils/getSeoMeta";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export const dynamicParams = false;

export const revalidate = 300;

export const generateStaticParams = async () => {
  const integrations = await getAllIntegration("en", true);

  const locales = ["en", "fr", "es"];
  const params = [];

  if (Array.isArray(integrations) && integrations.length > 0) {
    for (const locale of locales) {
      for (const page of integrations) {
        params.push({
          locale,
          slug: page.slug.toString(),
        });
      }
    }
  }
  return params;
};
export async function generateMetadata({
  params,
}: {
  params: PagePromise["params"];
}): Promise<Metadata | undefined> {
  const { slug, locale } = await params;
  const page = await getSeoDataCommon(
    `integrations?locale=${locale}&filters[slug][$eq]=${slug}&populate[SeoMetaData][populate]=*`,
  );

  if (!page) notFound();

  return generateSeoMetaData({ page, slug: `/integrations/${slug}` });
}
const IntegrationDetails = async ({
  params,
}: {
  params: PagePromise["params"];
}) => {
  const { slug, locale } = await params;
  const [integrationData, integrationList, appfeatures] = await Promise.all([
    getIntegrationDataBySlug(locale, slug!),
    getIntegrationList(locale),
    getIntegrationDetails(locale),
  ]);
  if (!integrationData) return notFound();

  return (
    <main id="home-page-wrapper-2">
      <IntegrationParent
        integrationData={integrationData}
        appfeatures={appfeatures}
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
            createBtn="Get Started Free"
            mobileBtn="Download FREE App"
            ncc="No credit card required"
          />
        </div>

        <TrustBar platforms={platforms} className="pb-16 sm:pb-10" />
      </div>
    </main>
  );
};
export default IntegrationDetails;
