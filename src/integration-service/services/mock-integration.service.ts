import { Injectable } from '@nestjs/common';
import { Property, Unit } from '../integration.strategy';

@Injectable()
export class MockIntegrationService {
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

  public getAllUnits(): Unit[] {
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
}
