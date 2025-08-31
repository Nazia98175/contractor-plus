
import React from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';

interface TableHeaderProps {
  sortField: string | null;
  sortDirection: 'asc' | 'desc';
  onSort: (field: string) => void;
}

export const ComparisonTableHeader: React.FC<TableHeaderProps> = ({
  sortField,
  sortDirection,
  onSort,
}) => {
  const renderSortIcon = (field: string) => {
    if (sortField !== field) return null;
    return sortDirection === 'asc' ? (
      <ChevronUp className="h-4 w-4" />
    ) : (
      <ChevronDown className="h-4 w-4" />
    );
  };

  return (
    <div className="grid grid-cols-12 gap-3 px-4 py-2 bg-muted/20 border-b text-muted-foreground text-sm">
      <div className="col-span-2 lg:col-span-1"></div>
      <div 
        className="col-span-5 md:col-span-6 lg:col-span-7 cursor-pointer hover:text-primary flex items-center gap-1"
        onClick={() => onSort('name')}
      >
        Item {renderSortIcon('name')}
      </div>
      <div className="col-span-2 text-center">Qty</div>
      <div 
        className="col-span-3 lg:col-span-2 text-right cursor-pointer hover:text-primary flex items-center justify-end gap-1"
        onClick={() => onSort('price')}
      >
        Price {renderSortIcon('price')}
      </div>
    </div>
  );
};
