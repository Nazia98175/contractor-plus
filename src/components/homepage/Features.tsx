"use client";
import React from "react";

const featureData = [
  {
    title: "User-friendly mobile app",
    desc: "Contractor+ is user-friendly on desktop and mobile, so your team will actually use it.",
  },
  {
    title: "Communication inbox",
    desc: "Call, text, email, and listen to voicemail for every lead, client, tenant, vendor, and sub—all in one spot.",
  },
  {
    title: "Multiple-workspaces",
    desc: "Toggle between workspaces for different locations, teams, or businesses.",
  },
];

const Features = () => {
  return (
    <section className="pt-12 pb-10 main-container">
      {/* Grid for larger screens (hidden on mobile) */}
      <div className="hidden lg:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {featureData.map((obj, index) => (
          <article
            key={index}
            className="font-jakarta p-3 flex flex-col justify-between"
          >
            <div>
              <h4 className="text-2xl font-bold text-winterWay text-center capitalize">
                {obj.title}
              </h4>
              <p className="mt-4 paragraph-text text-wallStreet text-center mb-5">
                {obj.desc}
              </p>
            </div>
            <div className="h-[187px] rounded-[6px] bg-secondary"></div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Features;
