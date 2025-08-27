import { useCallback } from "react";
import { DataSourceKey } from "./DataSourceConfig";

export function useDataSourceToggle(
  selected: DataSourceKey[],
  onChange: (value: DataSourceKey[]) => void,
) {
  const handleToggle = useCallback(
    (clicked: DataSourceKey) => {
      if (selected.includes(clicked)) {
        onChange(selected.filter((v) => v !== clicked));
      } else {
        onChange([...selected, clicked]);
      }
    },
    [selected, onChange],
  );
  return handleToggle;
}
