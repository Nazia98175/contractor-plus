import { LayoutGrid, Grid } from "lucide-react";
import Button from "../common/Button";

interface ViewToggleProps {
  viewMode: "grid" | "categories";
  onViewChange: (mode: "grid" | "categories") => void;
}

export function ViewToggle({ viewMode, onViewChange }: ViewToggleProps) {
  return (
    <div className="flex items-center space-x-2">
      <span className="mr-2 text-sm text-[#71717a]">View:</span>
      <Button
        variant={viewMode === "categories" ? "primary" : "outline"}
        onClick={() => onViewChange("categories")}
      >
        <Grid className="mr-1 h-4 w-4" />
        Categories
      </Button>
      <Button
        variant={viewMode === "grid" ? "primary" : "outline"}
        onClick={() => onViewChange("grid")}
      >
        <LayoutGrid className="mr-1 h-4 w-4" />
        All
      </Button>
    </div>
  );
}
