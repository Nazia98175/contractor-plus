import Link from "next/link";

const TableOfContent = () => {
  const tableLinks = [
    {
      link: "",
      label: "Research Your Destination",
    },
    {
      link: "",
      label: "Plan Your Itinerary",
    },
    {
      link: "",
      label: "Pack Lightly and Smartly",
    },
    {
      link: "",
      label: "Immerse Yourself in the Local Culture",
    },
    {
      link: "",
      label: "Capture Memories",
    },
  ];

  return (
    <ul className="basis-[40%] space-y-2.5 xl:space-y-3.5">
      <h4 className="text-sambucus text-xl font-bold">Table of Contents</h4>
      {tableLinks.map((obj, index) => (
        <Link
          key={index}
          href={obj.link}
          className="xs-heading hover:text-sambucus text-coldGrey block font-semibold italic duration-300"
        >
          {obj.label}
        </Link>
      ))}
    </ul>
  );
};

export default TableOfContent;
