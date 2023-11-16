import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateIntegrationDto } from './dto/create-integration.dto';
import { UpdateIntegrationDto } from './dto/update-integration.dto';
import { Integration } from './entities/integration.entity';
import { EntityManager, EntityRepository } from '@mikro-orm/postgresql';
import { InjectRepository } from '@mikro-orm/nestjs';

@Injectable()
export class IntegrationService {
  constructor(
    @InjectRepository(Integration)
    private readonly integrationRepository: EntityRepository<Integration>,
    private readonly em: EntityManager,
  ) {}
  async create(createIntegrationDto: CreateIntegrationDto) {
    try {
      const created = this.integrationRepository.create({
        name: createIntegrationDto.name,
        description: createIntegrationDto.description,
        applicationDeployment: createIntegrationDto.applicationdeployment,
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
      return this.integrationRepository.findAll();
    } catch (error) {
      return new BadRequestException(error);
    }
  }

  findOne(id: number) {
    try {
      return this.integrationRepository.findOne(id);
    } catch (error) {
      return new BadRequestException(error);
    }
  }

  update(id: number, updateIntegrationDto: UpdateIntegrationDto) {
    try {
      return this.integrationRepository.nativeUpdate(id, {
        name: updateIntegrationDto.name,
        description: updateIntegrationDto.description,
      });
    } catch (error) {
      return new BadRequestException(error);
    }
  }

  remove(id: number) {
    try {
      return this.integrationRepository.nativeDelete(id);
    } catch (error) {
      return new BadRequestException(error);
    }
  }
}
