import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MikroOrmModule.forRoot({
      entities: ['./dist/**/*.entity.js'],
      entitiesTs: ['./src/**/*.entity.ts'],
      type: 'postgresql',
      port: 5432,
      user: process.env.USER_DB,
      password: process.env.PASSWORD,
      dbName: process.env.POSTGRES_DB,
      debug: true,
      persistOnCreate: true,
    }),
  ],
})
export class DatabaseModule {}
