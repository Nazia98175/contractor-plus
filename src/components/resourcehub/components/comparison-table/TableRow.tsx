import React from "react";
import { Trash2, ExternalLink, ShoppingCart } from "lucide-react";
import { QuantityControl } from "./QuantityControl";
import { MaterialItem } from "./types";
import { useMediaQuery } from "@/hooks/use-media-query";
import { cn } from "@/app/lib/utils";
import { Button } from "../ui/button";

interface MaterialTableRowProps {
  item: MaterialItem;
  onRemoveItem: (id: string) => void;
  onUpdateQuantity: (id: string, quantity: number) => void;
}

export const MaterialTableRow: React.FC<MaterialTableRowProps> = ({
  item,
  onRemoveItem,
  onUpdateQuantity,
}) => {
  const handleQuantityChange = (newQuantity: number) => {
    onUpdateQuantity(item.id, newQuantity);
  };

  const isTabletOrSmaller = useMediaQuery("(max-width: 1024px)");
  const totalPrice = item.price * item.quantity;
  const hasDiscount = item.discount && item.discount > 0;

  const formatStoreName = (slug: string) => {
    const storeNames: Record<string, string> = {
      ace_hardware: "Ace Hardware",
      home_depot: "Home Depot",
      build: "Build",
      lowes: "Lowes",
    };

    return storeNames[slug] || slug;
  };

  return (
    <div className="grid grid-cols-12 items-center gap-2 border-b py-3 last:border-b-0 md:gap-3">
      <div className="col-span-2 px-1 lg:col-span-1">
        <div className="bg-muted relative h-10 w-10 overflow-hidden rounded-md border">
          {item.image ? (
            <img
              src={item.image}
              alt={item.name}
              className="h-full w-full object-cover"
            />
          ) : (
            <div className="bg-muted-foreground/20 flex h-full w-full items-center justify-center">
              {item.name.charAt(0)}
            </div>
          )}
        </div>
      </div>

      <div className="col-span-5 md:col-span-6 lg:col-span-5">
        <div className="truncate text-sm font-medium">{item.name}</div>
        <div className="mt-0.5 flex items-center gap-1">
          <span
            className={cn(
              "rounded-sm px-1.5 py-0.5 text-xs",
              "bg-muted text-aliceBlue",
            )}
          >
            {formatStoreName(item.store)}
          </span>

          {item.productUrl && (
            <a
              href={item.productUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-blue-500 hover:text-blue-700"
              aria-label={`View ${item.name} on ${item.store}`}
            >
              <ExternalLink className="h-3 w-3" />
            </a>
          )}
        </div>
      </div>

      <div className="col-span-2 flex justify-center">
        <QuantityControl
          quantity={item.quantity}
          onChange={handleQuantityChange}
        />
      </div>

      <div className="col-span-3 flex flex-col items-end lg:col-span-4">
        <div className="flex w-full items-center justify-between gap-1">
          <div>
            <span className="font-medium">${totalPrice.toFixed(2)}</span>
          </div>

          <div className="flex items-center gap-1">
            {item.productUrl &&
              (isTabletOrSmaller ? (
                <Button
                  variant="secondary"
                  size="icon"
                  className="h-8 w-8"
                  onClick={() => window.open(item.productUrl, "_blank")}
                >
                  <ShoppingCart className="h-3 w-3" />
                  <span className="sr-only">Buy at {item.store}</span>
                </Button>
              ) : (
                <Button
                  variant="secondary"
                  size="sm"
                  className="h-8 text-xs whitespace-nowrap"
                  onClick={() => window.open(item.productUrl, "_blank")}
                >
                  <ShoppingCart className="mr-1 h-3 w-3" />
                  Buy
                </Button>
              ))}

            <Button
              variant="ghost"
              size="icon"
              className="text-aliceBlue hover:text-destructive h-6 w-6"
              onClick={() => onRemoveItem(item.id)}
            >
              <Trash2 className="h-4 w-4" />
              <span className="sr-only">Remove</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
