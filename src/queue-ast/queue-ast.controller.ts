import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { QueueAstService } from './queue-ast.service';
import { CreateQueueAstDto } from './dto/create-queue-ast.dto';
import { UpdateQueueAstDto } from './dto/update-queue-ast.dto';
import { QueueAstI } from './interfaces/queue-ast.interfaces';

@Controller('queue-ast')
export class QueueAstController {
  constructor(private readonly QueueAstService: QueueAstService) {}

  @Post('insert')
  create(@Body() createQueueAstDto: CreateQueueAstDto) {
    return this.QueueAstService.create(createQueueAstDto);
  }

  @Get()
  findAll() {
    return this.QueueAstService.findAll();
  }

  @Post('findBy')
  findOne(@Body() QueueAst: QueueAstI) {
    return this.QueueAstService.findOne(QueueAst);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateQueueAstDto: UpdateQueueAstDto,
  ) {
    return this.QueueAstService.update(id, updateQueueAstDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.QueueAstService.remove(id);
  }
}
