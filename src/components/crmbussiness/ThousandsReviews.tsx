import React from "react";
import CrmReviewCard from "./CrmReviewCard";

const ThousandsReviews = () => {
  return (
    <section className="py-7 bg-white ">
      <div className="main-container space-y-10 relative z-20">
        <h2 className="section-heading crm-gradient text-center max-w-[951px] mx-auto ">
          There’s a reason we have a {}
          <svg
            width="100%"
            className="max-w-16 sm:max-w-24 lg:max-w-[109px] inline"
            height="100%"
            viewBox="0 0 109 33"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.5725 32V25.28H0.712477V19.82L14.1525 0.709997H21.0825V19.82H25.9125V25.28H21.0825V32H14.5725ZM5.45848 22.172L4.24048 19.82H14.5725V5.75L16.2105 6.254L5.45848 22.172ZM31.7551 32V25.7H38.0551V32H31.7551ZM45.5816 32L58.2236 6.17H43.7756V0.709997H65.0696V6.17L52.8056 32H45.5816Z"
              fill="#56C299"
            />
            <path
              d="M81.4135 32.504L85.4035 20.198L74.9035 12.554H87.8815L91.8715 0.205999L95.9035 12.554H108.882L98.3815 20.198L102.414 32.504L91.8715 24.902L81.4135 32.504Z"
              fill="#FF9800"
            />
          </svg>
          {}
          average across thousands of reviews
        </h2>

        <CrmReviewCard />
      </div>
    </section>
  );
};

export default ThousandsReviews;
