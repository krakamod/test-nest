import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { HttpModule } from '@nestjs/axios';
import { Repository } from '../repository';
import { ApiModule } from '../api/api.module';
import { IntegrationServiceContext } from './integration-service.context';
import { MockIntegrationStrategy } from './strategies/mock-integration.strategy';
import { PropertywareIntegrationStrategy } from './strategies/propertyware-integration.strategy';
import { RentvineIntegrationStrategy } from './strategies/rentvine-integration.strategy';
import { PropertywareIntegrationService } from './services/propertyware-integration.service';
import { RentvineIntegrationService } from './services/rentvine-integration.service';
import { MockIntegrationService } from './services/mock-integration.service';

@Module({
  imports: [ConfigModule, HttpModule, ApiModule],
  providers: [
    IntegrationServiceContext,
    MockIntegrationStrategy,
    PropertywareIntegrationStrategy,
    RentvineIntegrationStrategy,
    Repository,
    PropertywareIntegrationService,
    RentvineIntegrationService,
    MockIntegrationService,
  ],
  exports: [IntegrationServiceContext],
})
export class IntegrationServiceModule {}
