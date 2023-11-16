import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateApplicationEnvironmentDto {
  @IsString()
  @IsNotEmpty()
  name: string;
  @IsString()
  @IsNotEmpty()
  description: string;
  @IsNumber()
  @IsNotEmpty()
  application: number;
}
