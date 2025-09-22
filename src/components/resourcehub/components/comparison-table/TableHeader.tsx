import React from "react";
import { ChevronUp, ChevronDown } from "lucide-react";

interface TableHeaderProps {
  sortField: string | null;
  sortDirection: "asc" | "desc";
  onSort: (field: string) => void;
}

export const ComparisonTableHeader: React.FC<TableHeaderProps> = ({
  sortField,
  sortDirection,
  onSort,
}) => {
  const renderSortIcon = (field: string) => {
    if (sortField !== field) return null;
    return sortDirection === "asc" ? (
      <ChevronUp className="h-4 w-4" />
    ) : (
      <ChevronDown className="h-4 w-4" />
    );
  };

  return (
    <div className="bg-muted/20 text-aliceBlue grid grid-cols-12 gap-3 border-b px-4 py-2 text-sm">
      <div className="col-span-2 lg:col-span-1"></div>
      <div
        className="hover:text-primary col-span-5 flex cursor-pointer items-center gap-1 md:col-span-6 lg:col-span-7"
        onClick={() => onSort("name")}
      >
        Item {renderSortIcon("name")}
      </div>
      <div className="col-span-2 text-center">Qty</div>
      <div
        className="hover:text-primary col-span-3 flex cursor-pointer items-center justify-end gap-1 text-right lg:col-span-2"
        onClick={() => onSort("price")}
      >
        Price {renderSortIcon("price")}
      </div>
    </div>
  );
};
