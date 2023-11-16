import {
  Collection,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryKey,
  Property,
} from '@mikro-orm/core';
import { ApplicationDeployment } from 'src/application-deployment/entities/application-deployment.entity';
import { Application } from 'src/application/entities/application.entity';
import { Credential } from 'src/credential/entities/credential.entity';

@Entity()
export class ApplicationEnvironment {
  @PrimaryKey({ autoincrement: true })
  id: number;

  @Property()
  name: string;

  @Property()
  description: string;

  @ManyToOne(() => Application)
  application: Application;

  @OneToMany(() => Credential, (c) => c.applicationEnvironment, {
    eager: true,
  })
  credential = new Collection<Credential>(this);

  @OneToMany(() => ApplicationDeployment, (a) => a.applicationEnvironment, {
    eager: true,
  })
  applicationDeployment = new Collection<ApplicationDeployment>(this);
}
