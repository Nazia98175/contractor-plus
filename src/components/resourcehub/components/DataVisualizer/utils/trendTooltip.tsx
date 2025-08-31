

import React from 'react';
import { DataSource, FilterState, Industry, State } from '@/types';
import { getSourceColors, getSourceKey } from './common';

export const renderTrendTooltip = (props: any, filters: FilterState, industries: Industry[], states: State[]) => {
  const { active, payload, coordinate } = props;
  
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    
    // Filter to only include selected data sources 
    const selectedSources = filters.dataSources || [] as DataSource[];
    
    // Create maps for industries and states
    const industryNameMap = new Map();
    industries.forEach(industry => {
      industryNameMap.set(industry.id, industry.name);
    });
    
    const stateNameMap = new Map();
    states.forEach(state => {
      stateNameMap.set(state.id.toString(), state.name);
    });
    
    // Color mapping for the different data sources
    const sourceColors = getSourceColors();
    
    // Check if we're in zip code mode
    const isZipCodeView = filters.locationMode === 'zipcode' && filters.zipCode && filters.zipCode.length > 0;
    
    // Get selected industries (either all industries if none selected or just the selected ones)
    const selectedIndustries = filters.industries.length === 0
      ? industries.map(i => i.id).slice(0, 3) // Limit to 3 industries if none selected to prevent crowding
      : filters.industries;
    
    // Use coordinate for positioning with correct typing
    const tooltipStyle: React.CSSProperties = {
      left: coordinate ? coordinate.x + 10 : undefined,
      top: coordinate ? coordinate.y - 10 : undefined,
      position: 'fixed',
      zIndex: 9999,
    };
    
    return (
      <div className="bg-white/90 dark:bg-black/90 backdrop-blur-sm border border-border p-3 rounded-lg shadow-lg" 
           style={tooltipStyle}>
        <h3 className="font-semibold text-sm mb-2">{data.period}</h3>
        
        {/* Chart Data Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-xs">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-1 font-medium text-muted-foreground">Source</th>
                {isZipCodeView ? (
                  <th className="text-right py-1 px-2 font-medium text-muted-foreground">
                    Zip: {filters.zipCode}
                  </th>
                ) : (
                  // Show state headers if in state view
                  filters.states.length === 0 
                    ? states.map(s => s.id.toString()).slice(0, 5).map((stateId, i) => {
                        const state = states.find(s => s.id.toString() === stateId);
                        return (
                          <th key={i} className="text-right py-1 px-2 font-medium text-muted-foreground">
                            {state ? state.abbreviation : `S${stateId}`}
                          </th>
                        );
                      })
                    : filters.states.map((stateId, i) => {
                        const state = states.find(s => s.id.toString() === stateId);
                        return (
                          <th key={i} className="text-right py-1 px-2 font-medium text-muted-foreground">
                            {state ? state.abbreviation : `S${stateId}`}
                          </th>
                        );
                      })
                )}
              </tr>
            </thead>
            <tbody>
              {selectedIndustries.map((industryId, industryIndex) => {
                const industryName = industryNameMap.get(industryId) || `Industry ${industryId}`;
                
                return (
                  <React.Fragment key={`industry-${industryId}`}>
                    {/* Industry header row */}
                    <tr>
                      <td 
                        colSpan={isZipCodeView ? 2 : (filters.states.length || 5) + 1} 
                        className="py-1.5 font-medium bg-muted/30"
                      >
                        {industryName}
                      </td>
                    </tr>
                    
                    {/* Source rows for this industry */}
                    {selectedSources.map((source) => {
                      const sourceKey = getSourceKey(source);
                      
                      return (
                        <tr key={`${industryId}-${source}`} className="border-b border-border/40">
                          <td className="py-1">
                            <div className="flex items-center">
                              <div 
                                className="w-2 h-2 rounded-full mr-1.5"
                                style={{ backgroundColor: sourceColors[source] || '#888' }}
                              ></div>
                              <span>{source}</span>
                            </div>
                          </td>
                          
                          {isZipCodeView ? (
                            // Single cell for zip code view
                            <td className="text-right py-1 px-2">
                              {(() => {
                                let rate = null;
                                if (source === 'Contractor+') {
                                  rate = data.contractorPlusRate;
                                } else if (source === 'BLS.gov') {
                                  rate = data.blsRate;
                                } else if (source === 'Average') {
                                  rate = data.averageRate;
                                }
                                return rate !== undefined && rate !== null ? 
                                  `$${parseFloat(rate).toFixed(2)}` : '$0.00';
                              })()}
                            </td>
                          ) : (
                            // Multiple cells for state view
                            (filters.states.length === 0 
                              ? states.map(s => s.id.toString()).slice(0, 5) 
                              : filters.states
                            ).map(stateId => {
                              // Get the correct rate based on the data source
                              let rate = null;
                              if (source === 'Contractor+') {
                                rate = data.contractorPlusRate;
                              } else if (source === 'BLS.gov') {
                                rate = data.blsRate;
                              } else if (source === 'Average') {
                                rate = data.averageRate;
                              }
                              
                              return (
                                <td key={stateId} className="text-right py-1 px-2">
                                  {rate !== undefined && rate !== null ? 
                                    `$${parseFloat(rate).toFixed(2)}` : '$0.00'}
                                </td>
                              );
                            })
                          )}
                        </tr>
                      );
                    })}
                    
                    {/* Add a little space between industry groups */}
                    {industryIndex < selectedIndustries.length - 1 && (
                      <tr>
                        <td colSpan={isZipCodeView ? 2 : (filters.states.length || 5) + 1} className="h-1"></td>
                      </tr>
                    )}
                  </React.Fragment>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
  
  return null;
};
