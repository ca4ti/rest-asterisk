import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ExtensionsEmergencyService } from './extensions-emergency.service';
import { CreateExtensionsEmergencyDto } from './dto/create-extensions-emergency.dto';
import { UpdateExtensionsEmergencyDto } from './dto/update-extensions-emergency.dto';
import { ExtensionsEmergencyI } from './interfaces/extensions-emergency.interfaces';

@Controller('extensions-emergency')
export class ExtensionsEmergencyController {
  constructor(private readonly extensionsService: ExtensionsEmergencyService) {}

  @Post('create')
  create(@Body() createExtensionDto: CreateExtensionsEmergencyDto) {
    return this.extensionsService.create(createExtensionDto);
  }

  @Get()
  findAll() {
    return this.extensionsService.findAll();
  }

  @Post('findBy')
  findOne(@Body() extensions: ExtensionsEmergencyI) {
    return this.extensionsService.findOne(extensions);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateExtensionDto: UpdateExtensionsEmergencyDto,
  ) {
    return this.extensionsService.update(id, updateExtensionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.extensionsService.remove(id);
  }
}
