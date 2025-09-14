
import { ReactNode } from 'react';

// We're importing the Calculator and CalculatorCategory types directly from data/calculators now
// So this file is minimal, just for backward compatibility if needed

export interface CalculatorCategory {
  id: string;
  name: string;
  icon: ReactNode;
  calculators: Calculator[];
  description?: string;
}

export interface Calculator {
  id: string;
  name: string;
  description: string;
  isAvailable: boolean;
  path?: string;
  category?: string;
  icon?: ReactNode;
}
