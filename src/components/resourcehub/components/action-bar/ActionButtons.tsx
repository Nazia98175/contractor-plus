import React from "react";
import { ShareDialog } from "./ShareDialog";
import { FileSpreadsheet } from "lucide-react";
import { ShareDialogProps } from "./types";
import { useState } from "react";
import { ExportDialog } from "../export/ExportDialog";
import { Button } from "../ui/button";

type ActionButtonsProps = {
  onExport: (format: "pdf" | "excel" | "csv") => void;
  disabled: boolean;
};

export const ActionButtons = ({ onExport, disabled }: ActionButtonsProps) => {
  const [showExportDialog, setShowExportDialog] = useState(false);

  return (
    <div className="flex items-center gap-2">
      <Button
        variant="outline"
        className="flex items-center gap-2"
        disabled={disabled}
        onClick={() => setShowExportDialog(true)}
      >
        <FileSpreadsheet className="h-4 w-4" />
        <span>Export List</span>
      </Button>
      <ShareDialog disabled={disabled} />

      <ExportDialog
        open={showExportDialog}
        onOpenChange={setShowExportDialog}
        exportFormat="pdf"
        selectedItems={[]}
        onExport={onExport}
      />
    </div>
  );
};
