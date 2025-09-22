import { useState } from "react";
import { Loader2, FileText, FileSpreadsheet } from "lucide-react";
import { exportMaterialList } from "@/services/resource/materialService";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "../ui/alert-dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";

interface ExportDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  exportFormat: "pdf" | "excel" | "csv";
  selectedItems: any[];
  onExport?: (format: "pdf" | "excel" | "csv") => void;
}

export const ExportDialog = ({
  open,
  onOpenChange,
  exportFormat: initialFormat,
  selectedItems,
  onExport,
}: ExportDialogProps) => {
  const [isExporting, setIsExporting] = useState(false);
  const [exportFormat, setExportFormat] = useState<"pdf" | "csv">(
    initialFormat === "csv" ? "csv" : "pdf",
  );

  const confirmExport = async () => {
    setIsExporting(true);

    try {
      if (onExport) {
        onExport(exportFormat);
      } else {
        await exportMaterialList(selectedItems, exportFormat);
      }

      console.log(
        "Export successful: Your material list has been exported as " +
          exportFormat.toUpperCase(),
      );

      if (!onExport) {
        setTimeout(() => {
          const link = document.createElement("a");
          link.href = "#";
          link.download = `material-list.${exportFormat}`;
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        }, 500);
      }
    } catch (error) {
      console.error("Error exporting materials:", error);
      console.error(
        "Export failed: Failed to export your material list. Please try again.",
      );
    } finally {
      setIsExporting(false);
      onOpenChange(false);
    }
  };

  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Export Material List</AlertDialogTitle>
          <AlertDialogDescription>
            Choose format and export your material list.
          </AlertDialogDescription>
        </AlertDialogHeader>

        <Tabs
          defaultValue={exportFormat}
          onValueChange={(value) => setExportFormat(value as "pdf" | "csv")}
        >
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="pdf" className="flex items-center">
              <FileText className="mr-2 h-4 w-4" />
              PDF Format
            </TabsTrigger>
            <TabsTrigger value="csv" className="flex items-center">
              <FileSpreadsheet className="mr-2 h-4 w-4" />
              CSV Format
            </TabsTrigger>
          </TabsList>
          <TabsContent value="pdf" className="py-2">
            Export as a PDF document that you can print or share.
          </TabsContent>
          <TabsContent value="csv" className="py-2">
            Export as a CSV spreadsheet for data analysis or integrating with
            other tools.
          </TabsContent>
        </Tabs>

        <AlertDialogFooter>
          <AlertDialogCancel disabled={isExporting}>Cancel</AlertDialogCancel>
          <AlertDialogAction
            onClick={confirmExport}
            disabled={isExporting}
            className="flex items-center gap-2"
          >
            {isExporting && <Loader2 className="h-4 w-4 animate-spin" />}
            {isExporting ? "Exporting..." : "Export"}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
