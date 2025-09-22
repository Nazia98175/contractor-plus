import { CalculatorCard } from "./CalculatorCard";
import { Calculator } from "@/data/calculators";

interface CalculatorGridProps {
  calculators: Calculator[];
  showCategories?: boolean;
  title?: string;
}

export function CalculatorGrid({
  calculators,
  showCategories = false,
  title,
}: CalculatorGridProps) {
  return (
    <div className="space-y-8">
      {title && <h2 className="text-xl font-semibold mb-4">{title}</h2>}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {calculators.map((calculator) => (
          <CalculatorCard
            key={calculator.id}
            calculator={calculator}
            showCategory={showCategories}
          />
        ))}
      </div>
    </div>
  );
}
