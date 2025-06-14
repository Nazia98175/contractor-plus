import { PlusIcon } from "./Icons";

const AnimationHeader = () => {
  return (
    <div className="mx-auto max-w-[873px] p-3 sm:p-[22px] mt-11 sm:mt-[133px]">
      <h3 className="sub-heading text-secondary mb-1 text-center font-semibold">
        The contractors pulling ahead aren’t grinding harder.
      </h3>
      <h6 className="text-wallStreet text-center text-sm lg:text-lg leading-[130%] xl:text-[22px]">
        They’ve{" "}
        <span className="text-decemberSky font-medium">
          {" "}
          rebuilt the back end,{" "}
        </span>{" "}
        because it’s the only way forward.
      </h6>
      <span className="flex justify-center mt-[18px]">
        <PlusIcon />
      </span>
    </div>
  );
};

export default AnimationHeader;
