import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { PASController } from './pas.controller';
import { PASService } from './pas.service';
import { IntegrationServiceModule } from './integration-service/integration-service.module';

@Module({
  imports: [ConfigModule.forRoot(), IntegrationServiceModule],
  controllers: [PASController],
  providers: [PASService],
})
export class PASModule {}
