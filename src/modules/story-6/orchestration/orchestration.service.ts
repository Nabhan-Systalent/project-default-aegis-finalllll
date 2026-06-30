import { Injectable } from '@nestjs/common';

export interface WorkflowStatus {
  id: string;
  name: string;
  status: 'active' | 'pending' | 'failed';
  lastUpdated: string;
}

@Injectable()
export class OrchestrationService {
  private workflows: WorkflowStatus[] = [
    { id: 'wf-1', name: 'Jira Sync', status: 'active', lastUpdated: new Date().toISOString() },
    { id: 'wf-2', name: 'Issue Processor', status: 'active', lastUpdated: new Date().toISOString() },
  ];

  async getActiveWorkflows(): Promise<WorkflowStatus[]> {
    return this.workflows.filter((w) => w.status === 'active');
  }
}
