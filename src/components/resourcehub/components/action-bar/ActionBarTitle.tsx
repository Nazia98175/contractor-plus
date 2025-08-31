import React from "react";
import { Filter } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

interface ActionBarTitleProps {
  storeFilter: string | null;
  onStoreFilterChange: (store: string | null) => void;
  availableStores: string[];
}

export const ActionBarTitle = ({
  storeFilter,
  onStoreFilterChange,
  availableStores,
}: ActionBarTitleProps) => {
  return (
    <div className="flex w-full items-center justify-between gap-4">
      <h2 className="text-2xl font-bold">Your Material List</h2>

      {availableStores.length > 0 && (
        <div className="flex items-center gap-2">
          <Filter className="text-muted-foreground h-4 w-4" />
          <Select
            value={storeFilter || "all"}
            onValueChange={(value) =>
              onStoreFilterChange(value === "all" ? null : value)
            }
          >
            <SelectTrigger className="h-8 w-[160px]">
              <SelectValue placeholder="Filter by store" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Filter by Store</SelectLabel>
                <SelectItem value="all">All Stores</SelectItem>
                {availableStores.map((store) => (
                  <SelectItem key={store} value={store}>
                    {store}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      )}
    </div>
  );
};
