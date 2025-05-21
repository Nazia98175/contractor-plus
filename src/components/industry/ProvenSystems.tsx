import React from "react";
import {
  BlogBtnIcon,
  JobFormIcon,
  ManagementIcon,
  QuickEstimateIcon,
} from "../common/Icons";
import { JSX } from "react/jsx-runtime";
type Feature = {
  title: string;
  actionText: string;
  icon: JSX.Element;
  description: string;
};
const ProvenSystems = () => {
  const features: Feature[] = [
    {
      title: "Quick Estimates",
      icon: <QuickEstimateIcon />,
      actionText: "See Feature",
      description:
        "Show customers the great service from your HVAC business with personalized quotes that highlight your brand and services!",
    },
    {
      title: "Relationship Management",
      icon: <ManagementIcon />,
      actionText: "Learn More 🔍",
      description:
        "HVAC service software provides 24/7 online access for customers to request work, approve estimates, view job details, and make payments easily.",
    },
    {
      title: "Job Forms",
      icon: <JobFormIcon />,
      actionText: "Learn More 🔍",
      description:
        "HVAC service software provides 24/7 online access for customers to request work, approve estimates, view job details, and make payments easily.",
    },
  ];

  return (
    <section className="text-center py-16 px-4 bg-white">
      <h2 className=" text-xl md:text-2xl lg:text-[32px] font-extrabold text-dark mb-2">
        Proven Systems For HVAC Businesses
      </h2>
      <p className=" text-base sm:text-xl text-winterWay max-w-[864px] mx-auto mb-10">
        HVAC businesses are demanding. Contractor+ was created to “fit the HVAC
        flow” and help you get the chaos out of your business.
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1330px] mx-auto">
        {features.concat(features).map((feature, idx) => (
          <div
            key={idx}
            className={`p-3 text-left hover:bg-dark transition-all duration-300 ease-in-out group
            
            `}
          >
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 mb-4 text-primary">
              <div className="">{feature.icon}</div>
              <div>
                <h3 className="text-dark group-hover:text-white transition-all duration-300 ease-in-out font-montserrat font-medium text-2xl">
                  {feature.title}
                </h3>
                <button className="flex items-center justify-center gap-2  text-pleasure text-base font-myriad font-semibold">
                  See Feature
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        d="M15.8334 12.4997C15.5973 12.4997 15.3992 12.4197 15.2392 12.2597C15.0792 12.0997 14.9995 11.9019 15 11.6663V4.99968H8.33338C8.09727 4.99968 7.89921 4.91968 7.73921 4.75968C7.57921 4.59968 7.49949 4.4019 7.50004 4.16634C7.50004 3.93023 7.58004 3.73218 7.74004 3.57218C7.90004 3.41218 8.09782 3.33246 8.33338 3.33301H15.8334C16.0695 3.33301 16.2675 3.41301 16.4275 3.57301C16.5875 3.73301 16.6673 3.93079 16.6667 4.16634V11.6663C16.6667 11.9025 16.5867 12.1005 16.4267 12.2605C16.2667 12.4205 16.0689 12.5002 15.8334 12.4997ZM11.6667 16.6663C11.4306 16.6663 11.2325 16.5863 11.0725 16.4263C10.9125 16.2663 10.8328 16.0686 10.8334 15.833V9.16634H4.16671C3.9306 9.16634 3.73254 9.08634 3.57254 8.92634C3.41254 8.76634 3.33282 8.56857 3.33338 8.33301C3.33338 8.0969 3.41338 7.89884 3.57338 7.73884C3.73338 7.57884 3.93115 7.49912 4.16671 7.49968H11.6667C11.9028 7.49968 12.1009 7.57968 12.2609 7.73968C12.4209 7.89968 12.5006 8.09746 12.5 8.33301V15.833C12.5 16.0691 12.42 16.2672 12.26 16.4272C12.1 16.5872 11.9023 16.6669 11.6667 16.6663Z"
                        fill="#DC1112"
                      />
                    </svg>
                  </span>
                </button>
              </div>
            </div>
            <p className="text-wallStreet group-hover:text-decemberSky text-base font-medium pt-3 transition-all duration-300 ease-in-out">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center">
        <button className="bg-pleasure h-10 text-base font-semibold font-myriad text-white rounded-lg mt-7 flex justify-center items-center gap-3 px-6">
          View All Features
          <BlogBtnIcon />
        </button>
      </div>
    </section>
  );
};

export default ProvenSystems;
