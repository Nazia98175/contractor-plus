"use client";
import { useState } from "react";
import { useComparePage } from "@/hooks/use-compare-page";
import { useMetaTags } from "@/hooks/use-meta-tags";

import { useMediaQuery } from "@/hooks/use-media-query";
// import { LoginPrompt } from "@/components/LoginPrompt";
import { ComparisonDrawer } from "../components/comparison-table";
import { ExportDialogContainer } from "../components/compare/ExportDialogContainer";
import { ComparePageLayout } from "../components/layouts/ComparePageLayout";

const ComparePage = () => {
  // Add SEO meta tags
  useMetaTags({
    title: "Material Price Comparison Tool | Compare Prices Across Suppliers",
    description:
      "Compare construction materials and building supplies prices across Lowe's, Home Depot, Build.com, and other major suppliers. Find the best deals for your projects.",
    keywords:
      "construction material comparison, building supply prices, contractor material price comparison, home improvement price comparison, Lowe's vs Home Depot prices, building materials cost",
  });

  // Use our custom hook to manage all the comparison page functionality
  const {
    materials,
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
  } = useComparePage();

  // State to control drawer visibility
  const [drawerOpen, setDrawerOpen] = useState(false);
  const isTabletOrSmaller = useMediaQuery("(max-width: 1024px)");

  return (
    <>
      <ComparePageLayout
        isSearching={isSearching}
        materials={materials || {}}
        selectedItems={selectedItems || []}
        searchCount={0}
        // Show search results when there's a search query or materials
        hasSearchQuery={hasSearched}
        isLoggedIn={isLoggedIn}
        onSearch={performSearch}
        onAddToList={handleAddToList}
        onRemoveItem={handleRemoveItem}
        onUpdateQuantity={handleUpdateQuantity}
        onSaveToAccount={handleSave}
        onExport={handleExport}
        defaultSearchValues={searchParams}
        selectedStoreIds={selectedStoreIds ?? []}
      />

      {/* Cart/Comparison Drawer */}
      <ComparisonDrawer
        open={drawerOpen}
        setOpen={setDrawerOpen}
        items={selectedItems || []}
        onRemove={handleRemoveItem}
        onUpdateQuantity={handleUpdateQuantity}
        onSave={handleSave}
        onExport={handleExport}
        isLoggedIn={isLoggedIn}
      />

      {/* Floating button to show item count and open drawer - with improved design */}
      {selectedItems && selectedItems.length > 0 && (
        <button
          onClick={() => setDrawerOpen(true)}
          className={`hover:bg-primary/90 bg-primary text-primary-foreground fixed bottom-6 z-50 flex items-center justify-center gap-2 rounded-full p-4 shadow-lg transition-all duration-200 ${
            isTabletOrSmaller ? "right-4" : "right-6"
          }`}
        >
          <span className="flex items-center gap-1.5 font-medium">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-list"
            >
              <line x1="8" x2="21" y1="6" y2="6"></line>
              <line x1="8" x2="21" y1="12" y2="12"></line>
              <line x1="8" x2="21" y1="18" y2="18"></line>
              <line x1="3" x2="3.01" y1="6" y2="6"></line>
              <line x1="3" x2="3.01" y1="12" y2="12"></line>
              <line x1="3" x2="3.01" y1="18" y2="18"></line>
            </svg>
            {selectedItems.length} item{selectedItems.length !== 1 ? "s" : ""}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-chevron-up"
            >
              <path d="m18 15-6-6-6 6" />
            </svg>
          </span>
        </button>
      )}

      <ExportDialogContainer
        open={showExportDialog}
        onOpenChange={setShowExportDialog}
        exportFormat={exportFormat}
        selectedItems={selectedItems}
      />
    </>
  );
};

export default ComparePage;
