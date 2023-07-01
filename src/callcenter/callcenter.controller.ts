import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CallcenterService } from './callcenter.service';
import { CreateCallcenterDto } from './dto/create-callcenter.dto';
import { UpdateCallcenterDto } from './dto/update-callcenter.dto';
import { CallcenterI } from './interfaces/callcenter.interfaces';

@Controller('callcenter')
export class CallcenterController {
  constructor(private readonly callcenterService: CallcenterService) {}

  @Post('create')
  create(@Body() createCallcenterDto: CreateCallcenterDto) {
    return this.callcenterService.create(createCallcenterDto);
  }

  @Get()
  findAll() {
    return this.callcenterService.findAll();
  }

  @Post('findBy')
  findOne(@Body() callcenter: CallcenterI) {
    return this.callcenterService.findOne(callcenter);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCallcenterDto: UpdateCallcenterDto,
  ) {
    return this.callcenterService.update(id, updateCallcenterDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.callcenterService.remove(id);
  }
}
