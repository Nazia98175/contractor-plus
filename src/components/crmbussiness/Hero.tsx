import React from "react";
import { BlogBtnIcon, RedClipIcon } from "../common/Icons";

const Hero = () => {
  return (
    <section className="relative overflow-hidden md:overflow-visible">
      <div className="bg-[#0C0D11] blur-[30px]  h-[100px] w-full hidden md:block bottom-[-10px] left-0 absolute z-40"></div>
      <span className="top-[112px] md:top-[-202px] right-[-194px] md:right-0 absolute pointer-events-none">
        <RedClipIcon />
      </span>
      <div className="hidden lg:block absolute top-0 left-[70px] max-w-[90px] rotate-[-45deg] w-full h-[500px] rounded-[10px] bg-athenaBlue blur-[34px] opacity-20 pointer-events-none"></div>
      <div className="max-w-[1050px] w-full mx-auto md:pb-10 pt-[46px] sm:pt-[139px] md:pt-[178px] px-2">
        <div className="pt-10 max-w-[900px] mx-auto block px-3 md:hidden relative">
          <div className="switch-tool-bg h-[100px] w-full hidden md:block top-[-10px] left-0 absolute z-[-5]"></div>
          <img
            className="w-full h-full"
            src="/images/webp/crm-hero.webp"
            alt="crm hero"
          />
        </div>
        <div>
          <h2 className="gradient-2 capitalize w-fit main-heading text-start sm:text-center">
            A{" "}
            <span className="bg-white text-transparent bg-clip-text">
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
        <div className="flex flex-wrap-reverse justify-center items-center gap-5 pt-5">
          <div className="flex gap-4 pb-5 md:pb-0 bg-black w-full sm:w-fit justify-center">
            <div className="flex flex-col-reverse sm:flex-col gap-1">
              <img src="/images/svg/GooglePlay-Icon.svg" alt="google icon" />
              <div className="flex justify-center items-center">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    width="100%"
                    height="100%"
                    className="max-w-7 md:max-w-5"
                    viewBox="0 0 23 23"
                    fill="#FFA928"
                  >
                    <path d="M9.99448 4.50789C10.3708 3.34967 12.0094 3.34967 12.3857 4.50788L13.3775 7.56031C13.5458 8.07828 14.0285 8.42898 14.5731 8.42898H17.7826C19.0005 8.42898 19.5068 9.98735 18.5216 10.7032L15.925 12.5897C15.4844 12.9098 15.3 13.4772 15.4683 13.9952L16.4601 17.0476C16.8364 18.2058 15.5108 19.169 14.5256 18.4532L11.929 16.5667C11.4884 16.2465 10.8918 16.2465 10.4512 16.5667L7.85462 18.4532C6.86938 19.169 5.54375 18.2058 5.92007 17.0476L6.91187 13.9952C7.08017 13.4772 6.8958 12.9098 6.45518 12.5897L3.85864 10.7032C2.8734 9.98735 3.37974 8.42898 4.59757 8.42898H7.80708C8.3517 8.42898 8.83439 8.07828 9.00269 7.56031L9.99448 4.50789Z" />
                  </svg>
                ))}
              </div>
            </div>
            <div className="flex flex-col-reverse sm:flex-col gap-1">
              <img src="/images/svg/Apple-Icon.svg" alt="google icon" />
              <div className="flex justify-center items-center ">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    width="100%"
                    height="100%"
                    className="max-w-7 md:max-w-5"
                    viewBox="0 0 23 23"
                    fill="#FFA928"
                  >
                    <path d="M9.99448 4.50789C10.3708 3.34967 12.0094 3.34967 12.3857 4.50788L13.3775 7.56031C13.5458 8.07828 14.0285 8.42898 14.5731 8.42898H17.7826C19.0005 8.42898 19.5068 9.98735 18.5216 10.7032L15.925 12.5897C15.4844 12.9098 15.3 13.4772 15.4683 13.9952L16.4601 17.0476C16.8364 18.2058 15.5108 19.169 14.5256 18.4532L11.929 16.5667C11.4884 16.2465 10.8918 16.2465 10.4512 16.5667L7.85462 18.4532C6.86938 19.169 5.54375 18.2058 5.92007 17.0476L6.91187 13.9952C7.08017 13.4772 6.8958 12.9098 6.45518 12.5897L3.85864 10.7032C2.8734 9.98735 3.37974 8.42898 4.59757 8.42898H7.80708C8.3517 8.42898 8.83439 8.07828 9.00269 7.56031L9.99448 4.50789Z" />
                  </svg>
                ))}
              </div>
            </div>
          </div>
          <div className="w-full sm:w-fit">
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

export default Hero;
