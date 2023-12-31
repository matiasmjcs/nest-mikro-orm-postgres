import {
  Collection,
  Entity,
  OneToMany,
  PrimaryKey,
  Property,
} from '@mikro-orm/core';
import { ApplicationEnvironment } from 'src/application-environment/entities/application-environment.entity';

@Entity()
export class Application {
  @PrimaryKey({ autoincrement: true })
  id: number;

  @Property()
  name: string;

  @Property()
  description: string;

  @Property()
  client_id: string;

  @OneToMany(() => ApplicationEnvironment, (a) => a.application, {
    eager: true,
  })
  applicationsEnvironment = new Collection<ApplicationEnvironment>(this);
}
