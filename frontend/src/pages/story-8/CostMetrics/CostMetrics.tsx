'use client';

import React from 'react';
import { CostMetricsProps } from './CostMetrics.types';

export const CostMetrics: React.FC<CostMetricsProps> = ({ data, isLoading = false }) => {
  if (isLoading) {
    return <div className="p-8 text-center text-gray-500">Loading cost analytics...</div>;
  }

  return (
    <div className="p-6 bg-white border border-gray-200 rounded-lg">
      <h2 className="text-xl font-bold mb-4 text-gray-900">Cost Analytics</h2>
      <div className="space-y-4">
        {data.map((item) => (
          <div key={item.project} className="flex items-center justify-between p-3 border-b border-gray-100 last:border-0">
            <div>
              <p className="font-medium text-gray-800">{item.project}</p>
              <p className="text-sm text-gray-500">{item.tokens.toLocaleString()} tokens</p>
            </div>
            <div className="text-right">
              <p className="font-bold text-gray-900">${item.spend.toFixed(2)}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
