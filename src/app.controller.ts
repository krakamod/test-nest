import { Controller, Get, Query } from '@nestjs/common';
import { IntegrationType } from './integration-service/integration-service';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('properties')
  getAllProperties(
    @Query('integrationType') integrationType: IntegrationType,
  ): Record<string, string>[] {
    return this.appService.getAllProperties(integrationType);
  }
}
