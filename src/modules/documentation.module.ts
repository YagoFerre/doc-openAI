import { Module } from '@nestjs/common';
import { DocumentationController } from 'src/controller/documentation.controller';
import { DocumentationService } from 'src/services/documentation.service';
import { OpenaiService } from 'src/services/openai.service';

@Module({
  providers: [DocumentationService, OpenaiService],
  controllers: [DocumentationController],
})
export class DocumentationModule {}
