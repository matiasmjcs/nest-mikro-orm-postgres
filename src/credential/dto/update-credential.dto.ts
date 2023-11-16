import { PartialType } from '@nestjs/mapped-types';
import { CreateCredentialDto } from './create-credential.dto';
import { IsOptional } from 'class-validator';

export class UpdateCredentialDto extends PartialType(CreateCredentialDto) {
  @IsOptional()
  name: string;
  @IsOptional()
  description: string;
}
