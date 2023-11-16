import {
  Collection,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryKey,
  Property,
} from '@mikro-orm/core';
import { ApplicationEnvironment } from 'src/application-environment/entities/application-environment.entity';
import { Integration } from 'src/integration/entities/integration.entity';

@Entity()
export class ApplicationDeployment {
  @PrimaryKey({ autoincrement: true })
  id: number;

  @Property()
  name: string;

  @Property()
  description: string;

  @ManyToOne(() => ApplicationEnvironment)
  applicationEnvironment: ApplicationEnvironment;

  @OneToMany(() => Integration, (i) => i.applicationDeployment, {
    eager: true,
  })
  integration = new Collection<Integration>(this);
}
