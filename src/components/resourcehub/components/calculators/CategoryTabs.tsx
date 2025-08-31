import { CalculatorCategory } from "@/data/calculators";
import { Tabs, TabsList, TabsTrigger } from "../ui/tabs";

interface CategoryTabsProps {
  categories: CalculatorCategory[];
  defaultValue?: string;
  onValueChange?: (value: string) => void;
}

export function CategoryTabs({
  categories,
  defaultValue = "all",
  onValueChange,
}: CategoryTabsProps) {
  return (
    <Tabs
      defaultValue={defaultValue}
      className="space-y-6"
      onValueChange={onValueChange}
    >
      <TabsList className="bg-muted/50 flex h-auto flex-wrap gap-2 p-1">
        {categories.map((category) => (
          <TabsTrigger
            key={category.id}
            value={category.id}
            className="flex items-center gap-1.5 px-3"
          >
            {category.icon}
            {category.name}
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  );
}
