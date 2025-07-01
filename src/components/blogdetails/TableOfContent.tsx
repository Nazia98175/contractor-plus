import Link from "next/link";
import BusinessFeatureCard from "./BusinessFeatureCard";

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
    <aside className="space-y-8">
      <div className="w-full overflow-hidden rounded-lg">
        <video controls className="w-full rounded-lg">
          <source src="/video/hero-video-higher.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="flex flex-col justify-between gap-8 sm:flex-row-reverse lg:flex-col">
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
        <div className="basis-[60%]">
          <BusinessFeatureCard />
        </div>
      </div>
    </aside>
  );
};

export default TableOfContent;
