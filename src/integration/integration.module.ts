import { Module } from '@nestjs/common';
import { IntegrationService } from './integration.service';
import { IntegrationController } from './integration.controller';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Integration } from './entities/integration.entity';

@Module({
  imports: [MikroOrmModule.forFeature([Integration])],
  controllers: [IntegrationController],
  providers: [IntegrationService],
})
export class IntegrationModule {}
