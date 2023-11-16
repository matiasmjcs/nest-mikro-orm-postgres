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
import { IntegrationService } from './integration.service';
import { CreateIntegrationDto } from './dto/create-integration.dto';
import { UpdateIntegrationDto } from './dto/update-integration.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('integration')
@Controller('integration')
export class IntegrationController {
  constructor(private readonly integrationService: IntegrationService) {}
  @HttpCode(201)
  @Post()
  create(@Body() createIntegrationDto: CreateIntegrationDto) {
    return this.integrationService.create(createIntegrationDto);
  }
  @HttpCode(200)
  @Get()
  findAll() {
    return this.integrationService.findAll();
  }
  @HttpCode(200)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.integrationService.findOne(+id);
  }
  @HttpCode(200)
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateIntegrationDto: UpdateIntegrationDto,
  ) {
    return this.integrationService.update(+id, updateIntegrationDto);
  }
  @HttpCode(200)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.integrationService.remove(+id);
  }
}
