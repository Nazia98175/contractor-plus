import React from "react";
import { MaterialItem } from "./types";

interface TableFooterProps {
  items: MaterialItem[];
  selectedStoreFilter: string | null;
}

export const TableFooter: React.FC<TableFooterProps> = ({
  items,
  selectedStoreFilter,
}) => {
  const calculateTotal = (item: MaterialItem) => {
    return item.price * item.quantity;
  };

  const filteredItems = selectedStoreFilter
    ? items.filter((item) => item.store === selectedStoreFilter)
    : items;

  const grandTotal = filteredItems.reduce(
    (total, item) => total + calculateTotal(item),
    0,
  );

  return (
    <div className="flex items-center justify-end">
      <div className="mr-2 text-base font-bold text-white md:text-lg">
        Total:
      </div>
      <div className="text-xl font-bold text-red-500 md:text-2xl">
        ${grandTotal.toFixed(2)}
      </div>
    </div>
  );
};
