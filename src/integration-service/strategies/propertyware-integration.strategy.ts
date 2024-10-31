import { Injectable, Logger } from '@nestjs/common';
import { Repository } from '../../repository';
import {
  IIntegrationStrategy,
  IntegrationType,
  Lease,
} from '../integration.strategy';
import { Property, Unit } from '../integration.strategy';
import { BaseIntegrationStrategy } from './base-integration.strategy';
import { PropertywareIntegrationService } from '../services/propertyware-integration.service';

@Injectable()
export class PropertywareIntegrationStrategy
  extends BaseIntegrationStrategy
  implements IIntegrationStrategy
{
  constructor(
    private readonly repository: Repository,
    private readonly propertywareIntegrationService: PropertywareIntegrationService,
  ) {
    super(IntegrationType.Propertyware);
  }

  private readonly logger = new Logger(PropertywareIntegrationStrategy.name);

  public syncProperties(): Property[] {
    const existingProperties = this.repository.getProperties();
    const portfolioId = this.repository.getPortfolioId();
    const newProperties =
      this.propertywareIntegrationService.getAllProperties(portfolioId);

    return this.repository.saveProperties(
      super.syncProperties(existingProperties, newProperties),
    );
  }

  public getAllProperties(): Property[] {
    const portfolioId = this.repository.getPortfolioId();

    return this.propertywareIntegrationService.getAllProperties(portfolioId);
  }

  public getAllUnits(): Unit[] {
    return this.propertywareIntegrationService.getAllUnits();
  }

  public getAllLeases(): Lease[] {
    return [];
  }
}
