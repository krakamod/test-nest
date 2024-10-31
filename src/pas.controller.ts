import { Controller, Get, Query } from '@nestjs/common';
import { IntegrationType } from './integration-service/integration.strategy';
import { PASService } from './pas.service';

@Controller()
export class PASController {
  constructor(private readonly pasService: PASService) {}

  @Get()
  getHello(): string {
    return this.pasService.getHello();
  }

  @Get('properties')
  getAllProperties(
    @Query('integrationType') integrationType: IntegrationType,
  ): Record<string, string>[] {
    const strategy =
      this.pasService.getIntegrationStrategyByIntegrationType(integrationType);

    return strategy.getAllProperties();
  }

  @Get('units')
  getAllUnits(@Query('integrationId') id: string): Record<string, string>[] {
    const strategy = this.pasService.getIntegrationStrategyByIntegrationId(id);

    return strategy.getAllUnits();
  }
}
