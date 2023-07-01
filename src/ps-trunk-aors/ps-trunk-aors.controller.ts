import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  All,
  Query,
} from '@nestjs/common';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { PsTrunkAorsService } from './ps-trunk-aors.service';
import { CreatePsTrunkAorsDto } from './dto/create-ps-trunk-aors.dto';
import { UpdatePsTrunkAorsDto } from './dto/update-ps-trunk-aors.dto';
import { PsTrunkAorsI } from './interfaces/ps-trunk-aors.interfaces';

@Controller('ps-trunk-aors')
export class PsTrunkAorsController {
  constructor(private readonly PsTrunkAorsService: PsTrunkAorsService) {}

  @Post('insert')
  create(@Body() createPsTrunkAorsDto: CreatePsTrunkAorsDto) {
    return this.PsTrunkAorsService.create(createPsTrunkAorsDto);
  }
  
  @Get()
  findAll() {
    return this.PsTrunkAorsService.findAll();
  }

  @Post('findBy')
  findOne(@Body() PsTrunkAors: PsTrunkAorsI) {
    return this.PsTrunkAorsService.findOne(PsTrunkAors);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePsTrunkAorsDto: UpdatePsTrunkAorsDto) {
    return this.PsTrunkAorsService.update(id, updatePsTrunkAorsDto);
  }

  @Delete(':id')
  remove(@Param('id') id: any) {
    return this.PsTrunkAorsService.remove(id);
  }

  // ---------------------------------------------------------

  @Post('store')
  Store(@Body() createPsTrunkAorsDto: CreatePsTrunkAorsDto) {
    return this.PsTrunkAorsService.reqStore(createPsTrunkAorsDto);
  }

  @Post('multi')
  Multi() {
    return this.PsTrunkAorsService.reqMulti();
  }

  @Post('single')
  Single(@Body() PsTrunkAors: PsTrunkAorsI) {
    return this.PsTrunkAorsService.reqSingle(PsTrunkAors);
  }

  @All('update')
  Update(@Query('id') id: any, @Body() data: any) {
    return this.PsTrunkAorsService.reqUpdate(id, data);
  }

  @Delete('destroy')
  Remove(@Param('id') id: string) {
    return this.PsTrunkAorsService.reqDestroy(id);
  }

}
