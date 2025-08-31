
import React from 'react';
import { MaterialItem } from './types';

interface TableFooterProps {
  items: MaterialItem[];
  selectedStoreFilter: string | null;
}

export const TableFooter: React.FC<TableFooterProps> = ({ items, selectedStoreFilter }) => {
  const calculateTotal = (item: MaterialItem) => {
    return item.price * item.quantity;
  };

  const filteredItems = selectedStoreFilter 
    ? items.filter(item => item.store === selectedStoreFilter)
    : items;

  const grandTotal = filteredItems.reduce((total, item) => total + calculateTotal(item), 0);

  return (
    <div className="flex justify-end items-center">
      <div className="text-base md:text-lg font-bold mr-2">
        Total:
      </div>
      <div className="text-xl md:text-2xl font-bold text-primary">
        ${grandTotal.toFixed(2)}
      </div>
    </div>
  );
};
