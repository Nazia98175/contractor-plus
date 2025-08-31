
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown, ArrowDownUp } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ScrollArea } from "@/components/ui/scroll-area";

// Category data
export const categories = [
  { value: 'all', label: 'All Categories' },
];

interface CategorySelectorProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const CategorySelector = ({ activeTab, setActiveTab }: CategorySelectorProps) => {
  return (
    <>
      {/* Active Category Display */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-medium">
          All Categories
        </h3>
        <Button variant="ghost" size="sm" onClick={() => setActiveTab('all')}>
          <ArrowDownUp className="h-4 w-4 mr-2" />
          Reset Filter
        </Button>
      </div>
    </>
  );
};
