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
      <section className="overflow-x-auto max-w-[1092px] mx-auto">
        <div className="rounded-lg overflow-auto border border-decemberSky">
          <table className="min-w-full text-left whitespace-nowrap">
            <thead>
              <tr className="md:text-lg text-base lg:text-xl font-myriad divide-x divide-decemberSky">
                <th className="p-3 lg:p-5 w-1/3 font-bold text-center text-wallStreet">
                  Compare
                </th>
                <th className="p-1 sm:p-3 lg:p-5 w-1/3 text-center font-semibold  text-wallStreet">
                  <div className="flex justify-center items-center">
                    <span className="max-w-24 min-w-20 lg:max-w-[148px]">
                      <BlackLogo />
                    </span>
                  </div>
                </th>
                <th className="p-3 lg:p-5 w-1/3 text-center font-semibold text-secondary">
                  Others
                </th>
              </tr>
            </thead>
            <tbody>
              {features.map((feature, index) => (
                <tr
                  key={index}
                  className={` border-decemberSky divide-x divide-decemberSky text-winterWay border-t font-jakarta font-semibold text-xs sm:text-sm lg:text-base`}
                >
                  <td className="lg:px-5 p-2.5 lg:py-3">{feature.name}</td>
                  <td className="lg:px-5 p-2.5 lg:py-3 ">
                    <div className="flex justify-center items-center">
                      {feature.eContractorHas ? (
                        <CheckIcon
                          width={24}
                          height={24}
                          className="max-w-5 min-w-5 md:max-w-6 md:min-w-6"
                        />
                      ) : (
                        <span className="max-w-5 min-w-5 md:max-w-6 md:min-w-6">
                          <CloseIcon />
                        </span>
                      )}
                    </div>
                  </td>
                  <td className="px-5 py-3 w-full">
                    <div className="flex items-center justify-center">
                      {feature.othersHave ? (
                        <CheckIcon
                          width={24}
                          height={24}
                          className="max-w-5 min-w-5 md:max-w-6 md:min-w-6"
                        />
                      ) : (
                        <span className="max-w-5 min-w-5 md:max-w-6 md:min-w-6">
                          <CloseIcon />
                        </span>
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
