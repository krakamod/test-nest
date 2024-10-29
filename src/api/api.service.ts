import { Injectable } from '@nestjs/common';

type Property = {
  id: string;
  source: string;
};

@Injectable()
export class ApiService {
  getProperties(source: string): Property[] {
    console.log('ApiService');
    console.log('Getting properties from:', source);

    return [
      {
        id: '1',
        source,
      },
    ];
  }
}
