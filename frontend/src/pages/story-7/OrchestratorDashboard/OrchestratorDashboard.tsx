'use client';

import React from 'react';
import { DashboardProps } from './OrchestratorDashboard.types';

export const OrchestratorDashboard: React.FC<DashboardProps> = ({ workflows = [], isLoading }) => {
  if (isLoading) {
    return <div className="p-8 text-center text-[var(--color-text-secondary)]">Loading dashboard...</div>;
  }

  if (workflows.length === 0) {
    return <div className="p-8 text-center text-[var(--color-text-secondary)]">No active workflows found.</div>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {workflows.map((wf) => (
        <div key={wf.id} className="p-6 border border-[var(--color-border)] rounded-lg bg-[var(--color-surface)] shadow-sm">
          <h3 className="text-lg font-semibold text-[var(--color-text-primary)]">{wf.name}</h3>
          <div className="mt-4 flex items-center justify-between">
            <span className={`px-2 py-1 rounded text-xs font-medium ${
              wf.status === 'active' ? 'bg-green-100 text-green-800' : 
              wf.status === 'error' ? 'bg-red-100 text-red-800' : 'bg-gray-100 text-gray-800'
            }`}>
              {wf.status.toUpperCase()}
            </span>
            <span className="text-sm text-[var(--color-text-secondary)]">Last active: {wf.lastActive}</span>
          </div>
        </div>
      ))}
    </div>
  );
};
