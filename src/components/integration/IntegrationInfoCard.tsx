import { IntegrationItem } from "@/types";
import Image from "next/image";
import { RightLinkIcon } from "../common/Icons";
import Link from "next/link";

interface IntegrationInfoCardProps {
  obj: IntegrationItem;
}

const IntegrationInfoCard: React.FC<IntegrationInfoCardProps> = ({ obj }) => {
  if (!obj) {
    return "Not Found";
  }
  const getCategoryColor = (category: string) => {
    switch (category.toLowerCase()) {
      case "productivity":
        return "text-expressionismGreen";
      case "payments":
        return "text-amberOrange";
      case "calendar":
        return "text-softAzure";
      case "accounting":
        return "text-decemberSky";
      case "leads":
        return "text-coralRed";
      case "other":
        return "text-expressionismGreen";
    }
  };
  return (
    <Link
      href={`/integrations/${obj.id}`}
      className="bg-charcoalBlue card-shine rounded-lg p-5 md:p-2.5"
    >
      <div className="flex items-center gap-4">
        <Image
          src={obj.logo}
          width={60}
          height={60}
          className="h-auto w-12 object-center xl:w-[60px]"
          alt={`${obj.name}' logo`}
        />
        <h4 className="text-xl font-semibold text-white xl:text-2xl">
          {obj.name}
        </h4>
      </div>
      <div className="mt-[15px] mb-3 flex items-center justify-between">
        <div className="flex items-center gap-1">
          {obj.categories.map((category, idx) => (
            <p
              key={idx}
              className={`${getCategoryColor(category)} bg-jetBlack flex h-[30px] items-center justify-center rounded-full px-2 py-1.5 text-sm font-semibold capitalize`}
            >
              {category}
            </p>
          ))}
        </div>
        <button>
          <RightLinkIcon />
        </button>
      </div>
      <p className="text-flintstone">{obj.description}</p>
    </Link>
  );
};

export default IntegrationInfoCard;
