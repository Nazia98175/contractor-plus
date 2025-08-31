
import { Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import { TrendingUp } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface PopularItem {
  id: string;
  name: string;
  searchCount: number;
  trend: string;
  category: string;
}

interface PopularItemCardProps {
  item: PopularItem;
  index: number;
}

export const PopularItemCard = ({ item, index }: PopularItemCardProps) => {
  return (
    <Link 
      to={`/compare?query=${encodeURIComponent(item.name)}&stores=3&includeOutOfStock=true&comparisonMode=true`}
      className="block"
    >
      <div className="flex items-center justify-between p-4 rounded-md border hover:bg-muted/50 hover:border-primary/20 transition-colors">
        <div className="flex items-center gap-4">
          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-semibold text-sm">
            {index + 1}
          </div>
          <div>
            <h3 className="font-medium">{item.name}</h3>
            <p className="text-sm text-muted-foreground">
              {item.searchCount.toLocaleString()} searches
            </p>
          </div>
        </div>
        <Badge 
          variant="outline" 
          className={cn(
            item.trend === 'up' 
              ? 'border-green-500 text-green-500' 
              : item.trend === 'down' 
                ? 'border-red-500 text-red-500' 
                : '',
            "flex items-center gap-1"
          )}
        >
          <TrendingUp className={cn("h-3 w-3", item.trend === 'down' ? 'rotate-180' : '')} />
          <span>{item.trend === 'up' ? 'Rising' : item.trend === 'down' ? 'Falling' : 'Stable'}</span>
        </Badge>
      </div>
    </Link>
  );
};
