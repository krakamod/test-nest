import { NestFactory } from '@nestjs/core';
import { PASModule } from './pas.module';

async function bootstrap() {
  const app = await NestFactory.create(PASModule);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
