
import { PopularItemCard, PopularItem } from './PopularItemCard';

interface PopularItemsListProps {
  items: PopularItem[];
}

export const PopularItemsList = ({ items }: PopularItemsListProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {items.map((item, index) => (
        <PopularItemCard key={item.id} item={item} index={index} />
      ))}
      
      {items.length === 0 && (
        <div className="col-span-2 py-10 text-center text-muted-foreground">
          No popular searches for this category yet.
        </div>
      )}
    </div>
  );
};
