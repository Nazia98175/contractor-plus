import FeatureCard from "./FeatureCard";

interface Feature {
  icon: {
    url: string;
    width: number;
    height: number;
    alternativeText?: string;
    name: string;
  } | null;
  title: string;
}

interface FeaturesGridProps {
  features: Feature[];
}

const FeaturesGrid: React.FC<FeaturesGridProps> = ({ features }) => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-y-[18px]">
      {features?.map((feature, index) => (
        <FeatureCard
          key={index}
          icon={feature.icon}
          title={feature.title}
          index={index}
          totalItems={features.length}
        />
      ))}
    </div>
  );
};

export default FeaturesGrid;