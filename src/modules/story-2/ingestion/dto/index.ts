import { IsString, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class IngestDocumentDto {
  @ApiProperty({ description: 'The raw text or file content to process' })
  @IsString()
  @IsNotEmpty()
  content: string;

  @ApiProperty({ description: 'The type of the document (pdf, docx, or md)' })
  @IsString()
  @IsNotEmpty()
  type: string;
}
