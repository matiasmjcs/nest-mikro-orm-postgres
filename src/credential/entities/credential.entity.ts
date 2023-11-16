import { Entity, ManyToOne, PrimaryKey, Property } from '@mikro-orm/core';
import { ApplicationEnvironment } from 'src/application-environment/entities/application-environment.entity';

@Entity()
export class Credential {
  @PrimaryKey()
  id: number;

  @Property()
  name: string;

  @Property()
  description: string;

  @ManyToOne(() => ApplicationEnvironment)
  applicationEnvironment: ApplicationEnvironment;
}
