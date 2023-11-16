import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateApplicationEnvironmentDto } from './dto/create-application-environment.dto';
import { UpdateApplicationEnvironmentDto } from './dto/update-application-environment.dto';
import { ApplicationEnvironment } from './entities/application-environment.entity';
import { EntityManager, EntityRepository } from '@mikro-orm/postgresql';
import { InjectRepository } from '@mikro-orm/nestjs';

@Injectable()
export class ApplicationEnvironmentService {
  constructor(
    @InjectRepository(ApplicationEnvironment)
    private readonly appEnvRepository: EntityRepository<ApplicationEnvironment>,
    private readonly em: EntityManager,
  ) {}
  async create(
    createApplicationEnvironmentDto: CreateApplicationEnvironmentDto,
  ) {
    try {
      const created = this.appEnvRepository.create({
        description: createApplicationEnvironmentDto.description,
        name: createApplicationEnvironmentDto.name,
        application: createApplicationEnvironmentDto.application,
      });
      await this.em.persist(created).flush();
      return {
        msg: 'Successfully created',
      };
    } catch (error) {
      return new BadRequestException(error);
    }
  }

  async findAll() {
    try {
      return await this.appEnvRepository.findAll();
    } catch (error) {
      return new BadRequestException(error);
    }
  }

  async findOne(id: number) {
    try {
      return await this.appEnvRepository.findOne(id);
    } catch (error) {
      return new BadRequestException(error);
    }
  }

  async update(
    id: number,
    updateApplicationEnvironmentDto: UpdateApplicationEnvironmentDto,
  ) {
    try {
      return await this.appEnvRepository.nativeUpdate(id, {
        name: updateApplicationEnvironmentDto.name,
        description: updateApplicationEnvironmentDto.description,
      });
    } catch (error) {
      return new BadRequestException(error);
    }
  }

  async remove(id: number) {
    try {
      return await this.appEnvRepository.nativeDelete(id);
    } catch (error) {
      return new BadRequestException(error);
    }
  }
}
