import { Loader2 } from "lucide-react";

import { useIsMobile } from "@/hooks/use-mobile";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { MaterialCard } from "../MaterialCard";

interface FlatMaterial {
  source: string;
  name: string;
  price: number;
  image: string;
  url: string;
  in_stock: boolean;
}

interface FlatSearchResultsProps {
  isSearching: boolean;
  hasSearchQuery: boolean;
  materials: Record<string, FlatMaterial[]>;
  selectedStoreIds: string[];
  onAddToList: (material: FlatMaterial) => void;
}

const formatStoreName = (key: string): string => {
  const storeMap: Record<string, string> = {
    ace_hardware: "Ace Hardware",
    lowes: "Lowe's",
    home_depot: "The Home Depot", // ✅ update key from `homedepot` to `home_depot`
    build: "Build.com",
    menards: "Menards",
    amazon: "Amazon",
  };

  return storeMap[key] || key;
};

export const FlatSearchResults = ({
  isSearching,
  hasSearchQuery,
  materials,
  selectedStoreIds,
  onAddToList,
}: FlatSearchResultsProps) => {
  const isMobile = useIsMobile();

  const filteredStores = Object.entries(materials).filter(([storeKey]) =>
    selectedStoreIds.includes(storeKey),
  );

  if (isSearching) {
    return (
      <div className="flex items-center justify-center py-20">
        <Loader2 className="text-primary h-8 w-8 animate-spin" />
        <span className="ml-2 text-lg font-medium">Searching materials...</span>
      </div>
    );
  }

  if (!hasSearchQuery) {
    return null; // no results yet
  }

  if (filteredStores.length === 0) {
    return (
      <div className="bg-muted/20 rounded-lg border px-2 py-20 text-center">
        <p className="text-muted-foreground">
          No materials found for the selected filters.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full space-y-4">
      <h2 className="text-center text-xl font-semibold">Search Results</h2>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredStores.map(([storeKey, materials]) => (
          <div
            key={storeKey}
            className="flex h-full flex-col overflow-hidden rounded-lg border"
          >
            <h3 className="bg-muted/30 sticky top-0 p-3 text-lg font-semibold">
              {formatStoreName(storeKey)}
            </h3>

            {materials.length > 0 ? (
              <div className="p-3">
                <Carousel className="w-full">
                  <CarouselContent>
                    {materials.slice(0, 10).map((item, idx) => (
                      <CarouselItem key={`${storeKey}-${idx}`}>
                        <MaterialCard
                          id={`${storeKey}-${idx}`}
                          name={item.name}
                          price={item.price}
                          store={formatStoreName(storeKey)}
                          storeId={storeKey}
                          image={item.image}
                          stock={item.in_stock ? 1 : 0}
                          onAddToList={() => onAddToList(item)}
                          productUrl={item.url}
                        />
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="left-2 border-none bg-red-600 text-white hover:bg-red-700" />
                  <CarouselNext className="right-2 border-none bg-red-600 text-white hover:bg-red-700" />
                </Carousel>
              </div>
            ) : (
              <div className="border-t p-3 py-10 text-center">
                <p className="text-muted-foreground">
                  No products available for {formatStoreName(storeKey)}.
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
