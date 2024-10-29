import { Injectable } from '@nestjs/common';
import { ApiService } from '../api/api.service';

export enum IntegrationType {
  Propertyware = 'Propertyware',
  Rentvine = 'Rentvine',
}

type Property = {
  id: string;
  source: string;
};

interface IIntegrationService {
  getAllProperties(): Property[];
}

abstract class PropexoBaseIntegration {
  protected source: string;

  constructor(source: string) {
    this.source = source;
  }

  protected getSettings(): Record<string, string> {
    return {
      username: 'admin',
      password: 'admin',
    };
  }
}

class PropertywareIntegration
  extends PropexoBaseIntegration
  implements IIntegrationService
{
  constructor(private apiService: ApiService) {
    super(IntegrationType.Propertyware);
  }

  public getAllProperties(): Property[] {
    console.log('PropertywareIntegration');

    const settings = this.getSettings();
    console.log('Base settings:', settings);

    return this.apiService.getProperties(this.source);
  }
}

class RentvineIntegration
  extends PropexoBaseIntegration
  implements IIntegrationService
{
  constructor(private apiService: ApiService) {
    super(IntegrationType.Rentvine);
  }

  public getAllProperties(): Property[] {
    console.log('RentvineIntegration');

    const settings = this.getSettings();
    console.log('Base settings:', settings);

    return this.apiService.getProperties(this.source);
  }
}

class MockIntegration implements IIntegrationService {
  public getAllProperties(): Property[] {
    console.log('MockIntegration');

    return [
      {
        id: '1',
        source: '__Mock__',
      },
      {
        id: '2',
        source: '__Mock__',
      },
    ];
  }
}

@Injectable()
export class IntegrationServiceFactory {
  constructor(private readonly apiService: ApiService) {}

  public create(
    integrationType: IntegrationType | 'Mock',
  ): IIntegrationService {
    switch (integrationType) {
      case IntegrationType.Propertyware:
        return new PropertywareIntegration(this.apiService);
      case IntegrationType.Rentvine:
        return new RentvineIntegration(this.apiService);
      case 'Mock':
        return new MockIntegration();
      default:
        throw new Error('Invalid integration type');
    }
  }
}
