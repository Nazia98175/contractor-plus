"use client";
import { useState } from "react";
import CustomSelect from "../blog/CustomSelect";
import { integrationTypes } from "../common/Helper";
import { SearchIcon } from "../common/Icons";
import { integrations } from "../common/Utils";
import IntegrationInfoCard from "./IntegrationInfoCard";

const IntegrationCards = () => {
  const [searchTerms, setSearchTerms] = useState<string>("");
  const filteredIntegrations = integrations.filter((integration) =>
    integration.name.toLowerCase().includes(searchTerms.toLowerCase()),
  );

  return (
    <section className="relative z-40 space-y-12 pt-20 md:space-y-14 xl:space-y-[62px]">
      <div className="font-myriad bg-rgba15 relative z-30 mx-auto flex w-full max-w-[488px] flex-col-reverse items-center justify-center gap-2 rounded-lg p-2.5 backdrop-blur-[42px] sm:flex-row">
        <div className="flex w-full items-center gap-1.5">
          <div className="border-cyanBlue flex h-10 w-full items-center rounded-lg border pl-3.5">
            <SearchIcon />
            <input
              type="text"
              autoFocus
              placeholder="Search Integrations"
              className="text-decemberSky placeholder:text-staleGray w-full px-3 tracking-[0.1px] focus:outline-none"
              value={searchTerms}
              onChange={(e) => setSearchTerms(e.target.value)}
            />
          </div>
          <button className="bg-romanRed flex h-10 w-10 max-w-10 min-w-10 items-center justify-center rounded-lg duration-300 hover:opacity-80 md:hidden">
            <SearchIcon color="#fff" />
          </button>
        </div>

        {/* <CustomSelect
          options={integrationTypes}
          value={selectedValue}
          placeholder="All Integrations"
          onChange={(option) => setSelectedValue(option?.value || "")}
          className="sm:max-w-[294px]"
        /> */}
        {/* <button className="bg-romanRed hidden h-10 w-10 max-w-10 min-w-10 items-center justify-center rounded-lg duration-300 hover:opacity-80 md:flex">
          <SearchIcon color="#fff" />
        </button> */}
      </div>
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 p-4 md:grid-cols-2 md:gap-4 lg:grid-cols-3 xl:gap-8 xl:p-8">
        {filteredIntegrations.length > 0 ? (
          filteredIntegrations.map((integration, index) => (
            <IntegrationInfoCard obj={integration} key={index} />
          ))
        ) : (
          <div className="col-span-4 w-full text-center text-xl font-semibold text-white xl:text-2xl">
            <h4>{searchTerms} Integrations not found</h4>
          </div>
        )}
      </div>
    </section>
  );
};

export default IntegrationCards;
