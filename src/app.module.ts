import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { ApplicationModule } from './application/application.module';

@Module({
  imports: [DatabaseModule, ApplicationModule],
})
export class AppModule {}
