import { BlackLogo, CheckIcon, CloseIcon } from "../common/Icons";

const features = [
  { name: "Built-In Phone & IVR", eContractorHas: true, othersHave: false },
  { name: "Property Profiles", eContractorHas: true, othersHave: false },
  { name: "Mobile-First", eContractorHas: true, othersHave: false },
  {
    name: "AI Summaries & Sentiment Analysis",
    eContractorHas: true,
    othersHave: false,
  },
  { name: "Workspace Toggle", eContractorHas: true, othersHave: false },
  { name: "Live Camera Feeds", eContractorHas: true, othersHave: false },
  { name: "Communication Timeline", eContractorHas: true, othersHave: false },
  {
    name: "Activity-Based Automation",
    eContractorHas: true,
    othersHave: false,
  },
  {
    name: "Built-In Contracts & eSig",
    eContractorHas: true,
    othersHave: false,
  },
];

const KindAdorable = () => {
  return (
    <div className="bg-white p-4">
      <section className="bg-white overflow-auto max-w-[1092px] mx-auto">
        <div className="w-full border border-decemberSky rounded-lg overflow-auto no-scrollbar">
          <table className="min-w-full text-left border-collapse whitespace-nowrap">
            <thead>
              <tr className="bg-gray-50 text-xl border-b border-decemberSky  font-myriad">
                <th className="p-5 w-1/3 font-bold text-center border-r border-decemberSky text-wallStreet">
                  Feature
                </th>
                <th className="p-5 w-1/3 text-center font-semibold border-r border-decemberSky text-wallStreet">
                  <div className="flex justify-center items-center">
                    <BlackLogo />
                  </div>
                </th>
                <th className="p-5 w-1/3 text-center font-semibold text-secondary">
                  Others
                </th>
              </tr>
            </thead>
            <tbody>
              {features.map((feature, index) => (
                <tr
                  key={index}
                  className={`${
                    index === features.length - 1 ? "" : "border-b"
                  } border-decemberSky text-winterWay font-jakarta`}
                >
                  <td className="px-5 py-3 text-sm lg:text-base border-r border-decemberSky">
                    {feature.name}
                  </td>
                  <td className="px-5 py-3 flex w-full justify-center border-r border-decemberSky">
                    {feature.eContractorHas ? (
                      <CheckIcon width={25} height={25} />
                    ) : (
                      <CloseIcon />
                    )}
                  </td>
                  <td className="px-5 py-3 w-full">
                    <div className="flex justify-center items-center">
                      {feature.othersHave ? (
                        <CheckIcon width={25} height={25} />
                      ) : (
                        <CloseIcon />
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default KindAdorable;
