import { Body, Controller, Post, Query } from '@nestjs/common';
import { DocumentationService } from 'src/services/documentation.service';

@Controller('api/v1/documentation')
export class DocumentationController {
  constructor(private readonly documentationService: DocumentationService) {}
  @Post('generate')
  async generateDocumentation(@Body() body: { source: string }) {
    return await this.documentationService.generateDocumentation(body.source);
  }
}
