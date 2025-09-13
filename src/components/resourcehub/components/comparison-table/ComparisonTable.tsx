import React, { useState } from "react";
import { EmptyState } from "./EmptyState";
import { TableFooter } from "./TableFooter";
import { MaterialTableRow } from "./TableRow";
import { ComparisonTableProps, MaterialItem } from "./types";

export const ComparisonTable: React.FC<ComparisonTableProps> = ({
  items,
  onRemove,
  onUpdateQuantity,
  storeFilter = null,
}) => {
  const [sortField, setSortField] = useState<string | null>(null);
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");

  // Filter items by store if a filter is applied
  const filteredItems = storeFilter
    ? items.filter((item) => item.store === storeFilter)
    : items;

  if (!filteredItems.length) {
    return <EmptyState />;
  }

  const handleSort = (field: string) => {
    if (sortField === field) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortDirection("asc");
    }
  };

  // Apply sorting to items
  const sortedItems = [...filteredItems].sort((a, b) => {
    if (!sortField) return 0;

    const aValue = a[sortField as keyof MaterialItem];
    const bValue = b[sortField as keyof MaterialItem];

    if (typeof aValue === "string" && typeof bValue === "string") {
      return sortDirection === "asc"
        ? aValue.localeCompare(bValue)
        : bValue.localeCompare(aValue);
    }

    if (typeof aValue === "number" && typeof bValue === "number") {
      return sortDirection === "asc" ? aValue - bValue : bValue - aValue;
    }

    return 0;
  });

  return (
    <div className="w-full space-y-4">
      <div className="bg-background overflow-hidden rounded-lg border shadow-sm">
        <div className="px-4">
          {sortedItems.map((item) => (
            <MaterialTableRow
              key={`${item.id}-${item.storeId}`}
              item={item}
              onRemoveItem={onRemove}
              onUpdateQuantity={onUpdateQuantity}
            />
          ))}
        </div>

        <div className="bg-muted/10 border-t px-4 py-3">
          <TableFooter items={sortedItems} selectedStoreFilter={storeFilter} />
        </div>
      </div>
    </div>
  );
};
