'use client';

import React from 'react';
import { CostMetricsProps } from './CostMetrics.types';

export const CostMetrics: React.FC<CostMetricsProps> = ({ data }) => {
  if (!data || data.length === 0) {
    return <div className="p-8 text-center">No cost data available.</div>;
  }

  const maxSpend = Math.max(...data.map(d => d.spend));

  return (
    <div className="p-6 bg-[var(--color-surface)] rounded-lg shadow-sm border border-[var(--color-border)]">
      <h2 className="text-xl font-bold mb-6 text-[var(--color-text-primary)]">Token Usage Metrics</h2>
      <div className="flex items-end gap-4 h-64">
        {data.map((item) => (
          <div key={item.month} className="flex-1 flex flex-col items-center gap-2">
            <div 
              className="w-full bg-[var(--color-primary)] rounded-t-sm"
              style={{ height: `${(item.spend / maxSpend) * 100}%` }}
            />
            <span className="text-xs text-[var(--color-text-secondary)]">{item.month}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
