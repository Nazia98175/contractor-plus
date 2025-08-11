import Link from "next/link";
interface Props {
  headerSubList: any;
  closeDropdown?: () => void;
}
const IndustriesDropdown: React.FC<Props> = ({
  headerSubList,
  closeDropdown,
}) => {
  return (
    <div className="relative z-[9999] flex grow gap-6 overflow-hidden">
      <div className="no-scrollbar grid w-full grid-cols-4 gap-3 overflow-auto">
        {headerSubList?.[0]?.links?.map((link: any, index: any) => (
          <Link
            onClick={() => {
              closeDropdown?.(); // closes dropdown
              // Do not use preventDefault here!
            }}
            href={link?.linkUrl ?? "/"}
            key={index}
            className="group hover:bg-superSilver w-full cursor-pointer list-none p-[6px] text-start"
          >
            <span className="header-li-dropdown group-hover:!bg-lightBlack flex w-fit px-1 text-start group-hover:!text-white">
              {link.linkTxt}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default IndustriesDropdown;
