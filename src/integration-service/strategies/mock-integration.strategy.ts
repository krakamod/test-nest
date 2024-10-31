import { Injectable } from '@nestjs/common';
import { IIntegrationStrategy, Property, Unit } from '../integration.strategy';
import { BaseIntegrationStrategy } from './base-integration.strategy';

@Injectable()
export class MockIntegrationStrategy
  extends BaseIntegrationStrategy
  implements IIntegrationStrategy
{
  public getAllProperties(): Property[] {
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

  public getAllUnits(): Unit[] {
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

  public getAllLeases() {
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

  public syncProperties(): Property[] {
    return [];
  }
}
