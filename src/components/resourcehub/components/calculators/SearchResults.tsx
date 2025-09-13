
import { CalculatorGrid } from "./CalculatorGrid";
import { Calculator } from "@/data/calculators";

interface SearchResultsProps {
  searchTerm: string;
  filteredCalculators: Calculator[];
}

export function SearchResults({ searchTerm, filteredCalculators }: SearchResultsProps) {
  if (!searchTerm) {
    return null;
  }
  
  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold mb-4">Search Results ({filteredCalculators.length})</h2>
      <CalculatorGrid calculators={filteredCalculators} showCategories={true} />
    </div>
  );
}
