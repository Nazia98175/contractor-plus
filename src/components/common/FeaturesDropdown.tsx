import Link from "next/link";
import { ArrowIcon } from "./Icons";
import { featurelinks } from "./Helper";

const FeaturesDropdown = () => {
  return (
    <article className="flex flex-col justify-between p-2 gap-6">
      <div className="grid grid-cols-3 gap-6 lg:text-sm text-xs italic font-semibold text-lightBlack font-inter">
        <h3 className="px-5">Solutions</h3>
        <h4 className="px-5 ">Features</h4>
      </div>
      <ul className="grid grid-cols-3 gap-x-6 gap-y-3 w-full pb-10">
        {featurelinks.map((link, index) => (
          <li
            className="group hover:bg-superSilver duration-200 ease-linear p-[6px]"
            key={index}
          >
            <Link
              href={link.href}
              className="group group-hover:bg-lightBlack group-hover:!text-white"
            >
              <div className="flex gap-2.5 items-center">
                <span>{link.icon}</span>
                <div className="header-li-dropdown group-hover:bg-lightBlack group-hover:!text-white flex items-center gap-2.5">
                  {link.label}
                  {link.isNew && (
                    <div className="px-2.5 h-[21px] flex items-center justify-center border border-[#439777] bg-[#EFFBF6] rounded-full text-sm font-semibold font-myriad tracking-[0.4px] text-[#439777]">
                      NEW
                    </div>
                  )}
                </div>
              </div>
              <p className="text-sm font-inter text-lightBlack mt-2.5">
                {link.description}
              </p>
            </Link>
          </li>
        ))}
      </ul>
      <div className="flex items-center justify-between gap-6 p-[6px] font-inter absolute bottom-0 w-full bg-white">
        <Link className="all-features-button group" href={"/"}>
          See All Features
          <ArrowIcon />
        </Link>
        <div className="flex items-center gap-10">
          <Link className="all-features-button group" href={"/"}>
            Integrations
            <ArrowIcon />
          </Link>
          <Link className="all-features-button group" href={"/"}>
            Product Updates
            <ArrowIcon />
          </Link>
        </div>
      </div>
    </article>
  );
};

export default FeaturesDropdown;
