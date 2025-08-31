
import { DataSource } from '@/types';

// Color mapping for the different data sources
export const getSourceColors = (): Record<DataSource, string> => {
  return {
    'Contractor+': '#3b82f6',
    'BLS.gov': '#f59e0b',
    'Average': '#10b981'
  };
};

// Helper to get the right data key based on source name
export const getSourceKey = (source: DataSource): string => {
  return source === 'Contractor+' 
    ? 'contractorPlusRate' 
    : source === 'BLS.gov' 
      ? 'blsRate' 
      : 'averageRate';
};
