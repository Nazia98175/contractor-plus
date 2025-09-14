import { Button } from "../ui/button";
import { ArrowDownUp } from "lucide-react";

// Category data
export const categories = [{ value: "all", label: "All Categories" }];

interface CategorySelectorProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const CategorySelector = ({
  activeTab,
  setActiveTab,
}: CategorySelectorProps) => {
  return (
    <>
      {/* Active Category Display */}
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-lg font-medium">All Categories</h3>
        <Button variant="ghost" size="sm" onClick={() => setActiveTab("all")}>
          <ArrowDownUp className="mr-2 h-4 w-4" />
          Reset Filter
        </Button>
      </div>
    </>
  );
};
