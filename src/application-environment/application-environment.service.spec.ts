import { Test, TestingModule } from '@nestjs/testing';
import { ApplicationEnvironmentService } from './application-environment.service';

describe('ApplicationEnvironmentService', () => {
  let service: ApplicationEnvironmentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ApplicationEnvironmentService],
    }).compile();

    service = module.get<ApplicationEnvironmentService>(ApplicationEnvironmentService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
