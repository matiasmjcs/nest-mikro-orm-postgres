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
import { ApplicationDeploymentService } from './application-deployment.service';
import { CreateApplicationDeploymentDto } from './dto/create-application-deployment.dto';
import { UpdateApplicationDeploymentDto } from './dto/update-application-deployment.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('application-deployment')
@Controller('application-deployment')
export class ApplicationDeploymentController {
  constructor(
    private readonly applicationDeploymentService: ApplicationDeploymentService,
  ) {}
  @HttpCode(201)
  @Post()
  create(
    @Body() createApplicationDeploymentDto: CreateApplicationDeploymentDto,
  ) {
    return this.applicationDeploymentService.create(
      createApplicationDeploymentDto,
    );
  }
  @HttpCode(200)
  @Get()
  findAll() {
    return this.applicationDeploymentService.findAll();
  }
  @HttpCode(200)
  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.applicationDeploymentService.findOne(+id);
  }
  @HttpCode(200)
  @Patch(':id')
  update(
    @Param('id') id: number,
    @Body() updateApplicationDeploymentDto: UpdateApplicationDeploymentDto,
  ) {
    return this.applicationDeploymentService.update(
      +id,
      updateApplicationDeploymentDto,
    );
  }
  @HttpCode(200)
  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.applicationDeploymentService.remove(+id);
  }
}
