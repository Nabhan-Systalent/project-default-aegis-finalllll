import { ApiProperty } from '@nestjs/swagger';

export class WorkflowStatusDto {
  @ApiProperty({ description: 'The unique identifier of the workflow' })
  id: string;

  @ApiProperty({ description: 'The status of the workflow' })
  status: 'active' | 'completed' | 'failed';

  @ApiProperty({ description: 'The current LLM provider being used' })
  provider: 'claude' | 'gpt-4o';
}
