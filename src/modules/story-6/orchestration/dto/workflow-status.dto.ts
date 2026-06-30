import { ApiProperty } from '@nestjs/swagger';

export class WorkflowStatusDto {
  @ApiProperty()
  id: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  status: string;

  @ApiProperty()
  lastUpdated: string;
}
