import { Test, TestingModule } from '@nestjs/testing';
import { ApplicationEnvironmentController } from './application-environment.controller';
import { ApplicationEnvironmentService } from './application-environment.service';

describe('ApplicationEnvironmentController', () => {
  let controller: ApplicationEnvironmentController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ApplicationEnvironmentController],
      providers: [ApplicationEnvironmentService],
    }).compile();

    controller = module.get<ApplicationEnvironmentController>(
      ApplicationEnvironmentController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
