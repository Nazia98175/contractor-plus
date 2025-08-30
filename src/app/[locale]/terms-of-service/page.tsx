import TermsOfService from "@/components/terms-of-service/TermsOfService";
export const metadata = {
  title: "Terms of Service: Contractor+ User Agreement",
  description:
    "Review the official terms, conditions, and user responsibilities for the Contractor+ platform.",
  keywords: ["Opportunity Tracker for Contractors | Contractor+"],
  openGraph: {
    images: [
      {
        url: "/images/webp/terms-of-service-og.webp",
        width: 1920,
        height: 630,
        alt: "terms-of-service-og",
      },
    ],
  },
  alternates: {
    canonical: "https://v2site.contractorplus.app/terms-of-service",
  },
};
const TermsOfServicePage = () => {
  return <TermsOfService />;
};

export default TermsOfServicePage;
