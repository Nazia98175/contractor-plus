
import { useState, useEffect } from "react";
import { useMaterials } from "@/hooks/use-materials";
import { useLocalStorage } from "@/hooks/use-local-storage";
import { generateDummyDrywallData } from "@/utils/dummyDataUtils";

// Define the search limit constant
const SEARCH_LIMIT = 25;

export const useComparePage = () => {
  const {
    materials,
    selectedItems,
    isSearching,
    handleSearch,
    handleAddToList,
    handleRemoveItem,
    handleUpdateQuantity,
    handleSaveToAccount,
  } = useMaterials();

  const [showLoginPrompt, setShowLoginPrompt] = useState(false);
  const [searchCount, setSearchCount] = useLocalStorage<number>(
    "searchCount",
    0
  );
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  const [searchParams, setSearchParams] = useState<any>(null);
  const [selectedStoreIds, setSelectedStoreIds] = useState<string[]>([]);
  const [dummyMaterials, setDummyMaterials] = useState<any[]>([]);
  const [showExportDialog, setShowExportDialog] = useState(false);
  const [exportFormat, setExportFormat] = useState<"pdf" | "excel" | "csv">(
    "pdf"
  );

  // Initialize data and check login status
  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn") === "true";
    setIsLoggedIn(loggedIn);

    if (searchCount >= SEARCH_LIMIT && !loggedIn) {
      setShowLoginPrompt(true);
    }

    // Set default search params without loading data
    setSearchParams({
      query: "drywall",
      storeIds: ["lowes-us", "build-us", "acehardware-us"],
      includeOutOfStock: true,
      countryCode: "US",
    });

    setSelectedStoreIds(["lowes", "build", "ace_hardware", "home_depot"]);
  }, []);

  // Handle search functionality
  const performSearch = async (values: any) => {
    if (searchCount >= SEARCH_LIMIT && !isLoggedIn) {
      setShowLoginPrompt(true);
      return false;
    }

    try {
      setSearchParams(values);

      // Fall back to normal search
      const success = await handleSearch(values);

      if (success) {
        if (!isLoggedIn) {
          setSearchCount(searchCount + 1);
        }

        // Always set hasSearched to true after successful search
        setHasSearched(true);
      }

      return success;
    } catch (error) {
      console.error("Search error:", error);
      return false;
    }
  };

  // Handle export functionality
  const handleExport = (format: "pdf" | "excel" | "csv") => {
    if (!isLoggedIn && format !== "pdf") {
      setShowLoginPrompt(true);
      return;
    }

    setExportFormat(format);
    setShowExportDialog(true);
  };

  // Handle save functionality
  const handleSave = async () => {
    if (!isLoggedIn) {
      setShowLoginPrompt(true);
      return;
    }

    try {
      await handleSaveToAccount();
    } catch (error) {
      console.error("Error saving list:", error);
    }
  };

  return {
    materials: materials,
    selectedItems,
    isSearching,
    searchCount,
    hasSearched,
    isLoggedIn,
    showExportDialog,
    exportFormat,
    searchParams,
    selectedStoreIds,
    showLoginPrompt,
    setShowLoginPrompt,
    setShowExportDialog,
    performSearch,
    handleAddToList,
    handleRemoveItem,
    handleUpdateQuantity,
    handleSave,
    handleExport,
  };
};
