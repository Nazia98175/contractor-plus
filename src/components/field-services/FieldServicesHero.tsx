import React from "react";
import {
  ArrowIcon,
  HeroAppStoreIcon,
  HeroPlayStoreIcon,
} from "../common/Icons";
import Button from "../common/Button";
import CardRequiredButton from "../common/CardRequiredButton";

const FieldServicesHero = () => {
  return (
    <section>
      <div className="main-container 1xl:pb-[150px] relative z-20 pt-[393px] pb-11 sm:pb-16 md:pt-[110px] md:pb-20 lg:pb-[100px] xl:pt-[134px] xl:pb-[120px]">
        <div className="w-full max-w-[732px]">
          <div className="w-fit rounded-md bg-[linear-gradient(90deg,_rgba(255,163,163,1)_0%,_rgba(255,163,163,0.59)_8%,_rgba(255,163,163,0)_80%)] p-[1px]">
            <div className="font-jakarta rounded-md bg-[#333434] px-3 py-1 text-xs font-semibold tracking-[-0.24px]">
              <span className="text-secondary">
                Field Service Management Software
              </span>
            </div>
          </div>
          <h3 className="main-heading gradient-white sm:text-white">
            One command center to visualize and run your entire field operation
          </h3>
          <p className="hero-description mt-[6px] mb-4 sm:my-[26px]">
            Contractor+ brings job scheduling, dispatch, crew visibility, and
            communication into one live hub for office & field teams.
          </p>
          <div className="flex w-full flex-col-reverse items-center gap-2.5 sm:flex-row">
            <div className="flex items-center gap-2.5">
              <button>
                <HeroPlayStoreIcon />
              </button>
              <button>
                <HeroAppStoreIcon />
              </button>
            </div>
            <div className="flex w-full flex-col items-center justify-center gap-[6px] sm:w-fit">
              <Button variant="primary">
                <span className="hidden sm:flex">Get started FREE</span>
                <span className="flex sm:hidden">Download FREE App</span>
                <ArrowIcon fill="white" className="hidden sm:block" />
              </Button>
              <CardRequiredButton />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FieldServicesHero;
