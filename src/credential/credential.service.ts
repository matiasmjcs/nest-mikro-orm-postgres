import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateCredentialDto } from './dto/create-credential.dto';
import { UpdateCredentialDto } from './dto/update-credential.dto';
import { Credential } from './entities/credential.entity';
import { EntityManager, EntityRepository } from '@mikro-orm/postgresql';
import { InjectRepository } from '@mikro-orm/nestjs';

@Injectable()
export class CredentialService {
  constructor(
    @InjectRepository(Credential)
    private readonly creadencialRepository: EntityRepository<Credential>,
    private readonly em: EntityManager,
  ) {}
  async create(createCredentialDto: CreateCredentialDto) {
    try {
      const created = this.creadencialRepository.create({
        name: createCredentialDto.name,
        description: createCredentialDto.description,
        applicationEnvironment: createCredentialDto.applicationenvironment,
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
      return this.creadencialRepository.findAll();
    } catch (error) {
      return new BadRequestException(error);
    }
  }

  findOne(id: number) {
    try {
      return this.creadencialRepository.findOne(id);
    } catch (error) {
      return new BadRequestException(error);
    }
  }

  update(id: number, updateCredentialDto: UpdateCredentialDto) {
    try {
      return this.creadencialRepository.nativeUpdate(id, {
        description: updateCredentialDto.description,
        name: updateCredentialDto.name,
      });
    } catch (error) {
      return new BadRequestException(error);
    }
  }

  remove(id: number) {
    try {
      return this.creadencialRepository.nativeDelete(id);
    } catch (error) {
      return new BadRequestException(error);
    }
  }
}
