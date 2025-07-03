import { Input } from "@headlessui/react";
import { Search } from "lucide-react";

interface CalculatorSearchProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
}

export function CalculatorSearch({
  searchTerm,
  onSearchChange,
}: CalculatorSearchProps) {
  return (
    <div className="relative w-full sm:max-w-md">
      <Search className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-[#71717a]" />
      <Input
        type="search"
        placeholder="Search calculators..."
        className="pl-10"
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
      />
    </div>
  );
}
