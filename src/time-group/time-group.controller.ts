import {
  Controller,
  Post,
  Body,
  Param,
  Patch,
  Get,
  Delete,
} from '@nestjs/common';
import { TimeGroupService } from './time-group.service';
import { TimeGroupI } from './interfaces/time-group.interface';
import { CreateTimeGroupDto } from './dto/create-time-group.dto';
import { UpdateTimeGroupDto } from './dto/update-time-group.dto';

@Controller('time-group')
export class TimeGroupController {
  constructor(private readonly timeGroupService: TimeGroupService) {}

  @Post('create')
  create(@Body() createTimeGroupDto: CreateTimeGroupDto) {
    return this.timeGroupService.create(createTimeGroupDto);
  }

  @Get()
  findAll() {
    return this.timeGroupService.findAll();
  }

  @Post('findBy')
  findOne(@Body() TimeGroup: TimeGroupI) {
    return this.timeGroupService.findOne(TimeGroup);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateTimeGroupDto: UpdateTimeGroupDto,
  ) {
    return this.timeGroupService.update(id, updateTimeGroupDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.timeGroupService.remove(id);
  }
}
