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
import { PsTrunkContactsService } from './ps-trunk-contacts.service';
import { CreatePsTrunkContactsDto } from './dto/create-ps-trunk-contacts.dto';
import { UpdatePsTrunkContactsDto } from './dto/update-ps-trunk-contacts.dto';
import { PsTrunkContactsI } from './interfaces/ps-trunk-contacts.interfaces';

@Controller('ps-trunk-contacts')
export class PsTrunkContactsController {
  constructor(private readonly PsTrunkContactsService: PsTrunkContactsService) {}

  @Post('insert')
  create(@Body() createPsTrunkContactsDto: CreatePsTrunkContactsDto) {
    return this.PsTrunkContactsService.create(createPsTrunkContactsDto);
  }

  @Get()
  findAll() {
    return this.PsTrunkContactsService.findAll();
  }

  @Post('findBy')
  findOne(@Body() PsTrunkContacts: PsTrunkContactsI) {
    return this.PsTrunkContactsService.findOne(PsTrunkContacts);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updatePsTrunkContactsDto: UpdatePsTrunkContactsDto,
  ) {
    return this.PsTrunkContactsService.update(id, updatePsTrunkContactsDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.PsTrunkContactsService.remove(id);
  }

  // ---------------------------------------------------------

  @Post('store')
  Store(@Body() data: any) {
    return this.PsTrunkContactsService.reqStore(data);
  }

  @Post('multi')
  Multi(@Body() data: any) {
    return this.PsTrunkContactsService.reqMulti(data);
  }

  @Post('single')
  Single(@Body() PsTrunkContacts: PsTrunkContactsI) {
    return this.PsTrunkContactsService.reqSingle(PsTrunkContacts);
  }

  @All('update')
  Update(@Query('id') id: any, @Body() data: any) {
    return this.PsTrunkContactsService.reqUpdate(data, id);
  }

  @Post('destroy')
  Destroy(@Body() createPsTrunkContactsDto: CreatePsTrunkContactsDto) {
    return this.PsTrunkContactsService.reqDestroy(createPsTrunkContactsDto);
  }
}
