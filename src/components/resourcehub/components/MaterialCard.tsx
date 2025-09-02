import { useState } from "react";

import { ShoppingCart, Plus } from "lucide-react";
import { Card, CardContent, CardFooter } from "./ui/card";
import { AspectRatio } from "./ui/aspect-ratio";
import { cn } from "@/app/lib/utils";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

export interface MaterialCardProps {
  id: string;
  name: string;
  price: number;
  store: string;
  storeId: string;
  image: string;
  stock: number;
  discount?: number; // Still keeping the prop in the interface for backward compatibility
  onAddToList: () => void;
  productUrl?: string;
}

export const MaterialCard = ({
  id,
  name,
  price,
  store,
  storeId,
  image,
  stock,
  onAddToList,
  productUrl,
}: MaterialCardProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const isInStock = stock > 0;

  const handleImageError = () => {
    setImageError(true);
    setImageLoaded(true); // Still mark as loaded to remove loading state
  };

  return (
    <Card className="border-muted/60 group flex h-full flex-col overflow-hidden transition-all duration-300 hover:shadow-md">
      {/* Product image section with improved aspect ratio */}
      <div className="relative">
        <AspectRatio ratio={4 / 3} className="bg-muted/10 overflow-hidden">
          {image && !imageError ? (
            <>
              {!imageLoaded && (
                <div className="bg-muted/20 absolute inset-0 flex items-center justify-center">
                  <div className="bg-secondary/50 h-full w-full animate-pulse rounded-md" />
                </div>
              )}
              <img
                src={image}
                alt={name}
                className={cn(
                  "h-full w-full object-contain p-3 transition-all duration-300 group-hover:scale-105",
                  imageLoaded ? "opacity-100" : "opacity-0",
                )}
                onLoad={() => setImageLoaded(true)}
                onError={handleImageError}
              />
            </>
          ) : (
            <div className="bg-muted/10 absolute inset-0 flex items-center justify-center">
              <ShoppingCart className="text-aliceBlue h-12 w-12 opacity-20" />
            </div>
          )}
        </AspectRatio>

        {/* Simplified status badge - only shows in stock or out of stock */}
        <Badge
          variant={isInStock ? "outline" : "destructive"}
          className={cn(
            "absolute top-2 right-2 shadow-sm",
            isInStock
              ? "bg-background/90 border-green-500 text-green-500 backdrop-blur-sm"
              : "bg-background/90 backdrop-blur-sm",
          )}
        >
          {isInStock ? "In Stock" : "Out of Stock"}
        </Badge>
      </div>

      {/* Product details section */}
      <CardContent className="flex flex-grow flex-col p-4 pb-0">
        <div className="flex items-center justify-between">
          <span className="text-aliceBlue text-xs font-medium">{store}</span>
        </div>

        <h3
          className="mt-1 line-clamp-2 text-sm leading-tight font-medium"
          title={name}
        >
          {name}
        </h3>

        <div className="mt-auto flex items-baseline pt-1">
          <span className="text-base font-bold">${price.toFixed(2)}</span>
        </div>
      </CardContent>

      {/* Action buttons - Now with Add to List and Buy buttons side by side */}
      <CardFooter className="mt-2 flex gap-2 p-4 pt-3">
        <Button
          variant="default"
          size="sm"
          className="flex flex-1 items-center gap-1.5 shadow-sm"
          onClick={onAddToList}
          disabled={!isInStock}
        >
          <Plus className="h-3.5 w-3.5" />
          <span>{isInStock ? "Add to List" : "Out of Stock"}</span>
        </Button>

        {productUrl && isInStock && (
          <Button
            variant="secondary"
            size="sm"
            className="shadow-sm"
            onClick={() => window.open(productUrl, "_blank")}
          >
            <ShoppingCart className="mr-1 h-3.5 w-3.5" />
            Buy
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};
