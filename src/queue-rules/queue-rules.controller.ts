import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { QueueRulesService } from './queue-rules.service';
import { CreateQueueRulesDto } from './dto/create-queue-rules.dto';
import { UpdateQueueRulesDto } from './dto/update-queue-rules.dto';
import { QueueRulesI } from './interfaces/queue-rules.interfaces';

@Controller('queue-rules')
export class QueueRulesController {
  constructor(private readonly QueueRulesService: QueueRulesService) {}

  @Post('insert')
  create(@Body() createQueueRulesDto: CreateQueueRulesDto) {
    return this.QueueRulesService.create(createQueueRulesDto);
  }

  @Get()
  findAll() {
    return this.QueueRulesService.findAll();
  }

  @Post('findBy')
  findOne(@Body() QueueRules: QueueRulesI) {
    return this.QueueRulesService.findOne(QueueRules);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateQueueRulesDto: UpdateQueueRulesDto,
  ) {
    return this.QueueRulesService.update(id, updateQueueRulesDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.QueueRulesService.remove(id);
  }


  // --------------------------------------------------


  @Post('store')
  Store(@Body() createQueueRulesDto: CreateQueueRulesDto) {
    return this.QueueRulesService.reqStore(createQueueRulesDto);
  }

  @Post('multi')
  Multi() {
    return this.QueueRulesService.reqMulti();
  }

  @Post('single')
  Single(@Body() QueueRules: QueueRulesI) {
    return this.QueueRulesService.reqSingle(QueueRules);
  }

  @Post('update')
  Update(@Param('id') id: string, @Body() updateQueueRulesDto: UpdateQueueRulesDto) {
    return this.QueueRulesService.reqUpdate(id, updateQueueRulesDto);
  }

  @Post('destroy')
  Destroy(@Param('id') id: string) {
    return this.QueueRulesService.reqDestroy(id);
  }

}
