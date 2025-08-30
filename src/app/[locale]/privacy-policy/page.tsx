import PrivacyPolicy from "@/components/privacy-policy/PrivacyPolicy";

export const metadata = {
  title: "Privacy Policy: Protecting Your Data at Contractor+ ",
  description:
    "See how your information is collected, used, and protected on the Contractor+ platform.",
  keywords: ["privacy-policy | Contractor+"],
  openGraph: {
    images: [
      {
        url: "/images/webp/privacy-policy-og.webp",
        width: 1920,
        height: 630,
        alt: "privacy-policy-og",
      },
    ],
  },
  alternates: {
    canonical: "https://v2site.contractorplus.app/privacy-policy",
  },
};
const PrivacyPolicyPage = () => {
  return <PrivacyPolicy />;
};

export default PrivacyPolicyPage;
