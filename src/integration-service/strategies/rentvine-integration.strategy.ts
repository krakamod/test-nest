import { Injectable, Logger } from '@nestjs/common';
import { Repository } from '../../repository';
import {
  IIntegrationStrategy,
  IntegrationType,
  Lease,
} from '../integration.strategy';
import { Property, Unit } from '../integration.strategy';
import { RentvineIntegrationService } from '../services/rentvine-integration.service';
import { BaseIntegrationStrategy } from './base-integration.strategy';

@Injectable()
export class RentvineIntegrationStrategy
  extends BaseIntegrationStrategy
  implements IIntegrationStrategy
{
  constructor(
    private readonly repository: Repository,
    private readonly rentvineIntegrationService: RentvineIntegrationService,
  ) {
    super(IntegrationType.Rentvine);
  }

  private readonly logger = new Logger(RentvineIntegrationStrategy.name);

  public syncProperties(): Property[] {
    const existingProperties = this.repository.getProperties();
    const { properties: newProperties, meta } =
      this.rentvineIntegrationService.getAllProperties();

    const properties = super.syncProperties(existingProperties, newProperties);

    this.repository.savePropertiesMeta(meta);
    this.repository.saveProperties(
      super.syncProperties(existingProperties, newProperties),
    );

    return properties;
  }

  public getAllProperties(): Property[] {
    const { properties } = this.rentvineIntegrationService.getAllProperties();

    return properties;
  }

  public getAllUnits(): Unit[] {
    return this.rentvineIntegrationService.getAllUnits();
  }

  public getAllLeases(): Lease[] {
    this.logger.warn('`getAllLeases` not supported for rentvine.');
    throw new Error('Not supported.');
  }
}
