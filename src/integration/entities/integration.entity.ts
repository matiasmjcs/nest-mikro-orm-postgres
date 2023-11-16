import { Entity, ManyToOne, PrimaryKey, Property } from '@mikro-orm/core';
import { ApplicationDeployment } from 'src/application-deployment/entities/application-deployment.entity';

@Entity()
export class Integration {
  @PrimaryKey()
  id!: number;

  @Property()
  name: string;

  @Property()
  description: string;

  @ManyToOne(() => ApplicationDeployment)
  applicationDeployment: ApplicationDeployment;
}
