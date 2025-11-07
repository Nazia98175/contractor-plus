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
    switch (category.toLowerCase().trim()) {
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
      case "faster payments":
        return "text-expressionismGreen";
      case "safer payments":
        return "text-amberOrange";
      default:
        return "text-expressionismGreen";
    }
  };

  return (
    <Link
      href={`/integrations/${obj.slug}`}
      className="bg-charcoalBlue rounded-lg p-5 transition-all duration-300 hover:-translate-y-1.5 hover:rounded-sm md:p-2.5"
    >
      <div className="flex items-center gap-4">
        <Image
          className="h-auto w-12 rounded-lg object-center xl:w-[60px]"
          width={60}
          height={60}
          unoptimized
          src={obj?.thumbnailImage?.url || "/placeholder.png"}
          alt={`${obj?.integrationName}' logo`}
        />
        <h4 className="text-xl font-semibold text-white capitalize xl:text-2xl">
          {obj?.integrationName}
        </h4>
      </div>
      <div className="mt-[15px] mb-3 flex items-center justify-between">
        {obj?.tags && obj?.tags?.length > 0 ? (
          <div className="flex items-center gap-1">
            {obj?.tags?.map((category) => (
              <p
                key={category.id}
                className={`${getCategoryColor(category.title)} bg-jetBlack flex h-[30px] items-center justify-center rounded-full px-2 py-1.5 text-sm font-semibold capitalize`}
              >
                {category.title}
              </p>
            ))}
          </div>
        ) : (
          <p className="bg-jetBlack text-coralRed flex h-[30px] items-center justify-center rounded-full px-2 py-1.5 text-sm font-semibold capitalize">
            No tags Found
          </p>
        )}
        <button>
          <RightLinkIcon />
        </button>
      </div>
      <p className="text-flintstone">{obj?.integrationSubTitle}</p>
    </Link>
  );
};

export default IntegrationInfoCard;
