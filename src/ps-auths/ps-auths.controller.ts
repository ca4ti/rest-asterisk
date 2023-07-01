import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PsAuthsService } from './ps-auths.service';
import { CreatePsAuthsDto } from './dto/create-ps-auths.dto';
import { UpdatePsAuthsDto } from './dto/update-ps-auths.dto';
import { PsAuthsI } from './interfaces/ps-auths.interfaces';

@Controller('ps-auths')
export class PsAuthsController {
  constructor(private readonly PsAuthsService: PsAuthsService) {}

  @Post('insert')
  create(@Body() createPsAuthsDto: CreatePsAuthsDto) {
    return this.PsAuthsService.create(createPsAuthsDto);
  }

  @Get()
  findAll() {
    return this.PsAuthsService.findAll();
  }

  @Post('findBy')
  findOne(@Body() PsAuths: PsAuthsI) {
    return this.PsAuthsService.findOne(PsAuths);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePsAuthsDto: UpdatePsAuthsDto) {
    return this.PsAuthsService.update(id, updatePsAuthsDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.PsAuthsService.remove(id);
  }


  // --------------------------------------------------


  @Post('store')
  Store(@Body() createPsAuthsDto: CreatePsAuthsDto) {
    return this.PsAuthsService.reqStore(createPsAuthsDto);
  }

  @Post('multi')
  Multi() {
    return this.PsAuthsService.reqMulti();
  }

  @Post('single')
  Single(@Body() PsAuths: PsAuthsI) {
    return this.PsAuthsService.reqSingle(PsAuths);
  }

  @Post('update')
  Update(@Param('id') id: string, @Body() updatePsAuthsDto: UpdatePsAuthsDto) {
    return this.PsAuthsService.reqUpdate(id, updatePsAuthsDto);
  }

  @Post('destroy')
  Destroy(@Param('id') id: string) {
    return this.PsAuthsService.reqDestroy(id);
  }

}
