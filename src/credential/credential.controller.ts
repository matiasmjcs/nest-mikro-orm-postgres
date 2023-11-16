import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpCode,
} from '@nestjs/common';
import { CredentialService } from './credential.service';
import { CreateCredentialDto } from './dto/create-credential.dto';
import { UpdateCredentialDto } from './dto/update-credential.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('credential')
@Controller('credential')
export class CredentialController {
  constructor(private readonly credentialService: CredentialService) {}
  @HttpCode(201)
  @Post()
  create(@Body() createCredentialDto: CreateCredentialDto) {
    return this.credentialService.create(createCredentialDto);
  }
  @HttpCode(200)
  @Get()
  findAll() {
    return this.credentialService.findAll();
  }
  @HttpCode(200)
  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.credentialService.findOne(id);
  }
  @HttpCode(200)
  @Patch(':id')
  update(
    @Param('id') id: number,
    @Body() updateCredentialDto: UpdateCredentialDto,
  ) {
    return this.credentialService.update(id, updateCredentialDto);
  }
  @HttpCode(200)
  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.credentialService.remove(id);
  }
}
