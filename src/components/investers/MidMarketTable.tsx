import React from "react";
import MidMarketDesktopCard from "./MidMarketDesktopCard";
import MidMarketMobileCard from "./MidMarketMobileCard";

export type IconType = "available" | "cross";

export interface FeatureItem {
  contractor: {
    icon: IconType;
    title: string;
    desc: string;
  };
  midMarket: {
    icon: IconType;
    desc: string;
  };
  enterprise: {
    icon: IconType;
    desc: string;
  };
}

const MidMarketTable: React.FC = () => {
  const features: FeatureItem[] = [
    {
      contractor: {
        icon: "available",
        title: "One connected platform",
        desc: "CRM, estimates, payments, project management, business phone, job costing, agreements & more",
      },
      midMarket: {
        icon: "cross",
        desc: "Partial tools cobbled together. Still need 3–5 other apps connected by middleware or time consuming integrations to run your business.",
      },
      enterprise: {
        icon: "cross",
        desc: "Partial tools cobbled together. Still need 3–5 other apps connected by middleware or time consuming integrations to run your business.",
      },
    },
    {
      contractor: {
        icon: "available",
        title: "Built mobile-first",
        desc: "Field teams actually use it.",
      },
      midMarket: {
        icon: "cross",
        desc: "Basic mobile apps that field teams don’t want to use.",
      },
      enterprise: {
        icon: "cross",
        desc: "Overbuilt for desktop, clunky in the field. Not intuitive for techs or crews.",
      },
    },
    {
      contractor: {
        icon: "available",
        title: "Onboard quickly",
        desc: "No learning curve. Crews and office up and running on Day 1.",
      },
      midMarket: {
        icon: "cross",
        desc: "Easy to start, but hits a ceiling fast. Growth means switching later.",
      },
      enterprise: {
        icon: "cross",
        desc: "Months-long onboarding, training required. Complex setups kill momentum.",
      },
    },
    {
      contractor: {
        icon: "available",
        title: "Instant Sync",
        desc: "Between office, field, and customer. True command center.",
      },
      midMarket: {
        icon: "cross",
        desc: "Data lives in silos. No real-time visibility or job-level margin tracking.",
      },
      enterprise: {
        icon: "cross",
        desc: "Data lives in silos. No real-time visibility or job-level margin tracking.",
      },
    },
    {
      contractor: {
        icon: "available",
        title: "Full access is $98/month",
        desc: "Which includes 2 users. Low additional fee per added user. No gatekeeping features.",
      },
      midMarket: {
        icon: "cross",
        desc: "Best features are hidden behind expensive plans. Less expensive team plans are very basic.",
      },
      enterprise: {
        icon: "cross",
        desc: "Sticker shock. High per-user fees, contracts, surprise add-ons. Cost prohibitive for the lower and middle market.",
      },
    },
  ];

  // ✅ Shared icon renderer
  const renderIcon = (type: IconType): React.ReactElement => {
    if (type === "available") {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8.12876 0.952726C7.47684 0.402476 6.52316 0.402477 5.87124 0.952726L5.27753 1.45385C5.00044 1.68772 4.65755 1.82976 4.29625 1.86031L3.52208 1.92578C2.67202 1.99767 1.99767 2.67202 1.92578 3.52208L1.86031 4.29625C1.82976 4.65755 1.68772 5.00044 1.45385 5.27754L0.952726 5.87124C0.402476 6.52316 0.402477 7.47684 0.952726 8.12876L1.45385 8.72246C1.68772 8.99955 1.82976 9.34246 1.86031 9.70375L1.92578 10.4779C1.99767 11.328 2.67202 12.0024 3.52208 12.0742L4.29625 12.1397C4.65755 12.1703 5.00044 12.3123 5.27754 12.5462L5.87124 13.0473C6.52316 13.5975 7.47684 13.5975 8.12876 13.0473L8.72246 12.5462C8.99955 12.3123 9.34246 12.1703 9.70375 12.1397L10.4779 12.0742C11.328 12.0024 12.0024 11.328 12.0742 10.4779L12.1397 9.70375C12.1703 9.34246 12.3123 8.99955 12.5462 8.72246L13.0473 8.12876C13.5975 7.47684 13.5975 6.52316 13.0473 5.87124L12.5462 5.27753C12.3123 5.00044 12.1703 4.65755 12.1397 4.29625L12.0742 3.52208C12.0024 2.67202 11.328 1.99767 10.4779 1.92578L9.70375 1.86031C9.34246 1.82976 8.99955 1.68772 8.72246 1.45385L8.12876 0.952726ZM10.1822 5.80688C10.4898 5.49935 10.4898 5.00073 10.1822 4.69319C9.87472 4.38565 9.37606 4.38565 9.0685 4.69319L6.12538 7.63634L4.93223 6.44319C4.62469 6.13565 4.12607 6.13565 3.81853 6.44319C3.51099 6.75073 3.51099 7.24935 3.81853 7.55688L5.56853 9.30685C5.87607 9.61441 6.37469 9.61441 6.68223 9.30685L10.1822 5.80688Z"
            fill="#5ED5A8"
          />
        </svg>
      );
    }

    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
      >
        <path
          d="M5.87085 0.952881C6.52276 0.402641 7.47674 0.402658 8.12866 0.952881L8.72241 1.45386C8.9995 1.68773 9.34257 1.82955 9.70386 1.86011L10.4783 1.92554C11.3282 1.99754 12.0021 2.67224 12.074 3.52222L12.1394 4.29663C12.1701 4.65779 12.3128 5.00011 12.5466 5.2771L13.0476 5.87085C13.5977 6.5227 13.5976 7.47675 13.0476 8.12866L12.5466 8.72241C12.3127 8.9995 12.17 9.34257 12.1394 9.70386L12.074 10.4783C12.002 11.3281 11.3281 12.002 10.4783 12.074L9.70386 12.1394C9.34257 12.17 8.9995 12.3127 8.72241 12.5466L8.12866 13.0476C7.47675 13.5976 6.5227 13.5977 5.87085 13.0476L5.2771 12.5466C5.0001 12.3129 4.65779 12.1701 4.29663 12.1394L3.52222 12.074C2.67224 12.0021 1.99754 11.3282 1.92554 10.4783L1.86011 9.70386C1.82955 9.34257 1.68773 8.9995 1.45386 8.72241L0.952881 8.12866C0.402659 7.47674 0.40264 6.52276 0.952881 5.87085L1.45386 5.2771C1.68752 5.00014 1.8295 4.65769 1.86011 4.29663L1.92554 3.52222C1.99743 2.67215 2.67215 1.99743 3.52222 1.92554L4.29663 1.86011C4.65769 1.8295 5.00015 1.68752 5.2771 1.45386L5.87085 0.952881ZM9.82007 3.65015C9.59623 3.4347 9.25111 3.45387 9.04956 3.69312L6.99976 6.12866L4.95093 3.69312C4.74939 3.4538 4.40428 3.43468 4.18042 3.65015C3.9568 3.86567 3.93904 4.23402 4.14038 4.47339L6.26636 6.99976L4.14038 9.52612C3.93892 9.76551 3.9567 10.1348 4.18042 10.3503C4.40426 10.5658 4.74938 10.5466 4.95093 10.3074L6.99976 7.87183L9.04956 10.3074C9.25112 10.5465 9.59625 10.5658 9.82007 10.3503C10.0437 10.1348 10.0615 9.76549 9.86011 9.52612L7.73413 6.99976L9.86011 4.47339C10.0614 4.23405 10.0436 3.86566 9.82007 3.65015Z"
          fill="#E74C3C"
        />
      </svg>
    );
  };

  return (
    <div className="px-4 py-10">
      {/* Mobile View */}
      <div className="shadow-3xl relative z-40 mt-2 block overflow-hidden rounded-[6px] border border-[#3F464B] md:hidden">
        <div className="grid grid-cols-3 pb-3">
          <div className="flex items-center justify-center p-2 font-semibold text-white">
            Contractor+
          </div>
          <div className="border-x border-[#3F464B] p-2 text-xs font-semibold text-[#656C73]">
            <h3 className="pb-1">Mid-Market</h3>
            <p>(Jobber, HCP, Joist)</p>
          </div>
          <div className="p-2 text-xs font-semibold text-[#656C73]">
            <h3 className="pb-1">Enterprise</h3>
            <p>ServiceTitan, Procore, etc.</p>
          </div>
        </div>
        {features.map((item) => (
          <MidMarketMobileCard
            key={item.contractor.title}
            item={item}
            renderIcon={renderIcon}
          />
        ))}
      </div>

      {/* Desktop View */}
      <div className="relative z-40 mx-auto mt-12 hidden max-w-[1029px] overflow-x-auto rounded-xl border border-[#3F464B] md:block lg:mt-[51px]">
        <table className="min-w-full text-left">
          <thead>
            <tr className="font-myriad divide-x divide-[#3F464B] text-white md:text-lg lg:text-xl">
              <th className="w-1/3 p-5 text-center text-[28px] font-semibold text-[#D2D4D6]">
                Contractor+
              </th>
              <th className="w-1/3 p-5 text-center text-[28px] font-bold text-[#656C73]">
                <span>Mid-Market</span>
                <p className="pt-3 text-base font-semibold">
                  (Jobber, HCP, Joist)
                </p>
              </th>
              <th className="w-1/3 p-5 text-center text-[28px] font-bold text-[#656C73]">
                <span>Enterprise</span>
                <p className="pt-3 text-base font-semibold">
                  ServiceTitan, Procore, etc.
                </p>
              </th>
            </tr>
          </thead>
          <tbody>
            {features.map((item) => (
              <MidMarketDesktopCard
                key={item.contractor.title}
                item={item}
                renderIcon={renderIcon}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MidMarketTable;
