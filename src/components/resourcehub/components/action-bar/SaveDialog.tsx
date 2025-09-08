import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";

import { ShoppingBag, FileText, FileSpreadsheet } from "lucide-react";
import { SaveDialogProps } from "./types";
import { Button } from "../ui/button";
import { useToast } from "../ui/use-toast";

export const SaveDialog = ({
  disabled,
  onSaveToAccount,
  onExport,
}: SaveDialogProps) => {
  const [open, setOpen] = useState(false);
  const { toast } = useToast();

  const handleSaveToAccount = async () => {
    await onSaveToAccount();
    setOpen(false);
  };

  const handleExport = (format: "pdf" | "excel" | "csv") => {
    onExport(format);
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="flex items-center gap-2"
          disabled={disabled}
        >
          <ShoppingBag className="h-4 w-4" />
          <span>Save List</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Save Material List</DialogTitle>
          <DialogDescription>
            Choose how you want to save your material list
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <Button
            onClick={handleSaveToAccount}
            className="flex w-full items-center justify-start gap-2"
            variant="outline"
          >
            <ShoppingBag className="h-4 w-4" />
            <span>Save in Contractor+</span>
          </Button>
          <Button
            onClick={() => handleExport("pdf")}
            className="flex w-full items-center justify-start gap-2"
            variant="outline"
          >
            <FileText className="h-4 w-4" />
            <span>Save as PDF</span>
          </Button>
          <Button
            onClick={() => handleExport("excel")}
            className="flex w-full items-center justify-start gap-2"
            variant="outline"
          >
            <FileSpreadsheet className="h-4 w-4" />
            <span>Save as XLS</span>
          </Button>
          <Button
            onClick={() => handleExport("csv")}
            className="flex w-full items-center justify-start gap-2"
            variant="outline"
          >
            <FileSpreadsheet className="h-4 w-4" />
            <span>Save as CSV</span>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
