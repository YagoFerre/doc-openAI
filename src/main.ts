import 'dotenv/config';

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { config } from 'dotenv';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  config();
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
