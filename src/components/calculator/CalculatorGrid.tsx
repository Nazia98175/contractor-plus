import { Calculator } from "./Calculator";
import { CalculatorCard } from "./CalculatorCard";

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
      {title && <h2 className="mb-4 text-xl font-semibold">{title}</h2>}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
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
