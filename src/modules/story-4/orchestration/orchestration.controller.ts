import { Controller, Get } from '@nestjs/common';
import { ApiTags, ApiResponse, ApiOperation } from '@nestjs/swagger';
import { OrchestrationService } from './orchestration.service';
import { WorkflowStatusDto } from './dto/workflow-status.dto';

@ApiTags('Orchestration')
@Controller('workflows')
export class OrchestrationController {
  constructor(private readonly orchestrationService: OrchestrationService) {}

  @Get()
  @ApiOperation({ summary: 'List active agent workflows' })
  @ApiResponse({
    status: 200,
    description: 'Returns active workflow list',
    type: [WorkflowStatusDto],
  })
  async getWorkflowStatus(): Promise<WorkflowStatusDto[]> {
    return await this.orchestrationService.getActiveWorkflows();
  }
}
