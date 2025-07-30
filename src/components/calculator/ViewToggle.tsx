import { LayoutGrid, Grid } from "lucide-react";
import Button from "../common/Button";

interface ViewToggleProps {
  viewMode: "grid" | "categories";
  onViewChange: (mode: "grid" | "categories") => void;
}

export function ViewToggle({ viewMode, onViewChange }: ViewToggleProps) {
  return (
    <div className="flex items-center space-x-2">
      <span className="text-prediction mr-2 text-sm">View:</span>
      <Button
        size="sm"
        className="font-extrabold"
        variant={viewMode === "categories" ? "primary" : "outline"}
        onClick={() => onViewChange("categories")}
      >
        <Grid className="h-4 w-4" />
        Categories
      </Button>
      <Button
        variant={viewMode === "grid" ? "primary" : "outline"}
        size="sm"
        onClick={() => onViewChange("grid")}
      >
        <LayoutGrid className="h-4 w-4" />
        All
      </Button>
    </div>
  );
}
