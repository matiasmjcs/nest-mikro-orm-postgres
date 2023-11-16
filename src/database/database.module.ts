import { MikroOrmModule, logger } from '@mikro-orm/nestjs';
import { SqlHighlighter } from '@mikro-orm/sql-highlighter';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { Application } from 'src/application/entities/application.entity';
@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MikroOrmModule.forRoot({
      entities: [Application],
      type: 'postgresql',
      port: 5432,
      user: process.env.USER_DB,
      password: process.env.PASSWORD,
      dbName: process.env.POSTGRES_DB,
      highlighter: new SqlHighlighter(),
      debug: true,
      logger: logger.log.bind(logger),
      persistOnCreate: true,
    }),
    MikroOrmModule.forFeature({
      entities: [Application],
    }),
  ],
  exports: [MikroOrmModule],
})
export class DatabaseModule {}
