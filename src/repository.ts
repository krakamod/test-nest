import { Injectable } from '@nestjs/common';
import {
  Lease,
  Property,
  Unit,
} from './integration-service/integration.strategy';

@Injectable()
export class Repository {
  public saveProperties(properties: Property[]): Property[] {
    return properties;
  }

  public savePropertiesMeta(
    meta: Record<string, string>,
  ): Record<string, string> {
    return meta;
  }

  public saveLeases(leases: Lease[]): Lease[] {
    return leases;
  }

  public saveUnits(units: Unit[]): Unit[] {
    return units;
  }

  public getProperties(): Property[] {
    return [];
  }

  public getPortfolioId(): string {
    return '1';
  }

  public getLeases(): Lease[] {
    return [];
  }

  public getUnits(): Unit[] {
    return [];
  }
}
