import { Module } from '@nestjs/common';
import { ApiModule } from '../api/api.module';
import { IntegrationServiceFactory } from './integration-service';

@Module({
  imports: [ApiModule],
  providers: [IntegrationServiceFactory],
  exports: [IntegrationServiceFactory],
})
export class IntegrationServiceModule {}
