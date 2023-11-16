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
import { ApplicationEnvironmentService } from './application-environment.service';
import { CreateApplicationEnvironmentDto } from './dto/create-application-environment.dto';
import { UpdateApplicationEnvironmentDto } from './dto/update-application-environment.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('application-environment')
@Controller('application-environment')
export class ApplicationEnvironmentController {
  constructor(
    private readonly applicationEnvironmentService: ApplicationEnvironmentService,
  ) {}
  @HttpCode(201)
  @Post()
  create(
    @Body() createApplicationEnvironmentDto: CreateApplicationEnvironmentDto,
  ) {
    return this.applicationEnvironmentService.create(
      createApplicationEnvironmentDto,
    );
  }
  @HttpCode(200)
  @Get()
  findAll() {
    return this.applicationEnvironmentService.findAll();
  }
  @HttpCode(200)
  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.applicationEnvironmentService.findOne(+id);
  }
  @HttpCode(200)
  @Patch(':id')
  update(
    @Param('id') id: number,
    @Body() updateApplicationEnvironmentDto: UpdateApplicationEnvironmentDto,
  ) {
    return this.applicationEnvironmentService.update(
      +id,
      updateApplicationEnvironmentDto,
    );
  }
  @HttpCode(200)
  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.applicationEnvironmentService.remove(+id);
  }
}
