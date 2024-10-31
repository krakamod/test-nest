import { Injectable } from '@nestjs/common';
import { IntegrationServiceContext } from './integration-service/integration-service.context';
import {
  IIntegrationStrategy,
  IntegrationType,
} from './integration-service/integration.strategy';

@Injectable()
export class PASService {
  constructor(
    private readonly integrationServiceContext: IntegrationServiceContext,
  ) {}

  public getHello(): string {
    return 'Hello World!';
  }

  public getIntegrationStrategyByIntegrationType(
    integrationType: IntegrationType,
  ): IIntegrationStrategy {
    return this.integrationServiceContext.get(integrationType);
  }

  public getIntegrationStrategyByIntegrationId(
    id: string,
  ): IIntegrationStrategy {
    switch (id) {
      case '1':
        return this.integrationServiceContext.get(IntegrationType.Propertyware);
      case '2':
        return this.integrationServiceContext.get(IntegrationType.Rentvine);
      case '3':
        return this.integrationServiceContext.get(IntegrationType.Rentvine);
      default:
        throw new Error('Invalid integration id');
    }
  }
}
