import { PlusIcon } from "./Icons";

const VideoBottomPart = () => {
  return (
    <section className="flex flex-col gap-[154px] pt-[67px] pb-[118px] sm:pt-[94px] sm:pb-20">
      <div className="mx-auto max-w-[873px] p-3 sm:p-[22px]">
        <h3 className="sub-heading text-secondary mb-1 text-center font-semibold xl:px-44">
          Your work ethic isn’t broken… But your workflow IS.
        </h3>
        <span className="mt-[18px] flex justify-center">
          <PlusIcon />
        </span>
      </div>
      <div className="mx-auto max-w-[873px] p-3 sm:p-[22px]">
        <h3 className="sub-heading text-secondary mb-[18px] text-center font-semibold xl:px-4">
          It’s a thousand micro inefficiencies stealing time and bleeding
          margin.
        </h3>
        <span className="mt-[18px] flex justify-center">
          <PlusIcon />
        </span>
      </div>
      <div className="mx-auto max-w-[873px] p-3 sm:p-[22px]">
        <h3 className="sub-heading text-secondary mb-[18px] text-center font-semibold">
          You’re not scaling, you’re just surviving.
        </h3>
        <span className="mt-[18px] flex justify-center">
          <PlusIcon />
        </span>
      </div>
      <div className="mx-auto max-w-[873px] p-3 sm:p-[22px]">
        <h3 className="sub-heading text-secondary mb-[18px] text-center font-semibold xl:px-6">
          And in this market, if you’re not getting ahead.. you’re falling more
          and more behind.
        </h3>
        <span className="mt-[18px] flex justify-center">
          <PlusIcon />
        </span>
      </div>
    </section>
  );
};

export default VideoBottomPart;
