import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { QueueService } from './queue.service';
import { CreateQueueDto } from './dto/create-queue.dto';
import { UpdateQueueDto } from './dto/update-queue.dto';
import { QueueI } from './interfaces/queue.interfaces';

@Controller('queue')
export class QueueController {
  constructor(private readonly queueService: QueueService) {}

  @Post('insert')
  create(@Body() createQueueDto: CreateQueueDto) {
    return this.queueService.create(createQueueDto);
  }

  @Get()
  findAll() {
    return this.queueService.findAll();
  }

  @Post('findBy')
  findOne(@Body() queue: QueueI) {
    return this.queueService.findOne(queue);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateQueueDto: UpdateQueueDto) {
    return this.queueService.update(id, updateQueueDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.queueService.remove(id);
  }
  

  // --------------------------------------------------

  @Post('store')
  Store(@Body() createQueueDto: CreateQueueDto) {
    return this.queueService.reqStore(createQueueDto);
  }

  @Post('multi')
  Multi() {
    return this.queueService.reqMulti();
  }

  @Post('single')
  Single(@Body() queue: QueueI) {
    return this.queueService.reqSingle(queue);
  }

  @Post('update')
  Update(@Param('id') id: string, @Body() updateQueueDto: UpdateQueueDto) {
    return this.queueService.reqUpdate(id, updateQueueDto);
  }

  @Post('destroy')
  Destroy(@Param('id') id: string) {
    return this.queueService.reqDestroy(id);
  }
}
