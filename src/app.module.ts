import { Module } from '@nestjs/common';
import { DocumentationModule } from './modules/documentation.module';
import { OpenaiService } from './services/openai.service';
@Module({
  imports: [DocumentationModule],
  controllers: [],
  providers: [OpenaiService],
})
export class AppModule {}
