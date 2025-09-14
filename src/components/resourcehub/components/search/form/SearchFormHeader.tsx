
interface SearchFormHeaderProps {
  searchCount: number;
  searchLimit: number;
}

export function SearchFormHeader({ searchCount, searchLimit }: SearchFormHeaderProps) {
  return (
    <div className="flex items-center justify-between mb-4">
      <h2 className="text-xl font-semibold">Search Materials</h2>
    </div>
  );
}
