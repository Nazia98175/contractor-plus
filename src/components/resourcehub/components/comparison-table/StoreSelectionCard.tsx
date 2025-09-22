import React from "react";
import { StoreSelectionCardProps } from "./types";
import { ShoppingBag } from "lucide-react";
import { cn } from "@/app/lib/utils";

export const StoreSelectionCard = ({
  stores,
  className,
}: StoreSelectionCardProps) => {
  return (
    <div className={cn("bg-card rounded-lg border p-4 shadow-sm", className)}>
      <div className="grid grid-cols-[auto_1fr] gap-4">
        <div className="bg-primary/10 flex h-12 w-12 items-center justify-center rounded-full">
          <ShoppingBag className="text-primary h-6 w-6" />
        </div>

        <div>
          <div className="flex items-center">
            <h3 className="text-card-foreground text-lg font-semibold">
              {stores.length} {stores.length === 1 ? "store" : "stores"}{" "}
              selected
            </h3>
          </div>

          <div className="mt-2 space-y-1.5">
            {stores.map((store, index) => (
              <div
                key={index}
                className="bg-muted/50 flex items-center rounded-md px-3 py-1.5 text-sm"
              >
                {store}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
