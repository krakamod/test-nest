import { Injectable } from '@nestjs/common';
import {
  IntegrationServiceFactory,
  IntegrationType,
} from './integration-service/integration-service';

@Injectable()
export class AppService {
  constructor(private integrationServiceFactory: IntegrationServiceFactory) {}

  public getHello(): string {
    return 'Hello World!';
  }

  public getAllProperties(
    integrationType: IntegrationType,
  ): Record<string, string>[] {
    const integrationService =
      this.integrationServiceFactory.create(integrationType);

    return integrationService.getAllProperties();
  }
}
