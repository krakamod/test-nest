import { Injectable, Logger } from '@nestjs/common';
import { ApiService } from '../../api/api.service';
import { IntegrationType, Lease } from '../integration.strategy';
import { Property, Unit } from '../integration.strategy';
import { PropexoBaseIntegrationService } from './propexo-base-integration.service';

@Injectable()
export class RentvineIntegrationService extends PropexoBaseIntegrationService {
  constructor(private readonly apiService: ApiService) {
    super();
  }

  private readonly logger = new Logger(RentvineIntegrationService.name);

  public getAllProperties(): {
    properties: Property[];
    meta: Record<string, string>;
  } {
    return {
      properties: this.apiService.getProperties(IntegrationType.Rentvine),
      meta: {
        source: IntegrationType.Rentvine,
      },
    };
  }

  public getAllUnits(): Unit[] {
    return [
      {
        id: '1',
        source: IntegrationType.Rentvine,
      },
    ];
  }

  public getAllLeases(): Lease[] {
    this.logger.warn('`getAllLeases` not supported for rentvine.');
    throw new Error('Not supported.');
  }
}
