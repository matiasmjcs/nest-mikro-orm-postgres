import { Module } from '@nestjs/common';
import { ApplicationEnvironmentService } from './application-environment.service';
import { ApplicationEnvironmentController } from './application-environment.controller';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { ApplicationEnvironment } from './entities/application-environment.entity';

@Module({
  imports: [MikroOrmModule.forFeature([ApplicationEnvironment])],
  controllers: [ApplicationEnvironmentController],
  providers: [ApplicationEnvironmentService],
})
export class ApplicationEnvironmentModule {}
