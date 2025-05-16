import { CheckIcon, CloseIcon } from "../common/Icons";

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
    <section className="bg-white p-10 min-w-[550px] overflow-auto">
      <div className="w-full border border-decemberSky max-w-[1092px] px-4 xl:px-0 mx-auto rounded-lg shadow-sm mb-8 overflow-auto">
        <table className="min-w-full text-left border-collapse whitespace-nowrap">
          <thead>
            <tr className="bg-gray-50 text-xl border-b border-decemberSky">
              <th className="p-4 w-1/3 font-bold text-center text-wallStreet font-myriad">
                Feature
              </th>
              <th className="p-4 w-1/3 text-center font-semibold text-wallStreet">
                eContractor
              </th>
              <th className="p-4 w-1/3 text-center font-semibold text-wallStreet">
                Others
              </th>
            </tr>
          </thead>
          <tbody>
            {features.map((feature, index) => (
              <tr key={index} className="border-b border-decemberSky">
                <td className="p-4 text-wallStreet">{feature.name}</td>
                <td className="p-4 text-center flex w-full justify-center">
                  {feature.eContractorHas ? (
                    <CheckIcon className="w-5 h-5" />
                  ) : (
                    <CloseIcon />
                  )}
                </td>
                <td className="p-4 text-center w-full">
                  {feature.othersHave ? (
                    <CheckIcon className="w-5 h-5" />
                  ) : (
                    <CloseIcon />
                  )}
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
