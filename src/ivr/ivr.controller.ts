import {
  Controller,
  Post,
  Body,
  Get,
  Patch,
  Delete,
  Param,
} from '@nestjs/common';
import { IvrService } from './ivr.service';
import { IvrI } from './interfaces/ivr.interface';
import { UpdateIvrDto } from './dto/update-ivr.dto';
import { CreateIvrDto } from './dto/create-ivr.dto';

@Controller('ivr')
export class IvrController {
  constructor(private readonly ivrService: IvrService) {}

  @Post('create')
  create(@Body() createIvrDto: CreateIvrDto) {
    return this.ivrService.create(createIvrDto);
  }

  @Get()
  findAll() {
    return this.ivrService.findAll();
  }

  @Post('findBy')
  findOne(@Body() Ivr: IvrI) {
    return this.ivrService.findOne(Ivr);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateIvrDto: UpdateIvrDto) {
    return this.ivrService.update(id, updateIvrDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ivrService.remove(id);
  }
}
