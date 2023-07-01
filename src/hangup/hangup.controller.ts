import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { HangupService } from './hangup.service';
import { CreateHangupDto } from './dto/create-hangup.dto';
import { UpdateHangupDto } from './dto/update-hangup.dto';
import { HangupI } from './interfaces/hangup.interfaces';

@Controller('hangup')
export class HangupController {
  constructor(private readonly hangupService: HangupService) {}

  @Post('create')
  create(@Body() createHangupDto: CreateHangupDto) {
    return this.hangupService.create(createHangupDto);
  }

  @Get()
  findAll() {
    return this.hangupService.findAll();
  }

  @Post('findBy')
  findOne(@Body() Hangup: HangupI) {
    return this.hangupService.findOne(Hangup);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateHangupDto: UpdateHangupDto) {
    return this.hangupService.update(id, updateHangupDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.hangupService.remove(id);
  }
}
