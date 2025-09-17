import PropertyProfile from "@/components/propertyprofiles/PropertyProfile";

export const metadata = {
  title: "Property Management CRM & Property Profiles | Contractor+",
  description:
    "Finally, contractor software with property workflows. See the full history of any property, including all communication, jobs, notes, and more.",
  keywords: ["property management crm"],
  openGraph: {
    images: [
      {
        url: "/images/webp/property-profiles-og.webp",
        width: 1920,
        height: 630,
        alt: "Local SEO for Contractors",
      },
    ],
  },
  alternates: {
    canonical: "https://v2site.contractorplus.app/property-profiles",
  },
};

const PropertyProfilePage = () => {
  return (
    <>
      <PropertyProfile />
    </>
  );
};

export default PropertyProfilePage;
