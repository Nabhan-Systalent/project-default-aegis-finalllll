import { Injectable } from '@nestjs/common';
import { WorkflowStatusDto } from './dto/workflow-status.dto';

@Injectable()
export class OrchestrationService {
  private activeWorkflows: WorkflowStatusDto[] = [
    { id: 'wf-1', status: 'active', provider: 'claude' },
    { id: 'wf-2', status: 'active', provider: 'gpt-4o' },
  ];

  async getActiveWorkflows(): Promise<WorkflowStatusDto[]> {
    // In a real implementation, this would query a database or cache
    return this.activeWorkflows;
  }
}
