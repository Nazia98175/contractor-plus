
export interface MaterialItem {
  id: string;
  name: string;
  price: number;
  store: string;
  storeId: string;
  image: string;
  quantity: number;
  stock: number;
  discount: number;
  productUrl?: string;
}

export interface ComparisonTableProps {
  items: MaterialItem[];
  onRemove: (id: string) => void;
  onUpdateQuantity: (id: string, quantity: number) => void;
  storeFilter?: string | null;
}

export interface StoreSelectionCardProps {
  stores: string[];
  className?: string;
}
