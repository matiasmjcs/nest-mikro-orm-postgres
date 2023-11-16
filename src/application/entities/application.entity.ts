import { Entity, PrimaryKey, Property } from '@mikro-orm/core';

@Entity({ tableName: 'application' })
export class Application {
  @PrimaryKey({ autoincrement: true })
  id: string;

  @Property()
  name: string;

  @Property()
  description: string;

  @Property()
  client_id: string;
}
