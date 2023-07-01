import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { QueueMembersService } from './queue-members.service';
import { CreateQueueMembersDto } from './dto/create-queue-members.dto';
import { UpdateQueueMembersDto } from './dto/update-queue-members.dto';
import { QueueMembersI } from './interfaces/queue-members.interfaces';

@Controller('queue-members')
export class QueueMembersController {
  constructor(private readonly QueueMembersService: QueueMembersService) {}

  @Post('insert')
  create(@Body() createQueueMembersDto: CreateQueueMembersDto) {
    return this.QueueMembersService.create(createQueueMembersDto);
  }

  @Get()
  findAll() {
    return this.QueueMembersService.findAll();
  }

  @Post('findBy')
  findOne(@Body() QueueMembers: QueueMembersI) {
    return this.QueueMembersService.findOne(QueueMembers);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateQueueMembersDto: UpdateQueueMembersDto,
  ) {
    return this.QueueMembersService.update(id, updateQueueMembersDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.QueueMembersService.remove(id);
  }


  // --------------------------------------------------

  @Post('require')
  Require(@Body() req: any) {
    return this.QueueMembersService.reqRequire(req);
  }

  @Post('multi')
  Multi(@Body() req: any) {
    return this.QueueMembersService.reqMulti(req);
  }

  @Post('single')
  Single(@Body() QueueMembers: QueueMembersI) {
    return this.QueueMembersService.reqSingle(QueueMembers);
  }

  @Post('update')
  Update(@Param('id') id: string, @Body() updateQueueMembersDto: UpdateQueueMembersDto) {
    return this.QueueMembersService.reqUpdate(id, updateQueueMembersDto);
  }

  @Post('destroy')
  Destroy(@Param('id') id: string) {
    return this.QueueMembersService.reqDestroy(id);
  }


}
