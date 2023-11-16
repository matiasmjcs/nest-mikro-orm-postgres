import { Module } from '@nestjs/common';
import { CredentialService } from './credential.service';
import { CredentialController } from './credential.controller';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Credential } from './entities/credential.entity';

@Module({
  imports: [MikroOrmModule.forFeature([Credential])],
  controllers: [CredentialController],
  providers: [CredentialService],
})
export class CredentialModule {}
