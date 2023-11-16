import { PartialType } from '@nestjs/mapped-types';
import { CreateApplicationDeploymentDto } from './create-application-deployment.dto';
import { IsOptional } from 'class-validator';

export class UpdateApplicationDeploymentDto extends PartialType(
  CreateApplicationDeploymentDto,
) {
  @IsOptional()
  name: string;
  @IsOptional()
  description: string;
}
