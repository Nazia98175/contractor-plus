import { RedClipIcon, StartIcon } from "../common/Icons";
const CrmHero = () => {
  return (
    <section className="relative overflow-visible">
      <span className="top-[112px] md:top-[-202px] right-[-194px] md:right-0 absolute pointer-events-none">
        <RedClipIcon />
      </span>
      <div className="hidden lg:block absolute top-0 left-[70px] max-w-[90px] rotate-[-45deg] w-full h-[500px] rounded-[10px] bg-athenaBlue blur-[34px] opacity-20 pointer-events-none"></div>
      <div className="max-w-[1050px] w-full mx-auto pt-[46px] sm:pt-20 lg:pt-[139px] xl:pt-[154px]">
        <div className="pt-10 max-w-[900px] mx-auto block px-5 md:hidden relative">
          <div className="switch-tool-bg h-[100px] w-full hidden md:block top-[-10px] left-0 absolute z-[-5]"></div>
          <img
            className="w-full h-full"
            src="/images/webp/crm-hero.webp"
            alt="crm hero"
          />
        </div>
        <div className="px-2">
          <h2 className="gradient-2 w-fit main-heading text-start sm:text-center">
            A{" "}
            <span className="bg-petal text-transparent bg-clip-text">
              field service CRM
            </span>{" "}
            that runs your business, not just stores contacts
          </h2>
          <p className="paragraph-text font-semibold md:font-medium text-decemberSky pt-2 sm:pt-5 text-start sm:text-center max-w-[826px] mx-auto">
            Built-in phone and SMS. AI receptionist. Property profiles. Full
            communication history. You no longer need 6 separate tools to do
            what Contractor+ CRM does in one.
          </p>
        </div>
        <div className="flex flex-wrap-reverse justify-center items-center gap-5 pt-4">
          <div className="flex gap-4 pb-5 md:pb-0 bg-black lg:bg-transparent w-full sm:w-fit justify-center">
            <div className="flex flex-col-reverse sm:flex-col gap-1">
              <img src="/images/svg/GooglePlay-Icon.svg" alt="google icon" />
              <div className="flex justify-center items-center">
                {[...Array(5)].map((_, i) => (
                  <StartIcon key={i} />
                ))}
              </div>
            </div>
            <div className="flex flex-col-reverse sm:flex-col gap-1">
              <img src="/images/svg/Apple-Icon.svg" alt="google icon" />
              <div className="flex justify-center items-center ">
                {[...Array(5)].map((_, i) => (
                  <StartIcon key={i} />
                ))}
              </div>
            </div>
          </div>
          <div className="w-full sm:w-fit px-2">
            <button className="bg-red-linear h-10 primary-btn gap-2">
              <span className="lg:block hidden">Create Free Account</span>
              <span className="lg:hidden block">Download App</span>
            </button>
            <p className="text-wallStreet font-semibold sm:text-secondary text-xs font-myriad text-center pt-2">
              No Credit Card Required
            </p>
          </div>
        </div>
        <div className="pt-12 max-w-[900px] mx-auto hidden md:block relative z-30">
          <img
            className="w-full h-full"
            src="/images/webp/crm-hero.webp"
            alt="crm hero"
          />
        </div>
      </div>
    </section>
  );
};
export default CrmHero;
