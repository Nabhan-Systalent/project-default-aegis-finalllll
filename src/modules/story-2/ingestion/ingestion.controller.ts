import { Controller, Post, Body } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { IngestionService } from './ingestion.service';
import { IngestDocumentDto } from './dto';

@ApiTags('Ingestion')
@Controller('documents')
export class IngestionController {
  constructor(private readonly ingestionService: IngestionService) {}

  @Post()
  @ApiOperation({ summary: 'Ingest BRD files' })
  @ApiResponse({ status: 200, description: 'Document processed successfully' })
  async ingestDocument(@Body() ingestDocumentDto: IngestDocumentDto) {
    return await this.ingestionService.ingestDocument(ingestDocumentDto);
  }
}
