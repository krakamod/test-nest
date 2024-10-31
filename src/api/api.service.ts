import { Injectable, Logger } from '@nestjs/common';

type Property = {
  id: string;
  source: string;
};

@Injectable()
export class ApiService {
  private readonly logger = new Logger(ApiService.name);

  getProperties(source: string, portgolioId?: string): Property[] {
    this.logger.log(`Portfolio ID: '${portgolioId}'`);

    return [
      {
        id: '1',
        source,
      },
    ];
  }
}
