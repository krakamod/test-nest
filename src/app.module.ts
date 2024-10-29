import { Module } from '@nestjs/common';

import { ApiModule } from './api/api.module';
import { ApiService } from './api/api.service';
import { IntegrationServiceFactory } from './integration-service/integration-service';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [ApiModule],
  controllers: [AppController],
  providers: [
    {
      provide: AppService,
      inject: [ApiService],
      useFactory: (apiService: ApiService) => {
        return new AppService(new IntegrationServiceFactory(apiService));
      },
    },
  ],
})
export class AppModule {}
