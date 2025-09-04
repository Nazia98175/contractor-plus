import React, { useState } from "react";
import { Share, ChevronDown } from "lucide-react";
import { MaterialItem } from "./types";
import { MaterialTableRow } from "./TableRow";
import { TableFooter } from "./TableFooter";
import { ComparisonTableHeader } from "./TableHeader";

import { EmptyState } from "./EmptyState";
import { useMediaQuery } from "@/hooks/use-media-query";
import { ExportDialog } from "../export/ExportDialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
} from "../ui/drawer";
import { ActionBarTitle } from "../action-bar";
import { Button } from "../ui/button";

interface ComparisonDrawerProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  items: MaterialItem[];
  onRemove: (id: string) => void;
  onUpdateQuantity: (id: string, quantity: number) => void;
  onSave: () => void;
  onExport: (format: "pdf" | "excel" | "csv") => void;
  isLoggedIn: boolean;
}

export const ComparisonDrawer: React.FC<ComparisonDrawerProps> = ({
  open,
  setOpen,
  items,
  onRemove,
  onUpdateQuantity,
  onSave,
  onExport,
  isLoggedIn,
}) => {
  const [storeFilter, setStoreFilter] = useState<string | null>(null);
  const [showExportDialog, setShowExportDialog] = useState(false);
  const isTabletOrSmaller = useMediaQuery("(max-width: 1024px)");

  // Get unique store names for the filter
  const availableStores = [...new Set(items.map((item) => item.store))];

  // Filter items by store
  const filteredItems = storeFilter
    ? items.filter((item) => item.store === storeFilter)
    : items;

  return (
    <>
      <Drawer open={open} onOpenChange={setOpen}>
        <DrawerContent
          className={`max-h-[85vh] ${isTabletOrSmaller ? "h-[550px]" : "h-[700px]"} overflow-hidden`}
        >
          <DrawerHeader className="border-stiletto sticky top-0 z-10 border-b">
            <div className="flex items-center justify-between">
              <ActionBarTitle
                storeFilter={storeFilter}
                onStoreFilterChange={setStoreFilter}
                availableStores={availableStores}
              />
              <DrawerClose asChild>
                <Button variant="ghost" size="icon" className="relative">
                  <ChevronDown className="h-6 w-6" />
                  <span className="sr-only">Collapse</span>
                </Button>
              </DrawerClose>
            </div>
            <DrawerDescription>
              {items.length === 0
                ? "You haven't added any materials to your comparison list yet."
                : `You have ${items.length} item${items.length !== 1 ? "s" : ""} in your comparison list.`}
            </DrawerDescription>
          </DrawerHeader>

          <div className="h-full overflow-hidden px-3 py-4">
            {items.length === 0 ? (
              <EmptyState />
            ) : (
              <div className="h-full space-y-4">
                <div className="border-stiletto flex h-full flex-col overflow-hidden rounded-lg border p-4">
                  <div className="max-h-[calc(100%-120px)] overflow-x-hidden overflow-y-auto text-white">
                    {filteredItems.map((item) => (
                      <MaterialTableRow
                        key={`${item.id}-${item.storeId}`}
                        item={item}
                        onRemoveItem={onRemove}
                        onUpdateQuantity={onUpdateQuantity}
                      />
                    ))}
                  </div>

                  <div className="bg-muted/10 mt-auto border-t px-4 py-3">
                    <TableFooter
                      items={filteredItems}
                      selectedStoreFilter={storeFilter}
                    />
                  </div>
                </div>
              </div>
            )}
          </div>

          <DrawerFooter className="border-t">
            <Button
              className="flex-1"
              size="lg"
              onClick={() => setShowExportDialog(true)}
              disabled={items.length === 0}
            >
              <Share className="h-4 w-4" />
              Export List
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>

      <ExportDialog
        open={showExportDialog}
        onOpenChange={setShowExportDialog}
        exportFormat="pdf"
        selectedItems={items}
        onExport={onExport}
      />
    </>
  );
};
