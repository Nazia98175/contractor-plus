import React from "react";
import { ExportDialog } from "../export/ExportDialog";

interface ExportDialogContainerProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  exportFormat: "pdf" | "excel" | "csv";
  selectedItems: any[];
}

export const ExportDialogContainer: React.FC<ExportDialogContainerProps> = ({
  open,
  onOpenChange,
  exportFormat,
  selectedItems,
}) => {
  return (
    <ExportDialog
      open={open}
      onOpenChange={onOpenChange}
      exportFormat={exportFormat}
      selectedItems={selectedItems}
    />
  );
};
