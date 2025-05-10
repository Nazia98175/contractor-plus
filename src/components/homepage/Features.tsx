"use client";
import React from "react";

const featureData = [
  {
    title: "User-friendly mobile app",
    desc: "Contractor+ is user-friendly on desktop and mobile, so your team will actually use it.",
    img: "/images/webp/user-friendly.webp",
  },
  {
    title: "Communication inbox",
    desc: "Call, text, email, and listen to voicemail for every lead, client, tenant, vendor, and sub—all in one spot.",
    img: "/images/webp/communication-box.webp",
  },
  {
    title: "Multiple-workspaces",
    desc: "Toggle between workspaces for different locations, teams, or businesses.",
    img: "/images/webp/workspace.webp",
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

            <img
              src={obj.img}
              alt={obj.title}
              className="object-cover h-[187px]"
            />
          </article>
        ))}
      </div>
    </section>
  );
};

export default Features;
