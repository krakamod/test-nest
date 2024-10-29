import { Module } from '@nestjs/common';

import { ApiModule } from './api/api.module';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { IntegrationServiceModule } from './integration-service/integration-service.module';

@Module({
  imports: [ApiModule, IntegrationServiceModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
