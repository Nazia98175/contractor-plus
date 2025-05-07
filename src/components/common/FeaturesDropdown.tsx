import Link from "next/link";
import { ArrowIcon } from "./Icons";
import { featureLinkslinks } from "./Helper";

const FeaturesDropdown = () => {
  return (
    <article className="flex flex-col justify-between p-2 gap-6 grow overflow-hidden">
      <div className="grid grid-cols-3 gap-6 lg:text-sm text-xs italic font-semibold text-lightBlack font-inter">
        <h3 className="px-5">Solutions</h3>
        <h4 className="px-5 ">Features</h4>
      </div>
      <ul className="grid grid-cols-3 gap-x-6 gap-y-3 w-full overflow-auto">
        {featureLinkslinks.map((link, index) => (
          <li
            className="group hover:bg-superSilver duration-300 ease-linear p-[6px]"
            key={index}
          >
            <Link
              href={link.href}
              className="group group-hover:bg-lightBlack group-hover:!text-white"
            >
              <div className="flex gap-2.5 items-center">
                <span>{link.icon}</span>
                <span className="header-li-dropdown group-hover:bg-lightBlack group-hover:!text-white">
                  {link.label}
                </span>
              </div>
              <p className="text-sm font-inter text-lightBlack mt-2.5">
                {link.description}
              </p>
            </Link>
          </li>
        ))}
      </ul>
      <div className="flex items-center justify-between gap-6 p-[6px] font-inter">
        <Link
          className="flex items-center gap-2.5 text-xl font-medium text-lightBlack p-1"
          href={"/"}
        >
          See All Features
          <ArrowIcon />
        </Link>
        <div className="flex items-center gap-10">
          <Link
            className="flex items-center gap-2.5 text-xl font-medium text-lightBlack p-1"
            href={"/"}
          >
            Integrations
            <ArrowIcon />
          </Link>
          <Link
            className="flex items-center gap-2.5 text-xl font-medium text-lightBlack p-1"
            href={"/"}
          >
            Product Updates
            <ArrowIcon />
          </Link>
        </div>
      </div>
    </article>
  );
};

export default FeaturesDropdown;
