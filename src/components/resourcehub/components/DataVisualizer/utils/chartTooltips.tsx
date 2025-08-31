
import React from 'react';
import { FilterState, Industry, State } from '@/types';
import { getSourceColors } from './common';

// Industry chart tooltip
export const renderIndustryTooltip = (props: any, filters: FilterState, industries: Industry[], states: State[]) => {
  const { active, payload } = props;
  
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    const industryName = industries.find(i => i.id === data.industryId)?.name || `Industry ${data.industryId}`;
    
    return (
      <div className="bg-white/90 dark:bg-black/90 backdrop-blur-sm border border-border p-3 rounded-lg shadow-lg" style={{zIndex: 999999, position: "fixed"}}>
        <div className="font-semibold mb-1">{industryName}</div>
        <div className="space-y-1">
          {payload.map((entry: any, index: number) => (
            entry.value !== null && entry.value !== undefined && (
              <div key={index} className="flex items-center space-x-2">
                <div 
                  className="w-3 h-3 rounded-full" 
                  style={{ backgroundColor: entry.color }}
                ></div>
                <div>
                  {entry.name}: <span className="font-medium">${entry.value.toFixed(2)}</span>
                </div>
              </div>
            )
          ))}
        </div>
      </div>
    );
  }
  
  return null;
};

// State chart tooltip
export const renderStateTooltip = (props: any, filters: FilterState, industries: Industry[], states: State[]) => {
  const { active, payload } = props;
  
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    const stateName = states.find(s => s.id === data.stateId)?.name || `State ${data.stateId}`;
    
    return (
      <div className="bg-white/90 dark:bg-black/90 backdrop-blur-sm border border-border p-3 rounded-lg shadow-lg" style={{zIndex: 999999, position: "fixed"}}>
        <div className="font-semibold mb-1">{stateName}</div>
        <div className="space-y-1">
          {payload.map((entry: any, index: number) => (
            entry.value !== null && entry.value !== undefined && (
              <div key={index} className="flex items-center space-x-2">
                <div 
                  className="w-3 h-3 rounded-full" 
                  style={{ backgroundColor: entry.color }}
                ></div>
                <div>
                  {entry.name}: <span className="font-medium">${entry.value.toFixed(2)}</span>
                </div>
              </div>
            )
          ))}
        </div>
      </div>
    );
  }
  
  return null;
};
