import { Calculator } from "./Calculator";
import { CalculatorGrid } from "./CalculatorGrid";

interface SearchResultsProps {
  searchTerm: string;
  filteredCalculators: Calculator[];
}

export function SearchResults({
  searchTerm,
  filteredCalculators,
}: SearchResultsProps) {
  if (!searchTerm) {
    return null;
  }

  return (
    <div className="mb-8">
      <h2 className="mb-4 text-xl font-semibold">
        Search Results ({filteredCalculators.length})
      </h2>
      <CalculatorGrid calculators={filteredCalculators} showCategories={true} />
    </div>
  );
}
