import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PropertywareIntegrationStrategy } from './strategies/propertyware-integration.strategy';
import { RentvineIntegrationStrategy } from './strategies/rentvine-integration.strategy';
import { MockIntegrationStrategy } from './strategies/mock-integration.strategy';
import { IIntegrationStrategy, IntegrationType } from './integration.strategy';

@Injectable()
export class IntegrationServiceContext {
  constructor(
    private readonly mockIntegrationStrategy: MockIntegrationStrategy,
    private readonly propertywareIntegrationStrategy: PropertywareIntegrationStrategy,
    private readonly rentvineIntegrationStrategy: RentvineIntegrationStrategy,
    private configService: ConfigService,
  ) {}

  public get(integrationType: IntegrationType): IIntegrationStrategy {
    if (this.configService.get('MOCK_INTEGRATION') === 'true') {
      return this.mockIntegrationStrategy;
    }

    switch (integrationType) {
      case IntegrationType.Propertyware:
        return this.propertywareIntegrationStrategy;
      case IntegrationType.Rentvine:
        return this.rentvineIntegrationStrategy;
      default:
        throw new Error('Invalid integration type');
    }
  }
}
