
import { MaterialItem } from '../ComparisonTable';

export interface ActionBarProps {
  items: MaterialItem[];
  isLoggedIn?: boolean;
  onExport: (format: 'pdf' | 'excel' | 'csv') => void;
}

export interface ShareDialogProps {
  disabled: boolean;
}

export interface SaveDialogProps {
  disabled: boolean;
  onSaveToAccount: () => Promise<void>;
  onExport: (format: 'pdf' | 'excel' | 'csv') => void;
}
