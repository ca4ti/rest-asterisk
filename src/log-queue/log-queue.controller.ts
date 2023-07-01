import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { LogQueueService } from './log-queue.service';
import { CreateLogQueueDto } from './dto/create-log-queue.dto';
import { UpdateLogQueueDto } from './dto/update-log-queue.dto';
import { RealIP } from 'nestjs-real-ip';

@Controller('log-queue')
export class LogQueueController {
  constructor(private readonly logQueueService: LogQueueService) {}

  @Post('insert/store')
  create(@Body() req: any, @RealIP() ip: string) {
    return this.logQueueService.create(req, ip);
  }

  @Get()
  findAll() {
    return this.logQueueService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.logQueueService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateLogQueueDto: UpdateLogQueueDto,
  ) {
    return this.logQueueService.update(+id, updateLogQueueDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.logQueueService.remove(+id);
  }
}
