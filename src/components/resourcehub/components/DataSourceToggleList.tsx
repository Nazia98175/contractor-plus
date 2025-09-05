import { useEffect } from "react";
import ToggleButton from "./ToggleButton";
import { DATA_SOURCE_CONFIGS, DataSourceKey } from "./DataSourceConfig";

interface DataSourceToggleListProps {
  selected: DataSourceKey[];
  onToggle: (key: DataSourceKey) => void;
}

const DataSourceToggleList = ({
  selected,
  onToggle,
}: DataSourceToggleListProps) => {
  const isContractorSelected = selected.includes("Contractor+");
  const isBLSSelected = selected.includes("BLS.gov");
  const isAverageSelected = selected.includes("Average");
  const isAverageDisabled = !isContractorSelected || !isBLSSelected;

  // ✅ Auto-deselect "Average" if either Contractor or BLS is unselected
  useEffect(() => {
    if (isAverageSelected && isAverageDisabled) {
      onToggle("Average"); // remove "Average"
    }
  }, [isContractorSelected, isBLSSelected]);

  const handleToggle = (key: DataSourceKey) => {
    if (key === "Average") {
      if (isAverageSelected) {
        onToggle(key); // always allow deselect
      } else if (!isAverageDisabled) {
        onToggle(key); // only allow select if both Contractor+BLS selected
      }
    } else {
      onToggle(key);
    }
  };

  return (
    <div className="flex flex-col space-y-3">
      {DATA_SOURCE_CONFIGS.map((config) => {
        const disabled = config.key === "Average" && isAverageDisabled;

        return (
          <ToggleButton
            key={config.key}
            isActive={selected.includes(config.key)}
            onClick={() => handleToggle(config.key)}
            icon={config.icon}
            label={config.label}
            color={config.color}
          />
        );
      })}
    </div>
  );
};

export default DataSourceToggleList;
