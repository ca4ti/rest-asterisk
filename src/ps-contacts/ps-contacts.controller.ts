import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  All,
  Req,
  Query,
} from '@nestjs/common';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { PsContactsService } from './ps-contacts.service';
import { CreatePsContactsDto } from './dto/create-ps-contacts.dto';
import { UpdatePsContactsDto } from './dto/update-ps-contacts.dto';
import { PsContactsI } from './interfaces/ps-contacts.interfaces';

@Controller('ps-contacts')
export class PsContactsController {
  constructor(private readonly PsContactsService: PsContactsService) {}

  @Post('insert')
  create(@Body() createPsContactsDto: CreatePsContactsDto) {
    return this.PsContactsService.create(createPsContactsDto);
  }

  @Get()
  findAll() {
    return this.PsContactsService.findAll();
  }

  @Post('findBy')
  findOne(@Body() PsContacts: PsContactsI) {
    return this.PsContactsService.findOne(PsContacts);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updatePsContactsDto: UpdatePsContactsDto,
  ) {
    return this.PsContactsService.update(id, updatePsContactsDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.PsContactsService.remove(id);
  }

  // ---------------------------------------------------------

  @Post('store')
  Store(@Body() data: any) {
    return this.PsContactsService.reqStore(data);
  }

  @Post('multi')
  Multi(@Body() data: any) {
    return this.PsContactsService.reqMulti(data);
  }

  @Post('single')
  Single(@Body() psContacts: PsContactsI) {
    return this.PsContactsService.reqSingle(psContacts);
  }

  @All('update')
  Update(@Query('id') id: any, @Body() data: any) {
    return this.PsContactsService.reqUpdate(data, id);
  }

  @Post('destroy')
  Destroy(@Body() createPsContactsDto: CreatePsContactsDto) {
    return this.PsContactsService.reqDestroy(createPsContactsDto);
  }
}
