import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { ApplicationModule } from './application/application.module';
import { ApplicationEnvironmentModule } from './application-environment/application-environment.module';
import { ApplicationDeploymentModule } from './application-deployment/application-deployment.module';
import { CredentialModule } from './credential/credential.module';
import { IntegrationModule } from './integration/integration.module';

@Module({
  imports: [
    DatabaseModule,
    ApplicationModule,
    ApplicationEnvironmentModule,
    ApplicationDeploymentModule,
    CredentialModule,
    IntegrationModule,
  ],
})
export class AppModule {}
