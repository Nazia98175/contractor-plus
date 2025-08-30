import PrivacyPolicy from "@/components/privacy-policy/PrivacyPolicy";

export const metadata = {
  title: "privacy-policy",
  description: "privacy-policy",
  keywords: ["privacy-policy | Contractor+"],
  // openGraph: {
  //   images: [
  //     {
  //       url: "/images/webp/opportunity-tracker-og.webp",
  //       width: 1920,
  //       height: 630,
  //       alt: "opportunity-tracker-og",
  //     },
  //   ],
  // },
  alternates: {
    canonical: "https://v2site.contractorplus.app/privacy-policy",
  },
};
const PrivacyPolicyPage = () => {
  return <PrivacyPolicy />;
};

export default PrivacyPolicyPage;
