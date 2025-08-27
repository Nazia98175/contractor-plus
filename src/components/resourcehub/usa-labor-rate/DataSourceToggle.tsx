import React from "react";
import { ALL_DATA_SOURCES, DataSourceKey } from "./DataSourceConfig";
import DataSourceToggleList from "./DataSourceToggleList";
import { useDataSourceToggle } from "./useDataSourceToggle";

interface DataSourceToggleProps {
  value?: DataSourceKey[];
  onChange: (value: DataSourceKey[]) => void;
}

const DataSourceToggle = ({
  value = ALL_DATA_SOURCES,
  onChange,
}: DataSourceToggleProps) => {
  const handleToggle = useDataSourceToggle(value, onChange);

  return (
    <div className="flex flex-col space-y-2">
      <div className="text-sm font-medium">Data Source</div>
      <DataSourceToggleList selected={value} onToggle={handleToggle} />
    </div>
  );
};

export default DataSourceToggle;
