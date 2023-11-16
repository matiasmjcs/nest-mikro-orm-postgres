import { Test, TestingModule } from '@nestjs/testing';
import { ApplicationDeploymentController } from './application-deployment.controller';
import { ApplicationDeploymentService } from './application-deployment.service';

describe('ApplicationDeploymentController', () => {
  let controller: ApplicationDeploymentController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ApplicationDeploymentController],
      providers: [ApplicationDeploymentService],
    }).compile();

    controller = module.get<ApplicationDeploymentController>(ApplicationDeploymentController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
