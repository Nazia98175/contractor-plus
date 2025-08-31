
import { useState } from 'react';
import { 
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { ShoppingBag, FileText, FileSpreadsheet } from 'lucide-react';
import { SaveDialogProps } from './types';
import { useToast } from '@/components/ui/use-toast';

export const SaveDialog = ({ disabled, onSaveToAccount, onExport }: SaveDialogProps) => {
  const [open, setOpen] = useState(false);
  const { toast } = useToast();

  const handleSaveToAccount = async () => {
    await onSaveToAccount();
    setOpen(false);
  };

  const handleExport = (format: 'pdf' | 'excel' | 'csv') => {
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
            className="flex items-center justify-start gap-2 w-full"
            variant="outline"
          >
            <ShoppingBag className="h-4 w-4" />
            <span>Save in Contractor+</span>
          </Button>
          <Button 
            onClick={() => handleExport('pdf')}
            className="flex items-center justify-start gap-2 w-full"
            variant="outline"
          >
            <FileText className="h-4 w-4" />
            <span>Save as PDF</span>
          </Button>
          <Button 
            onClick={() => handleExport('excel')}
            className="flex items-center justify-start gap-2 w-full"
            variant="outline"
          >
            <FileSpreadsheet className="h-4 w-4" />
            <span>Save as XLS</span>
          </Button>
          <Button 
            onClick={() => handleExport('csv')}
            className="flex items-center justify-start gap-2 w-full"
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
