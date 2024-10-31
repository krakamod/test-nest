import { Injectable, Logger } from '@nestjs/common';
import { ApiService } from '../../api/api.service';
import { IntegrationType, Lease } from '../integration.strategy';
import { Property } from '../integration.strategy';
import { PropexoBaseIntegrationService } from './propexo-base-integration.service';

@Injectable()
export class PropertywareIntegrationService extends PropexoBaseIntegrationService {
  constructor(private readonly apiService: ApiService) {
    super();
  }

  private readonly logger = new Logger(PropertywareIntegrationService.name);

  public getAllProperties(portgolioId: string): Property[] {
    return this.apiService.getProperties(
      IntegrationType.Propertyware,
      portgolioId,
    );
  }

  public getAllLeases(): Lease[] {
    return [];
  }
}
