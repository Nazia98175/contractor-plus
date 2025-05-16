import React from "react";

const features = [
  "Built-In Phone & IVR",
  "Property Profiles",
  "Mobile–First",
  "AI Summaries & Sentiment Analysis",
  "Workspace Toggle",
  "Live Camera Feeds",
  "Communication Timeline",
  "Activity–Based Automation",
  "Built–In Contracts & eSig",
];

const contractorPlusFeatures = [
  true,
  true,
  true,
  true,
  true,
  true,
  true,
  true,
  true,
];
const othersFeatures = [
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
];
const KindAdorable = () => {
  return (
    <section className="bg-white text-center px-4 py-12 sm:px-6 lg:px-16">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900">
        <span className="text-red-600 font-bold">What the others</span> call a
        CRM is kind of adorable
      </h2>
      <p className="mt-2 text-gray-500 text-sm md:text-base">
        Not all platforms are built to run a real business
      </p>

      <div className="mt-10 overflow-x-auto">
        <table className="w-full border-collapse shadow-sm text-sm md:text-base">
          <thead>
            <tr className="bg-gray-100">
              <th className="text-left p-3 font-semibold text-gray-700">
                Compare
              </th>
              <th className="p-3 font-semibold text-gray-700">
                Contractor Plus
              </th>
              <th className="p-3 font-semibold text-gray-700">Others</th>
            </tr>
          </thead>
          <tbody>
            {features.map((feature, index) => (
              <tr key={index} className="border-t">
                <td className="text-left px-3 py-3 text-gray-700">{feature}</td>
                <td className="text-green-600 text-center">
                  {contractorPlusFeatures[index] ? "✔️" : "❌"}
                </td>
                <td className="text-red-600 text-center">
                  {othersFeatures[index] ? "✔️" : "❌"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default KindAdorable;
