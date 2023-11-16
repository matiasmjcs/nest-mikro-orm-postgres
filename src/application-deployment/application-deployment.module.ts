import { Module } from '@nestjs/common';
import { ApplicationDeploymentService } from './application-deployment.service';
import { ApplicationDeploymentController } from './application-deployment.controller';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { ApplicationDeployment } from './entities/application-deployment.entity';

@Module({
  imports: [MikroOrmModule.forFeature([ApplicationDeployment])],
  controllers: [ApplicationDeploymentController],
  providers: [ApplicationDeploymentService],
})
export class ApplicationDeploymentModule {}
