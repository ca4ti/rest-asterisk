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
import { PsAorsService } from './ps-aors.service';
import { CreatePsAorsDto } from './dto/create-ps-aors.dto';
import { UpdatePsAorsDto } from './dto/update-ps-aors.dto';
import { PsAorsI } from './interfaces/ps-aors.interfaces';

@Controller('ps-aors')
export class PsAorsController {
  constructor(private readonly PsAorsService: PsAorsService) {}

  @Post('insert')
  create(@Body() createPsAorsDto: CreatePsAorsDto) {
    return this.PsAorsService.create(createPsAorsDto);
  }
  
  @Get()
  findAll() {
    return this.PsAorsService.findAll();
  }

  @Post('findBy')
  findOne(@Body() PsAors: PsAorsI) {
    return this.PsAorsService.findOne(PsAors);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePsAorsDto: UpdatePsAorsDto) {
    return this.PsAorsService.update(id, updatePsAorsDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.PsAorsService.remove(id);
  }

  // ---------------------------------------------------------

  @Post('store')
  Store(@Body() createPsAorsDto: CreatePsAorsDto) {
    return this.PsAorsService.reqStore(createPsAorsDto);
  }

  @Post('multi')
  Multi() {
    return this.PsAorsService.reqMulti();
  }

  @Post('single')
  Single(@Body() PsAors: PsAorsI) {
    return this.PsAorsService.reqSingle(PsAors);
  }

  @All('update')
  Update(@Query('id') id: any, @Body() data: any) {
    return this.PsAorsService.reqUpdate(id, data);
  }

  @Delete('destroy')
  Remove(@Param('id') id: string) {
    return this.PsAorsService.reqDestroy(id);
  }

}
