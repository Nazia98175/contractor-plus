import { useTranslations } from "next-intl";
import Link from "next/link";

const IndustriesDropdown = () => {
  const t = useTranslations("industries");

  const industriesLinks = t.raw("links") as {
    label: string;
    href: string;
  }[];

  return (
    <article className="flex flex-col items-start justify-between p-2 gap-3 main-container">
      <h3 className="px-3 dropdown-heading">{t("heading")}</h3>

      <ul className="grid grid-cols-4 gap-1 w-full">
        {industriesLinks.map((link, index) => (
          <li
            className="group hover:bg-superSilver duration-200 ease-linear p-[6px]"
            key={index}
          >
            <Link
              href={link.href}
              className="header-li-dropdown !font-medium group-hover:bg-lightBlack group-hover:!text-white"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </article>
  );
};

export default IndustriesDropdown;
