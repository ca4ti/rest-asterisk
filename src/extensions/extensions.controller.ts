import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ExtensionsService } from './extensions.service';
import { CreateExtensionsDto } from './dto/create-extensions.dto';
import { UpdateExtensionsDto } from './dto/update-extensions.dto';
import { ExtensionsI } from './interfaces/extensions.interfaces';

@Controller('extensions')
export class ExtensionsController {
  constructor(private readonly extensionsService: ExtensionsService) {}

  @Post('create')
  create(@Body() createExtensionDto: CreateExtensionsDto) {
    return this.extensionsService.create(createExtensionDto);
  }

  @Get()
  findAll() {
    return this.extensionsService.findAll();
  }

  @Post('findBy')
  findOne(@Body() extensions: ExtensionsI) {
    return this.extensionsService.findOne(extensions);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateExtensionDto: UpdateExtensionsDto,
  ) {
    return this.extensionsService.update(id, updateExtensionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.extensionsService.remove(id);
  }
}
