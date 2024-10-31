import { Property } from '../integration.strategy';

export abstract class BaseIntegrationStrategy {
  constructor(protected source: string) {}

  public syncProperties(
    existingProperties: Property[],
    newProperties: Property[],
  ): Property[] {
    return [...existingProperties, ...newProperties];
  }
}
