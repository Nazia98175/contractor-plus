
import { ActionBarProps } from './types';
import { ActionBarContainer } from './ActionBarContainer';
import { ActionBarTitle } from './ActionBarTitle';
import { ActionButtons } from './ActionButtons';
import { useState } from 'react';

export const ActionBar = ({
  items,
  isLoggedIn = false,
  onExport,
}: ActionBarProps) => {
  const isEmpty = items.length === 0;
  
  // Get unique store names for the filter
  const availableStores = [...new Set(items.map(item => item.store))];
  
  // Add state for store filter
  const [storeFilter, setStoreFilter] = useState<string | null>(null);
  
  return (
    <ActionBarContainer>
      <ActionBarTitle 
        storeFilter={storeFilter}
        onStoreFilterChange={setStoreFilter}
        availableStores={availableStores}
      />
      <ActionButtons 
        onExport={onExport}
        disabled={isEmpty}
      />
    </ActionBarContainer>
  );
};

// Export all sub-components for direct access if needed
export * from './types';
export * from './ActionBarContainer';
export * from './ActionBarTitle';
export * from './ActionButtons';
export * from './ShareDialog';
