import { PartialType } from '@nestjs/mapped-types';
import { CreateApplicationEnvironmentDto } from './create-application-environment.dto';
import { IsOptional } from 'class-validator';

export class UpdateApplicationEnvironmentDto extends PartialType(
  CreateApplicationEnvironmentDto,
) {
  @IsOptional()
  name: string;
  @IsOptional()
  description: string;
}
