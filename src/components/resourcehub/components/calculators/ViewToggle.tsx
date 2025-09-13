import { LayoutGrid, Grid } from "lucide-react";
import { Button } from "../ui/button";

interface ViewToggleProps {
  viewMode: "grid" | "categories";
  onViewChange: (mode: "grid" | "categories") => void;
}

export function ViewToggle({ viewMode, onViewChange }: ViewToggleProps) {
  return (
    <div className="flex items-center space-x-2">
      <span className="text-aliceBlue mr-2 text-sm">View:</span>
      <Button
        variant={viewMode === "categories" ? "default" : "outline"}
        size="sm"
        onClick={() => onViewChange("categories")}
      >
        <Grid className="mr-1 h-4 w-4" />
        Categories
      </Button>
      <Button
        variant={viewMode === "grid" ? "default" : "outline"}
        size="sm"
        onClick={() => onViewChange("grid")}
      >
        <LayoutGrid className="mr-1 h-4 w-4" />
        All
      </Button>
    </div>
  );
}
