import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateApplicationDto } from './dto/create-application.dto';
import { Application } from './entities/application.entity';
import { InjectRepository } from '@mikro-orm/nestjs';
import { UpdateApplicationDto } from './dto/update-application.dto';
import { EntityManager, EntityRepository } from '@mikro-orm/postgresql';

@Injectable()
export class ApplicationService {
  constructor(
    @InjectRepository(Application)
    private readonly appRepository: EntityRepository<Application>,
    private readonly em: EntityManager,
  ) {}
  async create(createApplicationDto: CreateApplicationDto) {
    try {
      const create = this.appRepository.create(createApplicationDto);
      await this.em.persist(create).flush();
      return {
        msg: 'Successfully created',
      };
    } catch (error) {
      return new BadRequestException(error);
    }
  }

  async findAll() {
    try {
      return await this.appRepository.findAll();
    } catch (error) {
      return new BadRequestException(error);
    }
  }

  async findOne(id: string) {
    try {
      return await this.appRepository.findOne(id);
    } catch (error) {
      return new BadRequestException(error);
    }
  }

  update(id: string, updateApplicationDto: UpdateApplicationDto) {
    try {
      this.appRepository.nativeUpdate(id, {
        description: updateApplicationDto.description,
        name: updateApplicationDto.name,
        client_id: updateApplicationDto.client_id,
      });
      return this.appRepository.findOne(id);
    } catch (error) {
      return new BadRequestException(error);
    }
  }

  async remove(id: string) {
    try {
      return await this.em.getRepository(Application).nativeDelete(id);
    } catch (error) {
      return new BadRequestException(error);
    }
  }
}
