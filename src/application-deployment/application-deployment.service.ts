import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateApplicationDeploymentDto } from './dto/create-application-deployment.dto';
import { UpdateApplicationDeploymentDto } from './dto/update-application-deployment.dto';
import { InjectRepository } from '@mikro-orm/nestjs';
import { EntityManager, EntityRepository } from '@mikro-orm/postgresql';
import { ApplicationDeployment } from './entities/application-deployment.entity';

@Injectable()
export class ApplicationDeploymentService {
  constructor(
    @InjectRepository(ApplicationDeployment)
    private readonly appDeploymentRepository: EntityRepository<ApplicationDeployment>,
    private readonly em: EntityManager,
  ) {}
  async create(createApplicationDeploymentDto: CreateApplicationDeploymentDto) {
    try {
      const created = this.appDeploymentRepository.create({
        name: createApplicationDeploymentDto.name,
        description: createApplicationDeploymentDto.description,
        applicationEnvironment:
          createApplicationDeploymentDto.applicationenvironment,
      });
      await this.em.persist(created).flush();
      return {
        msg: 'Successfully created',
      };
    } catch (error) {
      return new BadRequestException(error);
    }
  }

  findAll() {
    try {
      return this.appDeploymentRepository.findAll();
    } catch (error) {
      return new BadRequestException(error);
    }
  }

  findOne(id: number) {
    try {
      return this.appDeploymentRepository.findOne(id);
    } catch (error) {
      return new BadRequestException(error);
    }
  }

  update(
    id: number,
    updateApplicationDeploymentDto: UpdateApplicationDeploymentDto,
  ) {
    try {
      return this.appDeploymentRepository.nativeUpdate(id, {
        name: updateApplicationDeploymentDto.name,
        description: updateApplicationDeploymentDto.description,
      });
    } catch (error) {
      return new BadRequestException(error);
    }
  }

  remove(id: number) {
    try {
      return this.appDeploymentRepository.nativeDelete(id);
    } catch (error) {
      return new BadRequestException(error);
    }
  }
}
