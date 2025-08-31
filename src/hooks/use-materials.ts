import { useState } from "react";
import { useLocalStorage } from "@/hooks/use-local-storage";
import { performApiSearch } from "@/services/resource/searchService";
import { saveMaterialList } from "@/services/resource/materialService";

interface Material {
  id: string;
  name: string;
  variations: MaterialVariation[];
  category: string;
  image: string;
}

interface FlatMaterial {
  id: string;
  name: string;
  source: string;
  category: string;
  price: number;
  image: string;
  url: string;
  in_stock: boolean;
}

interface MaterialVariation {
  storeId: string;
  storeName: string;
  price: number;
  discount: number;
  stock: number;
  storeItemId: string;
  productUrl?: string;
}

interface SearchParams {
  query: string;
  storeIds: string[];
  includeOutOfStock: boolean;
  countryCode: string;
  location: string;
}

export const useMaterials = () => {
  const [isSearching, setIsSearching] = useState(false);
  const [materials, setMaterials] = useState<Record<string, FlatMaterial[]>>(
    {},
  );
  const [selectedItems, setSelectedItems] = useLocalStorage<any[]>(
    "selectedMaterials",
    [],
  );

  const handleSearch = async (values: SearchParams): Promise<boolean> => {
    setIsSearching(true);

    try {
      // Map store IDs from the UI format to the format expected by the API
      const mappedStoreIds = values.storeIds.map((storeId) => {
        // Extract just the store name part from IDs like "homedepot-us"
        const storeName = storeId.split("-")[0];
        return storeName;
      });

      console.log(values?.storeIds, "handlevalues");

      const results = await performApiSearch({
        query: values.query,
        storeIds: values?.storeIds,
        includeOutOfStock: values.includeOutOfStock,
        countryCode: values.countryCode,
        location: values.location,
      });

      // const results = await searchMaterials(values.query, {
      //   storeIds: mappedStoreIds, // Use the mapped store IDs
      //   includeOutOfStock: values.includeOutOfStock,
      //   countryCode: values.countryCode,
      //   location: values.location,
      // });

      // setMaterials(results?.results as Material[]);

      console.log("Search results:", results?.results);

      // Ensure we always set a Record<string, FlatMaterial[]>, never an array
      if (
        results?.results &&
        typeof results.results === "object" &&
        !Array.isArray(results.results)
      ) {
        setMaterials(results.results as Record<string, FlatMaterial[]>);
      } else {
        // If results is an array or invalid, set empty record
        setMaterials({});
      }

      return true;
    } catch (error) {
      console.error("Error searching materials:", error);
      return false;
    } finally {
      setIsSearching(false);
    }
  };

  const handleAddToList = (material: FlatMaterial) => {
    const existingItemIndex = selectedItems.findIndex(
      (item) => item.id === material.url && item.storeId === material.source,
    );

    if (existingItemIndex !== -1) {
      const updatedItems = [...selectedItems];
      updatedItems[existingItemIndex].quantity += 1;
      setSelectedItems(updatedItems);
    } else {
      setSelectedItems([
        ...selectedItems,
        {
          id: material.url,
          name: material.name,
          price: material.price,
          store: material.source,
          storeId: material.source,
          image: material.image,
          stock: material.in_stock ? 1 : 0,
          discount: 0,
          quantity: 1,
          productUrl: material.url,
        },
      ]);
    }
  };

  const handleRemoveItem = (id: string) => {
    setSelectedItems(selectedItems.filter((item) => item.id !== id));
  };

  const handleUpdateQuantity = (id: string, quantity: number) => {
    setSelectedItems(
      selectedItems.map((item) =>
        item.id === id ? { ...item, quantity } : item,
      ),
    );
  };

  const handleSaveToAccount = async () => {
    try {
      await saveMaterialList(selectedItems);
      return true;
    } catch (error) {
      console.error("Error saving materials:", error);
      return false;
    }
  };

  return {
    materials,
    selectedItems,
    isSearching,
    handleSearch,
    handleAddToList,
    handleRemoveItem,
    handleUpdateQuantity,
    handleSaveToAccount,
  } as const;
};
