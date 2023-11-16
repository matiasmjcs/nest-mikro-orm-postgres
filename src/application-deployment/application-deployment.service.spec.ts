import { Test, TestingModule } from '@nestjs/testing';
import { ApplicationDeploymentService } from './application-deployment.service';

describe('ApplicationDeploymentService', () => {
  let service: ApplicationDeploymentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ApplicationDeploymentService],
    }).compile();

    service = module.get<ApplicationDeploymentService>(ApplicationDeploymentService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
