import { PlusIcon } from "./Icons";

const BloodEnough = () => {
  return (
    <div className="mx-auto max-w-[873px] p-3 sm:p-[22px] mb-10 sm:mb-24">
      <h3 className="sub-heading text-secondary mb-1 text-center font-semibold">
        Blood, sweat, and tears used to be enough
      </h3>
      <h6 className="text-wallStreet text-center text-sm lg:text-lg leading-[130%] xl:text-[22px]">
        Up at 4am to be on the job site. Hours of hard labor into the evening
        hours. A new software tool to solve one problem… a new workaround for
        another. …It all used to feel like momentum.
        <span className="text-decemberSky font-medium">
          {" "}But now? It’s keeping you stuck.
        </span>
      </h6>
      <span className="mt-[18px] flex justify-center">
        <PlusIcon />
      </span>
    </div>
  );
};

export default BloodEnough;
